const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "vote",
    description: "To vote the bot",
    usage: "",
    aliases: [""],
  },

  run: async function (client, message, args) {
    
    let vote = new MessageEmbed()
    .setTitle(`Voting Links of Cloudz Music Bots`)
    .addField("<a:Arrow:825940032769884171> Cloudz Music 1", `<a:Links:823556331554078780> **[Vote Me](https://discord.ly/Cloudz Music)**`)
    .addField("<a:Arrow:825940032769884171> Cloudz Music 2", `<a:Links:823556331554078780> **[Vote Me](https://discord.ly/Cloudz Music-2)**`)
    .addField("<a:Arrow:825940032769884171> Cloudz Music 3", `<a:Links:823556331554078780> **[Vote Me](https://discord.ly/Cloudz Music-3)**`)
    .addField("<a:Arrow:825940032769884171> Support Server", `<a:Links:823556331554078780> **[Join Now](https://discord.gg/EzDnZSPRxf)**`)
    .setColor("#FF0000")
    return message.channel.send(vote);
  }
}
