// Rusty's Retirement Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rustys-retirement.json), whose 71 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2666510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rustys-retirement-achievement-guide",
    "category": "game",
    "gameSlug": "rustys-retirement",
    "icon": "🌾",
    "title": "Rusty's Retirement Achievement Guide",
    "summary": "A practical guide to all 71 Steam achievements in Rusty's Retirement (0 hidden). Every achievement carries Steam's own text - the crop, animal and robot unlock milestones, the harvest and coin counters, and the idle-progression goals that tick over while the farm runs at the bottom of your screen.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rusty's Retirement has 71 Steam achievements, none hidden. It is an idle farming game that lives in a strip at the bottom of your desktop: robots plant, water and harvest while you do other things. The achievements cover unlocking crops (one, 10, all), animals and robots, the big harvest and coin counters, spinning the central cog, filling the farm, and the long-run idle-progression goals.",
                "There are no hidden achievements - the list above is the whole set, and every one is a threshold that accumulates as the farm runs.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; the game is designed to be left running, and time-consuming counters (spin the cog 1,000 times, big coin totals) simply need the farm left on."
            ]
        },
        {
            "heading": "Unlocks",
            "body": [
                "Spinning the cog, unlocking crops (one, 10, all), animals, robots and farm plots, and filling the farm.",
                "The achievements here: This is nice! (Spin the cog once); A New Crop! (Unlock a new crop); Green Thumb (Unlock 10 crops); Horticulturist (Unlock 25 crops); Crop Collector (Unlock all crops); Berry Collector (Unlock all berries); Woah, that's a big Pumpkin! (Grow a Giant Pumpkin); Woah, that's a big Tomato! (Grow a Giant Tomato); Woah, that's a big Cucumber! (Grow a Giant Cucumber); Haiku's Helping Hand (Build Haiku's House); Sonnet's Shopping Spree (Build Sonnet's Shop); Pinion's Counting Crops (Build Pinion's House); Forbic's Bulbs and Butterflies (Build Forbic's House); Echo's Uber Upgrades (Build Echo's Workshop); Slate's Biodynamic Barn (Build Slate's Barn); Splunk's Planting Seeds (Build Splunk's House); Play for 1hr (Play the game for 1 hour); Play for 24hrs (Play the game for 24 hour (across all farms)); Play for 48hrs (Play the game for 48 hour (across all farms)); Buzzing! (Place 10 Bulb Hives on a single farm); Relocation Specialist (Move a building at least once); This is Something (Earn 15,000 spare parts across all farms); A Nice Little Income (Earn 50,000 spare parts across all farms); Earning Big Bucks (Earn 250,000 spare parts across all farms)."
            ]
        },
        {
            "heading": "Harvest & Coin Counters",
            "body": [
                "The escalating harvest, coin and production counters.",
                "The achievements here: Millionaire (Earn 1 MILLION spare parts across all farms); Multi-Millionaire (Earn 10 MILLION spare parts across all farms); This is a Good Start (Produce 1,000 biofuel across all farms); A Small Production Line (Produce 5,000 biofuel across all farms); A Big Production Line (Produce 25,000 biofuel across all farms); Industrial Revolution (Produce 100,000 biofuel across all farms); Full-scale Mass Production (Produce 1 MILLION biofuel across all farms); Let's Spruce this Place Up! (Place at least one decoration); This Looks Nice (Place 25 decorations on a single farm); This is a Pretty Farm (Place 100 decorations on a single farm); Automatization (Deploy one of each robot on a single farm); Maxed Water Bot (Max upgrade a Water Bot); Maxed Harvest Bot (Max upgrade a Harvest Bot); Maxed Biofuel Bot (Max upgrade a Biofuel Bot); Maxed Feeder Bot (Max upgrade a Feeder Bot); Maxed Waste Bot (Max upgrade a Waste Bot); Maxed Fertilizer Bot (Max upgrade a Fertilizer Bot); Maxed Berry Bot (Max upgrade a Berry Bot); Moo... (Place down ten cows on one farm); Oink! (Place down ten pigs on one farm); Oh poop! (Collect 1,000 animal waste); 666 (Build 666 crop tiles on a single farm); That's a Bit Excessive (Build 10 Biofuel Converters on a single farm)."
            ]
        },
        {
            "heading": "Long-Run Goals",
            "body": [
                "Spinning the cog 1,000 times and the other high-threshold idle-progression achievements.",
                "The achievements here: This is not so nice. (Spin the Cog a thousand times); Architect (Build on every available tile); Flower Swamp (Unlock the Flower Swamp farm); Sandy Desert (Unlock the Sandy Desert farm); Blossom Forest (Unlock the Blossom Forest farm); Desert Oasis (Unlock the Desert Oasis farm); That's a Lot of Water (Water 1 MILLION crops (across all farms)); That's a Lot of Crops (Harvest 250,000 crops (across all farms)); Snowy Fields (Unlock the Snowy Fields farm); Get a pet (Build a pet house); Have a few pets (Build 4 pet houses on one farm); Cluck, cluck! (Place down 10 chickens on one farm); Woah, that's a big White Pumpkin! (Grow a Giant White Pumpkin); Woah, that's a big Zucchini! (Grow a Giant Zucchini); Woah, that's a big Red Cabbage! (Grow a Giant Red Cabbage); Reaper's Genetically Modified Organisms (Build Reaper's Outpost); Not-so-bad (Buy a common chip); Pretty good (Buy a rare chip); Excellent! (Buy a legendary chip); Modifying crops (Improve a crop by purchasing a chip); Nah, I don't like those (Reroll ALL the chips in store); Modifying for efficiency (Improve 10 crops with chips); Bigger and better crops (Improve 25 crops with chips); Heavily modified crops (Improve all crops with chips)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play actively at first: unlock crops, animals and robots as fast as your coins allow, and expand every farm plot.",
                "2. Automate everything - assign robots to plant, water, harvest and tend animals - so the farm keeps producing while you do other things.",
                "3. Leave the game running at the bottom of your screen during normal computer use; the harvest, coin and production counters climb on their own.",
                "4. Check back to reinvest coins into higher-tier crops and more robots, which speeds every remaining counter.",
                "Tip: this is a genuine idle game - the last achievements (spin the cog 1,000 times, the largest coin totals) are pure wall-clock time, so the fastest route is a fully automated farm left running for days, not active play."
            ]
        }
    ]
};
