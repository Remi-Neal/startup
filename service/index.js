const express = require('express');
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

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

function unauthorized(res) {
    res.status(401).send({ msg: 'Unauthorized' });
}


// Crate new user
apiRouter.post('/auth/create', async (req, res) => {
    const userName = req.body.user;
    const password = req.body.password;
    if(userName in users) {
        res.status(409).send({ msg: 'Existing user' });
        return;
    } 
    const user = { userName: userName, password: password, token: uuid.v4(), savedSearches: new Set() };
    console.log("User created: ");
    console.log(user)
    users[user.userName] = user;
    res.send({ token: user.token });
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    if (user in users && users[user]['password'] === password) {
        users[user]['token'] = uuid.v4();
        console.log('Logging in: ' + user + ' with token: ' + users[user]['token']);
        res.send({ authenticated: true, token: users[user]['token'] });
    } else if (user in users && users[user]['token']) {
        res.send({ authenticated: true, token: users[user]['token'] });
    } else {
        res.send({ msg: 'Invalid login' });
    }
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = req.body.user;
    if (users[user] && users[user]['token']) {
        console.log('Logging out:', user);
        delete users[user]['token'];
        res.status(204).end();
        return;
    } else if (user in users && !users[user]['token']) {
        return
    }
    unauthorized(res);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

/*}
// Error handling middleware
app.use(function (err, req, res, next) {
    res.status(500).send({type: err.name, message: err.message});
  });
*/
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