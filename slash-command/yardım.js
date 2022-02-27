const discord = require("discord.js");
module.exports = {
    name: "yardım",
    description: "Botun komutlarını gösterir.",
    async execute(interaction, client) {
        let yardım = new discord.MessageEmbed()
.setTitle("Covid-19 | Yardım")
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024}))
.addField("<:anket:873070202881986570> param / para / env / envanter", `<:892176348964094002:898493508757901312> Envanterinizi incelersiniz.`)
.addField("<:anket:873070202881986570> ağaçkes / a / ak", `<:892176348964094002:898493508757901312> Eğer baltanız varsa ağaç kesersiniz.`)
.addField("<:anket:873070202881986570> balık-tut / b / bt", `<:892176348964094002:898493508757901312> Eğer oltanız varsa balık tutarsınız.`)
//.addField("<:anket:873070202881986570> çalış / ç", `<:892176348964094002:898493508757901312> Eğer iş sahibiyseniz çaışırsınız.`)
.addField("<:anket:873070202881986570> yazı-tura / yazıtura / yt", `<:892176348964094002:898493508757901312> Yazı tura atarsınız şans %50 var mısın?`)
.addField("<:anket:873070202881986570> slot", `<:892176348964094002:898493508757901312> Slot oynarsınız şans düşük ama ödülü yüksek.`)
.addField("<:anket:873070202881986570> market / m / ürünler / ürün", `<:892176348964094002:898493508757901312> Satılan ürünlere ve fiyatlarını incelersiniz.`)
.addField("<:anket:873070202881986570> davet / d", `<:892176348964094002:898493508757901312> Botu sunucunuza ekleyip bize destek olursunuz.`)
.addField("<:anket:873070202881986570> günlük / daily", `<:892176348964094002:898493508757901312> Günlük paranızı alırsınız.`)
.addField("<:anket:873070202881986570> para-gönder / para-at / send", `<:892176348964094002:898493508757901312> İstediğiniz kişiye bütçenizin yettiği kadar para gönderirsiniz.`)
.addField("<:anket:873070202881986570> satın-al / sa", `<:892176348964094002:898493508757901312> İstediğiniz bir eşyayı satın alırsınız.`)
//.addField("<:anket:873070202881986570> sıralama / s", `<:892176348964094002:898493508757901312> Genel sıralamayı incelersinsiz.`)
.setFooter(`Covid-19 Ekonomi botu sunucumuza gelmeyi unutma "/davet"`)
.setTimestamp()
      await interaction.reply({ embeds: [ yardım ], ephemeral: true });
      return;
    },
  };