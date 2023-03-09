module.exports = (sequelize, DataTypes) => {
	return sequelize.define('races', {
		channel_id: DataTypes.BIGINT,
		message_id: DataTypes.BIGINT,
		channel_name: DataTypes.STRING,
	});
};