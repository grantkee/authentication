require('dotenv').config();

const mysql = require('mysql');

class Connection {
  constructor(){
    if (!this.pool){
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'remotemysql.com:3306',
        user: process.env.SQL_USER,
        password: process.env.SQL_SECRET,
        database: process.env.SQL_DB
      })
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection();

module.exports = instance;