const { User } = require('../models');

const users = [
	{
		first_name: 'abdilatif',
		last_name: 'warsame',
		user_name: 'abdilatifwarsame',
		password: 'Passwords123.',
		email: 'abdilatifwarsame@email.com',
	},
	{
		first_name: 'abdinasir',
		last_name: 'warsame',
		user_name: 'abdinasirwarsame',
		password: 'Passwords123.',
		email: 'abdinasirwarsame@email.com',
	},
	{
		first_name: 'adam',
		last_name: 'ali',
		user_name: 'adamali',
		password: 'Passwords123.',
		email: 'adamali@email.com',
	},
	{
		first_name: 'mohammed',
		last_name: 'warsame',
		user_name: 'mohammedwarsame',
		password: 'Passwords123.',
		email: 'mohammedwarsame@email.com',
	},
];

const seedUsers = async () => {
	const promises = users.map((user) => User.create(user));

	await Promise.all(promises);

	console.log('users seeded');
};

module.exports = seedUsers;
