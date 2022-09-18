const router = require('express').Router();
const sequelize = require('../config/connection');
// const authority = require('../utils/auth')
// const { User, Stock } = require('../models')

// router.get('/', authority, (req, res) => {
    // console.log(req.session);
router.get('/', (req, res) => {
    res.render('dashboard', {
        name: 'Apple',
        ticker: 'APPL',
        shares: 1,
        cost: 100
    });
    console.log(res)
});       // where: {
        //     user_id: req.session.user_id
        // },
        // attribures: [
        //     'name',
        //     'ticker',
        //     'shares',
        //     'cost'
        // ],
    // })
        // .then(dbStockData => {
        //     const stocks = dbStockData.map(stock => stock.get({ plain: true }));
        //     res.render('dashboard', { stocks, loggedIn: true });
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json(err);
        // });
// });
// router.get('/', (req, res) => {
//     console.log(req.session)
//     res.render('homepage',
//     );
// });
// router.get('/login', (req, res) => {
//     res.render('login',
//     );
// });
// router.get('/dashboard', (req, res) => {
//     res.render('dashboard',
//     );
// });
// router.get('/signup', (req, res) => {
//     res.render('signup',
//     );
// });
router.get('/addnew', (req, res) => {
    res.render('addnew',
    );
});
// router.get('/login', (req, res) => {
//     res.render('login',
//     );
// });

router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('dashboard');
});




module.exports = router;