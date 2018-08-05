const Discord = module.require("discord.js");
var discorddice = require('discorddice');
module.exports.run = async (bot, message, args) => {
    
    discorddice.dice(message.author);
  
}

module.exports.help = {
    name: "dice"
}