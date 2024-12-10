const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const authCookieName = 'accessToken';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// JSON body parsing using built-in middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.set('trust proxy', true);

let users = {};
let searches = [];

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/', (_req, res) => {
    res.send({ msg: 'Service is running' });
});

apiRouter.get('/searches', (_req, res) => {
    res.send({ msg: 'And I can use extentions' });
});

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
}


// Crate new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.user)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await DB.createUser(req.body.user, req.body.password);
    
        // Set the cookie
        setAuthCookie(res, user.token);
    
        res.send({
        userName: user.userName,
        });
    }   
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.userName);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ userName: user.userName });
            return;
        }
    } 
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Check cookie token
apiRouter.get('/auth/check', async (req, res) => {
    console.log(req.cookies);
    const authToken = req.cookies["accessToken"];
    let user = null;
    if (authToken) {
        user = await DB.getUserByToken(authToken);
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
    if (user) {
        res.send({ state: "TRUE", userName: user.userName });
    } else {
        res.send({ state: "FALSE" });
    }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// The above ^^^ borrowed from the example code and is not my own work

// Save a search for a user
apiRouter.post('/search/save', async (req, res) => {
    const userName = req.body.user;
    const search = req.body.search;
    if(userName in users) {
        if(search) {
            users[userName][String(Object.keys(users[userName]).length + 1)] = search;
            console.log(users[userName]);
            res.status(204).end();
        } else {
           return
        }
    } else {
        if(search) {
            users[userName] = {};
            users[userName]['1'] = search;
            console.log(users[userName]);
            res.status(204).end();
        } else {
            return
        }
    }
    });

// Get saved searches for a user
apiRouter.get('/search/get', (req, res) => {
    console.log(users);
    res.send(users);
});

// Delete a saved search for a user
apiRouter.delete('/search/delete', (req, res) => {
    const userName = req.body.user;
    const search = req.body.search;
    if(userName in users) {
        users[userName][searches].delete(search);
        res.status(204).end();
    } else {
        res.status(404).send({ msg: 'Search not found' });
    }
});