const Discord = module.require("discord.js");
const DBL = require("dblapi.js");
module.exports.run = async (bot, message, args) => {
    const dblmoji = bot.emojis.find("name", "discordbots");
    const lc = bot.emojis.find("name", "listcord");
    const botspace = bot.emojis.find("name", "botlistspace");
    const comp = bot.emojis.find("name", "computer_bsod");
    const gh = bot.emojis.find("name", "github");
    const up = bot.emojis.find("name", "upvote");
    const discordbotworld = bot.emojis.find("name", "discordbotworld");
    const dbl = new DBL(process.env.DBL_TOKEN, bot); 
    dbl.getBot("470989648747954176").then(botdbl => {
        let uptime = (bot.uptime / 1000 / 60);
   let m = new Discord.RichEmbed()
    .setTitle("About")
    .setDescription("Here is some info about this bot!")
    .setColor("RANDOM")
    .addField("📝 Bot Name", "EquippedDroid", true)
    .addField(`${comp} Bot created by`, "hernikplays#4673", true)
    .addField("📚 Library used", "discord.js", true)
    .addField("❗ Prefix", "e!", true)
    .addField(`${gh} Open Source`, "[Yes](https://github.com/discordies/Equippeddroid)",true)
    .addField("📃 OS License", "AGPL-v3.0", true)
    .addField("🔎 Version", "1.15", true)
    .addField("🕵 Moderating", `${bot.guilds.size} servers`, true)
    .addField("⬆ Uptime", `${uptime.toFixed(2)}min`, true)
    .addField("🔗 Voting Links", `${dblmoji} [DiscordBotList](https://discordbots.org/bot/470989648747954176/vote)\n${lc} [Listcord](https://listcord.com/bot/470989648747954176)\n${botspace} [botlist.space](https://botlist.space/view/470989648747954176)\n${discordbotworld} [discordbot.world](https://discordbot.world/bot/470989648747954176)`, true)
    .addField(`${up} DBL Upvotes`, botdbl.points, true)
    .setFooter("Thanks for using EquippedDroid!", "https://bot.hernikplays.tk/yeetcon.png")
    message.channel.send(m).then(msg => {msg.delete(100000)});
    })
}

module.exports.help = {
    name: "about"
}