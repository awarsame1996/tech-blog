const { Blogs } = require('../models');

const blogsData = [
	{
		title: 'news',
		contents: 'Did you see what is happing on the news',
		user_id: '1',
	},
	{
		title: 'Gaming',
		contents: 'Did you see the announcement on GamesCon',
		user_id: '1',
	},
];

const seedBlogs = () => Blogs.bulkCreate(blogsData);

module.exports = seedBlogs;
