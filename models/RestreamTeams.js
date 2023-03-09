module.exports = (sequelize) => {
	return sequelize.define('restream_teams', {
		// commentary1 1:1 volunteer
		// commentary2 1:1 volunteer
		// tracker 1:1 volunteer
		// restreamer 1:1 volunteer
	});
};