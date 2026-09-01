// Tropico 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tropico-4.json), whose 70 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   57690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tropico-4-achievement-guide",
    "category": "game",
    "gameSlug": "tropico-4",
    "icon": "🏝️",
    "title": "Tropico 4 Achievement Guide",
    "summary": "A practical guide to all 70 Steam achievements in Tropico 4 (8 hidden). Covers the base campaign and the Modern Times expansion campaign, plus a long list of economic, disaster-survival, building and edict challenges. Eight of the achievements are hidden - the campaign progress markers - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tropico 4 has 70 Steam achievements and 8 are hidden. All eight are campaign progress markers: four for the base campaign (its three milestones and completion) and four for the Modern Times expansion campaign (missions 1, 4 and 6, and completing it). Everything visible is a challenge unlocked in any mission or sandbox game - economic milestones ($1M from tourism/industry, populations, buildings), surviving disasters (volcanoes, tornadoes, tsunamis, droughts), building combinations, character-trait levels, and edict counts.",
                "The catalog marks it difficulty 2 - it is a relaxed political city-builder with no failure pressure outside the campaign missions. Nothing is missable; the challenge achievements can be pursued in dedicated sandbox games, and the campaigns can be replayed.",
                "Tip: knock out the big economic and building achievements in a long, peaceful sandbox game on a large map with cheats or God mode allowed - many of them ($1M tourism, 1000 population, 1337 buildings, all trait levels) are just a matter of time on a stable island."
            ]
        },
        {
            "heading": "Campaigns & Core Challenges",
            "body": [
                "The base and Modern Times campaign progress markers, plus suppressing coups and uprisings, 1337 buildings, Swiss-account money, roads and garages, a shack-free population, 200 buildings on one island, soldiers, $1M from tourism and industry, high happiness, a Sandbox God-mode finish, all tutorials, agenda and faction tasks, arrests, the full ministry, minister gaffes, and the disaster survivals (oil spill, fires, volcanoes, tornadoes, drought, tsunami).",
                "The achievements here: Coup de Grace (Suppress a Military Coup); Iron Fist (Suppress an uprising); Elitist (Construct 1337 buildings); Filthy Rich (Make $100 000 for your Swiss Bank account in a mission); Heavy Traffic (Construct at least 1000 meters of roads and 4 Garages); Homes for Everyone (Have population of over 300 and no Shacks); Metropolis (Construct 200 buildings on one island); Militarist (Have more than 20 soldiers and generals in one game); Paradise Island (Earn $1 000 000 from tourism profits in a single game); Top Exporter (Earn $1 000 000 from industry in a single game); Tropican Fiesta (Finish a game with overall Happines of your citizens above 70%); God Complex (Finish a Sandbox game in God mode); Dictatorship for Dummies (Finish all tutorial missions); Tropico VS The World (Reach the first milestone of the base campaign.); Scapegoat (Reach the second milestone of the base campaign.); The Mastermind (Reach the third milestone of the base campaign.); On Top of the World (Complete the base campaign.); National Agenda (Complete 20 agenda tasks in a single mission); Domestic Agenda (Complete 10 Faction tasks in a single mission); Foreign Agenda (Complete 10 Foreign tasks in a single mission); War on Crime (Arrest 10 Criminals in a single mission); The Full Monty (Have a full Ministry cabinet); You are Fired! (Fire a Minister because of his gaffe); Your Lucky Day (Hire an unemployed citizen as a Minister); The Golf Balls Solution (Clean an Oil Spill in less than 4 months); Year Of the Dragon (Put out 10 buildings on fire in a single mission); Old Faithful (Survive 3 Volcanic eruptions in a single mission); Tornado Valley (Survive a Tornado Outbreak with no human casualties); Modern Agriculture (Have no dry fields at the end of a Drought); Head for High Ground (Survive a Tsunami with no human casualties)."
            ]
        },
        {
            "heading": "Economy, Buildings & Edicts",
            "body": [
                "All blueprints, nuclear power, luxury goods, an upgraded chemical plant, museum art, customs money, a clone dying for you, the Mausoleum trap, theme-park and weather-station combos, character-trait levels, imports, executing Juanito, quick-builds, 10 disasters survived, a 1000 population, tourism and military milestones, faction and foreign relations, the sandbox options, prisons, mansions, tax cuts, the Babel Tower and Ziggurat, the renovated Palace, bio farms, the Diamond Cathedral, and the Aerodrome/Seven-star hotel combo.",
                "The achievements here: Building Blues (Unlock 20 Blueprints in a single mission); The Power of the Atom (Generate 1 000 MW of electricity in a Nuclear Power Plant); Nuclear Future (Have a Nuclear Power Plant and a Nuclear Program built on your island); Made In China (Distribute more than 1 000 Luxury Goods from a Shopping mall ); Smells Like Chemistry (Buy all upgrades for a Chemical Plant); Mona Llama (Earn more than $30 000 from selling Tropican art in a Museum of Modern Art); Special Taxes (Gain $15 000 for your Swiss account from a Customs Office); The Rumors of my Death... (Have one of your clones die instead of you during an assassination attempt); It's a Trap! (Kill 5 rebels at once with a trap in your Mausoleum); Theme Park (Have a Roller Coaster near a Ferris Wheel and an Aqua park); Prepared For Everything (Buy all upgrades for a Weather Station); Past and Present (Have both a Dungeon and a Colonial Museum in the same mission); Competent (Have Character Trait at level 5); Specialist (Have 3 Character Traits  at level 5); Expert (Have all Character Traits at level 5); Foreign Cuisine (Import 2 000 food); IMPORTant business (Import 10 000 resources); Kill Juanito (Issue an Execution order on a citizen called Juanito); Instant Construction (Issue the Quick-build command on 10 constructions); Curse of the Llama (Survive 10 disasters); Megalopolis (Reach a population of 1000); Touristico (Have 10 hotels and 15 tourist attractions); Generalissimo (Have a total of 100 Soldiers and Generals); Domestic Affairs (Have maximum respect with all factions); Foreign Affairs (Have maximum relations with all foreign powers); Tropico for the Tropicans (Finish a sandbox game with the \"No immigrants\" option); Down with the Tyrant (Finish a sandbox game with the \"Rebel Yell\" option); The Big House (Have 40 inmates in your Prisons); From Rags to Riches (Have 30 Mansions and 10 Tenements); Philanthropist (Issue the \"Tax Cut\" edict 10 times in a single mission); Crisis Measures (Complete Modern Times campaign mission 1.); The Conclave (Complete Modern Times campaign mission 4.); Averted World War 3 (Complete Modern Times campaign mission 6.); Zeitgeist (Complete the Modern Times expansion campaign.); Office Space (Have a Babel Tower with 50 employees); Better Than Tenements (Have a Ziggurat with 50 families as tenants); Capo Di Tutti Capi (Renovate your Palace); Going Green (Build 4 Bio Farms and 4 Organic Ranches in a single mission); Heaven On Earth (Build a Diamond Cathedral before 1990); A Better Tourist Trap (Build an Aerodrome and a Seven-star hotel in a single mission)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign to completion, which unlocks its three milestone achievements and the completion one.",
                "2. Play the Modern Times expansion campaign for its four hidden achievements.",
                "3. Do the disaster-survival challenges (volcanoes, tornadoes, tsunamis, drought, oil spill) as they come up in missions.",
                "4. Set up a long, stable sandbox game for the big economic and building achievements (1000 population, $1M tourism, 1337 buildings, all trait levels).",
                "5. Mop up the edict, ministry and building-combination achievements across sandbox games.",
                "Tip: 'Elitist' (1337 buildings) and 'Curse of the Llama' (survive 10 disasters) are best done in one very long sandbox game - keep it running and keep building."
            ]
        }
    ]
};
