const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.id === "239823359502843904") {
    var noMessageReply = new Discord.RichEmbed()
    .setTitle("Say command help")
    .setColor("#00b4e0")
    .addField("Command name", "Say")
    .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`\n`MANAGE_MESSAGES`")
    .addField("Example", ".say tanjim needs to cease his faggotry\n.say your existance in this server is unnecessary.\n.say `bruh moment detected`")
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setTimestamp();

    let content = args.join(" ");

    if(!content) {
      message.channel.send(noMessageReply);
      console.log(`say ran in ${message.channel.name} by ${message.author.username}, noMessageReply was sent`);
    } else {
      message.delete().catch()
      message.channel.send(content);
      console.log(`${message.author.username} ran the say command, say content: ${content}`);
    } 
  } else {
    message.channel.send("You don't have `MANAGE_MESSAGES` perission!");
    console.log(`say ran in #${message.channel.name} by @${message.author.username}, no permission error sent`);
  }
}

module.exports.help = {
  name:"say"
}
