const renderHomePage = (req, res) => {
	return res.render('homePage', { currentPage: 'homePage' });
};

const renderLoginPage = (req, res) => {
	return res.render('login', { currentPage: 'login' });
};

const renderSignupPage = (req, res) => {
	return res.render('signup', { currentPage: 'signup' });
};

const renderDashboardPage = (req, res) => {
	return res.render('dashboard', { currentPage: 'dashboard' });
};

module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderDashboardPage,
};
