module.exports = (sequelize, DataTypes) => {
	return sequelize.define('racers', {
		last_restreamed: DataTypes.DATE,
		// 1:1 user
	});
};