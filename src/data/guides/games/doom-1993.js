// DOOM + DOOM II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/doom-1993.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid 2280
//   via ISteamUserStats/GetSchemaForGame (fetched through this app's own
//   backend/services/steamApi.js). This is the modern DOOM + DOOM II
//   re-release (KEX engine), not the original 1993 store listing. None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - Sections group by what each achievement needs: per-weapon feats,
//   combat and environment, level-mastery and difficulty challenges,
//   and the eight bundled campaign completions.
export const GUIDE = {
    "slug": "doom-1993-achievement-guide",
    "category": "game",
    "gameSlug": "doom-1993",
    "icon": "💀",
    "title": "DOOM + DOOM II Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in the DOOM + DOOM II re-release - none are hidden. The per-weapon feats, the combat and environment achievements, the level-mastery and difficulty challenges, and the campaign completions (DOOM, DOOM II, Sigil, No Rest for the Living, Master Levels, TNT: Evilution, The Plutonia Experiment, Legacy of Rust).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DOOM + DOOM II (the modern re-release, appid 2280) has 33 Steam achievements and none are hidden. Most are one-off weapon or combat feats you can do on any level; the rest are level-mastery challenges and one completion achievement per bundled campaign.",
                "Nothing is missable - every level is selectable from the menu and the feats can be attempted anywhere - and the game ships with mid-mission checkpoints and rewind (though the hardest achievements ask for no-damage or no-death runs where those do not apply).",
                "Tip: knock out the weapon and combat feats on an easy, enemy-dense early level of DOOM II (its levels have big open fights ideal for multi-kills), then do the difficulty and no-damage challenges on short DOOM episode-1 levels you can learn quickly."
            ]
        },
        {
            "heading": "Weapon Feats",
            "body": [
                "One achievement per weapon: Fists, Chainsaw, Pistol (on a Cyberdemon), Shotgun multi-kills, Super Shotgun, Chaingun, Rocket Launcher gib, Plasma Rifle, BFG9000, and the Legacy of Rust weapons (Incinerator, Calamity Blade).",
                "The achievements here: Guns Are For Wusses (Get 25 kills with your Fists in a single level.); Until It Is Done (Get 100 Chainsaw kills.); Shoot It Until It Dies (Finish off a Cyberdemon with the Pistol.); Groovy (Get 3 multi-kills with the Shotgun.); Skeet Shooting (Kill 4 enemies in 1 shot with the Super Shotgun.); Heavenly Joy (Shoot 200 bullets consecutively with the Chaingun.); Bowling for Gibs (Gib three or more enemies with a single rocket explosion.); Cookin' With Plasma (Kill 5 enemies in 5 seconds with the Plasma Rifle.); Overkill (Kill only a single enemy with a BFG9000 blast.); Kill It With Fire (Immolate a total of 30 arachnoid enemies with the Incinerator.); Screen Wipe (Obliterate 50 enemies with a single shot of the Calamity Blade.)."
            ]
        },
        {
            "heading": "Combat & Environment",
            "body": [
                "The situational feats: a barrel double-kill, crushing a corpse in a door, finishing a level over-prepared (200% armour and health), killing one of every enemy type, and causing enemy infighting.",
                "The achievements here: Timing Is Everything (Kill 2 enemies with a single barrel explosion.); Doormat (Crush a corpse in a door.); Indiscriminate Headhunter (Kill one of every enemy.); Not So Friendly Fire (Cause an enemy to kill another enemy.); A Man and a Half (Get 20 kills using the berserk powerup in a single level.)."
            ]
        },
        {
            "heading": "Level Mastery & Difficulty",
            "body": [
                "The level challenges: 100% items, 100% kills with no damage taken, a full 100% (kills, items, secrets) clear, finding a secret area and a secret level, a Nightmare-difficulty level, a berserk-fist rampage, and the 8-levels-sequentially-under-par-without-dying run.",
                "The achievements here: Overprepared (Finish a level with 200% armor and 200% health.); More Like a Dream (Complete a level on Nightmare difficulty.); Hoarder (Finish a level with 100% items picked up.); The Only Thing They Fear Is You (Complete any monster-filled level with 100% kills without taking any damage on Ultra-Violence or higher.); An Important Looking Door (Find a secret area.); Alternate Dimension (Find a secret level.); Clean Slate (Kill all monsters in any monster-filled level on 'Hurt me plenty' or higher.); Burning Out of Control (Complete any monster-filled level with 100% kills, items, and secrets.); Untouchable (Complete 8 different levels sequentially under par time without dying on Ultra-Violence or higher.)."
            ]
        },
        {
            "heading": "Campaigns",
            "body": [
                "One completion achievement for each bundled campaign: DOOM, DOOM II, Sigil, No Rest for the Living, Master Levels for DOOM II, TNT: Evilution, The Plutonia Experiment, and Legacy of Rust.",
                "The achievements here: DOOM (Reach the end of 'DOOM'.); Sigil (Reach the end of 'Sigil'.); DOOM II (Reach the end of 'DOOM II'.); No Rest for the Living (Reach the end of 'No Rest for the Living'.); Master Levels (Reach the end of 'Master Levels for DOOM II'.); Evilution (Reach the end of 'TNT: Evilution'.); Plutonia (Reach the end of 'The Plutonia Experiment'.); Legacy of Rust (Reach the end of 'Legacy of Rust'.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through DOOM and DOOM II on Hurt Me Plenty for those two completion achievements, grabbing the weapon feats and the Cyberdemon-with-Pistol and BFG achievements on the way.",
                "2. Do the combat/environment feats (barrel kill, door crush, infighting, over-prepared) on any convenient level.",
                "3. Do the level-mastery challenges: 100% items and a full 100% clear on an easy level, a Nightmare level, and The Only Thing They Fear Is You (no-damage 100% kills on UV).",
                "4. Do Untouchable (8 levels sequentially under par, no deaths, UV) on a run of short DOOM episode-1 levels you have memorised.",
                "5. Play the remaining campaigns to credits: Sigil, No Rest for the Living, Master Levels, TNT: Evilution, The Plutonia Experiment and Legacy of Rust.",
                "Tip: The Only Thing They Fear Is You and Untouchable are the hard ones - pick the shortest, most familiar levels that still count as \"monster-filled\", and lower nothing except your own risk by playing slowly and using cover."
            ]
        }
    ]
};
