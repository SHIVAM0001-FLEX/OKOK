require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const {MessageEmbed} = require('discord.js');
                               
const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX,
  SOUNDCLOUD: process.env.SOUNDCLOUD_CLIENT_ID
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});

client.on("message", async (message) => {
    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
            const HELLO_SERVER = new MessageEmbed()
            .setColor("#FF0000")
            .setTitle(`About ${client.user.username}`)
            .setThumbnail(client.user.avatarURL())
            .setDescription(`My Prefix Here Is: \`${process.env.PREFIX}\`\nMy Devloper: **LH ⊱ Glitch#8393** \n \n You can play music by joining a voice channel and typing \`${process.env.PREFIX}play\`. Type \`${process.env.PREFIX}help\` To Get All Commands Help Menu.\n \n [Invite Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) | [Support](https://discord.gg/EzDnZSPRxf)`)
            .setTimestamp();
            return message.channel.send(HELLO_SERVER);
        }
})

client.on('guildCreate', guild => {
  guild.members.fetch //guild.ownerID
  
  let embed = new MessageEmbed()
    .setTitle('**JOINED NEW SERVER**')
    .setColor("#FF0000")
    .setDescription("Hey, Developer look I've joined a new server!")
    .addField('**Server Name**', `${guild.name}`)
    .addField('**Server ID**', `${guild.id}`)
    .addField('**Member Count**', `${guild.memberCount}`)
    .addField('**Owner**', `<@${guild.ownerID}>`)
    .setThumbnail(guild.iconURL())
    .setFooter(`Powered BY Cloudz Music Music`, client.user.avatarURL())
    .setTimestamp();
  client.channels.cache.get('821302714373242890').send(embed)
});

client.on('guildDelete', guild => {
  guild.members.fetch //guild.ownerID
  
  let embed = new MessageEmbed()
    .setTitle('**LEFT A SERVER**')
    .setColor("#FF0000")
    .setDescription("Hey, Developer look I've been kicked from a server!")
    .addField('**Server Name**', `${guild.name}`)
    .addField('**Server ID**', `${guild.id}`)
    .addField('**Member Count**', `${guild.memberCount}`)
    .addField('**Owner**', `<@${guild.ownerID}>`)
    .setThumbnail(guild.iconURL())
    .setFooter(`Powered BY Cloudz Music`, client.user.avatarURL())
    .setTimestamp();
  client.channels.cache.get('821302747889532968').send(embed)
});

client.on('ready', async() => {
		const status = {
			ONLINE: "**Online** <:Online:822476444491448321>",
			OFFLINE: "**Offline** <:Offline:822476429458407487>",
			IDLE: "**Idle** <:Idle:822477372586328125>",
			DND: "**DND** <:DND:822476402711330836>"		
		}

		const my = status[client.users.cache.get('730705582683586621').presence.status.toUpperCase()]
		const yogi = status[client.users.cache.get('772342884325916694').presence.status.toUpperCase()]
		const opf = status[client.users.cache.get('819525785731203102').presence.status.toUpperCase()]
		const opmf = status[client.users.cache.get('819525904472342548').presence.status.toUpperCase()]
		const opm3f = status[client.users.cache.get('819525904472342548').presence.status.toUpperCase()]

		const livestatuschannel = "823057793862991903";
		const channel = client.channels.cache.get(livestatuschannel)

		const embed = new MessageEmbed()
		.setTitle('Cloudz Music Status')
		.addField('`Cloudz Music 1`', opf, true)
		.addField('`Cloudz Music 2`', opmf, true)
		.addField('`Cloudz Music 3`', opm3f, true)
		.addField('`LH ⊱ Glitch (Developer)`', my, true)
		.addField('`Mr. Yogi (Developer)`', yogi, true)
		.setColor("#FF0000")
		.setTimestamp()
    		.setThumbnail(client.user.avatarURL())
		.setFooter(`Powered BY Cloudz Music Music`, client.user.avatarURL());		
		channel.bulkDelete(2);
		channel.send(embed).then((msg) => {
			setInterval(() =>{
				const my = status[client.users.cache.get('730705582683586621').presence.status.toUpperCase()]
				const yogi = status[client.users.cache.get('772342884325916694').presence.status.toUpperCase()]
				const opf = status[client.users.cache.get('819525785731203102').presence.status.toUpperCase()]
				const opmf = status[client.users.cache.get('819525904472342548').presence.status.toUpperCase()]
				const opm3f = status[client.users.cache.get('819525904472342548').presence.status.toUpperCase()]
				const rembed = new MessageEmbed()
		                .setTitle('Cloudz Music Status')
                		.addField('`Cloudz Music 1`', opf, true)
                		.addField('`Cloudz Music 2`', opmf, true)
                		.addField('`Cloudz Music 3`', opm3f, true)
                		.addField('`LH ⊱ Glitch (Developer)`', my, true)
				.addField('`Mr. Yogi (Developer)`', yogi, true)
                		.setColor("#FF0000")
                		.setTimestamp()
                    		.setThumbnail(client.user.avatarURL())
                		.setFooter(`Powered BY Cloudz Music Music`, client.user.avatarURL());		
				msg.edit(rembed);
			}, 60000);})		
});

client.on('ready', async => {
  const v1invadm = `[Invite Me](https://discord.com/oauth2/authorize?client_id=819523401207119872&scope=bot&permissions=8)`
  const v2invadm = `[Invite Me](https://discord.com/oauth2/authorize?client_id=819525785731203102&scope=bot&permissions=8)`
  const v3invadm = `[Invite Me](https://discord.com/oauth2/authorize?client_id=819525904472342548&scope=bot&permissions=8)`
  const v1invnor = `[Invite Me](https://discord.com/oauth2/authorize?client_id=819523401207119872&scope=bot&permissions=36826176)`
  const v2invnor = `[Invite Me](https://discord.com/oauth2/authorize?client_id=819525785731203102&scope=bot&permissions=36826176)`
  const v3invnor = `[Invite Me](https://discord.com/oauth2/authorize?client_id=819525904472342548&scope=bot&permissions=36826176)`
  const gschannel = "823236305546379274"
  const channel = client.channels.cache.get(gschannel)

  let gs = new MessageEmbed()
    .setTitle('**Getting Started**')
    .setThumbnail(client.user.avatarURL())
    .setColor("#00ffff")
    .setDescription('**Cloudz Music Prefix - `-`**\n**Cloudz Music 2 Prefix - `$`**\n**Cloudz Music 3 Prefix - `+`**')
    .addField('**Bot Links With Admin Perms**', `**Cloudz Music - ${v1invadm}\nCloudz Music 2 - ${v2invadm}\nCloudz Music 3 - ${v3invadm}**`)
    .addField('**Bot Links Without Admin Perms**', `**Cloudz Music - ${v1invnor}\nCloudz Music 2 - ${v2invnor}\nCloudz Music 3 - ${v3invnor}**`)
    .addField('**Developer**', `<@730705582683586621>, <@772342884325916694>`)
    .setFooter(`Powered BY Cloudz Music`, client.user.avatarURL())
    .setTimestamp();
    // channel.send(gs)
})

//Logging in to discord
client.login(process.env.TOKEN)
