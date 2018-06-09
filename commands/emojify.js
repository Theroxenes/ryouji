const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
 };

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

  if (args.length < 1) {
    message.channel.send('Digite um texto para o **EmojiFy**!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['emojify'],
	permLevel: 0
};

exports.help = {
	name: 'Emojify',
	category: 'Utilitários',
  enable: 'Sim',
	description: 'Informa algumas cores bases do Discord e do Design do Site',
	usage: 'r!cores'
};
