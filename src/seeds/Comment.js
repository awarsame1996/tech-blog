const { Comments } = require('../models');

const commentsData = [
	{
		text: 'Wow!',
		user_id: 2,
		blog_id: 1,
	},
	{
		text: ' congrats!',
		user_id: 1,
		blog_id: 1,
	},
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
