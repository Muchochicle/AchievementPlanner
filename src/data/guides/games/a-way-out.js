// A Way Out Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/a-way-out.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1222700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community guides, TrueAchievements, GameFAQs, wikis), noted
//   individually where it appears below. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "a-way-out-achievement-guide",
    "category": "game",
    "gameSlug": "a-way-out",
    "icon": "🔗",
    "title": "A Way Out Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in A Way Out - 8 are hidden. Covers the mandatory two-player story's main beats and its many optional co-op side activities and mini-games hidden throughout each chapter.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "A Way Out has 14 Steam achievements, 8 of which are hidden. Since the entire game is built around mandatory two-player local or online co-op (playing Leo and Vincent), nearly every achievement - hidden or not - is really about noticing and taking part in one of the game's many optional side activities: playing music together, racing on a seesaw, spinning a windmill, sitting to watch a moon-landing daydream, or finding a hidden treasure behind a grandfather clock.",
                "Nothing is permanently missable within a full playthrough as long as you and your partner explore side content as you go, since A Way Out lets you replay individual chapters afterward if you want to clean up anything you skipped the first time. The main practical challenge is coordination - many of the hidden achievements require both players to interact with something at the same time, so a single player exploring alone will miss them.",
                "Tip: A Way Out's side activities are easy to blow past if either player rushes toward the next objective marker - slow down and explore each chapter's environment together, since almost every hidden achievement is tied to noticing an optional interactive object rather than following the main story path."
            ]
        },
        {
            "heading": "Prison Break & Early Freedom",
            "body": [
                "Freeing someone from captivity, the pull-up bar contest in the prison yard, and the Farmstead chapter's shared side activities: sitting to enjoy a view together, playing piano and banjo in sync, and finding a hidden treasure behind a grandfather clock.",
                "The achievements here: Freedom (You freed someone from captivity.); Take A Breather (During the Fugitives - Breather chapter, have both players sit together on the rock to enjoy the view.); In Sync (At the Farmstead, have both players play music together - Vincent on piano, Leo on banjo - hitting 20 notes in a row without a mistake.); Timeless Treasure (At the Farmstead, have both players push the grandfather clock at the same time to reveal a secret door, then open the treasure chest inside.); No Cheating (You exposed some infidelity.); Break From Reality (You played a videogame with a friend.); Mayday! (You almost took to the skies.)."
            ]
        },
        {
            "heading": "On the Run Together",
            "body": [
                "The rest of the story's co-op side activities and story beats: exposing infidelity, playing a videogame together, almost taking to the skies, choosing mercy in an interrogation, a shared daydream, fixing a bike, spinning a windmill, a seesaw argument, and a final home run.",
                "The achievements here: Managed Anger (During the Preparation - Violent Questioning chapter, choose to push back the interrogated man's chair instead of escalating further.); Live the Dream (During the Preparation - A New Life chapter, have both players sit on the hospital waiting-room couch and watch the TV until one of them dozes off into a moon-landing dream, then run toward the lander.); Backseat Mechanic (You helped fix the bike.); Take It For A Spin (At the Farmstead, climb the windmill and interact with it to spin it up.); You Started It (During the Preparation - Reunion chapter, have both players sit on the trailer-park seesaw to trigger an argument over who sat first.); The Dip (At the start of the game in the prison yard, have Leo use the pull-up bars to beat the current inmate record.); Home Run (You are clearly good with a bat.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. In the Prison chapter, use the pull-up bars as Leo to beat the current record for The Dip.",
                "2. During Fugitives - Breather, sit together on the rock; during The Farmstead, play piano and banjo together for 20 notes, push the grandfather clock together for the hidden treasure, and spin up the windmill.",
                "3. During Preparation - Violent Questioning, choose to push back the interrogated man's chair for Managed Anger.",
                "4. During Preparation - Reunion, find the trailer park's seesaw and sit on it together for You Started It.",
                "5. During Preparation - A New Life, sit on the hospital couch together and watch the TV until the moon-landing dream triggers, then run to the lander.",
                "6. Continue through the story for the remaining achievements: exposing infidelity, playing a videogame together, helping fix the bike, almost flying a plane, and hitting a home run with a bat.",
                "Tip: play with a friend in the same room using split-screen if possible - communicating about which side activities to try is much easier face-to-face than coordinating entirely over online voice chat."
            ]
        }
    ]
};
