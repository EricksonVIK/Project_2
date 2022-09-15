const router = require('express').Router();
const sequelize = require('../config/connection');
const authority = require('../utils/auth')
const { User, Stock } = require('../models')

router.get('/dashboard', authority, (req, res) => {
    console.log(req.session);
    Stock.findAll({
        where: {
            user_id: req.session.user_id
        },
        attribures: [
            'name',
            'ticker',
            'shares',
            'cost'
        ],
    })
        .then(dbStockData => {
            const stocks = dbStockData.map(stock => stock.get({ plain: true }));
            res.render('dashboard', { stocks, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;