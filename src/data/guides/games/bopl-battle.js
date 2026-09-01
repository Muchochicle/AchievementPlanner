// Bopl Battle Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bopl-battle.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1686940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bopl-battle-achievement-guide",
    "category": "game",
    "gameSlug": "bopl-battle",
    "icon": "💥",
    "title": "Bopl Battle Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Bopl Battle - none are hidden. Covers ability combos, kill-count and win-streak milestones, and a wide range of joke and chaos achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bopl Battle has 28 Steam achievements and none are hidden. Most are chaotic, comedic joke achievements tied to the game's abilities and physics - 3-Dash wins, all-blink-gun or all-random matches, cloning yourself 16 times, growth-raying yourself, black holes and white holes, moonwalking, multi-kills, eating other players, and winning without doing anything or with no offensive abilities. The rest are straightforward milestones - 100 wins, clearing the tutorial in under 9 seconds, and specific ability kills.",
                "The catalog marks it difficulty 2. Bopl Battle is a chaotic local/online party platformer, so most of these achievements happen naturally from playing enough matches with enough different characters and abilities; a few (the 4-player draw, the 1v3 win) need a bit of luck or a skilled run.",
                "Tip: play with a big group and try out every ability at least once - most of the joke achievements are things you'll stumble into naturally over enough matches."
            ]
        },
        {
            "heading": "Ability & Physics Chaos",
            "body": [
                "3-Dash wins, an all-blink-gun match, an all-RANDOM match, cloning yourself 16 times, growth-raying yourself, an Engine ability kill, a long-range arrow, a Macho-slime tower, a no-offensive-abilities win, 10 seconds in Drill form, moonwalking, a very big black hole, a white hole, and 10 consecutive smoke explosions.",
                "The achievements here: I AM BECOME JAKOB, DESTROYER OF FUN (Win a game with 3 Dashes); Better luck next time, Jakob! (Win a game against a player with 3 dashes); gg ez (Win a game without doing anything); Begun, the blink war has (Play a game where everyone only picked blink guns); Embrace the chaos (Play a game where every player selected only RANDOM); But my lord, there is no such force (Clone yourself 16 times); I'm a big boy now (Growth ray yourself); Rocket science (Get a kill with the \"Engine\" ability); Sniper (Land a long range arrow); Totem pole! (Build a tower of Macho-slime); Big brain (Win a game with no offensive abilities); Boring master (Stay in Drill form for 10 seconds); Moonwalker (Moonwalk like a boss); World ender (Create a very big black hole); Scientist (Create a white hole); BOOOOOMMM! (create 10 consecutive smoke explosions)."
            ]
        },
        {
            "heading": "Kills, Wins & Records",
            "body": [
                "Clearing the tutorial in under 9 seconds, holding a grenade until it explodes, double and triple kills, a 4-player draw, 2 kills right after a time stop, 2 kills with 1 Rock, a 1v3 win, 100 total wins, gusting a grenade into a player, and eating other players.",
                "The achievements here: LET'S FRICKIN' GOOOOO!! (Clear the tutorial in less than 9 seconds); Whoops! (Hold a grenade until it explodes); Double!! (Kill two players at once); Triple!! (Kill three players at once); What happened there? (Have a game end in a 4 player draw); You're already dead. (Get 2 kills right after a time stop has ended); 2 birds 1 stone (Get 2 kills with 1 use of Rock); Built different (Win a 1v3); Dominator (Reach 100 wins); NOICE (Gust a grenade into a player); Crunchy! (Eat another player); GET IN MY BELLY!! (Eat 3 slimes in a single round)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Jump into matches with friends and try out every ability and character combo you can.",
                "2. Chase the joke achievements naturally - 3-Dash wins, all-blink-gun or all-random matches, black holes, moonwalking, and eating other players.",
                "3. Go for the harder multi-kill and skill achievements (double/triple kills, a 1v3 win, no offensive abilities) once you're comfortable with the game.",
                "4. Clear the tutorial fast for LET'S FRICKIN' GOOOOO!!, then keep playing toward 100 total wins.",
                "Tip: most of these are meant to happen as side effects of just playing a lot of matches - don't grind them in isolation, they'll come naturally."
            ]
        }
    ]
};
