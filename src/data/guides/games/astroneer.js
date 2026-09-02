// ASTRONEER Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/astroneer.json), whose 56 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   361420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 15 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "astroneer-achievement-guide",
    "category": "game",
    "gameSlug": "astroneer",
    "icon": "🚀",
    "title": "ASTRONEER Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in ASTRONEER (15 hidden). The hidden achievements are the whole Gateway progression - finding and activating Gateway Chambers, reaching and awakening each planet's core Gateway Engine, and the endgame - described spoiler-free. Everything else - the crafting and resource-mastery grinds, visiting every planet, the fun feats and the multiplayer set - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "ASTRONEER has 56 Steam achievements, 15 of them hidden. It is an open-world space sandbox about deforming terrain, crafting a base, and exploring seven planets. The visible achievements cover the early crafting steps, the resource-mastery grinds (synthesize every composite, collect every gas, smelt every refined resource, harvest every raw material, plant every seed, earn 100,000 Bytes), landing on all seven planets, physics feats like a 10-second slide or an airborne rover, and the multiplayer achievements.",
                "The 15 hidden achievements are the Gateway progression: discovering and activating Gateway Chambers, reaching and awakening the Gateway Engine at each planet's core (Sylva, Desolo, Calidor, Vesania, Novus, Glacio, Atrox), teleporting between chambers, and completing the final objective. They are described here spoiler-free.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; ASTRONEER has no fail state and progress carries across saves. Achievements are disabled while using the in-game creative options, so play a standard save."
            ]
        },
        {
            "heading": "Getting Started",
            "body": [
                "The tutorial and the one-off first uses of each core system - research, the Soil Centrifuge, Chemistry Lab, Atmospheric Condenser, rovers, the Shredder and Trade Platform, hard-terrain drilling, reaching a planet's mantle, planting, and the EXO Research Aid puzzle.",
                "The achievements here: EXO Dynamics Training Seal of Approval (Complete the training missions.); Up By the Roots (Dig up a hazard.); Pursuit of Knowledge (Research an item in the Research Chamber.); A Little Byte Goes a Long Way (Scan a Research Sample of any type.); Dirt Don't Hurt (Extract a resource using the Soil Centrifuge.); Do Science To It (Synthesize a composite material with the Chemistry Lab.); A Little Gassy (Collect a gas with the Atmospheric Condenser.); Sweet New Ride (Build a rover of any type.); Scrap for the Scrapper (Scrap an object in a Shredder.); Junk Trader (Use the Trade Platform to exchange Scrap for another resource.); Barrier Buster (Use a drill to deform a harder type of terrain.); Delve Greedily and Deep (Travel to the Mantle depth of any planet.); Making a New Friend (Plant a seed.); Well Hello There, Fancypants (Change into a different suit.); Thank You For Your Continued Assistance (Solve an EXO Dynamics Research Aid.)."
            ]
        },
        {
            "heading": "Mastery & Research",
            "body": [
                "The completionist crafting grinds - every composite, every gas, every seed, every raw material, every refined resource - plus scrapping 50 objects and the Bytes milestones.",
                "The achievements here: Lab Rat (Use the Chemistry Lab to synthesize each composite material.); Gas Giant (Use the Atmospheric Condenser to collect every type of gas.); Chop Shop (Scrap 50 objects in a Shredder.); In An Astroneer's Garden (Plant a Spinelily, Lashleaf, Bouncevine, Wheezeweed, Thistlewhip, Popcoral and Daggeroot seed.); Resources in the Rough (Use the Terrain Tool to harvest every type of raw material.); They Who Smelt It (Use the Smelter to craft every type of refined resource.); Research Scientist (Gain 100,000 Bytes across all games.); Information Dump (Reach more than 150 Bytes-Per-Minute of concurrent research.)."
            ]
        },
        {
            "heading": "The Gateway Network",
            "body": [
                "The full hidden Gateway progression, plus teleporting between chambers and the finale - all described spoiler-free. Each planet's core Engine needs a Geometric Triptych crafted from that planet's specific resource.",
                "The achievements here: Secrets of the Universe (Activate every Gateway Chamber on every planet in the solar system.); Shapes and Other Shapes (Discover your first Gateway Chamber, one of the glassy scaffold structures on a planet's surface.); First Step Into a Larger World (Supply enough power to a Gateway Chamber to activate its Odd Stone.); Encounter With the Infinite (Reach the Gateway Engine at the core of a planet for the first time.); Sylva Awakened (Activate the Gateway Engine at the core of Sylva with its Geometric Triptych.); Desolo Awakened (Activate the Gateway Engine at the core of Desolo.); Calidor Awakened (Activate the Gateway Engine at the core of Calidor.); Vesania Awakened (Activate the Gateway Engine at the core of Vesania.); Novus Awakened (Activate the Gateway Engine at the core of Novus.); Glacio Awakened (Activate the Gateway Engine at the core of Glacio.); Atrox Awakened (Activate the Gateway Engine at the core of Atrox.); To Infinity... (Activate the Gateway Engine at the core of all seven planets.); Now You See Me... (Teleport from one activated Gateway Chamber to another.); ...And Beyond (Complete the final objective after every Gateway Engine is active - the end of the game, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Exploring the Solar System",
            "body": [
                "Leaving Sylva by shuttle and setting foot on each of the other six planets.",
                "The achievements here: Blast Off (Use a shuttle to leave Sylva.); One Small Step (Visit Desolo.); It's a Dry Heat (Visit Calidor.); Into the Woods (Visit Vesania.); To the Forest Moon (Visit Novus.); I Feel Sick (Visit Atrox.); Cool As Ice (Visit Glacio.)."
            ]
        },
        {
            "heading": "Feats & Multiplayer",
            "body": [
                "The physics stunts (long slide, airborne rover, dance on every planet, ten fireworks in ten seconds) and the co-op achievements.",
                "The achievements here: Hang 10-Squared (Slide uninterrupted for at least 10 seconds.); Where We're Going, We Don't Need Roads (Drive an airborne rover for at least 10 seconds.); Galactic Boogaloo (Dance on every planet.); Baby You're a Firework (Launch 10 fireworks in 10 seconds.); EXO Dynamics Outreach Participant (Join or host a multiplayer game session.); Let Me Borrow This Just A Second (Use a Research Chamber to research something in another Astroneer's game.); Journey to the Center of the Thing (Travel to the center of any planet in a multiplayer game.); EXO Dynamics Outreach Advocate (Spend more than 4 total hours in multiplayer sessions.); Interplanetary Road Trip (Travel to another planet with another player in the same shuttle.)."
            ]
        },
        {
            "heading": "Completion & Secrets",
            "body": [
                "The full-completion achievement, finding a first Vintage Probe, and scanning every probe.",
                "The achievements here: EXO Dynamics Solar System Mastery (Obtain every Achievement in Astroneer.); The First Discovery (Use the Probe Scanner to find one of the mysterious Vintage Probes.); The Wanderer's Way (Use the Probe Scanner to find every one of the mysterious Vintage Probes scattered across the solar system.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through the training missions and set up a starter base, ticking off the one-off crafting achievements as you build each machine.",
                "2. Expand into the resource-mastery grinds - a Chemistry Lab, Smelter, Atmospheric Condenser and greenhouse will clear most of the 'every type' achievements over a normal playthrough.",
                "3. Explore outward: shuttle to each of the six other planets for the landing achievements, and start finding Gateway Chambers on each.",
                "4. Power a Gateway Chamber on each planet, then dig to each planet's core and activate its Gateway Engine with the planet-specific Triptych; do all seven for To Infinity... and the finale.",
                "5. Mop up the physics feats, multiplayer achievements, and the Vintage Probe hunt for The Wanderer's Way, then AllAchievements falls last.",
                "Tip: build a small dedicated Gateway rig - a large rover with two medium storage of batteries and RTGs - so you can bring enough portable power to activate a chamber on the high-cost outer planets (Atrox needs the most) without wiring a line all the way there."
            ]
        }
    ]
};
