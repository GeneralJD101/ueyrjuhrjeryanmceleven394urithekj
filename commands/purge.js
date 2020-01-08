const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var noMessageReply = new Discord.RichEmbed()
  .setTitle("Purge command help")
  .setColor("#00b4e0")
  .addField("Command name", "Purge")
  .addField("Permissions required", "MANAGE MESSAGES")
  .addField("Usage:", ".purge 2\n.purge 5\n.purge 10")
  .setFooter(bot.user.username, bot.user.avatarURL);


  var modlogs = message.guild.channels.find(n => n.name === "modlogs");

  const t4 = message.guild.members.find(m => m.id === "239823359502843904");


  if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.id === "239823359502843904") {
    if(!args[0]) {
      return message.channel.send(noMessageReply)
    } else {
      var purgeInput = args[0]
      var purgeInt = parseInt(purgeInput)
      var purgeNum = purgeInt+1

      var modlogsReply = new Discord.RichEmbed()
      .setTitle("Moderation Log")
      .setColor("#07db3f")
      .setThumbnail("http://pngimg.com/uploads/eraser/eraser_PNG45.png")
      .addField("**Action**", "Purge")
      .addField("**Moderator:**", `<@${message.author.id}>`, true)
      .addField("**Channel: **", `<#${message.channel.id}>`, true )
      .addField(`**Amount of messages purged: **`, `${purgeInput}`)
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.avatarURL);

      if(purgeNum <= 100){
        try {
          message.channel.bulkDelete(purgeNum).then(() =>
          message.channel.send("Deleted " + purgeInput + " message(s).")
          .then(msg => msg.delete(5000)))
          .then(() => {
            try {
              modlogs.send(modlogsReply);
            } catch(err){
              t4.send(`**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Author:** <@${message.author.id}>\n**Command message content:** ${message.content}\n**Error:** ${err.toString()}\n**Comments:** #modlogs not found`);
            };
          });
          console.log(`${purgeInput} messages purged from #${message.channel.name} by @${message.author.username}`)
        } catch (err) {
          t4.send(`**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Author:** <@${message.author.id}>\n**Command message content:** ${message.content}\n**Error:** ${err.toString()}`);
        }
      } else {
        message.channel.send("Put a number less than 100 and try again.")
      };
    }
        
  } else {
    message.channel.send("You don't have `MANAGE_MESSAGES` perission!");
  }
}

module.exports.help = {
  name:"purge"
}
