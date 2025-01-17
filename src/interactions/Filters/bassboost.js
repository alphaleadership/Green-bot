const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "bassboost" }
    get description() { return "Enables/disables the bassboost filter. It can generate some pretty unique audio effects." }get category() { return "Filters" }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, dj: !0, vote: !0 } }
    async run({ ctx: e }) { return e.dispatcher.player.filters.equalizer.length ? (e.dispatcher.player.clearFilters(), e.successMessage("⏱ Disabling the `bassboost` filter to the current song...")) : (e.dispatcher.player.setEqualizer([{ band: 0, gain: .31 }, { band: 1, gain: .31 }, { band: 2, gain: .31 }, { band: 3, gain: .31 }]), e.successMessage("⏱ Enabling the `bassboost` filter to the current song...")) } }
module.exports = Volume;