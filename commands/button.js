const { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Replies with a message and a button.'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('angry_cat')
					// .setLabel('Click me!')
					.setStyle(ButtonStyle.Primary)
					.setEmoji('😾'),
				new ButtonBuilder()
					.setCustomId('smile_cat')
					// .setLabel('Click me!')
					.setStyle(ButtonStyle.Primary)
					.setEmoji('😸'),
				new ButtonBuilder()
					.setCustomId('smirk_cat')
					// .setLabel('Click me!')
					.setStyle(ButtonStyle.Primary)
					.setEmoji('😼'),
			);
		const message = await interaction.reply({ content: 'You\'re gonna click me. Do it now.', components:[row], fetchReply: true });

		const collector = message.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });
		collector.on('collect', i => {
			if (i.user.id === interaction.user.id) {
				i.reply(`${i.user} clicked on the ${i.component.emoji.name}(${i.customId}) button.`);
			} else {
				i.reply({ content: 'These buttons aren\'t for you!', ephemeral: true });
			}
		});
	},
};