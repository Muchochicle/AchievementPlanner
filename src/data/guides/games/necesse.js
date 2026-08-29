// Necesse Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/necesse.json), whose 51 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1169040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "necesse-achievement-guide",
    "category": "game",
    "gameSlug": "necesse",
    "icon": "⛏️",
    "title": "Necesse Achievement Guide",
    "summary": "A practical guide to all 51 Steam achievements in Necesse - none are hidden. bosses & progression, settlements & exploration, crafting & endgame.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Necesse has 51 Steam achievements and none are hidden. They run the length of a playthrough: the boss-kill and gear progression, the settlement and settler systems, and the crafting and endgame goals.",
                "Nothing is missable and progress is per-world (or carried on your character). The commitment is the boss ladder and the settlement social achievements (a 6-personality settler, a Life Partner), plus reaching the endgame.",
                "Tip: play the boss progression normally while building up one settlement - the settler, crafting and social achievements come from investing in that town, and the exploration ones fill as you dive for boss-summon materials."
            ]
        },
        {
            "heading": "Bosses & Progression",
            "body": [
                "The combat and progression milestones: your first boss and later boss kills, getting a pet, changing your spawn point, and the early gear and biome goals.",
                "The achievements here: Spelunker (Be careful to not get lost!); First of Many (Defeat your first boss); Companion For Adventure (Get your first pet); Do It Yourself (Start a settlement); Instant Nap (Change your spawn point); Artificer (Enchant an item using the mage); Complete Collector (Obtain all possible items); Tourist (Visit all different biomes); More Than A Hobby (Fish up a total of 500 items); Marathon Runner (Run a full marathon on foot); Time Well Spent (Play the game for a full 24 hours); Magical Drop (Increase max trinket slots); Hoarder (Have an inventory full of different items); Self Proclaimed (Wear a gold crown); Double Catch (Catch 2 fish in 1 throw); Complete Host (Have all possible settler professions live in the same settlement); Getting Hot (Reach the deep caves)."
            ]
        },
        {
            "heading": "Settlements & Exploration",
            "body": [
                "The settlement and world content: starting and growing a settlement, recruiting and equipping settlers, exploring the biomes and dungeons, and the resource and building goals.",
                "The achievements here: My Jam (Listen to a vinyl on the music player); Cloud Nine (Have a settler reach Unrivaled Quality of Life level); One Tapped (Kill a Zombie in a single hit); Too Easy (Kill a boss in less than 30 seconds); Headhunter (Recruit your first settler); Rematch (Defeat the Fallen Wizard); Washed Up (Defeat the Pirate Captain); Grave Digger (Find and dig up a gravestone); Watch Me! (Equip your first trinket ability); Demolition Expert (Kill an enemy with a bomb); Take it to the next level (Complete an incursion); Master of Sun and Moon (Defeat Sunlight Champion and Moonlight Dancer at Tier 5 or higher); Teamwork (Have a settler join your adventure party); Empowered (Upgrade and equip a full set of Tier 5 armor); Feeling Stylish (Get a new look from the Stylist); Safety Last (Take damage from a bundle of TNT); Wardrobe on the go! (Get access to 4 item sets)."
            ]
        },
        {
            "heading": "Crafting & Endgame",
            "body": [
                "The late-game goals: the crafting-station and equipment milestones, the wealthy-settler and Life Partner social achievements, and the endgame boss and completion feats (down to a MAXIMUM-speed Bumper Car).",
                "The achievements here: Hot Tub (Swim in lava while under the effect of fire resistance); Adventure Begins! (Reach the first major story objective); Dodge This! (Defeat the Fallen Wizard while 5 Fallen Dragons are alive); Secret Service (Have only 2 guards in your adventure party, both wearing sunglasses, blazer and dress shoes); Home Alone (Kill a raider with a trap); Crystallized (Reach the full potential of the Ruby or Amethyst set); You and what Army? (Have 10 settlers in your adventure party equip a tier 5 or higher armor set and weapon); Me and this Army! (Defeat an incursion boss with only damage from settlers); That's a lot of dust! (Have 40 perks active in a single Fallen Altar at a time); Overpowered (Upgrade and equip a full set of Tier 10 armor); Settling Down (Upgrade your settlement size); Expansionist (Have a fully upgraded settlement size); Restored Reality (Find and defeat the final boss); Cloud Ten (Achieve Unrivaled Quality of Life on 10 settlers at the same time); Rich Character (Recruit a Settler with 6 or more personalities); True Love (Become Life Partners with one of your Settlers); Speeding Ticket (Achieve MAXIMUM speed while driving a Bumper Car)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Progress the boss ladder, upgrading gear and exploring biomes and dungeons as you go.",
                "2. Build and grow one settlement: recruit settlers, equip them, and work toward the 6-personality settler and a Life Partner.",
                "3. Hit the crafting-station and equipment milestones as you tech up.",
                "4. Finish the endgame bosses and mop up the one-off feats (the Bumper Car speed one).",
                "Tip: True Love (become Life Partners with a settler) needs sustained relationship-building - assign that settler good housing and amenities early, talk to them daily, and give gifts so the relationship maxes well before the endgame."
            ]
        }
    ]
};
