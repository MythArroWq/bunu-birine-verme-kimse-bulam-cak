const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`CHYPER`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(":white_small_square: | nsfw-gif : Kullanım :c!nsfw-gif","+18 Gif Atar")
.addField(":white_small_square: | saat : Kullanım :c!saat","Saati Gösterir")  
.addField(":white_small_square: | döviz : Kullanım :c!döviz","Döviz İşte")
.addField(":white_small_square: | hastebin : Kullanım :c!hastebin","hastebin link atar")
.addField(":white_small_square: | speed-test : Kullanım :c!speed-test","Botun Hızını Ölçer")
.addField(":white_small_square: | nitro-efekt : Kullanım :c!nitro-efekt","Avatarınıza Nitro Efekt Ekler")
.addField(":white_small_square: | üyedurum : Kullanım :c!üyedurum","Üye Durumlarını Ve Sunucudaki Üye Sayısını Gösterir")
.addField(":white_small_square: | tr : Kullanım :c!tr","Fotorafınıza TÜRK Bayrağı Ekler")
.addField(":white_small_square: | pixel : Kullanım :c!pixel","Fotorafınızı Pixel Yapar")
.addField(":white_small_square: | düello : Kullanım :c!düello <@kullanıcı> ","İstediğiniz bir kişi ile düello atarsınız")
.addField(":white_small_square: | hackle : Kullanım :c!hackle <@kullanıcı>","İstediğiniz Kişiyi Hacklersiniz")
.addField(":white_small_square: | partner : Kullanım :c!partner","Avatarınıza Partner Efekti Ekler")
.addField(":white_small_square: | rip : Kullanım :c!rip","Fotorafınıza RİP Efekti Ekler")
.addField(":white_small_square: | mcskin : Kullanım :c!mcskin","Belirttiğiniz MC Skinini Atar")
.addField(":white_small_square: | kanalbilgi : Kullanım :c!kanalbilgi","Kanal İle Bilgi Verir") 
.addField(":white_small_square: | romen : Kullanım :c!romen","Yazdığınız sayının romen sayısı halinde atar")  
.addField(":white_small_square: | notal : Kullanım :c!notal <NOT>","NOT Alırsınız")  
.addField(":white_small_square: | hapishane : Kullanım :c!hapishane ","Fotorafınıza Hapishane Efekti Ekler")
.addField(":white_small_square: | kapaklaflar : Kullanım :c!kapaklaflar <@kullanıcı>","Etiketlediniz Kisiye Kapak Laflar Soler") 
.addField(":white_small_square: | kullanıcıara : Kullanım :c!kullanıcıara <@kullanıcı>","Kullanıcı araması yaparsınız")
.addField(":white_small_square: | triggered : Kullanım : c!triggered ","Fotorafınıza Triger Efekti Ekler ")  
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
  name: 'ekstra',
  description: 'Ekstra Komutlarını Listeler',
  usage: 'ekstra'
};