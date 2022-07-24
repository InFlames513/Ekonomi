const discord = require("discord.js"); //modüller
const db = require("inflames.db");
const fs = require("fs");

exports.run = async (client, message, args) => {
  
  let sayi = 1
  
  let content = client.users.cache.filter(x => (db.fetch(`para_${x.id}`))|| 0)
  .sort((x,y) => (db.fetch(`para_${y.id}`)|| 0) - (db.fetch(`para_${x.id}`))|| 0)
  .map((x) => {
    return `${sayi++} **${x.username}**: ${db.fetch(`para_${x.id}`) || 0}`
  });
  
  const leaderBoardEmbed = new discord.MessageEmbed()
    .setTitle(`En Çok Parası Olan Kullanıcılar`)
    .setDescription(`${content.slice(0, 10).join("\n")}`)
    .setColor("AQUA")
  await message.channel.send({embeds:[leaderBoardEmbed]});
  
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["s"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "sıralama", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};
