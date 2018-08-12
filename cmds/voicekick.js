const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
  
if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return message.reply('Missing the required `Manage Channels` and `Move Members` permissions.');
​

const member = message.mentions.members.first();
if (!member) return message.reply('Please mention @user to kick.');
if (!member.voiceChannel) return message.reply('That user is not in a voice channel.');
​

const temp_channel = await message.guild.createChannel(user.id, 'voice', [
  { id: guild.id,
    deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'], },
  { id: member.id,
    deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'] }
]);
await member.setVoiceChannel(temp_channel);
​
await temp_channel.delete();

msg.react('👌');

  
}

module.exports.help = {
    name: "vkick"
}