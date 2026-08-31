// The Last of Us Part II Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-last-of-us-part-ii-remastered.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2531310 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-last-of-us-part-ii-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "the-last-of-us-part-ii-remastered",
    "icon": "🦋",
    "title": "The Last of Us Part II Remastered Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in The Last of Us Part II Remastered (3 hidden). Covers the story and completion achievements, the collectibles and secrets, and the No Return roguelike mode. Three of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Last of Us Part II Remastered has 45 Steam achievements and 3 are hidden. Nineteen are story and completion - finishing the story, learning every player upgrade, fully upgrading every weapon, and finding all artifacts, cards, coins, weapons, workbenches, training manuals and safes. Nine are collectibles and secrets, including the Strange Artifact and Engraved Ring, a Grounded clear, a Permadeath clear, and the three hidden minigame achievements. The last seventeen are the No Return roguelike mode - encounter feats, beating every boss, both faction challenge tracks, an S rank, and Daily Runs.",
                "The catalog marks it difficulty 4. The Grounded and Permadeath story runs and the No Return Daily Run on Grounded are the hard parts; the rest is exploration and grinding No Return.",
                "Tip: do a relaxed first playthrough for collectibles and 'Every Last One of Them', then a combined Grounded + Permadeath run, and treat No Return as a separate long-tail grind."
            ]
        },
        {
            "heading": "Story & Completion",
            "body": [
                "Completing the story, collecting all regular story achievements, learning all player upgrades (and all in one branch), fully upgrading all weapons, and finding every artifact, trading card, coin, workbench, training manual, weapon and safe - plus the incremental milestone achievements along the way.",
                "The achievements here: Every Last One of Them (Collect all the regular story achievements); What I Had to Do (Complete the story); Survival Expert (Learn all player upgrades); Arms Master (Fully upgrade all weapons); Archivist (Find all artifacts and journal entries); Master Set (Find all trading cards); Numismatist (Find all coins); Prepared For the Worst (Find all workbenches); Mechanist (Fully upgrade a weapon); Specialist (Learn all player upgrades in one branch); Safecracker (Unlock every safe); Sightseer (Visit every location in downtown Seattle); Journeyman (Find all training manuals); Survival Training (Learn 25 player upgrades); High Caliber (Find all weapons); In the Field (Find 12 workbenches); Tools of the Trade (Craft every item); Tinkerer (Upgrade a weapon); Apprentice (Learn a player upgrade)."
            ]
        },
        {
            "heading": "Collectibles & Secrets",
            "body": [
                "Finding 5 trading cards and 5 coins, the three hidden minigame achievements, the Strange Artifact and the Engraved Ring, a Grounded-difficulty story clear, and a story clear with any Permadeath setting.",
                "The achievements here: Starter Set (Find 5 trading cards); Mint Condition (Find 5 coins); Looks Good On You (Put a hat on your companion.); Sharpshooter (Win the marksmanship competition at the shooting range - nine bullets, no timer, land nine headshots for 90 points.); Put My Name Up (Score highly in the archery-target minigame by hitting 11 or more of the paper targets in the time limit.); Relic of the Sages (Find the Strange Artifact); So Great and Small (Find the Engraved Ring); Dig Two Graves (Complete the story on Grounded.); You Can't Stop This (Complete the story with any Permadeath setting)."
            ]
        },
        {
            "heading": "No Return Mode",
            "body": [
                "The No Return roguelike: weapon-variety and encounter feats, beating all bosses, completing both Ellie and Abby faction challenge tracks, an S rank, winning with every character, completing an encounter with each Mod, five gambits in one run, the Part I challenge track, the Bill and Marlene character feats, and winning a Daily Run (including on Grounded).",
                "The achievements here: Mixed Bag (Get kills with 5 different weapons in an Assault encounter in No Return); Become The Hunter (Kill 12 enemies in a Hunted encounter in No Return); Got Your Back (Win a round of Holdout without your ally falling below 70% health in No Return); Burglar (Open the safe in Capture without killing any enemies in No Return); Roll Call (Win a run with every character in No Return); Modded (Complete an encounter with each Mod in No Return); Risk Taker (Complete five gambits in one run of No Return); Good Riddance (Beat all bosses); Team Ellie (Complete all Ellie faction challenge tracks); Team Abby (Complete all Abby faction challenge tracks); True Strength (Get an S rank on an encounter); May Your Survival Be Long (Win a Daily Run of No Return); May Your Death Be Swift (Win a Daily Run of No Return on Grounded difficulty); This Make You All Nostalgic? (Complete the Part I challenge track in No Return); Biology Lesson (Kill a Bloater with the pump shotgun as Bill in No Return); Queen Firefly (Kill 15 enemies with Marlene's assault rifle in one encounter in No Return); I Would Do It All Over Again (Complete the story in chronological order)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story once on a comfortable difficulty, grabbing every artifact, card, coin, weapon, workbench, manual and safe (use a collectibles map).",
                "2. Do the Seattle-day minigames for 'Looks Good On You', 'Sharpshooter' and 'Put My Name Up', and find the Strange Artifact and Engraved Ring.",
                "3. Replay the story on Grounded with a Permadeath setting to clear 'Dig Two Graves' and 'You Can't Stop This' together.",
                "4. Do a chronological-order run for 'I Would Do It All Over Again'.",
                "5. Grind No Return: beat every boss, both faction tracks, an S rank, every Mod, and a Daily Run on Grounded.",
                "Tip: 'You Can't Stop This' only needs the lowest Permadeath setting (per chapter), so pair it with the Grounded run and back up your save before each risky encounter."
            ]
        }
    ]
};
