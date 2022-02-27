module.exports = {
    name: "ping",
    description: "Botun pingini gösterir.",
    async execute(interaction, client) {
      const message = await interaction.fetchReply();
      var ping = message.createdTimestamp - interaction.createdTimestamp;
      await interaction.reply({ content: `> Pingim ${ping}`, ephemeral: true });
    },
  };