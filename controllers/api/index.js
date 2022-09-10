const router = require('express').Router();

const stockRoutes = require('./stock-routes.js');

router.use('/stocks', stockRoutes);

module.exports = router;
