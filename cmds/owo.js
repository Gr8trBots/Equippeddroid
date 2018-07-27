const Discord = module.require("discord.js");
const nekos = require("nekos.life");
const neko = new nekos();
module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.reply("Nothing to OwOify");
    let owo = await neko.getSFWOwOify({text: args[0]});
  
}

module.exports.help = {
    name: "owo"
}