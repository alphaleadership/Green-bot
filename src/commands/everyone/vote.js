const BaseCommand = require("../../abstract/BaseCommand.js");
class Help extends BaseCommand {get name() { return "vote" }
    get category() { return "Everyone Commands" }get aliases() { return ["checkvote", "hasvoted"] }
    get description() { return "Check if yo voted or no" }
    run({ ctx: e }) { e.client.dbl.hasVoted(e.author.id).then(t => { e.channel.send({ embeds: [{ author: { name: "Vote for Green-bot", url: "https://top.gg/bot/783708073390112830/vote", icon_url: e.client.user.displayAvatarURL({ dynamic: !0, size: 512 }) }, color: "#3A871F", description: `${t?"✅ You have voted for me in the last 12 hours":"❌ You haven't voted for me in the last 12 hours!"}\n\n• [Click here](https://top.gg/bot/783708073390112830/vote) to vote`, footer: { text: "Don't want to vote? Check our premium (green-bot.app/premium)", icon_url: e.client.user.displayAvatarURL({ dynamic: !0, size: 512 }) } }] }) }) } }
module.exports = Help;