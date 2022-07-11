const router = require('express').Router();

// const apiRoutes = require('./api/apiRoutes');
const htmlRoutes = require('./api/htmlRoutes');

router.use('/', htmlRoutes);
// router.use('/api', apiRoutes);

module.exports = router;