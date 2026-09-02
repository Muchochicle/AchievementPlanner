// Hell is Us Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hell-is-us.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1620730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary. Every non-hidden description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hell-is-us-achievement-guide",
    "category": "game",
    "gameSlug": "hell-is-us",
    "icon": "💀",
    "title": "Hell is Us Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Hell is Us (16 hidden). 16 of the 40 are hidden - 8 are directly decodable from their own apiname (research-category and vault achievements), and the other 8 are genuine secrets researched from PowerPyx and Gamer Guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hell is Us has 40 Steam achievements, 16 of them hidden. The visible track covers completing all 3 Acts, accomplishing every Good Deed, closing a Timeloop, resolving every Mystery, defeating every variant of the game's 4 Haze types (Rage, Ecstasy, Terror, Grief) and all 5 Hollow Walker variants, defeating 40 Hazes of each of 3 tiers, closing every Timeloop and defeating every remaining entity, upgrading every weapon type and a piece of Defensive Gear, acquiring every Drone Module, every Lymbic Glyph, and every Relic.",
                "8 of the hidden achievements are directly decodable from their own apiname - collecting every research item in each of 6 categories (Civil War, Hadea, Conspiracy, Order of the Eye, Lymbic Invasions, Vigil) plus every category combined, and equipping a full Grade 5/Grade 4 loadout. The other 8 are genuine secrets: unsealing a Vault of Forbidden Knowledge, visiting every location, conversing with every NPC, solving 25 item-placement puzzles, traversing the tunnel from the Lymbic Forge to the Eye of God, acquiring a means of transportation, ensuring every possible NPC ends up at Lake Cynon, and collecting and wearing every baseball cap.",
                "The catalog marks it difficulty 3 and missable:true - several of the secret achievements (getting every NPC to Lake Cynon, conversing with every NPC) depend on choices and timing that can be permanently missed within a single playthrough."
            ]
        },
        {
            "heading": "Story & Good Deeds",
            "body": [
                "Completing Acts 1 through 3, accomplishing a Good Deed and then all of them, closing a Timeloop, and resolving a Mystery and then all of them.",
                "The achievements here: So It Begins (Completed Act 1); Emotional Baggage (Complete Act 2); Redemption (Complete Act 3); Good Samaritan (Accomplish a Good Deed); Man of the People (Accomplish all Good Deeds); End the Suffering (Close a Timeloop); Amateur Detective (Resolve a Mystery); Super-Sleuth (Resolve all Mysteries)."
            ]
        },
        {
            "heading": "Combat: Hazes & Hollow Walkers",
            "body": [
                "Defeating all 3 variants of each Haze type (Rage, Ecstasy, Terror, Grief), all 5 Hollow Walker variants, 40 Hazes of each of 3 tiers, closing every Timeloop and defeating every remaining entity, upgrading one of each weapon type to Grade 5, imbuing a Defensive Gear to Grade 4, and the hidden To the Teeth (equip two Grade 5 weapons and two Grade 4 Defensive Gear at once).",
                "The achievements here: All the Rage (Defeat all 3 Haze of Rage variants); Buzz Killer (Defeat all 3 Haze of Ecstasy variants); Fear No Evil (Defeat all 3 Haze of Terror variants); Good Grief (Defeat all 3 Haze of Grief variants); Big Game Hunter (Defeat all 5 Hollow Walker variants); Rise and Phol (Defeat 40 Hazes of tier 1); Phol Guy (Defeat 40 Hazes of tier 2); The Harder They Phol (Defeat 40 Hazes of tier 3); Legend of the Phol (Close all Timeloops and defeat all remaining entities); Good Vibrations (Upgrade one of each Weapon type to Grade 5); Accessorizing (Imbue a Defensive Gear to Grade 4)."
            ]
        },
        {
            "heading": "Research & Vaults",
            "body": [
                "The 7 hidden research achievements for collecting every item in the Civil War, Hadea, Conspiracy, Order of the Eye, Lymbic Invasions and Vigil categories, then every category combined, plus the hidden Vault Raider for unsealing a Vault of Forbidden Knowledge.",
                "The achievements here: To the Teeth (Equip two Grade 5 Weapons and two Grade 4 Defensive Gear at once.); War Correspondent (Collect every Civil War research item.); Historian (Collect every Hadea research item.); Conspiracy Theorist (Collect every Conspiracy research item.); Gentleman Scholar (Collect every Order of the Eye research item.); Demonologist (Collect every Lymbic Invasions research item.); Sworn to Secrecy (Collect every Vigil research item.); Well-Read (Collect every research item across every category.); Vault Raider (Unseal a Vault of Forbidden Knowledge.)."
            ]
        },
        {
            "heading": "Exploration, Relics & Abilities",
            "body": [
                "Acquiring every Drone Module, at least one Lymbic Glyph of each Sphere and then all of them, and acquiring 10 Relics and then every Relic.",
                "The achievements here: Tech-Savvy (Acquire all Drone Modules); Emotional Damage (Acquire at least one Glyph of each Lymbic Sphere); Emotional Warfare (Acquire all Glyphs of each Lymbic Sphere); Curator (Acquire 10 Relics); Antiquarian (Acquire all Relics)."
            ]
        },
        {
            "heading": "Secrets",
            "body": [
                "The 7 remaining hidden secrets: visiting every location, conversing with every NPC, solving 25 item-placement puzzles, traversing the tunnel from the Lymbic Forge to the Eye of God, acquiring a means of transportation, ensuring every possible NPC ends up at Lake Cynon, and collecting and wearing every baseball cap.",
                "The achievements here: Well-Travelled (Visit every location.); Lend an Ear (Converse with every NPC.); Keymaster (Solve 25 puzzles that require placing the right item.); Long and (not so) Winding Road (Traverse the tunnel from the Lymbic Forge to the Eye of God.); It's Mine Now (Acquire a means of transportation.); Ever After (Ensure every possible NPC ends up at Lake Cynon.); Passion for Fashion (Acquire and wear every baseball cap.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the 3 Acts, accomplishing Good Deeds and resolving Mysteries as they come up - both are easy to miss if you rush past NPCs.",
                "2. Fight every Haze and Hollow Walker variant as you encounter them, and keep upgrading weapons and Defensive Gear toward Grade 5/4.",
                "3. Thoroughly explore each location for research items, Relics, Lymbic Glyphs, Drone Modules and baseball caps - most of the hidden achievements are exploration-complete rather than combat feats.",
                "4. Talk to every NPC you meet and pay attention to their fates - both 'Lend an Ear' and 'Ever After' depend on choices you make well before the story concludes.",
                "5. Find and unseal a Vault of Forbidden Knowledge, and traverse the Lymbic Forge-to-Eye-of-God tunnel, before finishing the game.",
                "Tip: since several secrets (talking to every NPC, getting them all to Lake Cynon) are tied to choices made early and can't be revisited later, keep a running checklist of named NPCs from your first hours rather than trying to backtrack near the ending."
            ]
        }
    ]
};
