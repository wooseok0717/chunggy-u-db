const models = require('../models');

module.exports = {
  getUser: (req, res) => {
    models.users.getUser(req.query.email, (data) => {
      res.send(data);
    })
  },
  createAUser: (req, res) => {
    const {ign, job, currentUser} = req.body;
    models.users.createAUser(ign, job, currentUser, () => {
      res.send('created!');
    })
  },
  getUsers: (req, res) => {
    models.users.getAllUsers((data) => {
      res.send(data)
    })
  }
}