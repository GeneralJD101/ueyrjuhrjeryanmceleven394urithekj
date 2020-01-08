const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  commandsMessage = new Discord.RichEmbed()
  .setTitle("Commands list")
  .setDescription("**Say '.help [command]' to view more information about a command!**")
  .setColor("#00b4e0")
  .addField("**Fun commands**", ".8ball [question]\n.ping\n.say [message]\n.urban [word]")
  .addField("Informative Commands", ".commands\n.userinfo [mention user]\n.help [commands (optional)]")
  .addField("**Moderation commands [requires special permissions, say `.help [command]` for more information]**", ".purge [amount of message]\n.kick [user] [optional reason]\n.ban [user] [optional reason] *not implemented yet*")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  messageSentMessage = new Discord.RichEmbed()
  .setTitle("Commands")
  .setColor("#00ecff")
  .setDescription(`A full list of commands have been sent in your DMs!`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();;

  message.author.send(commandsMessage);
  message.channel.send(messageSentMessage);
  console.log(`commands ran in #${message.channel.name} by @${message.author.username}`);
}

module.exports.help = {
  name:"commands"
}
