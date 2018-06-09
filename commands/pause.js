// Code from: https://github.com/iCrawl/Music-Bot
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (client.config.musicEnabled !== 'true') return message.channel.send('Comandos de música desativados');
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.reply('⏸ Pausei a música para você! Dê r!resume para a música!');
		}
		return message.reply('Não há nada tocando ou já está pausada. Dê r!resume para a música.');
    
};

exports.conf = {
	enabled: false,
	guildOnly: true,
	aliases: ['pause'],
	permLevel: 0
};

exports.help = {
	name: 'Pause',
	category: 'Música',
  enable: 'Não',
	description: 'Pausa a música',
	usage: 'r!pause'
};
