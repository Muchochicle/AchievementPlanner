// Split Fiction Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/split-fiction.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2001120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "split-fiction-achievement-guide",
    "category": "game",
    "gameSlug": "split-fiction",
    "icon": "📚",
    "title": "Split Fiction Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Split Fiction (3 hidden). Covers the story and progression achievements, and the deaths, secrets and easter-egg achievements. Three achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Split Fiction has 20 Steam achievements and three are Steam-hidden (all easter eggs - the elephant whip, the Portal cake room, the Metal Gear cardboard box). The open seventeen are finishing the game, all side stories, all Cauldron potion forms, all 6 benches, and a set of scripted or optional moments (complete the Gameshow with the bomb intact, get tazed by the Tazer Bot, get locked in a cell, get eaten by the shark, feed the baby dragon).",
                "The catalog marks it difficulty 2. It is a co-op-only game and quite guided; the achievements are mostly 'do this specific thing once', and a written list of the death and easter-egg moments makes 100% quick.",
                "Tip: play through with a partner following a checklist, and use chapter select afterwards for any death moments or easter eggs you missed."
            ]
        },
        {
            "heading": "Story & Progression",
            "body": [
                "Finishing the game ('BFF's'), completing all side stories, all Cauldron potion forms, 'Chair the Load', the captcha ('You Are Not a Robot'), relaxing on all 6 benches, throwing the stones ('One Bird, Three Stones'), and completing the Gameshow without the bomb exploding.",
                "The achievements here: BFF's (Finally published); Bookworms (Complete all side stories); Potion Chef (I need your strongest potions); Chair the Load (Get off me...); You Are Not a Robot (Completely Automated Public Turing test to tell Computers and Humans Apart); Sisters: A Tale Of Two Besties (Relax on all 6 benches); One Bird, Three Stones (You couldn't have known); Cold Potato (Complete the Gameshow without the bomb exploding)."
            ]
        },
        {
            "heading": "Deaths, Secrets & Easter Eggs",
            "body": [
                "Being killed by the Tazer Bot, getting locked in a cell, the brick-house moment, being killed by the Receptionist, feeding the baby dragon, being punched on the swing, the Steam-hidden elephant whip ('Rose's Best Friend'), the shark death, 'Are We the Baddies?', the Steam-hidden Portal cake room and Metal Gear cardboard box, and 'Goin' Whole Hog'.",
                "The achievements here: Tazed and Confused (Adding insult to injury); Locked Up (No way out); Huffing and Puffing (It's not the big bad wolf you have to worry about); Robot Revolution (Hasta la vista, baby); Feed Me (Take a snack); A Friendly Push (Monkey strong); Rose's Best Friend (In Chapter 2, at the building with an elephant on top, Player 2 whips the elephant twice - once to rip off a leg, once to rip off an arm.); We're Gonna Need a Bigger Boat (Duuuun dun… duuuun dun…); Are We the Baddies? (No worries, it's just a simulation); The Cake is Not a Lie (In the Run and Gun section of Final Dawn, at the first vertical purple portal, take the hidden area on the left to find a cake (a Portal reference).); Snaaaaaaaaake (In the Isolation story, while sneaking past the guards in the Prison Courtyard as Zoe, climb into the cardboard box (a Metal Gear reference).); Goin' Whole Hog (Let it rip)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the whole game with your co-op partner, doing every side story.",
                "2. Do the optional-moment achievements as they come up (Gameshow no-explosion, feed the dragon, throw the stones, all Cauldron forms, all 6 benches).",
                "3. Let the death-moment achievements happen deliberately (Tazer Bot, cell, shark, Receptionist, swing).",
                "4. Get the three hidden easter eggs: the elephant in Chapter 2, the cake room in Final Dawn, the cardboard box in the Prison Courtyard.",
                "5. Use chapter select for anything missed.",
                "Tip: the elephant easter egg ('Rose's Best Friend') needs Player 2's whip specifically - swap characters for that section if Player 1 has been driving."
            ]
        }
    ]
};
