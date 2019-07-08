const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "💪 7/24 Aktif!",
        "🌍 Yapımcım: ɆⱫ?#8720",
        "💡 c!davet | Botumuzu ekleyin",
        "👻 60000  Kullanıcıya Hizmet",
        "👻 24  Sunucuya Hizmet",
        "☕️ Çok Hızlı Gelişiyoruz",
    
    ];

    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.youtube.com/channel/UCZ_Gi7_5ZuzCpD6F_qyiDhw?view_as=subscriber");
        }, 2 * 2500);
}