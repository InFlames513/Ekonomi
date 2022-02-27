module.exports = (client) => {
    const Discord = require('discord.js');
    const discord = require("discord.js");
    const fs = require('fs');
    const ayarlar = require("../ayarlar.json");
    
    const log = (message) => {
    console.log(` ${message}`);
  };
  
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir("./komutlar/", (err, files) => {
    if (err) console.error(err); //
    log(`${files.length} komut yüklenecek.`);
    files.forEach((f) => {
      let props = require(`../komutlar/${f}`);
      log(`Yüklenen komut: ${props.help.name}.`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });
  
  client.reload = (command) => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`../komutlar/${command}`)];
        let inflames = require(`../komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((inflames, alias) => {
          if (inflames === command) client.aliases.delete(alias);
        });
        client.commands.set(command, inflames);
        inflames.conf.aliases.forEach((alias) => {
          client.aliases.set(alias, inflames.help.name);
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  
  client.load = (command) => {
    return new Promise((resolve, reject) => {
      try {
        let inflames = require(`../komutlar/${command}`);
        client.commands.set(command, inflames);
        inflames.conf.aliases.forEach((alias) => {
          client.aliases.set(alias, inflames.help.name);
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  
  client.unload = (command) => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`../komutlar/${command}`)];
        let inflames = require(`../komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((inflames, alias) => {
          if (inflames === command) client.aliases.delete(alias);
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
}