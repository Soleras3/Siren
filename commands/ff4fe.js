const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ff4fe')
		.setDescription('Replies with a description of FF4FE and the website.'),
	async execute(interaction) {
		await interaction.reply({ content: '[FF4: Free Enterprise](http://ff4fe.com/) is an open-world romhack and scavenger hunt randomizer for Final Fantasy IV for the SNES (originally released in English as Final Fantasy II).', fetchReply: true });
		// await interaction.followUp('Find out more');
	},
};