const Discord = module.require("discord.js");
const nekolife = require("nekos.life");

module.exports.run = async (bot, message, args) => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setImage(nekolife.getSFWNeko)
    .setDescription("Here is your neko (^・x・^)")
    

    message.channel.send(embed);
}

module.exports.help = {
    name: "neko"
}