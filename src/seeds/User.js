const { User } = require('../models');

const users = [
	{
		first_name: 'abdilatif',
		last_name: 'warsame',
		password: 'Passwords123.',
		email: 'abdilatifwarsame@email.com',
	},
	{
		first_name: 'abdinasir',
		last_name: 'warsame',
		password: 'Passwords123.',
		email: 'abdinasirwarsame@email.com',
	},
	{
		first_name: 'adam',
		last_name: 'ali',
		password: 'Passwords123.',
		email: 'adamali@email.com',
	},
	{
		first_name: 'mohammed',
		last_name: 'warsame',
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
