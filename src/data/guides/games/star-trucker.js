// Star Trucker Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/star-trucker.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2380050 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "star-trucker-achievement-guide",
    "category": "game",
    "gameSlug": "star-trucker",
    "icon": "🚛",
    "title": "Star Trucker Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Star Trucker (5 hidden). Covers the rank, freight-income and trading milestones, the eight corporations' job sets, the mileage and sector-exploration totals, the story side-job chains, every freight job type, all certifications, and the truck upgrades. Five of the achievements are hidden - a suitless ejection, contraband sales, fines, EVA time and the golden traffic cones - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Star Trucker has 49 Steam achievements and 5 are hidden. The hidden five are 'Human Popsicle' (eject from the airlock without your suit), 'Rogue Trader' (sell $50,000 of contraband), 'Violation Virtuoso' ($25,000 in traffic fines and deductions), 'Void Walker' (spend 12 minutes 9 seconds on EVA) and 'Cone Connoisseur' (dislodge all the golden traffic cones). Everything visible is the sim's progression: reaching rank 5 / 25 / 50, freight and trading income tiers, five jobs for each of the eight corporations, driving 100 / 500 / 2,000 miles, the five story side-job chains, every freight job type, all certifications, unlocking the three regions, exploring 8 / 16 / 32 sectors, and fully upgrading your truck.",
                "The catalog marks it difficulty 3. It is a comfortable completion over one long career - nothing is missable and there is no fail state. The income and mileage totals are the main gate; 'Cone Connoisseur' (all golden cones) is a scattered collectible hunt, and 'Void Walker' just needs cumulative time spacewalking.",
                "Tip: take contraband and 'grey' jobs whenever they come up - 'Rogue Trader' ($50,000 of contraband) and the fines for 'Violation Virtuoso' both build toward completion, and the money is good."
            ]
        },
        {
            "heading": "Rank, Income & Corporations",
            "body": [
                "Reaching rank 5 / 25 / 50, the freight-contract income tiers ($10k / $50k / $250k), the trading income tiers ($5k / $25k / $100k), and doing 5 jobs for each of the eight corporations (Instagalactic, Everycrop, Q-Starr, Planeto, West Coast Galaxy, Double Five, Franks, Cloverleaf).",
                "The achievements here: Space Duster (Reach Rank 5); Hyper Hauler (Reach Rank 25); Master Mover (Reach Rank 50); Novice Hauler (Earn $10,000 from freight contracts); Expert Hauler (Earn $50,000 from freight contracts); Master Hauler (Earn $250,000 from freight contracts); Transit Trader (Make $5,000 from trading); Moon Merchant (Make $25,000 from trading); Space Hustler (Make $100,000 from trading); No Sleep Till Vexmont (Do 5 jobs for Instagalactic); Cream of the Crop (Do 5 jobs for Everycrop); Playing Corporation Games (Do 5 jobs for Q-Starr); Watching Lights Blink Below (Do 5 jobs for Planeto); Money On My Mind (Do 5  jobs for West Coast Galaxy); Riding With Lady Luck (Do 5 jobs for Double Five); Playing Among the Stars (Do 5 jobs for Franks); Over and Over (Do 5 jobs for Cloverleaf)."
            ]
        },
        {
            "heading": "Mileage, First Steps & Side Jobs",
            "body": [
                "Driving 100 / 500 / 2,000 total miles, your first repair, first freight job and first docking, and the five story side-job chains - Barrow, Moon Baby, Dusty Bear, Red Eddie and Sour Candy, and one last job for G-Bee.",
                "The achievements here: Mile-stone (Drive a total of 100 miles); Mile-ologist (Drive a total of 500 miles); Mile-ificent (Drive a total of 2000 miles); Weld Done (Repair your truck for the first time); First Haul (Complete your first freight job); Lock and Dock (Dock with your first station); Wheeler Dealer (Complete Barrow side jobs); Ghost Busted (Complete Moon Baby side jobs); Bear Necessities (Complete Dusty Bear side jobs); Twin Triumphs (Complete Red Eddie and Sour Candy side jobs); Boldly Went (Complete one last side job for G-Bee)."
            ]
        },
        {
            "heading": "Job Types, Certs & Exploration",
            "body": [
                "Completing 5 jobs of each type (valuable, multi-trailer, heavy, long distance) and one of every type, unlocking 10 and then all certifications, unlocking the Solar Provinces, Mineral Colonies and Enigma Territories, and exploring 8 / 16 / 32 sectors.",
                "The achievements here: Money Runner (Complete 5 jobs with valuable loads); Wiggle Wagoneer (Complete 5 multi-trailer jobs); Heavy Hauler (Complete 5 jobs with heavy loads); Star Trekker (Complete 5 long distance jobs); Cargo Cowboy (Complete every type of freight job); Skills to Pay Bills (Unlock 10 Certifications); Fully Certified (Unlock All Certifications); Hot Patch (Unlock the Solar Provinces); Spark Central (Unlock the Mineral Colonies ); Outer Wilds (Unlock the Enigma Territories); Station Hopper (Explore 8 sectors); Warp Jockey (Explore 16 sectors); Cosmic Cartographer (Explore 32 Sectors)."
            ]
        },
        {
            "heading": "Secrets & Upgrades",
            "body": [
                "The five hidden achievements (a suitless airlock ejection, $50,000 of contraband, $25,000 in fines, 12:09 of EVA time, all golden traffic cones), fully upgrading a single truck component and then all of them, and completing a freight job without leaving the first-person camera.",
                "The achievements here: Human Popsicle (Eject from the airlock without wearing your spacesuit.); Rogue Trader (Sell $50,000 worth of contraband.); Violation Virtuoso (Rack up $25,000 in traffic fines and deductions.); My Favourite (Fully Upgrade a single truck component); Max Power (Fully Upgrade all truck components); Void Walker (Spend a cumulative 12 minutes and 9 seconds on EVA (spacewalking).); Eyes on the Road (Complete a freight job without switching to a 3rd person camera); Cone Connoisseur (Dislodge all of the hidden golden traffic cones.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play your career, taking jobs from every corporation and every job type as they come up.",
                "2. Do the five story side-job chains (Barrow, Moon Baby, Dusty Bear, Red Eddie & Sour Candy, G-Bee).",
                "3. Unlock all three regions and explore 32 sectors, hunting golden cones as you go.",
                "4. Grind the income and mileage totals, and unlock every certification.",
                "5. Fully upgrade the truck, and mop up the remaining hidden achievements (suitless ejection, EVA time).",
                "Tip: 'Eyes on the Road' (a full freight job in first person only) is easiest on a short, straight valuable-load run - pick a single-sector delivery so you are not tempted to switch to the external camera for docking."
            ]
        }
    ]
};
