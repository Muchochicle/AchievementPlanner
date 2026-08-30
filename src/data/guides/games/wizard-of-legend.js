// Wizard of Legend Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wizard-of-legend.json), whose 19 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   445980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wizard-of-legend-achievement-guide",
    "category": "game",
    "gameSlug": "wizard-of-legend",
    "icon": "🧙",
    "title": "Wizard of Legend Achievement Guide",
    "summary": "A practical guide to all 19 Steam achievements in Wizard of Legend - none are hidden. Covers the Chaos Trials' story bosses, combat-mastery feats, and collection and challenge-run milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wizard of Legend has 19 Steam achievements and none are hidden. The list covers completing the Tutorial and starting the Chaos Trials in co-op, defeating the four elemental bosses (Flame Empress Zeal, Earth Lord Atlas, Frost Queen Freiya, and final boss Master Sura), two combat-mastery feats (a 50-hit combo and a no-damage boss kill), and a run of collection and challenge-run milestones for Arcana, Relics, outfits, gems, and a speed clear.",
                "Nothing is missable - every boss can be re-fought on a future Chaos Trials run, and Arcana/Relic/outfit unlocks are permanent account progress. The genuine long pole is unlocking 99 Arcana and 99 Relics, since both need broad, repeated runs to unlock the game's full spell and relic pool rather than a single focused attempt.",
                "Tip: Gotta Go Fast (clear the Chaos Trials in 25 minutes) is much easier once you already have a strong, familiar Arcana and Relic loadout from earlier runs - attempt it after you have unlocked a good chunk of the spell pool rather than on your very first clear."
            ]
        },
        {
            "heading": "Story & Boss Fights",
            "body": [
                "Completing the Tutorial, entering the Chaos Trials in co-op, and defeating Flame Empress Zeal, Earth Lord Atlas, Frost Queen Freiya, and final boss Master Sura.",
                "The achievements here: Forward to the Past (Complete the Tutorial); Best Friends Forever (Enter the Chaos Trials in co-op mode); Feel the Burn (Defeat Flame Empress Zeal); Party like a Rock Star (Defeat Earth Lord Atlas); Breaking the Ice (Defeat Frost Queen Freiya); Wizard of Legend (Defeat Master Sura)."
            ]
        },
        {
            "heading": "Combat Mastery",
            "body": [
                "Landing a 50-hit combo on any boss, and defeating a boss without taking damage.",
                "The achievements here: ULTRAAAAA (Land a 50 hit combo on any boss); Flawless Victory (Defeat a boss without taking damage)."
            ]
        },
        {
            "heading": "Collection & Challenge Milestones",
            "body": [
                "Unlocking 50 and 99 Arcana, 50 and 99 Relics, 9 outfits, defeating Taffy 5 times, holding 999 chaos gems at once, destroying 99 paintings during the Chaos Trials, clearing the Chaos Trials in 25 minutes, holding 4 cursed relics, and unlocking 3 chaos Arcana.",
                "The achievements here: The Turn (Unlock 50 arcana); Heart of the Cards (Unlock 99 arcana); Indie Collector (Unlock 50 relics); All the Things! (Unlock 99 relics); I Make This Look Good (Unlock 9 outfits); Happy Birthday (Defeat Taffy 5 times); Truly Outrageous (Hold 999 chaos gems at one time); Iconoclast (Destroy 99 paintings during the Chaos Trials); Gotta Go Fast (Clear the Chaos Trials in 25 minutes); Danger is My Middle Name (Hold 4 cursed relics); Ordered Chaos (Unlock 3 chaos arcana)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the Tutorial, then enter the Chaos Trials in co-op mode for Best Friends Forever.",
                "2. Play through the Chaos Trials, defeating Flame Empress Zeal, Earth Lord Atlas, Frost Queen Freiya, and finally Master Sura.",
                "3. Work toward the combat-mastery achievements as your build improves: a 50-hit combo on any boss, and a boss kill without taking damage.",
                "4. Play a spread of runs to unlock 50 then 99 Arcana, 50 then 99 Relics, and 9 outfits, and defeat the Taffy piñata 5 times, hold 999 chaos gems, destroy 99 paintings, hold 4 cursed relics, and unlock 3 chaos Arcana.",
                "5. Once your loadout is strong and familiar, attempt a sub-25-minute Chaos Trials clear for Gotta Go Fast.",
                "Tip: Danger is My Middle Name (hold 4 cursed relics) and Truly Outrageous (hold 999 chaos gems) both reward deliberately risky, greedy runs - do not shy away from grabbing cursed relics or hoarding gems on a run you are not trying to optimize for a fast or clean clear."
            ]
        }
    ]
};
