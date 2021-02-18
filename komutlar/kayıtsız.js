const Discord = require("discord.js");// Endless
const qdb = require("quick.db");


module.exports.run = async (client, message, args, ayar, emoji) => {
  let embed = new Discord.RichEmbed().setAuthor(message.member.displayName, message.author.avatarURL).setFooter("Endless was here!🎄").setColor('RANDOM').setTimestamp();
  if(!message.member.roles.has('YETKILIROL ID') && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Kayıtsız komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`)).then(x => x.delete(5000));
  let kisi = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!kisi) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete(5000));
  if (message.member.highestRole.position < kisi.highestRole.position) return message.channel.send(embed.setDescription(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`)).then(x => x.delete(5000));
  if(kisi.manageable) kisi.setNickname(kisi.user.username).catch();
  await kisi.setRoles('UNREGISTER ID').catch();
  message.channel.send(embed.setDescription(`${kisi} üyesi, ${message.author} tarafından kayıtsıza atıldı!`)).catch();// Endless
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [], // Endless
  permLevel: 0
}

exports.help = {
  name: 'kayıtsız',
  usage: "kayıtsız [üye]",
  description: "Belirtilen üyeyi kayıtsıza atar."
};// Endless 