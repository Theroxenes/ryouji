const Discord = require('discord.js');
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const moment = require('moment')
moment.locale('pt-br')
const msg = message;
var time = Date.now();
if (!message.guild.available) return;
moment.locale('pt-br');

let serverRegion = {
    'amsterdam' : ':flag_nl: Amsterdã',
    'brazil'    : ':flag_br: Brasil',
    'eu-central': ':flag_eu: Europa Central',
    'eu-west'   : ':flag_eu: Europa Ocidental',
    'frankfurt' : ':flag_de: Frankfurt',
    'hongkong'  : ':flag_hk: Hong Kong',
    'japan'     : ':flag_ja: Japão',
    'london'    : ':flag_gb: Londres',
    'russia'    : ':flag_ru: Russia',
    'singapore' : ':flag_sg: Singapura',
    'sydney'    : ':flag_au: Sydney',
    'us-central': ':flag_us: EUA Central',
    'us-east'   : ':flag_us: EUA Oriental',
    'us-west'   : ':flag_us: EUA Ocidental',
    'us-south'  : ':flag_us: EUA Sul',
}[msg.channel.guild.region];

          const invite = await msg.channel.createInvite({maxAge: 0});
          const embed = new Discord.RichEmbed()
          .setTitle(`ㅤ`)
          .setAuthor(`${msg.guild.name}`, 'https://images-ext-1.discordapp.net/external/rXMwUDg4JWQ30e0YkTQkF2Fvf2KhlG2RdzyKztO4COA/https/cdn.discordapp.com/emojis/452852445001941002.png')
          .setColor('#23272A')
          .setThumbnail(msg.guild.iconURL)
		      .addField(`ID do Servidor`, `${msg.guild.id}`, true)
		      .addField(`:crown: Dono`, `${msg.guild.owner}`, true)
          .addField(":calendar: Criado em:", `${moment.utc(msg.guild.createdAt).format('LLLL')}`, true)
          .addField(":star2: Entrei em:", moment.utc(client.user.joinedAt).format('LLLL'), true)
          .addField(`Membros: (${msg.guild.memberCount})`, `:busts_in_silhouette: Pessoas: ${msg.guild.members.filter(member => !member.user.bot).size} | <:bot:454695663742222348> Bots: ${msg.guild.members.filter(member => member.user.bot).size} \n<:online:454695663549022220> **${msg.guild.members.filter(o => o.presence.status === 'online').size}** Online <:idle:454695663532507157> **${msg.guild.members.filter(i => i.presence.status === 'idle').size}** Ausente <:donotdisturb:454695663352152076> **${msg.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ocupado <:offline:454695663582576642> **${msg.guild.members.filter(off => off.presence.status === 'offline').size}** Offline`)          
          .addField('Ragião', `${serverRegion}`)
          .addField('Convite:', `${invite}`);
         msg.channel.send({embed});

};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['serverinfo'],
	permLevel: 0
};

exports.help = {
	name: 'ServerInfo',
	category: 'Diversos',
  enable: 'Sim',
	description: 'Irá dar-lhe informações sobre este servidor',
	usage: 'r!serverinfo'
};
