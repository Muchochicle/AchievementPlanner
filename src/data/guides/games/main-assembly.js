// Main Assembly Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/main-assembly.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1078920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "main-assembly-achievement-guide",
    "category": "game",
    "gameSlug": "main-assembly",
    "icon": "🔧",
    "title": "Main Assembly Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Main Assembly (0 hidden). Every achievement carries Steam's own text - the dummy-physics gags, the bot-building feats (a 360 flip, a 30-second flight, driving without wheels), the four programming-node tutorials, and the world-exploration finds.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Main Assembly has 21 Steam achievements, none hidden. It is a robot-building sandbox: assemble a bot from parts, wire it with a visual node system, and drive or fly it around challenge maps and a free-build world. The achievements cover the dummy-physics gags (send a dummy flying, into the water, into the volcano, tear off a limb, a coconut throw), the bot feats (a 360 air flip, 30 seconds of flight without hover pads, finishing 'Down the hill!' with no wheels, every melee weapon on one bot), the four escalating programming-node tutorials (toggle, sum, 4-wheel steering, advanced hinge values), and world finds (top of the mountain, the treasure cave, pop a balloon, put out a fire with an axe).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; every map and the free-build world stay available."
            ]
        },
        {
            "heading": "Dummy Physics",
            "body": [
                "The ragdoll-dummy gags: fly high, into the water, on a train, into the volcano, in a beach chair, tear off a limb, and a coconut throw.",
                "The achievements here: A small step for a dummy, a future of an engineer (Send a dummy flying really high); Will it float? (Throw a dummy in the water); Riding the Rails (Put a dummy in a train); Sacrificed to the fire god (Throw a dummy in the volcano); Well deserved rest. (Place a dummy in a chair on the beach in \"Oh No!\"); Oops... It was an accident. (Tear a limb from a dummy); Coconut Shy (Throw a coconut at a dummy.)."
            ]
        },
        {
            "heading": "Bot Feats",
            "body": [
                "Dressing the drone, driving 'Down the hill!' with no wheels, a 360 air flip, 30 seconds of flight without hover pads, playing a sound with a speaker, and every melee weapon on one bot.",
                "The achievements here: All dressed up. (Fully dress up your drone); They see me rollin' Wheeless (Finish \"Down the hill!\" without any wheels.); 360 (Do a 360 while in the air with your bot.); Better than the Wright brothers (Fly for 30 seconds (Cannot use Hover Pads).); Make some noise! (Play a sound with a speaker); Swiss Army Knife (Equip every melee weapon on a bot.)."
            ]
        },
        {
            "heading": "Programming & World",
            "body": [
                "The four programming-node tutorials (toggle, sum, 4-wheel steering, advanced hinge values) and the world finds (top of the mountain, the treasure cave, pop a balloon, put out a fire with an axe).",
                "The achievements here: Pop! (Pop a balloon.); Top of the mountain (Reach the top of the mountain); Treasure hunter (Find the treasure cave); Programming level 1 (Activate a piston by connecting a toggle node directly to the piston.); Programming level 2 (Activate a piston by connecting a sum node directly to the piston); Programming level 3 (Setup 4 wheel steering by using a negate node on the back wheels); Programming level 4 (Send different values to left and right side on a hinge); Fight fire with... Axe? (Destroy a fire with an axe.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the challenge maps: they cover 'Down the hill!' with no wheels, the dummy gags, and most world finds.",
                "2. Do the four programming tutorials in order (toggle, sum, 4-wheel steering, advanced hinge) - each is one achievement and they build on each other.",
                "3. In free build, make a flyer for the 30-second no-hover-pad flight and the 360 air flip, and a melee bot with every weapon type equipped.",
                "4. Explore the world map for the mountain top, the treasure cave, a balloon to pop, and a fire to axe out.",
                "Tip: build one over-engineered 'do everything' bot for the free-build feats - stick every melee weapon on it, give it enough thrust to fly 30 seconds and flip, and a speaker - so 'Swiss Army Knife', the flight and the 360 all come from a single vehicle."
            ]
        }
    ]
};
