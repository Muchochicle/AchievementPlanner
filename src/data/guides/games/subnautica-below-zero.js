// Subnautica: Below Zero Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/subnautica-below-zero.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   848450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community guides, TrueAchievements, gaming-news sites),
//   noted individually where it appears below. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "subnautica-below-zero-achievement-guide",
    "category": "game",
    "gameSlug": "subnautica-below-zero",
    "icon": "❄️",
    "title": "Subnautica: Below Zero Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Subnautica: Below Zero - 13 are hidden. Covers arriving on 4546B and early survival, encountering Al-An and exploring the region's key sites, and the endgame content that closes out Robin's story.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Subnautica: Below Zero has 13 Steam achievements, and all 13 are marked hidden - as with the original game, every one is a straightforward story or building milestone rather than a genuine secret, so this guide documents them openly. As Robin Ayou searching for her sister Sam on planet 4546B's frozen region, the list covers early survival and vehicle-building, meeting the sapient alien Al-An, exploring Marguerit Maida's base and the Glacial Basin, and building Al-An's vessel to leave the planet together.",
                "Nothing here is missable - a normal playthrough naturally covers every achievement, since the list tracks main-story beats and core vehicle/base-building milestones. Necessary Repairs and Finding the Cure both require a bit of specific exploration (the Glacial Basin bridge and Sam's hidden antidote cache) rather than happening automatically, so budget a little extra time for those two.",
                "Tip: Another Survivor (finding Marguerit's base) requires actually seeing the cutscene outside her hideout - teleporting or fast-traveling straight into the base skips the trigger and will not unlock the achievement."
            ]
        },
        {
            "heading": "Arrival & Early Survival",
            "body": [
                "Locating your drop pod, building the Seatruck and Snowfox, placing a Jukebox in a base, and crafting a Cold Suit for the surface.",
                "The achievements here: Drop in the Ocean (Locate your crashed drop pod after arriving on planet 4546B.); Like Riding a Bike (Construct the Snowfox hoverbike.); Truckin' (Construct the Seatruck.); Jukebox Hero (Build a Jukebox inside one of your bases.); Dressed For The Weather (Craft a Cold Suit to survive the surface's freezing temperatures.)."
            ]
        },
        {
            "heading": "Al-An & Region Exploration",
            "body": [
                "Constructing a Spy Pengling, repairing the Glacial Basin bridge, encountering the alien Al-An for the first time, and finding the cure for the Frozen Leviathan.",
                "The achievements here: Spy Pengling (Construct a Spy Pengling drone.); Necessary Repairs (Repair the damaged bridge in the Glacial Basin using crafted Hydraulic Fluid.); Xenobiology (Encounter the sapient alien Architect Al-An for the first time at Shrine Zero.); Finding the Cure (Use the Kharaa antidote hidden by Sam to cure the Frozen Leviathan of its infection.)."
            ]
        },
        {
            "heading": "Endgame & Leaving 4546B",
            "body": [
                "Finding Marguerit Maida's base, disabling Alterra's communications tower, and building and launching Al-An's vessel to leave the planet.",
                "The achievements here: Another Survivor (Find Marguerit Maida's hidden base beneath the Purple Vents.); Pirate Radio (Disable Alterra's communications by overriding the Communications Tower and entering Test Mode.); Out of Mind (Construct Al-An's alien vessel from its three recovered Architect components.); Into the Unknown (Leave planet 4546B aboard Al-An's vessel and reach the Architect homeworld.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Locate your drop pod after crash-landing, then start building basic survival gear and your first base.",
                "2. Craft a Cold Suit for the surface, build the Seatruck and Snowfox for exploration, and place a Jukebox in a base.",
                "3. Push to Shrine Zero to encounter Al-An for the first time, then work toward finding Marguerit Maida's hidden base and the Glacial Basin bridge repair.",
                "4. Build a Spy Pengling, disable Alterra's communications at the tower, and find Sam's hidden antidote to cure the Frozen Leviathan.",
                "5. Recover Al-An's three vessel components, construct the vessel, and leave 4546B together to finish the game.",
                "Tip: Al-An needs to be with you (merged with Robin) before you can scan his vessel components, so make sure you have actually recruited him at Shrine Zero before hunting for the three parts."
            ]
        }
    ]
};
