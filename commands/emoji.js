const { version } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
const fs = require('fs');
const snek = require('snekfetch');
const twemoji = require('twemoji');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if(!args) return message.reply('Diga um emoji para eu pesquisar. Exemplo: r!emoji <:discordlogo:452852445001941002>')
try {
      const emote = Discord.Util.parseEmoji(args[0]);
      if (emote.animated === true) {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.gif?v=1`;
        const { body: buffer } = await snek.get(`${URL}`);
        const toSend = fs.writeFileSync('emote.gif', buffer);
        const embed = new Discord.RichEmbed()
        .setColor('#23272A')
        .setImage(URL);
        message.channel.send(embed)
      } else {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.png`;
        const { body: buffer } = await snek.get(`${URL}`);
        const toSend = fs.writeFileSync('emote.png', buffer);
        const embed = new Discord.RichEmbed()
        .setColor('#23272A')
        .setImage(URL);
        message.channel.send(embed)
      }
    } catch (error) {
      if (error.message === 'TypeError: Cannot read property \'1\' of null') {
        message.reply('Me de um emoji atual');
      }
    }
  };

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['emoji'],
	permLevel: 0
};

exports.help = {
	name: 'Emoji',
	category: 'Utilitários',
  enable: 'Sim',
	description: 'Expande o tamanho do emoji.',
	usage: 'r!emoji <emoji>'
};
