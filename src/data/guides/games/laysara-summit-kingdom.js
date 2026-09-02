// Laysara: Summit Kingdom Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/laysara-summit-kingdom.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1823950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "laysara-summit-kingdom-achievement-guide",
    "category": "game",
    "gameSlug": "laysara-summit-kingdom",
    "icon": "🏔",
    "title": "Laysara: Summit Kingdom Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Laysara: Summit Kingdom - none are hidden. None of the achievements are hidden. Covers completing every scenario mountain, the campaign, the challenge maps (and on boosted difficulty), the Sandbox Summit Temple goals, the yak and economy milestones, and a set of building and disaster feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Laysara: Summit Kingdom has 48 Steam achievements and none are hidden. The scenario track is completing each of the nine mountains (Talontop, Windslab, Demon's Rest, Splintered Soul, Smothered Flame, Mount Plenty, Plain Rock, Snowfury Summit, Saltspire Peaks) plus a Veteran-difficulty clear. The campaign gives the tutorial missions, raising a Summit Temple, completing it, and two more temples in a continuation. Then there is Sandbox (a Celestial Rise temple, temples on all big mountains, trading 24 resources), the yak milestones (100 / 500 / 1000 population), the economy targets (money balance +3000, trade revenue +5000, minting +7000), and a long tail of building and disaster feats - a level-4 house buried in snow, avalanche inducers, research level 24, a 1000-metre transport route, pausing with 1 coin left, and a -10000 balance.",
                "The catalog marks it difficulty 4. Laysara is a demanding logistics-heavy mountain builder; the scenario and challenge maps escalate, the boosted-difficulty challenges and Veteran clear are the skill wall, and 'Fanatic' (research level 24) and the big yak and economy numbers are the grind.",
                "Tip: chase the economy and yak milestones ('Yak demiurg', 'Midas', 'Inflation? What's this?') on a Sandbox map with no time pressure - you can build the whole supply chain at leisure there rather than racing a scenario clock."
            ]
        },
        {
            "heading": "Scenarios & Challenges",
            "body": [
                "Completing the scenarios on Talontop, Windslab, Demon's Rest, Splintered Soul, Smothered Flame, Mount Plenty, Plain Rock and Snowfury Summit, a Veteran-difficulty clear, and the challenge-map achievements (one, one boosted, eight, eight boosted).",
                "The achievements here: Conquered Talontop (Complete scenario on Talontop); Conquered Windslab (Complete scenario on Windslab); Conquered Demon's Rest (Complete scenario on Demon's Rest); Conquered Splintered Soul (Complete scenario on Splintered Soul); Conquered Smothered Flame (Complete scenario on Smothered Flame); Conquered Mount Plenty (Complete scenario on Mount Plenty); Conquered Plain Rock (Complete scenario on Plain Rock); Conquered Snowfury Summit (Complete scenario on Snowfury Summit); True veteran (Complete any scenario on Veteran difficulty); Puzzle-solver (Complete any challenge); Expert puzzle-solver (Complete any challenge on a boosted dificulty); Maniac puzzle-solver (Complete 8 challenges); Savant (Complete 8 challenges on a boosted difficulty)."
            ]
        },
        {
            "heading": "Sandbox, Yaks & Economy",
            "body": [
                "Raising a Summit Temple on Celestial Rise and on all big mountains in Sandbox, trading 24 different resources, yak populations of 100 / 500 / 1000, 2000 citizens of each caste, money balance +3000, trade revenue +5000, minting revenue +7000, +2500 from a single Donation Spot, and starting a Custom difficulty game.",
                "The achievements here: Believer (Raise a Summit Temple on Celestial Rise in Sandbox); Kingdom builder (Raise Summit Temples on all big mountains in Sandbox); Yak of all trades (Trade with 24 different resources in Sandbox); Yak enthusiast (Have 100 yak population); Yak master (Have 500 yak population); Yak demiurg (Have 1000 yak population); Human resources (Have 2000 citizens of each caste in the city); Midas (Have money balance +3000 or more); Trade union (Have +5000 or more revenue from trade); Inflation? What's this? (Have +7000 or more revenue from minting); Totally not taxes (Have +2500 donations revenue from a single Donation Spot); Discerning (Start a game on a Custom difficulty)."
            ]
        },
        {
            "heading": "Building Feats & Campaign",
            "body": [
                "A snow-buried level-4 house, a Photo Mode screenshot, a Simple-Yak-Breeding-only temple, fulfilling all of a house's needs, two Avalanche Inducers cutting a snow cap, all resource deposits mined, research level 24, an Ornamented Cedar trade, a 100-unit tunnel extraction, a 1000-metre transport route, a 10-incense Shrine, money penalties, pausing with 1 coin, close-call challenge and weather-breakdown completions, a Novice loss, a 10-building avalanche, a -10000 balance, the tutorial missions, the campaign Summit Temple and completion, two more temples, and the Saltspire Peaks scenario.",
                "The achievements here: Free spirit (Have level 4 house buried in snow in Free Build mode); Observer (Take a screenshot in the Photo Mode); Tech-sceptic (At the moment of completing Summit Temple have only Simple Yak Breedings as a source of your yak population); This is the life (Fulfill all needs of the citizens living in any given house (outside of tutorial and challenges)); Better safe than sorry (Reduce snow cap avalanche strength from 3 to 1 using two Avalanche Inducers); Miner (In any scenario, have operational mines on all resource deposits); Fanatic (Reach research level 24); Because it is hard (Sell 24 or more of Ornamented Cedar through a single Trading Post); Mole (Extract 100 or more of a single resource from a tunnel network); Morning walk (Create a transport route from Yak Post that is at least 1000 metres long); Heavy fumes (Distribute 10 or more incense via a single Shrine); Brilliant management (Money penalty incurred for building buried in snow, failed weather breakdown quest, overloaded Lift Station Bases and missing research applied simultaneously); On the edge (Pause the game with 1 coin left in the treasury); Close call (Complete a challenge in the last possible moment); Rainy close call (Complete a weather breakdown quest in the last possible moment); Rough start (Lose a game on Novice difficulty); Snowy consequences (Have a single avalanche strike 10 buildings); Master disaster (Have money balance -10000 or less); Mastering the basics (Complete two tutorial missions in campaign); Follower (Raise a Summit Temple in campaign); Laysara's saviour (Complete the campaign); And lived happily ever after (Build two more Summit Temples in a sandbox continuation of a finished campaign.); Conquered Saltspire Peaks (Complete scenario on Saltspire Peaks)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign for the tutorial missions, the temple, the completion and two more temples.",
                "2. Complete each scenario mountain, and a Veteran-difficulty clear.",
                "3. Work through the challenge maps, then their boosted-difficulty versions.",
                "4. Use a Sandbox map for the yak, economy and multi-temple goals.",
                "5. Mop up the disaster and building feats (avalanche inducers, snow-buried house, research 24, the long transport route).",
                "Tip: 'True veteran' (a Veteran clear) is easiest on a small, resource-rich scenario like Mount Plenty - you want a map where the terrain fights you less so the harder economy settings are the only real pressure."
            ]
        }
    ]
};
