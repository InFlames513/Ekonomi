const db = require("inflames.db");
const discord = require("discord.js");
module.exports = {
    name: "envanter",
    description: "Envanterinizi gösterir",
    option: {
        user: {
          name: "üye",
          description: "Envanteri gösterilecek üyeyi giriniz.",
          required: false
        }
    },
    async execute(interaction, client) {
        const member = interaction.options.getMember('üye');
        if(!member) {
            var gösterilecek = interaction.member;
          /*para*/  if(!db.kontrol(`para_${gösterilecek.id}`)) { var para = "0" } else { var para = db.bul(`para_${gösterilecek.id}`) }
          /*iş*/    if(!db.kontrol(`iş_${gösterilecek.id}`)) { var iş = "Yok" } else { var iş = db.bul(`iş_${gösterilecek.id}`) }
          /*olta*/  if(!db.kontrol(`olta_${gösterilecek.id}`)) { var olta = "Yok" } else { var olta = db.bul(`olta_${gösterilecek.id}`) }
          /*balta*/ if(!db.kontrol(`balta_${gösterilecek.id}`)) { var balta = "Yok" } else { var balta = db.bul(`balta_${gösterilecek.id}`) }
          /*rol*/   if(!db.kontrol(`rol_${gösterilecek.id}`)) { var rol = "Yok" } else { var rol = db.bul(`rol_${gösterilecek.id}`) }
          /*rozet*/ if(!db.kontrol(`rozet_${gösterilecek.id}`)) { var rozet = "Yok" } else { var rozet = db.bul(`rozet_${gösterilecek.id}`) }
        var avatar = gösterilecek;
        } else {
            var gösterilecek = member;
          /*para*/  if(!db.kontrol(`para_${gösterilecek.id}`)) { var para = "0" } else { var para = db.bul(`para_${gösterilecek.id}`) }
          /*iş*/    if(!db.kontrol(`iş_${gösterilecek.id}`)) { var iş = "Yok" } else { var iş = db.bul(`iş_${gösterilecek.id}`) }
          /*olta*/  if(!db.kontrol(`olta_${gösterilecek.id}`)) { var olta = "Yok" } else { var olta = db.bul(`olta_${gösterilecek.id}`) }
          /*balta*/ if(!db.kontrol(`balta_${gösterilecek.id}`)) { var balta = "Yok" } else { var balta = db.bul(`balta_${gösterilecek.id}`) }
          /*rol*/   if(!db.kontrol(`rol_${gösterilecek.id}`)) { var rol = "Yok" } else { var rol = db.bul(`rol_${gösterilecek.id}`) }
          /*rozet*/ if(!db.kontrol(`rozet_${gösterilecek.id}`)) { var rozet = "Yok" } else { var rozet = db.bul(`rozet_${gösterilecek.id}`) }
        var avatar = client.users.cache.get(gösterilecek.id);
        }
        let envanter = new discord.MessageEmbed()
        .setTitle("Covid-19 | Ekonomi")
        .setThumbnail(avatar.avatarURL({ dynamic: true, format: 'png', size: 1024}))
        .addField(":moneybag: Para:", `${para}`)
        .addField(":man_mechanic: İş:", `${iş}`)
        .addField(":fishing_pole_and_fish: Olta:", `${olta}`)
        .addField(":axe: Balta:", `${balta}`)
        .addField(":scroll: Rol:", `${rol}`)
        .addField("<:newrozet:906877502922846239> Rozet:", `${rozet}`)
        .setFooter(`Covid-19 Ekonomi botu sunucumuza gelmeyi unutma "/davet"`)
        .setTimestamp()
      await interaction.reply({ embeds: [ envanter ], ephemeral: true });
      return;
    },
  };