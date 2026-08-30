// Techtonica Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/techtonica.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1457320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "techtonica-achievement-guide",
    "category": "game",
    "gameSlug": "techtonica",
    "icon": "⚙️",
    "title": "Techtonica Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in Techtonica - none are hidden. Covers core factory-building milestones, underground exploration and discovery, and the main story's late-game objectives.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Techtonica has 24 Steam achievements and none are hidden. As an underground factory-automation game, the list splits cleanly into building and production milestones (placing your first and 100th Assembler, Mining Drills, Electrical Components, Processor Units, Cooling Systems, Advanced Circuits, Conveyor Belts, a Freight Elevator), exploration and discovery beats (finding named cave regions and story landmarks), and late-game story objectives tied to the main narrative (Sector LIMA, PULSE Situation Room data, and finishing every objective).",
                "Nothing is missable - every construction milestone and discovered area stays recorded on your save, and the story beats unlock naturally as you progress through the main quest line. The achievements are largely just checkpoints along the normal path to finishing the game rather than side content, so a single playthrough that follows the story picks up almost the entire list.",
                "Tip: build production lines with a buffer above what an achievement asks for (e.g. more than 100 Assemblers, more than 10 Processor Units) since factories in Techtonica tend to grow past their original targets anyway - you will likely clear several of the production-count achievements without specifically farming for them."
            ]
        },
        {
            "heading": "Assembly & Production Milestones",
            "body": [
                "The core factory-building block: constructing your first Assembler and your 100th, 10 Mining Drills, 100 Electrical Components, 10 Processor Units, 20 Cooling Systems, 10 Advanced Circuits, 100 Conveyor Belts, discovering an unsettling structure (Monumental), and fully establishing Freight Elevator operations in Sector Victor.",
                "The achievements here: Groundbreakers, Assemble! (Awarded for the initial construction and placement of an Assembler.); Many Hands (Awarded for the construction and placement of 100 Assemblers.); Getting the Point (Awarded for the construction and placement of 10 Mining Drills.); Dreaming of Electric Sheep (Awarded for the construction of 100 Electrical Components.); Overclocked (Awarded for the construction of 10 Processor Units.); Cool S (Awarded for the construction of 20 Cooling Systems.); Circuit Breaker (Awarded for the construction of 10 Advanced Circuits.); Belter Loader (Awarded for the placement of 100 Conveyor Belts.); Monumental (Awarded for the discovery of an unsettling structure.); Twist of Freight (Awarded for the full establishment of Freight Elevator operations in Sector Victor.)."
            ]
        },
        {
            "heading": "Exploration & Discovery",
            "body": [
                "Discovering the Butterfly Grove, Central Falls, and Fungus Grotto areas, constructing 10 Plantmatter Frames, building the M.O.L.E. Terrain Manipulation Device and enhancing it with Coolant, and descending out of a facility by the only means available.",
                "The achievements here: The Butterfly Effect (Awarded for discovery of the Butterfly Grove area.); Chasing Waterfalls (Awarded for discovery of the Central Falls area.); Mush Room (Awarded for discovery of the Fungus Grotto area.); Thresher Refresher (Awarded for the construction of 10 Plantmatter Frames.); Black Hole Gun, Wontcha Come (Awarded for construction of the M.O.L.E. Terrain Manipulation Device.); Cold Cut (Awarded for enhancing the M.O.L.E with the use of Coolant.); Might as Well... (Awarded for successfully descending out of a facility by the only means available.)."
            ]
        },
        {
            "heading": "Story & Endgame",
            "body": [
                "The late-game story block: recovering key assets in Sector LIMA, manufacturing Kindlevine Stems, a significant base-building deployment milestone, constructing explosive industrial technologies, recovering all PULSE Situation Room data, understanding the game's greater purpose, and completing every objective (Peak Performance).",
                "The achievements here: Square Root (Awarded for the recovery of key assets in Sector LIMA.); STEM Program (Awarded for the successful manufacture of Kindlevine Stems.); Concrete Jungle  (Awarded for the significant deployment of base building assets.); Blast Radius (Awarded for the construction of explosive industrial technologies.); Arrhythmia (Awarded for the recovery of all PULSE Situation Room data.); Greater Goods (Awarded for the understanding of a greater purpose.); Peak Performance (Awarded for the accomplishment of all objectives.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Build your first Assembler and Mining Drills early, then keep expanding your factory naturally - Many Hands (100 Assemblers) and Getting the Point (10 Mining Drills) fall out of normal base growth.",
                "2. Follow the main story's exploration prompts to discover the Butterfly Grove, Central Falls, and Fungus Grotto areas, and to find the unsettling structure (Monumental).",
                "3. Build out your production chain toward Electrical Components, Processor Units, Cooling Systems, and Advanced Circuits, and place Conveyor Belts as you connect everything together.",
                "4. Construct the M.O.L.E. Terrain Manipulation Device and enhance it with Coolant, and use the only available means to descend out of a facility when the story calls for it.",
                "5. Push through the late-game story beats - Sector LIMA, Kindlevine Stems, the PULSE Situation Room, and the game's explosive industrial tech - toward completing every objective for Peak Performance.",
                "Tip: Freight Elevator operations (Twist of Freight) and the M.O.L.E. device are both tied to specific story-progression points, so if you are missing them, check whether you have advanced far enough into Sector Victor and the relevant later chapters rather than assuming you need to build something extra."
            ]
        }
    ]
};
