const db = require("inflames.db");
const ms = require("parse-ms");

module.exports = {
    name: "balık-tut",
    description: "Balık tutup para kazanırsınız, tabi oltanız varsa.",
    async execute(interaction, client) {
        if (!db.kontrol(`olta_${interaction.member.id}`)) return interaction.reply({ content: "Olta olmadan balık tutamassın, olta almak için **!satın-al olta**", ephemeral: true });
        let times = await db.fetch(`balıktutmasüresi_${interaction.member.id}`);
        let saniye = 1000 * 7;
        if (times !== null && saniye - (Date.now() - times) > 0) {
            let time = ms(saniye - (Date.now() - times));
            return await interaction.reply({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, ephemeral: true });
        }
        let olta = db.bul(`olta_${interaction.member.id}`)
        if (olta === "tahta-olta") {
            var Covid = Math.floor(Math.random() * 125) + 10;
            db.topla(`para_${interaction.member.id}`, Covid)
            db.yaz(`balıktutmasüresi_${interaction.member.id}`, Date.now());
            interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
        } else if (olta === "taş-olta") {
            var Covid = Math.floor(Math.random() * 150) + 25;
            db.topla(`para_${interaction.member.id}`, Covid)
            db.yaz(`balıktutmasüresi_${interaction.member.id}`, Date.now());
            interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
        } else if (olta === "altın-olta") {
            var Covid = Math.floor(Math.random() * 200) + 50;
            db.topla(`para_${interaction.member.id}`, Covid)
            db.yaz(`balıktutmasüresi_${interaction.member.id}`, Date.now());
            interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
        } else if (olta === "elmas-olta") {
            var Covid = Math.floor(Math.random() * 200) + 75;
            db.topla(`para_${interaction.member.id}`, Covid)
            db.yaz(`balıktutmasüresi_${interaction.member.id}`, Date.now());
            interaction.reply({ content: `Çok çalıştın ve karşılığında **${Covid}** cvd aldın.`, ephemeral: true });
        }
    },
};