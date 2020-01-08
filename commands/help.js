const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let noContentEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "help")
  .setDescription("Say `.commands` for a full list of available commands!")
  .addField("Description", "This command is to help you use UniBot by letting you know how to use certain commands.")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Use", ".help [command]")
  .addField("Example", ".help kick\n.help purge\n.help commands")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();


  // NOTE: 8ball
  let ballEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "8ball")
  .addField("Description", "This is a fun command that tells you answer to a question with the following answers\n • `Yes`\n • `Maybe`\n • `Maybe not`\n • `No`.")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Use", ".8ball [question]")
  .addField("Example", ".8ball Are you alive?\n.8ball Am I real?\n.8ball Are you a robot?")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  // NOTE: commands
  let commandsEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "commands")
  .addField("Description", "This commands sends a list of all available commands in your DMs.")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Use", ".commands")
  .addField("Example", ".commands")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  // NOTE: kick
  let kickEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "kick")
  .addField("Description", "This commands kicks mentioned user.")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`\n`KICK_MEMBERS`")
  .addField("Use", ".kick [mention user] [reason]")
  .addField("Example", ".kick @T4NJ1M#0001 3 warnings\n.kick @aaaaaa#7234 mass tag")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  // NOTE: ping
  let pingEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "ping")
  .addField("Description", "idk what to put here -t4")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Use", ".ping")
  .addField("Example", ".ping")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  // NOTE: purge
  let purgeEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "purge")
  .addField("Description", "This command deletes certain amount of messages.")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`\n`MANAGE_MESSAGES`")
  .addField("Use", ".purge [number of message]")
  .addField("Example", ".purge 5\n.purge 11\n.purge 50")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  // NOTE: say
  let sayEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "say")
  .addField("Description", "This command says whatever you input after the command and also deletes your message!")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`\n`MANAGE_MESSAGES`")
  .addField("Use", ".say [content]")
  .addField("Example", ".say I am a human\n.say Am I alive?.\n.say `bruh moment detected`")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  // NOTE: urbandictionary
  let urbanEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "urban")
  .addField("Description", "This command finds and sends the urban dictionary definition of the word input after the command!")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Use", ".urban [word]")
  .addField("Example", ".urban hello\n.urban existance\n.urban feels bad man")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();

  // NOTE: userinfo
  let userinfoEmbed = new Discord.RichEmbed()
  .setTitle("**Command Help**")
  .setColor("#00b4e0")
  .addField("Name", "userinfo")
  .addField("Description", "This command returns information about the user tagged!")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Use", ".userinfo [tag]")
  .addField("Example", ".userinfo @T4NJ1M#0001\n.userinfo @Dyno#4783")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setTimestamp();


  let content = args.join(" ");
  if (!content) return message.channel.send(noContentEmbed);
  if (content === "8ball") {
    message.channel.send(ballEmbed);
  }  else if (content === "commands") {
    message.channel.send(commandsEmbed);
  } else if (content === "kick") {
    message.channel.send(kickEmbed);
  } else if (content === "ping") {
    message.channel.send(pingEmbed)
  } else if (content === "purge") {
    message.channel.send(purgeEmbed)
  } else if (content === "say") {
    message.channel.send(sayEmbed)
  } else if (content === "urban") {
    message.channel.send(urbanEmbed)
  } else if (content === "userinfo") {
    message.channel.send(userinfoEmbed)
  }
}

module.exports.help = {
  name:"help"
}
