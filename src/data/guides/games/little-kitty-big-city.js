// Little Kitty, Big City Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/little-kitty-big-city.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1177980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "little-kitty-big-city-achievement-guide",
    "category": "game",
    "gameSlug": "little-kitty-big-city",
    "icon": "🐈",
    "title": "Little Kitty, Big City Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in Little Kitty, Big City (7 hidden). Covers finding your way home, meeting every animal, the ducklings, the collectibles (fish, shinies, hats, nap spots), the recycling and smashing counters, and a set of mischief gags. Seven of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Little Kitty, Big City has 39 Steam achievements and 7 are hidden. The visible list is the cozy checklist - get home, meet all the animals, collect the ducklings, fish, shinies, hats and nap spots, catch birds, sit in boxes, recycle and smash things, complete the to-do list, and various one-off tricks. The seven hidden ones are mischief gags: making a human slip on a banana, getting paint on the red sports car, putting four rubber ducks in the pond, sprinting at a human with a dangerous item, smashing the model city in the gecko shop, meowing ten times in a row, and dropping a phone in the porta-potty.",
                "The catalog marks it difficulty 1 - it is a short, gentle open-world game with no fail state. Nothing is missable; the small city stays fully explorable and every collectible and gag can be done at any time.",
                "Tip: do the seven hidden gags in one loop of the map - the banana (fruit market), the scissors chase (fruit market or gecko shop), the model city (gecko shop), the rubber ducks (by Duck Dad's pond), the sports car (playground), the phone-in-porta-potty (construction site) and ten meows are all quick and close together."
            ]
        },
        {
            "heading": "Story, Animals & Ducklings",
            "body": [
                "Finding your way home, meeting all the animals, collecting all the ducklings, getting your camera, your first and all yummy fish, 200 shinies, all hats, and all of Tanuki's portals.",
                "The achievements here: Home Sweet Home! (Find your way back home); Hello Everyone! (Meet all the animals); Quack Troops! (Collect all the ducklings); Snap Happy! (Get your very own camera); Snack Time! (Get your first yummy fish); Fin-tastic! (Eat all the yummy fish); Fat Cat (Find 200 Shinies); Capped Crusader (Collect all the hats); World Traveler (Open all Tanuki's portals); Cat Napper (Sleep in all the cozy nap spots)."
            ]
        },
        {
            "heading": "Collectibles & Activities",
            "body": [
                "All nap spots, catching and releasing 20 birds, five cardboard boxes, recycling 100 items, breaking 100 objects, busting all birds' nests, bringing bones to all the dogs, being petted 10 times and photographed 20 times, taking 20 photos, investigating 10 trash cans, completing the to-do list, a midair bird catch, all soccer goals, and knocking a human over.",
                "The achievements here: Bird Botherer (Catch (and release!) 20 birds); If I Fits, I Sits (Enjoy 5 cardboard boxes); Litter Picker (Recycle 100 items); Smash Hit (Break 100 objects); Sticky Business (Bust all the old birds' nests); Give A Dog A Bone (Bring bones to all the dogs); Cult Of Purr-sonality (Get petted 10 times); Local Celebrity (Get photographed 20 times); Papa-cat-zi (Take 20 photos with your camera); Dumpster Diving (Investigate 10 trash cans); Neighborhood Hero (Complete all items on your To-Do list); Cat-Like Reflexes (Capture a bird in flight); Back Of The Net (Score every soccer goal); Surprise! (Knock a human over by jumping on them)."
            ]
        },
        {
            "heading": "Mischief & Gags",
            "body": [
                "Making a human slip on a banana, 20 human stumbles, pawprints in wet concrete, clearing the chess board, a human kicking a ball to you, painting the fancy car, the rubber ducks in the pond, getting kicked out of a store, the dangerous-item chase, bonking the soda machine, smashing the model city, an emote, ten meows in a row, the porta-potty phone drop, and smashing 10 items.",
                "The achievements here: Fruit Fall (Put a banana on the ground and make a human slip on it (at the Fruit Market).); Trip Hazard (Make 20 humans stumble); Industrial Artist (Leave your pawprints in the wet concrete); Checkmate! (Remove all the chess pieces from the board); To Me, To You! (Get a human to kick a ball to you); No Parking! (Get paint on the red sports car (near the playground - swat elevated paint onto it).); Rub-A-Dub-Dub! (Take four rubber ducks and place them in the pond by Duck Dad.); And Stay Out! (Get kicked out of a store); Killer Kitty (Grab a dangerous item (scissors from the Fruit Market or Gecko Shop) and sprint at a human.); Who Needs Cash? (Use your noggin on the soda machine); Big Kitty, Little City (Destroy the model city in the Gecko Shop.); Can't Stop The Feelings (Use an emote); What Sweet Music (Meow ten times in a row.); Splish! (Take a phone (from a knocked-over human) and drop it in the porta-potty near the construction site.); Decluttering (Smash 10 items)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main path - get your camera, help the animals, and find your way home.",
                "2. Collect the ducklings, fish, shinies, hats, nap spots and Tanuki's portals as you explore.",
                "3. Grind the activity counters (birds, boxes, recycling, smashing, photos, pets) - they fill in naturally.",
                "4. Do the seven hidden mischief gags in one loop of the map (banana, scissors chase, model city, rubber ducks, sports car, porta-potty phone, ten meows).",
                "5. Finish the to-do list for 'Neighborhood Hero'.",
                "Tip: 'What Sweet Music' (ten meows in a row) unlocks the instant you spam the meow button - do it first, anywhere."
            ]
        }
    ]
};
