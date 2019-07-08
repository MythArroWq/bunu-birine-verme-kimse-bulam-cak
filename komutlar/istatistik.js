const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('» CHYPER', bot.user.avatarURL)
  .addField("» :🛡️ Botun Sahibi", "<@469728699596537877> ")
  .addField("**» 🛡️ Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("**» 🛡️ Aktif Olma Süresi**", bot)
  .addField("» 🛡️ Üye Sayısı", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("»🛡️ Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» 🛡️ Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("**» 🛡️ Discord.JS sürüm**", "v"+Discord.version, true)
  .addField(`**»  🛡️ Node.JS sürüm**`, `${process.version}`, true)
  .addField("**» 🛡️ Ping**", bot.ping+" ms", true)
  .addField("**❯  :🛡️ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=570105120097042442&scope=bot&permissions=2146958847)",)
  .addField("**❯  :🛡️ Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/P9N9QmK)", )
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot İstatistik",
  usage: "istatistik"
};