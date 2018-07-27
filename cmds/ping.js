const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    console.log("Starting update of stats...")
    bot.shard.fetchClientValues('guilds.size')
    .then(results => {
        var totalServers = results.reduce((prev, val) => prev + val, 0);
        const snekfetch = require('snekfetch')
        const token = '12a9JquEiHx7Ag~wUpPW.LoGth5lrpKcCbaGA~JOzdw';

        snekfetch.post(`https://listcord.com/api/bot/${bot.user.id}/guilds`)
        .set('Authorization', token)
        .send({
            guilds: totalServers
    })
    .then(() => console.log('Updated listcord.com stats.'))
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