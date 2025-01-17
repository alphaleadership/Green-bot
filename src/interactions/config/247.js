const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "247" }
    get aliases() { return ["247"] }get description() { return "Enables/Disables The 24/7 mode." }
    get category() { return "Admin Commands" }get permissions() { return ["MANAGE_GUILD"] }
    get playerCheck() { return { vote: !0 } }
    async run({ ctx: e }) { return e.guildDB.h24 ? (e.guildDB.h24 = null, e.client.mongoDB.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.h24 = null), e.successMessage("🎧 24/7 mode: **Disabled**")) : (e.guildDB.h24 = !0, e.client.mongoDB.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.h24 = !0), e.successMessage("🎧 24/7 mode: **Enabled**")) } }
module.exports = Volume;