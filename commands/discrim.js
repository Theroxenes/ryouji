const Discord = require('discord.js')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

    // Form Embed
    const embed = new Discord.RichEmbed()
        .setColor('WHITE');
    
    // Check if they entered a number between 0-10000
    if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) { // Run if out of parameters
        
        // Update embed footer
        embed.setFooter('Indique uma discriminação válida! Exemplo: `#0001`');
        
        // Send error message
        return message.channel.send(embed);
        
    }
    
   // Initialize response string
   let resp = '';
   
   // Go through each user connected to the bot
   client.users.map(function(user) {
       
       // The if statement will check if the input is equal to the user's discrim
       if (user.discriminator == args[0]) return resp += `${user.username}\n`;
       else return; // If not, return
       
   })
   
    // Add embed options
    embed.setTitle(`Discrim: ${args[0]}`)
        .setDescription(resp)
        .setFooter('Estes foram os membros que eu encontrei com essa descriminação!')
        
    // Send Embed
    message.channel.send(embed)
    

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['discrim', 'discriminator'],
	permLevel: 0
};

exports.help = {
	name: 'Discrim',
	category: 'Diversos',
  enable: 'Sim',
	description: 'Procura por usuários com essa descriminação.',
	usage: 'r!discrim <um código de discriminação `#0001`>'
};