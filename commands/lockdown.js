const ms = require('ms')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

    if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
    if(!message.member.hasPermission("MANAGE_GUILD" , "MANAGE_CHANNELS")) return message.reply('Você não tem permissão para isso')
  if (!time) return message.reply('Você deve definir uma duração para o bloqueio em horas, minutos ou segundos');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('<:online:449942259778191363> Lockdown ecerrado!').then(msg => msg.delete(5000));
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`<:donotdisturb:449942259979255809> Este canal sofrerá um **Lockdown** por ${ms(ms(time), { long:true })}`).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('<:online:449942259778191363> Lockdown encerrado!')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }

};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['lockdown'],
	permLevel: 3
};

exports.help = {
	name: 'Lockdown',
	category: 'Moderação',
  enable: 'Sim',
	description: 'Bloqueia um canal por um certo tempo.',
	usage: 'r!lockdown <10s / 10m / 10h>'
};