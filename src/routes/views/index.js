const { Router } = require('express');
const {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderDashboardPage,
	renderSingleBlogPage,
} = require('../../controllers/views');
const auth = require('../../middlewares/auth');

const router = Router();

router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignupPage);
router.get('/dashboard', auth, renderDashboardPage);
router.get('/dashboard/:id', auth, renderSingleBlogPage);

module.exports = router;
