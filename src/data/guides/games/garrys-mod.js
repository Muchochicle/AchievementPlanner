// Garry's Mod's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/garrys-mod.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid 4000
//   via ISteamUserStats/GetSchemaForGame (fetched through this app's
//   own backend/services/steamApi.js) - all 29 ship a real, official
//   Steam description, quoted directly below. Garry's Mod has no
//   Steam-hidden achievements.
// - The grouping (first steps, playtime milestones, sandbox-tool
//   grinds, combat counters, and exploration/Workshop achievements) is
//   read from what each achievement's own description requires. Several
//   are deliberately absurd real-time grinds (a year, a month, a week
//   of playtime).
export const GUIDE = {

    slug: "garrys-mod-achievement-guide",
    category: "game",
    gameSlug: "garrys-mod",
    icon: "🔧",
    title: "Garry's Mod Achievement Guide",
    summary: "A practical guide to all 29 Steam achievements in Garry's Mod - the first steps, the real-time playtime milestones, the sandbox-tool and combat counters, and the map and Workshop achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Garry's Mod has 29 Steam achievements and none are hidden. Most are counters that tick up while you mess around in the sandbox; a handful are deliberately ridiculous real-time playtime grinds.",
                "Nothing is missable, but a few achievements (Addict for a year of playtime, One Month, One Week) are measured in real time played and cannot be rushed - they simply happen after years of casual play, or with the game left running.",
                "Tip: most of the sandbox counters (props, ragdolls, NPCs, balloons, balls) can be knocked out in a single dedicated sandbox session by spawning and removing things in bulk. Do those on purpose rather than waiting for them to accrue."
            ]
        },

        {
            heading: "First Steps",
            body: [
                "Play Singleplayer and Play Multiplayer (play each mode once), Play Around (play a non-sandbox gamemode), Friendly (play with 10 friends), and Yes, I am the real garry! (be on the same server as garry)."
            ]
        },

        {
            heading: "Playtime Milestones",
            body: [
                "The real-time grinds: Startup Millenium (start the game 1,000 times), Addict (a year of total playtime), One Day, One Week, and One Month (24 hours, a week, a month of playtime).",
                "Single-session time: Half Marathon and Marathon (4 then 8 hours on the same server and map)."
            ]
        },

        {
            heading: "Sandbox Tool Grinds",
            body: [
                "Spawning: Creator (spawn 5,000 props), Procreator (spawn 1,000 NPCs), and Dollhouse (spawn 2,000 ragdolls). Removing: Destroyer (remove 5,000 things).",
                "Toys and menus: Popper (burst 1,000 balloons), Ball Eater (eat 200 balls), Menu User (open the spawnmenu 100,000 times), and Bad Coder (trigger 500 Lua errors)."
            ]
        },

        {
            heading: "Combat Counters",
            body: [
                "War Zone (kill 1,000 \"Baddies\"), Bad Friend (kill 1,000 friendly NPCs), and Innocent Bystander (kill 1,000 innocent animals)."
            ]
        },

        {
            heading: "Maps & Workshop",
            body: [
                "Map Loader (play 20 different maps) and Secret Phrase (say the secret phrase in chat).",
                "Workshop popularity: 10 Thumbs, 100 Thumbs, and 1000 Thumbs (total thumbs-up on your uploads), and Mega Upload (1,000 thumbs on a single upload)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "In one focused sandbox session, grind the tool counters (Creator, Procreator, Dollhouse, Destroyer, Popper, Ball Eater) and the combat counters (War Zone, Bad Friend, Innocent Bystander) by spawning and killing things in bulk.",
                "Knock out the easy ones (Play Singleplayer, Play Multiplayer, Play Around, Friendly, Secret Phrase, Map Loader) and, on a multiplayer server, chase Yes, I am the real garry! and the Marathon / Half Marathon session-time achievements.",
                "The Workshop achievements (10 Thumbs through Mega Upload) need popular uploads, and the playtime milestones (Startup Millenium, Addict, One Day, One Week, One Month) simply accumulate over a very long time - there is no way to speed them up."
            ]
        }

    ]

};
