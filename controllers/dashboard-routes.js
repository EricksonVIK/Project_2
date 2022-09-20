const router = require('express').Router();
const sequelize = require('../config/connection');
const authority = require('../utils/auth')
const { User, Stock } = require('../models')

// get stocks associated with user
router.get('/', authority, (req, res) => {
    // console.log(req.session)
    if (req.session) {
        Stock.findAll({
            attributes: [
                'id',
                'name',
                'ticker',
                'shares',
                'cost',
                'user_id',
                'current_price'
            
            ],
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                }
            ]
        })
            .then(dbStockData => {
                const stocks = dbStockData.map(stock => stock.get({ plain: true }));
                // console.log('-----------STOCKS----------------')
                // console.log(stocks)
                // associate the stocks with logged in user
                const userStocks = stocks.filter(stocks => stocks.user.id === req.session.user_id);
                console.log(userStocks.id)
                console.log('------------USERSTOCKS-------------')
                console.log(userStocks)
                res.render('dashboard', { userStocks, loggedIn: req.session.loggedIn });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    };
});

router.get('/addnew', (req, res) => {
    res.render('addnew',
    );
});

router.get('/login', (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  



module.exports = router;