let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let ui = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]); 
    if(!args[0]){
        let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
            .setDescription("This is some of the info I could find:")
            .setColor("#50ed50")
            .setTimestamp()
            .addField("User's Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID", `${message.author.id}`)
            .addField("Account created at", `${message.author.createdAt}`)
            .addField("Avatar URL", `${message.author.displayAvatarURL}`)
            .setFooter(`Thanks for using EquippedDroid`, "https://bot.hernikplays.tk/yeetcon.png")
            message.channel.send({embed: embed});
    }
    
    else if(!ui) return  message.channel.send("Please mention a user or write his ID!");
    if (ui){
        let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
            .setDescription("This is some of the info I could find:")
            .setColor("#50ed50")
            .setTimestamp()
            .addField("User's Full Username", `${ui.username}#${ui.discriminator}`)
            .addField("ID", `${ui.id}`)
            .addField("Account created at", `${ui.createdAt}`)
            .addField("Avatar URL", `${ui.displayAvatarURL}`)
            .setFooter(`Thanks for using EquippedDroid`, "https://bot.hernikplays.tk/yeetcon.png")
            message.channel.send({embed: embed});
    }
            
         
    
}

module.exports.help = {
    name: "userinfo"
}