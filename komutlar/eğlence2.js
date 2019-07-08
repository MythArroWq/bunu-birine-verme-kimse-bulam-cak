const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`CHYPER BOT`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(":white_small_square: | stresçarkı : Kullanım : c!stresçarkı ","Stres Çarkı Çevirirsiniz ")
.addField(":white_small_square: | afk : Kullanım : c!afk <sebep> ","AFK Olursunuz")
.addField(":white_small_square: | sev : Kullanım : c!sev","")
.addField(":white_small_square: | koş : Kullanım : c!koş","Koşarsınız")
.addField(":white_small_square: | tersavatar : Kullanım : c!testavatar","Avatarınızın Renklerini Tersine Çevirir")
.addField(":white_small_square: | troll : Kullanım : c!troll","Troll Resmi Atar")
.addField(":white_small_square: | gol at : Kullanım : c!golat","Gol Atarsınız")
.addField(":white_small_square: | fortnite dans : Kullanım : c!fdans","Fortnite Dans Gifi Atar")
.addField(":white_small_square: | aşk ölçer : Kullanım : c!aşkölçer <@kullanıcı>","Aranızdaki Aşkı Ölçer")
.addField(":white_small_square: | kafasına sık : Kullanım : c!kafasınasık <@kullanıcı>","Belirttiğiniz Kişinin Kadasına Sıkarsınız")
.addField(":white_small_square: | kaç cm : Kullanım : c!kaçcm ","Malafatınızı Söyler")
.addField(":white_small_square: | öldür : Kullanım : c!öldür <@kullanıcı>","Belirttiğiniz Kişiyi Öldürür")
.addField(":white_small_square: | ateş et : Kullanım : c!ateşet <@kullanıcı>","Ateş Edersiniz")
.addField(":white_small_square: | dönen renkler : Kullanım : c!dönenrenkler ","Dönen Renkler Atar")
.addField(":white_small_square: | sevimli bakış : Kullanım : c!sevimlibakış","Sevimli bakış atarsınız")
.addField(":white_small_square: | tekme at : Kullanım : c!tekmeat <@kullanıcı>","Tekme Atarsınız")
return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence2'
};
