const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

  //-----------------------------------------------vabiables

  var kickMember = message.mentions.members.first();
  var reason = args.splice(1, args.length).join(" ");
  var modlogs = message.guild.channels.find(GuildChannel => GuildChannel.name === "modlogs")
  const t4 = message.guild.members.find(m => m.id === "239823359502843904");

  if (reason == "" || reason == " " || reason == undefined) {
    var kickReason = "No reason given"
  } else {
    var kickReason = reason
  };

  let noMessageReply = new Discord.RichEmbed()
  .setTitle("Kick command help")
  .setColor("#00b4e0")
  .addField("Command name", "Kick")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`\n`KICK_MEMBERS`")
  .addField("Usage", ".kick @T4NJ1M#0001 cease your faggotry\n.kick @aaaaaa you done screwed up")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  if (!kickMember) return message.channel.send(noMessageReply)
  if (!kickMember.kickable) return message.channel.send("I don't have sufficient permissions to kick the person! Make sure the person is under my highest role and I have the `KICK_MEMBERS` permission.")
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have `KICK_MEMBERS` permission!")

  let userkickedEmbed = new Discord.RichEmbed()
  .setTitle("User Kicked")
  .setAuthor(`Moderator: ${message.author.username}`)
  .setThumbnail(kickMember.user.avatarURL)
  .setColor("#ff3c00")
  .addField("Kicked User:", kickMember, true)
  .addField("Moderator", `<@${message.author.id}>`, true)
  .addField("Reason:", kickReason)
  .setTimestamp()
  .setFooter(bot.user.username, bot.user.avatarURL)

  let kickedEmbed = new Discord.RichEmbed()
  .setTitle("You've been kicked")
  .setDescription(`You have been kicked from ${message.guild.name} Discord Server!`)
  .setColor("#FF0000")
  .addField("Moderator", `<@${message.author.id}>`)
  .addField("Reason", kickReason)
  .setTimestamp()
  .setFooter(bot.user.username, bot.user.avatarURL);

  kickMember.send(kickedEmbed);
  
  setTimeout(function() {
        kickMember.kick(`${reason}, Moderator: ${message.author.username}#${message.author.discriminator}`)
  }, 500);

  try {
    modlogs.send(userkickedEmbed);
    console.log(`@${kickMember.user.username}#${kickMember.user.discriminator} was kicked by @${message.author.username}`);
  } catch(err){
    t4.send(`**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Author:** <@${message.author.id}>\n**Command message content:** ${message.content}\n**Error:** ${err.toString()}\n**Comments:** #modlogs not found`);
  }
  message.channel.send(`Kicked \`${kickMember.user.username}#${kickMember.user.discriminator}\``)
  
}
 
module.exports.help = {
  name:"kick"
}