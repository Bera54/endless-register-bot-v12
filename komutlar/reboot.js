const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("Endless V12 Kayıt Botu");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reboot" , "reset"],
  permLevel: 0
}// Endless
exports.help = {
  name: 'reboot',

}

