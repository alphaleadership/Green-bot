const BaseCommand = require("../../abstract/BaseCommand.js");
class Skip extends BaseCommand {get name() { return "resetfilters" }
    get description() { return "Clears all filters" }get aliases() { return ["clearfilters", "reset"] }
    get category() { return "Filters" }get playerCheck() { return { voice: !0, dispatcher: !0, channel: !0 } }
    async run({ ctx: e }) { e.dispatcher.player.clearFilters(), e.dispatcher.filters = [], e.successMessage("All filters have been cleared!") } }
module.exports = Skip;