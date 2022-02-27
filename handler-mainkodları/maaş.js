module.exports = (client) => {
    const db = require('inflames.db');

    client.on("ready", () => {
        setInterval(() => {
            client.users.cache.forEach(user => {
                if (!db.kontrol(`maaş_${user.id}`)) { return; } else {
                    let maaşsüresi = db.bul(`maaşsüresi_${user.id}`)
                    let maaş = db.bul(`maaş_${user.id}`)
                    let gün = 1000 * 60 * 60 * 24;
                    if (maaşsüresi !== null && gün - (Date.now() - maaşsüresi) > 0) { return; } else {
                        if (!db.kontrol(`para_${user.id}`)) return db.yaz(`para_${user.id}`, maaş);
                        db.topla(`para_${user.id}`, maaş)
                        db.yaz(`maaşsüresi_${user.id}`, Date.now())
                    }
                }
            });
        }, 1000 * 60);
    })
}