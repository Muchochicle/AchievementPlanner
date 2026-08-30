// Rayman Legends Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rayman-legends.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   242550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rayman-legends-achievement-guide",
    "category": "game",
    "gameSlug": "rayman-legends",
    "icon": "🐇",
    "title": "Rayman Legends Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Rayman Legends - none are hidden. Covers the world and painting completions, the Teensy and creature rescue counts, the Bronze/Silver/Gold/Diamond cup grinds and Back to Origins levels, and the combat and level-specific trick feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rayman Legends has 42 Steam achievements and none of them are hidden. The bulk are progression and collection: freeing the Barbarian princess, completing each themed painting and world, rescuing all the kidnapped Teensies (in bands of 150 and 300, then all), the ten princesses, the lucky tickets, the Heroes Gallery, and the creatures. A second block is the cup grind - winning every Bronze, Silver, Gold and Diamond cup from the paintings by hitting Teensy and lum targets - plus the retro Back to Origins levels. The rest are one-off combat and level-specific trick feats (turnip combos, axe skating, the Splinter Ray stealth run, a Kung Foot win).",
                "Nothing is missable - every level, painting and cup can be replayed from the map, and Teensy, lum and cup progress is tracked cumulatively. Full completion is essentially a 100% run: the Diamond Cup and 1-million-lums achievements require near-perfect Teensy and lum collection across the whole game.",
                "Tip: replay levels with Murfy or a co-op partner to catch missed Teensies and hidden lum rooms - the cup achievements (especially Diamond Addict and Sooo rich!) are the longest grind, and it is far more efficient to fully clear each painting once than to keep coming back for a handful of Teensies."
            ]
        },
        {
            "heading": "World & Painting Completion",
            "body": [
                "Freeing the Barbarian princess, completing each themed painting (Castle Rock, Orchestral Chaos, Mariachi Madness, Gloo Gloo, Dragon Slayer) and the Living Dead Party world, getting rid of the Dark Teensies, rescuing the ten princesses and the Teensies (150, 300, then all), the lucky tickets, the Heroes Gallery, the creatures, breaking every painting lock, and unlocking all the Invasion paintings.",
                "The achievements here: Barbara's Free! (Free The Barbarian princess); Rock that castle! (Complete the \"Castle Rock\" painting); Orchestrate this! (Complete the \"Orchestral Chaos\" painting); Mad world! (Complete the \"Mariachi Madness\" painting); Splash! (Complete the \"Gloo Gloo\" painting); Dragon Rider! (Complete the \"Dragon Slayer\" painting); Journey to the moon (Get rid of the five Dark Teensies); World Tour! (Complete the \"Living Dead Party\" world); Princess savior! (Rescue the 10 princesses); Teensies' friend (Rescue 150 Teensies); Teensies' hero (Rescue 300 Teensies); The chosen one (Rescue all the kidnapped Teensies); Lucky! (Scratch 10 lucky tickets); Scratch me! (Win and scratch all the lucky tickets); We could be heroes (Collect enough lums to unlock 10 Heroes paintings in the Heroes Gallery); Sooo rich! (Gather 1 million lums and unlock the final Hero); They're so cute! (Win 30 creatures); I just love them! (Win all the creatures); Master of the locks (Break all the locks on the worlds' and levels' paintings); Invaders! (Save enough Teensies and get rid of the Dark Teensies to make all the Invasion paintings appear)."
            ]
        },
        {
            "heading": "Cups & Back to Origins",
            "body": [
                "The cup grind: the Invasion speed feat, a perfect painting (all lum and Teensy cups), a world Diamond Cup, winning all Bronze, Silver and Gold cups and all World Diamond Cups, and the retro Back to Origins levels (first one, then all).",
                "The achievements here: That was fast! (Go fast enough to save 3 Teensies in an Invasion painting); Perfect! (Get the 3 lums cups and the 3 Teensy cups of a painting); Swiped clean! (Save all the Teensies in one world to win a Diamond Cup); Bronze Addict (Win all the Bronze Cups from the paintings); Silver Addict (Win all the Silver Cups from the paintings); Gold Addict (Win all the Gold Cups from the paintings); Diamond Addict (Win all the Diamond Cups from the World paintings); Nostalgia (Finish your first \"Back to Origins\" painting); Old school (Finish all the \"Back to Origins\" paintings)."
            ]
        },
        {
            "heading": "Combat & Level-Specific Feats",
            "body": [
                "One-off trick feats: turnip combos and kills, standing on a shielded enemy, a 30-metre axe slide as Barbara or Elysia, popping enemy parachutes, 100 Flying Punch kills, letting the Luchador and the Toads do the work, the Bouncing Island lums, the Splinter Ray no-light run through Mansion of the Deep, Rubber Ducks, and a Kung Foot win.",
                "The achievements here: Turnip combo (Pull a turnip out of the ground with a crush attack, then hit it with a jump kick); Strike! (Kill 5 enemies using turnips); Gardener (Pull 100 turnips out of the ground); This ain't a platform! (Stand on top of an enemy with a shield until he tries to attack you); Axe skater (With Barbara or Elysia, slide on your axe for 30 meters); Bad joke (Destroy the parachutes of 5 enemies to make them fall); Shoot them up! (Get rid of 100 enemies with the Flying Punch); Let him do the job (In one run of \"Lucha Libre Get Away\", let the Luchador kill 10 enemies for you); Bouncing Island (Collect all the lums flying above the bouncing island in \"The Mysterious Inflatable Island\"); Watch out! (Kill 10 Toads using their electric projectiles); Splinter Ray (Go through \"Mansion of the Deep\" without crossing any light from a Dark Sentry or touching any laser); Rubber Ducks (Destroy 5 Rubber Ducks sent by Sharkmen); Just kick it! (Win one Kung Foot game)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all the worlds and paintings once, freeing princesses and getting rid of the Dark Teensies to unlock the Invasion paintings.",
                "2. Do the one-off combat and level-specific feats as you reach the levels they belong to (turnip combos, axe skating, the Splinter Ray run, Rubber Ducks, Kung Foot).",
                "3. Play the Back to Origins retro levels (Nostalgia, then Old school) and the Invasion paintings, including the 3-Teensy speed feat.",
                "4. Do a cup cleanup pass: replay each painting to collect enough lums and Teensies for its Bronze, Silver, Gold and (per world) Diamond cups.",
                "5. Finish the long grinds - all kidnapped Teensies, all creatures, all lucky tickets, and 1 million lums for Sooo rich! - which mostly complete alongside the full cup collection.",
                "Tip: lums are the currency for the Heroes Gallery and the 1-million total - play the daily/weekly Challenge levels and the music levels (which are lum-dense and fun to replay) to build the total far faster than grinding standard stages."
            ]
        }
    ]
};
