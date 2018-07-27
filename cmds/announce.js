const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
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
    .setFooter("An announcment made at ")
    .setTimestamp()
send(message.channel, embed, {
 name: 'Announcment: ' + title,
 icon: message.guild.iconURL
});
  
}

module.exports.help = {
    name: "ann"
}