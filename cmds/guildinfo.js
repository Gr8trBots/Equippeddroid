let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let ban = guild.fetchBans()
  .then(bans => console.log(`This guild has ${bans.size} bans`))
  .catch(console.error);
    if(!message.guild.available) return message.channel.send("EquippedBot has encountered an error. Please report this in our support server: https://discord.gg/zfTG2Xv")    
    let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setDescription("This is some of the info I could find about this guild:")
            .setColor("#50ed50")
            .setTimestamp()
            .addField("Guild Name", `${message.guild.name}`, true)
            .addField("ID", `${message.guild.id}`, true)
            .addField("Guild created at", `${message.guild.createdAt}`, true)
            .addField("Icon URL", `${message.guild.iconURL}`, true)
            .addField("Member count", `${message.guild.memberCount}`, true)
            .addField("Guild was created by", `${message.guild.owner}`, true)
            .addField("Bot joined this guild on", `${message.guild.joinedAt}`, true)
            .addField("Banned users in this guild", guild.fetchBans()
            .then(bans => console.log(`This guild has ${bans.size} bans`))
            .catch(console.error), true )
            .setFooter(`Thanks for using EquippedDroid`, "https://bot.hernikplays.tk/yeetcon.png")
            
            
         message.channel.send({embed: embed});
    
}

module.exports.help = {
    name: "guildinfo"
}