const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
  let ürünler = new discord.MessageEmbed()
  .setTitle("Covid-19 | Ekonomi")
  .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024}))
  .addField("Tahta olta", `Fiyat: **3000**`)
  .addField("Taş olta", `Fiyat: **4000**`)
  .addField("Altın olta", `Fiyat: **5000**`)
  .addField("Elmas olta", `Fiyat: **6000**`)
  .addField("Tahta balta", `Fiyat: **3000**`)
  .addField("Taş balta", `Fiyat: **4000**`)
  .addField("Altın balta", `Fiyat: **5000**`)
  .addField("Elmas balta", `Fiyat: **6000**`) 
  /*
  .addField("On başı", `Fiyat: **10000**`)
  .addField("Yüz başı", `Fiyat: **15000**`)
  .addField("Bin başı", `Fiyat: **20000**`)
  .addField("Albay", `Fiyat: **25000**`)
  .addField("Orgeneral", `Fiyat: **30000**`)
  .addField("Korona", `Fiyat: **40000**`)
  */
  .setFooter(`İsteyen: ${message.author.tag}`)
  .setTimestamp()
  return message.channel.send({ embeds: [ ürünler ], reply: { messageReference: message.id }});;
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["ürünler","ürün","m"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "market", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};