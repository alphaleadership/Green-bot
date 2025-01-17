const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "leavecleanup" }
    get description() { return "Removes all songs from users that are not in the voice channel" }get aliases() { return ["lc"] }
    get category() { return "Queue Management" }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, vote: false, dj: !0 } }
    run({ ctx: e }) { e.successMessage("⏱ Removing songs from users that are no longer in the vc. Please wait"); const s = e.guild.me.voice.channel.members.filter(e => !e.user.bot); let r = 0;
        e.dispatcher.queue.forEach(n => { n.info.requester && (s.find(e => e.user.id === n.info.requester.id) || (e.dispatcher.remove(n), r++)) }), e.successMessage(`I removed **${r}** songs from users that are no longer in the voice channel!`) } }
module.exports = Volume;