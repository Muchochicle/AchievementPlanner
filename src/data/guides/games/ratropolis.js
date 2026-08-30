// Ratropolis Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ratropolis.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1108370 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ratropolis-achievement-guide",
    "category": "game",
    "gameSlug": "ratropolis",
    "icon": "🐀",
    "title": "Ratropolis Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in Ratropolis - none are hidden. Covers the per-Leader victories and wave-survival milestones, the story events and card feats, and the endless-wave, pollution-level and completion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ratropolis has 46 Steam achievements and none of them are hidden. A block is per-Leader: achieving victory as each of the six Leaders (Merchant, General, Builder, Scientist, Shaman, Navigator). Another block is wave survival (survive to wave 10, 20, 60, 90, 120) and the story events (seeing each named event fire). The rest are card and restriction feats (win with only one Advisor, victory with 4 or fewer walls, victory keeping gold under 1,000, a sub-22-minute win) and the meta achievements - The Rat God (win with every Leader in every Region) and Glory (obtain all other achievements).",
                "Nothing is missable - runs are quick and repeatable, and the play-count, wave and event achievements accumulate across every game. The completion is medium; the demanding achievements are the deep-wave survivals (wave 120), the higher Pollution Levels, and The Rat God's full Leader-and-Region matrix.",
                "Tip: the story-event achievements only need you to see each event once - they are random pop-ups, so keep playing varied runs and read every event fully rather than clicking through, and most of the twenty will show up naturally before you finish the harder feats."
            ]
        },
        {
            "heading": "Leaders, Victories & Waves",
            "body": [
                "Your first defeat, victory as the Merchant, General, Builder and Scientist Leaders, a victory without non-melee military units, holding 99,999 gold, 10+ Advisers and the specific slayer Advisers, 100+ Ratizens, the Leader-ability use and no-use feats, the play-count achievements, and surviving the 10th and 20th waves.",
                "The achievements here: Wanderer (Your first defeat); Trading City (Achieve victory as the Merchant Leader); Military City (Achieve victory as the General Leader); Metropolis (Achieve victory as the Builder Leader); Science City (Achieve victory as the Scientist Leader); Fair And Square (Achieve victory without using non-melee military units); Millionaire (Hold 99999 Gold); Great Leader (Acquire more than 10 Advisers in one game); Slayers (Acquire the advisers \"Ironclad\", \"Silent\", and \"Defect\" in one game); Rats Rats Rats (Have more than 100 Ratizens); Hard Worker (Use your Leader Ability more than 30 times in one game); Lazybones (Achieve victory without using your Leader Ability); General (Play 1 game); Builder (Survive the 10th Wave); Scientist (Survive the 20th Wave)."
            ]
        },
        {
            "heading": "Events & Card Feats",
            "body": [
                "Seeing each of the named story events (Rules of Rats, A New Role, Council of Oligarchs, Coronation, All Hail!, Be Faithful), using the Royal Guard and Duck cards, purchasing every Merchant card, the treasure-chest-disregard and 999-bounty-kill feats, and the restriction victories (one Advisor, 4 or fewer walls, gold under 1,000, no Redraw spending).",
                "The achievements here: Let's Keep It (See the [Rules of Rats] Event); Life of Bureaucrat (See the [A New Role] Event); Old Rat's Wisdom (See the [Council of Oligarchs] Event); Game of Thrones (See the [Coronation] Event); Follow Me (See the [All Hail!] Event); Time to Pray (See the [Be Faithful] Event); Strongest Rat (Use the Royal Guard Card); Quack-Quack (Use the Duck Card); Give Me All  (Purchase every card sold by Merchant); Shiny Chest! (Intentionally disregard 5 Treasure Chests in a game.); Mafia (Kill one unit that carries 999 Bounty.); I'm in Charge (Win a game with only one Advisor); Under the Shade (Achieve victory with only 4 or less Defensive Walls.); Calculator (Achieve victory with maintaining your Gold under 1,000.); Scrooge (Achieve victory without spending any Golds for Redraw.)."
            ]
        },
        {
            "heading": "Endless Waves, Pollution & Completion",
            "body": [
                "Surviving waves 60, 90 and 120, victory as the Shaman and Navigator Leaders, expanding to the maximum extent, beating the final boss before he attacks, reaching Leader Level 10, a no-card-upgrade win, a sub-22-minute win, completing Pollution Levels 10 and 20, The Rat God (win with every Leader in every Region), and Glory (all other achievements).",
                "The achievements here: Nightmare (Survive 60th Wave); Hell (Survive 90th Wave); Torment (Survive 120th Wave); Shaman (Play 10 game); Religious City (Achieve victory as the Shaman Leader); Navigator (Win a game); Harbor City (Achieve victory as the Navigator Leader); World's End (Expand to the maximum extent possible); Oops (Beat the final boss before he attacks); Level Up (Reach Leader Level 10 in a game); Why did you do that? (Win the game without upgrading any cards); Madness (Win the game in under 22 minutes); Wasteland (Complete Pollution Level 10); Plaguelands (Complete Pollution Level 20); The Rat God (Win with every Leader in every Region); Glory (Obtain all other Achievements)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a run with each of the six Leaders and win at least once with each - this clears the per-Leader victory achievements and starts the play-count and event counters.",
                "2. Do the restriction-victory feats on dedicated runs: one Advisor, 4 or fewer walls, gold under 1,000, no Redraw spending, and the sub-22-minute win.",
                "3. Push deep-wave runs for the wave 60, 90 and 120 survivals, and complete Pollution Levels 10 and 20.",
                "4. Keep playing varied runs to see all twenty named story events, use the Royal Guard and Duck cards, and buy out a Merchant.",
                "5. Grind The Rat God (every Leader in every Region), then Glory unlocks automatically once everything else is done.",
                "Tip: the deep-wave survivals (120) are easiest with the Builder or General Leader and a heavily walled, single-chokepoint city - stop expanding once you have a defensible layout and pour all gold into wall and tower upgrades on the one gate the waves come from."
            ]
        }
    ]
};
