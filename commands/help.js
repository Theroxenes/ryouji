const Discord = require('discord.js');

exports.run = (client, message, args, level) => {
	var time = Date.now();

	if (!args[0]) {
		const myCommands = client.commands.filter(c => c.conf.permLevel <= level);
		const commandNames = myCommands.keyArray();
		const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
		let currentCategory = '';
		//var embed = new Discord.RichEmbed();
		//let output = `= Command List =\n\n[Use [prefix]help <commandname> for details]\n`;
		var embeds = [];
		embeds[0] = new Discord.RichEmbed();
		embeds[0].setTitle('Lista de Comando \n (Use [prefix]help [nome do to comando] para detalhes)');
		embeds[0].setAuthor(client.user.username, client.user.avatarURL || client.user.defaultAvatarURL);
		const sorted = myCommands.sort((p, c) => p.help.category > c.help.category ? 1 : -1);

		//console.log(sorted);
		//console.log(sorted.entries());

		var i = 0;
		var eN = 0;
		sorted.forEach(c => {
			i++;
			//console.log(i);
			if (i % 18 === 0) {
				eN++;
				//console.log(eN);
				embeds[eN] = new Discord.RichEmbed();
				//console.log(embeds);
			}
			const cat = c.help.category.toProperCase();
			if (currentCategory !== cat) {
				//if (message.channel.type !== 'dm' || cat !== 'Moderation') {
				//output += `\n== ${cat} ==\n`;
				embeds[eN].addField('-=-=-=-=-=-', `**${cat}**`);
				//}
				//output += `\n== ${cat} ==\n`;
				currentCategory = cat;
			}
			//if (cat === 'Moderation' && message.channel.type === 'dm') {
			//output += '';
			//} else {
			//output += `${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
			embeds[eN].addField(`${c.help.name}${' '.repeat(longest - c.help.name.length)}`, c.help.description);
			//}
		});

		//if (output.length > 1800) { // Had to add this
		//var chunks = [];

		//for (var i = 0, charsLength = output.length; i < charsLength; i += 1800) {
		//chunks.push('```' + output.substring(i, i + 1800) + '```'); // eslint-disable-line prefer-template, no-useless-escape, newline-per-chained-call
		//}

		//console.log(chunks);
		//for (var c = 0; c < chunks.length; c++) {
		//endOutput += chunks[i];
		if (message.channel.type === 'dm' || client.settings.get(message.guild.id).sendHelp === 'channel') {
			//message.channel.send(output, {code:'asciidoc', split: true}).catch(console.error); 
			//message.channel.send({ embed, split:true}).catch((err) => { console.error(err); });

			var eNumber = 0;
			embeds.forEach((e) => {
				eNumber++;
				e.setColor('#7289DA');
				if (eNumber === embeds.length) {
					e.setFooter(`Time taken: ${Date.now() - time}ms`);
				}
				message.channel.send({ embed: e }).catch((err) => { console.error(err); });
			});
		} else {
			//message.author.send(output, {code:'asciidoc', split: true}).catch(console.error);
			//message.channel.send({ embed, split:true}).catch((err) => { console.error(err); });
			embeds.forEach((e) => {
				e.setColor('#7289DA');
				e.setFooter(`Time taken: ${Date.now() - time}`);
				message.channel.send({ embed: e }).catch((err) => { console.error(err); });
			});
			message.react('👍');
		}
		//}

		//var helpEmbed = new Discord.RichEmbed()
		//.setTitle('Commands')
		//.setDescription(`\`\`\`asciidoc\n${output}\`\`\``);
		//}
	} else {
		let command = args[0];
		if (client.commands.has(command) || client.aliases.has(command)) {
			command = client.commands.get(command) || client.commands.get(client.aliases.get(command));
			//message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`, { code: 'asciidoc' });
			var aliases;
			if (command.conf.aliases.length === 0) {
				aliases = 'NONE';
			} else {
				aliases = command.conf.aliases;
			}

			//console.log(aliases);
			var hEmbed = new Discord.RichEmbed()
				.setTitle(`Comando Ajuda: ${command.help.name}`)
				.addField('Descrição', command.help.description)
				.addField('Categoria', command.help.category)
				.addField('Uso', command.help.usage)
				.addField('Ligado', command.conf.enabled)
				.addField("Desligado em DM's", command.conf.guildOnly)
				.addField('Aliases', aliases)
				.addField('Nível de Permissão [0= Usuário, 2= Moderador, 3= Administrador, 4= Dono do Servidor]', command.conf.permLevel)
        
				.setFooter(`Time taken: ${Date.now() - time}ms`);

			if (message.channel.type === 'dm' || client.settings.get(message.guild.id).sendHelp === 'channel') {
				message.channel.send({ embed: hEmbed });
			} else {
				message.author.send({ embed: hEmbed });
				message.react('👍');
			}
		} else {
      const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor('#23272A')
      .setDescription(':mag_right: :x: Comando não encontrado')
			return message.channel.send(embed);
		}
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['h', 'halp', 'help'],
	permLevel: 0
};

exports.help = {
	name: 'Help',
	category: 'Sistema',
  enable: 'Sim',
	description: 'Exibe todos os comandos disponíveis para o seu nível de permissão.',
	usage: 'r!help / r!help [comando]'
};
