const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "speed" }
    get description() { return "Sets the speed of the playback" }get category() { return "Queue Management" }
    get arguments() { return [{ name: "time", description: "The speed", required: !0 }] }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, vote: !0 } }
    async run({ ctx: e }) { let t = e.args[0]; return !t || isNaN(t) || t > 5 || 0 == t || t < 0 ? e.successMessage("The duration you provided is incorrect. It must be a number beetwen **1** and **5**") : (e.dispatcher.player.setTimescale({ speed: t }), e.successMessage(`Speed of the playback set to \`${t}\``)) } }
module.exports = Volume;