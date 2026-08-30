// Bright Memory: Infinite Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bright-memory-infinite.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1178830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bright-memory-infinite-achievement-guide",
    "category": "game",
    "gameSlug": "bright-memory-infinite",
    "icon": "⚡",
    "title": "Bright Memory: Infinite Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Bright Memory: Infinite - none are hidden. Covers the boss kills and the three difficulty clears, the combat and per-weapon kill milestones, the counter/deflect feats and the stealth and car-chase set-pieces, and the Reliquary collectibles and Lv.3 skill unlocks.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bright Memory: Infinite has 30 Steam achievements and none of them are hidden. Four are boss kills, and three are difficulty clears (normal, then \"Revenge\", then \"Hell\"). The bulk are combat milestones - severing 50 and 100 limbs, flame kills, activating Counter 50 and 100 times, deflecting 20 bullets, and per-weapon Silver/Gold kill counts for the sword, assault rifle, shotgun, handgun and sniper rifle. Two are set-pieces (a 14-kill no-detection stealth run, five vehicle kills in the car chase), and the last few are collectibles (Reliquaries and Relics) and two Lv.3 skill unlocks.",
                "Nothing is missable - the game is about 90 minutes long and fully replayable via chapter select, and the kill and counter counts carry across playthroughs. Full completion needs about three runs: one on each difficulty, with the per-weapon kill counts and collectibles spread across them.",
                "Tip: dedicate one weapon per playthrough to its Silver/Gold kill count - the per-weapon targets (150 kills for the sword, AR and shotgun; 100 for the handgun and sniper) will not finish in a single run if you switch weapons constantly, so pick one to main each time through."
            ]
        },
        {
            "heading": "Story & Difficulty",
            "body": [
                "Defeating the Tian Yu Emperor (twice), the Giant King and the Six-armed Emperor, and clearing the game on normal, on \"Revenge\" difficulty, and on \"Hell\" difficulty.",
                "The achievements here: Power Balance (Defeat the Tian Yu Emperor); Fallen General (Kill the Tian Yu Emperor); Battlefield Veteran (Kill the Giant King); Burning Bridges (Kill the Six-armed Emperor); Restoration (Clear the game); Bitter Rivals (Clear the game on “Revenge” difficulty); Infinite (Clear the game on “Hell” difficulty)."
            ]
        },
        {
            "heading": "Combat & Weapon Mastery",
            "body": [
                "The combat milestones: severing 50 and 100 limbs, 20 flame kills, the \"Surrounded\" no-detection 14-assassination run, activating Counter 50 and 100 times, deflecting 20 bullets with Defend, 80 and 150 skill kills, the per-weapon Silver/Gold kill counts (assault rifle, shotgun, handgun, sniper rifle), and five missile vehicle kills in the car chase.",
                "The achievements here: Battle-hardened (Sever 50 enemy limbs using weapons or skills); Matchless Warrior (Sever 100 enemy limbs using weapons or skills); The Heat is On (Defeat 20 enemies using flame-type weapons or skills); None Shall Survive (Assassinate 14 people without being spotted by the enemy in the “Surrounded” infiltration mission); Extreme Skills (Activate “Counter” 50 times); Invulnerable (Activate “Counter” 100 times); Eagle-eye (Use “Defend” to deflect 20 enemy bullets); Peerless Warrior (Defeat 80 enemies using any skill); Herculean Strength (Defeat 150 enemies using any skill); AR Silver (Defeat 80 enemies using your assault rifle); AR Gold (Defeat 150 enemies using your assault rifle); SG Silver (Defeat 80 enemies using your shotgun); SG Gold (Defeat 150 enemies using your shotgun); HG Silver (Defeat 50 enemies using your handgun); HG Gold (Defeat 100 enemies using your handgun); SR Silver (Defeat 50 enemies using your sniper rifle); SR Gold (Defeat 100 enemies using your sniper rifle); Bullseye (Destroy 5 enemy vehicles with missiles during the car chase)."
            ]
        },
        {
            "heading": "Collectibles & Skills",
            "body": [
                "Acquiring 20, 50 and 100 Reliquaries/Relics, and unlocking the Lv.3 versions of the Blade Slash Whirlwind and Rocket Punch skills.",
                "The achievements here: Get Rich (Acquire 20 “Reliquaries”); Get Richer (Acquire 50 “Reliquaries”); Get Richest (Acquire 100 “Relics”); Auto-Tracking (Unlock “Blade Slash Whirlwind: Lv.3”); Flames in the Sky (Unlock “Rocket Punch: Lv.3”)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the game once on normal difficulty, exploring for Reliquaries and Relics and unlocking the Lv.3 skills as you gather enough currency.",
                "2. On that first run, main one weapon (the sword or assault rifle) toward its Gold kill count, and do the \"Surrounded\" no-detection stealth run and the car-chase missile kills.",
                "3. Play a second run on \"Revenge\" difficulty, maining a different weapon and topping up the Counter, Defend and limb-sever counts.",
                "4. Play a third run on \"Hell\" difficulty, maining the last weapon you need and cleaning up any remaining collectibles.",
                "5. Mop up any leftover kill-count or boss achievements with targeted chapter replays.",
                "Tip: the Counter feats (50 and 100 activations) are easiest to farm on melee-heavy enemy groups - stand your ground and parry rather than dodging, since only a successful Counter counts, and \"Hell\" difficulty's aggressive enemies actually make this faster."
            ]
        }
    ]
};
