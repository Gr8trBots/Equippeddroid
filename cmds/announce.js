const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const pingmoji = bot.emojis.find("name", "piingblob");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
    const color = args[0]
    let title = args[0];
    const text = args.slice(1).join(" ");
    const author = message.author;
    if (text.length < 1) return message.channel.send("Can not announce nothing");
    //const colour = args.slice(2).join("");
    const embed = new Discord.RichEmbed()
    .setColor("#458B00")
    .setThumbnail(message.guild.iconURL)
    .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
    .setFooter(`An announcement made at ${message.createdTimestamp}`)
    .setTitle(`${pingmoji} Announcement: ${title}`)
    .setTimestamp()

    let annChannel = message.guild.channels.find(`name`, "announcements");
        if(!annChannel) return message.channel.send("Cannot find 'announcements' channel. Please create one, or report an error (e!error).");

   annChannel.send({embed: embed});
  
}

module.exports.help = {
    name: "ann"
}