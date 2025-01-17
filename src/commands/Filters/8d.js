const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "8d" }
    get description() { return "Enables/disables the 8d filter. It can generate some pretty unique audio effects." }get category() { return "Filters" }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, vote: !0 } }
    async run({ ctx: e }) { return e.dispatcher.filters.includes("8d") ? (e.dispatcher.player.setRotation(), e.dispatcher.filters = e.dispatcher.filters.filter(e => "8d" !== e), e.successMessage("⏱ The `8d` filter has been disabled.")) : (e.dispatcher.player.setRotation({ rotationHz: .2 }), e.dispatcher.filters.push("8d"), e.successMessage("⏱ Enabling the `8d` filter to the current song...")) } }
module.exports = Volume;