// LEGO Jurassic World Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/lego-jurassic-world.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   352400 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "lego-jurassic-world-achievement-guide",
    "category": "game",
    "gameSlug": "lego-jurassic-world",
    "icon": "🦖",
    "title": "LEGO Jurassic World Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in LEGO Jurassic World - none are hidden. Covers the twenty story levels across all four films, the True Survivor / Minikit collectibles, the custom dinosaur and character creation, and the 100% and feat achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "LEGO Jurassic World has 49 Steam achievements and none of them are hidden. Twenty are story-level completions covering all four films (Jurassic Park, The Lost World, Jurassic Park III and Jurassic World), plus completing all story levels. The rest are the LEGO collectible ladder - True Survivor and all Minikits in a level, all Minikits in the game, creating a custom dinosaur and a custom character, 100% completion - and a set of feats and level-specific gags.",
                "Nothing is missable - story levels replay in Free Play and every collectible and feat can be mopped up after the credits.",
                "Tip: play the story once, then Free Play every level with the full character and dinosaur roster to sweep Minikits, True Jedi-style \"True Survivor\" and the gags in one pass per level."
            ]
        },
        {
            "heading": "Story Levels",
            "body": [
                "Completing each of the twenty story levels across Jurassic Park, The Lost World, Jurassic Park III and Jurassic World, and completing all story levels.",
                "The achievements here: Welcome To Jurassic Park (Complete Prologue); The Calm Before The Storm (Complete Welcome To Jurassic Park); Objects In The Mirror (Complete Park Shutdown); We're Being Hunted (Complete Restoring Power); Decided Not To Endorse Your Park (Complete The Visitor Centre); That's How It All Starts... (Complete Isla Sorna); Mommy's Very Angry (Complete InGen Arrival); Don't Go Into The Long Grass (Complete The Hunted); What About The Others? (Complete Communications Centre); Just Follow The Screams (Complete San Diego); Not On InGen's List (Complete Landing Site); Nobody Move A Muscle (Complete The Spinosaurus); Is This How You Make Dinosaurs? (Complete Breeding Facility); Family Reunion (Complete Eric Kirby); Going Home (Complete The Bird Cage); The Park Is Open (Complete Welcome To Jurassic World); Full Jurassic World Experience (Complete Gyrosphere Valley); Are You Following The Dinosaur? (Complete Out Of Bounds); A New Alpha (Complete Under Attack); We Need More Teeth (Complete Main Street Showdown); 65 Million Bricks In The Making (Complete All Story Levels)."
            ]
        },
        {
            "heading": "Collectibles, Dinosaurs & Feats",
            "body": [
                "Earning True Survivor and all Minikits in a level, all Minikits in the game, creating a custom dinosaur and a custom character, 100% completion, and the feat and level-specific gag achievements.",
                "The achievements here: Something Has Survived (Obtain ''True Survivor'' in any level); We're Out Of A Job… (Collect all Minikits in any level); … Don't You Mean Extinct? (Collect all Minikits in the game); Went And Made A New Dinosaur (Create a custom dinosaur); All I Got Was This T-Shirt (Create a custom character); Spared No Expense (Collect 65,000,000 studs); Bingo! Dino DNA! (Collect an Amber Brick); The Legacy of John Hammond (Collect All Amber Bricks); Send The Helicopters (Rescue all Workers in Peril); What Lysine Contingency? (Heal all Dinosaurs); Must Go Faster (Complete All Races); Observe And Document (Complete All Photographs); Next Time It'll Be Flawless! (Achieve 100% Completion); One Big Pile Of Bricks (Collect All Red Bricks); Helping Hand (Heal A Dinosaur); Survival Expert (Collect ''True Survivor'' on all levels); Reason To Fear Man (Defeat 50 Compy Goons); We Want To Be Thrilled (Place a custom Dinosaur in a Paddock); The Concept Of Attraction (Enable Stud Magnet Red Brick); Not Machine Compatible (Try to use a hacker terminal as Alan Grant); Pack Hunter (Set both Free Play characters as Raptors); Anybody want a Soda? (As Dennis Nedry, throw a soda can at another character); Remember To Wash Your Hands (Complete a Dropping Rummage); Do-You-Think-He-Saurus? (Sneak past a Dinosaur using Camouflage); Clever Goal (As a Velociraptor, score a goal in the Jurassic World Petting Zoo); Hello John! (Set both Free Play characters as John Hammond (or variant of him)); Building Blocks Of Life (Build a LEGO object using Mr. DNA); The Human Piece Of Toast (Give Timmy a shock)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all twenty story levels for the film-by-film completion achievements.",
                "2. Free Play every level to sweep Minikits and per-level True Survivor.",
                "3. Create a custom dinosaur and a custom character.",
                "4. Do the feat and gag achievements during Free Play passes.",
                "5. Fill the last percent to 100% completion.",
                "Tip: the amber-brick abilities unlock as you free-roam the hub - grab the stud multipliers early to afford the full character and dinosaur roster you need for Free Play."
            ]
        }
    ]
};
