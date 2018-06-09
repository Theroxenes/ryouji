//Moment Config
const moment = require('moment');
moment.locale('pt-br');
// Discord Cofig
const Discord = require('discord.js');

// Command Code
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 let rUser = message.guild.member(message.mentions.users.first())
if(!rUser) return message.reply("Você não mencionou ninguém ou não encontrei essa pessoa.");
 let reason = args.join(' ');
if(!reason) return message.reply("Coloque um motivo !")

//Report Channel Search

const reportChannel = client.channels.get('429750934621650965')

//Embed Form of Report

let reportEmbed = new Discord.RichEmbed()
.setDescription("Reports")
.setColor("#23272A")
.addField("Usuário Reportado", `${rUser} ID: ${rUser.id}`)
.addField("Reportado por:", `${message.author} ID: ${message.author.id}`)
.addField("Canal:", `${message.channel}`)
.addField("Hora:", `${moment.utc(message.createdAt).format('LLLL')}`)
.addField("Motivo", reason)

 //Send Report Embed
   reportChannel.send(reportEmbed)
   message.guild.owner.send(reportEmbed).then(msg => msg.react("🚨"))
   message.channel.send('<:yep:416325498130399234> Seu report foi enviado ao Dono e ao canal de denúncias (Se este servidor possuir).')

};

//Command Config's

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['report'],
	permLevel: 0
};

//Command Help

exports.help = {
	name: 'Report',
	category: 'Utilitários',
  enable: 'Sim',
	description: 'Reporta ao dono do Servidor um usuário.',
	usage: 'r!report <menção> <texto>'
};