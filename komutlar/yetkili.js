const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`CHYPER BOT`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(":white_small_square: | otorol : Kullanım :c!otorol @rol","Yeni Gelen Herkese Rol Verir")
.addField(":white_small_square: | herkese-rol-ver : Kullanım :c!herkese-rol-ver @rol","Herkese Rol Verir")
.addField(":white_small_square: | herkesten-rol-al : Kullanım :c!herkesten-rol-al @rol"," Herkeseten Rol Alır")  
.addField(":white_small_square: | ban : Kullanım :c!ban @kişi","Etiketlediğiniz Kişiyi Banlarsınız")  
.addField(":white_small_square: | mesajat : Kullanım :c!mesajat @kişi","İstediğiniz Kişiye Mesaj Atarsınız")
.addField(":white_small_square: | duyuru : Kullanım :c!duyuru [Duyurmak İstediğiniz şey]","Duyuru Yaparsınız")
.addField(":white_small_square: | geçici-sustur: Kullanım :c!geçici-sustur <kullanıcı> <süre> <sebep>","Etiketlediğiniz Kişiyi Geçici Susturur")
.addField(":white_small_square: | kick : Kullanım :c!kick <kullanıcı>","Etiketlediğiniz Kullanıcıyı Kicklersiniz")
.addField(":white_small_square: | küfür-engelle : Kullanım :c!küfür-engelle <aç-kapat>","Küfür Edilmesini Engeller")
.addField(":white_small_square: | link-engelle : Kullanım :c!link-engelle <aç-kapat>","Link Atılmasını Engeller")
.addField(":white_small_square: | ototag : Kullanım :c!ototag <tag>","Yeni Gelen Belirttiğiniz Tagı Verir")
.addField(":white_small_square: | oylama : Kullanım :c!oylama <oylamak istediginiz şey>","oylama Yaparsınız")
.addField(":white_small_square: | sayaç-ayarla : Kullanım :c!sayaç-ayarla <kişi> <mesajın gitceği kanal> ","Sunucunuza Sayaç Ayarlar")
.addField(":white_small_square: | slowmode : Kullanım :c!slowmode <1-10 arası saniye seçin>","Yavaş Modu Açar")
////////komut eklemek için  .addField(":white_small_square: | komut : Kullanım : komut kullanım ","Kullanıcı")
return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Yardım Menüsü',
  usage: 'yetkili'
};