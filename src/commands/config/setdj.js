const BaseCommand = require("../../abstract/BaseCommand.js");
class Volume extends BaseCommand {
    get name() {
        return "setdj";
    }
    get description() {
        return "Sets the DJ role. Every single member with this role will be able to manage the music";
    }
    get category() {
        return "Admin Commands";
    }
    get permissions() {
        return ["MANAGE_GUILD"];
    }
    get aliases() {
        return ["dj", "djrole"];
    }
    get playerCheck() {
        return { vote: true };
    }
    get arguments() {
        return [{ name: "role", description: "The role you want to set as DJ role. Put disable to disable the dj role", required: !0 }];
    }
    async run({ ctx: e }) {
        if ("disable" === e.args[0].toLowerCase() || "@everyone" === e.args[0] || "reset" === e.args[0])
            return null === e.guildDB.dj_role ?
                e.errorMessage("The dj role is not already set.") :
                ((e.guildDB.dj_role = null), e.dispatcher && (e.dispatcher.metadata.dj_role = null), e.client.mongoDB.handleCache(e.guildDB), e.successMessage("The DJ role has been successfully disabled on this server!"));
        const r = e.message.mentions.roles.first() || e.guild.roles.cache.get(e.args[0]);
        return !r || r.managed || r.guild.id !== e.guild.id ?
            e.errorMessage("Please provide a valid role or a valid role ID.") :
            e.guildDB.dj_role && e.guildDB.dj_role === r.id ?
            e.errorMessage("The DJ role is already set to this role!") :
            ((e.guildDB.dj_role = r.id),
                e.dispatcher && (e.dispatcher.metadata.dj_role = r.id),
                e.client.mongoDB.handleCache(e.guildDB),
                e.successMessage(`The new Dj role is now ${r}! \nNote that every member with this role will be able to manage the music!`));
    }
}
module.exports = Volume;