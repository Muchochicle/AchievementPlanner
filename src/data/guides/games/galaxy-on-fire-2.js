// Galaxy on Fire 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/galaxy-on-fire-2.json), whose 92 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   212010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "galaxy-on-fire-2-achievement-guide",
    "category": "game",
    "gameSlug": "galaxy-on-fire-2",
    "icon": "🚀",
    "title": "Galaxy on Fire 2 Achievement Guide",
    "summary": "A practical guide to all 92 Steam achievements in Galaxy on Fire 2 - none are hidden. Covers the early combat and survival medals, the mining / trading / exploration medals, the travel / bomb / alien medals, and the wealth / command / completion medals. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Galaxy on Fire 2 Full HD has 92 Steam achievements and none are hidden. Almost every one is a Bronze/Silver/Gold 'medal' for a cumulative stat - kills, ore mined, goods carried, stations and systems visited, jumpgate uses, passengers carried, money earned, wingmen commanded - plus a few one-offs (the 'Void Terror' Voids fight, leaving a station with no weapons, rejecting 50 jobs) and the 'Champion' all-medals completion.",
                "The catalog marks it a single playthrough - the space sandbox is persistent and every counter is cumulative, so the Gold medals (1,000,000 credits, 100 stations, 250 asteroids, 20 hours played) are the only real time sink. Nothing is missable.",
                "Tip: play the story, then free-roam doing mining and courier missions - the mining, carrier, money and station-visit Gold medals all climb on the same loops."
            ]
        },
        {
            "heading": "Early Combat & Survival Medals",
            "body": [
                "The Veteran medal, the Survivor medals (arrive with low hull energy), the Geologist and Advanced Geologist medals (mine different ore/core types), the Killer medals (50/100/250 kills), and the Carrier and Miner medals (tonnes carried and mined).",
                "The achievements here: Veteran (You got this medal from Admiral Smith for outstanding services to the Terran Space Fleet.); Survivor Bronze (Arrived with less than 30% of hull energy.); Survivor Silver (Arrived with less than 15% of hull energy.); Survivor Gold (Arrived with less than 5% of hull energy.); Geologist Bronze (Mined at least 5 different types of ore.); Geologist Silver (Mined at least 8 different types of ore.); Geologist Gold (Mined at least 11 different types of ore.); Adv. Geologist Bronze (Mined at least 5 different cores.); Adv. Geologist Silver (Mined at least 8 different cores.); Adv. Geologist Gold (Mined at least 11 different cores.); Killer Bronze (More than 50 kills.); Killer Silver (More than 100 kills.); Killer Gold (More than 250 kills.); Carrier Bronze (Transported more than 25t of goods on courier missions.); Carrier Silver (Transported more than 100t of goods on courier missions.); Carrier Gold (Transported more than 200t of goods on courier missions.); Miner Bronze (Mined more than 100t of ore.); Miner Silver (Mined more than 500t of ore.); Miner Gold (Mined more than 1000t of ore.); Adv. Miner Bronze (Mined more than 3t of cores.); Adv. Miner Silver (Mined more than 10t of cores.); Adv. Miner Gold (Mined more than 25t of cores.); Personal Need Bronze (Bought more than 25t of booze.); Personal Need Silver (Bought more than 100t of booze.)."
            ]
        },
        {
            "heading": "Trading, Booze & Exploration Medals",
            "body": [
                "The Advanced Miner, Personal Need and Barkeeper (booze) medals, the Garbage Man (space junk) medals, the Space Tourist and Explorer medals (stations and systems visited), the Handyman and Engineer medals (blueprints owned and finished), the Addict playtime medals, and the Workaholic mission-count medals.",
                "The achievements here: Personal Need Gold (Bought more than 1000t of booze.); Barkeeper Bronze (Owned at least 5 different types of booze.); Barkeeper Silver (Owned at least 16 different types of booze.); Barkeeper Gold (Owned at least 22 different types of booze.); Garbage Man Bronze (Destroyed more than 30t of space junk.); Garbage Man Silver (Destroyed more than 100t of space junk.); Garbage Man Gold (Destroyed more than 150t of space junk.); Space Tourist Bronze (Been to at least 25 different stations.); Space Tourist Silver (Been to at least 50 different stations.); Space Tourist Gold (Been to at least 100 different stations.); Explorer Bronze (Been to at least 5 different systems.); Explorer Silver (Been to at least 10 different systems.); Explorer Gold (Been to at least 22 different systems.); Handyman Bronze (Owned at least 3 blueprints.); Handyman Silver (Owned at least 6 blueprints.); Handyman Gold (Owned at least 13 blueprints.); Engineer Bronze (Finished at least 3 different blueprints.); Engineer Silver (Finished at least 6 different blueprints.); Engineer Gold (Finished at least 13 different blueprints.); Addict Bronze (Played for more than 5 hours.); Addict Silver (Played for more than 10 hours.); Addict Gold (Played for more than 20 hours.); Workaholic Bronze (Finished more than 5 missions.); Workaholic Silver (Finished more than 25 missions.)."
            ]
        },
        {
            "heading": "Travel, Bombs & Aliens Medals",
            "body": [
                "The Globetrotter (jumpgate uses), Tour Operator (passengers carried), Ninja (invisibility time), Nuclear Armament (bombs detonated) and Alien Hunter (remains collected) medals, the Harum-Scarum no-equipment feat, the Weapon Fanatic medals (primary weapons mounted), and the Looter medals (freight salvaged).",
                "The achievements here: Workaholic Gold (Finished more than 50 missions.); Globetrotter Bronze (Used the jumpgate at least 10 times.); Globetrotter Silver (Used the jumpgate at least 50 times.); Globetrotter Gold (Used the jumpgate at least 100 times.); Tour Operator Bronze (Carried more than 5 passengers.); Tour Operator Silver (Carried more than 20 passengers.); Tour Operator Gold (Carried more than 50 passengers.); Ninja Bronze (Invisible for more than 2 minutes.); Ninja Silver (Invisible for more than 3 minutes.); Ninja Gold (Invisible for more than 5 minutes.); Nuclear Armament Bronze (Detonated more than 5 bombs.); Nuclear Armament Silver (Detonated more than 20 bombs.); Nuclear Armament Gold (Detonated more than 50 bombs.); Alien Hunter Bronze (Collected more than 5t of alien remains.); Alien Hunter Silver (Collected more than 10t of alien remains.); Alien Hunter Gold (Collected more than 25t of alien remains.); Harum-Scarum (Left a station without weapons or equipment.); Weapon Fanatic Bronze (Mounted 2 primary weapons.); Weapon Fanatic Silver (Mounted 3 primary weapons.); Weapon Fanatic Gold (Mounted 4 primary weapons.); Looter Bronze (Salvaged more than 50t of freight.); Looter Silver (Salvaged more than 200t of freight.); Looter Gold (Salvaged more than 500t of freight.); Moneybags Bronze (Earned more than 125000$.)."
            ]
        },
        {
            "heading": "Wealth, Command & Completion Medals",
            "body": [
                "The Moneybags medals (up to 1,000,000 credits), the Chatterbox medals (people spoken to), the Commander medals (wingmen commanded), the Renegade and Mason (asteroids destroyed) medals, the Void Terror fight, the Space Saver (free cargo space) medals, the Naysayer / Daredevil / Tracker feats, and 'Champion' for all medals.",
                "The achievements here: Moneybags Silver (Earned more than 500000$.); Moneybags Gold (Earned more than 1000000$.); Chatterbox Bronze (Spoke with more than 20 people.); Chatterbox Silver (Spoke with more than 50 people.); Chatterbox Gold (Spoke with more than 100 people.); Commander Bronze (Commanded more than 3 wingmen.); Commander Silver (Commanded more than 10 wingmen.); Commander Gold (Commanded more than 20 wingmen.); Renegade (Evoked hostility in one faction.); Mason Bronze (Destroyed more than 50 asteroids.); Mason Silver (Destroyed more than 150 asteroids.); Mason Gold (Destroyed more than 250 asteroids.); Void Terror (Congratulations! You fought off the Voids.); Space Saver Bronze (Had more than 100t of free cargo space.); Space Saver Silver (Had more than 250t of free cargo space.); Space Saver Gold (Had more than 500t of free cargo space.); Naysayer (Rejected more than 50 job offers.); Daredevil (Accepted 10 missions without asking about the difficulty.); Tracker (Accepted 12 missions without asking about the location.); Champion (You got all the medals!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story to unlock the full galaxy.",
                "2. Free-roam doing mining runs for the Geologist, Miner and Advanced Miner Gold medals.",
                "3. Run courier and passenger missions for the Carrier, Tour Operator and Workaholic medals.",
                "4. Visit every station and system for the Space Tourist and Explorer Gold medals, and grind money toward 1,000,000 for Moneybags Gold.",
                "5. Mop up the one-off feats (Harum-Scarum, Naysayer, Void Terror) and the remaining stat medals for 'Champion'.",
                "Tip: the Gold medals are the pole - 'Space Tourist Gold' (100 stations) and 'Explorer Gold' (22 systems) are quickest if you deliberately jump to a new station every time you refuel rather than revisiting the same hub."
            ]
        }
    ]
};
