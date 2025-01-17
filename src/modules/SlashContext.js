"use strict";
const config = require("../../config");
class Context {
    constructor(e, t, i, r) {
        (this.interaction = t), (this.client = e), (this.args = i), (this.guildDB = r);
    }
    get guild() {
        return this.interaction.guild;
    }
    get channel() {
        return this.interaction.channel;
    }
    get dispatcher() {
        return this.client.queue.get(this.interaction.guildId);
    }
    get author() {
        return this.interaction.user;
    }
    get member() {
        return this.interaction.member;
    }
    errorMessage(e) {
        return this.interaction.editReply({ embeds: [{ description: e, color: "#C73829" }] });
    }
    successMessage(e) {
        return this.interaction.editReply({ embeds: [{ description: e, color: "#3A871F" }] });
    }
    reply(...e) {
        return this.interaction.editReply(...e);
    }
    premiumlink(e) {
        return config.premiumUrl + e + "?";
    }
}
module.exports = Context;
