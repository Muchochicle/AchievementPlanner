// Farming Simulator 25 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/farming-simulator-25.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2300320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "farming-simulator-25-achievement-guide",
    "category": "game",
    "gameSlug": "farming-simulator-25",
    "icon": "🚜",
    "title": "Farming Simulator 25 Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Farming Simulator 25 - none are hidden. Covers the farming-activity firsts and totals, the animal husbandry and vehicle-fleet achievements, and the crop-delivery, forestry and collectible achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Farming Simulator 25 has 45 Steam achievements and none are hidden. Many are 'do X for the first time' and then 'do X a lot' pairs - fertilizing, sowing, harvesting, cultivating, missions, vehicle repairs, horse riding and jumping - plus animal husbandry (sheep, pigs, chickens, cows, bees), vehicle-fleet counts, crop deliveries (grapes, olives, sorghum, stones), forestry, a big money total, production points, and the three continental collectible sets (US, Asia, EU).",
                "The catalog marks it difficulty 3. Nothing is hard; it is a long, steady grind of farming totals, animal breeding, and collecting - a save left running with automation does most of it.",
                "Tip: run one big farm with hired workers and animal pens of every type, do a bit of every activity yourself for the 'first' achievements, and collect the three continental collectible sets as you explore."
            ]
        },
        {
            "heading": "Farming Activities & Totals",
            "body": [
                "Driving a car, the first and repeated fertilizing, sowing, harvesting and cultivating, first and many horse jumps and rides, first and many missions, playtime, tractor and truck driving, a vehicle repaint, and the first and repeated vehicle repairs.",
                "The achievements here: Road Trip (That thing wouldn't have fit onto the street anyway.); Plant get enough (A little help can go a long way.); The plot thickens (You won't rest until you've reached maximum efficiency.); Allez hopp (Oh, they can do THAT as well?); You are not a kangaroo (Seriously, think of the poor animal!); Giddy-up! (I could get used to getting around like this…); Thoroughbred! (I'm a real cowboy, mom!); Help me to help you (Sure, I can take care of that, neighbor.); Helper A does not stop … ever (What do you mean \"take care of my own farm as well\"?); It's just the beginning (I've never felt happier than here.); Just a sprinkle (You have to think about the future.); It's sow easy (Planting one bean will yield much green.); Own use (Reap what you sow.); Large-scale supplier (These are the fruits of your labor.); Field Trip (One vehicle for all of your needs.); Long haul (In it for the long game, I see.); van Gogh (Look at Mr. Fancypants over there.); It just fell off (It was only a matter of time…); Fix me up (Seriously, you should consider a membership card.)."
            ]
        },
        {
            "heading": "Animals & Vehicle Fleet",
            "body": [
                "Breeding sheep, pigs, chickens and cows, running beehives, owning many drivable vehicles, many small vehicles and a large vehicle fleet, the first and repeated cultivating milestones, and petting the dog.",
                "The achievements here: Fluffiness (Building up my wool empire.); Three little piggies… (You'll be amazed how much food they need.); Clucky Streak (Now that's a lot of Easter eggs.); Bringing in the Honey (Well you've been one busy bee, haven't you?); Cowherd (Bet you didn't think they'd be that much work, right?); I like to switch it up (We're slowly getting there.); This is just my weekend vehicle (Yes, I need each and every one of these.); Vehicle fleet (Ok, I might have a problem…); I read Shakespeare and stuff (The first step of any farmer.); Highly cultivated (I'm a little proud of this one myself.); Ultimutt Pawesomeness (Who's a good boy?)."
            ]
        },
        {
            "heading": "Deliveries, Forestry & Collectibles",
            "body": [
                "Wrapped and cotton bales, delivering grapes, olives, sorghum and stones, the first and repeated tree felling, a big money total, many placeables and production points, the US / Asia / EU collectible sets, and loading an old savegame.",
                "The achievements here: That's a wrap (What's in the bale?); Gone but not for cotton (Where would you even store them?!); Raisin the stakes (It's Californian gold!); Olea europaea (It's a fruit, not a vegetable!); Original grain (My horses are crazy for it.); Rock on (The path to success is paved with rocks.); I'm stumped (If a tree falls in a forest and no one is around to hear it, does one hand clap?); You wood not believe it (Taking a leaf of absence.); Hard work pays off (You know you can also spend it, right?); All out of Land (Everything the light touches...is mine.); Well-Oiled Machine (Hmm, we could franchise this…); Rusty (The Museum needs help.); Over 9000! (With the power of farm balls for even more yield.); Tutti-Frutti (The legend of the golden apple.); It's never too late to farm (It feels good to be home.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a bit of every core activity yourself early for the 'first time' achievements (sow, harvest, fertilize, cultivate, cut a tree, repair a vehicle, ride and jump a horse, take a mission).",
                "2. Build animal pens of every type (sheep, pigs, chickens, cows, bees) and let them grow.",
                "3. Automate the farm with hired workers and let the harvest, delivery and money totals accumulate.",
                "4. Buy a large, varied vehicle fleet for those count achievements.",
                "5. Explore each of the three maps to collect the US, Asia and EU collectible sets.",
                "Tip: the crop-delivery achievements (grapes, olives, sorghum) need those specific crops - grow at least one field of each even if you don't build a full production chain around them."
            ]
        }
    ]
};
