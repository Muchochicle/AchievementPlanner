// Metal: Hellsinger Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/metal-hellsinger.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1061910 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "metal-hellsinger-achievement-guide",
    "category": "game",
    "gameSlug": "metal-hellsinger",
    "icon": "🎸",
    "title": "Metal: Hellsinger Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Metal: Hellsinger - none are hidden. Covers destroying the Red Judge across all eight Hells, the Hit Streak tiers, the Torment challenge completions, and the combat, weapon and self-imposed-challenge feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Metal: Hellsinger has 28 Steam achievements and none of them are hidden. Eight of them are for destroying the Red Judge's aspect in each of the game's eight Hells (Voke, Acheron, Gehenna, Incaustis, Nihil, Sheol, Yhelm, Stygia) as you play the campaign. The rest are combat feats: the four Hit Streak tiers (10 / 20 / 35 / 50), completing Torments (the optional challenge rooms) including all of them and a top result, obtaining all weapons, and a set of one-off kill and style feats (multi-kills, on-beat streaks, a Pazifist run using only Paz, a Terminus kill on a Judge).",
                "Nothing is missable - every Hell and Torment can be replayed from the level select, and the counter-based achievements (666 total kills, 50 Behemoths, 100 dashes) carry across all your play. This is one of the shortest completions in the FPS genre; the only genuinely tricky achievements are the higher Hit Streaks and the challenge-run feats.",
                "Tip: play through the campaign once on Casual or Normal difficulty first to unlock every Hell and Torment and to learn the rhythm of each arena - Hit Streaks and the on-beat achievement (Not Shaken, Nor Stirred) get dramatically easier once you can feel the beat and reload on time without watching the meter."
            ]
        },
        {
            "heading": "The Red Judge & Campaign",
            "body": [
                "Destroying the Red Judge's aspect at the end of each of the eight Hells: Voke, Acheron, Gehenna, Incaustis, Nihil, Sheol (the Red Judge herself), Yhelm and Stygia.",
                "The achievements here: Breaking the Law (Destroyed the Red Judge aspect in Voke); For Whom the Bell Tolls (Destroyed the Red Judge aspect in Acheron); Dead and Buried (Destroyed the Red Judge aspect in Gehenna); Rise, Rebel, Resist (Destroyed the Red Judge aspect in Incaustis); Ain't No Mountain High Enough (Destroyed the Red Judge aspect in Nihil); When She Falleth (Destroyed the Red Judge); Smoke on the Water (Destroyed the Red Judge aspect in Yhelm); If I Can Make It Here (Destroyed the Red Judge aspect in Stygia)."
            ]
        },
        {
            "heading": "Combat, Hit Streaks & Challenges",
            "body": [
                "The four Hit Streak tiers (10 / 20 / 35 / 50), completing a Torment, a top Torment result and all Torments, killing 50 Behemoths, 100 dashes, 666 total kills, obtaining all weapons, the multi-kill and timing feats, dying in specific ways, killing 25 enemies on a Hit Streak, a two-Seraph and an 8-in-4-seconds kill, a Paz-only Hell clear, and a Terminus kill on a Judge's aspect.",
                "The achievements here: This Pounding Heart (Reached Hit Streak: 10); This Pounding Heart II (Reached Hit Streak: 20); This Pounding Heart III (Reached Hit Streak: 35); This Pounding Heart IV (Reached Hit Streak: 50); Heavy Metal Is the Law (Completed a Torment); Three of Pentacles (Achieved the top result in a Torment); Queen of the Underworld (Killed 50 Behemoths); No Rest for the Wicked (Completed all Torments); Soaring in the Deep (Soared (Dash + jump) 100 times); Piece of My Heart (Died in a Chaos Crystal explosion); Highway to Hell (Got 666 kills (game total)); Material Girl (Obtained all weapons); Kill Your Demons (Multi-killed 2 enemies); Not Shaken, Nor Stirred (Never hit off-beat in a Hell); Who Wants to Live Forever (Died 20 times); The Empress (Killed 25 enemies while maintaining a Hit Streak); Raining Blood (Killed two Seraphs in one attack); The Ferrywoman (Killed 8 enemies in 4 seconds); Pazifist (Cleared a Hell using only Paz); The Sword is Sharper (Killed a Judge's Aspect with Terminus)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign through all eight Hells on Casual or Normal difficulty, which unlocks every Judge-aspect achievement and every Torment.",
                "2. During that run, work on the Hit Streak tiers (aim for 50) and the on-beat achievement, and pick up the incidental feats (multi-kills, two Seraphs in one attack, 8 kills in 4 seconds, 25 kills on a streak).",
                "3. Go back through the level select to complete every Torment, and get a top result on at least one.",
                "4. Do the self-imposed feats deliberately: clear a Hell using only Paz (Pazifist), land a Terminus kill on a Judge's aspect, and die in a Chaos Crystal explosion.",
                "5. Mop up the remaining counters - 666 total kills, 50 Behemoths, 100 dashes, all weapons obtained - which usually finish during the above.",
                "Tip: the Pazifist run (clear a Hell using only Paz, the raven) is easiest on the first, shortest Hell - Paz's damage is low, so pick Voke, lean on Slaughters and finishers for damage, and keep your Fury meter high for the extra Paz damage multiplier."
            ]
        }
    ]
};
