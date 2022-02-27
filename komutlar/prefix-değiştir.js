const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    if (!message.guild) return message.yanıtla("Bu komut özel mesajlarda kapalıdır.");
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({
        content: "Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olman gerekli.",
        reply: { messageReference: message.id },
    });
    let prefix = args[0]
    if (!prefix) return message.channel.send({
        content: "Lüften yeni prefixi giriniz.",
        reply: { messageReference: message.id },
    });
    if (prefix.length > 3) return message.channel.send({
        content: `Prefiximin uzunluğu en fazla 3 karakter olabilir.`,
        reply: { messageReference: message.id },
    });
    db.yaz(`prefix_${message.guild.id}`, prefix)
    return message.channel.send({
        content: `Prefixim başarıyla değiştirildi! Yeni prefixim: ${prefix}`,
        reply: { messageReference: message.id },
    });
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
};

exports.help = {
    name: "prefix", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
};