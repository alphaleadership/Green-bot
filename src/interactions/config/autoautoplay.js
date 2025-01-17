const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {get name() { return "autoautoplay" }
    get description() { return "Toggles the auto autoplay feature" }get category() { return "Admin Commands" }
    get permissions() { return ["MANAGE_GUILD"] }
    async run({ ctx: e }) { return e.guildDB.auto_autoplay ? (e.guildDB.auto_autoplay = null, e.client.mongoDB.handleCache(e.guildDB), e.successMessage("The `Auto-Autoplay` plugin has been disabled.")) : (e.guildDB.auto_autoplay = !0, e.client.mongoDB.handleCache(e.guildDB), e.successMessage("The `Auto-Autoplay` plugin has been enabled!")) } }
module.exports = Volume;