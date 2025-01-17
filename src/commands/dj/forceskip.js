const BaseCommand = require("../../abstract/BaseCommand.js");
class Skip extends BaseCommand {get name() { return "forceskip" }
    get description() { return "Forces Skips the currently playing song" }get aliases() { return ["fs"] }
    get category() { return "Queue Management" }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0 } }
    run({ ctx: e }) { return e.guildDB.dj_role || e.member.permissions.has("MANAGE_GUILD") ? 0 == e.dispatcher.queue.length && "autoplay" !== e.dispatcher.repeat ? e.errorMessage(`Nothing next in the queue. Use \`${e.guildDB.prefix}queue\` to see the server's queue.\nWant to try autoplay? do \`${e.guildDB.prefix}autoplay\``) : (e.dispatcher.skip(), void e.channel.send("**⏩ *Skipping* 👍**")) : e.errorMessage("You must have the `Manage Guild` permission to use this command.") } }
module.exports = Skip;