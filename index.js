const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const DBL = require("dblapi.js");
const BotSpace = require("botlist.space");
const botspace = new BotSpace('470989648747954176', process.env.BOTSPACE_TKN);
const dbl = new DBL(process.env.DBL_TOKEN, bot); //Connecting to DiscordBotList
const prefix = botconfig.prefix;
const emb = require("discord.js-embed");

bot.commands = new Discord.Collection();



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
    console.log("Bot is online!");
    botspace.postServerCount(bot.guilds.size).then(() => { 
        console.log('Set the current bot\'s server count to ' + bot.guilds.size + ' guilds.');
    }).catch((e) => {
        console.error('Failed to post server count. ' + e.code);
    });

    dbl.on('posted', () => {
        console.log('Server count posted!');
      })
      
      dbl.on('error', e => {
       console.log(`Oops! ${e}`);
      })
     
      

    bot.user.setActivity(`Moderating ${bot.guilds.size} servers // e!help`, {type: 'PLAYING'});
});

bot.on("message", async message => {
       if(message.author.bot) return;
       if(message.channel.type === "dm") return;

       

       
       

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