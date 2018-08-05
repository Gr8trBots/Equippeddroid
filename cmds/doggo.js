const Discord = module.require("discord.js");
const random_dog = require('random.dog');
const dog = new random_dog();
module.exports.run = async (bot, message, args) => {
    console.log("work");
    const doggo = bot.emojis.find("name", "doggoblob");

    dog.getDog().then(dog => {
        let emb = new Discord.RichEmbed()
        .setDescription(`${doggo} Here is your random dog!`)
        .setColor("RANDOM")
        .setImage(dog)
        .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
        message.channel.send(emb);

    })
  
}

module.exports.help = {
    name: "dog"
}