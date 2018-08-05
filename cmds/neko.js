const Discord = module.require("discord.js");
const nekoslife = require("nekos.life");
const neko = new nekoslife();
module.exports.run = async (bot, message, args) => {
    const owo = bot.emojis.find("name", "blobowo");
    
    let isorno = Math.floor((Math.random() * 2) + 1); 
    if (isorno <= 1){
        let pic = await neko.getSFWNeko();
    let picStr = JSON.stringify(pic);
    let picSlice = picStr.slice(8);
    let picGet = picSlice.slice(0, -2);
    let emb = new Discord.RichEmbed()
        .setDescription(`${owo} Here is your Neko Pic!`)
        .setColor("#654321")
        .setImage(picGet)
        .setFooter(`Requested by ${message.author.username} & Powered by nekos.life`, message.author.avatarURL);
        message.channel.send(emb);
    }
    else if(isorno > 1){
        let pic = await neko.getSFWNekoGif();
    let picStr = JSON.stringify(pic);
    let picSlice = picStr.slice(8);
    let picGet = picSlice.slice(0, -2);
    let emb = new Discord.RichEmbed()
        .setDescription(`${owo} Here is your Neko Gif!`)
        .setColor("#654321")
        .setImage(picGet)
        .setFooter(`Requested by ${message.author.username} & Powered by nekos.life`, message.author.avatarURL);
        message.channel.send(emb);
    }
    
  
}

module.exports.help = {
    name: "neko"
}