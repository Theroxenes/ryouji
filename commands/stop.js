// Code from: https://github.com/iCrawl/Music-Bot
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	if (client.config.musicEnabled !== 'true') return message.channel.send('Music commands are disabled');
	const serverQueue = client.musicQueue.get(message.guild.id);

	if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
	if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end('Stop command has been used!');
	return undefined;
};

exports.conf = {
	enabled: false,
	guildOnly: true,
	aliases: ['stop'],
	permLevel: 0
};

exports.help = {
	name: 'Stop',
	category: 'Música',
  enable: 'Sim',
	description: 'Pára a música e limpa a fila',
	usage: 'r!stop'
};
