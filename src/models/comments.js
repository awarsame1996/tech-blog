const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

const User = require('./user');
const Blogs = require('./blogs');

class Comments extends Model {}

const schema = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},

	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		foreignKey: {
			references: User,
			key: 'id',
		},
	},

	blog_id: {
		type: DataTypes.INTEGER,
		allowNull: true,
		foreignKey: {
			references: Blogs,
			key: 'id',
		},
	},

	text: {
		type: DataTypes.STRING,
		validate: {
			len: [2, 40],
		},
	},
};

const options = {
	sequelize: connection,
	timestamps: true,
	freezeTableName: true,
	modelName: 'comments',
};

Comments.init(schema, options);
module.exports = Comments;
