const Discord = require("discord.js");
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  var noMessageReply = new Discord.RichEmbed()
  .setTitle("8ball command help")
  .setColor("#00b4e0")
  .addField("Command name", "8ball")
  .addField("Permissions required", "`SEND_MESSAGES`\n`READ_MESSAGES`")
  .addField("Usage", ".8ball Will I ever be good at coding?\n.8ball Will the errors EVER stop coming my way?")
  .setFooter(client.user.username, client.user.avatarURL)

  if(!args[1]) return message.channel.send(noMessageReply);
  let replies = ["Yes", "No", "Maybe", "Maybe not"];

  let result = Math.floor((Math.random()*replies.length));
  let question = args.slice(0).join(" ");

  let thinkingEmbed1 = new Discord.RichEmbed()
  .setTitle("8Ball")
  .setColor("#00b4e0")
  .setThumbnail("http://www.mystic8ball.com/img/ajax-8ball.gif")
  .addField("Question", question)
  .addField("Answer", "Accessing my database[|-------]")
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp();

  let thinkingEmbed2 = new Discord.RichEmbed()
  .setTitle("8Ball")
  .setColor("#00b4e0")
  .setThumbnail("http://www.mystic8ball.com/img/ajax-8ball.gif")
  .addField("Question", question)
  .addField("Answer", "Accessing my database[||------]")
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp();

  let thinkingEmbed3 = new Discord.RichEmbed()
  .setTitle("8Ball")
  .setColor("#00b4e0")
  .setThumbnail("http://www.mystic8ball.com/img/ajax-8ball.gif")
  .addField("Question", question)
  .addField("Answer", "Accessing my database[|||-----]")
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp();

  let thinkingEmbed4 = new Discord.RichEmbed()
  .setTitle("8Ball")
  .setColor("#00b4e0")
  .setThumbnail("http://www.mystic8ball.com/img/ajax-8ball.gif")
  .addField("Question", question)
  .addField("Answer", "Accessing my database[||||----]")
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp();

  let thinkingEmbed5 = new Discord.RichEmbed()
  .setTitle("8Ball")
  .setColor("#00b4e0")
  .setThumbnail("http://www.mystic8ball.com/img/ajax-8ball.gif")
  .addField("Question", question)
  .addField("Answer", "Accessing my database[|||||---]")
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp();

  let resultEmbed = new Discord.RichEmbed()
  .setTitle("8Ball")
  .setColor("#00b4e0")
  .setThumbnail("https://cdn.emojidex.com/emoji/seal/8ball.png")
  .addField("Question", question)
  .addField("Answer", replies[result])
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp();

  botMsg = await message.channel.send(thinkingEmbed1);
  setTimeout(function () {
   botMsg.edit(thinkingEmbed2);
 }, 1000)
 setTimeout(function () {
   botMsg.edit(thinkingEmbed3);
 }, 1000)
 setTimeout(function () {
   botMsg.edit(thinkingEmbed4)
 }, 1000)
 setTimeout(function () {
   botMsg.edit(thinkingEmbed5)
 }, 1000)
 setTimeout(function () {
   botMsg.edit(resultEmbed)
   console.log(`8ball ran in #${message.channel.name} by @${message.author.username}`);
 }, 1000);
}

module.exports.help = {
  name:"8ball"
}
