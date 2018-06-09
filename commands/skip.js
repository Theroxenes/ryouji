// Code from: https://github.com/iCrawl/Music-Bot
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	if (client.config.musicEnabled !== 'true') return message.channel.send('Comandos de música desativados');
	const serverQueue = client.musicQueue.get(message.guild.id);

	if (!message.member.voiceChannel) return message.channel.send('Você não está em um canal de voz!');
	if (!serverQueue) return message.channel.send('Não há nada jogando que eu possa pular para você.');
	console.log(serverQueue);
	//setTimeout(function () {
	serverQueue.connection.dispatcher.end('O comando Skip foi usado!');
	//serverQueue.songs.shift();
	//play(message.guild, serverQueue.songs[0]);
	//}, 1000);
	console.log(serverQueue);
	return undefined;

};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['skip'],
	permLevel: 0
};

exports.help = {
	name: 'Skip',
	category: 'Música',
  enable: 'Sim',
	description: 'Passa uma música',
	usage: 'r!skip'
};
