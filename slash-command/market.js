const Discord = require("discord.js");
const discord = require("discord.js");
module.exports = {
  name: "market",
  description: "Satılan ürünler ve fiyatlarını gösterir",
  async execute(interaction, client) {
    let ürünler = new discord.MessageEmbed()
      .setTitle("Covid-19 | Ekonomi")
      .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .addField("Tahta olta", `Fiyat: **3000**`)
      .addField("Taş olta", `Fiyat: **4000**`)
      .addField("Altın olta", `Fiyat: **5000**`)
      .addField("Elmas olta", `Fiyat: **6000**`)
      .addField("Tahta balta", `Fiyat: **3000**`)
      .addField("Taş balta", `Fiyat: **4000**`)
      .addField("Altın balta", `Fiyat: **5000**`)
      .addField("Elmas balta", `Fiyat: **6000**`)
      /*
      .addField("On başı", `Fiyat: **10000**`)
      .addField("Yüz başı", `Fiyat: **15000**`)
      .addField("Bin başı", `Fiyat: **20000**`)
      .addField("Albay", `Fiyat: **25000**`)
      .addField("Orgeneral", `Fiyat: **30000**`)
      .addField("Korona", `Fiyat: **40000**`)
      */
      .setFooter(`Covid-19 Ekonomi botu sunucumuza gelmeyi unutma "/davet"`)
      .setTimestamp()
    await interaction.reply({ embeds: [ürünler], ephemeral: true });
    return;
  },
};