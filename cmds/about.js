const Discord = module.require("discord.js");
const DBL = require("dblapi.js");
module.exports.run = async (bot, message, args) => {
    const dbl = new DBL(process.env.DBL_TOKEN, bot); 
    dbl.getBot("470989648747954176").then(botdbl => {
        let uptime = (bot.uptime / 1000 / 60);
   let m = new Discord.RichEmbed()
    .setTitle("About")
    .setDescription("Here is some info about this bot!")
    .setColor("RANDOM")
    .addField("Bot Name", "EquippedDroid", true)
    .addField("Bot created by", "hernikplays#4673", true)
    .addField("Prefix", "e!", true)
    .addField("Open Source", "[Yes](https://github.com/discordies/Equippeddroid)",true)
    .addField("OS License", "AGPL-v3.0", true)
    .addField("Moderating", `${bot.guilds.size} servers`, true)
    .addField("Uptime", `${uptime}min`, true)
    .addField("Voting Links", "[DiscordBotList](https://discordbots.org/bot/470989648747954176/vote)\n[Listcord](https://listcord.com/bot/470989648747954176)", true)
    .addField("DBL Upvotes", botdbl.points, true)
    .setFooter("Thanks for using EquippedDroid!", "https://bot.hernikplays.tk/yeetcon.png")
    message.channel.send(m).then(msg => {msg.delete(100000)});
    })
}

module.exports.help = {
    name: "about"
}