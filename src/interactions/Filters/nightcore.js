const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "nightcore" }
    get description() { return "Enables/disables the nightcore filter. It can generate some pretty unique audio effects." }get category() { return "Filters" }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, dj: !0, vote: !0 } }
    async run({ ctx: e }) { return e.dispatcher.player.filters.timescale ? (e.dispatcher.player.clearFilters(), e.successMessage("⏱ Disabling the `nightcore` filter to the current song...")) : (e.dispatcher.player.setTimescale({ speed: 1.165, pitch: 1.125, rate: 1.05 }), e.successMessage("⏱ Enabling the `nightcore` filter to the current song...")) } }
module.exports = Volume;