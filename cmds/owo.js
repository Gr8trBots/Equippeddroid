const Discord = module.require("discord.js");
const nekos = require('nekos.life');
const neko = new client();
module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.reply("Write something to OWOify!");
    let owo = await neko.getSFWOwOify({text: args[0]});
    message.channel.send(owo);
  
}

module.exports.help = {
    name: "owo"
}