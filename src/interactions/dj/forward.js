const BaseCommand = require("../../abstract/BaseCommand.js"),
    ms = require("ms");
class Volume extends BaseCommand {get name() { return "forward" }
    get description() { return "Forward a specific amount of time into the track." }get aliases() { return ["ff", "fastforward"] }
    get category() { return "Queue Management" }get arguments() { return [{ name: "time", type: 3, description: "The time to forward", required: !1 }] }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, dj: !0, vote: true } }
    run({ ctx: e }) { let r = e.args[0] ? e.args[0].value : "10s";
        r.includes("m") || r.includes("s") || r.includes("h") || (r += "s"); const t = ms(r); return !t || isNaN(t) || t < 0 ? e.errorMessage("The duration you provided is incorrect. Please provide a number of seconds.") : t > e.dispatcher.current.info.length ? e.errorMessage("Your provided a duration higher than the current song duration.") : (e.dispatcher.player.seekTo(parseInt(e.dispatcher.player.position + t)), void e.successMessage(`⏭ Fast forwarded the music of \`${r}\``)) } }
module.exports = Volume;