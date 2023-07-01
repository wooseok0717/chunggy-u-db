const db = require('../db');

module.exports = {
  getUser: (email, cb) => {
    db.query(`SELECT * FROM users WHERE email = '${email}'`)
    .then(res => cb(res.rows[0]));
  },
  createAUser: (ign, job, currentUser, cb) => {
    const text = 'INSERT INTO users (name, class, email, role) VALUES($1,$2,$3,$4)';
    const values = [ign, job, currentUser, 'user'];
    db.query(text, values)
    .then(cb);
  }
}