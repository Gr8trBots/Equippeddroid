const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const pingmoji = bot.emojis.find("name", "piingblob");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
    const color = args[0]
    let title = args[0];
    const text = args.slice(1).join(" ");
    const author = message.author;
    if (text.length < 1) return message.channel.send("Can not announce nothing");
    //const colour = args.slice(2).join("");
    const embed = new Discord.RichEmbed()
    .setColor("#458B00")
    .setThumbnail(message.guild.iconURL)
    .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
    .setFooter(`An announcement made at ${message.createdAt}`)
    .setTitle(`${pingmoji} Announcement: ${title}`)
    .setTimestamp()

    let annChannel = message.guild.channels.find(`name`, "announcements");
        if(!annChannel){ 
            message.channel.send("Cannot find 'announcements' channel. Should I create one? Send 'Yes, please!' in 5 seconds to confirm, else wait!").then(() => {
                message.channel.awaitMessages(response => response.content === 'Yes, please!', {
                  max: 1,
                  time: 5000,
                  errors: ['time'],
                })
                .then((collected) => {
                    message.channel.send(`You have sent: ${collected.first().content} and I am creating a channel now!`);
                    guild.createChannel('announcements', 'text', [{
                        deny: ['SEND_MESSAGES']
                        allow: ['READ_MESSAGES']
                    }])
  .then(message.channel.send("Succesfully created #announcements and you can now adjust it to your needs!"))
  .catch(console.error);
                  })
                  .catch(() => {
                    message.channel.send('You have not sent "Yes, please!" in time! Create the channel manualy or try again!');
                  });
                });
                }
   annChannel.send({embed: embed});
  
}

module.exports.help = {
    name: "ann"
}