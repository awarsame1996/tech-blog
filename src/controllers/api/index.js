const moment = require('moment');
// const Blog = require('../../models/Blog');
// const Comments = require('../../models/Comments');
const { Blogs, Comments, User } = require('../../models');

const createBlog = async (req, res) => {
	try {
		const { title, contents } = req.body;

		const user_id = req.session.user.id;

		await Blogs.create({
			user_id,
			title,
			contents,
		});

		return res.json({ success: true });
	} catch (error) {
		console.log(`[ERROR]: Failed to create Blog | ${error.message}`);

		return res.status(500).json({ success: false });
	}
};

const updateBlog = async (res, req) => {};

const deleteBlog = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const blog = await Blogs.findByPk(id);
		if (!blog) {
			res.status(404).json({
				message: '[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN abdi!',
			});
			return;
		}
		await Blogs.destroy({ where: { id } });
		res.status(200).json({ success: true });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

const createComment = async (req, res) => {
	console.log('were here');
	try {
		const { blog_id, text } = req.body;

		const user_id = req.session.user.id;
		console.log(user_id);
		await Comments.create({
			blog_id,
			user_id,
			text,
		});

		return res.json({ success: true });
	} catch (error) {
		console.log(`[ERROR]: Failed to create comment | ${error.message}`);

		return res.status(500).json({ success: false });
	}
};

const updateComment = async (res, req) => {};

const deleteComment = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const comment = await Comments.findByPk(id);
		if (!comment) {
			res.status(404).json({
				message: '[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN abdi!',
			});
			return;
		}
		await Comments.destroy({ where: { id } });
		res.status(200).json({ success: true });
	} catch (error) {
		console.log(
			`[ERROR]:YOU WERE SUPPOSE TO FOLLOW THE TRAIN CJ!| ${error.message}`
		);
	}
};

module.exports = {
	createBlog,
	updateBlog,
	deleteBlog,
	createComment,
	updateComment,
	deleteComment,
};
