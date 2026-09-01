// Buckshot Roulette Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/buckshot-roulette.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2835570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "buckshot-roulette-achievement-guide",
    "category": "game",
    "gameSlug": "buckshot-roulette",
    "icon": "🔫",
    "title": "Buckshot Roulette Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Buckshot Roulette (6 hidden). Covers beating the game, the Double or Nothing side mode's risk/reward outcomes, and a set of hidden secret-room and item-combo achievements. Six of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Buckshot Roulette has 16 Steam achievements and 6 are hidden. The visible ones cover beating the game, the Double or Nothing side mode (starting it 10 times, cashing out immediately, doubling your earnings, cashing out over 1,000,000, and losing more than 1,000,000), a 50/50 self-shot with a blank, and eating a specific breakfast combo. The rest are hidden - entering a taken name, using all 9 items in a single turn, identifying and then shooting a live round with the magnifying glass, lingering in the nightclub hallway, sawing off the barrel before shooting yourself with a live round, and checking the leaderboard.",
                "The catalog marks it difficulty 3. Buckshot Roulette is a short, tense turn-based horror game built around a single game of Russian roulette with items; nothing here is missable, but 'Full House' (using all 9 items in one turn) takes real setup.",
                "Tip: try naming yourself 'GOD' or 'DEALER' for the hidden Name Taken achievement - it's the fastest one to grab."
            ]
        },
        {
            "heading": "Beating the Game & Double or Nothing",
            "body": [
                "Beating the game, the 'Bronze Gates' and 'Chasing Losses' story beats, starting Double or Nothing 10 times, cashing out immediately, doubling your earnings and winning, cashing out over 1,000,000, a 50/50 self-shot with a blank, a specific breakfast combo, and losing more than 1,000,000.",
                "The achievements here: 70K (Beat the game.); Bronze Gates (It rains metal here.); Chasing Losses (Consume the 'Double or Nothing' pills.); Overdose (Start the 'Double or Nothing' mode 10 times.); Nope! (Cash out immediately in 'Double or Nothing'.); 140K (Double your earnings in 'Double or Nothing' and win.); 1000K (Cash out over 1,000,000 in 'Double or Nothing'.); Coin Flip (Successfully shoot yourself with a blank, facing 50/50 odds.); Digita, Orava and Koni (Breakfast of champions.); Know When To Quit (Lose more than 1000K in 'Double or Nothing')."
            ]
        },
        {
            "heading": "Hidden Secrets",
            "body": [
                "Entering a taken name, using all 9 items in a single turn, identifying and then shooting a live round with the magnifying glass, lingering in the nightclub hallway, sawing off the barrel before shooting yourself with a live round, and checking the leaderboard.",
                "The achievements here: Name Taken (Enter 'GOD' or 'DEALER' as your player name.); Full House (Use all 9 unique items in a single turn during Double or Nothing (steal one from the dealer with Adrenaline to fit them all).); Why? (Use the magnifying glass to identify a live round, then shoot yourself with it.); Soak It In (After exiting the bathroom, don't enter the Dealer's room - stay out in the hallway and listen to the nightclub music for over a minute.); Going Out With Style! (Saw off the shotgun's barrel, then shoot yourself with a live round.); High Rollers (Check the leaderboard by clicking the computer in the first room.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the base game to beat it, and try the 50/50 self-shot with a blank along the way.",
                "2. In Double or Nothing, try each risk/reward outcome - cash out immediately, double your earnings and win, cash out over 1,000,000, and lose more than 1,000,000.",
                "3. Grab the easy hidden ones - name yourself 'GOD' or 'DEALER', check the leaderboard computer, and identify then shoot a live round with the magnifying glass.",
                "4. Saw off the barrel and shoot yourself with a live round for Going Out With Style!, and linger in the nightclub hallway for Soak It In.",
                "5. Set up a Double or Nothing turn where you can use all 9 items (stealing one with Adrenaline) for Full House.",
                "Tip: several of these can be grabbed in the same playthrough - plan a run where you check the leaderboard, name yourself carefully, and save your magnifying glass and saw for the right moment."
            ]
        }
    ]
};
