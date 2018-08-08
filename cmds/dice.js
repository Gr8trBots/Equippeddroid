const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {
    const de = bot.emojis.find("name", "d6");

  await message.channel.send("Rolling the dice...")
   .then(message => message.edit(`${d6} The dice rolled ${rand()}`));

  
  
}

module.exports.help = {
    name: "dice"
}