const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./mainRoutes');

router.use('/', mainRoutes);
router.use('/api', apiRoutes);

module.exports = router;
