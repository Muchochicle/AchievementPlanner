// SpeedRunners Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/speedrunners.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   207140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "speedrunners-achievement-guide",
    "category": "game",
    "gameSlug": "speedrunners",
    "icon": "🏃",
    "title": "SpeedRunners Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in SpeedRunners - 6 are hidden. Covers grapple and air-combat feats, combat techniques with crates and gadgets, ranked progression, and the single-player Story mode.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "SpeedRunners has 29 Steam achievements, and 6 are hidden. The visible list covers the game's core grapple-hook and air-combat mechanics (grappling, overtaking, air tackles, staying airborne), gadget and crate combat techniques (blocking rockets and hooks with crates, dropping crates on heads, fireball and freeze-ray multi-hits), the Ranked ladder's league promotions, and the single-player Story mode's four chapters plus an Unfair-difficulty clear. The 6 hidden achievements are all specific trick-shot and joke feats - some flashy (a multi-opponent bomb hit, a long-range grapple), some self-deprecating (blowing yourself up with your own rocket).",
                "Nothing is missable - every grapple, overtake, and combat-technique achievement is a permanent lifetime stat, and Story mode chapters stay replayable. The genuine long pole is ez git gud (winning a Ranked match as a maxed-out \"gold\" character), which needs enough XP grinding with one character to unlock its top cosmetic tier before you can even attempt the achievement."
            ]
        },
        {
            "heading": "Grapple & Air Combat",
            "body": [
                "The core movement and combat achievements: grappling 100 opponents with the golden hook, overtaking 1000 opponents, tackling 10 opponents mid-air, and staying off the floor for 5, 10, and 30 seconds.",
                "The achievements here: Gotcha! (Grapple 100 opponents using the golden hook.); See Ya! (Overtake 1000 opponents.); Dive, Kick (Tackle 10 opponents mid-air.); King of Swing (Don't touch the floor for 5 seconds.); Sultan of Swing (Don't touch the floor for 10 seconds.); Ultimate Swing Lord (Don't touch the floor for 30 seconds.)."
            ]
        },
        {
            "heading": "Combat Techniques",
            "body": [
                "Gadget and crate-based combat feats: dodging the Golden Hook 10 times, blocking 10 rockets with crates, dropping a crate on an opponent's head 10 times, hitting 3 opponents with one fireball, freezing 3 opponents with one ray, maintaining superspeed for a full second, and deflecting a fireball with a shockwave.",
                "The achievements here: Smooth Moves! (Dodge the Golden Hook 10 times.); Super Crate Blox (Block 10 Rockets with Crates.); Mind Your Head! (Drop a Crate on an opponent's head 10 times.); Strike! (Hit 3 opponents with one fireball.); Triple Freeze! (Freeze 3 opponents with one ray.); Super Speed (Maintain superspeed for a full second.); Deflected! (Deflect a fireball with a shockwave.)."
            ]
        },
        {
            "heading": "Ranked Progression",
            "body": [
                "The Ranked ladder: promoting to the Beginner League, promoting to the Bronze League, unlocking Ranked matches, reaching max XP, and blocking 10 golden hooks with crates.",
                "The achievements here: Ranking Up! (Promote to the Beginner League.); Getting Serious! (Promote to the Bronze League.); Ready for Ranked (Unlock Ranked matches.); 100% (Reach max XP.); Hook Block (Block 10 golden hooks with crates.)."
            ]
        },
        {
            "heading": "Story Mode",
            "body": [
                "Clearing each of Story mode's four chapters, then clearing every chapter on Unfair difficulty.",
                "The achievements here: A Race against Time (Beat the first Chapter in Story.); Officer requesting Backup (Beat the second Chapter in Story.); The most dangerous Game (Beat the third Chapter in Story.); Welcome to New Rush City (Beat the final Chapter in Story.); The King of New Rush City (Beat all Chapters on Unfair difficulty.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "SpeedRunners' 6 hidden achievements are all specific trick-shot and joke feats, sourced from community guides and discussions (Steam Community, Steam Hunters):",
                "Two Birds, One Stone: Hit two or more opponents with a single bomb at the same time.",
                "Vengeance, and running!: Grapple an opponent immediately after they grapple you.",
                "From Way Downtown: Land a grapple on an opponent from a very long distance away.",
                "Backfired: Get hit and knocked out by your own rocket.",
                "Get Lucky: In a custom lobby, enable the \"SpeedRoulette\" mutator and play until a Roulette wheel appears at the start of a race.",
                "ez git gud: Win a Ranked match while playing as a maxed-out \"gold\" character (unlocked by earning enough XP with that character to reach its highest cosmetic tier)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a spread of matches to build up the core grapple and overtake counters (100 grapples, 1000 overtakes, 10 air tackles) and the air-time achievements (5/10/30 seconds without touching the floor).",
                "2. Work the combat-technique achievements as opportunities appear: dodging and blocking the Golden Hook, blocking rockets and dropping crates on heads, multi-hit fireballs and freeze rays, deflecting a fireball with a shockwave, and maintaining superspeed for a full second.",
                "3. Grind Ranked matches toward the Beginner and Bronze League promotions and unlocking Ranked matches in the first place.",
                "4. Clear the single-player Story mode's four chapters, then replay it on Unfair difficulty for the final Story achievement.",
                "5. Chase the hidden trick-shot achievements deliberately: hit two opponents with one bomb, grapple someone who just grappled you, land a long-range grapple, get knocked out by your own rocket, enable the SpeedRoulette mutator in a custom lobby, and once you have a maxed \"gold\" character, win a Ranked match with them.",
                "Tip: Two Birds, One Stone and From Way Downtown are both about positioning rather than luck - practice on wide, open maps where opponents cluster together or where long sightlines exist, rather than tight, cluttered levels."
            ]
        }
    ]
};
