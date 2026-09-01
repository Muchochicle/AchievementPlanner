// NieR:Automata Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nier-automata.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   524220 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 30 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nier-automata-achievement-guide",
    "category": "game",
    "gameSlug": "nier-automata",
    "icon": "🖤",
    "title": "NieR:Automata Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in NieR:Automata (30 hidden). Covers the three main routes and their endings (A, B, C/D and the true ending E), the area-clear story beats, the combat-style trophies, the collection and upgrade grinds, and the game's joke achievements. Thirty of the achievements are hidden and their unlock conditions are researched from community 100% guides. Most non-story trophies can also simply be bought from a machine in Chapter Select.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "NieR:Automata has 47 Steam achievements and 30 are hidden. Nineteen are story beats - reaching the Bunker and the City Ruins, clearing each major area (desert, amusement park, alien ship, forest castle, flooded city, copied city, abandoned factory), and the route endings: One Battle Ends (A), A New Battle Begins (B), Leaving for the New World (C/9S), Beautiful World (D/A2) and The Minds That Emerged (the true ending E). Four are combat-style feats (a hacking minigame, 100 hacking kills, 50 remote-control kills, 50 berserk kills), and the rest are the series' trademark jokes - blowing off 2B's skirt ten times, killing friendly machines, destroying Emil, visiting Kaine's house, and Transcendent Being for seeing all 26 endings.",
                "The catalog marks it difficulty 2 and the completion time low, because after finishing route C/D almost every remaining trophy - collectibles, upgrades, money, fishing, riding - can be bought outright from a machine in Chapter Select for in-game gold, and Chapter Select also lets you replay any segment for the joke and ending trophies. The real requirements are three full routes (A, B, then C/D) and grinding gold for the shop.",
                "Tip: don't grind collectibles or weapon upgrades manually - finish route C/D, farm gold (the desert 'Farewell' spot or selling upgrade materials), then buy 'Cherish Our Resources', the four 80% collection trophies, all weapon/Pod max-level trophies and the rest directly from the Chapter Select machine."
            ]
        },
        {
            "heading": "Route A & B: Story Beats",
            "body": [
                "Reaching the Bunker and the City Ruins, clearing the desert, amusement park, alien ship, forest castle, flooded city, copied city and abandoned factory, and achieving endings A and B.",
                "The achievements here: Resuscitated Body (Stare into space from the Bunker.); Vestiges of Prosperity (Arrive at the City Ruins.); It's a Healthy Baby Boy! (Complete the desert area.); We Await Your Next Visit (Complete the amusement park ruins.); Creation and Insurrection (Complete the alien ship.); The Mechanical Kingdom (Complete the forest castle.); Ruler of the Deep (Complete the flooded city.); Those Who Love Humans (Complete the copied city.); Iron Soul (Complete the abandoned factory.); One Battle Ends (Achieve ending A.); A New Battle Begins (Achieve ending B.)."
            ]
        },
        {
            "heading": "Route C/D & the True Ending",
            "body": [
                "Watching 2B die, taking control of A2 for the first time, granting Pascal's final request, stopping the resource-recovery units, watching Devola and Popola's final moments, and achieving 9S's ending (C), A2's ending (D) and the true final ending (E).",
                "The achievements here: Final Wish (Watch 2B die.); Treacherous Blade (Take control of A2 for the first time.); Farewell, Pascal (Grant Pascal's final request.); Justice (Stop all resource-recovery units.); Crime and Punishment (Watch the final moments of Devola and Popola.); Leaving for the New World (Achieve 9S's ending (C).); Beautiful World (Achieve A2's ending (D).); The Minds That Emerged (View the final credits (the true ending, E).)."
            ]
        },
        {
            "heading": "Collections, Upgrades & Combat Feats",
            "body": [
                "Body recovery, the four 80% collection trophies (quests, archives, unit data, chips), all Pod programs, weapon and Pod max-level trophies, flight-unit and hidden-harvest grinds, all Pods found, 100,000 G, riding an animal 5 km, 20 fish, plus the combat feats: a first hacking game, 100 hacking kills, 50 remote-control kills, and 50 berserk-mode kills.",
                "The achievements here: The Circle of Death (Have your body collected.); Cherish Our Resources (Have 100 bodies collected.); First Errand (Complete your first quest.); The Mercenary (80% of all quests completed.); Information Master (80% of all archives found.); Destruction is My Job (80% of all unit data unlocked.); Chip Collector (80% of all plug-in chips collected.); Weapons Maniac (All Pod programs obtained.); Tools of the Trade (Any weapon upgraded to the highest level.); Inorganic Blade (All weapons upgraded to the highest level.); Supreme Support Weapons (All Pods upgraded to the highest level.); Fighting's Not My Thing (Play your first hacking game.); A Scanner's Power (Destroy 100 machine lifeforms by hacking.); Machines vs. Machines (Destroy 50 machine lifeforms by remote control.); The Power of Hate (Destroy 50 machine lifeforms with berserk mode.); Ruler of the Skies (255 enemies destroyed using a flight unit.); Harvest King (Materials gathered at a hidden harvest point 10 times.); Pod Hunter (All Pods found.); Desire Without Emotion (At least 100,000 G in possession.); Animal Rider (Any animal ridden for 5 kilometers.); A Round by the Pond (20 different kinds of fish caught.)."
            ]
        },
        {
            "heading": "Jokes & Secrets",
            "body": [
                "Killing ten friendly machines, discovering 2B's secret ten times, playing an hour with 9S in a certain state, using Emil's shop, destroying Emil, seeing all 26 endings, and visiting the place of memories (Kaine's house).",
                "The achievements here: Wait! Don't Kill Me! (Destroy 10 friendly machine lifeforms.); What Are You Doing? (Discover 2B's secret 10 times (self-destruct as 2B to blow off her skirt).); Not That I Mind... (Play for 1 hour with 9S in a certain state (with his trousers destroyed).); Come Take a Look! (Use Emil's shop for the first time.); Naughty Children (Destroy Emil (defeat the Emil superboss).); Transcendent Being (Achieve all endings (all 26, A through Z).); Lunar Tear (Visit the place of memories (Kaine's house, a NieR Replicant easter egg).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play route A start to finish for ending A and the early area-clear beats.",
                "2. Play route B (the same events from 9S's perspective) for ending B and the hacking feats.",
                "3. Play route C/D through to the branching finale, taking both ending C and ending D, then the true ending E.",
                "4. Grind gold, then buy the collection, upgrade, money and hobby trophies from the Chapter Select machine.",
                "5. Use Chapter Select to mop up the joke trophies (2B's skirt x10, 9S's state for an hour, killing friendly machines) and fight the Emil superboss.",
                "Tip: 'Transcendent Being' wants all 26 endings - the joke endings (self-destructing at the title screen, abandoning missions, eating a mackerel) take seconds each from Chapter Select, so save them for one dedicated sitting near the end."
            ]
        }
    ]
};
