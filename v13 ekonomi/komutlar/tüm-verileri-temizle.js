const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
  if (message.author.id !== "762420804066738186")
    return message.channel.send({
      content: "Bu komut developer özel bir komuttur.",
      reply: { messageReference: message.id },
    });
  message.channel
    .send({
      content:
        "Database sıfırlama işlemini eğer onaylıyorsanız `evet` eğer onaylamıyorsanız `hayır` olarak yazınız.",
      reply: { messageReference: message.id },
    }).then(() => {
      const filter = (m) => m.author.id === message.author.id;
      message.channel
        .awaitMessages({
          filter,
          max: 1,
          time: 10000,
        })
        .then((collected) => {
          if (collected.first().content === "hayır") {
            return message.channel.send({
              content: "İşlem iptal edildi.",
              reply: { messageReference: message.id },
            });
          }
        });

      message.channel
        .awaitMessages({
          filter,
          max: 1,
          time: 15000,
        })
        .then((collected) => {
          if (collected.first().content === "evet") {
            db.yedekle("yedek-veri");
            db.sıfırla();
            return message.channel.send({
              content: "Database başarıyla sıfırlandı, iyi eğlenceler!.",
              reply: { messageReference: message.id },
            });
          }
        });
    });
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["tümverileritemizle", "tvt", "tüm-verileri-sil", "tümverilerisil", "sıfırla"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "tüm-verileri-temizle", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};
