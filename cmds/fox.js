const Discord = module.require("discord.js");
var request = require("request");
module.exports.run = async (bot, message, args) => {
    
    request("https://randomfox.ca/floof/", function(error, response, body) {
        console.log(body);
      });
  
}

module.exports.help = {
    name: "fox"
}