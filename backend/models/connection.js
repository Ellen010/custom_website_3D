const mongoose = require('mongoose');

const connectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database is connected!!!!!! Hurray'))

  .catch(error => console.error(error));


