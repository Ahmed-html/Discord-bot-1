const Discord = require("discord.js");

function doMagic8BallVoodoo() {
	const rand = [
		"Yes",
		"No",
		"Why are you even trying?",
		"What do you think? NO",
		"Maybe",
		"Never",
		"Yep",
		"idk",
		"That's halal",
		"That's haram"
	];

	return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (client, message, args) => {
	if (!args[0])
		return message.channel.send(
			"Idiot, ask me question first to access to this command."
		);
	message.channel.send(`Anwser: ${doMagic8BallVoodoo()}`);
};

module.exports.help = {
	name: "8ball",
	description:
		"This command is used for asking the bot what he wanted to answer as 8ball.",
	usage: "!8ball <questions>",
	accessableby: "Member",
	aliases: []
};
