const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "removedupes" }
    get description() { return "Removes all duplicate tracks from the queue" }get aliases() { return ["remdupes", "dupes"] }
    get category() { return "Queue Management" }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, vote: !0 } }
    run({ ctx: e }) { e.successMessage("⏱ Removing duplicates. Please wait"); const s = []; let u = 0; if (e.dispatcher.queue.forEach(r => { s.includes(r.info.uri) ? (e.dispatcher.remove(r, !0), u++) : s.push(r.info.uri, r) }), e.client.queue._sockets.find(s => s.serverId === e.guild.id)) { e.client.queue._sockets.filter(s => s.serverId === e.guild.id).forEach(s => { e.client.queue.emitOp({ changes: ["NEXT_SONGS"], socketId: s.id, serverId: e.guild.id, queueData: { incoming: e.dispatcher.queue } }) }) }
        e.successMessage(`I removed **${u}** duplicates songs`) } }
module.exports = Volume;