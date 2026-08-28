// Resident Evil 2 (2019) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/resident-evil-2-remake.json), whose 44
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 883710 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). 28 of
//   44 ship a real, official Steam description, quoted verbatim below.
// - The 16 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against PowerPyx,
//   TrueAchievements/XboxAchievements and the Resident Evil Wiki, and
//   kept spoiler-light (they are almost all story markers, S ranks,
//   challenge runs and bonus-mode clears).
export const GUIDE = {
    "slug": "resident-evil-2-remake-achievement-guide",
    "category": "game",
    "gameSlug": "resident-evil-2-remake",
    "icon": "🧟",
    "title": "Resident Evil 2 (2019) Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in the Resident Evil 2 remake - the campaign-completion markers for Leon and Claire, the survival and combat feats, the collectible full-clears, the S-rank / no-item / speed challenge runs, and the bonus modes (The 4th Survivor, The Tofu Survivor, The Ghost Survivors). 16 achievements are hidden and covered in their sections with spoiler-light conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Resident Evil 2 remake has 44 Steam achievements, 16 of them hidden. A full completion needs both Leon's and Claire's campaigns, their \"2nd run\" scenarios, a Hardcore-mode clear of each, several restrictive challenge runs (no recovery items, no item box, an S rank), and the free bonus modes.",
                "Nothing is permanently missable across a save file - every campaign and mode can be replayed - but a few achievements are per-run (the timed boss kills, the S ranks, the no-item runs) so plan which you are going for before starting each playthrough.",
                "Tip: use the Assisted-difficulty 2nd runs to mop up the collectible and mechanic achievements (all safes, all Mr. Raccoons, all files, treasure hunts) with no pressure, then do a single dedicated Hardcore + no-recovery + Minimalist + S-rank run on Leon and again on Claire - one careful run can satisfy all four of those at once with a good route."
            ]
        },
        {
            "heading": "Story & Campaign Completion",
            "body": [
                "The unmissable campaign markers - reaching the R.P.D., the Goddess Statue puzzle, escaping the station, the Ada and Sherry sections, escaping the sewers, the true ending, and finishing each character's story - plus Lore Explorer (all files) and Chasing Jill (read Jill's letter).",
                "The achievements here: Welcome to the City of the Dead (Story: reach the R.P.D. police station.); Path to the Goddess (Story: solve the Goddess Statue puzzle in the Main Hall.); Never-Ending Rain (Story: escape the police station.); Hack Complete (Story: complete Ada's playable section (Leon's campaign).); Hide and Seek (Story: complete Sherry's playable section (Claire's campaign).); A Great Need for a Shower (Story: escape the sewers.); A Hero Emerges (Complete Leon's story.); A Heroine Emerges (Complete Claire's story.); Broken Umbrella (See the true ending by finishing a \"2nd run\" scenario with either character.); Lore Explorer (Read all of the files.); Chasing Jill (Read a letter left behind by Jill.)."
            ]
        },
        {
            "heading": "Survival Mechanics & Combat Feats",
            "body": [
                "The teaching-you-to-play block: combining items, expanding inventory, customizing a weapon, knife and sub-weapon kills, boarding windows, breaking a Mr. Raccoon, opening safes and dial locks, the fed-grenade shot, multi-kills, shooting airborne enemies, paralyzing a licker's hearing, knocking off Tyrant's hat, and the crane boss feat.",
                "The achievements here: The Basics of Survival (Combine two items together.); Hip to Add Squares (Increase your inventory slots.); Customizer (Customize a weapon.); Don't Need No Stinkin' Gun (Defeat an enemy with a knife.); Eat This! (Counterattack with a sub-weapon.); That'll Hold 'Em (Use Wooden Boards to board up a window.); Vermin Extermination (Destroy a Mr. Raccoon.); A Vault-like Mind (Open a portable safe.); First Break-In (Open a dial safe.); Bon Appétit (Shoot the grenade you fed to an enemy.); Zombie Roundup (Kill 3 enemies at once with a sub-weapon.); Like Skeet Shooting (Shoot a zombie dog or a licker out of the air.); Keep Their Heads Ringin' (Paralyze a licker's sense of hearing.); Hats Off! (Shoot Tyrant's hat off his head.); Gotcha! (Defeat the second boss encounter against G by hitting it with the shipping-yard crane the first time it is in reach.); A Waist of Space (Expand inventory slots to max.)."
            ]
        },
        {
            "heading": "Collectibles & Full Clears",
            "body": [
                "The 100% collectible achievements: using photo hints to find hidden items, destroying every Mr. Raccoon, and opening every safe and lock in the game.",
                "The achievements here: Treasure Hunter (Using the photo hints, find 2 hidden items.); Complete Vermin Extermination (Destroy all Mr. Raccoons.); Master of Unlocking (Open all of the safes and locks in the game.)."
            ]
        },
        {
            "heading": "Challenge Runs, S Ranks & Speed",
            "body": [
                "The restrictive runs: Ada with no handgun, Sherry uncaught, the timed final-boss kills, S ranks on both stories, Hardcore clears of both, Frugalist (no recovery items), Minimalist (no item box) and A Small Carbon Footprint (14,000 steps or fewer).",
                "The achievements here: One Slick Super-spy (Complete Ada's section without firing her handgun - use only the EMF Visualizer.); Young Escapee (Get Sherry through her section without being caught by Chief Irons.); With Time to Spare (As Claire, defeat the final boss with 4 or more minutes left on the self-destruct timer.); In the Blink of an Eye (As Leon, defeat the final boss with 5 or more minutes left on the self-destruct timer.); Leon \"S.\" Kennedy (Finish Leon's story with an S rank.); Sizzling Scarlet Hero (Finish Claire's story with an S rank.); Hardcore Rookie (Complete Leon's story on \"Hardcore\" game mode.); Hardcore College Student (Complete Claire's story on \"Hardcore\" game mode.); Frugalist (Complete the game without using a recovery item.); Minimalist (Clear the game without opening the item box.); A Small Carbon Footprint (Take 14000 steps or fewer in one playthrough.)."
            ]
        },
        {
            "heading": "Bonus Modes",
            "body": [
                "The free extra modes: The 4th Survivor (as HUNK), The Tofu Survivor, and destroying every Mr. Raccoon in The Ghost Survivors.",
                "The achievements here: Grim Reaper (Complete the bonus mode \"The 4th Survivor\".); Hell of a Sheriff (Complete the bonus mode \"The Tofu Survivor\".); Got 'Em (Destroy all Mr. Raccoons hidden in The Ghost Survivors mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Leon A and Claire B (or Claire A and Leon B) normally - this gives A Hero Emerges, A Heroine Emerges, the story markers, the true ending (Broken Umbrella) and unlocks The 4th Survivor.",
                "2. On relaxed 2nd runs, sweep Master of Unlocking, Complete Vermin Extermination, Lore Explorer, Treasure Hunter, Chasing Jill and the remaining combat feats.",
                "3. Do one focused Hardcore run per character that is also no-recovery, no-item-box and routed for an S rank - covering Hardcore Rookie/College Student, Frugalist, Minimalist and Leon \"S.\" Kennedy / Sizzling Scarlet Hero together, plus A Small Carbon Footprint if you keep it tight.",
                "4. Do the timed boss kills (In the Blink of an Eye, With Time to Spare) and the Ada/Sherry section challenges on any convenient run.",
                "5. Finish with the bonus modes: Grim Reaper (The 4th Survivor), Hell of a Sheriff (The Tofu Survivor) and Got 'Em (The Ghost Survivors raccoons).",
                "Tip: the S-rank time limits are generous if you do not backtrack - learn one efficient route per character from a video, then your \"challenge\" run is really just a normal run with recovery items and the item box left alone."
            ]
        }
    ]
};
