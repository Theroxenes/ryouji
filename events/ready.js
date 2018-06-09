/* global wait */
module.exports = async client => {

	if (!client.user.bot) {
		client.log('ERROR', 'This code must be run on a bot user. Running this bot code on a normal user may not work as expected and is against the Discord Terms of Service.', 'INFO');
		return process.exit(0);
	}

	// Why await here? Because the ready event isn't actually ready, sometimes
	// guild information will come in *after* ready. 1s is plenty, generally,
	// for all of them to be loaded.
	await wait(500);

	client.appInfo = await client.fetchApplication();
	setInterval(async () => {
		client.appInfo = await client.fetchApplication();
	}, 6000);

	require('../modules/dashboard')(client);

	var cMembers = client.users.filter(u => u.id !== '1').size; // Get's number of members cached. (Filters out Clyde)
	var gCount = client.guilds.size;
	// Both `wait` and `client.log` are in `./modules/functions`.

	// Ensure that any guild added while the bot was offline gets a default configuration.
	var g = [];
	client.guilds.forEach(guild => g.push(guild.id));

	for (var i = 0; i < g.length; i++) {
		if (!client.settings.get(g[i])) {
		       client.settings.set(g[i], client.config.defaultSettings);
		}
	}

	var game = client.config.playingGame.replace('{{prefix}}', client.config.defaultSettings.prefix).replace('{{guilds}}', gCount).replace('{{version}}', client.version);
	client.user.setPresence({status: client.config.status, game: {name: game, type:0}});

  const Discord = require("discord.js");
  const DBL = require("dblapi.js");
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1MjU4NTIwNTk3NTM1MTI5NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTI4NTgyNzQxfQ.KwgNP7Nmr-yoAmLkP1XoRm5Hn4NDIOwBeSMiVu1kHjE', client);
    setInterval(() => {
        dbl.postStats(client.guilds.size, client.shards.id, client.shards.total);
    }, 1800000);  

};