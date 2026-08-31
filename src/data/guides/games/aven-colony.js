// Aven Colony Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/aven-colony.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   484900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "aven-colony-achievement-guide",
    "category": "game",
    "gameSlug": "aven-colony",
    "icon": "🛰️",
    "title": "Aven Colony Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Aven Colony - none are hidden. Covers the ranks and campaign-mission clears, the building and colony milestones, and the artifacts, expeditions and oddity achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Aven Colony has 48 Steam achievements and none are hidden. Fourteen cover the four military-style ranks and completing each of the nine campaign missions (plus 'This is Madness!' for an Insane-difficulty win), eighteen are building and colony milestones (100 upgrades, 100 farms, 200 solar panels, 2000 immigrants, 1000 population, 50 sols survived, 3 megastructures at once), and sixteen are the four artifact activations, expedition-map goals (95% fog revealed, 25 explorers rescued, 50 points of interest) and deliberate oddities ('Zombies!' for 50 plague infections, 'The Great Depression' for 200 unemployed, two Sol-5 speed goals).",
                "The catalog marks it difficulty 3 and about two campaigns' worth of play. Most milestones accumulate across colonies; the Insane win and the two Sol-5 challenges ('Speed Runner', 'Arctic Expansion') are the pointed ones.",
                "Tip: play the campaign on Normal for the mission and rank achievements, keep a long sandbox or replayed colony running for the big cumulative counts, and do the two Sol-5 challenges as focused attempts."
            ]
        },
        {
            "heading": "Ranks & Campaign Missions",
            "body": [
                "Winning a mission on Insane ('This is Madness!'), reaching Commander, High Commander, Chancellor and Expedition President, and completing the Vanaar, Sandy Gulch, Azara Falls, Hyla's Crescent, Tenari Glacier, Arido Mesa, Kelori Strand, Valley of Death and Eden Crater missions on Normal or higher.",
                "The achievements here: This is Madness! (Win a campaign mission on Insane difficulty); Chancellor! (Attain the rank of Chancellor); Commander! (Attain the rank of Commander); High Commander! (Attain the rank of High Commander); President! (Attain the rank of Expedition President); Vanaar Champion (Complete the Vanaar campaign mission on Normal difficulty or higher); Sandy Gulch Champion (Complete the Sandy Gulch campaign mission on Normal difficulty or higher); Azara Champion (Complete the Azara Falls campaign mission on Normal difficulty or higher); Hyla's Champion (Complete the Hyla's Crescent campaign mission on Normal difficulty or higher); Tenari Champion (Complete the Tenari Glacier campaign mission on Normal difficulty or higher); Arido Champion (Complete the Arido Mesa campaign mission on Normal difficulty or higher); Kelori Champion (Complete the Kelori Strand campaign mission on Normal difficulty or higher); Valley of Death Champion (Complete the Valley of Death campaign mission on Normal difficulty or higher); Eden's Champion (Complete the Eden Crater campaign mission on Normal difficulty or higher)."
            ]
        },
        {
            "heading": "Building & Colony Milestones",
            "body": [
                "100 building upgrades, 100 farms, 200 solar panels, 100 mines, 50 creep spores destroyed, 100 structures recycled, 2000 immigrants, 100 trade contracts, 100 lightning strikes blocked, 10 deposits depleted, 10 retail centers, 1000 population, 50 sols, 3 megastructures and 10 parks at once, 1000 candy, a colony boost, and 10 simultaneous policies.",
                "The achievements here: The Upper Grade (Complete 100 building upgrades); Farm Life (Build 100 farming structures); Solar Tycoon (Build 200 Solar Panels); Sorry, We Don't Serve Miners (Build 100 Mines or Laser Mines); Blasted! (Destroy 50 Creep Spores before they reach your colony); Fire Sale (Recycle 100 structures); Ellis Island (Accept 2000 immigrants); Jack of All Trades (Complete 100 trade contracts); Dark and Stormy Night (Protect the colony from 100 lightning strikes); I'm Losing My Mine (Deplete 10 Mineral Deposits); Consumerism (Build 10 Retail Centers); A Thousand (Get 1000 colonists in the same colony); Sol Survivor (Survive for 50 sols in any mission); Megalopolis (Own 3 fully functional megastructures in the same colony simultaneously); Park Ranger (Own 10 fully functional Parks in the same colony simultaneously); Sugar Tooth (Manufacture 1000 Candy); Booster Shot (Enable a Colony Boost); Kid in an Elevator (Enable 10 Social Policies or Powers simultaneously)."
            ]
        },
        {
            "heading": "Artifacts, Expeditions & Oddities",
            "body": [
                "Activating a Unity, Cleansing, Empowerment and Shielding artifact, 20 Sandworm Meat, 95% fog revealed, 25 explorers rescued, 5 expedition centers at once, 50 points of interest, 500 enhancers, 5 landslide referendum wins, 10 warnings from Veronika, 50 plague infections, 200 unemployed at once, and the two Sol-5 goals for Vanaar and Azara Falls.",
                "The achievements here: United (Activate a Unity Artifact); Cleansed (Activate a Cleansing Artifact); Empowered (Activate an Empowerment Artifact); Shielded (Activate a Shielding Artifact); Early Bird (Bring 20 units of Sandworm Meat back to the colony); All is Revealed (Reveal 95% of the fog on an expedition map); Rescuer (Rescue 25 lost explorers); Expedition Tycoon (Keep 5 Expedition Centers operational simultaneously); Lewis & Clark (Explore 50 points of interest on expedition maps); Heisenberg (Distribute a total of 500 enhancers); Rigged Elections (Win 5 referendum elections in a row with at least 90% of the vote); You Have Been Warned (Receive 10 warnings from Commissioner Veronika); Zombies! (Get 50 colonists infected by the plague); The Great Depression (Have 200 colonists unemployed simultaneously); Speed Runner (Complete Vanaar by the end of Sol 5 (in campaign mode at Normal difficulty or higher)); Arctic Expansion (Reach a population of 350 colonists in Azara Falls by the end of Sol 5 (in campaign mode at Normal difficulty or higher))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the nine-mission campaign on Normal for the mission clears and the four ranks.",
                "2. Keep one colony running long for the cumulative building and population milestones (upgrades, farms, solar, immigrants, 1000 pop, 50 sols).",
                "3. Activate all four artifact types and hit the expedition goals (fog, rescues, points of interest).",
                "4. Do the oddity achievements deliberately: let 50 colonists get infected, force 200 unemployed, win five 90%+ referendums in a row.",
                "5. Do focused Sol-5 runs for 'Speed Runner' (Vanaar) and 'Arctic Expansion' (Azara Falls), and one Insane win for 'This is Madness!'.",
                "Tip: the negative achievements ('Zombies!', 'The Great Depression') are easiest at the very end of a finished colony - stop treating the plague and demolish workplaces once everything else is done."
            ]
        }
    ]
};
