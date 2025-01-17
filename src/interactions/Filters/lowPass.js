const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "lowpass" }
    get description() { return "Enables/disables the lowPass filter" }get category() { return "Filters" }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, dj: !0, vote: !0 } }
    async run({ ctx: e }) { return e.dispatcher.player.filters.lowPass ? (e.dispatcher.player.clearFilters(), e.successMessage("⏱ Disabling the `lowPass` filter to the current song...")) : (e.dispatcher.player.setLowPass({ smoothing: 20 }), e.successMessage("⏱ Enabling the `lowPass` filter to the current song...")) } }
module.exports = Volume;