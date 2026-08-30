// Wobbly Life Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wobbly-life.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1211020 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wobbly-life-achievement-guide",
    "category": "game",
    "gameSlug": "wobbly-life",
    "icon": "🎈",
    "title": "Wobbly Life Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in Wobbly Life - 9 are hidden. Covers the island's odd jobs, farm and construction work, museum collections and races, the Space DLC content, and the 9 hidden story and secret-mission achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wobbly Life has 68 Steam achievements, and 9 are hidden. The visible list covers completing the island's many odd jobs (pizza delivery, burger flipping, firefighting, taxi driving, ice cream, disco, fishing, and more), banking and collection milestones, races, museum collections, and - once unlocked - the Space DLC's own set of jobs, a spaceship race, and its own bank and collection milestones. The 9 hidden achievements are all tied to specific story missions and secret side content: a hidden Ghost Pet, an Ancient Trials sequence, a Jelly Car mission, and several other one-off story beats.",
                "Nothing is missable - every job, collection, and bank-balance achievement stays available across your whole save, and jobs can be replayed freely. The genuine long poles are the full-collection achievements (every present on Wobbly Island, every fish, every present in Space) since they need you to specifically track down every collectible location rather than just playing jobs casually.",
                "Tip: several hidden achievements are gated behind finding specific story content rather than difficulty - the Ancient Wobbly Trials, the Jelly Car, and the Lost Map's Bard's Treasure are all locations or side-quests you need to physically discover on the island, so exploring off the beaten path pays off more than grinding jobs for these particular ones."
            ]
        },
        {
            "heading": "Odd Jobs I",
            "body": [
                "The early job and economy block: completing the Jelly, Pizza, Burger, Power Plant, Emergency, Newspaper, and Furniture jobs, the Kart/Plane/Boat races, delivering pizza to the UFO, the Garbage job, completing the Temple, buying your first house, reaching $1000/$5000/$10000 in the bank, collecting all presents on Wobbly Island, and feeding the Monster 25 then 50 toxic barrels.",
                "The achievements here: A Wobbly Start (Complete Jelly Job); A Speedy Slice (Complete Pizza Job); Flipping The Perfect Burger (Complete Burger Job); Monster Manager (Complete Power Plant Job); Speedy Nee-Naw (Complete Emergency Job); Rapid Delivery To Your Door (Complete Newspaper Job); Creative Courier (Complete Furniture Job); Putting The Pedal To The Metal (Complete a Kart Race); Taking To The Skies! (Complete a Plane Race); Making Waves (Complete a Boat Race); A Supernatural Delivery (Deliver Pizza to the UFO); Cleaning Up The Island (Complete Garbage Job); Awesome Archaeologist (Complete the Temple); Making Grandma Proud (Buy your first house); Look At Me Grandma! (Have $1000 in the bank); High Roller (Have $5000 in the bank); There's A Big Spender In Wobbly Town (Have $10000 in the bank); Explorer Extraordinaire (Collect all presents on Wobbly Island); Powering The Whole Island (Feed the Monster 25 toxic barrels); Feeding Frenzy (Feed the Monster 50 toxic barrels)."
            ]
        },
        {
            "heading": "Odd Jobs II & Farm Life",
            "body": [
                "Farm and general jobs: the Plowing, Seeding, and Harvest Farm jobs, depositing Uranium into the Mining Machine, purchasing your first pet, winning the Wonderful Wobbly Quiz, the Fire Fighter and Woodcutter jobs, and the Science job.",
                "The achievements here: Plowing Ahead (Complete Plowing Farm Job); Growing Your Own (Complete Seeding Farm Job); Cream Of The Crop (Complete Harvest Farm Job); Mining The Glowy Green Ore (Deposit Uranium into the Mining Machine); Your New Best Friend (Purchasing First Pet); What A Clever Wobbly (Win the Wonderful Wobbly Quiz); You're My Wobbly Hero (Complete Fire Fighter Job); Lumber Legend (Complete Woodcutter job); Formula Frenzy (Complete Science Job)."
            ]
        },
        {
            "heading": "Museum, Fishing & Construction",
            "body": [
                "Completing your first Museum collection, the Taxi and Ice Cream jobs, the Disco job, the Fishing job and collecting every fish on the island, the Recycling, Construction, and Demolition jobs, the Weather job, and the Art Studio job.",
                "The achievements here: Recovering The Past (Complete your first Museum collection); Frantic Fares (Complete Taxi Job); A Sweet Day At Work (Complete Ice Cream Job); Dazzling On The Dance Floor (Complete Disco Job); Relentless Reeler (Complete Fishing Job); Marine Master (Collect every fish in Wobbly Island); The Rapid Recycler (Complete the Recycling Job); One Happy Hammerer (Complete the Construction Job); A Daring Demolition (Complete the Demolition Job); The Balloon Buster (Complete the Weather Job); My Best Work (Complete the Art Job)."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "Fixing the Weather Machine, returning the Sewer Queen's crown, and completing the full Wobbly Island Museum.",
                "The achievements here: Into The Storm (Fix the Weather Machine); Drain Diver (Return the Sewer Queens crown); Committed Collector (Complete the Museum)."
            ]
        },
        {
            "heading": "Space Jobs & Adventures",
            "body": [
                "The Space DLC content: the Asteroid Defence, Asteroid Mining, Space Disco, Ship Courier, Diner, Spaceship Mechanic, and Suitcase Delivery jobs, a Spaceship Race and Rescue job, going to Space itself, completing the Collector's Emporium museum, the Space Cadet, Garden, and Detective mission series, collecting all presents in Space, and reaching 5000 Space Credits.",
                "The achievements here: Proud Protector (Complete Asteroid Defence Job); Space Mine Specialist (Complete Asteroid Mining Job); Throwing Space Shapes (Complete Space Disco Job); No Delivery Too Far (Complete Space Courier Job); Wonderous Waiter (Complete Space Diner Job); Wrench Wizard (Complete Spaceship Mechanic Job); Rapid Rockets (Complete a Spaceship Race); Spaceship Saviour (Complete Spaceship Rescue Job); Luggage Lifter (Complete Suitcase Delivery Job); A New Frontier (Go To Space); Cosmic Collector (Complete The Collector's Emporium); Creative Cadet (Complete the Space Cadet Mission Series); Super Student (Complete the Space Garden Classes); Uncovering The Clues (Complete the Space Detective Missions); Galactic Gift Finder (Collect all the presents in Space); Hey Gran, I'm Space Rich! (Have 5000 Space Credits)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 9 of Wobbly Life's hidden achievements are tied to specific story missions and secret side content, sourced from community guides (TrueAchievements, the Wobbly Life Fandom wiki):",
                "A Deep Spooky Wobbly Secret: Unlock the Ghost Pet, a rare hidden pet found through the game's spookier side content.",
                "Helping The Wobbly That Time Forgot: Make the \"Choose Wisely\" decision at a specific story NPC encounter - the achievement is the reward for helping a Wobbly who has been forgotten by time.",
                "A Tiny Adventure: Complete the UFO storyline mission - build and finish the UFO to trigger this main-storyline secret achievement.",
                "Trivializing The Trials: Complete the Ancient Wobbly Trials, a multi-stage trial sequence hidden on the island.",
                "A Jelly Fueled Journey: Complete the Jelly Car mission - a dedicated vehicle-based side mission themed around the Jelly Job.",
                "One Big Sleep: Wake the Sleep King during the game's dream-themed story mission.",
                "Piecing It All Together: Find the Bard's Treasure by following the Lost Map mission's clues.",
                "Well That Was Weird: In the Space DLC, defeat the Space Crystal - the void boss encountered at the far end of the space content.",
                "Stealthy Sneaker: Disable the Robot Factory's alarm during its stealth-focused mission."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the island's early jobs (Jelly, Pizza, Burger, Power Plant, Emergency, Newspaper, Furniture) and the Kart/Plane/Boat races, buying your first house and pet along the way.",
                "2. Build up your bank balance toward $1000, $5000, and $10000, and start tracking down the island's collectibles - every present, and feeding the Monster 25 then 50 toxic barrels.",
                "3. Work through the remaining jobs (Farm, Mining, Quiz, Fire Fighter, Wood Cutter, Science, Taxi, Ice Cream, Disco, Fishing, Construction/Demolition/Recycling, Weather, Art Studio) and complete your first Museum collection.",
                "4. Look for the hidden story content as you explore: unlock the Ghost Pet, make the \"Choose Wisely\" decision, build and complete the UFO, find and complete the Ancient Wobbly Trials, complete the Jelly Car mission, wake the Sleep King, and find the Bard's Treasure via the Lost Map.",
                "5. Once you reach Space, work through its own job set, races, and collections, complete the Cadet/Garden/Detective mission series, build toward 5000 Space Credits, defeat the Space Crystal for the hidden Well That Was Weird achievement, and disable the Robot Factory alarm for the final hidden achievement.",
                "Tip: Collect every present, every fish, and every present in Space are each their own dedicated collectible hunts - use a completion checklist or community map rather than trying to remember locations from memory across a large open island."
            ]
        }
    ]
};
