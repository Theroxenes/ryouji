exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
	if (!args[0]) return message.reply('Indique um comando');
 if(!message.author.id == '292065674338107393') return message.reply('Você não é o meu Dono')
	let command;
	if (client.commands.has(args[0])) {
		command = client.commands.get(args[0]);
	} else if (client.aliases.has(args[0])) {
		command = client.commands.get(client.aliases.get(args[0]));
	}
	if (!command) return message.reply(`O comando \`${args [0]}\` parece não existir, nem é um alias. Tente novamente!`);
	command = command.help.name;

	delete require.cache[require.resolve(`./${command}.js`)];
	const cmd = require(`./${command}`);
	client.commands.delete(command);
	client.aliases.forEach((cmd, alias) => {
		if (cmd === command) client.aliases.delete(alias);
	});
	client.commands.set(command, cmd);
	cmd.conf.aliases.forEach(alias => {
		client.aliases.set(alias, cmd.help.name);
	});

	message.reply(`O comando \`${command}\` foi recarregado`);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['reload'],
	permLevel: 10
};

exports.help = {
	name: 'Reload',
	category: 'Sistema',
  enable: 'Sim',
	description: 'Recarrega um comando que foi modificado.',
	usage: 'r!reload [comando]'
};
