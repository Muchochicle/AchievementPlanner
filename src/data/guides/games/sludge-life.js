// SLUDGE LIFE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sludge-life.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1144770 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sludge-life-achievement-guide",
    "category": "game",
    "gameSlug": "sludge-life",
    "icon": "🟢",
    "title": "SLUDGE LIFE Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in SLUDGE LIFE (0 hidden). Every achievement carries Steam's own text - the three endings, the four collectible sweeps, and a handful of comedic one-off actions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "SLUDGE LIFE has 14 Steam achievements, none hidden. You play GHOST, a graffiti vandal tagging your way around a small polluted island owned by the GLUG corporation. The achievements cover the three endings (Good, Bad, Weird), stealing the diamonds, the four collectible sweeps (all items, all ZOOM spots, all apps, all WARP stations), and comedic one-offs (eat 20 slugs, smoke 20 CIGGYs, kiss the eggs, a trash-can basketball shot, urinate from the top of GLUG Tower).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. The game is short and open; a single thorough session with a collectible map clears everything."
            ]
        },
        {
            "heading": "Endings & Story",
            "body": [
                "The three endings (Good, Bad, Weird) and killing the boss in the Crypt Creeper minigame.",
                "The achievements here: THE GOOD ENDING (A way out.); THE BAD ENDING (Boom.); THE WEIRD ENDING (Get 'em all.); CREEPIN (Kill the BOSS in Crypt Creeper.)."
            ]
        },
        {
            "heading": "Collectibles",
            "body": [
                "Stealing the diamonds and the four sweeps - every item, every ZOOM spot, every app, every WARP station.",
                "The achievements here: D.R.E.A.M. (Steal the diamonds.); BIG POCKETS (Get all items.); ZOOMHEAD (Hit every ZOOM spot.); FILL UP THE DECK (Install every app.);  OFF AND ON AGAIN (Reset every WARP station.)."
            ]
        },
        {
            "heading": "Mischief",
            "body": [
                "Eating 20 slugs in a session, smoking 20 CIGGYs, kissing the eggs, the trash-can basketball shot, and urinating from the top of GLUG Tower.",
                "The achievements here: BINGE (Eat 20 slugs in one session.); TRIBUTE TO CIGGY (Smoke 20 CIGGYS.); KISS MY EGGS (Give 'em a smooch.); TRASH PLAY (Shoot a basketball into the trash can.); PISS FROM ABOVE (Urinate from the top of GLUG TOWER.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore freely and tag everything, sweeping ZOOM spots, apps and WARP stations as you pass them (a collectible map helps for the last few).",
                "2. Grab all items and steal the diamonds.",
                "3. Do the mischief one-offs: eat 20 slugs, smoke 20 CIGGYs, kiss the eggs, sink the trash-can basketball, and pee off GLUG Tower.",
                "4. Beat the Crypt Creeper minigame boss.",
                "5. Trigger the three endings from the same late save - Good (leave the island), Bad, and Weird (tag everything first).",
                "Tip: the Weird ending needs 100% tags, so treat it as the natural last step - finish every collectible and tag first, then the Weird ending and the collectible achievements all land together."
            ]
        }
    ]
};
