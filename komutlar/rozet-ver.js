const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
  if (message.author.id !== "762420804066738186")
    return message.channel.send({
      content: "Bu komut yapımcıya özeldir.",
      reply: { messageReference: message.id },
    });
    let atılacak = message.mentions.users.first();
    if(!atılacak)  return message.channel.send({
        content: "Rozet verilecek kişiyi etiketleyiniz.",
        reply: { messageReference: message.id },
      });
      if(!args[1]) {
        var rozet = args[0]
      } else {
        var rozet = args[1] 
      }
  if(!rozet)  return message.channel.send({
      content: "Verilecek rozeti yazınız.",
      reply: { messageReference: message.id },
    });
    if(rozet !== "görevli" && rozet !== "hata-avcısı" && rozet !== "destekci" && rozet !== "booster" && rozet !== "tester" && rozet !== "Yapımcı" && rozet !== "premium") return message.channel.send({
        content: "Böyle bir rozet bulunamıyor tüm rozetleri görmek için: **/rozetler** komutunu kullanabilirsiniz.",
        reply: { messageReference: message.id },
      });
      if(rozet === "görevli") var grozet = "<:discordstaff:909223008718159904> Görevli"
      if(rozet === "hata-avcısı") var grozet = "<:bughunterlvl1:909223222787080202> Hata avcısı"
      if(rozet === "destekci") var grozet = "<:earlysupporter:871827079807782983> Destekci"
      if(rozet === "booster") var grozet = "<a:boost_nowongame:909223010496573500> Booster"
      if(rozet === "tester") var grozet = ":test_tube: Tester"
      if(rozet === "Yapımcı") var grozet = "<:developer:909223011796799538> Geliştirici"
      if(rozet === "premium") var grozet = ":star2: Premium"
    if(!db.kontrol(`rozet_${atılacak.id}`)) {
        db.depola(`rozet_${atılacak.id}`, grozet) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişiye ${grozet} rozeti verildi.`,
            reply: { messageReference: message.id },
          });
    } else {
        if(!db.bul(`rozet_${atılacak.id}`).includes(grozet)) {
            db.depola(`rozet_${atılacak.id}`, grozet) 
            return message.channel.send({
                content: `${atılacak.tag} isimli kişiye ${grozet} rozeti verildi.`,
                reply: { messageReference: message.id },
              });   
        } else {
        db.pushsil(`rozet_${atılacak.id}`, grozet) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişide ${grozet} rozeti olduğu için rozet geri alındı.`,
            reply: { messageReference: message.id },
          });
        }
    }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: [], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "rozet", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};
