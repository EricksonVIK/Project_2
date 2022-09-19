const router = require('express').Router();
const sequelize = require('../config/connection');
// const authority = require('../utils/auth')
const { User, Stock } = require('../models')

router.get('/', (req, res) => {
    // console.log(req.session)
    Stock.findAll({
        attributes: [
            'id',
            'name',
            'ticker',
            'shares',
            'cost',
            'user_id'
            // [sequelize.literal('(SELECT USER(*) FROM user WHERE user.id = stock.user_id', 'user')]
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
// })
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

// router.get('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
       
//     }
//     else {
//         res.status(404).end();
//     }
// });
router.get('/login', (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  



module.exports = router;