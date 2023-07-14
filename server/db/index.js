const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: 'chunggy',
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PGPORT,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connection complete');
  }
});

module.exports = client;