const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

const User = require('./user');

class Blogs extends Model {}

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

	title: {
		type: DataTypes.STRING,
		validate: {
			len: [2, 100],
		},
	},
	contents: {
		type: DataTypes.STRING,
		validate: {
			len: [2, 200],
		},
	},
};

const options = {
	sequelize: connection,
	timestamps: true,
	freezeTableName: true,
	modelName: 'blogs',
};

Blogs.init(schema, options);
module.exports = Blogs;
