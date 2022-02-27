const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
    if(!db.kontrol(`balta_${message.author.id}`)) return message.channel.send({ content: "Baltan olmadan ağaç kesemessin, balta almak için **!satın-al balta**", reply: { messageReference: message.id }});
    let times = await db.fetch(`ağaçkesmesüresi_${message.author.id}`);
    let saniye = 1000 * 7;
    if (times !== null && saniye - (Date.now() - times) > 0) {
      let time = ms(saniye - (Date.now() - times));
      let mesaj = message.channel.send({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, reply: { messageReference: message.id } }).then(msg => setTimeout(() => msg.delete(), time.seconds * 1000));
      return;
    }
    let balta = db.bul(`balta_${message.author.id}`)
    if(balta === "tahta-balta") {
       var Covid = Math.floor(Math.random() * 125) + 10;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }})
   } else if(balta === "taş-balta") {
       var Covid = Math.floor(Math.random() * 150) + 25;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }})
   } else if(balta === "altın-balta") {
       var Covid = Math.floor(Math.random() * 200) + 50;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }})
   } else if(balta === "elmas-balta") {
       var Covid = Math.floor(Math.random() * 200) + 75;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }})
   }
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["ağaç-kes","a","ak"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "ağaçkes", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};