const BaseCommand = require("../../abstract/BaseCommand.js");
class Stats extends BaseCommand {get name() { return "stats" }
    get aliases() { return ["bi", "botinfo"] }get category() { return "Everyone Commands" }
    get description() { return "My current info!" }
    async run({ ctx: e }) { const t = (await e.client.cluster.broadcastEval("this.guilds.cache.size")).reduce((e, t) => e + t, 0);
        e.reply({ embeds: [{ author: { name: "Green-bot | Infos", url: "https://top.gg/bot/783708073390112830/vote", icon_url: e.author.displayAvatarURL({ dynamic: !0, size: 512 }) }, color: "#3A871F", description: "Green-bot is a free discord music bot wich aims to provide free 24/7 music for everyone!", fields: [{ name: "Server Count", value: `${t.toLocaleString()}`, inline: !0 }, { name: "User Count", value: "15,000,000", inline: !0 }, { name: "Framework", value: "NodeJS - Lavalink - Shoukaku", inline: !0 }], footer: { text: "Want more? Check our premium (green-bot.app/premium)", icon_url: e.client.user.displayAvatarURL({ dynamic: !0, size: 512 }) } }] }) } }
module.exports = Stats;