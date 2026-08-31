// DOOM + DOOM II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/doom-plus-doom-ii.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "doom-plus-doom-ii-achievement-guide",
    "category": "game",
    "gameSlug": "doom-plus-doom-ii",
    "icon": "😈",
    "title": "DOOM + DOOM II Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in DOOM + DOOM II - none are hidden. Covers the per-weapon and per-level combat feats and the campaign completions across DOOM, DOOM II and every bundled episode and add-on.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DOOM + DOOM II (the 2024 re-release) has 33 Steam achievements and none of them are hidden. Twenty-five are combat and level feats: per-weapon kills (25 Fist kills in a level, 100 Chainsaw kills, a Pistol Cyberdemon kill, Super Shotgun and Plasma multi-kills, a BFG single-kill, the Incinerator and Calamity Blade counts from the new episode), and per-level goals (finish with 200% armour and health, a no-damage 100%-kills level on Ultra-Violence, a Nightmare level, 100% items, all secrets, and the 8-levels-under-par no-death run). The other eight are campaign completions - DOOM, Sigil, DOOM II, No Rest for the Living, Master Levels, TNT: Evilution, The Plutonia Experiment and the new Legacy of Rust.",
                "Nothing is missable - every level and episode is replayable from the menu and every feat can be set up on any map.",
                "Tip: knock out the campaign completions on any difficulty first (they only need you to reach the end), then do the fiddly per-weapon and no-damage feats on a short, familiar level with a save-and-retry approach."
            ]
        },
        {
            "heading": "Combat & Level Feats",
            "body": [
                "The per-weapon kills (Fists, Chainsaw, Pistol, Shotgun, Super Shotgun, Chaingun, Rocket Launcher, Plasma, BFG, Incinerator, Calamity Blade), the barrel, door-crush, friendly-fire, berserk and every-enemy feats, and the per-level goals - 200% armour/health, 100% items, a secret area and level, a no-damage 100%-kills level, a full 100% level, a Nightmare level, and the 8-levels-under-par no-death run.",
                "The achievements here: Guns Are For Wusses (Get 25 kills with your Fists in a single level.); Until It Is Done (Get 100 Chainsaw kills.); Shoot It Until It Dies (Finish off a Cyberdemon with the Pistol.); Groovy (Get 3 multi-kills with the Shotgun.); Skeet Shooting (Kill 4 enemies in 1 shot with the Super Shotgun.); Heavenly Joy (Shoot 200 bullets consecutively with the Chaingun.); Bowling for Gibs (Gib three or more enemies with a single rocket explosion.); Cookin' With Plasma (Kill 5 enemies in 5 seconds with the Plasma Rifle.); Overkill (Kill only a single enemy with a BFG9000 blast.); Timing Is Everything (Kill 2 enemies with a single barrel explosion.); Doormat (Crush a corpse in a door.); Overprepared (Finish a level with 200% armor and 200% health.); Indiscriminate Headhunter (Kill one of every enemy.); Not So Friendly Fire (Cause an enemy to kill another enemy.); More Like a Dream (Complete a level on Nightmare difficulty.); Hoarder (Finish a level with 100% items picked up.); The Only Thing They Fear Is You (Complete any monster-filled level with 100% kills without taking any damage on Ultra-Violence or higher.); An Important Looking Door (Find a secret area.); Alternate Dimension (Find a secret level.); Clean Slate (Kill all monsters in any monster-filled level on 'Hurt me plenty' or higher.); Burning Out of Control (Complete any monster-filled level with 100% kills, items, and secrets.); A Man and a Half (Get 20 kills using the berserk powerup in a single level.); Untouchable (Complete 8 different levels sequentially under par time without dying on Ultra-Violence or higher.); Kill It With Fire (Immolate a total of 30 arachnoid enemies with the Incinerator.); Screen Wipe (Obliterate 50 enemies with a single shot of the Calamity Blade.)."
            ]
        },
        {
            "heading": "Campaign Completions",
            "body": [
                "Reaching the end of DOOM, Sigil, DOOM II, No Rest for the Living, the Master Levels, TNT: Evilution, The Plutonia Experiment and Legacy of Rust.",
                "The achievements here: DOOM (Reach the end of 'DOOM'.); Sigil (Reach the end of 'Sigil'.); DOOM II (Reach the end of 'DOOM II'.); No Rest for the Living (Reach the end of 'No Rest for the Living'.); Master Levels (Reach the end of 'Master Levels for DOOM II'.); Evilution (Reach the end of 'TNT: Evilution'.); Plutonia (Reach the end of 'The Plutonia Experiment'.); Legacy of Rust (Reach the end of 'Legacy of Rust'.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through DOOM and DOOM II on any difficulty for those two completions.",
                "2. Play the bundled episodes and add-ons - Sigil, No Rest for the Living, Master Levels, TNT, Plutonia, Legacy of Rust - to the end.",
                "3. Do the per-weapon feats on maps that suit them (a crowded early level for multi-kills, a Cyberdemon map for the Pistol kill).",
                "4. Do a clean run of a short level for the 200% armour/health, 100% items and no-damage 100%-kills achievements.",
                "5. Finish with the 8-levels-under-par no-death run on Ultra-Violence.",
                "Tip: quicksave liberally - the no-damage and under-par achievements are trivial with save-scumming on a level you know well."
            ]
        }
    ]
};
