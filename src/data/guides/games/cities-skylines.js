// Cities: Skylines Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cities-skylines.json), whose 135 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   255710 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 127 of 135 ship a real,
//   official Steam description, quoted directly below (several carry a
//   deliberate trailing space, preserved byte-for-byte).
// - The 8 hidden achievements ship no Steam description; they are all
//   from the Race Day content pack and their conditions here are
//   curatorial, cross-checked against Steam Community DLC-achievement
//   guides.
// - The grouping follows Cities: Skylines' expansions and content packs,
//   read from what each achievement requires.
export const GUIDE = {

    slug: "cities-skylines-achievement-guide",
    category: "game",
    gameSlug: "cities-skylines",
    icon: "🏙️",
    title: "Cities: Skylines Achievement Guide",
    summary: "A practical guide to all 135 Steam achievements in Cities: Skylines - the base-game city-building milestones, the weather and disaster events, every transport-line type, the Green Cities, Parklife and Industries goals, Campus and Sunset Harbor, the Airports, Financial Districts and Hotels packs, and the eight hidden Race Day achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Cities: Skylines has 135 Steam achievements, 8 of them hidden. They accumulated across dozens of expansions and content packs, so large blocks require a specific DLC (Parklife, Industries, Campus, Sunset Harbor, Airports, Financial Districts, Hotels & Retreats, Plazas & Promenades and the Race Day pack that holds the 8 hidden ones).",
                "Achievements are disabled while mods are active, so a completion run must be vanilla (asset packs are fine, code mods are not). Nothing is missable - a city persists forever and you can keep building.",
                "Tip: build one very large, long-lived megacity with every DLC feature crammed in. Most achievements are 'have N of X' or 'reach milestone Y', so a single 100,000+ population city that you keep expanding will tick the vast majority; only the scenario wins and a few event achievements need dedicated attention."
            ]
        },

        {
            heading: "Building the City",
            body: [
                "First steps: Pioneer (first city), Terraformer (make a map), Decorator (make an asset), Well Informed (open every info-view panel), City Planner (draw 3 districts), Lawmaker (apply a district policy), Distroy (10+ districts with unique policies), Reporting! (check a citizen's route), Nomen Est Omen (name a road), Centurion (name 100 roads) and It's Called Steve (name a road \"Steve\").",
                "Services and monuments: Power at Your Fingertips (unlock all services), Heavenly City (unlock Monuments), then build each one - Medic! (Medical Center), A Huge Hadron (Hadron Collider), Beam Me Up (Space Elevator), New Eden (Eden Project), Short Fuse (Fusion Power Plant) - plus I Want It All (unlock every building), Fire Watch (5 Fire Stations), The Safest Town (5 Police Headquarters), Prison Break (15 Prisons) and Professional Dumper (fill five landfills).",
                "Growth and economy milestones: Metropolis (100,000 population), SIMulated City (nine unlocked map tiles), Rolling in Dough (15,000/week), Happy Town (95%+ happiness for 5 years), Unpopular Mayor (15% happiness), Tough City (survive 40%+ crime for 2 years), Safe City (crime under 10% for 4 years straight), Earthloving City (no pollution above 10,000 residents), Higher Education (70%+ highly educated above 10,000 people), Climbing the Social Ladder (educate a citizen 0 to level 3), Power to the People and Make Them Pay (tax industry / residential 5% higher for a year), Leisure Suites and Playing With The Boys (1000 squares of leisure / beach commercial), 1001 Nights (experience 1001 nights), Frenetic Player (click a police building 100 times in a row), Speed up! (100 km of road maintenance), Quay-King (build a quay) and With Canals You Can! (build a canal)."
            ]
        },

        {
            heading: "Weather, Seasons & Disasters",
            body: [
                "After Dark and Snowfall: Does My Bum Look Big In This? (change Chirper's look), It's Wintertime! (Chirper winter look), Singing In The- (rain), Foggy Weather (fog), Brrr! (winter map in the editor), Get Your Snowshoes Ready! (snowfall), Here's A Tram and I Love Trams! (1 / 10 tram lines), Are They Naked In There? (build a Sauna) and The Plowmaster (snowplows clear 2,000,000 units of snow).",
                "Natural Disasters: experience each event - We need snorkels! (tsunami), Shake It Up! (earthquake), It's heading right for us! (meteor strike), Drop the Base (sinkhole), Run, Bambi! (forest fire), Thunder and Lightning (thunderstorm), Twist and shout (tornado), What the...? (a special disaster) - plus Eternal City (ten disasters hit one city). Creator, We Have A Winner! and The Underdog cover making 10 scenarios and winning / losing 10."
            ]
        },

        {
            heading: "Transport Lines",
            body: [
                "Line counts: City in Motion and City in Motion 2 (20 / 50 transport lines), Rejoice And Be Ferry and Ferry Faerie (3 / 15 ferry lines), Triorail and Not So Mono (3 / 10 monorail lines), Blimp? Blimp. and Put Some Blimp In Your Blimp (3 / 10 blimp lines), Clark Cable and Cables Galore (5,000 / 20,000 cable-car passengers), Ambulare (5 Walking Tour lines), Sights To Be Seen (15 Sightseeing Bus lines), Trolleyface (35,000 trolleybus passengers) and World of Rotorcraft (15,000 passenger-helicopter passengers).",
                "Hubs and Mass Transit scenarios: Combo Breaker! (a Ferry-Bus Exchange, a Metro-Monorail-Train Hub, a Monorail-Bus Hub and a Multiplatform Train Station), Multidisciplinary Transport Tycoon (one of each of five listed hub types) and Totally In Motion (win all three Mass Transit scenarios)."
            ]
        },

        {
            heading: "Green Cities, Parklife & Industries",
            body: [
                "Green Cities: Super Self-Sufficient, I to the T and Organistic (all residential / office / commercial zoning of one specialised type), Green Energy (all power from non-raw-material sources), Friendly Teaching (one of each eco school) and Greenest City (no polluting industry, only office and specialised zones).",
                "Parklife: The Park To Rule All Parks (a max-level Park Tool park), Parking Not Forbidden (10 Park Tool parks), Z00 (a park with every zoo building), Coaster Tycoon (every Amusement Park building), Naturally (every Nature Reserve building) and Maintain That Park (a Park Maintenance Service plus a Zoo, Nature Reserve and Amusement Park).",
                "Industries: Full Capacity (an Industry Area at Level 5), Serial Investor (10 Industry Areas), Offshore Assets (5 Oil Rigs), Industry Tycoon (all Unique Factories), Postman (deliver 1,000,000 units of Mail), Just Tolling (one of each road Toll Booth) and Scaling Up (10 Warehouse buildings)."
            ]
        },

        {
            heading: "Campus & Sunset Harbor",
            body: [
                "Campus: Student Housing Project (10 Dormitories), Education Nation (15,000 students on campuses at once), Distinguished Academics (a \"Prestigious\" campus), Varsity Sports Patron (all five varsity arenas on one campus), Higher Learning (every Campus Area type fully built), Academic Scholar (100 academic works) and For For-Profit Education! (cover a 5,000-student campus's upkeep entirely from tuition).",
                "Sunset Harbor: Aquaculture (farm 7,500,000 units of fish and sea plants), Fisher King (catch 10,000,000 units of fish), Come Fly With Me! (60 Aviation Club tourists in a week) and The Waters of Our Lives (treat 20,000,000 m3 of waste water with Inland Water Treatment Plants)."
            ]
        },

        {
            heading: "Airports, Plazas, Financial Districts & Hotels",
            body: [
                "Airports: Airline Tycoon  (an airport area at level 3), Airlifter (10,000 airport-area passengers), Airport Architect (a terminal, a runway and an aircraft stand), Airfield Expertise (a 25,000-cell airport area) and High-cost-carrier  (max the ticket-price slider).",
                "Plazas & Promenades: Garbage Collection Issues (5 garbage service points at capacity), The Sweetest City (10 ice-cream stand plazas in one pedestrian area) and Very Focused (a residential, a commercial and a workplace-focused pedestrian area).",
                "Financial Districts: Can't Buy Me Love  (earn ₡5,000,000 through investments), All In (put ₡1,000,000+ into investments and hold for a month), Cash Flow (flood a bank building), So Much Cash! (move ₡2,000,000 with cash transport vans in a week) and No risk, no fun! (take a loan to make an investment).",
                "Hotels & Retreats: Very Accommodating (500 weekly hotel guests), Peak Season (organise three hotel events) and Fully Booked! (max guests at a 100+ room 5-star hotel)."
            ]
        },

        {
            heading: "Hidden Achievements (Race Day)",
            body: [
                "All eight hidden achievements come from the free Race Day content pack, which adds city events. Building and running the event routes levels them up over time.",
                "Start your engines! (host and finish a Motor Race event), Grand Circuit Pro (a 5 km Motor Race route), I Run This City (a 3 km Running route), Tour de Metro (a 4 km Cycling route), Foot Traffic (1,000 spectators at an event), White Night (hold a night-time parade), He Did What in This Cup? (host the top-tier Motor Racing event) and Grande Parade (host the top-tier Parade event)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Start one city you intend to keep for the whole run. In the first hours grab the cheap ones: Pioneer, Terraformer, Decorator, Well Informed, City Planner, Lawmaker, Reporting!, Nomen Est Omen, It's Called Steve, Does My Bum Look Big In This?, It's Wintertime!, Frenetic Player, Quay-King, With Canals You Can!, Here's A Tram, Are They Naked In There?.",
                "Grow it wide and tall for the milestone tier - Metropolis, SIMulated City, Power at Your Fingertips, Heavenly City and the five Monuments, I Want It All, the happiness/crime/education/tax achievements - and stack transport lines of every type as you go (City in Motion, the ferry/monorail/blimp/cable/tram pairs, Combo Breaker!, Multidisciplinary Transport Tycoon).",
                "Roll each DLC's feature into the same city: Green Cities zoning, Parklife parks, Industries areas, Campus campuses, Sunset Harbor fishing and water treatment, the Airports area, Plazas & Promenades pedestrian areas, Financial Districts investments, Hotels & Retreats hotels, and the Race Day events for the eight hidden ones.",
                "Do the scenario achievements (Totally In Motion, Creator, We Have A Winner!, The Underdog) and the disaster events (We need snorkels!, Shake It Up!, It's heading right for us!, Drop the Base, Run, Bambi!, Thunder and Lightning, Twist and shout, What the...?, Eternal City) in their own dedicated sessions - a disaster sandbox map clears that whole block quickly. The long grinds (1001 Nights, The Plowmaster, Postman, Aquaculture, Fisher King, The Waters of Our Lives) just accumulate while the city runs on fast-forward."
            ]
        }

    ]

};
