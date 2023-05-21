const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const localStrategy = require('./localStrategy');

router.use('/customers', customerRoutes);
router.use('/passport', localStrategy);

module.exports = router;
