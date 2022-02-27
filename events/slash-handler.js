module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    if (!client.slashCommands.has(interaction.commandName)) return;

    try {
      await client.slashCommands
        .get(interaction.commandName)
        .execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "Bu komutu çalıştırırken bir sorun ile karşılaştım!",
        ephemeral: true,
      });
    }
  },
};