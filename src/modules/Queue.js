const KongouDispatcher = require("./KongouDispatcher.js"),
    fetch = require("node-fetch");
class Queue extends Map {
    constructor(i, e) {
        super(e), (this.client = i), (this._sockets = []), (this._waiting = []), (this.inVoice = []), (this.waitingConnect = []), (this.dashURL = "SECRET_URL");
    }
    async addWaiting(i) {
        return this._sockets.find((e) => e.id === i.id) || this._sockets.push(i), this._waiting.find((e) => e.id === i.id) || this._waiting.push(i), !0;
    }
    async addWaitingUser(i, e, t, n) {
        return this.inVoice.find((i) => i.id === e && i.serverId === i) ?
            { error: !0, message: "Already connected" } :
            this.waitingConnect.find((i) => i.id === e && i.serverId === i) ?
            { error: !0, message: "Already in waiting list " } :
            (n ? this.inVoice.push({ serverId: i, userId: t, id: e }) : this.waitingConnect.push({ serverId: i, userId: t, id: e }), !0);
    }
    async removeWaitingUser(i) {
        return this._waiting.find((e) => e.id === i) && (this._waiting = this._waiting.filter((e) => e.id !== i)), !0;
    }
    async removeWaiting(i) {
        return this.waitingConnect.find((e) => e.id === i) && (this.waitingConnect = this.waitingConnect.filter((e) => e.id !== i)), !0;
    }
    async cleanSocket(i) {
        return (
            this._sockets.find((e) => e.id === i) && (this._sockets = this._sockets.filter((e) => e.id !== i)),
            this._waiting.find((e) => e.id === i) && (this._waiting = this._waiting.filter((e) => e.id !== i)),
            this.inVoice.find((e) => e.id === i) && (this.inVoice = this.inVoice.filter((e) => e.id !== i)),
            this.waitingConnect.find((e) => e.id === i) && (this.waitingConnect = this.waitingConnect.filter((e) => e.id !== i)), !0
        );
    }
    async emitOp(i) {
        if (!i) throw new Error("Please provide data to emit");
        const e = await fetch(this.dashURL, { method: "post", body: JSON.stringify(i), headers: { "Content-Type": "application/json" } });
        if (!e || e.error) return console.log("Something when wrong while sending an op");
        let t = await e.json();
        return t.outdated ? (this.cleanSocket(i.socketId), console.log("[Ghot socket] A socket has been just killed"), !1) : t;
    }
    async create(i, e) {
        if (this.get(i.guild.id)) {
            let t = this.get(i.guild.id);
            if (t && i.guild.me.voice.channelId) return t;
            if (
                await e
                .joinChannel({ guildId: i.guild.id, shardId: i.guild.shardId || 0, channelId: i.member.voice.channelId, deaf: !0 })
                .catch((e) => (i.errorMessage("Could not connect to your voice channel. Please try again." + e), this.get(i.guild.id) && this.delete(i.guild.id)))
            )
                return;
            return i.dispatcher;
        } {
            let t;
            const n = await e.joinChannel({ guildId: i.guild.id, shardId: i.guild.shardId || 0, channelId: i.member.voice.channelId, deaf: !0 }).catch((e) => (console.log(e), (t = !0), this.get(i.guild.id) && this.delete(i.guild.id)));
            if (t) return;
            i.member.voice.channel &&
                "GUILD_STAGE_VOICE" === i.member.voice.channel.type &&
                i.guild.me.voice.setSuppressed(!1).catch((e) => {
                    i.errorMessage("I don't have the permission to request to speak in this stage channel!");
                });
            const s = new KongouDispatcher({
                client: this.client,
                metadata: {
                    guild: i.guild,
                    message: i.messageController,
                    channel: i.guildDB.textchannel && i.guild.channels.cache.get(i.guildDB.textchannel) ? i.guild.channels.cache.get(i.guildDB.textchannel) : i.channel,
                    guildDB: i.guildDB,
                    dj: i.author.id,
                },
                player: n,
                node: e,
            });
            return (
                s.player.setVolume(i.guildDB.defaultVolume / 100 || 70),
                i.guildDB.auto_autoplay && (s.repeat = "autoplay"),
                this.set(i.guild.id, s),
                this._waiting.find((e) => e.serverId === i.guild.id) &&
                this._waiting
                .filter((e) => e.serverId === i.guild.id)
                .forEach((e) => {
                    this.client.queue.emitOp({ changes: ["PLAYER_READY"], socketId: e.id, serverId: i.guild.id, queueData: {} }), this.removeWaiting(e.id);
                }),
                s
            );
        }
    }
}
module.exports = Queue;