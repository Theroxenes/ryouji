exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const Discord = require('discord.js')
	var time = args[0];
	var reminder = args.splice(1).join(' ');

	if (!time) return message.reply('Não posso te lembrar se eu não sei quando fazer isso ...');
	if (!reminder) return message.reply('Você esqueceu o lembrete!');

	// This will not work if the bot is restarted or stopped

	time = await time.toString();

	if (time.indexOf('s') !== -1) { // Seconds
		var timesec = await time.replace(/s.*/, '');
		var timems = await timesec * 1000;
	} else if (time.indexOf('m') !== -1) { // Minutes
		var timemin = await time.replace(/m.*/, '');
		timems = await timemin * 60 * 1000;
	} else if (time.indexOf('h') !== -1) { // Hours
		var timehour = await time.replace(/h.*/, '');
		timems = await timehour * 60 * 60 * 1000;
	} else if (time.indexOf('d') !== -1) { // Days
		var timeday = await time.replace(/d.*/, '');
		timems = await timeday * 60 * 60 * 24 * 1000;
	}	else {
		return message.reply('A hora deve estar no formato <número>[s/m/h/d]');
	}

const lembrete2Embed =  new Discord.RichEmbed()
.setTitle('Lembrete')
.setColor('RED')
.setAuthor(message.author.user, message.author.avatarURL)
.setDescription(`Vou te lembrar em **${time}** sobre: **${reminder}**`)

	  message.reply(':arrow_heading_down: ')
		message.channel.send(lembrete2Embed);

const lembreteEmbed = new Discord.RichEmbed()
.setTitle('Lembrete')
.setColor('RED')
.setAuthor(client.user.username, client.user.avatarURL)
.setDescription(`Você me pediu **${time}** atrás para lembrá-lo : **${reminder}**`)
	setTimeout(function () {
    message.reply(':arrow_heading_down: ')
		message.channel.send(lembreteEmbed);
	}, parseInt(timems));

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['lembrete'],
	permLevel: 0
};

exports.help = {
	name: 'Lembrete',
	category: 'Utilitários',
  enable: 'Sim',
	description: 'Você pode definir uma mensagem ser lembrada em um tempo exato.',
	usage: 'r!lembrete <tempo> <texto>'
};