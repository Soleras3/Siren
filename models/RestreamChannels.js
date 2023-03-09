module.exports = (sequelize, DataTypes) => {
	return sequelize.define('restream_channels', {
		name: DataTypes.ENUM('FreeEnterprise', 'FreeEnterprise2', 'RPGLB', 'Randomania'),
	});
};