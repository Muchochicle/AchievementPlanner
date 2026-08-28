// Bloons TD 6 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bloons-td-6.json), whose 156 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   960090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 144 of 156 ship a real,
//   official Steam description, quoted verbatim below.
// - The 12 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against the Bloons
//   Wiki, Blooncyclopedia and community secret-achievement guides.
// - With 156 achievements the sections list the 144 non-hidden ones in
//   four parts (schema order, which is roughly chronological by update)
//   plus a dedicated Hidden Achievements section.
export const GUIDE = {
    "slug": "bloons-td-6-achievement-guide",
    "category": "game",
    "gameSlug": "bloons-td-6",
    "icon": "🎈",
    "title": "Bloons TD 6 Achievement Guide",
    "summary": "A practical guide to all 156 Steam achievements in Bloons TD 6 - the pop-count and MOAB-class milestones, the map / difficulty / mode wins (CHIMPS, Impoppable, Deflation, Apopalypse, Co-op, Races, Odysseys), the tower, hero and Monkey Knowledge feats, the boss and Paragon achievements, and the 12 hidden achievements (covered with spoiler-light conditions).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bloons TD 6 has 156 Steam achievements and 12 of them are hidden. Almost everything is a cumulative counter or a \"do X in a game\" feat, and the list has grown across dozens of updates, so it is a mix of pop counts, map and mode completions (CHIMPS, Impoppable, Deflation, Apopalypse, Co-op, Races, Odysseys), tower/hero/Monkey Knowledge milestones, and the boss and Paragon endgame.",
                "Nothing is missable - progress persists and every mode is always available - but a full completion is a very long game: the CHIMPS map counts, the 100 Daily Challenges, the 365 daily chests, the Paragon degree-100 and the 50/100 Odysseys are all major grinds.",
                "This guide lists all 144 non-hidden achievements in four parts, then the 12 hidden ones. Within a part there is no strict order.",
                "Tip: pick easy maps and lean towers you are comfortable with, and grind CHIMPS wins there - CHIMPS wins feed Bloons Master, Superior/Ultimate Bloons Master, the pop counters, the upgrade counter and the Monkey Team wins all at once. Everything else layers on top of a CHIMPS grind."
            ]
        },
        {
            "heading": "Achievements (Part 1)",
            "body": [
                "The achievements here: Impoppable (Pop 100,000,000 bloons); MOAB Assassin (Destroy 25,000 MOABs); BFB Brawler (Destroy 10,000 BFBs); ZOMGinator (Destroy 5,000 ZOMGs); Me Did A Job On DDT (Destroy 5,000 DDTs); Sapper (Pop 5,000,000 Fortified bloons); First Win (1 Non-Tutorial Beginner map Win); Grasshopper (Wins on 9 different Beginner maps); Next Level (Win 1 game on an Intermediate map ); Acolyte (Win games on 5 different Intermediate maps); Advanced Player (Win 1 game on an Advanced map ); Big Monkey (Deploy a tier 4 monkey tower); Mega Monkey (Deploy a tier 5 monkey tower); Hero Time (Deploy a Hero on a non-tutorial map); Hero Powers Activate (Use any Hero Level 3 Ability); Bigger, Badder (Use any Hero Level 10 Ability); Epic Hero (Level any Hero to level 20); Monkey Avenger League (Win a game for 4 different Heroes); You've Got The Power (Use Powers for the first time); Power User (Use Powers 25 times); Empowered (Use Powers 100 times); Student (Apply your first Monkey Knowledge point); Scholar (Apply 10 Monkey Knowledge points); Knowledgeable Primate (Unlock all Monkey Knowledge in one branch); Dr. Monkey (Spend 106 Monkey Knowledge points); First Monkeys First (Win 10 games using only Primary monkeys); War Monkeys (Win 10 games using only Military monkeys); Abracadabmonkey (Win 10 games using only Magic monkeys); Unsung Monkeys (Win 10 games using only Support monkeys); Inflated (Beat round 100 in Deflation mode); Survivor (Beat round 100 in Apopalypse mode); Indie (Win 25 games with Alternate Bloon Rounds); Poppable (Win 25 games on Impoppable Difficulty); Thrifty (Win 10 games in Half Cash mode); Bloonzilla! (Win 25 games against Double HP MOABs); Role Reverser (Win a game in Reverse mode)."
            ]
        },
        {
            "heading": "Achievements (Part 2)",
            "body": [
                "The achievements here: Medal Winner (Get all medals for a map); Decorated Hero (Get 36 medals on Beginner maps); Red And Blue Makes... (Pop 100,000 Purple bloons); Infrared (Pop 250,000 Camo bloons); Our Powers Combined (Collect at least 12 different Powers); Challenger (Win 1 Daily Challenge); Challenge Apprentice (Win 10 Daily Challenges); Challenge Master (Win 100 Daily Challenges); Perfect Week (Complete all Daily Challenges in a week); Bloons Master (Beat 1 map in CHIMPS mode); Superior Bloons Master (Beat 5 maps in CHIMPS mode); Ultimate Bloons Master (Beat 15 maps in CHIMPS mode); Super BAD (Destroy 1,000 BADs); Co-operation (Beat 1 map in Co-op mode); Four times the fun (Beat 1 map in 4-player Co-op mode); Triple threat (Beat 1 map in 3-player Co-op mode); Collaborate! (Have 4 Heroes on screen at once); When the going gets tough... (Win 10 games on Hard difficulty in Co-op mode); Kind Benefactor (Give 10,000 Cash in Co-op mode); Generous Benefactor (Give 50,000 Cash in Co-op mode); Monkey Contributor (Give 100,000 Cash in Co-op mode); Monkey Philanthropist (Give 1,000,000 Cash in Co-op mode); Powershare (Use 10 Powers in Co-op mode); Power overwhelming! (Use 100 Powers in Co-op mode); Insta-defense (Use 5 Insta-Monkeys in Co-op mode); Co-op Popper (Pop 10,000,000 Bloons in Co-op mode); 2TC (Complete a game in CHIMPS Difficulty with only 2 towers); Snap of your fingers (Finish a game with exactly half your starting lives and half your starting cash); Bill Greates (Send $500,000 to an ally in co-op in one go); Bloontona 500 (Gain entry to 500 Races); Rookie of the year (Complete a Race in under 10 minutes); Rising star (Complete a Race in under 5 minutes); Top of your game (Complete any Race in under 3 minutes); The greatest challenge (Create or Play 200 Challenges); Lookin fab (Win 100 games using a skin of any Hero); Therpopylae (Pop 200,000 Bloons on Peninsula)."
            ]
        },
        {
            "heading": "Achievements (Part 3)",
            "body": [
                "The achievements here: Bloon Master Populous (Deal 1 billion damage with the Bloon Master Alchemist); I see you (Reveal 10,000 Bloons using Shimmer); Tetrimino (Place 50 Monkeys on a map at once); All for one and one for one (Win a game with only 1 Monkey on screen at any one time in any Hard Difficulty game); Master of Life (Have 1000 lives at once in a single game); Rainbow is Magic (Pop 20,000 Rainbow Bloons with Magic Monkeys); What did it cost? - Everything: (Sacrifice every tower type in the game to the Temple); 2 MegaPops (Complete a game of CHIMPS with more than 2 million damage dealt by one tower); A Crate Time (Open a Diamond Crate in any Collection Event); Axis of Havoc (Have one of each T5 sniper in one game of CHIMPS); Tower Keeper (Have 200 insta-monkeys in your inventory at one time); A year in the making (Open the Daily Chest 365 times); Kali Maaaaaaaa (Gain 10 levels for Adora in one round); Adventurer (Complete an Odyssey); Seasoned Adventurer (Complete a Hard Odyssey); No Stone Left Unturned (Complete all 3 difficulties of a single Odyssey); 12 Tasks of Monk-ules (Complete 12 different Odysseys); Modysseus Rises (Complete 50 Odysseys); Modysseus Forever (Complete 100 Odysseys); Full Speed Ahead! (Complete an Odyssey in under 1 hour); All About That Bling (Purchase a Trophy Store item); Oathbreakers (Reanimate 250,000 bloons to fight on your side using the Necromancer Wizard); Living on the Edge (Win any non-CHIMPS/Impoppable game with only 1 life remaining); Freaky Friday (Use the Alchemist's Transforming Tonic abilities 100 times); Monkey Fan Club (Create or Login to your Ninja Kiwi account to cloud save your progress); Ready Player One? (Host and win 10 Co-op games); Crash of the Titans (Strip the fortifications from Fortified DDTs 3000 times); A La Code (Submit a Challenge to the Challenge Browser); Regifted (Pop 1,000,000 Bloons with Dartling Gunners); Coupon Crazy (Spend at least 50 Trophies in the Trophy Store); Instant Gratification (Use a Tier 5 Insta Monkey. NOTE: even after being used, Instas still count toward your collection!); Insta Century (Use 100 Insta Monkeys); Limited Run (Purchase at least 1 new Limited Time item in the Trophy Store); Tools to Darwin (Upgrade towers 20,000 times); Achievement of Achievements (Collect 35 achievements); Hook, Line, and Sinker (Rope in 3,000 MOAB-Class Bloons using the MOAB takedown ability)."
            ]
        },
        {
            "heading": "Achievements (Part 4)",
            "body": [
                "The achievements here: Moving House (Redeploy 1,000 monkey towers using the Support Chinook); Social Butterfly (Use emotes 100 times in co-op games); So Shiny! (Pop 20 Golden Bloons); Glittering Gold (Pop 100 Golden Bloons); Glorious Gold (Pop 500 Golden Bloons); Magical Gold (Pop 50 Golden Bloons in Magic Monkeys only mode); Team Player (Win 25 times with Monkey Teams); Team Captain (Win 50 times with Monkey Teams); Ultimate Team-up (Win 100 times with Monkey Teams); What is this new Bloonery? (Defeat a Tier 1 Boss); Who's the Boss? (Defeat a Tier 5 Boss); I'm the Boss (Defeat a Tier 5 Elite Boss); Apotheosis (Upgrade to a Monkey Paragon Tower); Like a Boss (Pop 50 Boss Bloons); Davids vs Goliath (Win a boss battle without using a Hero); So Spiiicey Ninja Kiwi (Beat Spice Islands on Alternate Bloon Rounds with only land towers); No Harvest (Beat Cornfield on CHIMPs without removing any corn); Student Loans (4 x 10^5 (Go into $400,000 of debt)); Sticky Situation (Glue 500,000 Bloons); Big Spender (Spend 1,000,000 cash in one round); The Daily Reid (Win 365 unique daily challenges); I'll Be Back (Spend 1,000 MM on Continues or Checkpoints); Conquested Territory (Capture 5 tiles off other players); Stage of Empires (Capture 50 tiles); Territory Sampler (Capture 1 of each: Boss, Time Attack, Least Tiers and Least Cash tiles); Invigoration (Have 75 buffs active on your Monkeys at once); Side Quest (Complete a Quest); World League Training (Acquire 150,000 Beast Handler XP); Life Experience (Earn 5,368,709 experience for any tower); Heavy Investment (Invest at least $401,626 extra when creating any Paragon); 25 to Life (Defeat 5 unique Bosses at Tier 5 (Can be in Boss Event or Challenge Mode)); Community Connoisseur (Win 100 different community submissions (Challenges, Odysseys, Maps)); First Steps (Complete the First Time Tutorial Quest); Season Starts (Achieve Tier 1 in any Stage in a Social Season); Mid Season (Earn 7,500 Stars in any Social Season); Season Champion (Earn a perfect 15,000 Stars in any Social Season)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Twelve achievements are hidden and ship no Steam description:",
                "The achievements here: Big Bloons (Win 10 games with the hero Pat Fusty.); Alchermistman and Bloonacleboy (Deal 900,000 damage with a Bloon Master Alchemist in a single game before round 100.); Strangely Adorable (Place a level-20 Adora inside the range of an Avatar of the Vengeful Monkey (Vengeful True Sun God).); Josh's Constant (Beat an Expert map on CHIMPS while spending $40,870 or more on a single Spike Factory.); Golden Ticket (During a Candy Falls event, tap the falling Monkey Loomps in the correct order, quickly.); Mo Heroes, Mo Problems (Complete an Odyssey without using any Heroes.); Chunky Monkeys (Win 10 games on Medium difficulty or higher using only large-footprint towers.); Stubborn Strategy (Win 100 games on maps with removable obstacles without removing any obstacle.); Perfect Paragon (Acquire a Degree 100 Paragon of any type.); Not Lacking Critical Information (Land 25,000 critical hits on bloons (across any number of games).); Nah, I'd Win (Complete Spa Pits on Hard difficulty (harder version activated) without Monkey Knowledge, Powers or continues.); They call me Cave Monkey! (Hit the Cave Monkey's frozen spot on Frozen Over with Mortar Monkeys 50,000 times.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign maps up through Advanced, then start grinding CHIMPS on easy maps - this feeds Bloons Master, the pop and MOAB-class counters, Tools to Darwin (20,000 upgrades) and the Monkey Team wins.",
                "2. Do the mode achievements as blocks: a Deflation and Apopalypse run to round 100, 25 Impoppable / Alternate-Bloon-Rounds / Double-HP-MOAB wins, a Half Cash and a Reverse win.",
                "3. Do the Odyssey and Race achievements - Modysseus Forever (100 Odysseys) and the sub-3-minute Race are the long ones.",
                "4. Do the boss and Paragon achievements: the tier-1 through tier-5 Elite bosses, 50 Boss Bloons, a Monkey Paragon and (for the hidden Perfect Paragon) a Degree 100 Paragon.",
                "5. Mop up the daily/collection grinds (100 Daily Challenges, 365 daily chests, Trophy Store spends) and the specific tower feats, then the hidden achievements.",
                "Tip: Co-op counts for a huge fraction of the list (the Benefactor cash gifts, the shared pop counter, the hero-on-screen and power-use counters) - do a few long Co-op games with a friend and let the Co-op block clear itself."
            ]
        }
    ]
};
