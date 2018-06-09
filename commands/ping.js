const Discord = require('discord.js');

exports.run = (client, message, args, level) => {
  const embed = new Discord.RichEmbed()
  .setTitle('Ping')
  .setColor('#2C2F33')
  .setDescription(`:ping_pong: meu Ping\ **${Date.now() - message.createdTimestamp}**ms`)
   message.channel.send(embed)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['ping'],
	permLevel: 0
};

exports.help = {
	name: 'Ping',
	category: 'Utilitários',
  enable: 'Sim',
	description: 'Exibe o tempo de resposta do Bot!',
	usage: 'r!ping'
};