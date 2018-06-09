// Code from: https://github.com/iCrawl/Music-Bot
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (client.config.musicEnabled !== 'true') return message.channel.send('Comandos de música desativados');
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumi a música para você!');
		}
		return message.channel.send('Não há nada tocando.');
    
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['resume'],
	permLevel: 0
};

exports.help = {
	name: 'Resume',
	category: 'Música',
  enable: 'Sim',
	description: 'Continua uma música que havia sido pausada',
	usage: 'r!resume'
};
