// Endless Space 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/endless-space-2.json), whose 115 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   392110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "endless-space-2-achievement-guide",
    "category": "game",
    "gameSlug": "endless-space-2",
    "icon": "🌌",
    "title": "Endless Space 2 Achievement Guide",
    "summary": "A practical guide to all 115 Steam achievements in Endless Space 2 - none are hidden. Covers faction-specific quests and feats, exploration and economy milestones, heroes and technology progress, every victory condition and faction, and the Vaulters, Hissho, Umbral Choir, and Nakalim DLC content.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Endless Space 2 has 115 Steam achievements and none are hidden. The base game's list is built around each of the eight core factions' unique lore quests and signature mechanics (Horatio gene-splicing, Craver planet-depletion, Lumeris Dust trading, Riftborn alliances, Sophon research bonuses, Unfallen Vines, United Empire Carriers, Vodyani Essence and Arks), general exploration and empire-economy milestones (galaxy exploration, Dust income, resource production, Hero leveling, technology quadrants), and every one of the game's distinct victory conditions (Conquest, Science, Score, Supremacy, Wonder, Economic, elimination) achieved with every faction. The Vaulters, Hissho, Umbral Choir, and Nakalim DLC each add their own faction-specific lore quests and signature-mechanic achievements.",
                "Nothing is missable across playthroughs - every faction quest, victory type, and empire-economy milestone can be pursued in any future game, and several (Dust totals, turns played) explicitly track cumulative progress \"across any number of playthroughs.\" The genuine long pole is winning with every one of the base game's eight factions plus the four DLC factions across every victory type, since that realistically needs a dozen or more full campaigns.",
                "Tip: plan each playthrough around one faction's signature achievements rather than chasing generic milestones - since Endless Space 2's factions play very differently from each other (the Cravers deliberately deplete planets, the Vodyani have no home planet at all), trying to force a Craver-style economy achievement while playing Vodyani will fight the faction's whole design."
            ]
        },
        {
            "heading": "Faction-Specific Feats",
            "body": [
                "Signature achievements for each base faction: Horatio home-invasion and gene-splicing, Craver planet-depletion, Lumeris outpost sales and Dust-fueled elections, Riftborn alliances and Fold Singularities, Sophon minor-civ assimilation and research bonuses, Unfallen Vine expansion, United Empire Carrier tech and Core Cracker strikes, and Vodyani Ark combat and Essence leeching.",
                "The achievements here: Ctrl + Alt + Delete (Win the Academy Quest on the Rejuvenator side); Sins of the Fathers (Win the Academy Quest on the Defender side); There Can Be Only Me (As Horatio, invade the home system of another Horatio player); All for One… (As Horatio, splice the genes of at least 6 populations in a single game); The Eighth Plague (As the Cravers, fully deplete all the planets of 3 systems you captured from your opponents); Dust. Powerful Stuff. (As the Lumeris, sell 3 of your outposts in a single game); Buying Elections (As the Lumeris, use Dust to help the Pacifist party three times during elections in a single game); Through the Looking Glass (As the Riftborn, form an Alliance with 3 non-Riftborn empires); 88 MPH!!! (As the Riftborn, use a Fold Singularity to keep a fleet moving after warping through a Wormhole); Yin and Yang (As the Sophons, assimilate the Mavros minor civilization by assisting them through a Quest ); Sophon'd Of Science (As the Sophons, research 10 technologies with a 50% Omniscience bonus in a single game); Galaxy2Gether (As the Unfallen, assimilate the Eyder minor civilization into your empire); Tree Huggers (As the Unfallen, extend Vines to 5 systems of an empire with whom you have signed a Peace agreement); By Your Command (As the United Empire use your influence to research Liquid Composites and buy a Carrier ship in the same turn); The Empire's Death Star (As the United Empire, destroy a Terran planet by firing a Carrier's Core Cracker); Endleus Vult! (As the Vodyani, destroy another Vodyani's Ark and recover the wreck for yourself); By Our Grace You Were Elevated (As the Vodyani, leech at least 500 Essence in one turn)."
            ]
        },
        {
            "heading": "Exploration, Lore & Economy",
            "body": [
                "Exploring the whole galaxy, colonizing every planet type, completing every faction's lore quest, controlling a trade route to Auriga, discovering the Academy, cumulative Dust milestones up to 4 million, high-output production systems, stockpiled strategic resources, leveled-up Trade Companies, multi-law governments, and high-Influence systems.",
                "The achievements here: The Final Frontier (Be the first to explore 100% of the Galaxy); Home Is Where the Heart Is (Colonize one of each type of planet in one game - by C0ldSn4p); Loremeister (Complete all the base game faction lore quests (Sophon, Cravers, Vodyani, Lumeris, United Empire, Horatio, Riftborn and Unfallen)); Virtually Endless (Complete the Cravers faction lore quest); The Other Clone Wars (Complete the Horatio faction lore quest); Don’t Ever Take Sides Against the Family Again (Complete the Lumeris faction lore quest); What If There Is No Tomorrow? (Complete the Riftborn faction lore quest); The Cake Was Delicious (Complete the Sophons faction lore quest); Branching Out (Complete the Unfallen faction lore quest); Absolute Power (Complete the United Empire faction lore quest); Am I My Brother's Keeper? (Complete the Vodyani faction lore quest); Aurigan Trail (Control a trade route leading from your starting star system to the system containing the legendary planet Auriga - by Ishmishmish); Back to School (Discover the Academy with a Hero-led fleet); A Small Loan of a Million Dust (Gain 1  000 000  Dust, across any number of playthroughs); Scrooge McDust (Gain 2  000 000  Dust, across any number of playthroughs); King Midust (Gain 4  000 000  Dust, across any number of playthroughs); Cash Cow (Have 1 system which produces more than 1 000 Dust); Harvester (Have 1 system which produces more than 1 000 Food); Massively Massive Mass Production (Have 1 system which produces more than 1 000 Industry); Labs and Fabs (Have 1 system which produces more than 1 000 Science); Strategically Loaded (Have 100 of each strategic resource); We Hit Pay Dust! (Have 3 Trade Companies that are level 7 or higher); Vive la Révolution ! (Have four laws active at the same time in a game where you've changed your government type and leading party at least once); Corridors of Power (Have one system which produces more than 500 Influence); Friends With Benefits (Have three mutually beneficial agreements active at the same time between you and another empire)."
            ]
        },
        {
            "heading": "Heroes, Playtime & Technology",
            "body": [
                "Leveling a Hero to 10 and then 20, cumulative turns played up to 10,000, unlocking a full technology quadrant (Economy and Trade, Empire Development, Military, Science and Exploration), Unfallen Vine invasions, and a Privateer attack on an ally.",
                "The achievements here: Getting Schooled (Level up a Hero to level 10); Graduation Day (Level up a Hero to level 20); Heroic Patience (Play for 1,000 turns, across any number of playthroughs); Endless Gamer (Play for 10,000 turns, across any number of playthroughs); Ad Astra! (Play for 300 turns, across any number of playthroughs); Cornering the Market (Unlock the whole Economy and Trade technology quadrant in a single game); Stellar Utopia (Unlock the whole Empire Development technology quadrant in a single game); The Art of War (Unlock the whole Military technology quadrant in a single game); Brains Over Brawn (Unlock the whole Science and Exploration technology quadrant in a single game); The Root of the Problem (In a single game, invade 5 enemy systems benefiting from being entwined with Unfallen Vines and un-entwine them); Et Tu, Brute? (Use Privateers to secretly attack a fleet or a system belonging to a member of your Alliance)."
            ]
        },
        {
            "heading": "Victory Conditions",
            "body": [
                "Every victory type - Conquest, Science, Score, Supremacy, Wonder, Economic, and full elimination - plus winning with a Custom Faction and with each of the eight base factions (Horatio, Cravers, Lumeris, Riftborn, Sophons, Unfallen, United Empire, Vodyani).",
                "The achievements here: The Unstoppable Force (Win a Conquest Victory); I'll Bite Your Legs Off! (Win a game never winning a battle - by Kweel_Nakashyn); Dice with the Universe (Win a Science Victory); Numbers. They Don't Lie. (Win a Score Victory); Bow Before Me! (Win a Supremacy Victory); Feel the Glory (Win a Wonder Victory); Maybe It Does Buy Happiness (Win an Economic Victory); I Am the Eternal End (Win by eliminating all the other empires); I Did It My Way! (Win with a Custom Faction); They Saw Madness - I Found Genius (Win with Horatio); Still Hungry (Win with the Cravers); I Know the Families (Win with the Lumeris); Order and Balance (Win with the Riftborn); They Have Always Been First (Win with the Sophons); It Will Not End with Fire (Win with the Unfallen); Whatever the Cost, Whatever the Effort (Win with the United Empire); We Will See The Heretic Drown in His Blasphemies (Win with the Vodyani)."
            ]
        },
        {
            "heading": "Difficulty Ladder & Vaulters DLC",
            "body": [
                "Winning against AI from Sandbox through Endless difficulty, the Vaulters faction lore quest and victory, Vaulter-specific Fleet teleportation and OPBOT governorship, minor-faction assimilation by invasion, destroying Pirate Lairs, hijacking a Pirate Ship, buying Pirate Marks, and unlocking the Endless archivist.",
                "The achievements here: Baby Steps (Win a game in Sandbox or higher difficulty against AI); Training Wheels (Win a game in Easy or higher difficulty against AI); Just Warming Up (Win a game in Normal or higher difficulty against AI); Strove, Sought, Found, Did Not Yield (Win a game in Hard or higher difficulty against AI); Barely Broke a Sweat (Win a game in Serious or higher difficulty against AI); Piece of (True) Cake (Win a game in Impossible or higher difficulty against AI); The Learner Is Now the Master (Win a game in Endless difficulty against AI);  Lost and Found (Complete the Vaulters faction lore quest); My People, the Vaulters (Win with the Vaulters); Roach Control (As the Vaulters, teleport a Fleet of 7 CP (or more) to a Pirate Lair); Cogito Argosy (As the Vaulters, colonize Auriga and assign OPBOT as its System Governor); No Mercy (Assimilate the Sisters of Mercy minor faction by invading their system); Stop Right There, Criminal Scum! (Destroy 4 Pirate Lairs in a single game); I'm the Captain Now (Use Boarding Pods to hijack a Pirate Ship); I've Got a Jar of Dust (Buy 5 Pirate Marks in a single game); Endless Day (You have unlocked the Endless archivist; the being that watches the watchers…)."
            ]
        },
        {
            "heading": "Hissho, Umbral Choir & Nakalim DLC",
            "body": [
                "The three later DLC factions' content: Hissho honor mechanics and victory, owning the game's biggest ships at once, Umbral Choir stealth and Sanctuary achievements, Home system displacement, Bandwidth and Sleeper mechanics, hacking, and Nakalim Relic-gathering, Academy role and reparation achievements, and taking the Academy's Home System by force.",
                "The achievements here: For Honor (Win as the Hisshos); Semper Fidelis (Complete the Hissho faction lore quest); Perfect Warriors (Have the 4 honorable actions active at once); Are You Entertained? (As a Hissho, destroy at least 20 CP in less than one phase of space battle); Eternal Glory (Win with the Hissho without having ever been under 50% Keii); We Spared No Expense (Own 1 Obliterator, 1 Juggernaut and 1 Citadel at once); Is It Overheating Yet? (Fire one single Obliterator twice in the same turn); I Smell Burning Redsang (Win a game without ever capturing a system after a successful ground battle); Not a Scratch (Use a Behemoth to reassemble all the planets in a system destroyed by an Obliterator or Core cracker); To the Death (Destroy an enemy Behemoth with a fleet containing a Juggernaut); Umbral Wisdom (Complete the Umbral Choir faction quest); The Spider (Own at least 1 Sanctuary in 5 opponent Empires); Rapture (Abduct the entire population of an enemy star system); Wanderlust (Displace your Home system to each different Special node type in the Galaxy); I need to mine (Reach 100 Bandwidth); It's treason, then (Have one of your planets be empty after using the \"Raid\" action); The seed is strong (Have an enemy system filled with 5 Sleepers you own); Thank god they use USB too (Hack an enemy Home System without passing or starting through any node you own); Predator (Destroy 3 enemy fleets of at least 4 CP with the same invisible fleet); Rule from the Shadows (Win as the Umbral choir); So Shall It Be (Win as Nakalim); Prophetic Perfection (Complete the Nakalim faction quest); Righteous Reliquary (As a Nakalim gather 50 Relics through a match); Acade-me (Roles collector - Became all 4 Roles of the Academy in a single match); Not For Profit (As Master of Dust, gift 15000 amount of Dust in a single match); Shared Vision (Galaxy Academization- As a Nakalim help the Academy control over half of a huge galaxy); Laying Down the Law (Spear of Isyander - Destroy an enemy Fleet of at least 20 CP with the Academy attack Master Fleet); Making Amends (Lots of reparation - Accumulate 20000 amount of reparations to the Academy, and then get a clean slate); Academic Pursuits (Take control of the Academy's Home System by force)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a game with each base faction (Horatio, Cravers, Lumeris, Riftborn, Sophons, Unfallen, United Empire, Vodyani), completing that faction's lore quest and its signature-mechanic achievement while you are already leaning into that faction's natural playstyle.",
                "2. Along the way, chase general exploration and economy milestones: exploring 100% of the galaxy, colonizing every planet type, unlocking the four technology quadrants, leveling Heroes, and building up production, Dust, and Influence.",
                "3. Deliberately pursue each victory condition (Conquest, Science, Score, Supremacy, Wonder, Economic, and full elimination) across different games, ideally pairing each victory type with the faction best suited to it.",
                "4. Climb the AI difficulty ladder from Sandbox through Endless, winning at each successive tier.",
                "5. If you own the DLC, work through the Vaulters, Hissho, Umbral Choir, and Nakalim content the same way - their own lore quests, signature mechanics, and faction victories.",
                "Tip: Loremeister (complete all 8 base-game faction lore quests) is the natural capstone of playing through every faction once for their individual quest achievements - track which lore quests you have finished as you go rather than trying to remember at the end."
            ]
        }
    ]
};
