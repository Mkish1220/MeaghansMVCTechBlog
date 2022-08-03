const router = require('express').Router();
const blogRoutes = require('././blogRoutes'); //add routes name 
const userRoutes = require('././userRoutes');//add routes name 
const homepageRoutes = require('././homepageRoutes');

router.use('/', blogRoutes);
router.use('/', userRoutes); //add model name, route name 
router.use('/', homepageRoutes); //add model name, route name 

module.exports = router;
