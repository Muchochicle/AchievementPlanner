// Sons of the Forest Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sons-of-the-forest.json), whose 32 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1326470 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 29 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sons-of-the-forest-achievement-guide",
    "category": "game",
    "gameSlug": "sons-of-the-forest",
    "icon": "🪓",
    "title": "Sons of the Forest Achievement Guide",
    "summary": "A practical guide to all 32 Steam achievements in Sons of the Forest (29 hidden). Covers surviving to day 1/10/25/50, the log-count building tiers, the companion-relationship achievements for Kelvin and Virginia, the crafting and collection grinds, the two story endings, and a set of one-off gags. Twenty-nine of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sons of the Forest has 32 Steam achievements and 29 are hidden. Four are survival-time milestones (day 1, 10, 25, 50), four are building tiers (structures using 50, 100, 500 and 1,000 logs), and the rest are a spread of activities: fully crafting the Tech Armor set, collecting 50 Drogue watches, earning $1,000, eating one of every edible, drinking 50 cans of Fi-Z, owning every piece of clothing, crafting every weapon, 3D-printing one of every item, digging 100 and 1,000 holes, plating every weapon with Solafite, and the relationship achievements for maxing sentiment with Virginia and completing the story with all friendly NPCs alive. Two are the mutually informative story endings - escaping the island, or choosing to stay.",
                "The catalog marks it difficulty 3. Nothing is time-gated except the survival-day milestones (which you can pass simply by sleeping through days), and the world is fully open, so there is no missable content - but 'Keep Your Friends Close' (finish the story without letting Kelvin or Virginia die) effectively wants a careful dedicated run, and 'Trusted' requires a multiplayer session where the host grants you Trusted Player status.",
                "Tip: knock out the grind achievements passively across a long save - dig holes whenever you pass your base, drink every Fi-Z you find rather than other drinks, and keep building onto one megastructure for the 1,000-log 'City Planner' tier instead of starting fresh bases."
            ]
        },
        {
            "heading": "Survival, Building & Companions",
            "body": [
                "Surviving to day 1, 10, 25 and 50, building structures with 50, 100, 500 and 1,000 logs, becoming a Trusted player in multiplayer, drinking 50 cans of Fi-Z, completing and wearing the full Tech Armor set, collecting 50 Drogue watches, earning $1,000, eating one of every edible, and owning every piece of clothing.",
                "The achievements here: THIS CAN’T BE HEALTHY (Drink 50 cans of Fi-Z.); DYNAMO (Complete and wear the full Tech Armor set.); COLLECTOR (Pick up 50 Drogue watches.); 1% (Earn $1,000.); FOODIE (Consume one of each type of edible.); SURVIVOR (Survive one day.); WHAT COULD GO WRONG (Survive for 10 days.); THIS PLACE ISN’T SO BAD (Survive for 25 days.); NEVER GOING HOME (Survive for 50 days.); TRUSTED (Become a Trusted player in a multiplayer game (the host must grant the status).); FASHIONISTA (Own every piece of clothing in the game.); TRADESMAN (Build a structure using more than 50 logs.); CONTRACTOR (Build a structure using more than 100 logs.); ARCHITECT (Build a structure using more than 500 logs.); CITY PLANNER (Build a structure using more than 1,000 logs.)."
            ]
        },
        {
            "heading": "Crafting, Digging & Gags",
            "body": [
                "Making a Sluggy explode, taking five cannibal kicks, giving Virginia a GPS locator, crafting every weapon, eating 20 raw fish, digging 100 and 1,000 holes, dying to a shark, 3D-printing one of every item, maxing sentiment with Virginia, escaping the island, choosing to stay, completing the story with all friendly NPCs alive, and plating every weapon with Solafite.",
                "The achievements here: PINATA (Make a Sluggy explode.); SUCKER FOR PUNISHMENT (Be on the receiving end of five cannibal kicks.); EVERY MOVE YOU MAKE (Give a GPS Locator to Virginia.); MC CRAFTY (Craft all weapons.); I DREAM OF SUSHI (Consume 20 raw fish.); BADGER (Dig 100 holes.); I LIKE BLISTERS (Dig 1,000 holes.); NEED A BIGGER BOAT (Die from a shark attack.); MAKER (Print at least one of every item that can be printed from a 3D Printer.); CHIVALRY IS NOT DEAD (Reach the maximum sentiment level with Virginia.); FOUGHT DEMONS (Escape the island successfully (one of the two story endings).); FIGHT DEMONS (Choose to stay on the island (the other story ending).); KEEP YOUR FRIENDS CLOSE (Complete the story without letting any friendly NPC (Kelvin or Virginia) die.); OOOH SHINY (Plate every valid weapon with Solafite using the Solafite Upgrader.)."
            ]
        },
        {
            "heading": "Discoverables",
            "body": [
                "Finding all the discoverable blueprints, watching all the found-footage recordings, and collecting all the note pages.",
                "The achievements here: INTERIOR DESIGNER (Find all the discoverable blueprints); BLOCKBUSTER (Watch all the found footage recordings); GUMSHOE (Collect all the note pages)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Establish a base and survive - sleeping through days is enough for the day 1/10/25/50 milestones.",
                "2. Keep expanding one large structure for the 50/100/500/1,000-log building tiers rather than starting new bases.",
                "3. Do the grinds passively: dig holes near your base, drink every Fi-Z, eat raw fish, and collect watches and clothing as you explore caves.",
                "4. Progress the story through the caves, keeping Kelvin and Virginia alive for 'Keep Your Friends Close', and get the Solafite Upgrader for 'Oooh Shiny'.",
                "5. Finish the story once for each ending (escape, and stay), using a prior save to see both.",
                "Tip: 'Trusted' needs a multiplayer game where the host grants you Trusted Player status - arrange it with a friend rather than expecting it in a random public lobby."
            ]
        }
    ]
};
