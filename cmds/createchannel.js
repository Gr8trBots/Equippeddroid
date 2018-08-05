const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const up = bot.emojis.find("name", "blobowo");
    const de = bot.emojis.find("name", "blobdevil");
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You need the `MANAGE_CHANNELS` permission to run this comamnd!");
    if(!args[0]) return message.channel.send(`${up} Do you expect me crating a channel out of nothing? Send me the channel name (No spaces)`);
    if(args[0]) return message.channel.send(`${blobdevil} No spaces!`);
    message.guild.createChannel(`${args[0]}`, 'text')
  .then(console.log)
  .catch(console.error);
  message.channel.send("I have created the channel :)");
}

module.exports.help = {
    name: "createchannel"
}