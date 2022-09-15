const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api/index');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;