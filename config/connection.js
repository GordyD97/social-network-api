const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb+srv://gordAdmin:JGvSnCRXGJyfgXGx@social-api.rtozsxx.mongodb.net/test';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


module.exports = connection;

