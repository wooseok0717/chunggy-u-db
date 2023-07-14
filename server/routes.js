const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.users.getUsers);

router.get('/user', controllers.users.getUser);

router.post('/', controllers.users.createAUser);

router.put('/role', controllers.users.updateRole)

module.exports = router;