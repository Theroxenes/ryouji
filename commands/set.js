const { inspect } = require('util');

exports.run = async (client, message, [action, key, ...value], level) => { // eslint-disable-line no-unused-vars, complexity

	const settings = client.settings.get(message.guild.id);


	// First, if a user does `r!config add <key> <novo valor>`, let's add it
	if (action === 'add') {
		if (!key) return message.reply('Por favor, especifique uma chave para adicionar');
		if (settings[key]) return message.reply('Esta chave já existe nas configurações');
		if (value.length < 1) return message.reply('Por favor especifique um valor');

		if (value.length > 1) {
			for (var i = 0; i < value.length; i++) {
				console.log(value[i]);
				value[i] = value[i].replace(',', '');
				console.log(value[i]);
			}
		} else if (value[0].indexOf(',') > -1) {
			value = value[0].split(',');
			//console.log(typeof value);
			//console.log(value);

		} else {
			if (key === "swearWords" || key === "inviteWhitelist") {
				var vArray = [];
				value.indexOf(',') > -1 ? vArray = value[0].split(',') : vArray.push(value[0]);
				value = vArray;
			} else {
				value = value[0];
			}
			//console.log(typeof value);
			//console.log(value);
		}


		// `value` being an array, we need to join it first.
		settings[key] = value;

		// One the settings is modified, we write it back to the collection
		client.settings.set(message.guild.id, settings);
		message.reply(`${key} successfully added with the value of ${value}`);
	} else

	// Secondly, if a user does `-set edit <key> <new value>`, let's change it
	if (action === 'edit') {
		if (!key) return message.reply('Por favor, especifique um valor para editar');
		if (!settings[key]) return message.reply('Este valor não existe nas configurações');
		if (value.length < 1) return message.reply('Por favor especifique um novo valor');
		//console.log(typeof value);
		//console.log(value);
		//if (typeof value === 'object') {
		//value = value[0].split(',');
		// console.log(value.length);
		if (value.length > 1) {
			for (var i = 0; i < value.length; i++) { //eslint-disable-line no-redeclare
				console.log(value[i]);
				value[i] = value[i].replace(',', '');
				console.log(value[i]);
			}
		} else if (value[0].indexOf(',') > -1) {
			value = value[0].split(',');
			//console.log(typeof value);
			//console.log(value);

		} else {
			value = value[0];
			//console.log(typeof value);
			//console.log(value);
		}
		//console.log(value);
		//} else {
		//value = value.join(' ');
		//}
		//console.log(value);

		settings[key] = value;

		client.settings.set(message.guild.id, settings);
		message.reply(`${key} successfully edited to ${value}`);
	} else

	// Thirdly, if a user does `-set del <key>`, let's ask the user if they're sure...
	if (action === 'del') {
		if (!key) return message.reply('Por favor, especifique um valor para excluir.');
		if (!settings[key]) return message.reply('Esta chave não existe nas configurações');

		// Throw the 'are you sure?' text at them.
		const response = await client.awaitReply(message, `Tem certeza de que deseja excluir permanentemente ${key}? Isto não pode ser **DESFEITO**. Diga **Sim** para confirmar ou **Cancelar** para óbviamente cancelar.`);

		// If they respond with y or yes, continue.
		if (['sim', 'Sim'].includes(response)) {

			// We delete the `key` here.
			delete settings[key];
			client.settings.set(message.guild.id, settings);
			message.reply(`${key} foi excluído com sucesso.`);
		} else
		// If they respond with n or no, we inform them that the action has been cancelled.
		if (['Não', 'Cancelar'].includes(response)) {
			message.reply('Ação Cancelada.');
		}
	} else

	if (action === 'get') {
		if (!key) return message.reply('Por favor especifique um valor para ver');
		if (!settings[key]) return message.reply('Este valor não existe nas configurações');
		message.reply(`O valor de ${key} é atualmente ${settings[key]}`);
	} else {
		message.channel.send(inspect(settings), { code: 'json' });
	}
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['setting', 'settings', 'config'],
	permLevel: 3
};

exports.help = {
	name: 'Config',
	category: 'Sistema',
  enable: 'Sim',
	description: 'Visualize ou altere as configurações do seu servidor.',
	usage: 'r!config [get] [key]\n r!set [edit] [key] [value]\n r!set [add] [key] [value]\n r!set [del] [key]'
};
