const Discord = require('discord.js')
exports.run = async (client, message, args, level) => { 
      if (!message.member.hasPermission(["MANAGE_ROLES"]))  return message.reply('Você não possui permissões para isso!')
      if (message.mentions.members.size === 0) return message.reply('Mencione alguém para receber um cargo!')
      const member = message.mentions.members.first();
      // This is the name of the role. For example, if you do 'role -add @York#2400 The Idiot Himself', the name of the role would be 'The Idiot Himself'.
      const name = args.slice(1).join(' ');
      // Find the role on the guild.
      const role = message.guild.roles.find('name', name);
      // End the command if the bot cannot find the role on the server.
      if (!role) return message.reply('Diga o nome do cargo para eu adioná-lo');

      const embed = new Discord.RichEmbed()
      .setTitle('Cargo Adicionado!')
      .setColor('#23272A')
      .setDescription(`<:yep:416325498130399234> **${role}** Adionado com sucesso a ${member}!`);

      try {
        await member.addRole(role);
        await message.channel.send(embed)
      } catch (e) {
        console.log(e);
      }
  };

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['adrole', 'addRole', 'addrole'],
	permLevel: 2
};

exports.help = {
	name: 'AddRole',
	category: 'Moderação',
  enable: 'Sim',
	description: 'Adiciona um cargo a um membro determinado',
	usage: 'r!addRole <membro> <nome do cargo>'
};