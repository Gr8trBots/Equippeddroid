const Discord = module.require("discord.js");
var request = require("request");
module.exports.run = async (bot, message, args) => {
    
    request("https://randomfox.ca/floof/", function(error, response, body) {
        let plswork = body;
        console.log(plswork);
        let removed = plswork.slice(10);
      let rembefore = removed.slice(0, -40);
      console.log(removed + " " + rembefore);
      let em = new Discord.RichEmbed()
      .setDescription("Here is your fox")
      .setImage(rembefore)
      .setFooter("Powered by randomfox.ca")
      message.channel.send(em);
      });
      
}

module.exports.help = {
    name: "fox"
}