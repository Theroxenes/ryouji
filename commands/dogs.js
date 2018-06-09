const { version } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
const fs = require('fs');
const snek = require('snekfetch');
const twemoji = require('twemoji');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
     const rps = require('random-puppy');
     const img = await rps()
     const embed = new Discord.RichEmbed()
     .setTitle('Dogs')
     .setColor('#23272A')
     .setImage(img)
     message.channel.send(embed)
  };

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['dogs'],
	permLevel: 0
};

exports.help = {
	name: 'Cachorrinho',
	category: 'Diversos',
  enable: 'Sim',
	description: 'Mostra um cachorrinho',
	usage: 'r!dogs'
};
