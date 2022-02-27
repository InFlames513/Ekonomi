const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  function ödülmiktar(enaz, enfazla) {
    enaz = Math.ceil(enaz);
    enfazla = Math.floor(enfazla);
    return Math.floor(Math.random() * (enfazla - enaz)) + enaz;
  }
  let times = await db.fetch(`beklemesüresi_${message.author.id}`);
  let day = 1000 * 60 * 60 * 24;
  if (times !== null && day - (Date.now() - times) > 0) {
    let time = ms(day - (Date.now() - times));
    return message.channel.send({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye": ""} ${time.milliseconds ? time.milliseconds + "salise": ""}** beklemelisin!`, reply: { messageReference: message.id }});
  }
    let ödül = ödülmiktar(100, 500);
    db.yaz(`beklemesüresi_${message.author.id}`, Date.now());
    let timess = await db.fetch(`beklemesüresi_${message.author.id}`);
    let time = ms(day - (Date.now() - timess));
    message.channel.send({ content: `Bu gün **${ödül} cvd** kazandın! Bu komutu **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye**": ""} sonra tekrar kullanabilirsin.`, reply: { messageReference: message.id }});
    if(!db.kontrol(`para_${message.author.id}`)) db.yaz(`para_${message.author.id}`, 0)
    db.add(`para_${message.author.id}`, parseInt(ödül))
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["daily"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "günlük", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};