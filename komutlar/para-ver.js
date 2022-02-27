const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
  if (message.author.id !== "762420804066738186")
    return message.channel.send({
      content: "Bu komut yapımcıya özeldir.",
      reply: { messageReference: message.id },
    });
  let atılacak = message.mentions.users.first();
  if (!atılacak)
    return message.channel.send({
      content: "Kime para atmak istiyorsun?",
      reply: { messageReference: message.id },
    });
  let para = args[1];
  if (!para)
    return message.channel.send({
      content: "Ne kadar para atmak istiyorsun?",
      reply: { messageReference: message.id },
    });
  if (isNaN(para) === "true")
    return message.channel.send({
      content: "Atılacak para olarak bir sayı değeri belirt.",
      reply: { messageReference: message.id },
    });
  if (!db.kontrol(`para_${atılacak.id}`)) {
    db.yaz(`para_${atılacak.id}`, parseInt(para));
  } else {
    db.topla(`para_${atılacak.id}`, parseInt(para));
  }
  message.channel.send({
    content: `${atılacak.tag} isimli kişiye, ${para} cvd gönderildi.`,
    reply: { messageReference: message.id },
  });
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["pv", "paraver"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "para-ver", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};
