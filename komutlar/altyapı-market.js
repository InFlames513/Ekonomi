const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {

}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["altyapımarket","altyapı-market"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "altyapı", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};