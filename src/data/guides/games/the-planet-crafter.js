// The Planet Crafter Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-planet-crafter.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1284190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 7 hidden achievements ship
//   no Steam description; their conditions here are curatorial - story
//   markers/endings kept spoiler-light, secret-boss feat conditions
//   cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "the-planet-crafter-achievement-guide",
    "category": "game",
    "gameSlug": "the-planet-crafter",
    "icon": "🪐",
    "title": "The Planet Crafter Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in The Planet Crafter - terraformation stages & rare ores, buildings, locations & events, automation, trading & endings, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Planet Crafter has 55 Steam achievements, 7 of them hidden (a sealed door, three rare hidden materials, and the three endings). The rest are the terraforming-stage milestones, the building crafts, the discoverable locations and events, and the automation and trading systems.",
                "Nothing is missable - terraforming only goes up, and the hidden materials and locations stay available - but the three ending achievements each require a specific choice at the end, so a fresh save or a reload before the choice is the cleanest way to get all three.",
                "Tip: play the terraforming loop naturally (each stage unlocks the next), exploring for the hidden materials and locations as you go. Before the final choice, save so you can reload and pick each of the three endings."
            ]
        },
        {
            "heading": "Terraformation Stages & Rare Ores",
            "body": [
                "The terraforming milestones (blue sky, clouds, rain, water, lakes, moss, herbs, trees), the first building crafts (living compartment, launch platform, biodome, spreaders, food grower, nuclear reactor, DNA Manipulator), and finding the base rare ores (Iridium, Osmium, Zeolite).",
                "The achievements here: New Sky (Reach full blue sky); Clouds in the sky (Reach clouds); Life from the sky (Reach rain level); Liquid water (Reach liquid water level); So much water (Reach full lakes level); Greenery (Reach moss level); It's growing (Reach herbs level); The Forests (Reach trees level); Shelter (Construct your first living compartment); Are we leaving? (Craft your first launch platform); Biomass (Craft your first biodome); Flowers on hostile planet (Craft your first flower spreader); Jungle (Craft your first tree spreader); Vegetables in space (Craft your first food grower); What could go wrong? (Craft your first nuclear reactor); Genetic Engineer (Craft your first DNA Manipulator); The Rare Red Ore (Find Iridium); The Blue Rare Ore (Find Osmium); The White Rare Ore (Find Zeolite)."
            ]
        },
        {
            "heading": "Buildings, Locations & Events",
            "body": [
                "The mid-game content: the later terraforming stages (insects, atmosphere, fish, amphibians), the outside farm and ore extractor, the discoverable locations (mushroom river, ancient paradise, rainbow caves, the cenote), the asteroid and lava events, drones, autocrafters, the space trading rocket, and the Terra Token totals.",
                "The achievements here: Vivarium (Reach insects level); Farming on Mars (Create your first outside farm); Automation (Craft your first ore extractor); Mushrooms river (Discover the mushroom river); Not the face! (Get hit by an asteroid); Ancient paradise (Find the ancient paradise); Breath (Reach atmosphere level); Bubbles under water (Reach fish level); Logistics (Build a drone); The factory must grow (Build an autocrafter); Space Trading (Build a space trading rocket); Space frogs (Reach amphibians stage); Space smuggler (Gain a total of 100 Terra Tokens); Space pirate (Gain a total of 1000 Terra Tokens); Space trader (Gain a total of 10000 Terra Tokens); Space magnate (Gain a total of 100000 Terra Tokens); Cookie factory (Bake a cookie)."
            ]
        },
        {
            "heading": "Automation, Trading & Endings",
            "body": [
                "The late game: baking a cookie, DNA sequences, a portal generator, an animal shelter, the 10 / 100 / 1000 items-crafted counts, the mammals and complete-terraformation stages, Solar Quartz, and the game's endings.",
                "The achievements here: New life forms (Craft your first DNA sequence); Distant Wrecks (Craft a portal generator); Space zoo (Craft an animal shelter); Barely surviving (Craft 10 items); Getting comfy (Craft 100 items); Unstoppable (Craft 1000 items); Rainbow caves (Discover the rainbow caves); Jump in lava (Get lava damages); Evolution (Reach mammals level); Biosphere (Reach complete terraformation); The Yellow Rare Ore (Find Solar Quartz); The Cenote (Discover the cenote biome)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - story markers, endings or secret-boss feats:",
                "The achievements here: A Door ? (Discover a mysterious sealed door.); Golden flower (Find a Golden Seed.); Fusion Energy (Find a Fusion Cell.); The Pink Rare Ore (Find Pulsar Quartz, the pink rare ore.); Subjection (Reach the game's ending via the Sentinel choice (no plot detail).); Subservience (Reach the game's ending via the Riley choice (no plot detail).); Subversion (Reach the game's ending via the Wardens choice (no plot detail).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Progress the terraforming stages in order, doing the building crafts as they unlock.",
                "2. Explore for the base rare ores and the hidden materials (Golden Seed, Fusion Cell, Pulsar Quartz) and the discoverable locations.",
                "3. Build out automation and trading (autocrafter, drones, trading rocket) and hit the Terra Token and items-crafted counts.",
                "4. Reach complete terraformation, then save before the final choice and reload to take each of the three endings.",
                "Tip: A Door ? and the hidden materials are tied to specific wreck and cave locations - use a resource/exploration map, since none of them show up in normal play unless you go looking."
            ]
        }
    ]
};
