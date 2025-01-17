const { Shoukaku: Shoukaku, Connectors: Connectors } = require("shoukaku"),
    config = require("../../config"), { getData: getData } = require("spotify-url-info");
class ShoukakuHandler extends Shoukaku {
    constructor(t) {
        super(new Connectors.DiscordJS(t), config.lavalink, config.shoukaku),
            this.on("error", (t, a) => {
                console.log(a);
            }),
            this.on("disconnect", (t, a, e) => {
                e || (a.map((t) => t.connection.disconnect()), console.warn(`Lavalink ${t}: Disconnected`));
            }),
            this.client = t;
        (this.cache = []);
    }
    checkURL(t) {
        try {
            return new URL(t), !0;
        } catch (t) {
            return !1;
        }
    }
    async fetchSp(t, a) {
        let e, s;
        if (this.client.spotify) {
            try {
                await a.renewToken(), (e = await a.search(t));
            } catch (a) {

            }
        } else {
            (e = await getData(t)), (s = !0);
        }
        return (e && e.tracks.length) || ((e = await getData(t)), (s = !0)), { data: e, sc: s };
    }
    async checkSpotify(t) {
        return (!!(
            /https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:track\/|\?uri=spotify:track:)((\w|-){22})/.test(t) ||
            /https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:playlist\/|\?uri=spotify:playlist:)((\w|-){22})/.test(t) ||
            /https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:album\/|\?uri=spotify:album:)((\w|-){22})/.test(t)
        ) || null);
    }
    async spotify(t, a, e) {
        let s,
            c = await this.fetchSp(t, e);
        if (!c || !c.data) return console.log(`Not found for ${t}`);
        switch (((c.data.type = c.data.type.toLowerCase()), c.data.type)) {
            case "track":
                s = (await a.rest.resolve(`ytsearch:${c.sc ? c.data.name : c.data.tracks[0].title} ${c.sc ? c.data.artists[0].name : c.data.tracks[0].artists}`)).tracks.shift();
                break;
            case "playlist":
            case "album":
                s = c.sc ? c.data.tracks.items : c.data.tracks;
                break;
            default:
                return null;
        }
        return { raw: s, sp: c.data, scraped: c.sc };
    }
    async search(t, a, e, s) {
        return this.checkURL(a) && a.includes("spotify") ? await this.spotify(a, t, e.client.spotify) : await t.rest.resolve(this.checkURL(a) ? a : `ytsearch:${a}`);
    }
}
module.exports = ShoukakuHandler;