const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimi Ekleyeceğini Yazsana Kardeş Bana Vahiy Mi Gelecek**');
    const embed = new Discord.RichEmbed()
    .setAuthor('404 Not Found')
    .setColor(3447003)
    .setDescription(`**  ${mesaj} ` + message.author.username + ' Senin Bilgisayarına Sızdı!**')

    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hackle',
  description: 'Hacked By Error Bot',
  usage: 'hackle'
};