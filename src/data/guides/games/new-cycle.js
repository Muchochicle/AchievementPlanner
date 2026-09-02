// New Cycle Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/new-cycle.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2198510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "new-cycle-achievement-guide",
    "category": "game",
    "gameSlug": "new-cycle",
    "icon": "🌇",
    "title": "New Cycle Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in New Cycle (3 hidden). Covers the population and survival milestones, the migrant waves, the building, electricity and development goals, and a long tail of logistics, production and infrastructure feats. Three of the achievements are hidden - a clothing formula, an event choice, and a ration formula - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "New Cycle has 55 Steam achievements and 3 are hidden. The hidden three are 'Wrapper' (activate the improved clothing production formula), 'Onward to Delphi' (respond positively to the request for paper distribution, an event choice) and 'Chubby Chef' (permanently change the Ration formula). Everything visible is milestone-based: populations of 70 up to 600, surviving 1 to 25 years, going 3 and 5 years with no deaths, Craftsmen and Specialists appearing, the first locomotive, region and migrant, migrant waves of 5 / 10 / 15 / 20, 25 to 200 completed structures, 1,000 to 40,000 electricity generated, activating actions, trading, the Conveyor System and Basic Machinery developments, and a long tail of infrastructure feats - freight depots, trucks, mining towers, coastal structures, aesthetic assets, fine clothing, purified water, block housing, organic-waste processing, every fence and road type, Tier-III services, and 50 auto-trained Craftsmen.",
                "The catalog marks it difficulty 3. Nothing is missable and there is no hard fail state on a long game; the 25-year survival, 600 population and 40,000 electricity are the main time investment, and the no-death runs need a stable, well-provisioned settlement.",
                "Tip: aim for one very long, stable settlement - the 25-year survival, 600 population, 40,000 electricity and the big production totals all accrue on a single well-run save, and the no-death runs just need you to keep food, heat and healthcare ahead of demand."
            ]
        },
        {
            "heading": "Population & Survival",
            "body": [
                "Populations of 70 / 100 / 200 / 350 / 600, surviving 1 / 5 / 10 / 15 / 20 / 25 years, going 3 and 5 years with no deaths, Craftsmen and Specialists first appearing, the first locomotive, settling a region, the first migrant, and migrant waves of 5 / 10 / 15 / 20 people at once.",
                "The achievements here: Rising House (Reach a population of 70 inhabitants); Hope's Hamlet (Reach a population of 100 inhabitants); City of Second Chances (Reach a population of 200 inhabitants); Beacon of the Broken World (Reach a population of 350 inhabitants); Metropolis of Mankind's Might (Reach a population of 600 inhabitants); First Cycle (Survive 1 Year); Five Years Forward (Survive 5 Years); Ten Years of Fortitude (Survive 10 Years); Persistence Symbol (Survive 15 Years); Cement Roots (Survive 20 Years); Quarter-Century Mortar (Survive 25 Years); Say No to Death (Go 3 years without anyone dying); Muted Mortality (Go 5 years without anyone dying); The Return of Mastery (First time Craftsman appear in your community); Post Academia (First time Specialists appear in your community); Iron Horse (Produce your first locomotive); Non-modern Expansionism (Settled in a regional for the first time); Acceptants (Welcome outsiders into your community); A Palmful (5 new people join the community at once); One Squad (10 new people join the community at once); High ratio (15 new people join the community at once); Cauldron of Attraction (20 new people join the community at once)."
            ]
        },
        {
            "heading": "Building, Power & Development",
            "body": [
                "25 / 50 / 100 / 200 completed structures, generating 1,000 / 5,000 / 20,000 / 40,000 electricity, activating 1 and 10 actions, the first barter trade, the Conveyor System and Basic Machinery developments, and the three hidden achievements (the clothing formula, the paper-distribution choice, the ration formula).",
                "The achievements here: Rural Nest (Have 25 completed structures in settlement); Town-like Density (Have 50 completed structures in settlement); A Center of Rebirth (Have 100 completed structures in settlement); Where All Roads Lead (Have 200 completed structures in settlement); Awakening of Power (Generate 1,000 electricity); Dynamo (Generate 5,000 electricity); Bringer of light (Generate 20,000 electricity); Core Power (Generate 40,000 electricity); Reflexive (Activate 1 action); Regular interventionist (Activate 10 actions); Old World Tradition (Trade in barter for the first time); Belter (Complete Conveyor System development); Extra Limbs (Complete Basic Machinery development); Wrapper (Activate the improved (better) clothing production formula.); Onward to Delphi (Respond positively to the request for paper distribution when the event comes up.); Chubby Chef (Permanently change the Ration (food) formula.)."
            ]
        },
        {
            "heading": "Logistics, Production & Infrastructure",
            "body": [
                "3 and 5 District Freight Depots, 10 and 20 trucks produced, a pedestrian crossing, 3 advanced mining towers, 5 coastal structures, 20 aesthetic assets, 1,000 Fine Clothing, 5,000 purified water, 20 block-housing units, 3,000 Organic Waste processed, every fence and road type, structure coating, one of each Tier-III service structure, and 50 auto-trained Craftsmen.",
                "The achievements here: The Last Supply Line (Build 3 District Freight Depots); Warehouse Wonderland (Build 5 District Freight Depots); First Ignition (Produce 10 trucks); Big Rig Dreams (Produce 20 trucks); Crossing Into the Last Hope (Place any pedestrian crossing); Surveyor of the Future (Survey in 3 advanced mining towers); Shoreline Sanctuary (Build 5 Coastal structures); The City of Class (Place 20 Aesthetic assets in your city); Fashions of the Final Frontier (Produce 1000 Fine Clothing); Pressure Point (Produce 5000 water by purifying water); Birth of Skyscrapers (Build 20 units of Low- or Mid-Rise Block housing); Melting the Waste Mountain (Process 3000  Organic Waste from residential buildings); Fence Knitter (Build every type of fence); Coating Artisan (Use the structure coating feature); All roads lead to us (Use every type of road); Superior Community Servant (Build one of each Tier-III service structure); Manufacturing Workforce (Train 50 Craftsmen using auto-training)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start one settlement and keep it going for the full 25 years.",
                "2. Grow it to 600 population and build out to 200 structures.",
                "3. Scale electricity to 40,000 and the production totals (fine clothing, purified water, organic waste, trucks).",
                "4. Do the infrastructure checklist (every fence and road type, Tier-III services, coastal structures, freight depots).",
                "5. Take the hidden formula and event choices as they come up (clothing formula, paper distribution, ration formula).",
                "Tip: the no-death runs ('Say No to Death', 'Muted Mortality') are easiest once your city is mature - build a healthcare and food surplus first, then simply do not expand for the 3-to-5-year window while the counter runs."
            ]
        }
    ]
};
