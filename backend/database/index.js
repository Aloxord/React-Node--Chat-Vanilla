const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database('./database/chat.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to SQlite database.');
  });

module.exports = {
    db
}