// Sengoku Dynasty Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sengoku-dynasty.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1702010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sengoku-dynasty-achievement-guide",
    "category": "game",
    "gameSlug": "sengoku-dynasty",
    "icon": "⛩",
    "title": "Sengoku Dynasty Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Sengoku Dynasty - none are hidden. None of the achievements are hidden. Covers building your dynasty to its maximum population and Legend level, maxing every Way's perk tree, completing all Special Projects and side quests, liberating every region, the crafting tiers from copper to masterwork, and a long list of first-time life and survival moments.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sengoku Dynasty has 40 Steam achievements and none are hidden. The endgame goals are reaching maximum population at maximum Dynasty Level, maxing all Warrior, Monk and Craftsman perk trees (individually and together), reaching the top Dynasty Legend level ('Daimyo'), 50,000 coins, all Special Projects, all neutral-village side quests, liberating every region, and killing every animal type and a human opponent. The rest are first-time moments: building a house and a decoration, harvesting your own crops, eating a top-tier meal, felling a tree, having a child, drinking sake, bathing in an Onsen, dying to fall damage, and the crafting tiers from copper to masterwork.",
                "The catalog marks it difficulty 3. Nothing is missable or hard to execute; it is a long, steady completion built around growing one dynasty. The perk-tree, population and Legend-level goals are the main time sink, and 'The Honorable Restoration' (all Special Projects) and 'The Great Unifier' (liberate all regions) need you to work across the whole map.",
                "Tip: keep one dynasty going for the whole run - the population, Legend, coin, perk and Special Project goals all accumulate on a single save, so there is no reason to restart."
            ]
        },
        {
            "heading": "Dynasty, Perks & Endgame",
            "body": [
                "Maxing all non-background perks (and each of the Warrior, Monk and Craftsman trees), reaching maximum population at maximum Dynasty Level, completing all Special Projects, reaching the top Dynasty Legend level, 50,000 coins, all neutral-village side quests, liberating all regions, killing every animal type and a human opponent, and positive production for all 8 needs at once.",
                "The achievements here: Personal Enlightenment (Unlock max level in all Warrior, Monk, and Craftsman (non-background) perks.); We live in a society (Reach the max population at max Dynasty Level.); The Honorable Restoration (Complete all Special Projects on the map.); Bushidō Mastery (Unlock max level in all Way of the Warrior (non-background) perks.); Spiritual Mastery (Unlock max level in all Way of the Monk (non-background) perks.); Craftsmanship Mastery (Unlock max level in all Way of the Craftsman (non-background) perks.); Daimyō (Reach the max Dynasty Legend level.); Best Superpower (Have 50,000 coins in your inventory.); Questing: Not Just for Heroes (Finish all neutral village side quests.); The Great Unifier (Liberate all regions.); Gotta Slay 'Em All (Kill all types of animals and any human opponent.); Guardian of Needs (Have a positive production for all 8 types of needs simultaneously.)."
            ]
        },
        {
            "heading": "First Steps & Life",
            "body": [
                "Building your first decoration and house, personally harvesting crops, eating a top-tier meal, felling a full-size tree, dying to fall damage, having a child, planting a tree and letting it grow, drinking sake, and killing a deer, boar, wolf, bear, hare, fox and an enemy for the first time.",
                "The achievements here: From Drab to Fab (Build any decoration.); It ain't much but it’s honest work (Personally harvest crops from your farm field.); Gourmet (Consume any top-tier, excellent meal.); Timberrrr! (Cut down any full-size tree.); I believed I could fly (Die because of the fall damage.); No More Couch Surfing! (Build any house-type structure.); Branching Out (Have a child.); Don't You Dare Chop It! (Plant a tree and let it grow to full size.); For the sake of sake (Drink sake.); There's nowhere to run! (Kill a deer.); Stop oinking! (Kill a boar.); Bad dog! (Kill a wolf); Bearly Survived! (Kill a bear.); What's Up, Doc? (Kill a hare.); What Does the Fox Say? (Kill a fox.); Hands Off My Gold! (Kill any enemy.)."
            ]
        },
        {
            "heading": "Crafting, Villagers & Regions",
            "body": [
                "Crafting a copper, bronze, iron, steel and masterwork weapon or tool, having a villager leave your dynasty, bathing in an Onsen, completing the 'Get Your Bearings' quest, having 3 villagers, holding 1,000 coins, liberating your first region, and establishing a village outside the starting region.",
                "The achievements here: Who smelt it dealt it (Sticks and stones may break bones but copper will pierce hearts. Craft a copper-tier weapon or tool.); Bronze Age (Craft a bronze-tier weapon or tool.); Finally, the proper toys (Craft an iron-tier weapon or tool.); Unleashing the Power of Steel! (Craft a steel-tier weapon or tool.); Look at this gem! (Craft a masterwork-tier weapon or tool.); One Less Mouth to Feed! (Have a villager leave your Dynasty for any reason.); Hot Springs and Chill (Bathe in an Onsen.); Get my bearings (Complete the \"Get Your Bearings\" quest.); 2 is a company, 3 is a crowd (Have 3 non-player villagers in your Dynasty.); Thousand Gold Club (Have 1,000 coins in your inventory.); Foothold situation (Liberate any region.); Breaking the Mold (Establish a village outside the starting region.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, completing 'Get Your Bearings' and the early first-time achievements as they come.",
                "2. Grow one dynasty - build houses and decorations, have villagers and a child, work the perk trees.",
                "3. Craft up through every material tier from copper to masterwork.",
                "4. Liberate every region and complete all Special Projects and neutral-village side quests.",
                "5. Push to maximum population, maximum Dynasty Level and the 'Daimyo' Legend level, and 50,000 coins.",
                "Tip: kill one of every animal type early ('Gotta Slay 'Em All' needs deer, boar, wolf, bear, hare and fox plus a human) - the bear is the dangerous one, so bring an iron weapon and fight it near a settlement."
            ]
        }
    ]
};
