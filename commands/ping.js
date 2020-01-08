const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Pong! `" + `${Date.now() - message.createdTimestamp}` + "ms`");
  console.log(`ping ran in #${message.channel.name} by @${message.author.username}`);
}

module.exports.help = {
  name:"ping"
}