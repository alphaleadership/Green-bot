const BaseCommand = require("../../abstract/BaseCommand.js"),
    { humanizeTime } = require("../../modules/KongouDispatcher"),
    ms = require("ms");
class Volume extends BaseCommand {get name() { return "seek" }
    get description() { return "Sets the time of the playback" }get category() { return "Queue Management" }
    get arguments() { return [{ name: "time", description: "The new duration of the song at the format minute:seconds. Ex: 1:06 to set the time to 1m 6s", required: !0 }] }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, } }
    run({ ctx: e }) { let r = e.args[0]; if (r.includes(":")) { let t = parseInt(r.split(":")[0]); if (isNaN(t) || t < 0) return e.errorMessage("Please provide a valid number of minutes"); let s = parseInt(r.replace(`${t}:`, "").replace("s", "")); if (isNaN(s) || s < 0) return e.errorMessage("Please provide a valid number of seconds");
            r = 6e4 * t + 1e3 * s } else r.includes("s") || r.includes("h") || r.includes("m") ? r = ms(r) : r *= 1e3; let t = humanizeTime(r); if (r > e.dispatcher.current.info.length) return e.errorMessage("Your provided a duration higher than the current song duration");
        e.dispatcher.player.seekTo(parseInt(r)), e.successMessage(`➡ Playback set to \`${t}\``) } }
module.exports = Volume;