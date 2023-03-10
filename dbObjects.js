const Sequelize = require('sequelize');

// TODO: One source of sequelize init
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Guilds = require('./models/Guilds.js')(sequelize, Sequelize.DataTypes);
const Restreams = require('./models/Restreams.js')(sequelize, Sequelize.DataTypes);
const Racers = require('./models/Racers.js')(sequelize, Sequelize.DataTypes);
const Races = require('./models/Races.js')(sequelize, Sequelize.DataTypes);
const RestreamChannels = require('./models/RestreamChannels.js')(sequelize, Sequelize.DataTypes);
const RestreamTeams = require('./models/RestreamTeams.js')(sequelize, Sequelize.DataTypes);
const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const Volunteers = require('./models/Volunteers.js')(sequelize, Sequelize.DataTypes);

module.exports = { Guilds, Restreams, Racers, Races, RestreamChannels, RestreamTeams, Users, Volunteers };