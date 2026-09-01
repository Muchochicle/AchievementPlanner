// Rhythm Doctor Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rhythm-doctor.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   774181 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rhythm-doctor-achievement-guide",
    "category": "game",
    "gameSlug": "rhythm-doctor",
    "icon": "🩺",
    "title": "Rhythm Doctor Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Rhythm Doctor (5 hidden). Covers completing each Act and the finale, the per-level S-Ranks, the 2-Player and collaboration levels, and a handful of Level Select secrets. Five of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rhythm Doctor has 34 Steam achievements and 5 are hidden. The visible list is Act completions, per-level S-Ranks (earn a perfect run on specific levels), the Muse Dash collaboration, Beans Hopper and Rhythm Weightlifter bonus levels, and 2-Player Mode. The five hidden ones are secrets: failing Beans Hopper right away, entering the 'Rhythm Dogtor' code, giving Dr. Edega a headache by scrolling the Level Select too fast, getting scolded for spamming a locked level, and hearing all the dialogue in Level 5-3.",
                "The catalog marks it difficulty 3 - the S-Rank achievements demand near-perfect timing on a one-button rhythm game with heavy visual distraction, which is a real skill wall. The hidden ones, by contrast, are all quick Level Select tricks and one story-dialogue completion.",
                "Tip: get the hidden achievements out of the way early - they are all Level Select menu tricks (the RLRRLRLLRLRRLRLL code, fast scrolling, spamming a locked level) plus hearing every line in Level 5-3, none of which need rhythm skill."
            ]
        },
        {
            "heading": "Acts, Finale & S-Ranks",
            "body": [
                "Completing Acts 1-4, watching the credits, the Muse Dash collaboration, and earning an S-Rank on a long list of specific levels (1-2, 1-X, 2-2, 2-3, 2-3N, 3-1, 2-X, 3-X, 4-1, 4-1N, 1-XN, Beans Hopper).",
                "The achievements here: First Day On The Job (Complete Act 1.); One Step At A Time (Complete Act 2.); A Usual Day Around Here (Complete Act 3.); Working Remotely (Complete Act 4.); We’re All Part Of The Team (Watch the game’s credits.); The Donut Trilogy (Complete the Muse Dash Collaboration.); First Date (Earn an S-Rank on Level 1-2.); Insomnia Cure (Earn an S-Rank on Level 1-X.); Maybe Try Decaf? (Earn an S-Rank on Level 2-2.); Rush Hour (Earn an S-Rank on Level 2-3.); No Items, Final Destination (Earn an S-Rank on Level 2-3N.); Greenhouse (Earn an S-Rank on Level 3-1.); Sing From The Heart (Earn an S-Rank on Level 2-X.); Overworked, Underpaid (Earn an S-Rank on Level 3-X.); Conductor (Earn an S-Rank on Level 4-1.); Beats To Travel To (Earn an S-Rank on Level 4-1N.); Focused (Earn an S-Rank on Level 1-XN.); Nimble (Earn an S-Rank in Beans Hopper.)."
            ]
        },
        {
            "heading": "Co-op, Late Acts & Level Select Secrets",
            "body": [
                "Failing Beans Hopper immediately, a 2-Player level clear, your first S-Rank, the 'Rhythm Dogtor' code, the Level Select headache and scold secrets, more late-game S-Ranks (5-1, 5-1N, 5-2N), hearing all dialogue in Level 5-3, Rhythm Weightlifter Level 12, Acts 5, 6 and the finale, and the finale S-Ranks.",
                "The achievements here: Hey, I Wasn’t Ready Yet! (Fail the Beans Hopper bonus level right at the start.); Two-Handed (Complete any level in 2-Player Mode.); Whole-hearted Performance (Earn an S-Rank.); Woof (Enter the 'Rhythm Dogtor' code - at a level in the Level Select, press the arrows R L R R L R L L R L R R L R L L instead of starting the level.); I’m Dizzy (Give Dr. Edega a headache by holding left or right in the Level Select to scroll the screen very fast for a while.); Worth a Shot (Get scolded by Dr. Edega by repeatedly trying to enter a locked level in the Level Select.); Wow! (Earn an S-Rank on Level 5-1 in 2-Player Mode.); One Slip, Too Late, S+, For Me (Earn an S-Rank on Level 5-1N.); Feel The Burn (Earn an A-Rank on Level 5-2N.); Eavesdropping (Hear all of the dialogue in Level 5-3.); World Champion (Complete Level 12 of Rhythm Weightlifter.); The Coach of Middlesea (Complete Act 5.); Doctor’s Orders (Complete Act 6.); The Future of Middlesea (Complete the finale.); Perfect Matchmaker (Earn an S-Rank on Level 6-1.); Perfect Finale (Earn an S-Rank on the finale.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the Acts in order, completing Acts 1-4 and then 5, 6 and the finale.",
                "2. Grab the five hidden secrets early - the Rhythm Dogtor code, the Level Select headache and scold, the Beans Hopper instant fail, and all of Level 5-3's dialogue.",
                "3. Do a 2-Player level clear and the Muse Dash collaboration.",
                "4. Work through the per-level S-Ranks, starting with the easier early levels and building up.",
                "5. Finish the Rhythm Weightlifter bonus level and the finale S-Ranks.",
                "Tip: the S-Rank achievements are the whole challenge here - practise each target level on its own, learn where the visual gags try to throw off your timing, and aim for a clean run rather than recovering mid-level."
            ]
        }
    ]
};
