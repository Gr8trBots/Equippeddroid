const Discord = module.require("discord.js");
var discorddice = require('discorddice');
module.exports.run = async (bot, message, args) => {
    let mes = message;
    discorddice.dice(mes.author);
  
}

module.exports.help = {
    name: "dice"
}