const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log('_________________________________________');
    console.log(`Kullanıcı İsmi     : ${client.user.username}`);
    console.log(`Sunucular          : ${client.guilds.cache.size.toLocaleString()} Sunucu`);
    console.log(`Kullanıcılar       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`);
    /*console.log (`Komut Sayısı       : ${client.commands.size} Komut Var`); */
    console.log(`Prefix             : ${prefix}`);
    console.log(`Durum              : ${client.user.presence.status}!`);
    console.log(`Kuruluş Tarihi     : ${moment(client.user.createdAt).format(" DD MMMM YYYY dddd (hh:mm:ss)")}`);
    console.log(`Ram Kullanımı      : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Aktiflik Durumu    : Aktif!`);
    console.log('_________________________________________');
  },
};
