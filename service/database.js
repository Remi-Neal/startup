const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('codexVivit');
const userCollection = db.collection('user');
const savedSearchesCollection = db.collection('savedSearches');

// Test connection to Atlas
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
    })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});
  
  // Login and Create User
  function getUser(userName) {
    return userCollection.findOne({ userName: userName });
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(userName, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      userName: userName,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
  }

// Save, Get, and Delete Searches
async function saveSearch(userName, search) {
    // Find user and add search to savedSearches
    throw new Error('Not implemented');
}

async function getSearches(userName) {
    // Find user and return savedSearches
    throw new Error('Not implemented');
}

async function deleteSearch(userName, search) {
    // Find user and remove search from savedSearches
    throw new Error('Not implemented');
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    saveSearch,
    getSearches,
    deleteSearch,
};