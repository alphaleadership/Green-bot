"use strict";
const config = require("../../config");
class Context {
    constructor(e, s, t, r) {
        if (!s.channel) return console.log("Nah... i can't do thiss");
        (this.message = s), (this.client = e), (this.args = t), (this.guildDB = r);
    }
    get guild() {
        return this.message.guild;
    }
    get channel() {
        return this.message.channel;
    }
    get dispatcher() {
        return this.client.queue.get(this.message.guild.id);
    }
    get author() {
        return this.message.author;
    }
    get member() {
        return this.message.member;
    }
    errorMessage(e) {
        return this.message.channel.send({ embeds: [{ description: e, color: "#C73829" }] });
    }
    successMessage(e) {
        return this.message.channel.send({ embeds: [{ description: e, color: "#3A871F" }] });
    }
    premiumlink(e) {
        return config.premiumUrl + e + "?";
    }
}
module.exports = Context;
