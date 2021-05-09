require("dotenv").config();

module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username},
${client.user.username} is now Online`);
  await client.user.setActivity(`${process.env.PREFIX}help`, {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
