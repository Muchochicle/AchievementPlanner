// Duck Game Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/duck-game.json), whose 18 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   312530 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "duck-game-achievement-guide",
    "category": "game",
    "gameSlug": "duck-game",
    "icon": "🦆",
    "title": "Duck Game Achievement Guide",
    "summary": "A practical guide to all 18 Steam achievements in Duck Game - 3 are hidden. Covers play-count and combat milestones, weapon and environmental feats, and the hidden \"little man\" leveling system.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Duck Game has 18 Steam achievements, and 3 are hidden. The visible list covers play-volume milestones (matches spawned into, whole games finished, online wins), the game's arcade Challenges, weapon and environmental combat feats (fire, mines, crates, the Death Ray, custom maps), and a couple of oddball wins (converting an entire team, winning while standing on a mine). The 3 hidden achievements all belong to Duck Game's own hidden experience system - a \"little man\" that grows from an egg to an adult as you accumulate playtime, entirely separate from anything shown in a normal match.",
                "Nothing is missable - every counter and the hidden leveling system are permanent per-profile stats, and Duck Game's matches are short enough that grinding is realistic. The genuine long pole is the hidden leveling system itself: raising one \"little man\" to adulthood is the easiest of the three hidden achievements, but Jukebox Hero needs 8 of them and Complete Gamester needs the system maxed out entirely.",
                "Tip: the hidden leveling achievements progress from ordinary play, so if you are grinding Duck Game with friends or in custom maps for the visible achievements anyway, the hidden ones will climb in the background without any extra effort - there is no separate action needed to \"start\" raising a little man."
            ]
        },
        {
            "heading": "Play & Combat Milestones",
            "body": [
                "The visible achievements: spawning 100 and 1,000 times, getting the best trophy in every Arcade Challenge, killing 1,000 ducks with one profile, playing a match to 50 points, winning 10 online matches, unlocking the arcade basement, playing 10 custom maps, breaking 10 draws, 15 minutes on fire total, crushing 50 ducks with a crate, converting a full 4-player match to your team, winning while standing on a mine, a 3-duck Death Ray kill, and finishing 50 whole games.",
                "The achievements here: Duck Gamer (Spawn 100 times.); Arcade Master (Get best trophy in all challenges.); Ritual Duck Gamer (Spawn 1000 times.); Pillow Maker (Kill 1000 ducks with any one profile.); Endurance (Play through a match that goes to 50 points.); Outgoing (Win 10 online matches.); Basement Dweller (Unlock the arcade basement.); Power User (Play on 10 different custom maps.); Draw Breaker (Break 10 draws.); Hot Stuff (Spend 15 minutes on fire with any one profile.); Flat Top Intervention (Crush 50 ducks.); Books are Fun (Win a round in a 4 player match by converting all players to your team.); Never Mined, I won (Win a round while standing on a mine.); Dr. Death (Kill 3 ducks at the same time with the Death Ray.); <3 (Finish 50 whole games.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 3 of Duck Game's hidden achievements belong to its own hidden \"little man\" leveling system, sourced from community guides (ChapterCheats, RAWG, Steam Hunters):",
                "That's My Boy: Raise a \"little man\" all the way through its full growth cycle with one profile - the game's hidden leveling system starts you with an egg that hatches and grows as you accumulate experience from matches, eventually maturing into an adult who \"goes to college.\" Reaching that final stage once pops the achievement.",
                "Jukebox Hero: Raise 8 different \"little men\" through their full growth cycle (see That's My Boy) - the same egg-to-adult leveling process repeated 8 times on the same profile.",
                "Complete Gamester (1674): Level up the hidden experience system all the way to its maximum - the natural endpoint of repeatedly raising \"little men\" (see That's My Boy and Jukebox Hero); reaching max level unlocks all three of these hidden achievements together if pursued as one long grind."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a spread of matches (online and local) toward the spawn-count and finished-game milestones, and complete the Arcade Challenges for their best trophies.",
                "2. Unlock the arcade basement, and play on 10 different custom maps for Power User.",
                "3. Work the weapon and environmental feats as opportunities appear: set yourself on fire for 15 minutes total, crush 50 ducks with a crate, break 10 draws, kill 3 ducks at once with the Death Ray, win while standing on a mine, and win a 4-player match by converting every player to your team.",
                "4. Push toward Endurance (a match to 50 points) and Outgoing (10 online wins) during normal multiplayer sessions.",
                "5. Keep playing consistently over time to grow the hidden \"little man\" system - one full growth cycle for That's My Boy, eight for Jukebox Hero, and the system fully maxed for Complete Gamester.",
                "Tip: if you want to speed-run the visible achievements, a custom map in the editor lets you set up ideal conditions (mines, crates, fire hazards) on demand rather than waiting for them to appear naturally in a normal match."
            ]
        }
    ]
};
