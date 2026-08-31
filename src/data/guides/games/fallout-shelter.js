// Fallout Shelter Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fallout-shelter.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   588430 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fallout-shelter-achievement-guide",
    "category": "game",
    "gameSlug": "fallout-shelter",
    "icon": "☢",
    "title": "Fallout Shelter Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Fallout Shelter - none are hidden. Covers the building and economy milestones, the legendary-collection and vault-life achievements, and the quest and crafting achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fallout Shelter has 35 Steam achievements and none are hidden. They are all cumulative account milestones: building and upgrading rooms, collecting Caps, levelling Dwellers, merging the resource rooms, collecting 20 of each Legendary item type, stopping Raider attacks, and a large quest and crafting block - completing up to 100 quests, killing quest bosses, collecting themes, scrapping and crafting items, and using the Barbershop.",
                "The catalog marks it a single long-running vault - 'Legend of the Wastes' (100 quests), 'Overachieve Much?' (100 objectives) and the three Legendary-collection achievements are the pole, and everything else accrues on the way. Nothing is missable.",
                "Tip: keep a well-equipped three-Dweller team out on quests constantly - the quest, boss, enemy-kill, Stimpak/Radaway and dialogue-choice achievements all progress on the same expeditions."
            ]
        },
        {
            "heading": "Building & Economy",
            "body": [
                "50 successful Room Rushes, building 25 and 50 rooms, collecting 1,000 and 10,000 Caps, levelling a Dweller to 10, 25 and 50, and building one of every room type.",
                "The achievements here: Hard Work is Happy Work (Successfully complete 50 Room Rushes); Vault-Tec Architect (Build 25 rooms); Vault-Tec Engineer (Build 50 rooms); Mattress Stuffer (Collect 1000 Caps); A Vault For My Vault (Collect 10,000 Caps); Better Settler (Level up a Dweller from 1 to Level 10); Higher and Higher (Level up a Dweller to level 25); Overseer (Level up a Dweller to level 50); Home Sweet Home (Build 1 of every room type)."
            ]
        },
        {
            "heading": "Legendary Collection & Vault Life",
            "body": [
                "Collecting 20 Legendary weapons, outfits and Dwellers, stopping 50 Raider attacks, completing 100 objectives, merging three Power, Food and Water rooms, making 25 babies, and upgrading 20 rooms to Level 3.",
                "The achievements here: Armed and Dangerous (Collect 20 Legendary weapons); Fashion Statement (Collect 20 Legendary outfits); Blast From The Past (Collect 20 Legendary Dwellers); Get Off My Lawn (Successfully stop 50 Raider Attacks); Overachieve Much? (Complete 100 objectives); Atom Splitter (Merged 3 Power Rooms); Dine and Dash (Merged 3 Food Rooms); Project Purity (Merged 3 Water Rooms); Prepared For The Future (Make 25 babies); A Better Future, Underground (Upgrade 20 Rooms to Level 3)."
            ]
        },
        {
            "heading": "Quests & Crafting",
            "body": [
                "25 quest dialogue choices, killing 10 quest bosses, completing 10 / 30 / 60 / 100 quests, collecting all pieces of 1 and 4 themes, crafting one of every room theme, killing 500 quest enemies, collecting 100 Stimpaks and 100 Radaway on quests, scrapping 500 items, crafting 10 weapons and 10 outfits, crafting an outfit + weapon + theme, and 10 Barbershop customisations.",
                "The achievements here: Smooth Talker (Make 25 Dialogue Choices in Quests); You're Fired! (Kill 10 Quest Bosses); Wasteland Wanderer (Complete 10 Quests); Urban Ranger (Complete 30 Quests); Survivalist (Complete 60 Quests); Legend of the Wastes (Complete 100 Quests); Paint ‘n Elbow Grease (Collect all Pieces of 1 Theme); Decorator (Collect all Pieces of 4 Themes); Interior Designer (Craft 1 of every room theme); Enemy of the Wastes (Kill 500 enemies on Quests); Big Pharma (Collect 100 Stimpacks and 100 Radaway on Quests); Scraptastic (Scrap 500 items); Weaponsmith (Craft 10 Weapons); Fashionista (Craft 10 Outfits); More than Handy (Craft an Outfit, a Weapon and a Theme); A Little off the Top (Change the appearance of 10 NPCs in the Barbershop)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Grow the vault - build and upgrade rooms, merge the resource rooms, and keep Caps and objectives flowing.",
                "2. Send a strong three-Dweller team on quests continuously for the quest, boss and enemy-kill counts.",
                "3. Collect Legendary weapons, outfits and Dwellers (lunchboxes and quest rewards) toward 20 of each.",
                "4. Scrap junk and craft weapons, outfits and every room theme.",
                "5. Keep playing toward 100 quests and 100 objectives.",
                "Tip: 'Blast From The Past' (20 Legendary Dwellers) is the slowest - Mr. Handy and lunchbox pulls are the main source, so open lunchboxes as you earn them rather than hoarding."
            ]
        }
    ]
};
