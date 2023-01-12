const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('silly')
		.setDescription('You need a quokka in these trying times.')
		.addStringOption(option =>
			option.setName('choice')
				.setDescription('You must choose')
				.setRequired(true)
				.addChoices(
					{ name: 'Quokka', value: 'img_quokka' },
					{ name: 'Meme', value: 'gif_meme' },
					{ name: 'Movie', value: 'gif_movie' },
				)),
	async execute(interaction) {
		const choice = interaction.options.getString('choice');
		await interaction.reply(choice);
	},
};