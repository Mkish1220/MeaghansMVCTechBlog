const router = require('express').Router();
const blogRoutes = require('././blogRoutes'); //add routes name 
const userRoutes = require('././userRoutes');//add routes name 
const homepageRoutes = require('././homepageRoutes');
const commentRoutes = require('././commentRoutes');
const withAuth = require('../../utils/auth');

router.use('/blogs', blogRoutes); //add routes name
router.use('/user', userRoutes); //add model name, route name 
router.use('/homepage', homepageRoutes); //add model name, route name 
router.use('/comment', commentRoutes); //add model name, route name
router.use('/', withAuth, (req, res) => {
    res.render('homepage', {
        logged_in: req.session.logged_in
    });
} );

module.exports = router;
