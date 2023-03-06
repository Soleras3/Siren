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
			'simple': '🎵 When you walk away, you don\'t hear me say~ 🎵\n🎵 "Please~! Oh baby, don\'t go." 🎵',
			'bumble': '🎵 Right about now it\'s time to rock with the biggety Buck Bumble. 🎵\n🎵 Right about now it\'s time to rock with the biggety Buck Bumble. 🎵',
			'pokemon': '🎵 I wanna be the very best~ 🎵\n🎵 That no one ever was! 🎵\n🎵 To catch them is my real test~ 🎵\n🎵 To train them is my cause! 🎵',
			'rickroll': '🎵 We\'re no strangers to love~ 🎵\n🎵 You know the rules, and so do I~ 🎵',
			'pirate': '🎵 Yar har fiddley dee! 🎵\n🎵 Being a pirate is alright to be. 🎵\n🎵 Do what you want cause a pirate is free! 🎵\n🎵 YOU ARE A PIRATE! 🎵',
			'bolton': '🎵 This is the tale; Of Captain Jack Sparrow! 🎵\n🎵 Pirate so brave; On the seven seas! 🎵\n🎵 A mystical quest; To the isle of Tortuga! 🎵\n🎵 Raven locks sway; In the ocean breeze! 🎵',
			'maui': '🎵 What can I say, except "You\'re welcome~" 🎵',
			'frozen': '🎵 The snow glows white on the mountain tonight; 🎵\n🎵 Not a footprint to be seen~ 🎵\n🎵 A kingdom of isolation; 🎵\n🎵 And it looks like, I\'m the queen. 🎵',
			'eva': '🎵 Zankoku na tenshi no you ni 🎵\n🎵 Shounen yo, shinwa ni nare... 🎵',
			'rocket': '🎵 Team Rocket\'s rockin\' 🎵\n🎵 Talkin\' trouble, walkin\' trouble 🎵\n🎵 Double trouble, big trouble\'s gonna follow you~ 🎵',
			'fantasy': '🎵 But it\'s just a sweet, sweet fantasy, baby~ 🎵\n🎵 When I close my eyes, you come and take me~ 🎵\n🎵 On and on and on, it\'s so deep in my daydreams~ 🎵\n🎵 But it\'s just a sweet, sweet fantasy, baby~ 🎵',
			'machine': '🎵 If there was a better way to go then it would find me 🎵\n🎵 I can\'t help it, the road just rolls out behind me 🎵\n🎵 Be kind to me, or treat me mean 🎵\n🎵 I\'ll make the most of it, I\'m an extraordinary machine 🎵',
		};
		const songArray = Object.values(songs);
		const index = Math.floor(Math.random() * songArray.length);
		await interaction.reply({ content: `\`\`\`${songArray[index]}\`\`\`` });
	},
};