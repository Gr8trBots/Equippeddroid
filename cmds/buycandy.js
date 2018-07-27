const Discord = module.require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const randomPuppy = require('random-puppy');


module.exports.run = async (bot, message, args) => {
    var candy = [
        'https://media.giphy.com/media/rlxvBFLZda9vW/giphy.gif',
        'https://data.whicdn.com/images/29808733/original.gif',
        'https://media.giphy.com/media/sN6rHuJQ9p61y/source.mp4',
        'https://media1.tenor.com/images/1aa5a132935bdb6173c6cc86a2323c27/tenor.gif',
        'https://i.gifer.com/97M.gif'
    ]
    var sub = candy[Math.round(Math.random() * (candy.length - 1))];
    
    var candy2 = [
        'https://i.gifer.com/4uaJ.gif',
        'https://i.gifer.com/NUem.gif',
        'https://media.giphy.com/media/sN6rHuJQ9p61y/source.mp4',
        
    ]
    var sub2 = candy2[Math.round(Math.random() * (candy2.length - 1))];
    
    if(!args[0]) {
        if(!coins[message.author.id]){
            return message.reply("You don't have any 💵");
        }
        let sCoins = coins[message.author.id].coins;

        if(sCoins < 5) return message.reply("Not enough 💵! You need 5 💵 to buy candy");
        randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setFooter("Thanks for using EquippedDroid")
                .setTitle(`:candy: ${message.author.username} bought him self a candy! :candy:`)
                .setImage(url);
            message.channel.send({
                embed
            });
        })
        return;
        }
        
        
        if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {
            let sCoins = coins[message.author.id].coins;
            if(!coins[message.author.id]){
                return message.reply("You don't have any 💵");
            }
            let sCoins = coins[message.author.id].coins;
    
            if(sCoins < 5) return message.reply("Not enough 💵! You need 5 💵 to buy candy");
        randomPuppy(sub2)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setFooter("Thanks for using EquippedDroid")
                .setTitle(`:candy: ${message.author.username} gave ${message.mentions.members.first().user.username} a candy! :candy:`)
                .setImage(url);
            message.channel.send({
                embed
            });
        })
        return;
        }
        if(!coins[message.author.id]){
            return message.reply("You don't have any 💵");
        }
        let sCoins = coins[message.author.id].coins;

        if(sCoins < 5) return message.reply("Not enough 💵! You need 5 💵 to buy candy");
        randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setFooter("Thanks for using EquippedDroid")
                .setTitle(`:candy: ${message.author.username} bought him self a candy! :candy:`)
                .setImage(url);
            message.channel.send({
                embed
            });
        })
  
}

module.exports.help = {
    name: "candy"
}