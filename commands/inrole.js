const { version } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
const fs = require('fs');
const snek = require('snekfetch');
const twemoji = require('twemoji');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 let roleName = message.content.split(" ").slice(1).join(" ");
 if(!roleName) return message.reply('Diga um cargo para eu procurar!') 

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    let membersWithRole = message.guild.members.filter(member => { 
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.user.username;
    })


try {

    return message.channel.send(membersWithRole.join("\n"))
} catch(err) {
  message.channel.send('Perdão, ' + message.author + '. Mas o número de caracteres excede o número máximo permitido pelo Discord')
};
  };

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['inrole'],
	permLevel: 2
};

exports.help = {
	name: 'Inrole',
	category: 'Utilitário',
  enable: 'Sim',
	description: 'Mostra a lista de membros que possuem um cargo',
	usage: 'r!inrole <nome do cargo>'
};
