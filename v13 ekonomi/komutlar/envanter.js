const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {

  if(!message.mentions.users.first()) {
    var gösterilecek = message.author;
  /*para*/  if(!db.kontrol(`para_${gösterilecek.id}`)) { var para = "0" } else { var para = db.bul(`para_${gösterilecek.id}`) }
  /*iş*/    if(!db.kontrol(`iş_${gösterilecek.id}`)) { var iş = "Yok" } else { var iş = db.bul(`iş_${gösterilecek.id}`) }
  /*olta*/  if(!db.kontrol(`olta_${gösterilecek.id}`)) { var olta = "Yok" } else { var olta = db.bul(`olta_${gösterilecek.id}`) }
  /*balta*/ if(!db.kontrol(`balta_${gösterilecek.id}`)) { var balta = "Yok" } else { var balta = db.bul(`balta_${gösterilecek.id}`) }
  /*rol*/   if(!db.kontrol(`rol_${gösterilecek.id}`)) { var rol = "Yok" } else { var rol = db.bul(`rol_${gösterilecek.id}`) }
  /*rozet*/ if(!db.kontrol(`rozet_${gösterilecek.id}`)) { var rozet = "Yok" } else { var rozet = db.bul(`rozet_${gösterilecek.id}`) }
} else {
    var gösterilecek = message.mentions.users.first();
  /*para*/  if(!db.kontrol(`para_${gösterilecek.id}`)) { var para = "0" } else { var para = db.bul(`para_${gösterilecek.id}`) }
  /*iş*/    if(!db.kontrol(`iş_${gösterilecek.id}`)) { var iş = "Yok" } else { var iş = db.bul(`iş_${gösterilecek.id}`) }
  /*olta*/  if(!db.kontrol(`olta_${gösterilecek.id}`)) { var olta = "Yok" } else { var olta = db.bul(`olta_${gösterilecek.id}`) }
  /*balta*/ if(!db.kontrol(`balta_${gösterilecek.id}`)) { var balta = "Yok" } else { var balta = db.bul(`balta_${gösterilecek.id}`) }
  /*rol*/   if(!db.kontrol(`rol_${gösterilecek.id}`)) { var rol = "Yok" } else { var rol = db.bul(`rol_${gösterilecek.id}`) }
  /*rozet*/ if(!db.kontrol(`rozet_${gösterilecek.id}`)) { var rozet = "Yok" } else { var rozet = db.bul(`rozet_${gösterilecek.id}`) }
}

let envanter = new discord.MessageEmbed()
.setTitle("Covid-19 | Ekonomi")
.setThumbnail(gösterilecek.avatarURL({ dynamic: true, format: 'png', size: 1024}))
.addField(":moneybag: Para:", `${para}`)
.addField(":man_mechanic: İş:", `${iş}`)
.addField(":fishing_pole_and_fish: Olta:", `${olta}`)
.addField(":axe: Balta:", `${balta}`)
.addField(":scroll: Rol:", `${rol}`)
.addField("<:newrozet:906877502922846239> Rozet:", `${rozet}`)
.setFooter(`İsteyen: ${message.author.tag}`)
.setTimestamp()
return message.channel.send({ embeds: [ envanter ], reply: { messageReference: message.id }});;
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["inv","envanter","para","bilgi","bilgim","profil","profilim","param"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "env", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};