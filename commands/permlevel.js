exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	message.reply(`Seu nível se permissão é: ${level} (${client.permLevels[level]})`);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['permLevel'],
	permLevel: 0
};

exports.help = {
	name: 'PermLevel',
	category: 'Diversos',
  enable: 'Sim',
	description: 'Retorna seu nível de permissão',
	usage: 'r!permlevel'
};
