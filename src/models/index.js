const User = require('./user');
const Blogs = require('./blogs');
const Comments = require('./comments');

// user and blogs

Blogs.belongsTo(User, {
	foreignKey: 'user_id',
});
User.hasMany(Blogs, {
	foreignKey: 'user_id',
});

Comments.belongsTo();

module.exports = {
	User,
	Blogs,
	Comments,
};
