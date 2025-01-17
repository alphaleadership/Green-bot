const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {
    get name() {
        return "buttons";
    }
    get description() {
        return "Enables or disables the buttons to controll the music";
    }
    get aliases() {
        return ["autoshufflle", "autoshufle"];
    }
    get permissions() {
        return ["MANAGE_GUILD"];
    }
    get category() {
        return "Admin Commands";
    }
    async run({ ctx: e }) {
        return e.guildDB.buttons ?
            ((e.guildDB.buttons = null), e.client.mongoDB.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.buttons = null), e.successMessage("I will no longer show buttons on now playing messages!.")) :
            ((e.guildDB.buttons = !0), e.client.mongoDB.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.buttons = !0), e.successMessage("I will now show buttons on now playing messages!"));
    }
}
module.exports = Volume;