const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const de = bot.emojis.find("name", "blobdevil");
    const up = bot.emojis.find("name", "blobowo");
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need the `MANAGE_ROLES` permission to run this comamnd!");
    if(!args[0]) return message.channel.send(`${up} Please write the Role Name`);
    if(!args[1]) return message.channel.send("Please write a hex code for the color of the role!");
    if(!args[1].startsWith("#")) return message.channel.send("Please send a hex code (like: **#fff**)")
    let str = args[0];
    let repl = str.replace("-", "\u0020");
  // Create a new role with data
message.guild.createRole({
    name: `${repl}`,
    color: `${args[1]}`,
  }).then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
}

module.exports.help = {
    name: "createrole"
}