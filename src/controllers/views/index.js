const { Blogs, User, Comments } = require('../../models');
let blogs = [];

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
				model: User,
				attributes: ['first_name', 'last_name'],
			},
		],
	});
	const commentData = await Comments.findAll({
		include: [
			{
				model: User,
				attributes: ['first_name'],
			},
		],
	});
	let comments = commentData.map((comment) => {
		return comment.get({ plain: true });
	});
	const blogs = blogData.map((blog) => {
		return blog.get({ plain: true });
	});
	const blogInfo = blogs.map((blog) => {
		comments.map((comment) => {
			if (!blog.comments) {
				blog.comments = [];
			}
			if (comment.blog_id === blog.id) {
				blog.comments.push(comment);
			}
		});
		return blog;
	});

	console.log(blogInfo[0].comments);

	return res.render('dashboard', { currentPage: 'dashboard', blogInfo });
};

module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderDashboardPage,
};
