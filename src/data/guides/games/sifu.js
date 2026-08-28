// Sifu's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sifu.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2138710 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 43 of 61 ship a real,
//   official Steam description, quoted directly below.
// - The 18 hidden achievements (the prologue, the five Vengeance boss
//   kills, the five Wude talismans, Path of the Prospect, and six Arena
//   achievements) ship no Steam description. Their unlock conditions
//   here are curatorial, cross-checked against Steam Community
//   achievement guides. The five Vengeance achievements are described
//   only as "defeat the boss of level X" and the Wude ones as "spare
//   that boss" - the story stakes around each fight are not spoiled,
//   per this catalog's convention.
// - The grouping (story and bosses, the Wude sparing path, the
//   detective boards, combat/score feats, the per-level custom
//   challenges, then the Arena) follows the achievements' own apiname
//   prefixes.
export const GUIDE = {

    slug: "sifu-achievement-guide",
    category: "game",
    gameSlug: "sifu",
    icon: "🥋",
    title: "Sifu Achievement Guide",
    summary: "A practical guide to all 61 Steam achievements in Sifu - the five levels and their bosses, the Wude sparing path, the detective boards, the combat and score feats, and the Arena challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Sifu has 61 Steam achievements, 18 of them hidden. The campaign is five levels long, but the death-and-age mechanic (every death ages your character) means most of the list comes from replaying levels with better play, not from a single run.",
                "Nothing is missable in the permanent sense - every level, boss, detective board, and Arena challenge stays available - but two achievements (No Squint Hint's equivalents here, and the low-age clears) effectively require a clean, well-practised run.",
                "Tip: learn the game on the campaign, but grind score and skill in the Arena. Arena challenges are short, restartable, and feed a large block of achievements, and the practice carries straight back into the low-age campaign clears."
            ]
        },

        {
            heading: "Story & Bosses",
            body: [
                "The Old Grandmaster unlocks for completing the prologue. Each level's boss then has a hidden achievement: The Assault (Fajar, the Squats), The Hateful Pole Fighter (Sean, the Club), A Lady's Blood in the Snow (Kuroki, the Museum), Lady Wing Chun (Jinfeng, the Tower), and Furious Fists (Yang, the final boss at the Sanctuary).",
                "Age-based clears: Scareless (beat the game aged 50 or under), Prodigal Child (aged 25 or under), and Old Child (reach your oldest appearance). Kill Nil rewards beating any boss without dying once."
            ]
        },

        {
            heading: "The Wude Path",
            body: [
                "Each boss can be spared instead of killed, which grants a Wuxing talisman: Muk Yan Master (Wood, first boss), Tiger on Fire (Fire, second), Source of Flying Daggers (Water, third), and Iron Money (Metal, fourth).",
                "Legendary Talismans of Wuxing requires obtaining the Earth talisman and attaining Wude by sparing every boss in a single progression - the game's alternate path through the story.",
                "Tip: sparing a boss requires beating them once to drain their health, backing off instead of finishing, then beating their second phase the same way. Practise each boss as a normal kill first so you know the fight before attempting the spare."
            ]
        },

        {
            heading: "Detective Boards",
            body: [
                "Each level has a detective board that you fill in by finding clues and making the right connections across multiple visits: Detective Story (the Squats), Drunken Fighter (the Club), Martial Artist (the Museum), Knowledge Greed (the Tower), and Healing Memory (the Sanctuary). Completing all five also opens up the shortcuts that make the low-age clears realistic."
            ]
        },

        {
            heading: "Combat & Score Feats",
            body: [
                "Score: I know Kung-Fu (level score of 10,000) and Ferocity, speed, strength, accuracy (20,000).",
                "Skills and shrines: Life is your teacher (unlock your first skill), State of constant learning (permanently unlock a skill), and Qi Gong: Mind, Qi Gong: Breath, and Qi Gong: Essence (receive the highest XP-, score-, and age-based shrine reward for the first time).",
                "Technique coverage: The 36th Chamber of Kung-Fu (perform every takedown type), Master of the Phoenix Eye Fist (use every Focus Attack), Sword Stained With Blood (land a blade one-shot), Lightning Hands (3 takedowns within 12 seconds), and Kung-Fu Tussle (hit 3 enemies in one strike).",
                "Style feats: Dance of the Praying Mantis (throw enemies around), Street Fighting (use the environment as a weapon), Stuntmaster (use the environment to control the fight), and Come Snap With Me (try the Photo Mode)."
            ]
        },

        {
            heading: "Per-Level Custom Challenges",
            body: [
                "One specific challenge per level: Rumble in the Hangar (in the Squats, clear the hangar within 1:20 of being detected by the main group), The Pit Protector (in the Club's pit, beat the Juggernaut before any other enemy), Be like water my friend (in the Museum, throw an enemy into the fountain from a higher floor), Take damage to save time (in the Tower's caves, drop from a high point to descend faster), and Warriors from the Mountain (in the Sanctuary, throw an enemy into the mountains)."
            ]
        },

        {
            heading: "The Arena",
            body: [
                "The Arena is the free challenge mode. Progress achievements: Project Arena (unlock an arena pack), Diligence as a goal (3 stamps in any challenge), Bloody Sport (25 different challenges), Martial Hub (45 different challenges), Skill and an even stronger will (240 stamps total), Crouching Tiger and Hidden Dragon (clear all tiger and all dragon challenges), Fight the way you practice (clear one with Custom Mode on), and A Bit Of Everything, Simultaneously (attempt one with the Modifiers Randomizer on).",
                "Specific challenges: Master of the Flying Assassins (clear a Heliport challenge by throwing every enemy out), Here Cometh the Iceman (finish the target with a snowball in \"Cyclone\"), Fighter in the Pond (throw the Disciple in the lake in \"Bellowing Mountains\"), Bonus Stage (destroy the parked car in the Car Club arena), and Beatmaker (roll across the mixing equipment in the \"Showtime!\" arena).",
                "Gold-stamp achievements: Deadly Venom (a Manhunt challenge), Secure, Protect, Leave (a Capture challenge), The best strikes are the ones we avoid (a Survival challenge), and A Touch of Acumen (a Performance challenge). Path of the Prospect unlocks the special Calbot move."
            ]
        },

        {
            heading: "Completion",
            body: [
                "Fist of the Immortal is the catch-all achievement for unlocking every other achievement in the game."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the campaign through once for The Old Grandmaster and the five Vengeance boss kills (The Assault, The Hateful Pole Fighter, A Lady's Blood in the Snow, Lady Wing Chun, Furious Fists), picking up the easy combat and style feats (Life is your teacher, State of constant learning, Dance of the Praying Mantis, Street Fighting, Stuntmaster, Come Snap With Me) as you go.",
                "Fill in all five detective boards (Detective Story, Drunken Fighter, Martial Artist, Knowledge Greed, Healing Memory) across repeated visits, then use the shortcuts to practise clean runs for Scareless and Prodigal Child, plus Kill Nil and Old Child.",
                "Do a full sparing progression for the Wude talismans (Muk Yan Master, Tiger on Fire, Source of Flying Daggers, Iron Money, Legendary Talismans of Wuxing) and knock out the per-level custom challenges (Rumble in the Hangar, The Pit Protector, Be like water my friend, Take damage to save time, Warriors from the Mountain).",
                "Grind the Arena for the score and technique feats (I know Kung-Fu, Ferocity..., The 36th Chamber of Kung-Fu, Master of the Phoenix Eye Fist, Lightning Hands, Kung-Fu Tussle, Sword Stained With Blood, the three Qi Gong shrines) and work through its own list (Project Arena, Diligence as a goal, Bloody Sport, Martial Hub, Crouching Tiger, Hidden Dragon, Skill and an even stronger will, Master of the Flying Assassins, Here Cometh the Iceman, Fighter in the Pond, Fight the way you practice, A Bit Of Everything Simultaneously, Bonus Stage, Beatmaker, Path of the Prospect, and the four gold stamps). Fist of the Immortal unlocks with the last of them."
            ]
        }

    ]

};
