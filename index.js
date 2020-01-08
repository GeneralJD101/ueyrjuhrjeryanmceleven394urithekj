const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require ('fs');
const ms = require ('ms');
bot.commands = new Discord.Collection;

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
 response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
 http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2000);

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("couldn't find commands")
    return;
  }

  jsfile.forEach((f) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props)
  });
});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

  bot.user.setActivity(`to FCPS students || Created by T4NJ1M`, {type:"LISTENING"})
});

bot.on("guildMemberAdd", function(member) {
  var users = member.guild.members.filter(member => !member.user.bot).size;
  var bots = member.guild.members.filter(member => member.user.bot).size;

  var welcomeMessage = new Discord.RichEmbed()
  .setTitle(`Welcome to the Fairfax County Public School students Discord Server!`)
  .setDescription("Welcome to the FCPS Students Discord server!\n\nThis server is for FCPS Students, made by FCPS students, and ran by FCPS students.\n\nThis is **not** an official Fairfax County server and we (the server administrators and owners) are, in no way other than being FCPS Students, affiliated with the Fairfax County Public Schools or school board.\n\nEnjoy your stay! Be sure to spread the invite link to your friends in FCPS!\n\n**#closeFCPS**")
  .setColor("#4881db")
  .setTimestamp()
  .setFooter(bot.user.username, bot.user.avatarURL);

  member.send(welcomeMessage);
  console.log(`${member.user.tag} joined`);

  if(member.guild.id === "655976100664573954") {
    member.guild.channels.find(c => c.id === "657889555235471360").setName(`Member Count: ${member.guild.memberCount}`)
    member.guild.channels.find(c => c.id === "657889893669928980").setName(`User Count: ${users}`);
    member.guild.channels.find(c => c.id === "657889915077656636").setName(`Bot Count: ${bots}`)
  }
});

bot.on("guildMemberRemove", function(member) {
  var users = member.guild.members.filter(member => !member.user.bot).size;
  var bots = member.guild.members.filter(member => member.user.bot).size;

  console.log(`${member.user.tag} left`);

  if(member.guild.id === "655976100664573954") {
    member.guild.channels.find(c => c.id === "657889555235471360").setName(`Member Count: ${member.guild.memberCount}`)
    member.guild.channels.find(c => c.id === "657889893669928980").setName(`User Count: ${users}`);
    member.guild.channels.find(c => c.id === "657889915077656636").setName(`Bot Count: ${bots}`)
  }
});

bot.on('presenceUpdate', (oldMember, newMember) => {
  if(newMember.guild.id === "655976100664573954") {
    member = newMember;
    onlyHumans = member.guild.members.filter(m => !m.user.bot);

    var numOfHumansOnline = onlyHumans.filter(m => m.presence.status === 'online').size;
    var numOfHumansIdle = onlyHumans.filter(m => m.presence.status === 'idle').size;
    var numOfHumansDND = onlyHumans.filter(m => m.presence.status === 'dnd').size;
    var numOfHumansOffline = onlyHumans.filter(m => m.presence.status === 'offline').size;

    member.guild.channels.find(c => c.id === "657899643861991434").setName(`Online: ${numOfHumansOnline}`);
    member.guild.channels.find(c => c.id === "657899663487401987").setName(`Idle: ${numOfHumansIdle}`);
    member.guild.channels.find(c => c.id === "657899690204856321").setName(`Do Not Disturb: ${numOfHumansDND}`);
    member.guild.channels.find(c => c.id === "657899710790500352").setName(`Offline: ${numOfHumansOffline}`);
  }
})

bot.on("message", function(message) {
  if (message.author.bot) return
  let prefix = ".";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(prefix)) return
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if(commandfile) commandfile.run(bot, message, args);
});

bot.login(process.env.TOKEN);