const BaseCommand = require("../../abstract/BaseCommand.js"),
    fetch = require("node-fetch");
class Queue extends BaseCommand {get name() { return "lyrics" }
    get description() { return "Shows the lyrics of the current track or another track" }get category() { return "Everyone Commands" }
    get playerCheck() { return { voice: !1, dispatcher: !1, channel: !1, vote: true } }
    async run({ ctx: e }) { if (e.args[0]) { const i = e.args.join(" "),
                r = "https://some-random-api.ml/lyrics?title=" + i.toLowerCase().replace(/\(lyrics|lyric|official music video|audio|official|official video|official video hd|clip officiel|clip|extended|hq\)/g, "").split(" ").join("%20"),
                o = await fetch(r),
                c = await o.json(); return c.title ? e.channel.send({ embeds: [{ author: { name: `${c.title?c.title:t} - ${c.author?c.author:"Unknown"}`, icon_url: c.thumbnail[0], url: "https://green-bot.app" }, color: "#3A871F", description: `${c.lyrics.slice(0,4e3)}`, footer: { text: "Green-bot | Free music for everyone!", icon_url: e.client.user.displayAvatarURL({ dynamic: !0, size: 512 }) } }] }) : e.errorMessage("No lyrics found for `" + i + "`") } { if (!e.dispatcher || !e.dispatcher.current) return e.errorMessage("Please provide a song name"); const i = e.dispatcher.current.info.title,
                r = "https://some-random-api.ml/lyrics?title=" + i.toLowerCase().replace(/\(lyrics|lyric|official music video|audio|official|official video|official video hd|clip officiel|clip|extended|hq\)/g, "").split(" ").join("%20"),
                t = await fetch(r),
                o = await t.json(); return o.title ? e.channel.send({ embeds: [{ author: { name: `${o.title?o.title:i} - ${o.author?o.author:"Unknown"}`, icon_url: o.thumbnail[0], url: "https://green-bot.app" }, color: "#3A871F", description: `${o.lyrics.slice(0,4e3)}`, footer: { text: "Green-bot | Free music for everyone!", icon_url: e.client.user.displayAvatarURL({ dynamic: !0, size: 512 }) } }] }) : e.errorMessage("No lyrics found for `" + e.dispatcher.current.info.title + "`") } } }
module.exports = Queue;