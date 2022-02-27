const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
   if (!db.kontrol(`olta_${message.author.id}`)) return message.channel.send({ content: "Olta olmadan balık tutamassın, olta almak için **!satın-al olta**", reply: { messageReference: message.id } });
   let times = await db.fetch(`balıktutmasüresi_${message.author.id}`);
   let saniye = 1000 * 7;
   if (times !== null && saniye - (Date.now() - times) > 0) {
      let time = ms(saniye - (Date.now() - times));
      let mesaj = message.channel.send({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, reply: { messageReference: message.id } }).then(msg => setTimeout(() => msg.delete(), time.seconds * 1000));
      return;
   }
   let olta = db.bul(`olta_${message.author.id}`)
   if (olta === "tahta-olta") {
      var Covid = Math.floor(Math.random() * 125) + 10;
      db.topla(`para_${message.author.id}`, Covid)
      db.yaz(`balıktutmasüresi_${message.author.id}`, Date.now());
      message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id } });
   } else if (olta === "taş-olta") {
      var Covid = Math.floor(Math.random() * 150) + 25;
      db.topla(`para_${message.author.id}`, Covid)
      db.yaz(`balıktutmasüresi_${message.author.id}`, Date.now());
      message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id } });
   } else if (olta === "altın-olta") {
      var Covid = Math.floor(Math.random() * 200) + 50;
      db.topla(`para_${message.author.id}`, Covid)
      db.yaz(`balıktutmasüresi_${message.author.id}`, Date.now());
      message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id } });
   } else if (olta === "elmas-olta") {
      var Covid = Math.floor(Math.random() * 200) + 75;
      db.topla(`para_${message.author.id}`, Covid)
      db.yaz(`balıktutmasüresi_${message.author.id}`, Date.now());
      message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id } });
   }
}
exports.conf = {
   enabled: true, //kullanıma açık mı değil mi
   guildOnly: true, //dmde kullanıma açık mı değil mi
   aliases: ["balıktut", "bt", "b"], //kısayollar
   permLevel: 0 //perm level mainde karşıliklar yazar
};

exports.help = {
   name: "balık-tut", //komutu çalıştıracak olan kelime
   description: "",//açıklama (isteğe bağlı)
   usage: ""//kullanım (isteğe bağlı)
};