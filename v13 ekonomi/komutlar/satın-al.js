const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
  if (!db.kontrol(`para_${message.author.id}`))
    return message.channel.send({
      content: "Malesef hiç paran bulunmuyor.",
      reply: { messageReference: message.id },
    });
  let para = db.bul(`para_${message.author.id}`);
  var ürün = args[0];
  if (!ürün)
    return message.channel.send({
      content:
        "Bir ürün ismi giriniz (tahta-olta / taş-olta / altın-olta / elmas-olta **/** tahta-balta / taş-balta / altın-balta / elmas-balta).",
      reply: { messageReference: message.id },
    });
  if (ürün === "tahta-olta") {
    if (!db.kontrol(`olta_${message.author.id}`)) {
    } else {
      let olta = db.bul(`olta_${message.author.id}`);
      if (olta === "tahta-olta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (para < 3000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 3000);
    db.yaz(`olta_${message.author.id}`, "tahta-olta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Tahta olta başarıyla satın alındı, kullanmak için: **.balık-tut**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "taş-olta") {
    if (!db.kontrol(`olta_${message.author.id}`)) {
    } else {
      let olta = db.bul(`olta_${message.author.id}`);
      if (olta === "taş-olta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`olta_${message.author.id}`))
      return message.channel.send({
        content: "Önce Tahta oltayı almalısın.",
        reply: { messageReference: message.id },
      });
    let balta = db.bul(`olta_${message.author.id}`);
    if (balta !== "tahta-olta")
      return message.channel.send({
        content: "Önce Tahta oltayı almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 4000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 4000);
    db.yaz(`olta_${message.author.id}`, "taş-olta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Taş olta başarıyla satın alındı, kullanmak için: **.balık-tut**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "altın-olta") {
    if (!db.kontrol(`olta_${message.author.id}`)) {
    } else {
      let olta = db.bul(`olta_${message.author.id}`);
      if (olta === "altın-olta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`olta_${message.author.id}`))
      return message.channel.send({
        content: "Önce Taş oltayı almalısın.",
        reply: { messageReference: message.id },
      });
    let balta = db.bul(`olta_${message.author.id}`);
    if (balta !== "taş-olta")
      return message.channel.send({
        content: "Önce Taş oltayı almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 5000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 5000);
    db.yaz(`olta_${message.author.id}`, "altın-olta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Altın olta başarıyla satın alındı, kullanmak için: **.balık-tut**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "elmas-olta") {
    if (!db.kontrol(`olta_${message.author.id}`)) {
    } else {
      let olta = db.bul(`olta_${message.author.id}`);
      if (olta === "elmas-olta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`olta_${message.author.id}`))
      return message.channel.send({
        content: "Önce Altın oltayı almalısın.",
        reply: { messageReference: message.id },
      });
    let balta = db.bul(`olta_${message.author.id}`);
    if (balta !== "altın-olta")
      return message.channel.send({
        content: "Önce Altın oltayı almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 6000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 6000);
    db.yaz(`olta_${message.author.id}`, "elmas-olta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Elmas olta başarıyla satın alındı, kullanmak için: **.balık-tut**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "tahta-balta") {
    if (!db.kontrol(`balta_${message.author.id}`)) {
    } else {
      let balta = db.bul(`balta_${message.author.id}`);
      if (balta === "tahta-balta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (para < 3000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 3000);
    db.yaz(`balta_${message.author.id}`, "tahta-balta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Tahta balta başarıyla satın alındı, kullanmak için: **.ağaç-kes**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "taş-balta") {
    if (!db.kontrol(`balta_${message.author.id}`)) {
    } else {
      let balta = db.bul(`balta_${message.author.id}`);
      if (balta === "taş-balta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`balta_${message.author.id}`))
      return message.channel.send({
        content: "Önce Tahta baltayı almalısın.",
        reply: { messageReference: message.id },
      });
    let balta = db.bul(`balta_${message.author.id}`);
    if (balta !== "tahta-balta")
      return message.channel.send({
        content: "Önce Tahta baltayı almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 4000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 4000);
    db.yaz(`balta_${message.author.id}`, "taş-balta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Taş balta başarıyla satın alındı, kullanmak için: **.ağaç-kes**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "altın-balta") {
    if (!db.kontrol(`balta_${message.author.id}`)) {
    } else {
      let balta = db.bul(`balta_${message.author.id}`);
      if (balta === "altın-balta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`balta_${message.author.id}`))
      return message.channel.send({
        content: "Önce Taş baltayı almalısın.",
        reply: { messageReference: message.id },
      });
    let balta = db.bul(`balta_${message.author.id}`);
    if (balta !== "taş-balta")
      return message.channel.send({
        content: "Önce Taş baltayı almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 5000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 5000);
    db.yaz(`balta_${message.author.id}`, "altın-balta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Altın balta başarıyla satın alındı, kullanmak için: **.ağaç-kes**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "elmas-balta") {
    if (!db.kontrol(`balta_${message.author.id}`)) {
    } else {
      let balta = db.bul(`balta_${message.author.id}`);
      if (balta === "elmas-balta")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`balta_${message.author.id}`))
      return message.channel.send({
        content: "Önce Altın baltayı almalısın.",
        reply: { messageReference: message.id },
      });
    let balta = db.bul(`balta_${message.author.id}`);
    if (balta !== "altın-balta")
      return message.channel.send({
        content: "Önce Altın baltayı almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 6000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 6000);
    db.yaz(`balta_${message.author.id}`, "elmas-balta");
    return message.channel.send({
      content:
        "<a:cekilis:874546543372406814> Elmas balta başarıyla satın alındı, kullanmak için: **.ağaç-kes**.",
      reply: { messageReference: message.id },
    });
  } else {
    return message.channel.send({
      content:
        "Malesef böyle bir ürün yok, ürünlerimizi görmek için **!market**.",
      reply: { messageReference: message.id },
    });
  }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["sa", "satın-al"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "satınal", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};