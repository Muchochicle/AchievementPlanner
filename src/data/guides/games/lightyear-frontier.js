// Lightyear Frontier Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/lightyear-frontier.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1677110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "lightyear-frontier-achievement-guide",
    "category": "game",
    "gameSlug": "lightyear-frontier",
    "icon": "🛸",
    "title": "Lightyear Frontier Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Lightyear Frontier (5 hidden). Covers the farming, cleanup and coziness milestones, the artifact and region-restoration goals, the animal-raising achievements, and the Ulf and Diane NPC threads. Five of the achievements are hidden - the Delivery Cannon, the Vault, scaring animals, spraying water at a player, and 1,000 plowed mounds - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Lightyear Frontier has 45 Steam achievements and 5 are hidden. The hidden five are 'Establish a Connection' (build the Resource Delivery Cannon), 'What Lies Beneath' (find all 10 artifacts in the Vault - the alien facility that opens after restoring all 3 regions and sleeping a day), 'Hey, Cut That Out!' (scare away 10 animals), 'First Spill' (spray water at another player), and 'And I Would Plow Five Hundred More' (plow 1,000 mounds total in Field Plow Mode). Everything visible is the cozy-farming loop: planting 1 / 100 / 500 / 1,000 seeds, removing Noxious Slimes and Weeds, raising Homestead Coziness to 3, finding 1 / 50 artifacts, feeding animals, restoring 1 / 3 regions, crafting mech parts, the Ulf and Diane move-in and daily-chat threads, hatching and raising farm animals (happy, rare, accessorised, kept 30 days), and discovering 20 paints.",
                "The catalog marks it difficulty 3. Nothing is missable and there is no fail state; it is a long, relaxed completion. 'What Lies Beneath' (all Vault artifacts) is the most involved, and the plant / plow / weed totals are just time.",
                "Tip: restore all three regions as your main goal - it unlocks the Vault for 'What Lies Beneath' and clears the map of the slimes and weeds you need to remove for the cleanup achievements along the way."
            ]
        },
        {
            "heading": "Farming & Cleanup",
            "body": [
                "Planting 1 / 100 / 500 / 1,000 seeds, removing 10 / 50 / 150 Noxious Slimes, building the Resource Delivery Cannon (hidden), removing 100 / 300 / 700 Noxious Weeds, and raising Homestead Coziness to 1 / 2 / 3.",
                "The achievements here: Projectile Farming (Plant 100 seeds.); Cultivation Artillery (Plant 500 seeds.); Agrarian Bombardment (Plant 1000 seeds.); Stain Removal (Remove 10 Noxious Slimes.); Nice and Tidy (Remove 50 Noxious Slimes.); Spotless (Remove 150 Noxious Slimes.); Establish a Connection (Build the Resource Delivery Cannon (part of the early questline).); Weed Wacker (Remove 100 Noxious Weeds.); Weed Slayer (Remove 300 Noxious Weeds.); Weed Destroyer (Remove 700 Noxious Weeds.); Hygge Apprentice (Increase Homestead Coziness to 1.); Hygge Artisan (Increase Homestead Coziness to 2.); Hygge Expert (Increase Homestead Coziness to 3.)."
            ]
        },
        {
            "heading": "Exploration, Animals & Regions",
            "body": [
                "Finding your first artifact and then 50, the Vault's 10 artifacts (hidden), feeding an animal for the first time / 20 / 50, restoring 1 and then 3 regions, scaring away 10 animals (hidden), spraying water at a player (hidden), crafting 1 and 10 mech parts, and planting your first seed.",
                "The achievements here: Xenoarchaeology (Find an artifact.); Ruin Sweeper (Find 50 artifacts.); What Lies Beneath (Find all 10 artifacts inside the Vault - the alien facility that opens after you restore all 3 regions and sleep for one day.); Share a Nibble (Feed an animal for the first time.); Snack Time (Feed 20 animals.); A Feast for Beasts (Feed 50 animals.); Eco-Warrior (Restore 3 regions.); Environmentalist (Restore a region.); Hey, Cut That Out! (Scare away 10 animals (spray or fire near them).); First Spill (Spray water at another player.); Fledgling Mech-Mechanic (Craft a Part at the Mech Depot.); Tuned Up (Craft 10 Parts at the Mech Depot.); Ballistic Agriculture (Plant your first seed.)."
            ]
        },
        {
            "heading": "NPCs, Animals & Homestead",
            "body": [
                "Helping Ulf and Diane move in and having 5 daily chats with each, a Spliced Seed and a Mutated Crop, 20 Abandoned Eggs, picking up and hatching farm animals, 10 happy and 5 rare animals at once, an animal accessory, Pathmaker paths, plowing 500 (and the hidden 1,000) mounds, a balanced flip, 200 sprouts, 20 paints discovered, and keeping an animal for 30 days.",
                "The achievements here: Ulf has Moved In (Help Ulf move in.); Checking in on Ulf (Have 5 daily chats with Ulf.); Diane has Moved In (Help Diane move in.); Checking in on Diane (Have 5 daily chats with Diane.); A Seed for Science (Collect a Spliced Seed.); Succesful Experiment (Collect a Mutated Crop.); The Egg Came First (Collect 20 Abandoned Eggs.); A Comfy Hand (Pick up a Farm Animal.); A Novice Hatcher (Hatch 5 Farm Animals.); All You Need is Love (Have 10 happy Farm Animals at once.); Born Lucky (Have 5 rare Farm Animals at once.); Put a Bow on Them (Put an Accessory on a Farm Animal.); Country Roads (Create paths in Pathmaker Mode.); I Would Plow Five Hundred Mounds (Plow 500 Mounds in Field Plow Mode.); Stuck the Landing (Trip and land on your feet 5 times.); Agroforester (Plant 200 Sprouts.); Color Me Impressed (Discover 20 Paints.); And I Would Plow Five Hundred More (Plow 1,000 mounds total in Field Plow Mode (500 more after 'I Would Plow Five Hundred Mounds').); Old Friend (Have a Farm Animal for 30 days.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the early questline, building the Resource Delivery Cannon.",
                "2. Work toward restoring all 3 regions, clearing slimes and weeds as you go.",
                "3. After the regions are restored, sleep a day, enter the Vault and collect all 10 artifacts.",
                "4. Raise animals for the hatching, happiness, rarity, accessory and 30-day achievements, and do the Ulf and Diane threads.",
                "5. Grind the plant / plow / weed / paint totals - they finish through normal farming.",
                "Tip: 'First Spill' (spray water at another player) and the co-op-flavoured achievements need a second player - invite a friend for one session to knock those out, since they cannot be done solo."
            ]
        }
    ]
};
