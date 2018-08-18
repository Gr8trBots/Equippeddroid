let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
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
    }
    else if(args[0]){
        let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
            .setDescription("This is some of the info I could find:")
            .setColor("#50ed50")
            .setTimestamp()
            .addField("User's Full Username", `${user.username}#${user.discriminator}`)
            .addField("ID", `${user.id}`)
            .addField("Account created at", `${user.createdAt}`)
            .addField("Avatar URL", `${user.displayAvatarURL}`)
            .setFooter(`Thanks for using EquippedDroid`, "https://bot.hernikplays.tk/yeetcon.png")
    }
            
         message.channel.send({embed: embed});
    
}

module.exports.help = {
    name: "userinfo"
}