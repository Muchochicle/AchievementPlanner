// Wildfrost Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wildfrost.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1811990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wildfrost-achievement-guide",
    "category": "game",
    "gameSlug": "wildfrost",
    "icon": "❄️",
    "title": "Wildfrost Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Wildfrost - 5 are hidden. Covers in-battle combat feats, boss and voyage wins, deck and team composition challenges, and the 5 hidden achievements covering rare encounters and the true ending.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wildfrost has 27 Steam achievements, and 5 are hidden. The visible list covers in-battle status-stacking and damage feats (Snow, Shell, Shroom, Block, Frenzy), winning under specific deck and team constraints (no charms, few cards, pet-only companion, no Snow against a boss), and general run milestones (Daily Voyages, win streaks, tribe-specific wins). The 5 hidden achievements are all rarer content: a shop-spending milestone, a spared rare enemy, a specific item-feeding interaction, and the game's true ending.",
                "Nothing is missable in a lasting sense - every stat and tribe win is a permanent save-file record, and even the rare cavern/boss encounters behind the hidden achievements can reappear across different runs since they are randomized rather than one-time content. The genuine long pole is Sunbringer (defeating the true final boss), which needs multiple prior full clears just to raise your Storm Bells high enough to unlock the fight.",
                "Tip: play a good mix of clans and tribes rather than repeating one team composition - several achievements (Snowdweller, Shademancer, Clunkmaster tribe wins; Best Friends pet-only wins; Charmless no-charm wins) are each tied to a specific, different way of building your team, so variety naturally clears more of the list than optimizing one strategy to death."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "The core in-battle achievements: winning with just your Leader left standing, stacking 15 Snow or 50 Shell or 20 Shroom or 5 Block on a single target, dealing 50 or 100 damage in one hit, sacrificing 5 allies in a battle, and defeating the Frost Guardian with a Scrappy Sword.",
                "The achievements here: Lone Survivor (Win a battle with just your Leader remaining); Snowball Fight (Stack 15 Snow on a single target); Big Hitter (Deal 50 damage in a single hit); Bigger Hitter (Deal 100 damage in a single hit); Tough Nut (Stack 50 Shell on a single target); Ritual (Sacrifice 5 allies in a single battle); Toxic (Stack 20 Shroom on a single target); One Punch (Defeat the Frost Guardian with a Scrappy Sword); Icemaster (Stack 5 Block on a single target)."
            ]
        },
        {
            "heading": "Runs & Bosses",
            "body": [
                "Surviving an attack from King Moko and winning the battle, winning a Daily Voyage, and building a 3-win streak.",
                "The achievements here: Long Live the King (Survive an attack from King Moko and win the battle); Balloonist (Win a Daily Voyage); Undefeated (Achieve a 3 Win Streak)."
            ]
        },
        {
            "heading": "Deck & Team Composition",
            "body": [
                "Winning under specific team constraints: 12 or more cards in hand at once, no Charms equipped, stacking x10 Frenzy, your pet as your only active Companion, defeating a Boss without applying Snow, and winning a battle with no cards left in your deck.",
                "The achievements here: Hoarder (Have 12 or more cards in your hand at once); Charmless (Win a run without any Charms equipped); Rampage (Stack x10 Frenzy on a single target); Best Friends (Win a run with your pet as your only active Companion); Beastmaster (Defeat a Boss without applying Snow to them); Minimalist (Win a battle without any cards left in your deck)."
            ]
        },
        {
            "heading": "Stats & Tribes",
            "body": [
                "30 or more Health on a single unit, and winning a run with each of the Snowdweller, Shademancer, and Clunkmaster tribes.",
                "The achievements here: Berry Good (Have 30 or more Health on a single unit); Snowdweller (Win a run with the Snowdweller tribe); Shademancer (Win a run with the Shademancer tribe); Clunkmaster (Win a run with the Clunkmaster tribe)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 5 of Wildfrost's hidden achievements cover rare encounters, a specific item interaction, and the game's true ending, sourced from community guides (Steam Community, TrueAchievements, Pro Game Guides):",
                "High Roller: Buy 3 Charms from a single shop in one visit - charms get more expensive each time you buy one at the same shop, so save up before spending.",
                "Gnome Friend: Spare the Naked Gnome. On rare occasions (only on your first encounter with it) a Naked Gnome appears at the very start of a boss battle - defeat the boss without killing the gnome to unlock this.",
                "Feed the Beast: Feed the Muncher a Consume item. No starting clan begins with a Consume item, so find one early in a run and feed it to the Muncher (you can abandon the run right after if you are just going for the achievement).",
                "Sunbringer: Defeat the Heart of the Storm, the game's true final boss. It only appears if you form the Lumin Vase (from Lumin Goop plus the Broken Vase) and have at least 10 points of Storm Bells equipped - Storm Bells start at 5 and increase by 1 each run you complete, so this needs several prior clears before the true fight becomes reachable.",
                "Gnomebringer: Win a run with the Naked Gnome on your team - any ending counts, not just the true one, so recruiting and winning with the Gnome on a normal run is enough."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a handful of runs across different starting leaders to get comfortable with the combat systems, picking up the early status-stacking achievements (Snowball Fight, Big/Bigger Hitter, Tough Nut, Toxic, Icemaster) as they come up naturally.",
                "2. Aim for specific team-composition wins: no charms equipped (Charmless), your pet as the only Companion (Best Friends), 12+ cards in hand at once (Hoarder), and defeating a boss without applying Snow (Beastmaster).",
                "3. Win runs with the Snowdweller, Shademancer, and Clunkmaster tribes for their dedicated achievements, and build toward a 3-win streak (Undefeated) and a Daily Voyage win (Balloonist).",
                "4. Watch for the rarer content behind the hidden achievements: spend enough at one shop for 3 Charms in a visit (High Roller), spare the rare Naked Gnome mini-boss (Gnome Friend), feed a Consume item to the Muncher (Feed the Beast), and recruit and win with the Naked Gnome on your team (Gnomebringer).",
                "5. Once you have completed several runs and your Storm Bells are at 10+, form the Lumin Vase and take on the Heart of the Storm for the true ending and the Sunbringer achievement.",
                "Tip: Storm Bells increase by 1 every time you complete a run (starting from 5), so Sunbringer is realistically a late-game goal reached only after finishing several runs first - do not expect the true ending on your first clear."
            ]
        }
    ]
};
