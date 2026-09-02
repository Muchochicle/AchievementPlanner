// Tales of ARISE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tales-of-arise.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   740130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 29 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tales-of-arise-achievement-guide",
    "category": "game",
    "gameSlug": "tales-of-arise",
    "icon": "🔥",
    "title": "Tales of ARISE Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Tales of ARISE (29 hidden). Most hidden achievements are spoiler-free markers: 8 main-story beats, 6 party-bond sub-quest lines, 5 Lord boss fights, 2 post-game clears, 5 Beyond the Dawn DLC story markers, plus the all-sub-quests and owl-hunt achievements. Everything else - crafting, combat, exploration and DLC systems - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tales of ARISE has 58 Steam achievements, 29 of them hidden. Alphen and Shionne lead a rebellion of the enslaved people of Dahna against the five Renan Lords who rule its realms. The visible achievements cover the crafting and life systems (fishing, cooking, forging 100 weapons, crafting 30 accessories, 400 title skills), combat feats (100-hit combo, 10,000 damage, 100 counter-edges), spending 400,000 gald, level 100, the monster and artifact compendiums, the ranch, 300 skits, the Battle Arena, and the Beyond the Dawn DLC's crafting and sub-quest goals.",
                "Of the 29 hidden achievements, most are spoiler-free markers: eight main-story beats, the six party-member bond sub-quest lines (Shionne, Rinwell, Law, Kisara, Dohalim, plus the owl hunt), the five Lord boss fights, two post-game clears (the bonus dungeon and Battle Rush), and the five Beyond the Dawn DLC story markers, plus 'clear every sub-quest' and two DLC one-offs.",
                "The catalog marks it difficulty 3 and two playthroughs - the DLC is effectively a second campaign, and level 100 plus the post-game gauntlets benefit from New Game +."
            ]
        },
        {
            "heading": "Story",
            "body": [
                "The eight hidden main-story markers, described spoiler-free.",
                "The achievements here: Emissary of Liberation (Story progress marker - reached at a specific point in the main story, described here spoiler-free.); Vanquishers of Darkness (Story progress marker - reached at a specific point in the main story, described here spoiler-free.); Comrades in Freedom (Story progress marker - reached at a specific point in the main story, described here spoiler-free.); Retired Avenger (Story progress marker - reached at a specific point in the main story, described here spoiler-free.); Liberator of Dahna (Story progress marker - reached at a specific point in the main story, described here spoiler-free.); Invasion Averted (Story progress marker - reached late in the main story, described here spoiler-free.); The Truth (Story progress marker - reached near the end of the main story, described here spoiler-free.); Destined Liberator (Completed the main story, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Bonds & Sub-Quests",
            "body": [
                "Clearing every sub-quest, the six party-bond sub-quest lines (Shionne, Rinwell, Law, Kisara, Dohalim), the first and 70th sub-quest, the owl hunt, and viewing 300 skits.",
                "The achievements here: Wall Smasher (Clear every sub-quest in the base game.); Intertwining Hearts (Forge a strong bond with Shionne by completing her character sub-quests.); An Honest Mage (Forge a strong bond with Rinwell by completing her character sub-quests.); Role Model (Forge a strong bond with Law by completing his character sub-quests.); A Modest Dream (Forge a strong bond with Kisara by completing her character sub-quests.); Drink 'til You Drop (Forge a strong bond with Dohalim by completing his character sub-quests.); Owl Homecoming (Find and report all of the hidden owls.); Rebellious Spark (Clear your first sub-quest in the Tales of Arise™ main game story.); Problem Solver (Clear 70 sub-quests in the Tales of Arise™ main game story.); Owl Spotter (Find and report 13 owls. The lonely forest is beginning to show signs of feathered life.); Owl Scouter (Find and report 32 owls. The forest is now starting to teem with hordes of hooting owls galore.); Ceaseless Chatterbox (View 300 skits in the Tales of Arise™ main game story.)."
            ]
        },
        {
            "heading": "Craft, Combat & Progression",
            "body": [
                "Fishing, cooking, forging weapons, crafting accessories, title skills, the combat feats (combo, damage, counter-edges), spending gald, level 100, the monster compendium, and the artifact and ranch systems.",
                "The achievements here: Skilled Angler (Catch your first fish in the Tales of Arise™ main game story.); Godly Angler (Catch every fish type and show the Notes to the Expert in the Tales of Arise™ main game story.); Speedy Chef (Cook your first meal in the Tales of Arise™ main game story.); Globetrotting Foodie (Acquire 30 kinds of non-DLC recipes in the Tales of Arise™ main game story.); Arms Stockpiler (Forge 100 types of weapons in the Tales of Arise™ main game story.); Jeweler (Craft 30 accessories in the Tales of Arise™ main game story.); What's in a Name? (Learn your first non-DLC title skill in the Tales of Arise™ main game story.); Myriad Monikers (Learn 400 non-DLC title skills in the Tales of Arise™ main game story.); Hundred-Hit Smackdown (Get over 100 hits in a combo in the Tales of Arise™ main game story.); One-Hit Wonder (Deal 10000 or more damage in one hit in the Tales of Arise™ main game story.); Diligent Counterattacker (Perform 100 Counter Edges in the Tales of Arise™ main game story.); High Roller (Spend 400000 gald in the Tales of Arise™ main game story.); Peak Strength (Reach level 100 in the Tales of Arise™ main game story.); Encyclopedia Zeuglica (Encounter 120 types of non-DLC enemies in the Tales of Arise™ main game story.); Dilettante (Obtain your first non-DLC artifact in the Tales of Arise™ main game story.); Curious Hobbyist (Obtain 20 types of non-DLC artifacts in the Tales of Arise™ main game story.); Novice Rancher (Collect your first harvest on the ranch in the Tales of Arise™ main game story.); Veteran Rancher (Collect 50 harvests on the ranch in the Tales of Arise™ main game story.)."
            ]
        },
        {
            "heading": "Lords & Endgame",
            "body": [
                "The five Lord boss fights, slaying 20 gigants, the Battle Arena, and the two post-game clears (bonus dungeon, Battle Rush).",
                "The achievements here: Unrelenting Blaze (Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free.); Night Blossom (Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free.); Quaking Continent (Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free.); Billowing Cyclone (Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free.); Raging Current (Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free.); Big Game Hunter (Slay 20 gigants in the Tales of Arise™ main game story.); Otherworldly Survivor (Clear the post-game bonus dungeon.); Putting the Past in its Place (Clear the post-game Battle Rush boss gauntlet.); Elite Vanguard (Clear Ultimate level of group training ground fights in the Tales of Arise™ main game story.)."
            ]
        },
        {
            "heading": "Beyond the Dawn DLC",
            "body": [
                "The DLC's five story markers, its crafting and sub-quest goals, Nazamil's picture memories, the summit dive, and its Battle Arena.",
                "The achievements here: The First Seal (Beyond the Dawn DLC story marker - 'The First Seal', described here spoiler-free.); Resolution (Beyond the Dawn DLC story marker - 'Resolution', described here spoiler-free.); True Freedom (Beyond the Dawn DLC story marker - 'True Freedom', described here spoiler-free.); The Second Seal (Beyond the Dawn DLC story marker - 'The Second Seal', described here spoiler-free.); Departure (Beyond the Dawn DLC story marker - 'Departure', the DLC finale, described here spoiler-free.); Arms Master (Craft 6 weapon types using ryugola core fragments in the Tales of Arise™ additional story.); Unparalleled Problem Solver (Clear 40 sub-quests in the Tales of Arise™ additional story.); Individual Growth (Clear 12 character sub-quests in the Tales of Arise™ additional story.); Always on Her Mind (Beyond the Dawn DLC: collect all of Nazamil's picture memories.); Hero of the Summit (Beyond the Dawn DLC: take the leap from the mountain summit.); Elite Vanguard, Again (Clear Ultimate level of group training ground fights in the Tales of Arise™ additional story.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story; the eight markers and the five Lord fights unlock as you liberate each realm.",
                "2. Clear every sub-quest as it appears - this drives the six party-bond achievements and 'clear all sub-quests'; report owls whenever you spot them.",
                "3. Work the craft and life systems steadily (forge weapons, cook, learn titles) and let the combat feats accrue; push to level 100 and fill the monster and artifact compendiums.",
                "4. After the credits, clear the bonus dungeon, Battle Rush and the Battle Arena.",
                "5. Play Beyond the Dawn through for its five markers, then its sub-quest, crafting, picture-memory and summit-dive achievements.",
                "Tip: the sub-quest achievements are the backbone of the platinum - the six party bonds, 'clear all sub-quests', several titles and even story pacing all run through them, so never skip a sub-quest and use a location guide so none are left behind a since-locked area."
            ]
        }
    ]
};
