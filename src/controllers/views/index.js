const { Blogs, User, Comments } = require('../../models');

const renderHomePage = (req, res) => {
	return res.render('homePage', { currentPage: 'homePage' });
};

const renderLoginPage = (req, res) => {
	return res.render('login', { currentPage: 'login' });
};

const renderSignupPage = (req, res) => {
	return res.render('signup', { currentPage: 'signup' });
};

const renderDashboardPage = async (req, res) => {
	const blogData = await Blogs.findAll({
		include: [
			{
				model: Comments,
				attributes: ['text'],
			},
			{
				model: User,
				attributes: ['first_name', 'last_name'],
			},
		],
	});
	const blog = blogData.map((blog) => {
		return blog.get({ plain: true });
	});

	console.log(blog);
	return res.render('dashboard', { currentPage: 'dashboard', blog });
};

module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderDashboardPage,
};
