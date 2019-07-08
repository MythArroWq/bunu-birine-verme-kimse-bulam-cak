const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`CHYPER BOT`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(":white_small_square: | 8ball : Kullanım : c!8ball <soru>","Soru Sorarsınız")
.addField(":white_small_square: | afk : Kullanım : c!afk <sebep> ","AFK Olursunuz")
.addField(":white_small_square: | ara155 : Kullanım : c!ara155","Polisi Ararsınız")
.addField(":white_small_square: | ascıı : Kullanım : c!ascii","Ascii Olarak Yamanızı Sağlar")
.addField(":white_small_square: | atatürk : Kullanım : c!atatürk","Atatürk Gifi Atar")  
.addField(":white_small_square: | avatarım : Kullanım : c!avatarım","Avatarınızı Gösterir")
.addField(":white_small_square: | balı ktut : Kullanım : c!balıktut","Balık Tutarsınız")  
.addField(":white_small_square: | boks makinesi : Kullanım : c!boks-makinesi","Boks Makinesine Vurursunuz") 
.addField(":white_small_square: | duello : Kullanım : c!duello <@kullanıcı>","1vs1 Atarsınız") 
.addField(":white_small_square: | emoji yazı : Kullanım : c!emojiyazı","Emoji İle Yazarsınız") 
.addField(":white_small_square: | espri : Kullanım : c!espri","Rastgele Espriler Atar") 
.addField(":white_small_square: | fbi : Kullanım : c!fbi","FBİ Gelir") 
.addField(":white_small_square: | hackle : Kullanım : c!hackle <@kullanıcı>","Etiketlediğiniz Kişiyi Hacklersiniz") 
.addField(":white_small_square: | intihar et : Kullanım : c!intihar-et <sebep>","İntihar Edersiniz") 
.addField(":white_small_square: | kralol : Kullanım : c!kralol","Kral Olursun") 
.addField(":white_small_square: | çekiç : Kullanım : c!çekiç <@kullanıcı>","Çekiç Atarsınız")  
return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   