const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Bot adı`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(":white_small_square: | afk : Kullanım :c!afk <Sebep>","AFK Olursunuz")
.addField(":white_small_square: | avatarım: Kullanım :c!avatarım","Avatarınızı Atar")  
.addField(":white_small_square: | davet : Kullanım :c!davet","Botun Davet Linkini Atar")
.addField(":white_small_square: | sunucudavet : Kullanım :c!sunucudavet","Bulunduğunuz Sunucunun Davet Linkini Atar")
.addField(":white_small_square: | söv : Kullanım :c!söv <kişi>","İstediğiniz Kişiye Söversiniz")
.addField(":white_small_square: | gif-ara : Kullanım :c!gif-ara <gif>","İstediğiniz Gifi Ararsınız")
.addField(":white_small_square: | havadurumu : Kullanım : c!havadurumu <iliniz> ","Hava Durumunu Gösterir")
.addField(":white_small_square: | hesapla : Kullanım :c!hesapla <işlem>","İstediğiniz İşlemi Hesaplar")
.addField(":white_small_square: | istatistik : Kullanım :c!istatistik","Botun İstatiğini Atar")
.addField(":white_small_square: | kullanıcıbilgim : Kullanım :c!kullanıcıbilgim","Kullanıcı Bilginizi Atar")
.addField(":white_small_square: | mesajdöndür : Kullanım :c!mesajdöndür <mesaj>","İstediğiniz Mesajı Döndürür")  
.addField(":white_small_square: | ping : Kullanım :c!ping","Botun Pingini Gösterir")
.addField(":white_small_square: | rolbilgi : Kullanım :c!rolbilgi <rol>","Belirtiğiniz Rolun Bilginisi Gösterir")
.addField(":white_small_square: | servericon : Kullanım :c!servericon","Serverin İconunu Atar")
.addField(":white_small_square: | sunucubilgi : Kullanım :c!sunucubilgi","Sunucunun Bilgisini Gösterir")
.addField(":white_small_square: | sunucuresmi : Kullanım :c!sunucuresmi","Sunucunun Resmini Atar")
.addField(":white_small_square: | tavsiye : Kullanım :c!tavsiye <mesaj> ","Botun Destek Sunucusuna Tavsiye Atar")
.addField(":white_small_square: | top10: Kullanım :c!top10","Botun Olduğu 10 Sunucuyu Gösterir")  
.addField(":white_small_square: | yaz : Kullanım :c!yaz <mesaj>","Bota İstediğiniz Şeyi Yazdırırsınız")
.addField(":white_small_square: | yetkilerim : Kullanım :c!yetkilerim","Yetkilerinizi Gösterir")
.addField(":white_small_square: | youtube : Kullanım :c!youtube <Aramak İstediğin Şey>","Youtubede Video Ararsın")
.addField(":white_small_square: | çeviri : Kullanım :c!çeviri","İstediğiniz Şeyi Çevirir")
.addField(":white_small_square: | şifre : Kullanım :c!şifre <Kaç Satır>","Şifre Yapar")  
.addField(":white_small_square: | bugbildir : Kullanım :c!bugbildir <bug>","Sadece Destek Sunucusu İçindir Bug Birdirirsiniz")  
////////komut eklemek için .addField(":white_small_square: | komut : Kullanım : komut kullanım ","Kullanıcı")
return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı Komutlarını Listeler',
  usage: 'kullanıcı'
};
   