module.exports = (sequelize, DataTypes) => {
	return sequelize.define('guilds', {
		guild_id: {
			type: DataTypes.BIGINT,
			unique: true,
		},
	});
};