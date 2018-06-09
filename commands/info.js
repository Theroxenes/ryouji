const Discord = require('discord.js')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

//Tempo de Uptime

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);


  const embed = new Discord.RichEmbed()
  .setTitle('Info')
  .setAuthor('Ryouji', 'https://cdn.discordapp.com/avatars/452585205975351297/78d6388a1c48344ab0464b7c1dd63f43.png?size=2048?size=128')
  .setColor('#23272A')
  .setDescription('Informações sobre Ryouji')
  .addField('<:online:454695663549022220> Ping:', `**${Date.now() - message.createdTimestamp}**ms`, true)
  .addField('<a:loading:454704719282044940> Tempo em que estou acordado', days + 'd ' + hours + 'h ' + mins + 'm ' + realTotalSecs +'s ', true)
  .addField('r!help', 'Dar lhe a lista completa de comandos que você tem acesso.')
  .addField('<:yes:454706936206721054>  Me adicione em seu Servidor', '[Clique Aqui](https://discordapp.com/oauth2/authorize?client_id=452585205975351297&scope=bot%20identify%20guilds&response_type=code&redirect_uri=https%3A%2F%2Fmeramenteilustrativo.glitch.me%2Fcallback&permissions=470019271)')
  .addField('<:manuteno:454706152240840704>  Meu site', '[Clique Aqui](https://ryouji.glitch.me/)')
  .addField('<:info:454705542561136661> Servidor de Support', '[Clique Aqui](https://discord.gg/GyAPE8G)')
  .addField('<:bughunter:453013216881147904> Se você quiser reportar um Erro ou Bug no Bot entre em contato conosco neste link abaixo:', '[Clique Aqui](https://github.com/Gugui000/test-dash/issues)')
  .setFooter('Criado em 25 de Março de 2018')
  message.channel.send(embed);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['informações', 'info'],
	permLevel: 0
};

exports.help = {
	name: 'Info',
	category: 'Utilitários',
  enable: 'Sim',
	description: 'Informações sobre Ryouji',
	usage: 'r!info'
};
