const request = require("request");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	request("https://some-random-api.ml/img/cat", (error, _response, body) => {
		const json = JSON.parse(body);
		const { link } = json;

		const emb = new Discord.MessageEmbed();
		emb.setDescription("**Cat:**");
		emb.setColor("BLUE");
		emb.setImage(link);

		message.channel.send(emb);
	});
};

module.exports.help = {
	name: "cat",
	description: "This command is used for posting cat's images randomly.",
	usage: "!cat",
	accessableby: "Members",
	aliases: []
};
