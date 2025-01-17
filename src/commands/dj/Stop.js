const BaseCommand = require("../../abstract/BaseCommand.js");
class Stop extends BaseCommand {get name() { return "stop" }
    get description() { return "Stops the current playback!" }get aliases() { return ["destroy"] }
    get category() { return "Queue Management" }get playerCheck() { return { voice: !0, channel: !0 } }
    run({ ctx: e }) { if (e.dispatcher) e.dispatcher.stopped = !0, e.dispatcher.destroy(!1, !0), e.successMessage("⏹ Successfully stopped the music!");
        else { if (!e.guild.me.voice.channelId) return e.errorMessage("I am not currently playing music in this server. So it's impossible to do that");
            e.guild.me.voice.disconnect(), e.successMessage("Disconnected!") } } }
module.exports = Stop;