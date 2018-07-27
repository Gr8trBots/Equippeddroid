const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");


const bot = new Discord.Client({disableEveryone: true});
const prefix = botconfig.prefix;
bot.commands = new Discord.Collection();
let coins = require("./coins.json");


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
    
    bot.user.setActivity(`Moderating ${bot.guilds.size} servers // e!help`, {type: 'PLAYING'})
});

bot.on("message", async message => {
       if(message.author.bot) return;
       if(message.channel.type === "dm") return;

       if(!coins[message.author.id]){
           coins[message.author.id] = {
               coins: 0
           };
       }

       let coinAmt = Math.floor(Math.random() * 20) + 1; 
       let baseAmt = Math.floor(Math.random() * 20) + 1; 
       


       if(coinAmt === baseAmt){
           coins[message.author.id]= {
               coins: coins[message.author.id].coins + coinAmt
           };
           fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
               if (err) return console.log(err);
           });
           let cEm = new Discord.RichEmbed()
           .setAuthor(message.author.username)
           .setColor("#FFFF00")
           .addField(`${message.author.username} has just earned`, `${coinAmt} 💵`)
           message.channel.send(cEm).then(msg => {msg.delete(10000)});
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

bot.login(botconfig.token);