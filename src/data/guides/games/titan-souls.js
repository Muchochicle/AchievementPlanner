// Titan Souls Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/titan-souls.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   297130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "titan-souls-achievement-guide",
    "category": "game",
    "gameSlug": "titan-souls",
    "icon": "🏹",
    "title": "Titan Souls Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Titan Souls - none are hidden. Covers story progression and the game modes, and the per-Titan takedown challenges. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Titan Souls has 27 Steam achievements and none are hidden. Ten cover progression and modes - opening both Sealed Gates, beating the game, the sub-20-minute run ('Aerodynamics'), the secret 'TRUTH' ending, Iron Mode and Iron Mode NG+, No Roll mode ('Hard Bizkit'), Hard Mode / New Game+, and the Sludge-titan 'Slimeball'. The other seventeen are specific ways to kill individual Titans (flaming arrow to the Brain, bomb on the Lava Blob's head, killing the Rolling Titan in under 5 seconds, and so on), plus 'First Blood' for your first Titan and 'Iron God' for all Titans in Iron Mode.",
                "The catalog marks it difficulty 4 and roughly three runs. Every Titan is one hit to kill you and one arrow to kill it, so the challenge achievements are about learning each fight cold; the mode achievements (Iron, No Roll, sub-20-minute) then stack several restrictions on that.",
                "Tip: learn the boss set on a normal run, knock out the per-Titan challenge kills one at a time, then do the Iron / No Roll / speed runs once every fight is muscle memory."
            ]
        },
        {
            "heading": "Progression & Game Modes",
            "body": [
                "Opening the first and second Sealed Gates, the sub-20-minute run ('Aerodynamics'), beating the game ('Titan Soul'), the secret 'TRUTH' ending, Iron Human and Iron Titan, No Roll mode ('Hard Bizkit'), the divisionless Sludge kill ('Slimeball'), and Hard Mode / New Game+.",
                "The achievements here: Out of the Frying Pan... (Open the first Sealed Gate); ...Into the Fire (Open the second Sealed Gate); Aerodynamics (Beat the game in under 20 minutes); Titan Soul (Beat the Game); TRUTH (???); Iron Human (Beat the game in Iron Mode); Iron Titan (Beat the game in Iron Mode with New Game+); Hard Bizkit (Beat the game without rolling rolling rolling (in No Roll mode)); Slimeball (Kill the Sludge titan with no more possible divisions); New Game+ (Beat Hard Mode)."
            ]
        },
        {
            "heading": "Titan Takedowns I",
            "body": [
                "Killing the Eye Cube mid-draw ('Laser Eye Surgery'), the flaming-arrow Brain kill, shaving the Plant Titan's vines, 30 seconds of spores ('Drug Trial'), the no-pillars Knight kill, 50 coins from the Chest, the sub-5-second Rolling Titan, the bomb on the Lava Blob's head, and the Skull Titan mid-spin.",
                "The achievements here: Laser Eye Surgery (Kill the Eye Cube while pulling back the arrow); Brain Freeze (Kill the Brain with a flaming arrow); Short Back and Sides (Cut all the vines off the Plant Titan); Drug Trial (Succumb to the effect of spores for 30 seconds total); Demo Man (Kill the Knight after destroying all pillars); Ca$h Mon£y (Produce 50 coins in the Chest fight); COME AT ME BRO (Kill the Rolling Titan in under 5 seconds); Bomberman (Drop a bomb on the Lava Blob Titan's head); Leak Spin (Kill the Skull Titan as it spins)."
            ]
        },
        {
            "heading": "Titan Takedowns II",
            "body": [
                "The sub-10-second Yeti, de-toothing the Mountain Titan, destroying all icebergs ('Titanic'), knocking yourself out in the final struggle, the Broken Statue mid-draw ('Shadow of the Colossus'), the wrong-hands Guardian kill, 'First Blood' for your first Titan, and 'Iron God' for every Titan in Iron Mode.",
                "The achievements here: Beating the Yeti (Finish in under 10 seconds...); Dental Plan (Remove all teeth from the Mountain Titan then kill it); Titanic (Destroy all icebergs); A Collision of Souls (Knock yourself out in the battle for the Titan Soul); Shadow of the Colossus (Kill the Broken Statue Titan while pulling back the arrow); First Blood (Slay a Titan); The Switch (Trigger the Guardian's switches with the wrong hands and kill it); Iron God (Slay all Titans in Iron Mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a normal run to open both gates and beat the game ('First Blood', 'Titan Soul' along the way).",
                "2. Replay individual Titans for the challenge kills - most are a specific arrow, position or timing.",
                "3. Get the 'TRUTH' ending (return the Titan Soul rather than taking it).",
                "4. Do the No Roll run ('Hard Bizkit') and Hard Mode / New Game+.",
                "5. Do the Iron Mode run for 'Iron Human', then Iron NG+ for 'Iron Titan' and 'Iron God'; fit 'Aerodynamics' (sub-20-minute) in once routing is solid.",
                "Tip: your arrow can be recalled in flight - most challenge kills (Eye Cube, Broken Statue) want you to hit while pulling it back, so practise the recall-and-hold timing on early Titans."
            ]
        }
    ]
};
