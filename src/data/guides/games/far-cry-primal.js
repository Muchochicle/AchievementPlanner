// Far Cry Primal Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/far-cry-primal.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   371660 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "far-cry-primal-achievement-guide",
    "category": "game",
    "gameSlug": "far-cry-primal",
    "icon": "🦔",
    "title": "Far Cry Primal Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Far Cry Primal - none are hidden. Covers the story missions, the beast-taming and village-building goals, the weapon and combat feats, the outpost / taming / collectible sweeps, and the Survivor-mode clears. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Far Cry Primal has 55 Steam achievements and none are hidden. Twelve are story - surviving the mammoth hunt, the Udam and Izila set-pieces, the four specialists joining the Wenja village, twelve specialist missions, and the two boss missions (The Fall of Batari, The Hunt for Ull). The rest are open: taming the four legendary beasts, building and upgrading the village, a large block of weapon and combat kill-counts, capturing all outposts and forts, the taming and collectible sweeps, and the Survivor-mode clears.",
                "The catalog marks it roughly two playthroughs - the Survivor-mode achievements, especially 'Survival of the Fittest' (finish on Expert with Permadeath on), want a dedicated careful run. Nothing is missable: outposts reset, side content persists, and every kill and collectible counter is cumulative.",
                "Tip: pick up beast-taming and the mounted / tamed-beast kill feats early - a sabretooth or a bear does most of the combat work and covers 'Sic 'Em', 'Menagerie' and the riding feats while you explore."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "The main story - surviving the mammoth hunt, repelling the Udam, rescuing a Wenja captive, escaping the Udam caverns, stealing the mask of Krati, the four specialists (Karoosh, Tensay, Wogah, Jayma) joining the village, twelve specialist missions, and the two boss missions.",
                "The achievements here: This Way To Oros (Survive the mammoth hunt.); Spearproof (Repel the Udam attack.); Liberator (Rescue a Wenja captive from the Izila.); Uncaged (Escape the Udam caverns.); Krati, Krati, Krati! (Steal the Izila mask of Krati.); Deadeye (Karoosh joins the Wenja village.); Spiritual Advisor (Tensay joins the Wenja village.); Mister Fix-It (Wogah joins the Wenja village.); Gray Huntress (Jayma joins the Wenja village.); Twelve Labors (Complete any 12 specialist missions.); To Ash (Complete the mission, The Fall of Batari.); Evolution in Action (Complete the mission, The Hunt for Ull.)."
            ]
        },
        {
            "heading": "Beasts & Village",
            "body": [
                "Taming the bloodfang sabretooth, great scar bear and snowblood wolf, fighting the bloodtusk mammoth, building or upgrading two huts, a Wenja population of 20, skinning a tamed beast, and completing all hut upgrades.",
                "The achievements here: Here Kitty (Tame the bloodfang sabretooth.); Big Teddy (Tame the great scar bear.); Endangered (Fight the bloodtusk mammoth.); Good Boy (Tame the snowblood wolf.); Home Improvement (Build or upgrade any 2 village huts.); Subdivisions (Your Wenja tribe reaches a population of 20.); Tears of Shame (Kill and skin 1 tamed beast.); Real Estate Baron (Complete all hut upgrades.)."
            ]
        },
        {
            "heading": "Weapon & Combat Feats",
            "body": [
                "25 takedowns, the club / spear / bow / fire / sling kill counts, mounted kills, poison influence, sting bombs, throwing shards, the long-range spear and arrow kills, hunting traps, 50 tamed-beast kills, 15 owl kills, learning all skills, 100 crafts, and the Pardaku Lookout leap.",
                "The achievements here: Killer's Belief (Eliminate 25 enemies using any takedown.); And Stay Down (Eliminate 100 enemies using a club.); Skewered (Eliminate 100 enemies using a spear.); Sharpshooter (Eliminate 100 enemies using a bow.); Inflammable (Eliminate 50 enemies with fire.); David And Goliath (Eliminate 10 enemies using a sling.); Outta My Way (Eliminate 25 enemies while riding any beast.); Bad Trip (Influence 25 enemies using poison.); BEES! (Eliminate 10 enemies using sting bombs.); Quickdraw (Eliminate 15 enemies using throwing shards.); Right On Target (Kill a target 50 feet away or more using a spear.); Bullseye (Kill a target 70 feet away or more using an arrow.); Gotcha (Eliminate 10 enemies using hunting traps.); Sic 'Em (Eliminate 50 hostile targets using a tamed beast.); Feathered Friend (Eliminate 15 enemies using your owl.); Expert Wenja (Learn all skills.); Armorer (Use the crafting ability 100 times to craft weapons or arrows.); Kanda Of Faith (Climb to the peak of Pardaku Lookout and leap off.)."
            ]
        },
        {
            "heading": "Outposts, Taming & Collectibles",
            "body": [
                "Capturing 10 outposts, all outposts and all forts, taming 7 beasts and 1 rare beast, healing a tamed beast 25 times, 80 collectibles, 15 'Help Wenja' quests, 15 hidden locations, 10 'Tribal Clash' and 5 'Beast Kill' quests, discovering the future past, and obtaining all other achievements (Apex Predator).",
                "The achievements here: Skirmish (Capture 10 outposts.); Expansion (Capture all outposts.); Conquest (Capture all forts.); Menagerie (Tame 7 beasts.); Fancy Friend (Tame 1 rare beast.); Veterinarian (Heal a tamed beast 25 times.); Cave Hoarder (Pickup 80 collectibles.); Good Neighbor (Complete 15 \"Help Wenja\" quests.); Mapmaker (Discover 15 hidden locations.); Crush Your Enemies (Complete 10 \"Tribal Clash\" quests.); Master Tracker (Complete 5 \"Beast Kill\" quests.); Mark 4 Wenja (Discover the future past.); Apex Predator (Obtain all the Achievements.)."
            ]
        },
        {
            "heading": "Survivor Mode",
            "body": [
                "Finishing the game in Survivor mode on any difficulty, then with Second Chance off, then with Permadeath on, and finally on Expert with Permadeath on ('Survival of the Fittest').",
                "The achievements here: TOP OF THE FOOD CHAIN (Finish the game in Survivor mode (Any difficulty).); TOP OF THE FOOD CHAIN (2ND CHANCE) (Finish the game in Survivor mode (Any difficulty) and the Second chance option activated.); TOP OF THE FOOD CHAIN (PERMADEATH) (Finish the game in Survivor mode (Any difficulty) and the Permadeath option activated.); SURVIVAL OF THE FITTEST (Finish the game in Survivor mode (Expert difficulty) and the Permadeath option activated... Forget it... No-one will ever achieve it.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to 'The Hunt for Ull', recruiting all four specialists and doing twelve specialist missions along the way.",
                "2. Tame the four legendary beasts and build the village up (population 20, all hut upgrades).",
                "3. Capture every outpost and fort, and sweep the collectibles, hidden locations and 'Help Wenja' / 'Tribal Clash' / 'Beast Kill' quests.",
                "4. Grind the weapon kill-counts and the mounted / owl / trap feats.",
                "5. Do a dedicated Survivor-mode Expert + Permadeath run for the four difficulty achievements.",
                "Tip: on the Permadeath run, keep a tamed bear as a bodyguard, hoard green-leaf healing plants, and fast-travel rather than crossing hostile territory on foot."
            ]
        }
    ]
};
