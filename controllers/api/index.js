const router = require('express').Router();

const stockRoutes = require('./stock-routes.js');
const userRoutes = require('./user-routes.js')

router.use('/stocks', stockRoutes);
router.use('/user', userRoutes)

module.exports = router;
