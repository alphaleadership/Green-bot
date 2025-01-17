const BaseCommand = require("../../abstract/BaseCommand.js");
class Shuffle extends BaseCommand {get name() { return "shuffle" }
    get description() { return "Shuffles the current queue of songs!" }get category() { return "Queue Management" }
    get aliases() { return ["shufle", "shufflle", "mix"] }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, vote: true } }
    run({ ctx: e }) { if (e.dispatcher.queue.length < 2) return e.errorMessage("There is not enough tracks in the queue to shuffle it.");
        e.dispatcher.queue = e.dispatcher.queue.sort(() => Math.random() - .5), e.successMessage(`🔀 The server queue has been mixed succesfully (**${e.dispatcher.queue.length}** songs)`) } }
module.exports = Shuffle;