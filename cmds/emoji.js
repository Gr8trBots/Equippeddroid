const Discord = module.require("discord.js");
const sharp = require("sharp");
const path = require("path");
const makemoji = require("make-emoji");
module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("You need the 'MANAGE_EMOJIS' permission to do that!");
    if(!args[0]) return message.reply("You need to send me a link to the file you want the emoji made of!");
    if(!args[1]) return message.reply("Send me the name of the emoji!");
    if(args[2]) return message.reply("No spaces!")
    makemoji(args[0], "4", args[1])
  
}

module.exports.help = {
    name: "emoji"
}