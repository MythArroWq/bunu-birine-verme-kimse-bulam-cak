const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`CHYPER`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField("🔰 | c!kullanıcı : Kullanıcı Komutları","Kullanıcı Komutları")
      .setDescription('')
      .addField("🔰 | c!eğlence : Eğlence Komutları","Eğlence Komutları")
      .setDescription('')
      .addField("🔰 | c!eğlence 2 : Eğlence 2 Komutları","Eğlence 2 Komutları")
      .setDescription('')
      .addField("🔰 | c!ekstra : ekstra Komutları","Ekstra Ve Çerçeve Komutları")
      .setDescription('')
      .addField("🔰 | c!yetkili : Yetkili Komutları","Yetkili Komutları")
      .setDescription('')
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };