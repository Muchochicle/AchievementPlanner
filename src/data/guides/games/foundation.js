// Foundation Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/foundation.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   690830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "foundation-achievement-guide",
    "category": "game",
    "gameSlug": "foundation",
    "icon": "⛪",
    "title": "Foundation Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Foundation (1 hidden). Covers the early village-foundation achievements, the economy, trade and tax achievements, and the military and monastic Aspirations. One achievement ('Ye Noble Black Prince!') is Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Foundation has 45 Steam achievements and one ('Ye Noble Black Prince!', a rare black-sheep spawn) is Steam-hidden. The rest are open: early village foundations (first church, first territory, 100 and 500 population, 10,000 coins, first military mission, promoting a Knight), a large economy/trade/tax block (trade routes to Level 5, all seven taxes, 15,000 coins in 30 days, tavern meals, a Villager at 150% happiness), and the military and monastic Aspirations with their 'Challenge rules or harder' variants (100-combatant army, hosting Royal Knights and Pilgrims, Abbatial Church splendour, the three named Aspirations).",
                "The catalog marks it difficulty 3 and about two towns. The base achievements come with normal play; the 'Challenge rules or harder' versions and the 30-territory / 500-population challenge goals want a dedicated harder save.",
                "Tip: play a relaxed sandbox town to learn the systems and clear the easy achievements, then a Challenge-rules town for the harder variants and the big population and military goals."
            ]
        },
        {
            "heading": "Village Foundations",
            "body": [
                "Building a Rustic Church, buying your first territory, 10,000 coins, 100 and 500 population, the Steam-hidden black-sheep spawn, completing a military mission, promoting a Soldier to Knight, owning 30 territories (and on Challenge rules), and 500 population on Challenge rules.",
                "The achievements here: Your First Church (Build a Rustic Church); Expansion (Purchase your first Territory); Bathing in Gold (Amass 10,000 Coins); A Growing Village! (Have a population of 100 or more); A Thriving City! (Have a population of 500 or more); Ye Noble Black Prince! (A rare black sheep randomly spawns among your flock. Build a sheep farm with a large pasture and keep as many sheep as possible to improve the odds - it is a Very Rare achievement.); Sound the Trumpets! (Complete a Military Mission); A Legend is Born (Promote a Soldier to Knight); A Fief Too Far (Own 30 Territories); Feudal Overlord (Own at least 30 Territories (Challenge rules or harder)); Civitas Maxima (Have a population of 500 or more (Challenge rules or harder))."
            ]
        },
        {
            "heading": "Economy, Trade & Taxes",
            "body": [
                "Producing tools, a workplace extension, starting and upgrading trade routes (all once, one to Level 5), 15,000 coins in 30 days, the Levy Mandate, enacting an Edict, taxing a villager, all seven taxes, 5,000 tax coins in a month, a tavern meal, a 150%-happiness villager, and a 100-splendour Great Hall.",
                "The achievements here: Hammer Time! (Produce Tools); Room for One More? (Build a Workplace Extension); Spices of Life (Start a Trade Route); Hanseatic Spirit (Upgrade all Trade Routes at least once); Merchant Prince (Upgrade a Trade Route to Level 5); King Midas (Earn 15,000 Coins within 30 days); Just this once... I promise! (Earn Coins from the Levy Mandate); Calling a Ban (Enact an Edict); Serf and Turf (Tax a Villager); The Gabelle Gambit (Enact all seven Taxes); The Exchequer's Haul (Collect 5,000 Tax Coins in a single month); The Boar's Head Feast (Produce a Tavern Meal); Happy as a Lark (Have a Villager with 150% Happiness); The Big Cheese of Cheddar Palace (Build a Great Hall worth 100 Labour Splendour)."
            ]
        },
        {
            "heading": "Military & Monastic Aspirations",
            "body": [
                "The Merchandise Taxes Privilege, both 'A Prestigious Burg' Aspirations, forming a Company, a Grade 3 mission, deploying to a campaign, hosting Royal Knights, 100-splendour Private Quarters, 400 war rations, a 100-combatant army, both 'A Mighty Stronghold' Aspirations, hosting a Pilgrim, a monastic meal, 500 traded resources with Kinstone Abbey, a 100-splendour Abbatial Church, the Seal of Prestige Privilege, and both 'A Prosperous Priory' Aspirations.",
                "The achievements here: Teloneum (Enact the Merchandise Taxes Privilege (Challenge rules or harder)); One of the People (Complete the Aspiration: A Prestigious Burg); The Burgomaster (Complete the Aspiration: A Prestigious Burg (Challenge rules or harder)); Marching On! (Form a Company); Veni, Vidi, Vici (Complete a Military Mission of Grade 3); Montjoie! Saint Denis! (Deploy a Battalion to a Military Campaign); Against All Odds (Complete a Military Campaign (Challenge rules or harder)); Honi soit qui mal y pense! (Successfully host a Company of Royal Knights); Fit for a King (Build Private Quarters worth 100 Kingdom Splendour); Salt Fish and Pottage (Stock 400 War Rations); Centuria (Have an army of 100 Combatants); Iron and Oak (Complete the Aspiration: A Mighty Stronghold); Steel and Stone (Complete the Aspiration: A Mighty Stronghold (Challenge rules or harder)); The Way of Saint James (Host a Pilgrim); Ora et Labora (Produce a Monastic Meal); Via Commercii, Via Dei (Trade 500 resources with Kinstone Abbey over 30 days); Divine Architecture (Build an Abbatial Church worth 100 Clergy Splendour); First Growth (Enact the Seal of Prestige Privilege (Challenge rules or harder)); Prior of Plenty (Complete the Aspiration: A Prosperous Priory); Abbey of Abundance (Complete the Aspiration: A Prosperous Priory (Challenge rules or harder))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a relaxed sandbox town: build the church, expand territory, grow to 100 then 500 population, and clear the economy and tax achievements.",
                "2. Run trade routes up to Level 5 and enact all seven taxes and the various Privileges.",
                "3. Do the military content: form a Company, run missions up to Grade 3, host Royal Knights, field a 100-combatant army.",
                "4. Do the monastic content: host a Pilgrim, produce a monastic meal, build a 100-splendour Abbatial Church.",
                "5. Start a Challenge-rules town for 'Feudal Overlord', 'Civitas Maxima' and the '...(Challenge rules or harder)' Aspiration variants.",
                "6. Keep a big sheep farm running the whole time for the rare black sheep ('Ye Noble Black Prince!').",
                "Tip: the three Aspiration lines each have a normal and a Challenge-rules achievement - complete each Aspiration on a Challenge save and both unlock at once."
            ]
        }
    ]
};
