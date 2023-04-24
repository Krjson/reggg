const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { session: req.session });
    console.log(req.session.user.role)
    req.session.user = {
        email: user.email,
        role: user.role
      };

    console.log(req.session.user.role)
});


module.exports = router;