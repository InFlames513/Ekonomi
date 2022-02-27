const db = require("inflames.db");
const ms = require("parse-ms");

module.exports = {
  name: "ağaç-kes",
  description: "Ağaç kesip para kazanırsınız, tabi baltanız varsa.",
  async execute(interaction, client) {
    if (!db.kontrol(`balta_${interaction.member.id}`)) return interaction.reply({ content: "Baltan olmadan ağaç kesemessin, balta almak için **!satın-al balta**", ephemeral: true });
    let times = await db.fetch(`ağaçkesmesüresi_${interaction.member.id}`);
    let saniye = 1000 * 7;
    if (times !== null && saniye - (Date.now() - times) > 0) {
      let time = ms(saniye - (Date.now() - times));
      return await  interaction.reply({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, ephemeral: true });
    }
    let balta = db.bul(`balta_${interaction.member.id}`)
    if (balta === "tahta-balta") {
      var Covid = Math.floor(Math.random() * 125) + 10;
      db.topla(`para_${interaction.member.id}`, Covid)
      db.yaz(`ağaçkesmesüresi_${interaction.member.id}`, Date.now());
       interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
    } else if (balta === "taş-balta") {
      var Covid = Math.floor(Math.random() * 150) + 25;
      db.topla(`para_${interaction.member.id}`, Covid)
      db.yaz(`ağaçkesmesüresi_${interaction.member.id}`, Date.now());
       interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
    } else if (balta === "altın-balta") {
      var Covid = Math.floor(Math.random() * 200) + 50;
      db.topla(`para_${interaction.member.id}`, Covid)
      db.yaz(`ağaçkesmesüresi_${interaction.member.id}`, Date.now());
       interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
    } else if (balta === "elmas-balta") {
      var Covid = Math.floor(Math.random() * 200) + 75;
      db.topla(`para_${interaction.member.id}`, Covid)
      db.yaz(`ağaçkesmesüresi_${interaction.member.id}`, Date.now());
       interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
    }
  },
};