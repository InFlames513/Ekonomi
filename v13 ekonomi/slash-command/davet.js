const db = require("inflames.db");
const discord = require("discord.js");
module.exports = {
    name: "davet",
    description: "Botun davet linkini atar.",
    async execute(interaction, client) {
        const embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Covid-19 | Ekonomi")
        .setDescription(`[Bot Davet](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8589934591&scope=bot%20applications.commands) , \n[Bot Destek Sunucusu](https://discord.gg/Xr7mPAsNWe)`)
        .setFooter(`Covid-19 ekonomi botu`)
      await interaction.reply({ embeds: [ embed ], ephemeral: true });
      return;
    },
  };