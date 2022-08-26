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

Comments.belongsTo(Blogs, {
	foreignKey: 'blog_id',
});
Blogs.hasMany(Comments, {
	foreignKey: 'blog_id',
});
Comments.belongsTo(User, {
	foreignKey: 'user_id',
});
User.hasMany(Comments, {
	foreignKey: 'user_id',
});

module.exports = {
	User,
	Blogs,
	Comments,
};
