const { AttachmentBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flufftella')
		.setDescription('You know you want one.'),
	async execute(interaction) {
		const file = new AttachmentBuilder('assets/flufftella.jpeg');
		await interaction.reply({ content: 'One Cinnful Flufftella coming right up!', files: [file] });
	},
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quokka')
		.setDescription('Want a fun fact?'),
	async execute(interaction) {
		const file = new AttachmentBuilder('assets/quokka.gif');
		await interaction.reply({ content: 'Fun Fact: Just like Soleras, this quokka is shaped like a friend.', files: [file] });
	},
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sing')
		.setDescription('Sing a jaunty tune!'),
	async execute(interaction) {
		const songs = {
			'simple': 'šµ When you walk away, you don\'t hear me say~ šµ\nšµ "Please~! Oh baby, don\'t go." šµ',
			'bumble': 'šµ Right about now it\'s time to rock with the biggety Buck Bumble. šµ\nšµ Right about now it\'s time to rock with the biggety Buck Bumble. šµ',
			'pokemon': 'šµ I wanna be the very best~ šµ\nšµ That no one ever was! šµ\nšµ To catch them is my real test~ šµ\nšµ To train them is my cause! šµ',
			'rickroll': 'šµ We\'re no strangers to love~ šµ\nšµ You know the rules, and so do I~ šµ',
			'pirate': 'šµ Yar har fiddley dee! šµ\nšµ Being a pirate is alright to be. šµ\nšµ Do what you want cause a pirate is free! šµ\nšµ YOU ARE A PIRATE! šµ',
			'bolton': 'šµ This is the tale; Of Captain Jack Sparrow! šµ\nšµ Pirate so brave; On the seven seas! šµ\nšµ A mystical quest; To the isle of Tortuga! šµ\nšµ Raven locks sway; In the ocean breeze! šµ',
			'maui': 'šµ What can I say, except "You\'re welcome~" šµ',
			'frozen': 'šµ The snow glows white on the mountain tonight; šµ\nšµ Not a footprint to be seen~ šµ\nšµ A kingdom of isolation; šµ\nšµ And it looks like, I\'m the queen. šµ',
			'eva': 'šµ Zankoku na tenshi no you ni šµ\nšµ Shounen yo, shinwa ni nare... šµ',
			'rocket': 'šµ Team Rocket\'s rockin\' šµ\nšµ Talkin\' trouble, walkin\' trouble šµ\nšµ Double trouble, big trouble\'s gonna follow you~ šµ',
			'fantasy': 'šµ But it\'s just a sweet, sweet fantasy, baby~ šµ\nšµ When I close my eyes, you come and take me~ šµ\nšµ On and on and on, it\'s so deep in my daydreams~ šµ\nšµ But it\'s just a sweet, sweet fantasy, baby~ šµ',
			'machine': 'šµ If there was a better way to go then it would find me šµ\nšµ I can\'t help it, the road just rolls out behind me šµ\nšµ Be kind to me, or treat me mean šµ\nšµ I\'ll make the most of it, I\'m an extraordinary machine šµ',
		};
		const songArray = Object.values(songs);
		const index = Math.floor(Math.random() * songArray.length);
		await interaction.reply({ content: `\`\`\`${songArray[index]}\`\`\`` });
	},
};