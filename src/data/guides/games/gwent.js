// GWENT: The Witcher Card Game Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/gwent.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1284410 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "gwent-achievement-guide",
    "category": "game",
    "gameSlug": "gwent",
    "icon": "🃏",
    "title": "GWENT: The Witcher Card Game Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in GWENT: The Witcher Card Game - none are hidden. Covers the tutorial and account-progression unlocks, the in-match combat and board-state feats, and the long-haul mastery, ranked and collection milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GWENT: The Witcher Card Game has 46 Steam achievements and none of them are hidden. They break down into a few groups: a handful of tutorial and account-level milestones (complete the basic tutorial, reach level 15, 40, Prestige 1, Rank 20), a large set of single-match feats that ask you to engineer a specific board state (order 3 units in a turn, play 5 cards in a turn, destroy an Immune unit, resurrect 5 cards in a match, win with 2 cards left in hand), and a set of grinds and collection goals (mill 50 cards, smash 100 kegs, own 150 premium cards, collect 50 unique cards from one faction, send \"GG\" 50 times).",
                "Nothing is missable - GWENT is a live multiplayer game and every achievement can be worked toward at any time across as many games as you like. Most of the match feats are far easier to set up in a casual or friendly game, or against the practice AI, than in competitive ranked play.",
                "Tip: build small, focused decks for the trickier feats. A deck stuffed with cheap units and a couple of summon or order engines lets you chain \"play 5 cards in a turn\", \"spawn five allies in a single turn\" and \"order 3 units in a turn\" without depending on a specific draw."
            ]
        },
        {
            "heading": "Tutorial, Levels & Ranked Progression",
            "body": [
                "The onboarding and account-progression achievements - finishing the basic tutorial, climbing the account level and Prestige tracks, playing your first ranked game, and the early single-match damage and card-play feats.",
                "The achievements here: Agressor (Deal a total of 30 damage to units in one multiplayer game.); Alchemist (Transmute a card.); Artifanatic (Have 4 artifacts in play at any time.); Art Of War (Order at least 3 units in a single turn.); Baptized With Fire (Play a card from 5 different factions during a match.); Basics Mastered (Complete the basic tutorial.); Blacksmith (Play a bronze and a gold card in a multiplayer game.); Blitz (Play 5 cards in a single turn.); CatchEmAll (Collect 50 unique cards from 1 faction.); Common Denominator (Win a multiplayer game without Golden cards in your deck.); Destroyer (Destroy 3 or more units with single card.); Fantastic Five (Obtain at least one leader from each faction.); Gloves Off (Finish 3 online matches.); Go All In (Fully deplete your deck.); Greatest Admirer (Send \"GG\" 50 times.)."
            ]
        },
        {
            "heading": "In-Match Combat & Board-State Feats",
            "body": [
                "Single-game achievements built around a specific board state or play pattern - winning from behind, holding card advantage, filling a row, boosting a unit past 30 points, destroying Immune or Doomed units, and resurrecting or spawning multiple cards in one match.",
                "The achievements here: Had Enough Yet (Win a game with 2 cards remaining in hand.); Hall Of Heroes (Reach Prestige 1.); Head Start (Start a round with 10 points on the board.); Head To Head (Get a draw in a multiplayer game.); Heart Of Gold (Win a battle without killing any of the opponent's units.); Hurricane Season (Fill your opponent's side of the board with row effects.); Iron Fist (Win a round with only Order units.); Kickin' Up Dust (Play one ranked game.); Leviathan (Boost unit to over a 30 points in a multiplayer game.); Master Tactician (Have card advantage of 3 cards.); Milestone (Reach level 15.); Mission Impossible (Destroy a unit that is Immune.); Munchkin (Reach level 40.); Napoleon Complex (Destroy a Legendary enemy with a Common ally.); Next (Have a winstreak of 3 in any multiplayer game mode.); No Man Left Behind (Resurrect at least 5 cards in a match.)."
            ]
        },
        {
            "heading": "Mastery, Collection & Long-Haul Milestones",
            "body": [
                "The grind and collection goals - milling cards, smashing kegs, owning premium (animated) cards, winning games with all-special or no-Gold decks, equipping a full cosmetic loadout, and the high-end single-turn order and summon combos.",
                "The achievements here: Nothing Wasted (Mill 50 cards.); Overkill (Win the final round of a multiplayer game by 50 or more points.); Quick, Before- (Destroy a unit with Zeal before its triggered.); Quintuplets (Control at least 5 cards with the same power.); Ready For Battle (Equip a vanity leader skin, an avatar, a border and a title.); Romeo And Juliet (Destroy a Doomed enemy with a Doomed ally.); Shiny! (Own at least 150 premium cards.); Uman make smashsmash?! (Smash 100 kegs.); Specialist (Win a game using 15 special cards.); Tables Turned (Win a round and game, after losing by 20 points.); Thanks, but No Thanks (Win a Regular Battle without redrawing any cards.); The More The Merrier (Play a maximum number of units into any single row.); Trouper (Reach Rank 20.); We Are Legion (Spawn five allies in a single turn.); Your wish is our command (Use 10 order charges in a single turn.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Clear the basic tutorial first (\"Basics Mastered\") and play through enough games to unlock the core card sets.",
                "2. Let the account-level and Prestige achievements (\"Milestone\", \"Munchkin\", \"Hall Of Heroes\") accumulate naturally as you play - they need no special effort.",
                "3. Knock out the single-match feats in casual or friendly games with purpose-built decks: one deck for swarm/summon feats, one for order feats, one for point-boost feats.",
                "4. Play ranked until you reach Rank 20 (\"Trouper\") and complete a few online matches for \"Gloves Off\" and \"Next\".",
                "5. Leave the long grinds (\"Nothing Wasted\" mill 50, \"Uman make smashsmash?!\" 100 kegs, \"Shiny!\" 150 premium cards, \"CatchEmAll\" 50 unique cards) to tick over across your whole playtime.",
                "Tip: the daily keg rewards and crown/ore economy fill out your collection over time - spend kegs as you earn them rather than hoarding, and the \"Shiny!\" and \"CatchEmAll\" goals arrive on their own."
            ]
        }
    ]
};
