const fs = require("fs");
const ayarlar = require("../ayarlar.json");
const db = require('inflames.db');
const Discord = require("discord.js");
module.exports = {
  name: "messageCreate",
  async execute(message, client, Discord) {
    if (!message.guild) {
      var p = ayarlar.prefix
    } else if (db.kontrol(`prefix_${message.guild.id}`)) {
      var p = db.bul(`prefix_${message.guild.id}`)
    } else {
      var p = ayarlar.prefix
    }
    if (message.author.bot) message.channel.sendreturn;
    if (!message.content.startsWith(p)) return;
    let command = message.content.split(" ")[0].slice(p.length);

    let params = message.content.split(" ").slice(1);
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    if (cmd) {
      if(db.kontrol(`karaliste_${message.author.id}`)) return;
      if (!db.kontrol(`botkoruma_${message.author.id}`)) {
        if (!db.kontrol(`sonkomut_${message.author.id}`)) {
          db.yaz(`sonkomut_${message.author.id}`, cmd.help.name)
          if (!message.guild) return message.member.send({ content: `**__Komutlarım dm üzerinden kullanılamaz.__ **`, reply: { messageReference: message.id } });;
          cmd.run(client, message, params);
          return;
        } else {
          let sonkomut = db.bul(`sonkomut_${message.author.id}`)
          if (sonkomut === cmd.help.name) {
            db.yaz(`botkoruma_${message.author.id}`, 1)
            db.yaz(`sonkomut_${message.author.id}`, cmd.help.name)
            if (!message.guild) return message.member.send({ content: `**__Komutlarım dm üzerinden kullanılamaz.__ **`, reply: { messageReference: message.id } });;
            cmd.run(client, message, params);
            return;
             } else {
            db.yaz(`sonkomut_${message.author.id}`, cmd.help.name)
            if (!message.guild) return message.member.send({ content: `**__Komutlarım dm üzerinden kullanılamaz.__ **`, reply: { messageReference: message.id } });;
            cmd.run(client, message, params);
            return;
            }
        }
      } else {
        let komutspamsınır = db.bul(`botkoruma_${message.author.id}`)
        if (komutspamsınır < 30) {
          if (!db.kontrol(`sonkomut_${message.author.id}`)) {
            db.yaz(`sonkomut_${message.author.id}`, cmd.help.name)
            if (!message.guild) return message.member.send({ content: `**__Komutlarım dm üzerinden kullanılamaz.__ **`, reply: { messageReference: message.id } });;
            cmd.run(client, message, params);
            return;
          } else {
            let sonkomut = db.bul(`sonkomut_${message.author.id}`)
            if (sonkomut === cmd.help.name) if (!db.kontrol(`botkoruma_${message.author.id}`)) {
              db.yaz(`botkoruma_${message.author.id}`, 1)
              db.yaz(`sonkomut_${message.author.id}`, cmd.help.name)
              if (!message.guild) return message.member.send({ content: `**__Komutlarım dm üzerinden kullanılamaz.__ **`, reply: { messageReference: message.id } });;
              cmd.run(client, message, params);
              return;
            } else {
              db.ekle(`botkoruma_${message.author.id}`, 1)
              db.yaz(`sonkomut_${message.author.id}`, cmd.help.name)
              if (!message.guild) return message.member.send({ content: `**__Komutlarım dm üzerinden kullanılamaz.__ **`, reply: { messageReference: message.id } });;
              cmd.run(client, message, params);
              return;
            }
            db.sil(`botkoruma_${message.author.id}`)
            db.yaz(`sonkomut_${message.author.id}`, cmd.help.name)
            if (!message.guild) return message.member.send({ content: `**__Komutlarım dm üzerinden kullanılamaz.__ **`, reply: { messageReference: message.id } });;
            cmd.run(client, message, params);
            return;
            }
        } else {
          var resimler = ["https://cdn.discordapp.com/attachments/863017070488059924/908844397783814234/Captcha.jpg","https://cdn.discordapp.com/attachments/863017070488059924/908858075820212234/Example-of-a-Yahoo-captcha-that-uses-the-negative-kerning.png"]
          var random = resimler[Math.floor(Math.random() * resimler.length)];
          if (random === "https://cdn.discordapp.com/attachments/863017070488059924/908844397783814234/Captcha.jpg") var şifre = "qGphJD"
          if (random === "https://cdn.discordapp.com/attachments/863017070488059924/908858075820212234/Example-of-a-Yahoo-captcha-that-uses-the-negative-kerning.png") var şifre = "4cz8JyAz"
          let doğrulama = new Discord.MessageEmbed()
            .setDescription(`"Bot olduğunu düşünmeye başladım eğer bot değilsen resimde gördüğünü yazar mısın?`)
            .setImage(random)
          message.channel.send({ embeds: [doğrulama] }).then(() => {
            const filter = (m) => m.author.id === message.author.id;
            message.channel
              .awaitMessages({
                filter,
                max: 3,
                time: 15000,
              })
              .then((collected) => {
                if (collected.first().content !== şifre) {
                  db.yaz(`karaliste_${message.author.id}`, "eklendi")
                  return message.member.send({
                    content: "Şifre yanlış karalisteye eklendiniz!",
                    reply: { messageReference: collected.id },
                  });
                }
              });
      
            message.channel
              .awaitMessages({
                filter,
                max: 3,
                time: 15000,
              })
              .then((collected) => {
                if (collected.first().content === şifre) {
                  db.sil(`botkoruma_${message.author.id}`)
                  return message.channel.send({
                    content: "Arkadaşım oldu diye sevinmiştim tam, neyse iyi oyunlar!",
                    reply: { messageReference: message.id },
                  });
                }
              });
          });
        }
      }
    }
  },
};
