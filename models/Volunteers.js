module.exports = (sequelize, DataTypes) => {
	return sequelize.define('volunteers', {
		last_assigned: DataTypes.DATE,
		last_assigned_role: DataTypes.ENUM('commentary', 'tracker', 'restreamer'),
		// 1:1 user
	});
};