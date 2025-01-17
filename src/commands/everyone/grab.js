const BaseCommand = require("../../abstract/BaseCommand.js"),
    KongouDispatcher = require("../../modules/KongouDispatcher.js");
class Queue extends BaseCommand {get name() { return "grab" }
    get description() { return "Sends in DM the current track" }get category() { return "Everyone Commands" }
    get playerCheck() { return { voice: !1, dispatcher: !0, channel: !1 } }
    run({ ctx: e }) { const r = e.dispatcher.current.info;
        e.member.send({ embeds: [{ color: "#3A871F", author: { name: `${e.guild.name} - Now playing`, icon_url: e.author.displayAvatarURL({ size: 512, format: "png" }), url: "https://green-bot.app" }, description: `[${r.title}](${r.uri}) \n\n• __Author:__ ${r.author}\n• __Source:__ ${r.sourceName}\n• Progess: ${KongouDispatcher.humanizeTime(e.dispatcher.player.position)} - ${KongouDispatcher.humanizeTime(r.length)}`, thumbnail: { url: `https://img.youtube.com/vi/${r.identifier}/default.jpg` } }] }), e.successMessage("I've sent you a DM!") } }
module.exports = Queue;