// Tempopo Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tempopo.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   318840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tempopo-achievement-guide",
    "category": "game",
    "gameSlug": "tempopo",
    "icon": "🌸",
    "title": "Tempopo Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Tempopo - none are hidden. Covers Hana's four seasonal performances, the Challenge islands, Creative mode, and a wide range of clever puzzle-solving achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tempopo has 25 Steam achievements and none are hidden. Four are for watching Hana's Spring, Summer, Autumn and Winter performances, and four more for completing all of that season's Challenge islands. The rest are puzzle-solving flourishes and side goals - placing 300+ flowers, switching to Creative mode, placing drums on every beat in the Melody Garden, solving specific islands without certain instructions or with a reset-free clear, over 500 resets, and a string of specific block/portal/chomper interaction achievements.",
                "The catalog marks it difficulty 2. Tempopo is a relaxed music-puzzle game about guiding little creatures called Tempopos to flowers; nothing here is missable, and most of the trickier achievements (Contrarian, Misdirection, The Only Way Is Up, Overengineered) are about solving one specific island in an unusual way.",
                "Tip: keep Creative mode and the reset button in mind for the achievements that ask you to avoid them (A Foolproof Plan, Contrarian) versus the ones that want you to lean on them (Ostinato's 500 resets)."
            ]
        },
        {
            "heading": "Seasons & Challenge Islands",
            "body": [
                "Watching Hana's Spring, Summer, Autumn and Winter performances, placing or moving over 300 flowers, switching to Creative mode, and completing every Challenge island for each of the four seasons.",
                "The achievements here: Blooming Roses (Watch Hana's Spring performance); Dancing Fireflies (Watch Hana's Summer performance); Falling Leaves (Watch Hana's Autumn performance); Shimmering Lights (Watch Hana's Winter performance); Green Thumb (Place or move more than 300 flowers); Free Thinker (Switch to Creative mode); Spring Challenge Champion (Complete all the Spring challenge islands); Summer Challenge Champion (Complete all the Summer challenge islands); Autumn Challenge Champion (Complete all the Autumn challenge islands); Winter Challenge Champion (Complete all the Winter challenge islands)."
            ]
        },
        {
            "heading": "Clever Puzzle Solutions",
            "body": [
                "Placing drums on every beat across the Melody Garden, completing Old Giants Cottage without block or smash instructions, resetting over 500 times, a reset-free island clear, collecting an instruction from a smashed tree, moving a portal 4 spaces, pushing a block Tempopo into a Chomper, carrying 4 flowers into a portal on one Tempopo, and pushing a Chomper.",
                "The achievements here: Keep the Beat (Place drums on each beat across the Melody Garden); Contrarian (Complete Old Giants Cottage without using the block or smash instructions); Ostinato (Use the reset button over 500 times); A Foolproof Plan (Complete any island without using the reset button); Tiiimber (Collect an instruction dropped from a smashed tree); Crucial Cargo (Move a portal 4 spaces away from its starting position); Pushing Through (Push a block Tempopo into a Chomper); Beautiful Bouquet (Carry 4 flowers into the portal on one Tempopo); Redirected Force (Push a chomper)."
            ]
        },
        {
            "heading": "Tandem Tricks & Special Clears",
            "body": [
                "Using an instruction on top of a block Tempopo, hopping twice atop a sliding block, completing Cleff Cliff after collecting 31 instructions, completing Tunnel Vision using only direction instructions, completing Archipelago using only uplift instructions, and completing Up and Down with one Tempopo rescuing every flower.",
                "The achievements here: Tandem Teamwork (Use an instruction on top of a block Tempopo); Matched Momentum (Hop twice atop a sliding block); Overengineered (Complete Cleff Cliff after collecting 31 instructions); Misdirection (Complete Tunnel Vision using only direction instructions); The Only Way Is Up (Complete Archipelago using only uplift instructions); Solo Performance (Complete Up and Down with one Tempopo rescuing all flowers)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story to watch Hana's four seasonal performances and unlock each season's Challenge islands.",
                "2. Clear all the Challenge islands for each season, and place 300+ flowers along the way.",
                "3. Go for the specific-solution achievements - Contrarian, Misdirection, The Only Way Is Up and Overengineered each want one island solved a particular way.",
                "4. Try the two opposite reset-button achievements: A Foolproof Plan (no resets on one island) and Ostinato (500+ resets total).",
                "5. Pick up the remaining interaction achievements (Tiiimber, Crucial Cargo, Beautiful Bouquet, Redirected Force, Tandem Teamwork, Matched Momentum) as you experiment with the puzzle mechanics.",
                "Tip: switch into Creative mode at some point for Free Thinker - it's also a great place to practice the trickier specific-solution achievements without pressure."
            ]
        }
    ]
};
