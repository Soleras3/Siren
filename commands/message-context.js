const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('Record Race Time Example')
		.setType(ApplicationCommandType.Message),
	async execute(interaction) {
		const { content } = interaction.targetMessage;
		await interaction.reply(`> ${content}`);
	},
};