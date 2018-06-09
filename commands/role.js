exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	var user = message.mentions.members.first();
	var roleName = args.splice(2).join(' ');
	var role = message.guild.roles.find('name', roleName);


	switch (args[0]) {
		case 'add':
			if (!user) return message.reply('Você precisa mencionar um usuário válido deste servidor');
			if (!roleName) return message.reply('Você não pode dar cargos...');
			//console.log(user);
			//console.log(roleName);
			if (!message.guild.roles.find('name', roleName)) return message.reply('Nenhum cargo com este nome existe. _Os nomes de cargos fazem distinção entre maiúsculas e minúsculas_');
 			if (user.roles.exists('name', roleName)) return message.reply(':eyes: Eu vejo esse cargo neste usuário já!');


			user.addRole(role).then(() => message.reply('Cargo adicionado')).catch((err) => message.reply('Não é possível adicionar cargo').then(() => console.log(err)));
			break;
		case 'remove':

			if (!user) return message.reply('Você precisa mencionar um usuário válido deste servidor');
			if (!roleName) return message.reply('Você não pode remover nenhum cargo...');
			//console.log(user);
			//console.log(roleName);
			if (!message.guild.roles.find('name', roleName)) return message.reply('Nenhum cargo com este nome existe. _Os nomes de cargos fazem distinção entre maiúsculas e minúsculas._');

			if (!user.roles.find('name', roleName)) return message.reply('Esse usuário ainda tem o papel?');

			user.removeRole(role).then(() => message.reply('Cargo removido')).catch((err) => message.reply('Não é possível remover o cargo').then(() => console.log(err)));
			break;
		default:
			message.reply('Bem, você pode adicionar ou remover papéis... **r!help role**');
	}
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['role'],
	permLevel: 2
};

exports.help = {
	name: 'Role',
	category: 'Moderação',
  enable: 'Sim',
	description: 'Permite adicionar ou remover uma única função de um usuário',
	usage: 'r!role [add/remove] [mencione um usuário] [nome do cargo]'
};
