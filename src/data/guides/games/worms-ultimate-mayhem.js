// Worms Ultimate Mayhem Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/worms-ultimate-mayhem.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   70600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "worms-ultimate-mayhem-achievement-guide",
    "category": "game",
    "gameSlug": "worms-ultimate-mayhem",
    "icon": "🪱",
    "title": "Worms Ultimate Mayhem Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Worms Ultimate Mayhem (1 hidden). Covers the story, tutorial and ranked-match achievements, the challenge and cumulative-kill goals, the collectibles, and the new-map and Shop completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Worms Ultimate Mayhem has 38 Steam achievements and one is hidden (\"Shop-a-holic\"). The rest cover the story mode (halfway, complete, all single-player content), the tutorials and challenges (complete all, beat all times), online ranked matches (10 / 40 wins, a 3-kill turn, prod and sentry-gun kills), the cumulative kill counts (200 / 400 / 600 worms, 50 drownings), the collectibles (all Easter Eggs, all gallery images), a 25-second parachute glide, a saved random map, and the new-map achievements.",
                "Nothing is missable - every mission, challenge and counter is replayable or cumulative. \"Shop-a-holic\" is the completion gate: it needs every Shop item bought, and some only unlock after finishing the campaign and beating every Team 17 Challenge time.",
                "Tip: do all the single-player content (story, challenges, tutorials) first - that unlocks the last Shop items - then earn the credits to buy everything including the Kitchen Sink for \"Shop-a-holic\"."
            ]
        },
        {
            "heading": "Story, Tutorials & Ranked Matches",
            "body": [
                "Completing a mission, the tutorials, 10 online ranked matches, a 3-kill ranked turn, 2000 weapon-factory damage, a grenades-and-bazooka-only round win, a custom-clothes team, 5 four-player games, the credits, all story Easter Eggs, a 25-second parachute glide, a saved random map, the story halfway point, 200 total worm kills, and 10 ranked wins.",
                "The achievements here: Slide into First (Complete any mission); Teacher's Pet (Complete the tutorials); Loves Company (Complete 10 online ranked matches); I am The Worminator (Kill more than 3 worms in one turn (ranked match only)); If You Build It They Will Die (Inflict 2000 damage in total using weapon factory built weapons); Boom Shake The Worm (Win a round using only grenades and bazooka); Pimp My Worm (Creat a team of worms including custom clothes); Mr Popular (Complete 5 four player games (online or offline)); Credit To The Nation (Enjoy the game's credits from start to end); Eggceptional (Collect all the Easter Eggs hidden throughout the story mode); Glide Like A Worm (Glide using the parachute in one go for more than 25 seconds); Cartographer (Create a random map and have someone save it to their machine); Halfway House (Reach the halfway point of the story mode); Grave Digger (Kill a total of 200 worms (all modes count)); Ranked Up (Win 10 online ranked matches)."
            ]
        },
        {
            "heading": "Challenges, Kills & Completion",
            "body": [
                "Completing all challenges, 400 and 600 total worm kills, 50 drownings, 5 prod kills, 10 sentry-gun-finish wins, completing the story mode, the hidden \"Shop-a-holic\", all single-player content, all gallery images, 40 ranked wins across 3 styles, and the timed challenge achievements.",
                "The achievements here: Loves a Challenge (Complete all the challenges); Wormicide (Kill a total of 400 worms all modes count); Davey Jones (Drown 50 worms all modes count); Finger of Death (Kill 5 worms using prod in ranked matches); Embrace The Darkness (Win 10 games with the last hit coming from a sentry gun all modes count); Billy No Mates (Complete the single player story mode); Shop-a-holic (Purchase every item in the Shop, including the Kitchen Sink. Some items only unlock after completing every Mayhem Campaign mission and beating every Team 17 Challenge time.); Genghis Worm! (Kill a total of 600 worms (all modes count)); Doing It Solo (Complete all Single Player content (Story, Challenges & Tutorials)); Fan of The Arts (Collect all gallery images available); Total Ranker (Win 40 online ranked matches across any 3 game styles); Challenge Accepted (Take your first steps on the road to glory by completing the first challenge.); Nick of Time (Complete one challenge under the required time); No Challenge At All (Complete the deathmatch challenge); Time For A Challenge (Complete all the challenges)."
            ]
        },
        {
            "heading": "Timed Challenges & New Maps",
            "body": [
                "Beating all challenge times, the new-map achievements - winning an online game on each new map, and a ranked Deathmatch win on a new map with a worm ending on more health than it started.",
                "The achievements here: Time Attacked (Beat all the times on the new challenges); Clock Watching (Try and beat all the set times across all the challenges.); Alexander The Worm (Play an online game on each new map and win, proving you’re the greatest general); Join Me Luke (Win a ranked Deathmatch on a new map with at least one worm ending with more health than they started with); I Love New (Play each new map more than 5 times (all modes count)); Dedicated Ranker (Can you rise to the challenge and win a ranked Deathmatch on every new map?); Davey Jones 2 (Drown 20 Worms across any of the new maps ); Feel The Power of The Darkside (Win a ranked match with two or more worms remaining on each new map)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story mode to completion, then all challenges and tutorials - this unlocks the final Shop items.",
                "2. Beat every Team 17 Challenge time.",
                "3. Play online ranked matches toward 10, then 40 wins, picking up the prod, sentry-gun and 3-kill-turn feats.",
                "4. Let the cumulative kill and drowning counts (600 worms, 50 drownings) build across all modes.",
                "5. Earn enough credits to buy every Shop item, including the Kitchen Sink, for \"Shop-a-holic\".",
                "Tip: the credits currency comes from playing any mode - a fast route is replaying short story missions, then buy the Shop out from cheapest to most expensive so you do not accidentally miss one."
            ]
        }
    ]
};
