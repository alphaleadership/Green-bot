const BaseCommand = require("../../abstract/BaseCommand.js"),
    KongouDispatcher = require("../../modules/KongouDispatcher.js");
class Queue extends BaseCommand {get name() { return "givedj" }
    get description() { return "Gives the dj of the queue to another user" }get category() { return "Queue Management" }
    get playerCheck() { return { voice: !1, dispatcher: !0, channel: !1 } }get arguments() { return [{ name: "user", type: 10, description: "The user who you want to give the DJ", required: !0 }] }
    run({ ctx: e }) { if (e.dispatcher.metadata.dj !== e.author.id) return e.errorMessage("You must be the DJ of the current queue to use this command"); const r = e.options.getUser("user"); if (!r || r.bot || r.id === e.author.id) return e.errorMessage("Please provide a valid user from this server.");
        e.dispatcher.metadata.dj = r.id, e.successMessage(`The DJ of the queue is now ${r}`) } }
module.exports = Queue;