// Dead Cells' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dead-cells.json), whose 121 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   588650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 84 of 121 ship a real,
//   official Steam description, quoted directly below.
// - The remaining 37 are hidden achievements Steam never describes
//   publicly (confirmed via the same API call) - their descriptions
//   here are curatorial, cross-checked against multiple independent,
//   cross-agreeing community sources (TrueAchievements, XboxAchievements,
//   PSNProfiles, Steam Community discussions) for their real unlock
//   conditions: no-damage boss clears, the escalating Boss Stem Cell
//   chain, secret bosses (the Collector, Mama Tick, the Vendor Mimic),
//   the Mushroom Boi's three possible fates, and a handful of joke/
//   self-inflicted achievements.
// - The grouping below follows the game's own real content structure -
//   the achievement list is laid out almost exactly in the order each
//   free content update (Rise of the Giant, The Bad Seed, Fatal Falls,
//   The Queen and the Sea, Return to Castlevania) added its own biomes,
//   bosses, and achievements, which this guide mirrors rather than
//   inventing its own grouping.
export const GUIDE = {

    slug: "dead-cells-achievement-guide",
    category: "game",
    gameSlug: "dead-cells",
    icon: "⚔️",
    title: "Dead Cells Achievement Guide",
    summary: "A practical guide to all 121 Steam achievements in Dead Cells - the roguevania's full biome progression, its escalating Boss Stem Cell difficulty ladder, every free content update's bosses, and the game's many secret/no-damage challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Dead Cells has 121 Steam achievements, by far the largest list in this catalog. Nothing here is permanently missable in the usual sense - it's a roguevania where every run starts fresh, so a boss, biome, or rune you haven't reached yet is always available again on your next attempt. What genuinely varies is difficulty: dozens of achievements ask for a specific, hard-won condition (no damage taken, a specific weapon, a certain number of active Boss Stem Cells) rather than just reaching content once.",
                "The achievement list itself is laid out in almost exactly the order Motion Twin/Evil Empire added content to the game for free over the years - the base game's biomes and bosses first, then Rise of the Giant, The Bad Seed, Fatal Falls, The Queen and the Sea, and finally the Return to Castlevania crossover. This guide follows that same real structure."
            ]
        },

        {
            heading: "Early Biomes & Exploration",
            body: [
                "The first stretch of achievements simply tracks reaching each of the base game's biomes for the first time: Love the serenity... (the Promenade of the Condemned), A room with a view! (the Ramparts), Finally, a moment of rest... (the Black Bridge), Smells like burned flesh (the Ossuary), What's that funky smell? (the Toxic Sewers), Who needs an Italian plumber? (the Ancient Sewers), My fish is fresh! (the Stilt Village), The dead center of the island... (the Graveyard), It rubs the lotion on its skin! (the Prison Depths), and later Afraid of the dark? (the Forgotten Sepulcher).",
                "Quit tickling! and What are you rubbing at anyway? reward absorbing the Vine Rune and the Teleportation rune, the game's first two mobility-unlocking runes. Absolution rewards surviving being cursed instead of dying to it - a real risk/reward moment rather than something to seek out deliberately.",
                "¡Arriba, arriba! ¡Ándale, ándale!, See, that wasn't so hard now, was it?, and Shrewd sleuth reward your first timed door, your first completed Challenge Rift, and your first found secret zone respectively - three of the game's recurring side-content types. Faster than light! rewards finishing your first Daily Run, the game's separate seeded-run mode."
            ]
        },

        {
            heading: "The Concierge, Conjunctivius & the Time Keeper",
            body: [
                "The Fat and The Furious and Is there something in your eye? reward beating the base game's first two named bosses, \"The Concierge\" and \"Conjunctivius\" - their much harder counterparts, Steam rolled. and Flawless victory., ask for the same two kills without taking a single hit.",
                "Blade Master rewards beating \"the Time Keeper\", with The Dance as its own no-damage version. Here comes a new challenger!, Incy Wincy…, and La Brute reward the Challenger Rune, the Spider's Rune, and the Ram's Rune, three more mobility/combat runes found around the same stretch of the game. Tic… Toc…, High drama, and Fortune and glory, kid. Fortune and Glory... mark reaching the Clock Tower, the Clock Room, and the Slumbering Sanctuary for the first time.",
                "Not so tough rewards slaying 100 elite enemies over time - a cumulative count, not a single fight. Slash! Slash! Roll! and Pimp my ride. reward unlocking 10 weapons and 10 skills respectively, both natural byproducts of playing and finding blueprints across many runs.",
                "We've all been there before... and What? There's nothing wrong with these... are two of the game's more playful hidden achievements from this stretch: diving straight into a bed of spikes, and beating the Hand of the King while still carrying nothing but your starting sword, bow, or shield."
            ]
        },

        {
            heading: "The Hand of the King & the Boss Stem Cell Ladder",
            body: [
                "Please leave your shoes at the entrance., Bend the knee? I think not…, and Even the rats avoid the place... mark reaching the Castle, the Throne Room, and the Insufferable Crypt for the first time. The last rampart falls... rewards beating the Hand of the King, the base game's final boss, with Do you need... A hand?? Bahaha! as its no-damage counterpart.",
                "Surgical extraction, Masterful extraction, Artful extraction, Deft extraction, and Perfect extraction form a five-step chain: each rewards absorbing your next Boss Stem Cell, starting with your very first Hand of the King kill and continuing as you replay the game with progressively more Boss Cells active. Up, Guards, and at them again!, Finished, without fear., Harder Better Faster Stronger, and Let's get down to the nitty gritty... are the paired achievements for actually finishing the game with one, two, three, and four Boss Stem Cells active respectively - Dead Cells' real difficulty-scaling endgame ladder.",
                "Never fallen and I like to live dangerously… reward two very different endgame challenge runs: finishing the game with the Ygdar Orus Li Ox mutation as your very first pick without ever dying, and beating the Hand of the King while carrying the high-risk Cursed Sword.",
                "Tip: none of the Boss Stem Cell achievements need to be chased in a single sitting - each one is unlocked by a normal Hand of the King kill at the next difficulty step, so they naturally accumulate as your build gets stronger over many runs."
            ]
        },

        {
            heading: "The Giant, the Collector & the Hidden Depths",
            body: [
                "You dig, Hot and cold, Life on the edge, and Stargazing mark reaching the Cavern, the Guardian's Haven, the Astrolab, and the Observatory for the first time - the deeper, more hidden reaches added with the Giant content. Size doesn't matter rewards beating the Giant, with David and Goliath... as its no-damage version.",
                "I don't step on toes... and Nothing left to... collect. reward beating a separate secret boss, the Collector, with and without taking damage respectively."
            ]
        },

        {
            heading: "Mama Tick & the Mushroom Boi",
            body: [
                "I've got my eyes on you... and Take that, sucker! reward beating Mama Tick, a mini-boss encountered while carrying the Mushroom Boi companion skill, with and without taking damage.",
                "Who's a good boi?, Bound for Hell, and Pact with the devil are the Mushroom Boi's three mutually exclusive fates on a single run: finishing the game without ever sacrificing it, detonating it yourself by re-using the skill while it's already active, or deliberately sacrificing it at the altar in the Morass of the Banished instead of letting Mama Tick's fight happen at all.",
                "Gentleman rewards finishing the Prisoners' Quarters - the very first level - without breaking a single door, a small self-imposed restraint achievement added alongside this same content."
            ]
        },

        {
            heading: "The Arboretum, the Swamp & the Scarecrow",
            body: [
                "Go play outside!, The mud is getting warm, so you might as well swim., Knee deep in mud..., Don't. Touch. Anything!, and Cheers! mark reaching the Arboretum, the Morass of the Banished, the Nest, the Corrupted Prison, and the Derelict Distillery for the first time. Born sapper rewards clearing the Derelict Distillery without ever using its Barrel Launcher, and Return to sender rewards killing an Infected Worker with their own thrown barrel.",
                "Blades N' Roses, Beware the step!, and Sky Fall mark reaching the Mausoleum, the Undying Shores, and the Fractured Shrines for the first time. Watering Time! rewards beating the Scarecrow, with In mushroom, we trust. and Green thumbs as two distinct harder variants - beating it without bouncing on any of its summoned mushrooms, and beating it without taking a single hit at all.",
                "First aid, Me, jealous?, Pool Party, A cut above, and Trapped Trapper reward a handful of specific combat feats scattered through this stretch: letting an Apostate revive at least 3 souls, summoning the companion Serenade while another pet-like skill is already active (Serenade destroys it out of jealousy), electrifying an enemy with the Lightning Rods while they're standing in water, defeating at least 5 enemies in a row with the Scarecrow's Sickles, and trapping an enemy using the Fractured Shrines' own environment.",
                "The cowl does not make the monk is one of the stranger hidden achievements here: you have to actually be wearing the Dead Cultist outfit for the guardian statues to let you pass into the Undying Shores at all."
            ]
        },

        {
            heading: "The Queen's Court",
            body: [
                "Iceberg right ahead!, 8th wonder, and A sparkle in the night mark reaching the Shipwreck, the Lighthouse, and the Crown for the first time. Her Majesty rewards beating the Queen, with four distinct harder or stranger variants alongside it: Lilibet (without taking a single hit), Long live the Queen (by pushing her into the void instead of a normal kill), Full house (using the Killing Deck weapon), and On Her Majesty's Secret Service (while wearing a Queen outfit).",
                "Oh how fast they grow!, Black flag, Spare!, Plank walk, and Put that thing back where it came from or so help me reward a run of specific feats around the Lighthouse: getting the Leghugger companion to evolve, killing a Pirate Captain with the Scavenged Bombard, killing five enemies in one throw-and-recall of the Wrecking Ball, throwing an enemy into spikes with the Hand Hook, and helping a stranded shark get back to the water.",
                "Infiltration, Herder, and You're not my family round out this stretch: finishing the Lighthouse while wearing a Servant outfit, having two pets active at once, and getting the Leghugger to kill an Armored Shrimp. Firefighter rewards finishing the Lighthouse itself, with Unwavering loyalty as the no-damage version of that same fight."
            ]
        },

        {
            heading: "The Bank",
            body: [
                "The Bank always wins in the end marks reaching the Bank for the first time. Up to the eyeball in debt is a deliberately backwards achievement: beat the game while carrying the maximum possible debt from this biome's loan mechanic, rather than paying it down.",
                "Bag of Tricks is one of the more memorable hidden achievements in the whole game: the Bank's merchants are sometimes a disguised Vendor Mimic, and you only find out which one by trying to buy from it - killing the Mimic that reveals itself this way unlocks the achievement."
            ]
        },

        {
            heading: "Return to Castlevania",
            body: [
                "Am I still on the island?, Into the vampire's den, Don't fear the Reaper, and What is a man? mark reaching the Castle's Outskirts, Dracula's Castle, the Defiled Necropolis, and the Master's Keep for the first time - the biomes added by the Castlevania crossover content.",
                "Death comes for us all... but not you! rewards beating Death, with Dodge Death! as its no-damage version. You don't belong in this world! rewards beating Dracula, with two further variants: See you in 100 years for beating his true final Beast form immediately afterward, and Honorary Belmont for beating Dracula himself without taking a single hit.",
                "I still have 8 lives, Can you stop moving please?!, Does what it says on the tin, and Knowledge is power reward a handful of specific kills in this stretch: letting Maria's Cat companion land the finishing blow on Death, killing a Werewolf with a Throwing Axe, beating Dracula's Beast form using the Vampire Killer weapon, and hitting the same enemy with 5 orbiting Bibles in short succession."
            ]
        },

        {
            heading: "Self-Inflicted & Joke Achievements",
            body: [
                "A handful of achievements scattered early in the list are pure jokes rather than real challenges: Going down! rewards killing an enemy with an elevator, while They came from behind! is the opposite - getting killed by one yourself. YOLO! Or not? rewards cheating death via the Ygdar Orus Li Ox mutation, Ohhhhhh! That hurt! rewards simply dying while holding 100 or more Cells (a real, if unfortunate, way to lose a huge amount of progress at once), and We've all been there before... rewards a deliberate dive attack straight into spikes.",
                "None of these need to be planned around - they're the kind of thing that tends to happen naturally at some point across many runs, and are worth a smile rather than a dedicated attempt."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through normally at first - the early biome-reached, rune, and base-game boss achievements (including their no-damage siblings once you're comfortable with a boss's patterns) all come from simply progressing and replaying.",
                "Tackle each free content update's biomes and bosses roughly in the order they appear in the list above (Rise of the Giant, then The Bad Seed, then Fatal Falls, then The Queen and the Sea, then Return to Castlevania) - later content generally expects a stronger, more upgraded build than earlier content.",
                "Treat the Boss Stem Cell chain (Surgical/Masterful/Artful/Deft/Perfect extraction and their matching Up, Guards.../Finished, without fear./Harder Better Faster Stronger/Let's get down to the nitty gritty... achievements) as a long-term difficulty ladder you climb naturally over many successful Hand of the King kills, not something to rush.",
                "Save every no-damage boss achievement, the Boss Stem Cell endgame runs, Never fallen, and I like to live dangerously… for last - they're genuinely the hardest content in the list and are much easier once you already know every boss's moveset from normal kills."
            ]
        }

    ]

};
