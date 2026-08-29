// Human: Fall Flat Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/human-fall-flat.json), whose 151 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   477160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 2 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "human-fall-flat-achievement-guide",
    "category": "game",
    "gameSlug": "human-fall-flat",
    "icon": "🧍",
    "title": "Human: Fall Flat Achievement Guide",
    "summary": "A practical guide to all 151 Steam achievements in Human: Fall Flat - original campaign levels, cumulative counters, free update levels - part 1, free update levels - part 2, free update levels - part 3, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Human: Fall Flat has 151 Steam achievements, 2 of them hidden. The list is entirely per-level: complete each level, then do that level's optional secrets and challenges (a hidden route, a speed goal, a silly interaction). It covers the eight original levels plus the many free workshop-style levels the developer has added since launch, and one small block of cumulative counters.",
                "Nothing is missable - every level can be replayed from the menu at any time, and the counters (distance travelled, jumps, respawns) fill on their own. There is no difficulty setting; the challenge is puzzle knowledge, so a guide for the per-level secrets saves a lot of wandering.",
                "Tip: play each level once to complete it, then immediately do its secret achievements while the layout is fresh - most are a single alternate action (climb a specific thing, take a shortcut, break an object). Co-op makes the awkward climbs much easier."
            ]
        },
        {
            "heading": "Original Campaign Levels",
            "body": [
                "The eight launch levels (Mansion, Train, Carry, Mountain, Demolition, Castle, Water, Power Plant) and their per-level secrets - shortcuts, the feet-first / head-first Water dives, stacking the Carry boxes, the Castle parkour, and so on.",
                "The achievements here: Leap of Fail (Complete \"Mansion\"); Choo Choo! (Complete \"Train\"); Don't Get a Splinter! (Complete \"Carry\"); What Goes Up (Complete \"Mountain\"); Brute Force (Complete \"Demolition\"); Storm the Gate! (Complete \"Castle\"); Feet First (Complete \"Water\" diving feet-first); Head First (Complete \"Water\" diving head-first); The End? (Complete \"Power Plant\"); Speedrun  (Complete the game start-to-end in one run); No escape (Fall and respawn once); Pigeon Simulator (Stand on the head of the statue in the intro); Mind the gap! (Take a big shortcut in the level \"Mansion\"); Public service (Place 5 pieces of debris in a dumpster); Perfectionist (Align a flipped bench with a wall); It's stuck (Jam a door and go through it in \"Carry\"); Tower (Stack all 4 boxes in the level \"Carry\"); AH, EO, EO, EO, EO, OOOOO! (Use the rope to go above the abyss in the level \"Mountain\"); Silent hours (Noisy neighbours) (Get rid of the speaker set in \"Mountain\"); My treasure (Collect all gems into a pile in \"Mountain\"); Wrong direction (Use the window on your left instead of smashing the wall in \"Demolition\"); Surprise! (Avalanche!) (Unleash the boulder gate in \"Demolition\"); Primal (Break 4 walls without using any gadgets in \"Demolition\"); Improvised Ammo (Launch yourself with the catapult in \"Castle\"); For whom the bell tolls (Ring the castle bell in \"Castle\"); Zipline (Zipline from the church tower in \"Castle\"); Smooth moves (Parkour fluidly from the alley to the blacksmith in \"Castle\" without touching the ground.); Row, row, row your boat (Use the row boat to get to the cargo ship in \"Water\"); Reverse gear (Enter the dock with the ship backwards in \"Water\"); Beacon (Light up the lighthouse in \"Water\"); Breathing exercise (In \"Water\", get out of the water in 100ms to avoid drowning); Surfer (Don't get wet while surfing down the mountain in \"Water\"); Electricity 101 (Short-circuit the wires in \"Power Plant\"); Will it fry? (Feed an appliance with power from 3 batteries in \"Power Plant\"); Delivery boy (Deliver 10 pieces of coal to the main island in \"Power Plant\"); Thief (Steal the battery from the statue in \"Power Plant\")."
            ]
        },
        {
            "heading": "Cumulative Counters",
            "body": [
                "The \"do X a lot\" achievements: travel 1 / 10 / 25 km, respawn 100 times, jump 1000 times, climb 100 m, carry objects 1000 m, drown 10 times, and travel 1 km each by boat, ground vehicle and dumpster.",
                "The achievements here: Tourist (Travel 1km); Traveler (Travel 10km); Adventurer (Travel 25km); Let it rain (Respawn 100 times); Trampoline (Jump 1000 times); Climber (Climb 100m); Heavy lifting (Carry objects for a total of 1000m); Learn to swim (Drown 10 times); Sail away! (Use any of the boats to travel 1km); Petrolhead (Use any of the ground vehicles to travel 1km); Convertible ride (Ride 50m in a dumpster)."
            ]
        },
        {
            "heading": "Free Update Levels - Part 1",
            "body": [
                "The first block of added levels and their secrets: Aztec, Dark, Steam, Ice, Christmas, Thermal, Factory, Golf and City, plus the Journey / palace level with the Zodiac heads and the golden furnace.",
                "The achievements here: The End (Complete \"Aztec\"); Bird's eye view (Climb to the top of the tree with the birds nest in “Aztec”); Rollin' (Walk on the rolling ball to bypass a puzzle in “Aztec”); Clockwork (Pass the pendulum obstacle course in 60 seconds in “Aztec”); It's Alive! (Complete \"Dark\"); Tick Tock (Climb the Clock Tower in 40 seconds in \"Dark\"); Planks? No Thanks! (Complete \"Dark\" without moving any planks that are barring doors); Fry Me to the Moon (Hold on to the EXIT lid after you flick the switch in \"Dark\"); Under Pressure (Complete \"Steam\"); Walk the Plank (Reach the big wheel in \"Steam\" without using the crane controls); Get Dizzy (Ride 3 complete revolutions of the big wheel in \"Steam\"); Avalanche (Complete \"Ice\"); Tricky (Complete the slope jump in \"Ice\" with 2 snowboards strapped to your feet); No Ice Ice Baby (Complete the seesaw puzzle in \"Ice\" without using an ice cube); Candy Rush (Zip line down from the mountain in \"Christmas\" using a candy cane); Deck the Halls (Land in the snow fort in \"Christmas\" on a snowboard); Bah, Humbug! (Shoot the Christmas angel off the tree top in \"Christmas\"); Top the Hat (Stand atop the large snowman's hat in \"Christmas\"); Wrapped Up (Complete \"Thermal\"); Pay Day (Complete \"Thermal\" while holding a gold bar); Hook, Line and Jumper (Enter the compound in \"Thermal\" without passing through the main gate); Amped! (Attach all electrical cables in 35 seconds or less in \"Thermal\"); The Foreman (Complete \"Factory\"); Radio Silence (Throw all four radios off the level in “Factory”); After Hours (Complete the first half of “Factory” without turning any lights on); How to get Fired! (Throw one of each item in the final room into the fire in “Factory”); Hole in One (Complete \"Golf\"); Birdie (Using ONLY the golf club, putt the ball in 3 strokes or less); Bogey (1 Over Par) (Take the alternate route above the cave); Mulligan (Drive the golf cart off the edge of the level); Sports Fan (Complete \"City\" level)."
            ]
        },
        {
            "heading": "Free Update Levels - Part 2",
            "body": [
                "The middle block: Forest, Laboratory, Lumber, Red Rock, Tower, Miniature and Copper World, each with a completion achievement and two or three optional secrets (hidden coins, alternate routes, silly interactions).",
                "The achievements here: Tip-Top Ten Pin (Complete all 4 bowling lanes); Hitchhiker (Ride one of the vehicles for 10 seconds); Temper Tantrum (Knock all 3 rag dolls off the level); Lucky Carp (Walk through the gates of the heavenly palace); Zodiac (Unite all 12 Zodiac heads); Laojun’s Furnace (Craft 3 different magical item in the golden furnace); Fortune Tree (Collect the Golden Sycees from the fortune tree); Wrecking Crew (Destroy the statue); Toasty (Light the marshmallows over the bonfire); On Thin Ice (Don't let the ice block melt); Wrong Turn (Complete \"Forest\"); KABOOM! (Complete “Laboratory”); Bullseye (Hit all targets without missing a single shot); Cast it into the fire (Throw an orb into the lava); Overachiever (Reach the exit door whilst holding an orb in the launch pad room); The Great Outdoors (Complete Lumber); Safety first (Use two hooks when crossing the chasm in Lumber); Bedwetter (Wet the bed in Lumber); Lights out (Throw the lanterns off the map); Don’t blame it on the sunshine (Turn on the jukebox in \"Red Rock\"); Pipe dream (Use the sewer to escape the junkyard on \"Redrock\"); Pretty fly for a cacti (Place the hat on the cactus in \"Red Rock\"); Currently Attractive (Complete \"Red Rock\"); Out of the orbinary (Go fishing in \"Tower\"); Time saver (Use the pipe to cross the lava in \"Tower\"); Foot in the door (Find a shorter route for moving the batteries in \"Tower\"); Just walked in (Complete \"Tower\"); Small fish, big pond (Complete \"Miniature\"); Top Shelf (Reach the highest platform above the power drill in \"Miniature\" ); Spotless clean (Get rid of the ash in \"Miniature\"); The floor is lava (Starting from the bag of soil, reach the top of the crate without touching the red tiles in \"Miniature\"); Square peg in a round hole (Attempt to use an improvised battery in \"Copper World\"); Unlimited Power! (Form an independent laser loop in \"Copper World\"); Loose change (Throw all four hidden coins off the level in \"Copper World\"); Cu later (Complete \"Copper World\"); Barrel of laughs (Complete \"Port\"); A call for aid (Light the beacons in \"Port\"); Spring cleaning (Clear out the room directly after the zipline in \"Port\"); To beach their own (Reach the hidden island in \"Port\"); Explorer of the Deep (Complete \"Underwater\")."
            ]
        },
        {
            "heading": "Free Update Levels - Part 3",
            "body": [
                "The most recent block: Port, Underwater, Dockyard, Museum, Hike, Candyland, Test Chamber, Steampunk Party and Viking, again a completion plus optional secrets per level.",
                "The achievements here: Improvised Exploration Device (Use the spring boards to get across the chasm in \"Underwater\"); Subpar parking job (Find the speed boat in \"Underwater\"); Cove-r up! (Go above the cave in \"Underwater\"); Ship it (Complete \"Dockyard\"); Olympic Grandeur (In \"Dockyard\", use the chains to swing directly to the window); Shattered Dreams (Smash all the glass in \"Dockyard\"); Seas the day (Reach the hidden boat in \"Dockyard\"); Exclusive Tour (Complete \"Museum\"); Buckshot (Destroy the wall by firing all 5 cannon balls at once in \"Museum\"); Laser Accurate (Avoid all security lasers in \"Museum\"); Eye Spy (Find the three hidden eye symbols in \"Museum\"); A Leisurely Stroll (Complete \"Hike\"); Human Thawed Flat (Free the cardboard cutout in \"Hike\"); Speed Skating (Complete three laps around the glacier in 60 seconds in \"Hike\"); Prepared for winter (Roll the barrel inside the cellar in \"Hike\"); Sweet Dreams (Complete \"Candyland\"); Stay Puft (Get a marshmallow from the tree in \"Candyland\"); Route Canal (Avoid hitting any donuts in chocolate river in \"Candyland\"); Dodgeball (Avoid all of the rolling balls in \"Candyland\"); Test Complete (Complete \"Test Chamber\"); Half-baked puzzle (Find the cake in \"Test Chamber\"); Need to vent (Go through all the ventilation shafts in \"Test Chamber\"); Hope that wasn't important (Recycle the cube blueprints in \"Test Chamber\"); Full steam ahead (Complete \"Steampunk Party\"); Party Animal (Start the party in \"Steampunk Party\"); Let off some steam (Find and turn the hidden valves in \"Steampunk Party\"); Bellhop (Ring the bell in \"Steampunk Party\"); A fjord-midable adventure (Complete \"Viking\"); Go with the flow (Reach the island on the river in \"Viking\"); Practice makes perfect (Hit all dummies with a sword in \"Viking\"); Cheaters never prosper (Destroy the cheat sheet rune in \"Viking\")."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Two achievements are hidden - one secret each in the Steam and Ice levels:",
                "The achievements here: Whoops! (In the \"Steam\" level, grab the wooden ladder near the locked gate - it breaks apart as you climb it.); Taking the Piste (In the \"Ice\" level, ride the ski chairlift for one complete revolution.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the eight original levels, doing each one's secrets before moving on.",
                "2. Work through the free update levels the same way - one completion plus its secrets per level.",
                "3. Let the cumulative counters finish (they usually will by the time the levels are done) and mop up any you are short on.",
                "4. Grab the two hidden achievements: the breakable ladder in Steam, and a full chairlift lap in Ice.",
                "Tip: several \"reach a hidden area\" and \"speed\" secrets are far easier with a second player - one boosts the other up, or holds an object in place. Local or online co-op both count."
            ]
        }
    ]
};
