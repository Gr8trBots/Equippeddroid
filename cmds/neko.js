const Discord = module.require("discord.js");
const nekolife = require("nekos.life");
const neko = new nekolife();

module.exports.run = async (bot, message, args) => {
    
    console.log(await neko.getSFWNekoGif());

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("*meow*")
    .setImage(await neko.getSFWNekoGif())
    .addField("(^・w・^)", "Here is your Neko!")
    

    message.channel.send(embed);
}

module.exports.help = {
    name: "neko"
}