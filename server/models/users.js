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
  },
  getAllUsers: (cb) => {
    db.query('SELECT * FROM users ORDER BY name ASC')
    .then(res => {
      cb(res.rows);
    })
  },
  updateRole: (id, role, cb) => {
    console.log(id, role);
    const text = 'UPDATE users SET role = $1 WHERE id = $2';
    const values = [role, id]
    db.query(text, values);
    cb();
  }
}