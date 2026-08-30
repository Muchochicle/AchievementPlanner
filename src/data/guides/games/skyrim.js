// The Elder Scrolls V: Skyrim Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/skyrim.json), whose 75 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   72850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "skyrim-achievement-guide",
    "category": "game",
    "gameSlug": "skyrim",
    "icon": "🐉",
    "title": "The Elder Scrolls V: Skyrim Achievement Guide",
    "summary": "A practical guide to all 75 Steam achievements in The Elder Scrolls V: Skyrim - none are hidden. Covers the main quest and the five faction questlines, the exploration, skill and character-progression feats, and the achievement sets added by the Dawnguard, Hearthfire and Dragonborn add-ons (all bundled into this Legendary-style build).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Elder Scrolls V: Skyrim (the original release, distinct from the Special Edition) has 75 Steam achievements and none of them are hidden. The base game's 50 cover the main quest (Unbound through Dragonslayer), joining and completing each of the five joinable factions (the Companions, the College of Winterhold, the Thieves Guild, the Dark Brotherhood, and a side in the Civil War), and a broad set of open-world feats - clear 50 dungeons, discover 100 locations, reach level 50, get a skill to 100, collect 15 Daedric Artifacts, learn 20 shouts, absorb 20 dragon souls, hold 100,000 gold. The other 25 come from the three add-ons: Dawnguard (the vampire/Dawnguard questline and its powers), Hearthfire (buying land and building houses), and Dragonborn (the Solstheim questline and its shouts and crafting).",
                "Nothing is permanently missable - factions can be joined at any point, and there are no mutually exclusive achievements (you can complete both the Imperial and Stormcloak sides across saves, but only one is needed). Skyrim's completion is long mostly because of the grind feats (50 dungeons, 100 locations, a level-100 skill) and because doing every faction questline is most of the game's content.",
                "Tip: this is one playthrough if you want it to be - a single character can be Harbinger of the Companions, Arch-Mage, Guildmaster of the Thieves Guild, Listener of the Dark Brotherhood, a werewolf and a vampire lord across the save, and still finish the main quest and both DLC questlines. Pick a crafting skill (Smithing, Enchanting or Alchemy) to push to 100 for Skill Master while you play."
            ]
        },
        {
            "heading": "Main Quest & Faction Questlines",
            "body": [
                "The main quest from Unbound to Dragonslayer, the Companions (join, join the Circle, Glory of the Dead), the College of Winterhold (join, Revealing the Unseen, The Eye of Magnus), the Thieves Guild (join, Darkness Returns, restore the guild), the Dark Brotherhood (join, Bound Until Death, Hail Sithis!), and the Civil War (pick a side, capture a fort, capture Solitude or Windhelm).",
                "The achievements here: Unbound (Complete \"Unbound\"); Bleak Falls Barrow (Complete \"Bleak Falls Barrow\"); The Way of the Voice (Complete \"The Way of the Voice\"); Diplomatic Immunity (Complete \"Diplomatic Immunity\"); Alduin's Wall (Complete \"Alduin's Wall\"); Elder Knowledge (Complete \"Elder Knowledge\"); The Fallen (Complete \"The Fallen\"); Dragonslayer (Complete \"Dragonslayer\"); Take Up Arms (Join the Companions); Blood Oath (Become a member of the Circle); Glory of the Dead (Complete \"Glory of the Dead\"); Gatekeeper (Join the College of Winterhold); Revealing the Unseen (Complete \"Revealing the Unseen\"); The Eye of Magnus (Complete \"The Eye of Magnus\"); Taking Care of Business (Join the Thieves Guild); Darkness Returns (Complete \"Darkness Returns\"); One with the Shadows (Returned the Thieves Guild to its former glory); With Friends Like These… (Join the Dark Brotherhood); Bound Until Death (Complete \"Bound Until Death\"); Hail Sithis! (Complete \"Hail Sithis!\"); Taking Sides (Join the Stormcloaks or the Imperial Army); War Hero (Capture Fort Sungard or Fort Greenwall); Hero of Skyrim (Capture Solitude or Windhelm)."
            ]
        },
        {
            "heading": "Exploration, Skills & Character Progression",
            "body": [
                "The open-world feats: 10 side quests and 50 misc objectives, the wood-chop/mine/cook and crafting feats, 50 locks and 50 pockets, persuade/bribe/intimidate, Standing Stones, buying a house, escaping jail, marriage, a 1,000-gold bounty in all nine holds, 100,000 gold, clearing 50 dungeons, a level-100 skill, 100 locations, 50 skill books, one and then 15 Daedric Artifacts, one and then 20 dragon souls, a full shout and 20 shouts, and reaching levels 5, 10, 25 and 50.",
                "The achievements here: Sideways (Complete 10 side quests); Hero of the People (Complete 50 Misc Objectives); Hard Worker (Chop wood, mine ore, and cook food); Thief (Pick 50 locks and 50 pockets); Snake Tongue (Successfully persuade, bribe, and intimidate); Blessed (Select a Standing Stone blessing); Standing Stones (Find 13 Standing Stones); Citizen (Buy a house); Wanted (Escape from jail); Married (Get married); Artificer (Make a smithed item, an enchanted item, and a potion); Master Criminal (Bounty of 1000 gold in all nine holds); Golden Touch (Have 100,000 gold); Delver (Clear 50 dungeons); Skill Master (Get a skill to 100); Explorer (Discover 100 Locations); Reader (Read 50 Skill Books); Daedric Influence (Acquire a Daedric Artifact); Oblivion Walker (Collect 15 Daedric Artifacts); Dragon Soul (Absorb a dragon soul); Dragon Hunter (Absorb 20 dragon souls); Words of Power (Learn all three words of a shout); Thu'um Master (Learn 20 shouts); Apprentice (Reach Level 5); Adept (Reach Level 10); Expert (Reach Level 25); Master (Reach Level 50)."
            ]
        },
        {
            "heading": "Dawnguard & Hearthfire",
            "body": [
                "The Dawnguard questline (Awakening, Beyond Death, Kindred Judgement, Lost to the Ages), the Soul Tear shout and Auriel's Bow, mastering 11 werewolf and 11 vampire perks, changing your face, defeating a Legendary Dragon, and the Hearthfire homebuilding chain - adopt a child, buy a plot of land, build three wings on a house, buy three plots, and build three houses.",
                "The achievements here: Awakening (Complete \"Awakening\"); Beyond Death (Complete \"Beyond Death\"); Kindred Judgement (Complete \"Kindred Judgment\"); Lost to the Ages (Complete \"Lost to the Ages\"); Soul Tear (Learn all three words of Soul Tear); Auriel's Bow (Use the special power of Auriel's Bow); Werewolf Mastered (Acquire 11 werewolf perks); Vampire Mastered (Acquire 11 vampire perks); A New You (Change your face); Legend (Defeat a Legendary Dragon); Proud Parent (Adopt a child); Landowner (Buy a plot of land); Architect (Build three wings on a house); Land Baron (Buy three plots of land); Master Architect (Build three houses)."
            ]
        },
        {
            "heading": "Dragonborn (Solstheim)",
            "body": [
                "The Dragonborn add-on: arriving on Solstheim, the questline (The Temple of Miraak, The Path of Knowledge, At the Summit of Apocrypha), learning all of Dragon Aspect, the secrets of 5 Black Books, crafting a Stalhrim item, taming and riding 5 dragons, owning a house in Raven Rock, and discovering 30 locations on the island.",
                "The achievements here: Outlander (Arrive on Solstheim); The Temple of Miraak (Complete \"The Temple of Miraak\"); The Path of Knowledge (Complete \"The Path of Knowledge\"); At the Summit of Apocrypha (Complete \"At the Summit of Apocrypha\"); Dragon Aspect (Learn all 3 words of Dragon Aspect); Hidden Knowledge (Learn the secrets of 5 Black Books); Stalhrim Crafter (Craft an item out of Stalhrim); Dragonrider (Tame and ride 5 dragons); Raven Rock Owner (Own a house in Raven Rock); Solstheim Explorer (Discover 30 locations on the island of Solstheim)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start the main quest but branch off early to join the factions you want - most players do the Companions first for the werewolf option.",
                "2. Work the faction questlines and the main quest together, and pick one crafting skill to level toward 100 as you play.",
                "3. Let the grind feats accumulate naturally (locations, dungeons, dragon souls, shouts, gold) and finish them off deliberately once the questlines are done.",
                "4. Do the Dawnguard questline and decide vampire vs. Dawnguard - you can still get both the werewolf and vampire perk achievements across the save.",
                "5. Do the Hearthfire building chain and the Dragonborn questline on Solstheim, then clean up any remaining exploration and skill feats.",
                "Tip: Oblivion Walker (15 Daedric Artifacts) is the achievement most likely to bug on this original release if you rush overlapping Daedric quests - do them one at a time, finish each fully before starting the next, and check your inventory count as you go."
            ]
        }
    ]
};
