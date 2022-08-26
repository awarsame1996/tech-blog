const { Model, DataTypes } = require('sequelize');

const bcrypt = require('bcrypt');
const connection = require('../config/connection');
const { hashPassword } = require('../hooks');

class User extends Model {
	getUser() {
		return {
			id: this.id,
			first_name: this.first_name,
			last_name: this.last_name,
			user_name: this.user_name,
			email: this.email,
		};
	}
	async checkPassword(password) {
		const isValid = await bcrypt.compare(password, this.password);
		return isValid;
	}
}

const schema = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	first_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [2, 40],
		},
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [2, 40],
		},
	},
	user_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [2, 40],
		},
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [5, 60],
		},
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
		},
	},
};
const options = {
	sequelize: connection,
	timestamps: true,
	freezeTableName: true,
	modelName: 'user',
	hooks: {
		beforeCreate: hashPassword,
	},
};

User.init(schema, options);

module.exports = User;
