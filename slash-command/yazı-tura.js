const db = require("inflames.db");
const ms = require("parse-ms");

module.exports = {
    name: "yazı-tura",
    description: "Yazı tura atarsınız şans %50 var mısın?",
    option: {
        number: {
          name: "bahis",
          description: "Oynamaka istediğiniz bahsi giriniz yeyi giriniz.",
          required: true
        }
    },
    async execute(interaction, client) {
        const bahis = interaction.options.getNumber('bahis');
        let times = await db.fetch(`yazıturasüresi_${interaction.member.id}`);
        let saniye = 1000 * 7;
        if (times !== null && saniye - (Date.now() - times) > 0) {
          let time = ms(saniye - (Date.now() - times));
          interaction.reply({ content: `Bu komutu tektar kullanmak için**${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, ephemeral: true });
          return;
        }
        if (isNaN(bahis) === "true") interaction.reply({ content: `Bahis olarak bir sayı gir`, ephemeral: true });
        if (!db.kontrol(`para_${interaction.member.id}`)) return interaction.reply({ content: "Malesef hiç paran bulunmuyor.", ephemeral: true });
        if (db.bul(`para_${interaction.member.id}`) < bahis) return interaction.reply({ content: "Malesef bu kadar paran bulunmuyor.", ephemeral: true });
        if (!bahis) return interaction.reply({ content: "Ne kadar bahis oynamak istiyorsun?", ephemeral: true });
        if (bahis > 1000) return interaction.reply({ content: "En fazla 1.000 cvd bahis oynayabilirsin.", ephemeral: true });
        if (bahis === 0) return interaction.reply({ content: "En az 1 cvd bahis oynamalısın.", ephemeral: true });
        var çalmayın = ["kazandın", "kaybettin", "kazandın", "kaybettin", "kazandın", "kazandın"]
        var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
        if (Covid === "kazandın") {
          db.topla(`para_${interaction.member.id}`, parseInt(bahis))
          interaction.reply({ content: `<a:cekilis:874546543372406814> Yaşasın bahisi **kazandın**! Oynanan bahis: ${bahis}`, ephemeral: true });
        }
        if (Covid === "kaybettin") {
          db.çıkar(`para_${interaction.member.id}`, parseInt(bahis))
          interaction.reply({ content: `<:852499176959901717:864893024416956456> Olamaz bahisi **kaybettin**! Oynanan bahis: ${bahis}`, ephemeral: true });
        }
        db.yaz(`yazıturasüresi_${interaction.member.id}`, Date.now());
    },
};