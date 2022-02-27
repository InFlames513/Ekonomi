const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
 if(!db.kontrol(`iş_${message.author.id}`)) return message.channel.send({ content: "Çalışmak için bir işe ihityacın var iş sahibi olmak için **!iş**", reply: { messageReference: message.id }});
 let iş = db.bul(`iş_${message.author.id}`)
 if(iş === "er") { 
    var Covid = Math.floor(Math.random() * 100) + 50;
 db.topla(`para_${message.author.id}`, Covid)
 message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }});
 } else if(iş === "onbaşı") {
    var Covid = Math.floor(Math.random() * 125) + 75;
 db.topla(`para_${message.author.id}`, Covid)
 message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }});
} else if(iş === "yüzbaşı") {
    var Covid = Math.floor(Math.random() * 150) + 100;
 db.topla(`para_${message.author.id}`, Covid)
 message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }});
} else if(iş === "binbaşı") {
    var Covid = Math.floor(Math.random() * 300) + 100;
 db.topla(`para_${message.author.id}`, Covid)
 message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }});
} else if(iş === "albay") {
    var Covid = Math.floor(Math.random() * 500) + 100;
 db.topla(`para_${message.author.id}`, Covid)
 message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }});
} else if(iş === "orgeneral") {
    var Covid = Math.floor(Math.random() * 750) + 150;
 db.topla(`para_${message.author.id}`, Covid)
 message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }});
} else if(iş === "covid") {
    var Covid = Math.floor(Math.random() * 1000) + 150;
 db.topla(`para_${message.author.id}`, Covid)
 message.channel.send({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, reply: { messageReference: message.id }});
}
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["ç"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "çalış", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};