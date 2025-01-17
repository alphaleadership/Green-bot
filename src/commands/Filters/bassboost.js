const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "bassboost" }
    get description() { return "Enables/disables the bassboost filter. It can generate some pretty unique audio effects." }get category() { return "Filters" }
    get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0, vote: !0 } }
    async run({ ctx: e }) { return e.dispatcher.filters.includes("bassboost") ? (e.dispatcher.player.setEqualizer([]), e.dispatcher.filters = e.dispatcher.filters.filter(e => "bassboost" !== e), e.successMessage("⏱ The `bassboost` filter has been disabled!")) : (e.dispatcher.player.setEqualizer([{ band: 0, gain: .34 }, { band: 1, gain: .34 }, { band: 2, gain: .34 }, { band: 3, gain: .34 }]), e.dispatcher.filters.push("bassboost"), e.successMessage("⏱ Enabling the `bassboost` mode to the current song")) } }
module.exports = Volume;