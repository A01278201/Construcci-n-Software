const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');

router.get('/login', authCtrl.getLogin);
router.post('/login', authCtrl.postLogin);
router.get('/dashboard', authCtrl.getDashboard);
router.get('/logout', authCtrl.logout);
router.get('/', (req, res) => res.redirect('/login'));

module.exports = router;