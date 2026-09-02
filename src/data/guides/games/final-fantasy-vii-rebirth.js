// FINAL FANTASY VII REBIRTH Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/final-fantasy-vii-rebirth.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2909400 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 33 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "final-fantasy-vii-rebirth-achievement-guide",
    "category": "game",
    "gameSlug": "final-fantasy-vii-rebirth",
    "icon": "🌹",
    "title": "FINAL FANTASY VII REBIRTH Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in FINAL FANTASY VII REBIRTH (33 hidden). The hidden achievements are the 14 chapter markers, the six Protorelic questlines plus Gilgamesh, and the Gold Saucer / minigame set (Junon Parade, Queen's Blood, LOVELESS, Johnny's Seaside Inn, 3D Brawler, chocobo racing, all side quests). Sourced from PowerPyx and Game8.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FINAL FANTASY VII REBIRTH has 61 Steam achievements, 33 of them hidden. The visible track is combat fundamentals (win a battle, exploit a weakness, stagger, limit break, summon, synergy skills), progression and open-world intel gathering, the moogle emporium and Chadley's materia, plus the endgame grind (level 70, master every weapon ability, clear all chapters on Hard, finish every combat simulation).",
                "The 33 hidden achievements are the 14 chapter-completion markers, the six regional Protorelic questline rewards plus Gilgamesh (the endgame optional superboss they unlock), and a block of Gold Saucer and minigame trophies - the Junon Parade, the Queen's Blood tournament, LOVELESS, Johnny's Seaside Inn donations, the 3D Brawler, the Musclehead Colosseum, chocobo racing, and completing every side quest.",
                "The catalog marks it difficulty 4, missable:true and recommends 2 playthroughs: the Junon Parade achievements in Chapter 3 (7th, Assemble! and Stealing the Show) are missable in a single run, and the 'complete all chapters on Hard' achievement needs a second pass through chapter select after finishing the story."
            ]
        },
        {
            "heading": "Story: The 14 Chapters",
            "body": [
                "The 14 hidden chapter-completion markers (plus the platinum-equivalent 'earn everything' achievement is covered in Endgame Completion). These unlock automatically as you finish each chapter of the main story and are described here spoiler-free.",
                "The achievements here: Never Meet Your Heroes (Complete Chapter 1); Swampy Situation (Complete Chapter 2); Make Mine Black (Complete Chapter 3); The President's Commendation (Complete Chapter 4); Cryptic Cameo (Complete Chapter 5); Fun in the Sun (Complete Chapter 6); The Price of Progress (Complete Chapter 7); Worth the Weight? (Complete Chapter 8); Crying Out (Complete Chapter 9); Stars Fell from My Eyes (Complete Chapter 10); You're Not Murasaki (Complete Chapter 11); Hearts Out, Dukes Up (Complete Chapter 12); I'm Here for You (Complete Chapter 13); Confluence of Worlds (Complete Chapter 14)."
            ]
        },
        {
            "heading": "Combat Fundamentals",
            "body": [
                "The early combat tutorial-style achievements - all of these unlock naturally within the first hour or two of play.",
                "The achievements here: I Got This (Win a battle); Exploitative Practices (Exploit an enemy's weakness); Unfettered Friendship (Free a bound ally); Staggered Learning (Stagger an enemy); Break It Down (Use a limit break); Fledgling Summoner (Invoke a summon); Team Player (Use a synergy skill); No \"I\" in \"Synergy\" (Use a synergy ability); Entering New Markets (Complete a quest)."
            ]
        },
        {
            "heading": "Growth, Materia & Open-World Intel",
            "body": [
                "Character and equipment progression plus Chadley's region-by-region intel gathering, the chocobo activities, the moogle emporium, and developing every materia.",
                "The achievements here: Weapons 101 (Max out a weapon ability's proficiency); A Materia World (Level up an orb of materia); New Blood (Raise your Queen's Blood rank); Caching In (Complete your search of a cache location); I Brake for Chocobos (Repair three chocobo stops); Expert Ex-kweh-vator (Use a chocobo to find two treasures buried by rabbits); You Work for Me Now (Defeat a summon in battle and obtain its materia); Intelligence Aide (Gather world intel at five separate locations); Intelligence Specialist (Gather world intel at fifty separate locations); Director of Regional Intelligence (Gather all pieces of world intel in a region); Moogle Lover (Max out your moogle emporium merchant rank); Materia Completionist (Develop all possible materia together with Chadley)."
            ]
        },
        {
            "heading": "Protorelics & Gilgamesh",
            "body": [
                "Each of the six explorable regions has a multi-part Protorelic questline; finishing all six unlocks the fight against Gilgamesh, the game's toughest optional superboss. All seven are Steam-hidden.",
                "The achievements here: Founder's Bonus (Obtain the protorelic in the Grasslands region by finishing its Protorelic questline); Fort Condor Commander (Obtain the protorelic in the Junon region (the Fort Condor questline)); Cactuar Crusher (Obtain the protorelic in the Corel region); Honorary Turk (Obtain the protorelic in the Gongaga region); The Gambit Paid Off (Obtain the protorelic in the Cosmo Canyon region); Professional Handler (Obtain the protorelic in the Nibel region); Bladesman of Legend (Defeat Gilgamesh, the endgame optional superboss unlocked after completing all six regional Protorelic questlines)."
            ]
        },
        {
            "heading": "Gold Saucer & Minigames",
            "body": [
                "The Gold Saucer and Junon minigame block - almost all Steam-hidden. Two (the Junon Parade pair) are missable in Chapter 3; the rest can be mopped up after the story.",
                "The achievements here: 7th, Assemble! (Recruit every Midgar 7th Infantry trooper for the parade in Junon during Chapter 3 (missable)); Stealing the Show (Win the prize for an outstanding performance in the Junon Parade in Chapter 3 (missable)); Card Royalty (Win the Queen's Blood tournament held aboard the Shinra-8); Critically Acclaimed (Earn a review of S or higher for your performance in the LOVELESS stage play at the Gold Saucer); 1-Star Startup (Donate 10 items to the treasure trove at Johnny's Seaside Inn); 3-Star Hotel (Donate 30 items to the treasure trove at Johnny's Seaside Inn); 5-Star Hotel (Donate 60 items to the treasure trove at Johnny's Seaside Inn); 7-Star Hotel (Tell Johnny you have donated every possible item to his treasure trove); Polygonal Prizefighter (Defeat Sephiroth in the 3D Brawler minigame); Piano Virtuoso (Play all six Piano Outreach Association songs well enough to receive remuneration)."
            ]
        },
        {
            "heading": "Endgame Completion",
            "body": [
                "The long-tail completion achievements, including the platinum-equivalent 'earn everything' trophy, the Musclehead Colosseum, all chocobo races, every side quest, and the Hard-mode and mastery grinds.",
                "The achievements here: The Planet's Hope (Earn all FINAL FANTASY VII REBIRTH achievements); Are You Not Entertained? (Complete every bout in the Musclehead Colosseum); Hall of Famer (Win every chocobo race); My Job Here Is Done (Complete every side quest in the game); Grind It Out (Attain level 70 with a character); Staggering Success (Deal 300% or more damage to a staggered enemy); Well-Rounded (Master all weapon abilities and limit breaks, including those found in folios); Of Hardy Stock (Complete all chapters on Hard difficulty); Virtually Renowned (Complete all of Chadley's combat simulations)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story through once on Normal or Dynamic difficulty, banking the 14 chapter markers and the combat-fundamentals achievements as you go.",
                "2. In Chapter 3, do the full Junon Parade sequence - recruit every trooper and aim for the outstanding-performance prize - since 7th, Assemble! and Stealing the Show are missable there.",
                "3. As you open each region, keep up with Chadley's world intel and start the Protorelic questlines; finish all six to unlock Gilgamesh.",
                "4. After the credits, clear the Gold Saucer and minigame achievements (Queen's Blood tournament, LOVELESS, Johnny's Seaside Inn donations, 3D Brawler, chocobo races, Musclehead Colosseum) and finish every remaining side quest.",
                "5. Run a Hard-mode pass through chapter select for Of Hardy Stock, mastering all weapon abilities and reaching level 70 along the way, then take on Gilgamesh.",
                "Tip: keep every key item and unusual consumable you find - a large share of the platinum-blocking work is Johnny's Seaside Inn treasure trove, which wants one of nearly every collectible and craftable in the game."
            ]
        }
    ]
};
