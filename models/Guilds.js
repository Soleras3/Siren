module.exports = (sequelize, DataTypes) => {
	return sequelize.define('guilds', {
		discord_id: {
			type: DataTypes.BIGINT,
			unique: true,
		},
		name: DataTypes.STRING,
	});
};