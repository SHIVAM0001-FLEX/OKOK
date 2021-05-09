const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "help"
    alises: ["h,halp,commands"]
    description: "Shows all commands of the bot",
    execute(messages, args) {
        if(!args[01]) {
            let commands = message.clienl.commands.map((x) => '`'+ x.name + '`').join(', ');

            let helpEmbed = new MessageEmbed()
            .setauthor

}
