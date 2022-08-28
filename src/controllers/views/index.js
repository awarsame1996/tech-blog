const { Blogs, User, Comments } = require('../../models');

const renderHomePage = async (req, res) => {
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

	return res.render('homePage', {
		currentPage: 'homePage',
		blogInfo,
		isLoggedIn: req.session.isLoggedIn,
	});
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
			if (comment.user_id === req.session.user.id) {
				comment.userDelete = true;
			}
			if (comment.user_id !== req.session.user.id) {
			}
		});
		return blog;
	});

	return res.render('dashboard', {
		currentPage: 'dashboard',
		blogInfo,
		isLoggedIn: req.session.isLoggedIn,
	});
};
const renderSingleBlogPage = async (req, res) => {
	const { id } = req.params;
	const blogData = await Blogs.findByPk(id, {
		include: [
			{
				model: User,
				attributes: ['first_name', 'last_name'],
			},
		],
	});
	const blog = blogData.get({ plain: true });
	console.log(blog);

	return res.render('singleBlog', {
		currentPage: 'singleBlog',
		blog,
		isLoggedIn: req.session.isLoggedIn,
	});
};
module.exports = {
	renderHomePage,
	renderLoginPage,
	renderSignupPage,
	renderDashboardPage,
	renderSingleBlogPage,
};
