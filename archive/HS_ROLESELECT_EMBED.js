const AHS = "658094960180199425";
const CEHS = "658094960398041137";
const CHHS = "658094960977117244";
const EHS = "658094964408057866";
const FHS = "658094962281283594";
const FCHS = "658095594052780072";
const HHS = "658094964063993863";
const LAHS = "658094960662544394";
const LEHS = "658094965267759154";
const JMHS = "658094960473538591";
const JHS = "658095747765501984";
const MHS = "658094965238530048";
const MLHS = "658094960486383647";
const MVHS = "658094960951689226";
const OHS = "658094961325113374";
const SCHS = "658094964156399626";
const SLHS = "658094960809213962";
const TJHSST = "658101680293937162";
const WHS = "658094964022050847";
const WPHS = "658094960742236171";
const WSHS = "658094962100928553";
const WOHS = "658094961094557699";
const MS = "658107457759084564";
const one = "1️⃣";
const two = "2️⃣";
const three = "3️⃣";
const four = "4️⃣";
var letters = [AHS, CEHS, CHHS, EHS, FHS, FCHS, HHS, LAHS, LEHS, JMHS, JHS, MHS, MLHS, MVHS, OHS, SCHS, SLHS, TJHSST, WHS, WPHS, WSHS, WOHS, MS, one, two, three, four];
var letlength = letters.length-1;

bot.on("message", async function(message) {
  if(message.content.startsWith("!!!")) {
    embed1 = new Discord.RichEmbed()
    .setTitle("**SELF SELECT ROLES**")
    .setColor("#00B4D0")
    .addField("***Disclaimer:***", "*Assigning yourselves to these roles are completely* ***voluntary*** *and will not limit your access to regular channels of the discord.*")
    .addField("**How to use:**", "React the emojis corresponding to the role(s) you wish to receive. Having more than one High School role or more than one grade level role will result in one/all of your HS/Grade level role(s) to be removed.\n")
    .addField("**High Schools:**", `${bot.emojis.get(AHS)} - Annandale HS\n${bot.emojis.get(CEHS)} - Centreville HS\n${bot.emojis.get(CHHS)} - Chantilly HS\n${bot.emojis.get(EHS)} - Edison HS\n${bot.emojis.get(FHS)} - Fairfax HS\n${bot.emojis.get(FCHS)} - Falls Church HS\n${bot.emojis.get(HHS)} - Herndon HS\n${bot.emojis.get(LAHS)} - Langley HS\n${bot.emojis.get(LEHS)} - Lee HS\n${bot.emojis.get(JMHS)} - James Madison HS\n${bot.emojis.get(JHS)} - Justice HS\n${bot.emojis.get(MHS)} - Marshall HS\n${bot.emojis.get(MLHS)} - McLean HS\n${bot.emojis.get(MVHS)} - Mount Vernon HS\n${bot.emojis.get(OHS)} - Oakton HS\n${bot.emojis.get(SCHS)} - South County HS\n${bot.emojis.get(SLHS)} - South Lakes HS\n${bot.emojis.get(TJHSST)} - Thomas Jefferson HSST\n${bot.emojis.get(WHS)} - Westfield HS\n${bot.emojis.get(WPHS)} - West Potomac HS`);

    embed2 = new Discord.RichEmbed()
    .setColor("00B4D0")
    .addField("**High Schools:**", `${bot.emojis.get(WSHS)} - West Springfield HS\n${bot.emojis.get(WOHS)} - Woodson HS\n${bot.emojis.get(MS)} - Middle School`)
    .addField("**Grade Level:**", `${one} - Freshman\n${two} - Sophomore\n${three} - Junior\n${four} - Senior`)
    .setFooter("SELF SELECT ROLE SYSTEM", bot.user.avatarURL);

    try {
      sntembed1 = await message.channel.send(embed1);
      for (let i = 0; i < 20; i++) {
        await sntembed1.react(letters[i]);
      }
    } catch (error) {
      console.log(error);
    }

    try {
      sntembed2 = await message.channel.send(embed2);
      for (let i = 20; i < letlength+1; i++) {
        await sntembed2.react(letters[i]);
      }
    } catch (error) {
      console.log(error);
    }
  }
});