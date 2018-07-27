const Discord = module.require("discord.js");
const nekolife = require("nekos.life");
const neko = new nekolife();

module.exports.run = async (bot, message, args) => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setImage(neko.getSFWNeko)
    .setDescription("Here is your neko (^・w・^)")
    

    message.channel.send(embed);
}

module.exports.help = {
    name: "neko"
}