const Discord = require('discord.js')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	var question = args.join(' ');
	var answers = client.config.eightBallResponses;
	if (!question.endsWith('?')) return message.reply('Isso não parece uma pergunta. (Lembre-se: as perguntas terminam em pontos de interrogação)').then(msg => msg.delete(5000))
	var a = Math.floor(Math.random() * answers.length);

	let ballembed = new Discord.RichEmbed()
	.setAuthor(client.user.username, client.user.displayAvatarURL)
	.setColor("#7289DA")
	.addField("Pergunta", question)
	.addField("Resposta", answers[a])
	.setFooter(message.author.tag);
  
	message.channel.send(ballembed);

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: '8ball',
	category: 'Diversos',
  enable: 'Sim',
	description: 'Responde a uma pergunta',
	usage: 'r!8ball'
};
