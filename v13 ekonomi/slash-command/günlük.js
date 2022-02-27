const db = require("inflames.db");
const ms = require("parse-ms");

module.exports = {
    name: "günlük",
    description: "Günlük paranızı alırsınız.",
    async execute(interaction, client) {
          function ödülmiktar(enaz, enfazla) {
            enaz = Math.ceil(enaz);
            enfazla = Math.floor(enfazla);
            return Math.floor(Math.random() * (enfazla - enaz)) + enaz;
          }
          let times = await db.fetch(`beklemesüresi_${interaction.member.id}`);
          let day = 1000 * 60 * 60 * 24;
          if (times !== null && day - (Date.now() - times) > 0) {
            let time = ms(day - (Date.now() - times));
            return await interaction.reply({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye": ""} ${time.milliseconds ? time.milliseconds + "salise": ""}** beklemelisin!`, ephemeral: true }); 
          }
            let ödül = ödülmiktar(100, 500);
            db.yaz(`beklemesüresi_${interaction.member.id}`, Date.now());
            let timess = await db.fetch(`beklemesüresi_${interaction.member.id}`);
            let time = ms(day - (Date.now() - timess));
            interaction.reply({ content: `Bu gün **${ödül} cvd** kazandın! Bu komutu **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye**": ""} sonra tekrar kullanabilirsin.`, ephemeral: true });
            if(!db.kontrol(`para_${interaction.member.id}`)) db.yaz(`para_${interaction.member.id}`, 0)
            db.add(`para_${interaction.member.id}`, parseInt(ödül))
      return;
    },
  };