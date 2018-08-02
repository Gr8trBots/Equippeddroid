const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
let xp = require("./xp.json");
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, bot); //Connecting to DiscordBotList
const prefix = botconfig.prefix;
const botlistspace = require('botlist.space');
const botlist = new botlistspace('470989648747954176', process.env.BOTSPACE_TKN); //botlist.space
var utils = require('bot-utils')
bot.commands = new Discord.Collection();

var presences = [
    `Moderating ${bot.guilds.size} servers // e!help`,
    `Helping ${bot.guilds.memberCount}`,
    "Rock, Paper, Scissors",
    "with code"
]

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load! Please add some to the 'cmds' folder!");
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(bot.guilds.memberCount);
    console.log("Bot is online!");
    dbl.on('posted', () => {
        console.log('Server count posted!');
      })
      
      dbl.on('error', e => {
       console.log(`Oops! ${e}`);
      })
     
      
      bot.user.setActivity(utils.randItemFromArray(presences)).then(() => {
        setTimeout(() => {
            bot.user.setActivity(utils.randItemFromArray(presences))
        }, 600000)
    })
    
});

bot.on("message", async message => {
       if(message.author.bot) return;
       if(message.channel.type === "dm") return;

       

       let xpAdd = Math.floor(Math.random() * 7) + 8;
       

       console.log(xpAdd);

       if (!xp[message.author.id]) {
           xp[message.author.id] = {
               xp: 0,
               level: 1
           };
       }
       
       
       let curxp = xp[message.author.id].xp;
       let curlvl = xp[message.author.id].level;
       let nxtLvl = xp[message.author.id].level * 300;
       xp[message.author.id].xp = curxp + xpAdd;
       if (nxtLvl <= xp[message.author.id].xp) {
           xp[message.author.id].level = curlvl + 1;
           let lvlup = new Discord.RichEmbed()
               .setTitle("Level Up!")
               .addField("Congrats to", `${message.author}`)
               .setColor("#08ff00")
               .addField("New Level", curlvl + 1);
       
           message.channel.send(lvlup).then(msg => {
               msg.delete(5000)
           });
       }
       fs.writeFile("./xp.json"), JSON.stringify(xp), (err) => {
                   if (err)  console.log(err);
       }
       

       let messageArray = message.content.split(" ");
       let command = messageArray[0];
       let args = messageArray.slice(1);

       if (!command.startsWith(prefix)) return;    
       
       let cmd = bot.commands.get(command.slice(prefix.length));
       
       
       if(cmd){
        cmd.run(bot, message, args);
        
       } 

});

bot.login(process.env.BOT_TOKEN);