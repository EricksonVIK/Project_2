const router = require('express').Router();
const sequelize = require('../config/connection');
// const authority = require('../utils/auth')
const { User, Stock } = require('../models')

router.get('/', (req, res) => {
    // console.log(req.session)
    if (req.session) {
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
                // console.log(dbStockData)
                // console.log(req.session)
                // loop over and map sequelize object
                const stocks = dbStockData.map(stock => stock.get({ plain: true }));

                // console.log(stocks)
                res.render('dashboard', { stocks });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }
});

router.get('/:id', (req, res) => {
    // if (req.session) {

        User.findOne({
            attributes: { exclude: ["password"] },
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: Stock,
                    attributes: ["id", "name", "ticker", "shares", "cost"]
                },
            ],
        })
            .then(dbUserData => {
                console.log(dbUserData)
                console.log(req.session)
                // loop over and map sequelize object
                const userStocks = dbUserData.map(user => user.get({ plain: true }));

                console.log('userStocks is below', userStocks)
                res.render('dashboard', { userStocks });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    // }
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