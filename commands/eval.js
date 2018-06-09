const Discord = require('discord.js')
function clean(text) {if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)); else return text;};   


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

const msg = message;

if(!msg.author.id == '292065674338107393') return msg.reply('Você não é o meu Dono')

    try {
      const code = args.join(" ");
      let evaled = eval(code) 
      if(!code)return msg.reply('Digite um código')
      if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);      
      const embed = new Discord.RichEmbed()
      .setTitle("<:yep:416325498130399234> Executado!")
      .setColor("#00ff00")
      .addField(`:inbox_tray: Imput`, '```' + (code) + '```')
      .addField(`:outbox_tray: Output:`, '```' + clean(evaled) + '```')
      msg.channel.send({embed})
      msg.channel.send({code:"xl"});
    } catch (err) {
      var code = args.join(' ')
      const embed = new Discord.RichEmbed()
      .setTitle("<:nop:416325498231324682> Error")
      .setColor("#ff0000")
      .addField(`:inbox_tray: Imput`, '```' + (code) + '```')
      .addField(`:outbox_tray: Output:`, '```' + clean(err) + '```')
      msg.channel.send({embed})
    }

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['eval', 'exec'],
	permLevel: 10
};

exports.help = {
	name: 'Eval',
	category: 'Sistema',
  enable: 'Sim',
	description: 'Executar um código Java',
	usage: 'r!eval <código>'
};
