const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.reply("Check the bot's status on https://botstatus.hernikplays.tk").then(msg => {msg.delete(10000)});
  
}

module.exports.help = {
    name: "status"
}