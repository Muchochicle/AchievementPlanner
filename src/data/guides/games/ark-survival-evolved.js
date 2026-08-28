// ARK: Survival Evolved's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ark-survival-evolved.json), whose 32
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 346110 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - all
//   32 ship a real, official Steam description, quoted directly below.
//   ARK has no Steam-hidden achievements.
// - The grouping (early survival, riding and levelling, exploration and
//   the map extremes, the Explorer Note ladder, and the Island boss
//   ladder plus The Center) is read from what each achievement's own
//   description requires and ARK's well-known Island progression, not
//   invented.
export const GUIDE = {

    slug: "ark-survival-evolved-achievement-guide",
    category: "game",
    gameSlug: "ark-survival-evolved",
    icon: "🦖",
    title: "ARK: Survival Evolved Achievement Guide",
    summary: "A practical guide to all 32 Steam achievements in ARK: Survival Evolved - the early survival milestones, taming and riding, the map extremes, the ten-step Explorer Note ladder, and the Island boss ladder that ends in the three Ascensions.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "ARK: Survival Evolved has 32 Steam achievements and none are hidden. Every one is unlocked on The Island (the base map) except Survivor of The Center, which needs the free The Center map.",
                "Nothing is permanently missable - your character, tames and progress persist - but several achievements are very long-haul: the Explorer Note ladder, Maximum Survivor, Master Zoologist and the boss fights realistically need a tribe, a large tamed army, or single-player settings turned up.",
                "Tip: play on a private server or single-player with boosted rates for the completion run. The boss fights and the level/taming grinds are balanced around a full tribe, so solo players usually raise taming, harvesting and XP multipliers rather than spending hundreds of real hours at official rates."
            ]
        },

        {
            heading: "Early Survival",
            body: [
                "The first session covers the basics: Your first day... (survive a full day and night), Your first Dino... (tame any creature), and Your first Ride... (ride a tamed creature).",
                "Cure-All comes from curing yourself of Swamp Fever, the disease you catch from Diseased Leeches in the swamp - craft and eat Lesser Antidote to clear it."
            ]
        },

        {
            heading: "Riding & Levelling",
            body: [
                "Two are specific mounts: Rex Rider (ride a tamed Tyrannosaurus) and Giga Rider (ride a tamed Giganotosaurus - by far the harder tame of the two).",
                "Two are level caps: Maximum Survivor (reach the survivor level cap yourself) and Maximum Dinosaur (level one of your tames to its cap). Both are far faster with a boosted XP rate; the survivor cap in particular assumes you have also unlocked levels through the Explorer Notes and boss fights."
            ]
        },

        {
            heading: "Exploration & Map Extremes",
            body: [
                "Map Maker asks you to uncover more than 80% of the mini-map, which happens naturally once you have a flying mount and travel the whole Island.",
                "Highest Peak (stand on the Island's tallest mountain summit) and Lowest Depth (reach the sea floor at the deepest point of the ocean) are quick with a good mount - a Ptera or Argentavis for the peak, a Megalodon, Basilosaurus or scuba gear for the trench."
            ]
        },

        {
            heading: "The Explorer Note Ladder",
            body: [
                "Ten achievements track a single rising percentage of Explorer Notes collected across the Island: Beginner Explorer (10%), Experienced Explorer (20%), Adventurous Explorer (30%), Studious Explorer (40%), Veteran Explorer (50%), Adept Explorer (60%), Professional Explorer (70%), Expert Explorer (80%), Master Explorer (90%) and Perfect Explorer (100%).",
                "Each note also grants a temporary XP buff and permanently raises your level cap, so this is the main route to Maximum Survivor. Use a community Explorer Note map and a fast, sturdy flyer; many notes sit in dangerous caves or on cliff faces."
            ]
        },

        {
            heading: "The Island Boss Ladder",
            body: [
                "The Island has three arena bosses of rising difficulty - the Broodmother, the Megapithecus and the Dragon - each fought at Gamma, Beta or Alpha tribute levels. The achievements track first clears: Veteran Survivor (the first Guardian), Expert Survivor (the second), Master Survivor (the third) and Survivor Evolved (all three defeated).",
                "To even enter an arena you need Artifact Archaeologist (personally retrieve all of the Island's Artifacts from its caves) and the boss tribute items, plus Veteran Paleontologist (find every dossier of the Island's original creatures, which you also complete by taming them). Master Zoologist - tame every tameable creature on the Island - is the single longest achievement in the game."
            ]
        },

        {
            heading: "Ascension & The Center",
            body: [
                "Beating the Island's final encounter at each level grants an Ascension and its achievement: Gamma Ascension, Beta Ascension and Alpha Ascension. Alpha in particular expects a top-tier tribe with fully imprinted, mutated Rexes or Giganotosaurus.",
                "Survivor of The Center is the one achievement off the base map: defeat the twin Guardians (the Broodmother and the Megapithecus, fought together) in the arena on the free The Center map."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Get established first: Your first day..., Your first Dino..., Your first Ride..., then Cure-All the first time the swamp gets you.",
                "Tame up to a flyer and an early war mount, then travel for Map Maker, Highest Peak and Lowest Depth while you sweep Explorer Notes through the whole ladder from Beginner Explorer to Perfect Explorer - this also carries you toward Maximum Survivor and unlocks Veteran Paleontologist as you go.",
                "Build a breeding line for Rex Rider and Giga Rider, push a tame to its cap for Maximum Dinosaur, and grind out Master Zoologist.",
                "Finally run the boss ladder: collect every Artifact for Artifact Archaeologist, then clear Veteran Survivor, Expert Survivor, Master Survivor and Survivor Evolved, taking Gamma Ascension, Beta Ascension and Alpha Ascension on the way. Swap to The Center for Survivor of The Center."
            ]
        }

    ]

};
