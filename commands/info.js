const { SlashCommandBuilder } = require('discord.js');
// const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const data = new SlashCommandBuilder()
	.setName('info')
	.setDescription('Get info about a user or a server!')
	.addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption(option => option.setName('target').setDescription('The user')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the server'));
            // NOTE: Permissions example.
            //.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers);

module.exports = {
    data: data,
    async execute(interaction) {
        switch(interaction.options.getSubcommand()) {
            case 'user':
                const user = interaction.options.getUser('target');
                let member = interaction.member;
                if (user) {
                    member = await interaction.guild.members.fetch(user);
                }
                await interaction.reply(`${user ?? interaction.user.username} joined on ${member.joinedAt}.`);
                break;
            case 'server':
                await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
                break;
            default:
                break;
        }
    }
}