const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const Restreams = require('./models/Restreams.js')(sequelize, Sequelize.DataTypes);
const Racers = require('./models/Racers.js')(sequelize, Sequelize.DataTypes);
require('./models/Races.js')(sequelize, Sequelize.DataTypes);
const RestreamChannels = require('./models/RestreamChannels.js')(sequelize, Sequelize.DataTypes);
const RestreamTeams = require('./models/RestreamTeams.js')(sequelize, Sequelize.DataTypes);
const Volunteers = require('./models/Volunteers.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

Racers.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
Volunteers.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
Restreams.belongsTo(Volunteers, { foreignKey: 'assigned_by_id', as: 'assigned_by' });
Restreams.belongsTo(Volunteers, { foreignKey: 'opened_by_id', as: 'opened_by' });
Restreams.belongsTo(RestreamTeams, { foreignKey: 'team_id', as: 'team' });
Restreams.belongsTo(RestreamChannels, { foreignKey: 'channel_id', as: 'channel' });
RestreamTeams.belongsTo(Volunteers, { foreignKey: 'commentary1_id', as: 'commentary1' });
RestreamTeams.belongsTo(Volunteers, { foreignKey: 'commentary2_id', as: 'commentary2' });
RestreamTeams.belongsTo(Volunteers, { foreignKey: 'tracker_id', as: 'tracker' });
RestreamTeams.belongsTo(Volunteers, { foreignKey: 'restreamer_id', as: 'restreamer' });

sequelize.sync({ force }).then(async () => {
	const users = [
		Users.upsert({
			discord_id: '250009319230275585',
			discord_name: 'Soleras',
			display_name: 'Soleras',
			discord_mention: '<@250009319230275585>',
		}),
		Users.upsert({
			discord_id: '123412349230275585',
			discord_name: 'Possumorpheus (fake)',
			display_name: 'Trash Panda',
			discord_mention: '<@123412349230275585>',
		}),
	];

	const restreams = [
		Restreams.upsert({
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

	const testUser = await Users.findOne({
		where: { discord_name: 'Possumorpheus (fake)' },
	});

	const volunteers = [
		Volunteers.upsert({
			last_assigned: Date.now(),
			last_assigned_role: 'restreamer',
			user_id: testUser.id,
		}),
	];

	await Promise.all(volunteers);
	console.log('Database initialized');
	sequelize.close();
}).catch(console.error);