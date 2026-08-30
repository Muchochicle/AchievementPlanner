// PEAK Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/peak.json), whose 64 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3527290 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "peak-achievement-guide",
    "category": "game",
    "gameSlug": "peak",
    "icon": "⛰️",
    "title": "PEAK Achievement Guide",
    "summary": "A practical guide to all 64 Steam achievements in PEAK - 1 are hidden. Covers early climbing and camp milestones, challenge-run and exploration badges, biome mastery and special interactions, late-game feats, and the 1 hidden secret-ending achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "PEAK has 64 Steam achievements, and 1 is hidden. Every achievement is a \"Badge\" tied to the game's co-op mountain-climbing loop: reaching each biome (SHORE, TROPICS, ALPINE, CALDERA, MESA, ROOTS, GLOOM, THE CITADEL), specific item and food interactions, challenge-run conditions (solo escapes, no-fall-damage escapes, no-packaged-food escapes, sub-1-hour escapes), and a long tail of item-specific and biome-specific feats. The 1 hidden achievement is the game's secret ending.",
                "Nothing is missable in a lasting sense - every badge can be earned on any future expedition, and PEAK's biomes and items stay the same across runs. The genuine long pole is the hidden Rule Zero Badge, which needs a single coordinated expedition where your team collects all four Scout Gems, carries every one to the summit without dropping any, and completes a specific late-game sequence.",
                "Tip: many of the challenge-run badges (no fall damage, no packaged food, never losing consciousness, under an hour) are much easier with a small, coordinated group who agree on the challenge before starting, rather than trying to retroactively notice you already qualify - decide on your target badge before the expedition begins."
            ]
        },
        {
            "heading": "Early Climbing & Camp",
            "body": [
                "The early-game badges: reaching THE PEAK itself, cooking 20 campfire meals, placing 100m of rope in one expedition, climbing past SHORE and TROPICS, having a friend escape without you, receiving 5 Morale Boosts, climbing past ALPINE and CALDERA, placing 10 pitons, restoring 200 total poison with items, eating 5 different berries, obtaining a mystical item, escaping solo, resurrecting 3 scouts in one expedition, and escaping without fall damage.",
                "The achievements here: Peak Badge (Reach the PEAK.); Cooking Badge (Cook 20 meals at campfires.); Knot Tying Badge (Place 100m of rope in a single expedition.); Beachcomber Badge (Climb past the SHORE.); Participation Badge (Have a friend escape the island without you.); Trailblazer Badge (Climb past the TROPICS.); Happy Camper Badge (Receive 5 Morale Boosts from campfires.); Alpinist Badge (Climb past the ALPINE.); Volcanology Badge (Climb past the CALDERA.); Bouldering Badge (Place 10 pitons.); Toxicology Badge (Restore 200 total poison by using items.); Foraging Badge (Eat 5 different berries in a single expedition.); Esoterica Badge (Obtain a mystical item.); Lone Wolf Badge (Escape the island in a solo expedition.); Clutch Badge (Resurrect 3 scouts in a single expedition.); Balloon Badge (Escape the island without taking fall damage.)."
            ]
        },
        {
            "heading": "Challenge Runs & Exploration",
            "body": [
                "Deliberate challenge-run and exploration badges: escaping without placing anything on the mountain, escaping under an hour, helping Bing Bong escape, escaping without packaged food, a full ingredient-cooking challenge, eating 4 non-toxic mushrooms in one expedition, healing 100 injury points for friends in one expedition, escaping without ever losing consciousness, playing the bugle for a capybara, reaching the top of a big tree, a 1-on-1 with the Scoutmaster, saving an unconscious friend with an item, climbing 5000m total, opening 15 luggage in one expedition, reading the Scoutmaster's journal, and climbing 50m without touching the ground.",
                "The achievements here: Leave No Trace Badge (Escape the island without placing anything on the mountain.); Hasty Badge (Escape the island in under an hour.); Bing Bong Badge (Help Bing Bong escape the island.); Naturalist Badge (Escape the island without eating any packaged food.); Gourmand Badge (Escape the island after cooking and eating a coconut half, a honeycomb, a yellow winterberry, and an egg.); Mycology Badge (Eat four different non-toxic mushrooms in a single expedition.); First Aid Badge (Heal your friends for 100 points of injury in a single expedition.); Survivalist Badge (Escape the island without ever losing consciousness.); Animal Serenading Badge (Play the bugle for a capybara.); Arborist Badge (Reach the top of a really big tree.); Mentorship Badge (Have a 1-on-1 with the Scoutmaster.); Emergency Preparedness Badge (Heal an unconscious friend with an item to save them from death.); High Altitude Badge (Climb 5000m total.); Plunderer Badge (Open 15 luggages in a single expedition.); Bookworm Badge (Read the Scoutmaster’s final journal entry.); Endurance Badge (Climb 50m upwards without touching the ground.)."
            ]
        },
        {
            "heading": "Biome Mastery & Special Interactions",
            "body": [
                "Deeper biome and item interactions: climbing past MESA, catching a Flying Disc from 100m, climbing past MESA under 10% Heat, getting covered in cactuses, achieving flight, sacrificing to The Kiln, giving in to hunger, shooting across the MESA canyon in a Scout Cannon, surviving an Antlion attack, looking at the sun, climbing past ALPINE under 20% Cold, climbing past ROOTS, climbing past ROOTS under 25% spores, surviving a spider web, curing a zombie bite, and trying all 5 Shroomberry types in one expedition.",
                "The achievements here: Nomad Badge (Climb past the MESA.); Ultimate Badge (Catch a Flying Disc from 100m away.); Cool Cucumber Badge (Climb past the MESA without ever having more than 10% Heat.); Needlepoint Badge (Have a lot of cactuses stuck to you.); Aeronautics Badge (Achieve flight.); 24 Karat Badge (Offer The Kiln a worthy sacrifice.); Resourcefulness Badge (Give in to your hunger.); Daredevil Badge (Shoot across the MESA canyon in a Scout Cannon.); Megaentomology Badge (Survive an Antlion attack.); Astronomy Badge (Look a little too closely at the blazing sun.); Bundled Up Badge (Climb past the ALPINE without ever having more than 20% Cold.); Forestry Badge (Climb past the ROOTS.); Tread Lightly Badge (Climb past the ROOTS without ever having more than 25% spores.); Web Security Badge (Escape a spider's web and survive.); Undead Encounter Badge (Cure yourself from a zombie bite.); Advanced Mycology Badge (Try all 5 types of Shroomberry in a single expedition.)."
            ]
        },
        {
            "heading": "Late-Game Feats",
            "body": [
                "The late-game and GLOOM/Citadel content: pulling an unconscious friend 30m with the Rescue Claw, blocking 100 damage with Fortified Milk, eating 3 Hot Dogs in 5 seconds, resurrecting a friend through unholy means, bouncing 40m off a mushroom, cooking and eating a Mandrake, climbing past GLOOM, ringing 5 Belltowers in one expedition, consuming The Early Worm, opening 2 Clown Luggage in one expedition, flying 100m with the Glider, clearing THE CITADEL without being hit by any traps, healing 75%+ damage at once with the Ritual Dagger, burning up the Ghost, and removing 10 arrows from yourself in one expedition.",
                "The achievements here: Disaster Response Badge (Pull an unconscious friend 30m with the Rescue Claw.); Calcium Intake Badge (Block 100 total damage with the Fortified Milk.); Competitive Eating Badge (Eat 3 Hot Dogs in 5 seconds or less.); Applied Esoterica Badge (Resurrect a friend using unholy means.); Mycoacrobatics Badge (Bounce up 40m off a mushroom.); Cryptogastronomy Badge (Cook and eat a Mandrake.); Wanderer Badge (Climb past the GLOOM.); Bellringer Badge (Ring 5 Belltowers in the GLOOM in a single expedition.); Well Rested Badge (Consume The Early Worm.); Jester Badge (Open 2 Clown Luggage in a single expedition.); Hang Gliding Badge (Fly 100m with the Glider without touching the ground.); Medieval History Badge (Climb past THE CITADEL without being hit by any traps.); Last Resort Badge (Heal over 75% damage at once by using the Ritual Dagger.); Exorcist Badge (Burn up the Ghost.); Archery Badge (Remove 10 arrows from yourself in a single expedition.)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "PEAK's one hidden achievement is the game's secret ending, sourced from community guides (allthings.how, Gamerant, Steam Community):",
                "Rule Zero Badge: PEAK's secret-ending achievement. In a single expedition, collect all four Scout Gems across the biomes (Tenacity in SHORE, Initiative in ROOTS, Generosity in ALPINE, Ambition in GLOOM) and carry every one of them, without dropping any, all the way to THE PEAK. Bestow them on the Stone Scout to create Scout's Honor, commune with it, then climb down through NADIR and back up through the hidden gate to THE PEAK. Completing that sequence frees Scoutmaster Myers's soul and unlocks the badge."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Climb through the early biomes normally - SHORE, TROPICS, ALPINE, CALDERA - picking up cooking, camping, and item-based badges as you go, and reach THE PEAK itself for the base Peak Badge.",
                "2. Work through the specific challenge-run badges: a solo escape, an escape without fall damage, an escape without placing anything on the mountain, and an escape without eating packaged food.",
                "3. Push exploration and item-interaction badges - foraging, mushroom-eating, mystical items, resurrections, healing - across MESA, ROOTS, and GLOOM as you unlock them.",
                "4. Chase the biome-specific challenge variants (Cool Cucumber in MESA, Bundled Up in ALPINE, Tread Lightly in ROOTS, Medieval History in THE CITADEL) once you are comfortable with each biome's hazards.",
                "5. Once your group is experienced, organize a dedicated expedition for the hidden Rule Zero Badge: collect all four Scout Gems (Tenacity, Initiative, Generosity, Ambition) across the biomes, carry them all to the summit without dropping any, and complete the secret-ending sequence at NADIR.",
                "Tip: bring a Backpack on any run where you are collecting Scout Gems for the hidden ending - it lets you store every gem safely, which is the single most common way a Rule Zero attempt fails (dropping a gem during a fall or an item swap)."
            ]
        }
    ]
};
