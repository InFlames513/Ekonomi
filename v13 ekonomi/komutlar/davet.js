const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Covid-19 | Ekonomi")
    .setDescription(`[Bot Davet](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8589934591&scope=bot%20applications.commands) , \n[Bot Destek Sunucusu](https://discord.gg/Xr7mPAsNWe)`)
    .setFooter(`Covid-19 ekonomi botu`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["d"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "davet", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};