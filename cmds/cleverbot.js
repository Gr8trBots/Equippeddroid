const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const cleverbot = require("cleverbot.io");
    const clever = new cleverbot("cleverbot.iouser", "cleverbot.iokey");
    clever.setNick("Source code");
    clever.create(function(err, session) {
        clever.ask(args.join(' '), function(err, res) {
            message.channel.send(res);
        });
    });
  
}

module.exports.help = {
    name: "talk"
}