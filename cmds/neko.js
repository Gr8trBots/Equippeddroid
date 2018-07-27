const Discord = module.require("discord.js");
const nekolife = require("neko.life");

module.exports.run = async (bot, message, args) => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("Here is your neko (^・x・^)")
    .setImage(nekolife.getSFWTickle)
}

module.exports.help = {
    name: "neko"
}