const Discord = module.require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    
    if(!args[0])
    if(!coins[message.author.id]){
        return message.reply("You don't have any 💵");
    }

    let pUsr = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    
    if(!pUsr) return message.channel.send("Please mention a user you want to pay to");

    if(!coins[pUsr.id]){
        coins[pUsr.id] = {
            coins: 0
        };
    }
    

    let pCoins = coins[pUsr.id].coins;
    let sCoins = coins[message.author.id].coins;
    if(!args[1]) return message.reply("You need to specify an amount (number)");
    if(sCoins < args[0]) return message.reply("Not enough coins!");

    coins[message.author.id] = {
        coins: sCoins - parseInt(args[1])
    };

    coins[pUsr.id] = {
        coins: pCoins + parseInt(args[1])
    };

    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription(`:moneybag: You have just made a transaction!`)
            .addField("Receiver", `${pUsr}`)
            .addField("Amount", `${args[1]} 💵`)
            .setColor("#00b200")
            .setFooter(`Thank you for using EquippedBot!`)

            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "pay"
}