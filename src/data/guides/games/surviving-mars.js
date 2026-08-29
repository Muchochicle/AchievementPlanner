// Surviving Mars Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/surviving-mars.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   464920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "surviving-mars-achievement-guide",
    "category": "game",
    "gameSlug": "surviving-mars",
    "icon": "🔴",
    "title": "Surviving Mars Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Surviving Mars - none are hidden. mysteries & story, colony growth & tech, challenges & feats, completion & one-offs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Surviving Mars has 80 Steam achievements and none are hidden. They cover the story Mysteries, colony-scale growth and tech milestones, a set of self-imposed challenge runs (specialist-only colonies, no-disaster survivals), and a block of miscellaneous feats.",
                "Nothing is missable within a colony, but several achievements are mutually exclusive playstyles (a vegan colony vs. a meat one, an all-underground colony) so they need separate games, and the Mystery achievements each require that Mystery to be selected.",
                "Tip: play a long, stable colony for the population, tech and Mystery achievements, then do dedicated short colonies for the restrictive challenge runs (specialist-only, all-underground, no disasters)."
            ]
        },
        {
            "heading": "Mysteries & Story",
            "body": [
                "The Mystery completions (The Power of Three, Dredgers, Spheres, Inner Light, Artificial Intelligence, Marsgate and the rest) and the early story/scenario milestones.",
                "The achievements here: Cubism (Complete The Power of Three Mystery); Space Invaders (Complete the Dredgers mystery); Mirror, mirror... (Complete the Spheres mystery); Swan Song (Complete the Inner Light mystery); Sentience 2.0 (Complete the Artificial Intelligence mystery); Whistleblower (Complete the Marsgate mystery); The Beanstalk (Build the Space Elevator); Snow Globe (Build the Geoscape Dome); It's Always Sunny on Mars (Build the Artificial Sun); Alpha Scientist (Build the Omega Telescope); The Rabbit Hole (Build the Mohole Mine); Cast in Concrete (Build the Excavator); What is Real? (Build Project Morpheus); Bubble Wrap (Build a Dome); There and Back Again (Refuel a Rocket); Spacey Food (Harvest Food on Mars); Where No Man has Gone Before (Analyze an Anomaly); Marvin the Martian (First child on Mars); Good News, Everyone! (Pass the Colony Approval stage); Space Communism (Reach 250 Colonists)."
            ]
        },
        {
            "heading": "Colony Growth & Tech",
            "body": [
                "The colony-scale goals: population milestones, dome and district builds, the tech-tree completions, resource stockpiles, and the economy and power infrastructure.",
                "The achievements here: Multiplanet Species (Reach 1000 Colonists); The Boundaries of Knowledge (Research all non-Breakthrough Technologies); Can't Stop the Signal (Scan all Sectors); The Final Frontier (Deep scan all Sectors); How Much is a Googol? (Reach $100,000 M); Wubba, lubba, dub, dub! (Build 1000 buildings); You can't take the Sky from Me! (Land 50 Rockets on Mars in a single playthrough); In the High Tower (Build a Dome Spire); Open the Pod Bay Doors (Build a Shuttle Hub); A Shooting Star (Shoot down a meteorite); Dream of a Green Mars (Reach 200 Vegans); Marsopolis (Reach 100 Colonists living in a single Dome); Assisted Self-Improvement (Treat 50 Colonists in a Sanatorium); For the Benefit of All (Play as USA and research all technologies in the Engineering tech-tree before Sol 100); Building a Better Future (Play as Blue Sun Corporation and export 500 units of Rare Metals to Earth before Sol 100); Interesting Times (Play as China and reach a population of 200 before Sol 100); In the Service of Humankind (Play as India and have 5 Domes before Sol 100); Because we Care (Play as Europe and research 5 Breakthrough Technologies before Sol 100); Aren't they Cute? (Play as SpaceY and control 200 Drones before Sol 100); Gagarin's Legacy (Play as Russia and extract 10000 resource units from Deposits before Sol 100)."
            ]
        },
        {
            "heading": "Challenges & Feats",
            "body": [
                "The self-imposed challenge achievements: specialist-only or vegan colonies, no-disaster survivals, speed goals, and the difficulty-modifier runs.",
                "The achievements here: The New Ark (Play as the Church of the New Ark and have 100 people born on Mars before Sol 100); Perfect Moment (Have a Colonist with all four stats at maximum); A Better Planet (Have an Earthsick Colonist who decided to stay on Mars); Posthuman (Have a Colonist with 2 Rare traits); The Watney Challenge (Pass the Colony Approval stage with a single Founder); S.P.E.C.I.A.L. (Have a Colonist with 5 Perks); The New Wonders of the World (Construct 5 different Wonders in a single playthrough); The Positronic Man (Have a Biorobot Colonist); Do Androids Dream of Electric Sheep? (Have a Dome populated by at least 50 Biorobot Colonists); Immortality of a Kind (Have a citizen that was reconstructed by Project Phoenix); Space Shopping (Play as USA and have a Geoscape Dome with a Megamall before Sol 100); Tao (Play as China and have Tai-chi Gardens in 10 Domes before Sol 100); Space Capitalism (Play as Blue Sun Corporation and produce $100,000 M Funding before Sol 100); Europa Universalis (Play as Europe and reach daily production of 10,000 Research before Sol 100); Waste Not, Want Not (Play as India and convert 3000 Waste Rock to useful materials before Sol 100); The Pace of Progress (Play as SpaceY and complete all Sponsor Goals on challenge rating 500% or higher); No Pain, No Gain (Play as Russia and have 500 colonists on challenge rating 500% or higher); The Garden of Eden (Play as Church of the new Ark and have 250 Colonists at 70+ Comfort before Sol 100); Bushido (Play as Japan and train 200 specialists before Sol 100); Gold Rush (Play as Brazil and convert 2000 Waste Rock to Rare Metals before Sol 100)."
            ]
        },
        {
            "heading": "Completion & One-Offs",
            "body": [
                "The remaining feats and completions: the underground-colony and all-tech goals, the disaster-prevention counts, and the miscellaneous one-off achievements.",
                "The achievements here: Move this Mountain! (Have a RC Dozer complete a landscaping project); Seeds of Life (Harvest Seeds on Mars); Red Button (Nuke the Polar Caps); Tears of Joy (Have water rain on Mars); Fear my Botany Powers! (Plant a tree); Now we need ducks (Have a lake with liquid water); Detox (Endure the Toxic Rains); Skies of Blue (Create blue skies by terraforming); Creator of Worlds  (Max all Terraforming Parameters); Capital Achievement (Construct a Capital City); Asteroid Hopping (Have a single Asteroid Lander visit 10 asteroids before returning to Mars); Into the Unknown (Go game over as your last colonists leaves Mars behind to take a trip into the great unknown); Job’s done (Fully develop all buried wonders in the underground, before sol 100); Mission Success (Successfully return from an asteroid); Multitasking (Visit 3 asteroids simultaneously); Mysteries of Mars (Fully develop a buried wonder to benefit your colony); The Perfect Run (Retrieve all resources from an asteroid & leave nothing behind); Space Dwarves (All your colonists live underground (at least 200 colonists)); Space Explorer (Complete all techs in the recon & expansion tech tree); Will they hold? (Prevent 100 Cave-ins in total from Underground Marsquakes)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a large, stable colony: hit the population and dome milestones, complete both tech trees, and finish whichever Mystery you selected.",
                "2. Replay to cover the other Mysteries (one per game) and any tech or resource goals you missed.",
                "3. Do dedicated challenge colonies for the restrictive runs - specialist-only, all-underground, vegan, no-disaster.",
                "4. Mop up the one-off feats and disaster-prevention counts.",
                "Tip: the challenge-run achievements are easiest on a low-difficulty map with a friendly starting location - you are trading the run's restriction for an otherwise-forgiving colony, so do not stack hard map modifiers on top."
            ]
        }
    ]
};
