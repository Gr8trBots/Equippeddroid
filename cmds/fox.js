const Discord = module.require("discord.js");
var request = require("request");
module.exports.run = async (bot, message, args) => {
    
    request("https://randomfox.ca/floof/", function(error, response, body) {
        let plswork = body;
        console.log(plswork);
        let removed = plswork.slice(10);
      let rembefore = removed.slice(0, -40);
      let fixhttp = rembefore.replace(String.fromCharCode(92),String.fromCharCode(92,92));
      console.log(rembefore + " " + fixhttp);
      let em = new Discord.RichEmbed()
      .setDescription("Here is your fox")
      .setImage(fixhttp)
      .setFooter("Powered by randomfox.ca")
      message.channel.send(em);
      });
      
}

module.exports.help = {
    name: "fox"
}