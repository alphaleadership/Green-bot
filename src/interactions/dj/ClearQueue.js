const BaseCommand = require("../../abstract/BaseCommand.js");
class Skip extends BaseCommand {get name() { return "clearqueue" }
    get description() { return "Clears all songs in the queue " }get category() { return "Queue Management" }
    get aliases() { return ["cq", "clearqueue", "clear"] }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, dj: !0 } }
    run({ ctx: e }) { if (0 == e.dispatcher.queue.length) return e.errorMessage(`There is no music in your queue. Add more songs with \`${e.guildDB.prefix}play <music>\``);
        e.successMessage("The queue has been succesfully cleared"), e.dispatcher.queue.length = 0, e.dispatcher.previousTracks = [] } }
module.exports = Skip;