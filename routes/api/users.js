const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// Handle 404 errors (route not found)
router.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });

module.exports = router