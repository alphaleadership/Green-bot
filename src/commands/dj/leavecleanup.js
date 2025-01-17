const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "leavecleanup" }
    get description() { return "Removes all songs from users that are not in the voice channel" }get aliases() { return ["lc"] }
    get category() { return "Queue Management" }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, premium: !0 } }
    run({ ctx: e }) { e.successMessage("⏱ Removing songs from users that are no longer in the vc. Please wait"); const r = e.guild.me.voice.channel.members.filter(e => !e.user.bot); let s = 0; if (e.dispatcher.queue.forEach(n => { n.info.requester && (r.find(e => e.user.id === n.info.requester.id) || (e.dispatcher.remove(n, !0), s++)) }), e.client.queue._sockets.find(r => r.serverId === e.guild.id)) { e.client.queue._sockets.filter(r => r.serverId === e.guild.id).forEach(r => { e.client.queue.emitOp({ changes: ["NEXT_SONGS"], socketId: r.id, serverId: e.guild.id, queueData: { incoming: e.dispatcher.queue } }) }) }
        e.successMessage(`I removed **${s}** songs from users that are no longer in the voice channel!`) } }
module.exports = Volume;