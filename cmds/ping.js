const Discord = module.require("discord.js");
const BotSpace = require("botlist.space");
const botspace = new BotSpace('470989648747954176', process.env.BOTSPACE_TKN);
module.exports.run = async (bot, message, args) => {

    botspace.postServerCount(bot.guilds.size).then(() => { 
        console.log('Set the current bot\'s server count to ' + bot.guilds.size + ' guilds.');
    }).catch((e) => {
        console.error('Failed to post server count. ' + e.code);
    });
    const DBL = require("dblapi.js");

const dbl = new DBL(process.env.DBL_TOKEN, bot); //Connecting to DiscordBotList
    dbl.on('posted', () => {
        console.log('Server count posted!');
      })
      
      dbl.on('error', e => {
       console.log(`Oops! ${e}`);
      })
    
    let m = await message.channel.send("Pinging...");
    
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription(":ping_pong: Pong!")
            .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`)
            .setColor("#000000")
            .setFooter(`Information shown here may not be accurate!`)
            
            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "ping"
}