const router = require('express').Router();
const sequelize = require('../config/connection');
// const authority = require('../utils/auth')
const { User, Stock } = require('../models')

router.get('/', (req, res) => {
    Stock.findAll({
        attributes: [
            'id',
            'name',
            'ticker',
            'shares',
            'cost',
            'user_id'
        ],
        include: [
            {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'email'],
            }
        ]
    })
        .then(dbStockData => {
            console.log(dbStockData)
            // loop over and map sequelize object
            const stocks = dbStockData.map(post => post.get({ plain: true }));
            res.render('dashboard', {stocks});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});
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