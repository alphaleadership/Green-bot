const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "move" }
    get description() { return "Moves the position of a track in the queue" }get aliases() { return ["shift", "mv"] }
    get category() { return "Queue Management" }get arguments() { return [{ name: "track", type: 3, description: "The position or the track of the track you want to move", required: !0 }] }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, vote: false, dj: !0 } }
    run({ ctx: e }) { if (!e.args[1]) return e.errorMessage("Please provide the new position of the track!"); let r = e.args[0].value.replace("#", "") - 1,
            t = e.args[1].replace("#", "") - 1; const o = e.dispatcher.queue[r]; if (!o) return e.errorMessage("There is no track with this number in your queue.");
        e.dispatcher.remove(r), e.dispatcher.queue.splice(t, 0, o), e.successMessage(`[${o.info.title.slice(0,50)}](${o.info.uri}) has been moved to position #${t+1}`) } }
module.exports = Volume;