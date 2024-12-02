const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


let users = {};


// Crate new user
apiRouter.post('/auth/crate', (req, res) => {
    const user = users[req.body.user];
    if(user) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = { userName: req.body.user, password: req.body.password, token: uuid.v4(), savedSearches: new Set() };
        users[user.userName] = user;
        res.send({ token: user.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// The above ^^^ borrowed from the example code and is not my own work

// Save a search for a user
apiRouter.post('/searches/save', (req, res) => {
    const userName = req.body.user;
    if(userName in users) {
        users[userName][savedSearches].add(req.body.search);
        res.status(204).end();
    }
    savedSearches.add(req.body.search);
    res.status(204).end();
});

// Get saved searches for a user
apiRouter.get('/searches/get', (req, res) => {
    const userName = req.body.user;
    if(userName in users) {
        res.send(users[userName].savedSearches);
    }
    res.send(savedSearches);
});