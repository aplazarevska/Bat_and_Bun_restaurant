const dotenv = require('dotenv');
dotenv.config();
const { app } = require('./app');
const databaseConnector = require('./database');

const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/batnbun';
const PORT = process.env.PORT || 5999;
const HOST = '0.0.0.0';

databaseConnector(MONGODB_URI)
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((error) => {
        console.log(`
    Some error occured connecting to the database! It was: 
    ${error}
    `);
    });

app.listen(
    PORT,
    HOST,
    console.log(
        `Server listening at http://${
            HOST == '0.0.0.0' && 'localhost'
        }:${PORT}/`
    )
);
