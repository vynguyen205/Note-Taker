const router = require('express').Router();

const apiRoutes = require('./api/apiRoutes');
const htmlRoutes = require('./api/htmlRoutes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);
// router.get('/*', (req, res) => {
//     console.log('Redirected to homepage')
//     res.redirect('/'); 
// })
module.exports = router;