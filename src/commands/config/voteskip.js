const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "voteskip" }
    get description() { return "This will enable/disable the vote skip system" }get category() { return "Admin Commands" }
    get permissions() { return ["MANAGE_GUILD"] }
    async run({ ctx: e }) { return e.guildDB.vote_skip ? (e.guildDB.vote_skip = null, e.client.mongoDB.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.vote_skip = null), e.successMessage("The `Vote-Skip` plugin is now disabled!")) : (e.guildDB.vote_skip = !0, e.client.mongoDB.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.vote_skip = !0), e.successMessage("The `Vote-Skip` plugin is now enabled!")) } }
module.exports = Volume;