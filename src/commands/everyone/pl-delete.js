const BaseCommand = require("../../abstract/BaseCommand.js"),
    userData = require("../../models/user");
class Queue extends BaseCommand {get name() { return "pl-delete" }
    get description() { return "Deletes a playlist" }get aliases() { return ["pl-del", "pl-delete"] }
    get category() { return "Everyone Commands" }get arguments() { return [{ name: "playlist_name", description: "The name of the playlist you want to delete", required: !0 }] }
    async run({ ctx: e }) { const s = e.args.join(" "),
            t = await userData.findOne({ userID: e.author.id }); return "all" === s && t ? (t.playlists = [], t.save(), e.successMessage("Deleted all your playlists!")) : t && t.playlists.find(e => e.name === s) ? (t.playlists = t.playlists.filter(e => e.name !== s), t.save(), e.successMessage(`Deleted the playlist with the name **${s}** succesfully`)) : e.errorMessage(`You don't have any playlist called **${s}** yet!`) } }
module.exports = Queue;