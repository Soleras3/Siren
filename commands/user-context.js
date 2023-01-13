const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('User Information')
		.setType(ApplicationCommandType.User),
	async execute(interaction) {
		const { username } = interaction.targetUser;
		await interaction.reply(`${username} is a silly goose.`);
	},
};