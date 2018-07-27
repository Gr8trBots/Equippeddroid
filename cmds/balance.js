const Discord = module.require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    

    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let uCns = coins[message.author.id].coins;

    let cEm = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#ffff00")
    .addField("You currently have", `${uCns} 💵`, true)

    message.channel.send(cEm).then(msg => {msg.delete(10000)});
}

module.exports.help = {
    name: "balance"
}