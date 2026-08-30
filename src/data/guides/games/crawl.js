// Crawl Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crawl.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   293780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "crawl-achievement-guide",
    "category": "game",
    "gameSlug": "crawl",
    "icon": "👹",
    "title": "Crawl Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Crawl - none are hidden. Covers the humanity, kill and gold-spent milestones, the vault entry and challenge completions, the deity-taunt wins, the boss feats against Kourok, Ghidraak and Tezekcal, and the status-effect and no-death win conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Crawl has 45 Steam achievements and none of them are hidden. Many can be earned in single-player against three hard bots. They cover progression milestones (regain your humanity 100 times, spend 10,000 gold, kill 666 monsters), discovering every entry and weapon in the vault, passing all the vault challenges, taunting and beating each of the five deities, the three final bosses (Kourok, Ghidraak, Tezekcal) with various conditions, and a set of win-condition feats (win while bleeding the whole boss fight, win without ever dying, min your agility, max your strength).",
                "Nothing is missable - matches against bots can be replayed indefinitely, and the humanity, kill and gold counters accumulate across every game. The completion is short; the hardest achievements are the no-death win, the status-effect boss wins, and passing all the vault challenges.",
                "Tip: play against three hard bots for almost the whole list - most achievements explicitly say \"against 3 hard bots\", and a solo game against bots lets you control the pace, farm the humanity and kill counters, and set up the specific boss and deity conditions without a human opponent interfering."
            ]
        },
        {
            "heading": "Progression & Combat Milestones",
            "body": [
                "Regaining your humanity 10 / 50 / 100 times, a perfect intro battle and a 12-kill streak against three hard bots, killing 100 and 666 monsters, spending 1,000 / 5,000 / 10,000 gold, discovering 25% / 50% / 100% of the vault entries, the giant-monster pebble and boulder kills, discovering all vault weapons, clearing out a store, and passing one, ten and all vault challenges.",
                "The achievements here: A Taste For Revenge (Regain your humanity 10 times); A Death Feud (Regain your humanity 50 times); A Vengeance Insatiable (Regain your humanity 100 times); The Butcher (Slay all other heroes in an intro battle with 3 hard bots); Unstoppable Force (Get a kill streak of 12 against 3 hard bots); Vermin's Scourge (Kill a total of 100 monsters); Dragon's Bane (Kill a total of 666 monsters); The Lonely Miser (Spend a total of 1000 gold); The Wealthy Merchant (Spend a total of 5000 gold); The Gilded Baron (Spend a total of 10000 gold); The Novice Scholar (Discover 25% of entries in the vault); The Acclaimed Collector (Discover 50% of entries in the vault); The Renowned Antiquarian (Discover all entries in the vault); Lloyd and Goliath (Slay a giant monster with a pebble); Goliath and Goliath (Slay a giant monster with a boulder); Adequately Equipped (Discover all weapons in the vault); Manic Greed (Clear out a store by buying every item); The Gamekeeper (Pass a vault challenge); The Beastmaster (Pass 10 vault challenges); The Demontamer (Pass all the vault challenges)."
            ]
        },
        {
            "heading": "Challenges, Deities & Boss Feats",
            "body": [
                "The specific monster challenges (Gargoyle, Spikewurm, Necromancer), the gnome and archer-duel feats, taunting and beating each of the five deities, the boss feats against Kourok, Ghidraak and Tezekcal (with and without bombs, while bleeding, while nauseated, with more health than you started), a no-death win, the crossbow and tombstone feats, the min-agility and max-strength feats, a no-move intro win, and the \"Infinite Horror\" victory title.",
                "The achievements here: Stone Awoken (Pass the Gargoyle challenge); Burrowing Terror (Pass the Spikewurm challenge); Reanimator (Pass the Necromancer challenge); Pickpocket (As a gnome, mine a total of 10 gold from heroes); A Duel of Archers (Win a 1 on 1 battle against the hero, while both wielding bows); Glub Blasphemed (Taunt Glub and win against 3 hard bots); S'hrim Denied (Taunt S'hrim and win against 3 hard bots); Qaahl Forgotten (Taunt Qaahl and win against 3 hard bots); Gor Disavowed (Taunt Gor and win against 3 hard bots); Gholoth Shunned (Taunt Gholoth and win against 3 hard bots); Brain Haemorrhage (Damage Kourok's exposed brain with a bomb creature); Brute Force Alone (Defeat Kourok without hitting any bombs into him); The Tentacle Severed (Defeat Kourok, playing against 3 hard bots); The Beast Beheaded (Defeat Ghidraak, playing against 3 hard bots); The Stone Shattered (Defeat Tezekcal, playing against 3 hard bots); A Bloody Conquest (Defeat a boss while bleeding for the entire fight); True Escape (Win a game without ever dying); The Sickly Champion (Defeat a boss while nauseated); A Piercing Bolt (Kill 3 monsters with a single crossbow bolt); Altered Altered Beast (Get two tombstone powerups on one monster); A Healthy Victory (Defeat Ghidraak with more health than when you started); Unceasing Lethargy (Min your hero's agility); Unfettered Strength (Max out your hero's strength); Theatrical (Win an intro battle without ever moving); Infinite Horror (Achieve the victory screen title \"Infinite Horror\")."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a single-player game against three hard bots and just play - the humanity, monster-kill and gold-spent counters all accumulate across games, so they progress no matter what you do.",
                "2. Discover every entry and weapon in the vault, and pass the vault challenges (one, then ten, then all, including the specific Gargoyle, Spikewurm and Necromancer ones).",
                "3. Do the deity feats - taunt and beat each of the five deities in a game against three hard bots.",
                "4. Do the boss-condition feats against Kourok, Ghidraak and Tezekcal (bomb and no-bomb, bleeding, nauseated, the healthy Ghidraak win).",
                "5. Finish with the hardest wins: a game without ever dying (True Escape), the min-agility and max-strength runs, the no-move intro win, and the \"Infinite Horror\" victory title.",
                "Tip: for True Escape (win without ever dying), pick up defensive relics early, play the monster phases conservatively (you respawn as a monster, but the achievement is about never dying as the hero), and rush the boss the moment you have a strong build rather than farming extra floors."
            ]
        }
    ]
};
