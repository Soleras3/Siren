module.exports = (sequelize, DataTypes) => {
	return sequelize.define('restreams', {
		assignment_id: {
			type: DataTypes.BIGINT,
		},
		restream_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		signups_id: {
			type: DataTypes.BIGINT,
		},
		color: DataTypes.INTEGER,
		date: DataTypes.DATE,
		display_time: DataTypes.STRING,
		display_title: DataTypes.STRING,
		display_date: DataTypes.STRING,
		event: DataTypes.STRING,
		// assigned_by: DataTypes.BIGINT, Volunteers
		// opened_by: DataTypes.BIGINT, Volunteers
		status: DataTypes.ENUM('open', 'complete', 'closed'),
		// team: DataTypes.BIGINT, RestreamTeams
		// channel: DataTypes.BIGINT, RestreamChannels
	});
};