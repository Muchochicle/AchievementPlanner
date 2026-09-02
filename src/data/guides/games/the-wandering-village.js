// The Wandering Village Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-wandering-village.json), whose 32 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1121640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-wandering-village-achievement-guide",
    "category": "game",
    "gameSlug": "the-wandering-village",
    "icon": "🐉",
    "title": "The Wandering Village Achievement Guide",
    "summary": "A practical guide to all 32 Steam achievements in The Wandering Village - none are hidden. None of the achievements are hidden. Covers your relationship with Onbu the wandering creature, the three monuments, the population and research goals, a set of survive-to-day-100 self-restriction runs, and the city-management and exploration milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Wandering Village has 32 Steam achievements and none are hidden. The Onbu track is petting it, the 'Spa Day' (pet, feed, heal and detox it in one day), commanding it to sleep and eat, feeding it with the Trebuchet, and shaving every tree and mining every boulder off its back. The three monuments (Onbu, Village, Survival) are one each. Then there is a big set of survive-to-day-100 restriction runs - no Air Wells, no Farms, no housing, no Kitchens, a strict Trebuchet diet, no berries for 30 days - plus population 200 (and on Hard), researching every technology, visiting all five biomes, a happiness rating of 35, and building a Scavenger Hut before day 12.",
                "The catalog marks it difficulty 3. Nothing is missable; the restriction runs are the challenge (each asks you to survive to day 100 without a core building), and 'The Wandering Metropolis' (200 villagers on Hard) plus 'The Enlightened Village' (all research) are the longest goals. Everything else comes from a couple of thorough playthroughs.",
                "Tip: plan one 'restriction' playthrough where you deliberately skip several buildings at once - some of the no-X runs are compatible (e.g. no Kitchens and no Farms with a berry/gatherer economy), so you can knock out two or three on the same save."
            ]
        },
        {
            "heading": "Onbu & Monuments",
            "body": [
                "Petting Onbu, building the Onbu, Village and Survival Monuments, the 'Spa Day', surviving to day 100 with no Air Wells, reaching 200 villagers (and on Hard), feeding Onbu with the Trebuchet, a Berry Gatherer in range of 16+ bushes, surviving to day 100 with no Farms, shaving every tree off Onbu's back, and getting its heart rate above 6 bpm.",
                "The achievements here: Petting Zoo (Pet Onbu); Our Friend and Protector (Build the Onbu Monument); The Light of Human Intellect (Build the Village Monument); Monumental (Build the Survival Monument); Spa Day (Pet, feed, heal and detox Onbu within one day); Dry Spell (Survive until day 100 without building any Air Wells); The Wandering Metropolis (Reach a population of at least 200 villagers on Hard difficulty or above); The Wandering City (Reach a population of at least 200 villagers); Fore! (Feed Onbu with the Feeding Trebuchet); Berry Good (Have a Berry Gatherer in range of 16 or more Berry Bushes); Master Gatherer (Survive until day 100 without building any Farms); Full Body Shave (Cut down every tree on Onbu’s back); Doki Doki Waku Waku (Get Onbu's heartrate to go above 6 bpm)."
            ]
        },
        {
            "heading": "Survival Challenges & Research",
            "body": [
                "The strict Trebuchet diet, surviving to day 30 with no berries eaten, losing a villager on a scavenging mission, producing Black Pudding, researching every technology, mining every boulder off Onbu's back, surviving to day 100 with no housing, 3 Scout Towers at once, 5 ongoing scavenging missions, and commanding Onbu to sleep and to eat.",
                "The achievements here: Strict Diet (Survive until day 100 while using the Feeding Trebuchet to feed Onbu a maximum of 3 times); Agricultural Revolution (Survive until day 30 without letting your villagers eat a single Berry); Unfortunate Son (Lose a villager on a scavenging mission); Parasite (Produce Black Pudding); The Enlightened Village (Research every technology in a single playthrough); Rock Bottom (Mine every boulder on Onbu’s back); A Breath of Fresh Air (Survive until day 100 without any housing); Perfect Sight (Have at least 3 Scout Towers built at once); Age of Exploration (Have at least 5 ongoing scavenging missions at once); Sandman (Successfully command Onbu to sleep); But I'm not Hungry! (Successfully command Onbu to eat)."
            ]
        },
        {
            "heading": "City Management & Exploration",
            "body": [
                "A happiness rating of 35, housing quality 6 with 50+ villagers, 10 buildings with upgrades, a Scavenger Hut before day 12, visiting the Mountains, Jungle, Desert, Ocean and Ruins in one playthrough, surviving to day 100 with no Kitchens, 20 Elefleas and 5 Sporemoths on Onbu at once, and building a Community Plaza before the Feeding Trebuchet.",
                "The achievements here: Happy Folks (Achieve a happiness rating of at least 35); Free Real Estate (Achieve a housing quality of 6 while having at least 50 villagers); Modern Times (Have at least 10 buildings with upgrades); The Soaring Village (Build a Scavenger Hut before day 12 begins); Globetrotter (Visit the Mountains, Jungle, Desert, Ocean and Ruins in a single playthrough); Food for Thought (Survive until day 100 without building any Kitchen or Gourmet Kitchen); What's the Buzz? (Have at least 20 Elefleas and 5 Sporemoths on Onbu at the same time); Priorities (Build a Community Plaza before building the Feeding Trebuchet)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a normal run: build all three monuments, research everything, hit 200 villagers, visit all five biomes.",
                "2. Care for Onbu fully (Spa Day, sleep/eat commands, shave every tree, mine every boulder).",
                "3. Do a Hard run for 'The Wandering Metropolis' (200 villagers).",
                "4. Plan restriction runs, stacking compatible ones (no Farms + no Kitchens, no housing, no Air Wells) to day 100.",
                "5. Mop up the one-offs (Black Pudding, a lost scavenger, the pest infestation, the day-12 Scavenger Hut).",
                "Tip: 'Dry Spell' (no Air Wells to day 100) is easiest on a route that keeps Onbu in wetter biomes - plan the path in advance so your water supply from rain and rivers covers the whole run."
            ]
        }
    ]
};
