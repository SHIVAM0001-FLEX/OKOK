module.exports = {
  info: {
    name: "ping",
    description: "To check the Bots's Ping.",
    usage: "",
    aliases: [""],
  },

  run: async function (client, message) {
    message.channel.send(`Pong! The Bot's latency is **${client.ws.ping}ms**`)
  },
};
