// Planetary Annihilation: TITANS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/planetary-annihilation-titans.json), whose 19 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   386070 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "planetary-annihilation-titans-achievement-guide",
    "category": "game",
    "gameSlug": "planetary-annihilation-titans",
    "icon": "🌐",
    "title": "Planetary Annihilation: TITANS Achievement Guide",
    "summary": "A practical guide to all 19 Steam achievements in Planetary Annihilation: TITANS - none are hidden. Covers the Galactic War and competitive-play achievements, and the command and full-build achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Planetary Annihilation: TITANS has 19 Steam achievements and none of them are hidden. Most are single-match or campaign feats - win the Galactic War, start a game with a custom system, participate in ten team games, activate an annihilaser and destroy five enemy planets with it, smash five enemy planets, discover a new Galactic War loadout, kill a commander within five minutes five times, win outnumbered three-to-one, and use all ten control groups and ten camera anchors. The rest are build-everything feats (every structure, every unit, every basic factory in one game) and watching competitive play as a spectator.",
                "Nothing is missable - Galactic War and skirmish are replayable and the counters accumulate. The completion's slow parts are the two spectator achievements (two and eight hours of watching competitive play) and the ten-team-games requirement.",
                "Tip: play a long, one-sided skirmish against a weak AI on a multi-planet system to do the build-everything, annihilaser, planet-smashing and control-group achievements all at once, then use Galactic War for its feats and spectate mode to idle out the two watching achievements."
            ]
        },
        {
            "heading": "Galactic War & Competitive Play",
            "body": [
                "Winning the Galactic War, starting with a custom system, ten team games, activating an annihilaser, five annihilaser planet kills, five planet smashes, targeting an incoming planet with an annihilaser, discovering a Galactic War loadout, eliminating a faction in Galactic War, two and eight hours of spectating, a 95%+ resource-efficiency match, five sub-five-minute commander kills, and a win against three times as many players.",
                "The achievements here: Galactic Annihilation (Annihilate your opposition throughout the galaxy); Worldbuilder (Start a game with a custom system); Team Player (Participate in ten team games); Fully Operational (Activate an annihilaser); Technological Terror (Destroy five enemy planets with annihilasers); World Ender (Smash five enemy planets); Him or Me (Target an incoming planet with an annihilaser); Technophile (Discover a new loadout in galactic war); One Down (Eliminate a faction in galactic war); Enthusiast (Watch competitive play for two hours as a spectator); Fanatic (Watch competitive play for eight hours as a spectator); Efficient (Use more than 95% of the metal and energy you produce in a match); Ruthless (Kill a commander within five minutes, five times); Against All Odds (Win against three times as many players)."
            ]
        },
        {
            "heading": "Command & Full Build",
            "body": [
                "Managing your armies with all ten control groups, keeping ten camera anchors, and building every structure, every kind of unit, and every kind of basic factory in a single game.",
                "The achievements here: Field Commander (Manage your armies with all ten control groups); Panopticon (Keep tabs on your conquest with ten camera anchors); Architect (Build every structure in a single game); One of Each (Build every kind of unit); Jack of All Trades (Build every kind of basic factory)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a long skirmish against a weak AI on a large multi-planet system.",
                "2. In that game, build every structure, every unit type and every basic factory, use all ten control groups and camera anchors, and hit 95%+ resource efficiency.",
                "3. Build annihilasers, activate one, and destroy five enemy planets with them; smash five planets with the metal-planet weapon.",
                "4. Play Galactic War to a win, discovering a loadout and eliminating a faction along the way.",
                "5. Do the ten team games, a three-to-one outnumbered win, and the five fast commander kills, then leave spectate mode running to earn the two and eight hour watching achievements.",
                "Tip: the annihilaser and planet-smash achievements need a system generated with extra planets and metal planets - set that up in the system editor before the match, since a single-planet map cannot produce them at all."
            ]
        }
    ]
};
