let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Here is a list of all avalible commands:")
            .setColor("#70DBDB")
            .addField("userinfo", `Writes info about you (Trying to rewrite to display info about anyone)`)
            .addField("guildinfo", "Displays some information about the current guild")
            .addField("help", `Displays all commands`)
            .addField("mute <@user or ID>", `Mutes a user in text channels - Requires a channel named mod-log - Requires MANAGE_CHANNELS permission`)
            .addField("unmute <@user or ID>", "Unmutes a user - Requires a channel named mod-log - Requires MANAGE_CHANNELS permission")
            .addField("ban <@User or ID> <reason>", "Bans a user - Requires a channel named mod-log - Requires BAN_MEMBERS permission")
            .addField("kick <@User or ID> <reason>", "Kicks a user - Requires a channel named mod-log - Requires KICK_MEMBERS permission")
            .addField("purge <@User or number of messages> [number of messages (if specified a user)]", "This command will delete the number of messages or number of messages from a user. \nLimit is 99 (idk why) and you can delete only messages that are not older than 14 days - Requires MANAGE_MESSAGES permission")
            .addField("fortnite <Fortnite Username> [Platform (pc, psn, xbl - default is pc)]", "Tells you the Fortnite stats for the player from FortniteTracker")
            .addField("error", "Gives you a link to the support server")
            .addField("kiss [@User]", "Kisses a user")
            .addField("xp", "checks your xp")
            .addField("nsfw", "Sends a NSFW picture (18+) - Can only be used in NSFW channels")
            .addField("rps <rock/paper/scissors>", "Does Rock Paper Scissors")
            .addField("invite", "Gives you the invite link")
            .addField("status", "gives the link to the bot's status page")
            .addField("meme", "Sends you a meme")
            .addField("talk <sentence>", "Cleverbot talk - Recieving money from the bot intervenes the chat")
            .addField("8ball <question>", "Ask the magic 8ball!")
            .addField("ann <title> <text>", "Announce something")
            .addField("tr [from:iso] [to:iso] [sentence]", "Translates sentence")
            .addField("about", "Shows some info about the bot")
            .setFooter(`The bot is still in development -- Prefix to all commands is e! -- <required> [optional]`)

            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "help"
}