// Warhammer 40,000: Sanctus Reach Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/warhammer-40k-sanctus-reach.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   502370 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "warhammer-40k-sanctus-reach-achievement-guide",
    "category": "game",
    "gameSlug": "warhammer-40k-sanctus-reach",
    "icon": "🐺",
    "title": "Warhammer 40,000: Sanctus Reach Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Warhammer 40,000: Sanctus Reach (0 hidden). Every achievement carries Steam's own text - winning a battle, a sandbox game and a multiplayer game, the per-faction 100-kill counters, and destroying the named heavy units.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Warhammer 40,000: Sanctus Reach has 12 Steam achievements, none hidden. It is a turn-based tactics game covering the Space Wolves' war against the Orks of the Red Waaagh! The achievements are simple: win a battle, win a sandbox game, win a multiplayer game, kill 100 each of Space Wolves, Orks, Astra Militarum and Chaos units, kill a Freeblade and a Morkanaut, destroy a Shadowsword and a Lord of Skulls, and kill 25 units with flame attacks.",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; the kill counters accumulate across the campaign, skirmish and multiplayer."
            ]
        },
        {
            "heading": "Victories & Kill Counters",
            "body": [
                "Winning a battle, a sandbox game and a multiplayer game, and the 100-kill counters for Space Wolves, Orks, Astra Militarum and Chaos.",
                "The achievements here: Chicken Dinner (Win a battle); All The Toys (Win a sandbox game); Street Fighting (Win a multiplayer game); Lupophobia (Kill 100 Space Wolves); Ork's Bane (Kill 100 Orks); Quis Custodiet Ipsos Custodes? (Kill 100 Astra Militarum); That’ll Tzeentch You! (Kill 100 Chaos units)."
            ]
        },
        {
            "heading": "Heavy Units",
            "body": [
                "Killing a Freeblade and a Morkanaut, destroying a Shadowsword and a Lord of Skulls, and 25 flame-attack kills.",
                "The achievements here: Play Freeblade! (Kill a Freeblade); Shazbot (Kill a Morkanout); That's Heavy Dude... (Destroy a Shadowsword); Not So Thirsty Now! (Destroy a Lord of Skulls); That's Good Barbecue (Kill 25 units with flame attacks)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign; winning your first battle and the per-faction kill counters (Orks especially) fill in fast.",
                "2. Win a Sandbox skirmish and a multiplayer game for those two achievements.",
                "3. Use flame weapons (Space Wolves flamers, Ork burnas) deliberately for the 25-flame-kill achievement.",
                "4. In skirmish, set up battles that field a Freeblade, a Morkanaut, a Shadowsword and a Lord of Skulls so you can kill each named unit.",
                "Tip: the four 100-kill counters are the only grind - a Sandbox battle with maximum points lets you field and destroy huge armies of any faction, so farm the Astra Militarum and Chaos counters there rather than waiting for them to appear in the Space-Wolves-vs-Orks campaign."
            ]
        }
    ]
};
