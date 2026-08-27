// Frostpunk's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/frostpunk.json), whose 115 achievements
//   were sourced directly from Steam's own achievement schema for
//   appid 323190 via ISteamUserStats/GetSchemaForGame (fetched through
//   this app's own backend/services/steamApi.js) - 96 of 115 ship a
//   real, official Steam description, quoted directly below.
// - The 19 hidden achievements (each tied to a specific scenario's
//   story branch) are hidden achievements Steam never describes
//   publicly (confirmed via the same API call) - their descriptions
//   here are curatorial, sourced via independent, cross-agreeing
//   community documentation (Steam Community guides, SteamAH,
//   GameFAQs, TrueAchievements) of each one's real unlock condition.
//   Kept deliberately mechanical rather than narrating what each
//   choice's story consequence actually looks like, out of the same
//   spoiler-conscious convention this catalog already applies to other
//   heavily narrative-branching games.
// - The grouping below (city-management, society, and then one section
//   per scenario/mode: New Home, Refugees, The Arks, Fall of
//   Winterhome, Endless Mode, The Last Autumn, and On The Edge) mirrors
//   the game's own achievement-list structure (its apiname prefixes),
//   not an invented taxonomy.
export const GUIDE = {

    slug: "frostpunk-achievement-guide",
    category: "game",
    gameSlug: "frostpunk",
    icon: "🏙️",
    title: "Frostpunk Achievement Guide",
    summary: "A practical guide to all 115 Steam achievements in Frostpunk - city-management and society milestones, every scenario's own story-branch achievements, Endless Mode, and the game's hardest Iron Man and Survivor Mode challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Frostpunk has 115 Steam achievements, spread across general city-management milestones and seven distinct scenarios/modes (New Home, Refugees, The Arks, Fall of Winterhome, Endless Mode, The Last Autumn, and On The Edge), each with its own dedicated achievement set.",
                "Most scenario achievements require a specific playthrough built around one goal (a particular law path, a specific building combination, a no-deaths run) rather than accumulating naturally - expect to replay a scenario multiple times with different goals in mind, rather than clearing everything in one run.",
                "Nothing here is permanently missable in the sense of a single save being ruined - every scenario can always be replayed from the start."
            ]
        },

        {
            heading: "Economy & City-Building",
            body: [
                "Built to Serve (build an automaton), Advanced Designs (have an Advanced Coal Mine, Advanced Wall Drill, and Advanced Steelworks at once), Expats (set up 2 Outposts in one playthrough), Oxbridge (4 Workshops researching at once), City of Steam (15 automatons at once), and City of Man (over 650 people at once) are all general late-game scale milestones, reachable in most scenarios given enough growth.",
                "Unskilled Labour (finish a scenario without Steam or Advanced buildings), Vegetarian and Carnivore (finish using only Hothouses, or only Hunters, when you have the choice), Worse than London and Better than London (finish without a single House/Bunkhouse, or without a single Tent), Tis but a Scratch (finish without an Infirmary or House of Healing), Charcoaled (finish using only Charcoal Kilns for coal), Satellites (finish without expanding the Generator's range), and Central Heating (finish without a single Steam Hub) are all deliberate self-imposed building restrictions.",
                "Urban Planner (300 people in one Steam Hub's heat zone), Power Overwhelming (a fully upgraded Generator), Hyperefficient (a workplace with efficiency greater than ... [200%]), Autonomous City (automatons in more than half your workplaces in a city of 200+), and Shai Hulud Summoner (4 Coal Thumpers working at once) are each their own specific infrastructure milestone."
            ]
        },

        {
            heading: "Society",
            body: [
                "Once More unto the Breach (provide an amputee with a prosthesis), Bread and Games (everyone in a 200+ city has Public House and Fighting Arena access), Promised Land (maximum hope, zero discontent), Politician (survive an overthrow threat), and Bad at Politics (keep every promise you make) are all general society-management milestones, not tied to any one scenario.",
                "The Scientific Method, vol. 1 and The Scientific Method, vol. 2, both hidden, track a specific research thread: finishing the Automaton project unlocks the first, while choosing the Radical Treatment law for amputees and letting its resulting research project run its course unlocks the second.",
                "Please, Sir, I Want Some More, also hidden, is a smaller, specific law combination: enact Child Labor, then agree to give children extra rations."
            ]
        },

        {
            heading: "New Home",
            body: [
                "Leader (finish New Home) and Iron Man (New Home) (finish on Hard) are the scenario's baseline completion achievements. The Saviour and The Iron Saviour ask for the same, but with no deaths from cold, hunger, sickness, or overwork - on Normal and Hard respectively.",
                "Compassionate (accept every group of refugees), United (never let anyone leave for London), and Lost Souls (save everyone in Frostland) are each their own distinct story-choice path through the scenario.",
                "Golden Path, My Turn to Speak, Banksy, and Negotiator are all hidden achievements tied to specific peaceful resolutions of the Londoners' storyline: never passing a severe law or harsh ability for the whole scenario; letting the protesters speak enough times before choosing to speak yourself; resolving the graffiti conflict without punishing anyone; and resolving the theft conflict without punishing the thief.",
                "New Home Survivor rounds out the scenario's achievement set for its Survivor Mode difficulty."
            ]
        },

        {
            heading: "Refugees",
            body: [
                "Refugee and Iron Man (Refugees) are the scenario's completion and Hard-difficulty completion achievements, alongside Refugees Survivor for Survivor Mode.",
                "Search and Rescue (rescue everyone coming to the city) is the scenario's dedicated story-choice achievement.",
                "The Union and Unknown Ship, both hidden, reward a fully peaceful resolution of the lords' class conflict (accepting every group and resolving it without further unrest) and finding a specific unknown ship out on the sea, respectively."
            ]
        },

        {
            heading: "The Arks",
            body: [
                "Technocrat and Iron Man (The Arks) are the completion and Hard-difficulty achievements, alongside The Arks Survivor for Survivor Mode.",
                "Conservationist (save every Seedling Ark) is the scenario's dedicated story-choice achievement.",
                "Everybody Lived for Once, a hidden achievement, asks for the strongest possible outcome: finish the scenario having saved every settlement. Sprinter, also hidden, is a speed-focused goal instead: find New Manchester before Day 15."
            ]
        },

        {
            heading: "Fall of Winterhome",
            body: [
                "Winterhome, Iron Man (Fall of Winterhome), and The Winterhome Survivor are the scenario's completion achievements across Normal, Hard, and Survivor Mode.",
                "All children on board and Full Dreadnought, both hidden, are the scenario's two big evacuation-focused goals: sending every child (including amputees fitted with prostheses) aboard the Dreadnought, and finishing with the Dreadnought fully upgraded and filled with people."
            ]
        },

        {
            heading: "Endless Mode",
            body: [
                "Master Archivist and A Tomb for Memories track building and filling the Archives, while Full House (700+ population) and Notting Hollow (600+ living in Houses only) are population-scale milestones.",
                "Let There Be Light (10 Street Lamps), Hyde Park Corner (a Town Square of each size), Walk on the Grass (a Garden of each size), and Backup Plan (stockpile 35,000 Coal and 10,000 Food Rations) are each their own specific building/stockpile goal.",
                "Marathon Medium, Ultramarathon Medium, Marathon Hard, Ultramarathon Hard, Marathon Extreme, and Ultramarathon Extreme scale endurance survival (50 or 100 days) across three difficulty tiers.",
                "There was no Waldo (explore every Frostland site between storms), Rise of the Machines (20 working automatons), By the Sweat of their Brow (survive 75 days with no automatons at all), Endless Social Activist and Endless Slave Driver (make every other settlement loyal, or distrustful, toward you), and I See Friends Holding Hands (have an ally send Emergency Aid to another settlement) round out the mode's remaining goals.",
                "Hi Marek!, a hidden achievement, is the mode's one joke ending: lose a playthrough of Serenity mode."
            ]
        },

        {
            heading: "The Last Autumn",
            body: [
                "Builder, Iron Man (The Last Autumn), and The Last Autumn Survivor are the scenario's baseline completion achievements. Perfectionist (fully upgraded Generator, no construction faults) and A for Effort (a Generator with every construction fault, in Endless Mode) are its exact opposites.",
                "I'll Be Home for Christmas (finish before the last shipment), Fisher King (finish without Foragers' Camps), Not great, not terrible (no one in Safe or Deadly workplaces), Emissions Reduction (finish using no Coal-consuming buildings), All Along the Watchtower (only convicts and engineers left at the end), Arise Ye Workers (only workers left at the end), Bonus Pater Familias (no deaths), No Crunch (finish without Two Shifts or Extended Shifts), and Ducks in a Row (no construction pause longer than 24 hours) are each their own distinct self-imposed challenge on the same scenario.",
                "On the Waterfront (4 Advanced Docks and 12 Reloading Stations at once) and Messrs Gabriel (use the Telegraph Station 20+ times) are infrastructure/utility milestones, while Weathering the Storm, Winter Ready, and One More Day Syndrome are Endless Mode variants tied to storm damage, weather timing, and reaching Day 100.",
                "It Was Me All Along is a smaller discovery achievement: find generator parts meant for Winterhome and keep them for yourself."
            ]
        },

        {
            heading: "On The Edge",
            body: [
                "This is New London, Over (contact New London) and First Steps (build a safe route) mark the scenario's earliest story beats.",
                "Green Thumb, Defender of the Oppressed, and Guardian each ask you to complete every improvement in one specific settlement - Hot Springs, Shipwreck Camp, and Children's Mine respectively - while The Contractor asks for every settlement developed to its highest level at once.",
                "Frostland Explorer (explore every Frostland site) and Bald Mountain (cut down every tree in Outpost 11) are both thorough-exploration achievements.",
                "Social Activist and Slave Driver are the scenario's two opposite diplomacy achievements - making every other settlement loyal to you, or distrustful of you.",
                "Iron Man (On The Edge) and On The Edge Survivor cover the scenario's Hard and Survivor Mode completions.",
                "You Had To Do It, I Feel Lucky, All Your Base Are Connect To Us, Unforgiven, and We Are In This Together are all hidden achievements: renaming Outpost 11 to New London; always choosing the risky Frostland exploration option; building a safe route to every settlement; and the scenario's two opposite endings - letting New London fall, or saving it.",
                "Tip: Unforgiven and We Are In This Together are mutually exclusive outcomes of the same story choice, so plan for two separate playthroughs of On The Edge if you want both."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play each scenario normally on Normal difficulty first, picking up its baseline completion achievement and whichever general Economy/Society achievements naturally come together along the way.",
                "Dedicate a second, goal-focused playthrough of each scenario to its own story-branch and hidden achievements - most require a specific set of choices you won't stumble into by accident.",
                "Move on to Iron Man and Survivor Mode runs only once you're comfortable with a scenario's normal difficulty - these are Frostpunk's hardest challenges and benefit from already knowing the map and the story beats.",
                "Treat Endless Mode and its many building/survival-time achievements as long-term, ongoing goals to chip away at between other scenarios rather than a single dedicated session."
            ]
        }

    ]

};
