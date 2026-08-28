// Rocket League Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rocket-league.json), whose 88 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   252950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - The Steam achievement list was frozen when Rocket League moved to
//   free-to-play on the Epic Games Store, so it covers the original
//   release plus the arena/mode packs up to ~2020 and nothing newer.
// - Sections group by what each achievement needs: core play and skill
//   shots, customization, the extra modes, arena/Battle-Car challenges,
//   and the online/Club/Tournament set.
export const GUIDE = {
    "slug": "rocket-league-achievement-guide",
    "category": "game",
    "gameSlug": "rocket-league",
    "icon": "🚗",
    "title": "Rocket League Achievement Guide",
    "summary": "A practical guide to all 88 Steam achievements in Rocket League - the core season and skill-shot goals, the item and customization unlocks, the extra modes (Rumble, Hoops, Snow Day, Dropshot), the arena- and Battle-Car-specific challenges, and the online, Club and Tournament achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rocket League has 88 Steam achievements and none are hidden. The Steam list stopped being updated after the game went free-to-play on the Epic Games Store, so it covers the original release plus the arena and mode packs up to roughly 2020 - there are no achievements for anything added since.",
                "Nothing is permanently missable. Almost everything can be done against bots in private or offline matches, including the mode-specific and Battle-Car-specific challenges, so a determined player can clear most of the list without ever queuing online. The genuine online requirements are small in number and mostly just \"play and complete a match\" of some online type.",
                "Tip: set up Exhibition matches against Rookie or Pro bots with long match times and no score limit to farm the goal, save, assist and boost-usage achievements safely, then switch to All-Star / Unfair bot matches only for the few achievements that explicitly require beating a strong opponent (Heartbreaker, Survival of the Fittest, Spectacular, Savage)."
            ]
        },
        {
            "heading": "Core Play, Seasons & Skill Shots",
            "body": [
                "The backbone of the list: playing and winning matches, completing a Season and its Championship, the practice drills, and a set of one-off skill shots (aerials, backwards goals, hitting an opponent into the ball, last-minute comebacks). Most fill up just by playing.",
                "The achievements here: Virtuoso (Unlock All Original Achievements); Far, Far Away... (Drive a total of 50 km); Super Victorious (Win a total of 30 games across any game mode); Champion (Win the Season Championship); The Streak (Win 10 games in a row across any mode); Helen's Pride (Score 6 Goals in a single game); Rocketeer (Complete the regular Season); Pitch Veteran (Play a total of 20 games across any game mode); Rider's Block (Make 20 Saves); Break Shot (Score a goal by hitting your opponent into the ball); Drill Sergeant (Complete every Practice Drill (any difficulty)); Minute to Win it (With only 60 seconds left, Win a game in which you were tied or trailing); Winner (Win a total of 5 games across any mode); Clean Sheet (Win a game without giving up a single Goal); Triple Threat (Win a 3v3 game); Double Up (Win a 2v2 game); Singles Club (Win a 1v1 game); Perfect Start (Win your first game of the Season); Still A Show-Off (Score a goal while reversing); Know the Drill (Complete a Practice Drill); First-Timer (Score your first Goal); Sky High (Score an Aerial Goal); All Fours (Win a 4v4 game); GG (Win the MVP award in a game that goes to overtime); Trifecta (Score a Goal, Save a shot, and Assist a teammate in a single game); Rocket Repleter (Make 535 Shots on Goal); Rank Up (Complete all placement matches in any Competitive Playlist); Coming On Strong (Score or Assist a combined 30 goals or assists in Casual or Competitive Online matches)."
            ]
        },
        {
            "heading": "Customization & Items",
            "body": [
                "This block is about the garage: collecting items and cars, applying decals, toppers, wheels, boosts and paint, levelling Certified items, and trading items up a quality tier.",
                "The achievements here: Stocked (Collect 150 Items); Car Collector (Collect 5 cars); Drops in the Bucket (Collect 50 Items); Grease Monkey (Customize the Decal, Topper, Rocket Boost and Wheel on a car); Pick-Me Up (Collect 5 Items); Tinkerer (Customize one slot on a car); Budding Artist (Collect a Painted Item); One Better (Increase the level of a Certified Item); Certifiable (Earn Veteran status for your Certified Item); New Profile Who This? (Change your Player Banner, Avatar Border, and Player Title); Trade Secret (Trade In five items of the same quality to receive an item of the next-highest quality)."
            ]
        },
        {
            "heading": "Extra Modes (Rumble, Hoops, Snow Day, Dropshot)",
            "body": [
                "Rocket League's alternate modes each have their own achievements: Rumble's random power-ups, Hoops basketball, Snow Day ice hockey, and Dropshot's breakable floor. There are also the general boost-usage and wall-driving time counters here. All of these can be done in private matches.",
                "The achievements here: Turbocharger (Use your Rocket Boost for a total of 5 minutes); Speed Demon (Completely fill and then empty your Rocket Boost 10 times in a single match); Wall-Crawler (Drive on the dome walls for a total of 5 minutes); Don't Look Back (Use the Thermal, Burnout, or Nitrous Rocket Boost for a total of 10 minutes); Icing the Cake (In Snow Day, score a goal from your own side of the ice); Left Wing, Right Wing (Win a Snow Day match with both the Blue and Orange teams); Fast Break (Score at least 2 Dunks in the first minute of a Hoops game); Buzzer Beater (With 30 seconds left, win a game of Hoops in which you were tied or trailing); Infinite Power! (Activate every power-up in Rumble mode); Stopped Cold (In Rumble, freeze an opponent's shot before it can score); Damage Control (Win a Dropshot match via shutout); Full Course (Score a total of 18 Goals in Dropshot); Buckminster x10 (Damage a total of 320 panels in Dropshot)."
            ]
        },
        {
            "heading": "Arena & Battle-Car Challenges",
            "body": [
                "A large group of achievements is gated on using a specific arena, Battle-Car, or boost: the Rocket Labs experimental arenas, AquaDome, Starbase ARC, Wasteland, Utopia Coliseum, Champions Field and Urban Central, and cars like Dominus, Takumi, Merc, Grog, Ripper, Backfire, Scarab, Zippy and Octane. Pick the required loadout in a private match and the condition is easy.",
                "The achievements here: SARPBC Forever (Play one game each with Octane and Backfire); Winning is Winning (Win a Season Championship using Dominus in every game); An Inch and 6.2 Miles (Drive 10 km with the Vortex, Cristiano, or Spinner Wheels); Ride or Die (Equip Dominus or Takumi with any Decal, then win a game); Family, Not Friends (Play a complete game with Dominus or Takumi); Drift King (Perform a 180 powerslide with Dominus or Takumi); Gladiator (Play a game on Utopia Coliseum); Survival of the Fittest (Equip a Topper and win an Unfair Bot Match); Heartbreaker (Win a game against All-Star Bots with a Decal equipped); Natural Progression (Win an Online Match with Backfire, Scarab, or Zippy); Throwback (Use the Standard or Accelerato Boost with Octane or Backfire while playing in Urban Central); Hot Shot, Part Two (Win the MVP award using Backfire, Scarab, or Zippy); My World is Fire (Equip the Flamethrower Boost and win a 4v4 Online match); Spectacular (With Merc or Grog, Score 10 Goals against Pro-Level Bots or higher); Savage (With Ripper, Score 10 Goals against Pro-level Bots or higher); Ruthless (Make 50 total Shots on Goal using Merc, Grog, or Ripper); Psycho-Master Exploder (Demolish 3 opposing bots in Wasteland); Mad Scientist (Play a complete match in 3 different Rocket Labs Arenas); Sea Turtle (Head to AquaDome and score a goal while flipped on your back); Get Up, Mr. Bubbles! (Score an Aerial goal while playing in AquaDome); Metaverse (Equip the Ion Rocket Boost or the Halo Topper and win a match on Starbase ARC); Brave the Elements (Complete a match on wasted land, under the sea, and in outer space); Storm Trooper (Equip a Deluxe Item and complete a game in an Arena with turbulent weather)."
            ]
        },
        {
            "heading": "Online, Clubs & Tournaments",
            "body": [
                "The genuinely online-only achievements: playing with a party or Clubmates, creating or joining a Club, completing an online Tournament match and earning its MVP, completing competitive placement matches, and a couple of \"play an online game in arena X\" tourist unlocks.",
                "The achievements here: Team Player (Play against every team in a Season); Feather in Your Recap (Watch a save file in Replay mode); Traveler (Play a game in six different Arenas); Barras Bravas (Play an Online game with someone in your Party); Friendly (Play an Exhibition match); Registered Voter (Head to 'Arena Preferences' and use all of your votes); Good Times (Head to Champions Field and complete an Online game); Join the Club! (Create or Join a Rocket League Club); Together is Better (Play and complete an Online match with one or more Clubmates); New Challenger (Join and complete an Online Tournament match); People Person (Play and complete 10 Online matches with one or more Clubmates); Squad Goals (Score a Goal while in a Club Match (Online Matchmaking only)); Best of the Bunch (Earn the MVP award in any Online Tournament match)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through a full Season offline - that alone gives Rocketeer, Champion, Perfect Start, Team Player, Winning is Winning and chips away at the win-count and goal achievements.",
                "2. Farm the skill shots and counters (Far, Far Away..., Turbocharger, Wall-Crawler, Rider's Block, First-Timer, Sky High, Rocket Repleter) in long no-score-limit Exhibition matches against weak bots.",
                "3. Do the customization set (Stocked, Drops in the Bucket, Pick-Me Up, Grease Monkey, Car Collector, Tinkerer, Budding Artist, One Better, Certifiable, Trade Secret, New Profile Who This?) - most just need menu time and item drops.",
                "4. Rotate through the extra modes and the arena/Battle-Car checklist in private matches; this clears the largest block.",
                "5. Finish with the online requirements: Join the Club!, Barras Bravas, Together is Better, People Person, Squad Goals, New Challenger, Best of the Bunch, Rank Up, plus Good Times.",
                "Tip: Virtuoso (\"Unlock All Original Achievements\") pops automatically once every non-DLC achievement is done, so it should be the very last one you see - if it has not unlocked, you have missed one of the base-game achievements, not one of the mode packs."
            ]
        }
    ]
};
