const { version } = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    info: {
        name: "stats",
        aliases: "",
        descripion: "Check the stats of the bot",
        usage: "",
    },

    run: async function (client, message, args) {

        let servers_count = message.client.guilds.cache.size;
        var myarray = [];
        message.client.guilds.cache.keyArray().forEach(async function(item, index) {
            
        let guildMember = message.client.guilds.cache.get(item).memberCount;
        myarray.push(guildMember)
        })
        let sum = myarray.reduce(function (a, b) {
        return a + b
        });

        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds\`\`\``;
        const servers = client.guilds.cache.size
        const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)


            const embed = new MessageEmbed()

            .setTitle(`${client.user.username} Stats`)
            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=36826176`)
            .setColor("#FF0000")
            .setDescription(`Hey My Name is **${client.user.username}** and My Work is to play Music`)
            .setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
            .addField("<:Servers:823556330505502780> Servers:", `\`\`\`${servers}\`\`\``, true)
            .addField("<:Users:823556330983784538> Users:", `\`\`\`${sum}\`\`\``, true)
            .addField("<a:Uptime:823556354835742761> Uptime:", `${uptime}`)
            .addField("<:Ram:823556330375086120> Ram:", `\`\`\`${ram}MB\`\`\``)
            .addField("<a:Developer:823556334623653889> Bot's Developer:", `LH ⊱ Glitch#8393`)
            message.channel.send(embed)
        }
}
