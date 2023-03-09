const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const User = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const Restream = require('./models/Restreams.js')(sequelize, Sequelize.DataTypes);
require('./models/Guilds.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const users = [
		User.upsert({
			discord_id: '250009319230275585',
			discord_name: 'Soleras',
			display_name: 'Soleras',
			discord_mention: '<@250009319230275585>',
		}),
		User.upsert({
			discord_id: '123412349230275585',
			discord_name: 'Possumorpheus (fake)',
			display_name: 'Trash Panda',
			discord_mention: '<@123412349230275585>',
		}),
	];

	const restreams = [
		Restream.upsert({
			assignment_id: 786346002625593300,
			restream_id: 'A4AC38',
			color: 10791992,
			signups_id: 784889138003836900,
			display_title: 'Lunar Racing Club @ 7:30PM ET on FreeEnterprise - 12/10',
			event: 'Lunar Racing Club',
			display_time: '7:30PM ET',
			display_date: '12/10/20',
			restream_channel: 'FreeEnterprise',
			// status: 'open',
		}),
	];

	await Promise.all(users);
	await Promise.all(restreams);
	console.log('Database synced');

	sequelize.close();
}).catch(console.error);