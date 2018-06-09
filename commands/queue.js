// Code from: https://github.com/iCrawl/Music-Bot
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (client.config.musicEnabled !== 'true') return message.channel.send('Comandos de música desativados');
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (!serverQueue) return message.channel.send('Não há nada jogando.');
		return message.channel.send(`
__**Lista de Reprodução:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Tocando Agora:** ${serverQueue.songs[0].title}
		`);
    
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['queue'],
	permLevel: 0
};

exports.help = {
	name: 'Queue',
	category: 'Música',
  enable: 'Sim',
	description: 'Verifique o que vai tocar',
	usage: 'r!queue'
};
