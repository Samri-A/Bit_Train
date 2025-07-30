require("dotenv").config();
const admin = require('firebase-admin')
const serviceAccount = require('C:/Users/HP/Desktop/projects/Bit_Train/server/admin_secret.json')

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL : process.env.databaseURL
});

const database = admin.database()

module.exports = database;