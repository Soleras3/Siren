module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		// user_id: {
		// 	type: DataTypes.BIGINT,
		// 	primaryKey: true,
		// },
		discord_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		discord_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		display_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		discord_mention: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};

// has_rm: DataTypes.BOOLEAN,
// has_rpglb: DataTypes.BOOLEAN,
// last_assigned: DataTypes.DATE,
// last_role: DataTypes.STRING,