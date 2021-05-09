const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the Cloudz Music bots to your server",
    usage: "",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {

    const av1 = "**__[Invite Me](https://discord.com/oauth2/authorize?client_id=819523401207119872&scope=bot&permissions=8)__**"
    const av2 = "**__[Invite Me](https://discord.com/oauth2/authorize?client_id=819525785731203102&scope=bot&permissions=8)__**"
    const av3 = "**__[Invite Me](https://discord.com/oauth2/authorize?client_id=819525904472342548&scope=bot&permissions=8)__**"
    const nav1 = "**__[Invite Me](https://discord.com/oauth2/authorize?client_id=819523401207119872&scope=bot&permissions=36826176)__**"
    const nav2 = "**__[Invite Me](https://discord.com/oauth2/authorize?client_id=819525785731203102&scope=bot&permissions=36826176)__**"
    const nav3 = "**__[Invite Me](https://discord.com/oauth2/authorize?client_id=819525904472342548&scope=bot&permissions=36826176)__**"
    
    let invite = new MessageEmbed()
    .setTitle(`Invite Links of Cloudz Music Bots`)
    .addField("<a:Discord:825940071475707924> **__Invite Me With Admin Perms__**", `<a:Arrow:825940032769884171> **Cloudz Music 1 -** ${av1}\n<a:Arrow:825940032769884171> **Cloudz Music 2 -** ${av2}\n<a:Arrow:825940032769884171> **Cloudz Music 3 -** ${av3}`)
    .addField("<a:Discord:825940071475707924> **__Invite Me Without Admin Perms__**", `<a:Arrow:825940032769884171> **Cloudz Music 1 -** ${nav1}\n<a:Arrow:825940032769884171> **Cloudz Music 2 -** ${nav2}\n<a:Arrow:825940032769884171> **Cloudz Music 3 -** ${nav3}`)
    .addField("<a:Discord:825940071475707924> **__Support Server__**", `<a:Arrow:825940032769884171> **[Join Now](https://discord.gg/EzDnZSPRxf)**`)
    .setColor("#FF0000")
    return message.channel.send(invite);
  }
}
