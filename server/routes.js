const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.users.getUsers);

router.get('/user', controllers.users.getUser);

router.post('/', controllers.users.createAUser);

module.exports = router;