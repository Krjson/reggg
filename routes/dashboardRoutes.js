const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// пример использования middleware в роуте

router.get('/', authMiddleware.requireLogin, (req, res) => {
    res.render('dashboard', { session: req.session, user: req.session.user });
});


module.exports = router;
