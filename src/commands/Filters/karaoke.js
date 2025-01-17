const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "karaoke" }
    get description() { return "Enables/disables the karaoke filter" }get category() { return "Filters" }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, premium: !0 } }
    async run({ ctx: e }) { return e.dispatcher.filters.includes("karaoke") ? (e.dispatcher.player.setKaraoke(), e.dispatcher.filters = e.dispatcher.filters.filter(e => "karaoke" !== e), e.successMessage("⏱ Disabling the `Karaoke` filter to the current song...")) : (e.dispatcher.player.setKaraoke({ level: 1, monoLevel: 1, filterBand: 220, filterWidth: 100 }), e.dispatcher.filters.push("karaoke"), e.successMessage("⏱ Enabling the `Karaoke` filter to the current song...")) } }
module.exports = Volume;