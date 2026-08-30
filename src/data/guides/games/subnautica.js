// Subnautica Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/subnautica.json), whose 17 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   264710 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 17 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community guides, TrueAchievements, gaming-news sites),
//   noted individually where it appears below. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "subnautica-achievement-guide",
    "category": "game",
    "gameSlug": "subnautica",
    "icon": "🌊",
    "title": "Subnautica Achievement Guide",
    "summary": "A practical guide to all 17 Steam achievements in Subnautica - 17 are hidden. Covers repairing the Aurora and finding the Precursor facilities, curing your infection and tracking down the Degasi survivors, and building the game's vehicles up through launching the escape rocket.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Subnautica has 17 Steam achievements, and all 17 are marked hidden - though every one is a straightforward main-story or base-building milestone rather than a genuine secret, so this guide documents them openly rather than leaving them a surprise. The list covers repairing the crashed Aurora's reactor, discovering all four Precursor facilities, curing yourself of the Kharaa Bacterium, finding all three Degasi survivor bases, building each of the game's vehicles and your first base, and finally launching the Neptune Escape Rocket to leave planet 4546B.",
                "Nothing here is missable - a single normal playthrough naturally covers every achievement, since they all track main-story and base-building milestones rather than side content that can be skipped past permanently. The only one that takes deliberate extra effort is Man's Best Friend (hatching a Cuddlefish egg), since breeding one in an Alien Containment isn't required to finish the story.",
                "Tip: the four Precursor-facility achievements and three Degasi-base achievements double as natural checkpoints for exploring every major biome, so if you are hunting them down anyway you will also pick up most of the story's key lore along the way."
            ]
        },
        {
            "heading": "Repairing the Aurora & Precursor Facilities",
            "body": [
                "Diving in for the first time, repairing the Aurora's reactor to avert a meltdown, and discovering the Precursor Gun and the Lava Castle, Lost River, and Prison Precursor facilities.",
                "The achievements here: Getting Your Feet Wet (Enter the water for the first time after crash-landing on planet 4546B.); Extinction Event Avoided (Repair the Aurora's damaged nuclear reactor before it melts down, averting an extinction-level event.); Ancient Technologies (Discover an Ancient Alien Precursor Gun, one of the Precursor race's abandoned technologies.); Thermal Activity (Find the Precursor facility hidden within the planet's Lava Zone.); Follow the Lost River (Find the Precursor facility hidden within the Lost River.); Fourteen Thousand Leagues Under the Sea (Find the deep Precursor Prison Facility housing the planet's greatest threat.)."
            ]
        },
        {
            "heading": "Survival & the Degasi Survivors",
            "body": [
                "Curing your Kharaa infection, deploying a Time Capsule, and locating all three Degasi survivor bases on the Floating Islands, in the Jellyshroom Caves, and in the Deep Grand Reef.",
                "The achievements here: Optimal Health (Cure yourself of the Kharaa Bacterium infection.); Leave Only Time Capsules (Deploy a Time Capsule out into the ocean.); Seaside Living with an Ocean View (Find the Degasi survivors' base on the Floating Islands.); Follow the Degasi (Find the Degasi survivors' base in the Jellyshroom Caves.); Seamonsters (Find the Degasi survivors' base in the Deep Grand Reef.); Settling in for the Long Haul (Construct your first habitat base.)."
            ]
        },
        {
            "heading": "Vehicles & the Journey Home",
            "body": [
                "Building the Seamoth, Cyclops, and Prawn Suit, hatching a Cuddlefish, and finally launching the Neptune Escape Rocket to leave planet 4546B.",
                "The achievements here: Personal Propulsion (Construct the Seamoth submersible.); 40-foot Sub For One (Construct the Cyclops submarine.); Ordered the Prawn (Construct the Prawn Suit exosuit.); Go Among the Stars (Build and launch the Neptune Escape Rocket to leave planet 4546B.); \"Man's Best Friend\" (Hatch a Cuddlefish egg in an Alien Containment.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Dive in for the first time and start scanning wreckage to unlock early blueprints, then build your first habitat base.",
                "2. Construct the Seamoth for early exploration, then work toward repairing the Aurora's reactor to avert the radiation leak.",
                "3. Push outward to find all three Degasi survivor bases (Floating Islands, Jellyshroom Caves, Deep Grand Reef) and cure your infection along the way.",
                "4. Build the Cyclops and Prawn Suit as you explore deeper biomes, tracking down all four Precursor facilities (the Gun, Lava Castle, Lost River, and Prison facilities).",
                "5. Deploy a Time Capsule, hatch a Cuddlefish for Man's Best Friend, then build and launch the Neptune Escape Rocket to finish the game.",
                "Tip: the Lost River and Precursor Prison Facility are both found via the Lost River biome system deep beneath the map - bring a well-upgraded Prawn Suit or Seamoth with a strong depth module before pushing that deep."
            ]
        }
    ]
};
