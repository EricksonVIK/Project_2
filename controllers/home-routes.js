const router = require('express').Router();
const {User, Stock,} = require ('../models')

router.get('/', (req, res) => {
    console.log(req.session)
    res.render('homepage',
    );
});
router.get('/signup', (req, res) => {
    res.render('signup',
    );
});
router.get('/addnew', (req, res) => {
    res.render('addnew',
    );
});
router.get('/login', (req, res) => {
    res.render('login',
    );
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('dashboard');
});



module.exports = router;