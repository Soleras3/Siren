const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
				.setRequired(true))
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('The channel to echo into')
				.setRequired(true)
				.addChannelTypes(ChannelType.GuildText)),
	async execute(interaction) {
		const input = interaction.options.getString('input') ?? 'No input provided.';
		const channel = interaction.options.getChannel('channel');

		if (channel && channel != interaction.channel) {
			await channel.send(input);
			await interaction.reply({ content: `Message sent to ${channel}`, ephemeral: true });
		} else {
			await interaction.reply(input);
		}
	},
};