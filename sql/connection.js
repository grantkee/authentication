require('dotenv').config();

const mysql = require('mysql');

class Connection {
  constructor(){
    if (!this.pool){
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 1000,
        // host: 'remotemysql.com:3306',
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_SECRET,
        database: process.env.SQL_DB,
        port: process.env.SQL_PORT
      })
      console.log('host:', process.env.SQL_HOST);
      console.log('user:', process.env.SQL_USER);
      console.log('pword:', process.env.SQL_SECRET);
      console.log('db:', process.env.SQL_DB);
      console.log('port:', process.env.SQL_PORT);
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection();

module.exports = instance;