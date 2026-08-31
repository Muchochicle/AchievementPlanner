// Stacklands Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/stacklands.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1948280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "stacklands-achievement-guide",
    "category": "game",
    "gameSlug": "stacklands",
    "icon": "🃏",
    "title": "Stacklands Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Stacklands - none are hidden. Covers the early village and mainland achievements, the economy and island achievements, and the fishing, combat and curiosity achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Stacklands has 36 Steam achievements and none are hidden. Twelve are the early village and mainland run (pick a berry bush, sell a card, build a house, a second villager, offspring, all mainland packs, the Goblet Cave artifact, killing the final boss, a rat, a skeleton, a frittata, a dog), twelve are economy and the island expansion (the market, 50 coins, Moon 24, a rowboat and sloop, all island packs, treasure, the Kraken, the 'Final Final Boss', rum, a drunk villager), and twelve are fishing, combat and curiosities (a fish, a pirate friend, ceviche, a greenhouse, the Dark Forest, the Stable Portal, Wave Six, the Wicked Witch, a smithy, an archer, a rabbit hat, and a villager at Combat Level 20).",
                "The catalog marks it difficulty 3. It is a short card-survival game; the two boss kills (mainland and island) and reaching Moon 24 are the milestones, and the rest come from exploring both packs' content.",
                "Tip: do a mainland run to the final boss, then an island run to the 'Final Final Boss', unlocking every pack and building each named structure along the way."
            ]
        },
        {
            "heading": "Early Village & Mainland",
            "body": [
                "Picking a berry bush, selling a card, building a house, a second villager, creating offspring, unlocking all mainland packs, the Goblet Cave artifact, killing the final boss ('The End?'), killing a rat and a skeleton, cooking a frittata, and getting a dog.",
                "The achievements here: Berry! (Pick a Berry Bush); $$$ (Sell a Card); My Crib (Build a House); Good Company (Get a Second Villager); Babby (Create Offspring); Packed (Unlock all Packs); Goblet Cave (Find a mysterious artifact); The End? (Kill the Final Boss); Oh shoot, a rat! (Kill a Rat); Skelet (Kill a Skeleton); Hearty Meal (Cook a Frittata); Best Friend (Get a Dog)."
            ]
        },
        {
            "heading": "Economy & The Island",
            "body": [
                "Buying from a Travelling Cart, 50 coins, reaching Moon 24, selling at the market, building a rowboat and a sloop, unlocking all Island Packs, finding treasure, killing the Kraken, killing the 'Final Final Boss', making rum, and getting a villager drunk.",
                "The achievements here: Merch (Buy something from a Travelling Cart); Rich (Have 50 Coins); Longevity (Reach Moon 24); Marketing (Sell a Card at the Market); Row, row, row your boat (Build a Rowboat); The Seven Seas (Build a Sloop); Chilling on the beach (Unlock all Island Packs); A true adventurer (Find Treasure); Tentacle Hater (Kill the Kraken); Another one?! (Kill the Final Final Boss); Tasty Beverage (Make Rum); A bit too much (Get a Villager drunk)."
            ]
        },
        {
            "heading": "Fishing, Combat & Curiosities",
            "body": [
                "Catching a fish, befriending a pirate, making ceviche, building a greenhouse, finding the Dark Forest, building a Stable Portal, fighting Wave Six, fighting the Wicked Witch, building a smithy, training an archer, a villager in a rabbit hat, and a villager at Combat Level 20.",
                "The achievements here: Fishy (Catch a Fish); Friend with an eye patch (Befriend a Pirate); Sour fish, what's not to like? (Make Ceviche); Sustainable (Build a Greenhouse); OoOoOoOoOo (Find the Dark Forest); Time for Revenge (Build a Stable Portal); Magic Number 6 (Fight Wave Six); Bad Witch (Fight the Wicked Witch); Getting Stronger (Build a Smithy); Ranged! (Train an Archer); Adorable Villager (Make a Villager wear a Rabbit Hat); Dripped Out (Have a Villager with Combat Level 20)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a mainland run: build a house, grow the village, unlock all mainland packs, and defeat the final boss ('The End?').",
                "2. Do an island run: build a rowboat then a sloop, unlock all Island Packs, find treasure, kill the Kraken, and defeat the 'Final Final Boss'.",
                "3. Build every named structure as you go (greenhouse, smithy, Stable Portal) and cook the food items (frittata, rum, ceviche).",
                "4. Reach Moon 24 and get a villager to Combat Level 20.",
                "5. Mop up the small curiosities (rabbit hat, drunk villager, pirate friend, Dark Forest).",
                "Tip: unlocking all packs is the gate for most of the content achievements - spend your early coins on packs before building anything expensive."
            ]
        }
    ]
};
