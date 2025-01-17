const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {
    get name() {
        return "announcesongs";
    }
    get description() {
        return "This will enable/disable now-playing aka song announcing";
    }
    get aliases() {
        return ["announcesong", "announce", "toggle-np"];
    }
    get category() {
        return "Admin Commands";
    }
    get permissions() {
        return ["MANAGE_GUILD"];
    }
    async run({ ctx: n }) {
        return n.guildDB.announce ?
            ((n.guildDB.announce = null), n.guildDB.save(), n.dispatcher && (n.dispatcher.metadata.guildDB.announce = null), n.successMessage("I will now hide the messages announcing a new song.")) :
            ((n.guildDB.announce = !0), n.guildDB.save(), n.dispatcher && (n.dispatcher.metadata.guildDB.announce = !0), n.successMessage("I will now show the messages announcing a new song."));
    }
}
module.exports = Volume;