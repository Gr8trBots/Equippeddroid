const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.reply("Invite the bot https://bot.discord.io/equippeddroid").then(msg => {msg.delete(10000)});
  
}

module.exports.help = {
    name: "invite"
}