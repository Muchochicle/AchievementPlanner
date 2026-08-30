// Going Medieval Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/going-medieval.json), whose 94 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1029780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "going-medieval-achievement-guide",
    "category": "game",
    "gameSlug": "going-medieval",
    "icon": "🏰",
    "title": "Going Medieval Achievement Guide",
    "summary": "A practical guide to all 94 Steam achievements in Going Medieval - 1 are hidden. Covers early survival and research milestones, hunting and taming every animal, combat and Grand Objectives, and room-building and endgame progression.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Going Medieval has 94 Steam achievements, and 1 is hidden. The list covers the early survival loop (first harvest, first meal, first raid survived, a full year survived), research and food-storage milestones, a very thorough hunting-and-taming set for every animal in the game (deer, hare, wolf, boar, pheasant, mallard, fox, rat, water vole, plus polecat and bear for taming only), combat and exploration (bandit camps, loot stashes, enemy settlements, prisoners), the game's five visible Grand Objectives (one for each victory path) plus a sixth Infamy-track Grand Objective that ships hidden, and endgame room-building and settlement-management achievements.",
                "Nothing is missable - every count-based achievement (hunts, tames, research, resources stored) is a permanent save-file stat, and the Grand Objectives stay completable at your own pace since Going Medieval has no fail state beyond your settlement's survival. The genuine long pole is the full hunting-and-taming set, since it needs you to specifically track down and interact with every animal type the game offers rather than just the ones near your settlement.",
                "Tip: Grand Objectives are mutually exclusive within a single settlement (choosing Redemption locks out Natural Order, for example) - if you want more than one Grand Objective achievement, including the hidden Infamy one, you need multiple separate settlements rather than trying to complete several paths in one save."
            ]
        },
        {
            "heading": "Early Survival & Core Loop",
            "body": [
                "The opening milestones: harvesting your first 5 crops, cooking a meal at a campfire, storing 20,000 Nutrition, unlocking research items, building a wooden beam and an enclosed room, killing a raider, and surviving the first day, week, raid, summer, autumn, winter, and a full year.",
                "The achievements here: Having A Field Day (Harvest 5 Crops); Green Thumb (Harvest 200 Crops); Home Cooked Meal (Produce a Meal at a Campfire); Fit For A King (Store 20,000 Nutrition); Novice Researcher (Unlock First Research Item); Onward (Unlock 3x Research Items); Beam Me Up (Build a Wooden Beam); Get A Room (Build an Enclosed Room); Retribution (Kill a Raider); The First Day (Survive the First Day); The First Week (Survive for Seven Days); ...And Don’t Come Back! (Survive the First Raid); Heating Up (Survive Until the First Summer); Winter Is Coming (Survive Until the First Autumn); Winter Is Here (Survive Until the First Winter); All Year Round (Survive a Full Year)."
            ]
        },
        {
            "heading": "Growth & Research",
            "body": [
                "Gathering 10 settlers, dismantling 50 items, harvesting 50 crops, storing 5,000 and 10,000 Nutrition, and unlocking 5, 10, and 25 research items.",
                "The achievements here: A Party Now (Gather 10x Settlers); Nothing Wasted (Dismantle 50x items); Reap What You Sow  (Harvest 50 Crops); Putting Food on the Table (Store 5000 Nutrition); Feast or Famine (Store 10,000 Nutrition); Studious Researcher (Unlock 5x Research Items); Adept Researcher (Unlock 10x Research Items); Luminary Researcher (Unlock 25x Research Items)."
            ]
        },
        {
            "heading": "Hunting",
            "body": [
                "The full hunting ladder at 5x and 20x tiers for deer, hares, wolves, boar, pheasant, mallard, fox, rat, and water vole, plus dismantling 5 items.",
                "The achievements here: Oh Deer! (Hunt 5x Deer); Deerly Departed (Hunt 20x Deer); Food Chain (Hunt 5x Hares); Wabbit Season (Hunt 20x Hares); Don't Cry Wolf (Hunt 5x Wolves); Where Wolf? (Hunt 20x Wolves); Disassembled (Dismantle 5x Items); In Hog Heaven (Hunt 5x Boar); Fowl Play (Hunt 5x Pheasant); Duck, Duck, Juice (Hunt 5x Mallard); Outfoxed (Hunt 5x Fox); Squeak & Destroy (Hunt 5x Rat); Holey Voleys (Hunt 5x Water vole); Boar and Peace (Hunt 20x Boar); Most Unpheasant (Hunt 20x Pheasant); Quacktical Strike (Hunt 20x Mallard); Zero Fox Given (Hunt 20x Fox); Rat-astrophe (Hunt 20x Rat); Varmint Violence (Hunt 20x Water vole)."
            ]
        },
        {
            "heading": "Taming",
            "body": [
                "Taming one of every tameable animal: deer, hare, wolf, boar, pheasant, mallard, fox, rat, water vole, polecat, and bear.",
                "The achievements here: For Deer Life (Tame a deer); Good Hare Day (Tame a hare); Man's Best Friend (Tame a wolf); Swine & Dine (Tame a boar); Feathered Friend (Tame a pheasant); Lucky Duck (Tame a mallard); Orange Crush (Tame a fox); The Rat Pack (Tame a rat); Vole in One (Tame a water vole); Tiny Treaty (Tame a polecat); Bear With Me (Tame a bear)."
            ]
        },
        {
            "heading": "Combat, Fishing & Events",
            "body": [
                "Defeating a bandit camp and an enemy settlement, exploring a loot stash, fishing at 5/20/50 tiers, hosting an unforgettable feast, sermon, ritual, study group, and martial training event, and taking 1 and 5 prisoners.",
                "The achievements here: Den of Thieves (Defeat a Bandit camp); Finders Keepers (Explore a Loot stash); Victorious! (Defeat an Enemy settlement); Casting Call (Fish x5 Fish); Reel Skills (Fish x20 Fish); Fifty Shades of Bait (Fish x50 Fish); Feast Mode (Have a Unforgettable Feast); Praise Be (Have a Unforgettable Eucharist Event); Blessed Be (Have a Unforgettable Ritual); Eureka! (Have a Unforgettable Study Group Event); Know Thy Enemy (Have a Unforgettable Martial Training Event ); Throw Away the Key (Take a Prisoner); Jailhouse Rock (Take 5x prisoners)."
            ]
        },
        {
            "heading": "Grand Objectives",
            "body": [
                "The five visible victory-path Grand Objectives: Centre Of Pilgrimage (Redemption), Pagan Sanctuary (Natural Order), New University (Mind Over Matter), Charter Fair (Market Mastery), and Protector of the Realm (The Art of War).",
                "The achievements here: Redemption (Complete Centre Of Pilgrimage); Natural Order (Complete Pagan Sanctuary); Mind Over Matter (Complete New University); Market Mastery (Complete Charter Fair); The Art of War (Complete Protector of the Realm)."
            ]
        },
        {
            "heading": "Rooms & Endgame",
            "body": [
                "Constructing a Great Hall, Kitchen, Workshop, Library, a Restitutionist Chapel, an Oak Brethren Chapel, and a Medical Room, leveling settlers 100 times, recruiting 1 and 5 prisoners, staffing 5 settler roles, crafting weapons and art, producing a Human Trophy, reaching 100% Infamy, killing enemies with a trebuchet, drawbridge, and portcullis, sending 1 and 10 caravans, and fending off an ambush.",
                "The achievements here: The Greatest (Construct a Great Hall); Kitchen Impossible (Construct a Kitchen); Hammer Time (Construct a Workshop); Shhh... (Construct a Library); House of the Holy (Construct a Restitutionist Chapel); Temple of Timber (Construct a Oak Brethren Chapel); What's Up, Doc? (Construct a Medical Room); Experiential (Level up your settlers 100 times); Bury the Hatchet (Recruit a Prisoner); Conversion (Recruit 5x Prisoners); Full House (Have x5 settlers with roles in one settlement); Forging Ahead (Craft x10 weapons); Fine Art (Craft x5 works of art); Memento Mori (Produce Human Trophy); Absolute Villainy (Reach 100% Infamy); Heavy Artillery (Kill an enemy with a trebuchet); Bridge Too Far (Kill an enemy with a Drawbridge); Gate Expectations (Kill an enemy with a Portcullis ); Go Forth (Send out a caravan); Beyond Our Borders (Send out 10x caravans); Not Today (Fend off an ambush)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "Going Medieval's one hidden achievement is the Infamy-track Grand Objective, sourced from community guides (GameFAQs, TrueAchievements):",
                "No Rest for the Wicked: Complete the \"Tyrant Overlord\" Grand Objective - the Infamy-track counterpart to the game's five visible Grand Objectives (Centre Of Pilgrimage, Pagan Sanctuary, New University, Charter Fair, Protector of the Realm). It runs alongside building up your settlement's Infamy stat rather than a virtuous or neutral path."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Survive your first day, first week, first raid, and the first full year, harvesting crops and cooking meals as you establish your settlement.",
                "2. Push early research and storage milestones (research items unlocked, nutrition stored) and build your first enclosed room and wooden beams.",
                "3. Work through the hunting ladder for every animal (5x and 20x tiers for deer, hare, wolf, boar, pheasant, mallard, fox, rat, water vole) and the taming set (the same animals plus polecat and bear).",
                "4. Handle combat and exploration - defeat a bandit camp, explore a loot stash, defeat an enemy settlement, take and recruit prisoners - and fish and host settlement events (feasts, sermons, rituals, study groups, martial training) along the way.",
                "5. Choose one Grand Objective per settlement and build the rooms and infrastructure it needs (Great Hall, Kitchen, Workshop, Library, chapels, Medical Room), then push endgame achievements: worker skill-ups, crafted weapons/art, caravans sent, and fending off an ambush with siege defenses.",
                "Tip: the hidden achievement (No Rest for the Wicked) needs the \"Tyrant Overlord\" Grand Objective specifically, tied to the Infamy stat - if you are aiming for it, deliberately build toward high Infamy (also needed for the separate visible Absolute Villainy achievement at 100% Infamy) rather than a peaceful playthrough."
            ]
        }
    ]
};
