const { connect, connection } = require('mongoose');


const connectionString =
    process.env.MONGODB_URI || 'mongodb+srv://gordAdmin:JGvSnCRXGJyfgXGx@social-api.rtozsxx.mongodb.net/test';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const MongoClient = require('mongodb').MongoClient;
// const test = require('assert');
// // Connection url
// const url = 'mongodb://localhost:27017';

module.exports = connection;

