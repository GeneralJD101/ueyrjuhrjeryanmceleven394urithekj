const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  var noMessageReply = new Discord.RichEmbed()
  .setTitle("Userinfo command help")
  .setColor("#00b4e0")
  .addField("Command name", "Userinfo")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Example", ".userinfo @T4NJ1M#0001\n.userinfo @Dyno#4783")
  .setFooter(bot.user.username, bot.user.avatarURL);

  infoUser = message.mentions.users.first();
  if (!infoUser) return message.channel.send(noMessageReply);

  userIcon = infoUser.avatarURL

  embedMessage = new Discord.RichEmbed()
  .setTitle("User information")
  .setColor("#38c6e2")
  .setThumbnail(userIcon)
  .addField("Username", `${infoUser.tag}`)
  .addField("User ID", `${infoUser.id}`)
  .addField("Status", `${infoUser.presence.status}`)
  .addField("Created on", `${infoUser.createdAt}`)
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp();


  message.channel.send(embedMessage);
  console.log(`userinfo ran on @${infoUser.username} by #${message.author.username}`);
}

module.exports.help = {
  name: "userinfo"
}
