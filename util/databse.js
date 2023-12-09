// util/database.js
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Nikhil64@",
});

// Using callbacks (asynchronous)
module.exports = {
  execute: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },
};
