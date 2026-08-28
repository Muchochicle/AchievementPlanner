// Farming Simulator 22 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/farming-simulator-22.json), whose 45
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1248130 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below - but those descriptions are jokey flavour
//   text, so this guide also states the real requirement (derived from
//   each achievement's apiname, e.g. "BreedChicken", "CollectiblesUS").
// - Sections group by what each achievement needs: first-time
//   milestones, farming volume, animals and beehives, vehicles and
//   production, and deliveries and per-map collectibles.
export const GUIDE = {
    "slug": "farming-simulator-22-achievement-guide",
    "category": "game",
    "gameSlug": "farming-simulator-22",
    "icon": "🚜",
    "title": "Farming Simulator 22 Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Farming Simulator 22 - none are hidden, but Steam's descriptions are jokey flavour text, so this guide gives the real requirement for each. The first-time milestones, the farming-volume totals, the animal and beehive goals, the vehicle and production counts, and the deliveries and per-map collectibles.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Farming Simulator 22 has 45 Steam achievements and none are hidden. The Steam descriptions are all one-liner jokes rather than instructions, so this guide pairs each achievement name with what it actually requires.",
                "Nothing is missable - a farm save persists and every counter accumulates - and there is no difficulty gate. The completion is just time: the volume totals (large sown/harvested/cultivated/fertilized area), the animal-herd sizes, and finding every collectible on the Elmcreek, Haut-Beyleron and Erlengrat maps.",
                "Tip: turn growth and hired-worker settings to your taste, buy the biggest equipment you can afford early, and let AI helpers run the fields - the volume and delivery achievements fill in the background while you do the one-off tasks."
            ]
        },
        {
            "heading": "First-Time Milestones",
            "body": [
                "The achievements here (Steam's descriptions are flavour text, so the real requirement is noted): Road Trip - drive a car a set distance (\"That thing wouldn't have fit onto the street anyway.\"); Plant get enough - fertilize a field for the first time (\"A little help can go a long way.\"); Allez hopp - clear your first horse jump (\"Oh, they can do THAT as well?\"); Giddy-up! - ride a horse for the first time (\"I could get used to getting around like this…\"); Help me to help you - complete your first contract/mission (\"Sure, I can take care of that, neighbor.\"); It's just the beginning - reach a total play-time milestone (\"I've never felt happier than here.\"); Just a sprinkle - sow a field for the first time (\"You have to think about the future.\"); Own use - harvest a field for the first time (\"Reap what you sow.\"); Field Trip - drive a tractor a set distance (\"One vehicle for all of your needs.\"); Long haul - drive a truck a set distance (\"In it for the long game, I see.\"); Van Gogh - repaint a vehicle (\"Look at Mr. Fancypants over there.\"); It just fell off - repair a vehicle for the first time (\"It was only a matter of time…\"); I read Shakespeare and stuff - cultivate a field for the first time (\"The first step of any farmer.\"); Ultimutt Pawesomeness - pet your dog (\"Who's a good boy?\"); It's never too late to farm - load a Farming Simulator 19 savegame (\"It feels good to be home.\"); I'm stumped - cut down your first tree (\"If a tree falls in a forest and no one is around to hear it, does one hand clap?\")."
            ]
        },
        {
            "heading": "Farming Volume",
            "body": [
                "The achievements here (Steam's descriptions are flavour text, so the real requirement is noted): It's sow easy - sow a large total area (\"Planting one bean will yield much green.\"); Large-scale supplier - harvest a large total area (\"These are the fruits of your labor.\"); Highly cultivated - cultivate a large total area (\"I'm a little proud of this one myself.\"); The plot thickens - fertilize a large total area (\"You won't rest until you've reached maximum efficiency.\"); That's a wrap - wrap a number of bales (\"What's in the bale?\"); Gone but not for cotton - produce a number of cotton bales (\"Where would you even store them?!\"); Hard work pays off - reach a money milestone (\"You know you can also spend it, right?\"); Helper A does not stop … ever - complete a large number of contracts/missions (\"What do you mean \"take care of my own farm as well\"?\")."
            ]
        },
        {
            "heading": "Animals & Beehives",
            "body": [
                "The achievements here (Steam's descriptions are flavour text, so the real requirement is noted): Clucky Streak - raise a number of chickens (\"Now that's a lot of Easter eggs.\"); Three little piggies… - raise a number of pigs (\"You'll be amazed how much food they need.\"); Fluffyness - raise a number of sheep (\"Building up my wool empire.\"); Thoroughbred! - ride horses a large total distance (\"I'm a real cowboy, mom!\"); Bringing in the Honey - own a number of beehives (\"Well you've been one busy bee, haven't you?\"); You are not a kangaroo - clear a large number of horse jumps (\"Seriously, think of the poor animal!\"); Cowherd - raise a number of cows (\"Bet you didn't think they'd be that much work, right?\")."
            ]
        },
        {
            "heading": "Vehicles & Production",
            "body": [
                "The achievements here (Steam's descriptions are flavour text, so the real requirement is noted): I like to switch it up - own a number of different vehicle types (\"We're slowly getting there.\"); Fix me up - repair vehicles a number of times (\"Seriously, you should consider a membership card.\"); Well-Oiled Machine - own a number of production facilities (\"Hmm, we could franchise this…\"); Vehicle fleet - own a number of large vehicles (\"Ok, I might have a problem…\"); This is just my weekend vehicle - own a number of small vehicles (\"Yes, I need each and every one of these.\"); All out of Land - own a number of placeable structures (\"Everything the light touches...is mine.\")."
            ]
        },
        {
            "heading": "Deliveries & Map Collectibles",
            "body": [
                "The achievements here (Steam's descriptions are flavour text, so the real requirement is noted): Cheese it - find all collectibles on the Alpine (Erlengrat) map (\"Anybody up for some fondue?\"); Game on - find all collectibles on the French (Haut-Beyleron) map (\"I'm somewhat of a collector myself.\"); Pretty colourful - find all collectibles on the US (Elmcreek) map (\"Childhood memories, brought back to your home.\"); Raisin the stakes - deliver grapes/raisins (\"It's Californian gold!\"); Olea europaea - deliver olives (\"It's a fruit, not a vegetable!\"); Original grain - deliver sorghum (\"My horses are crazy for it.\"); Rock on - deliver stones (\"The path to success is paved with rocks.\"); You wood not believe it - cut down a large number of trees (\"Taking a leaf of absence.\")."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. In your first hour do all the first-time milestones: drive a car, tractor and truck, sow, fertilize, cultivate, harvest, cut a tree, repair and repaint a vehicle, ride and jump a horse, take a contract, pet the dog (Ultimutt Pawesomeness). If you own FS19, load an old savegame for It's never too late to farm.",
                "2. Buy large equipment and set AI helpers on the fields to grind Farming Volume (It's sow easy, Large-scale supplier, Highly cultivated, The plot thickens) and the delivery achievements.",
                "3. Build up herds for Clucky Streak, Three little piggies…, Fluffyness, Cowherd, and set up beehives for Bringing in the Honey.",
                "4. Expand the vehicle fleet and production for I like to switch it up, Vehicle fleet, This is just my weekend vehicle, Well-Oiled Machine and All out of Land.",
                "5. Do a dedicated collectible sweep on Elmcreek (Pretty colourful), Haut-Beyleron (Game on) and Erlengrat (Cheese it) with a map from a guide.",
                "Tip: the collectibles are small hidden objects scattered across each map - they are the one thing you cannot get by just playing, so save them for a focused pass with an interactive collectible map rather than hoping to stumble on all of them."
            ]
        }
    ]
};
