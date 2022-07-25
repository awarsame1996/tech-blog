const path = require('path');

const renderHomePage = (req, res) => {
	const filePath = path.join(__dirname, '../../../public/index.html');
	return res.sendFile(filePath);
};

const renderLoginPage = (req, res) => {
	const filePath = path.join(__dirname, '../../../public/loginPage.html');
	return res.sendFile(filePath);
};

const renderSignupPage = (req, res) => {
	const filePath = path.join(__dirname, '../../../public/signupPage.html');
	return res.sendFile(filePath);
};

const renderDashboardPage = (req, res) => {
	const filePath = path.join(__dirname, '../../../public/dashboard.html');
	return res.sendFile(filePath);
};

module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderDashboardPage,
};
