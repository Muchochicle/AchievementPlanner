// Once Human Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/once-human.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2139460 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "once-human-achievement-guide",
    "category": "game",
    "gameSlug": "once-human",
    "icon": "🌫️",
    "title": "Once Human Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Once Human - none are hidden. manibus scenario, way of winter & deviation scenarios, endless dream & raidzone.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Once Human has 36 Steam achievements and none are hidden. They are organised by scenario: the base Manibus scenario has the most (boss kills, Deviation captures, base-building milestones), and the rest cover The Way of Winter, the Deviation scenario, Endless Dream, and the RaidZone PvP map.",
                "Nothing is missable within a scenario, but Once Human's scenarios rotate on a season timer - you need each scenario to be currently running to earn its achievements, so some may have to wait for the rotation.",
                "Tip: focus on the Manibus scenario first for the bulk of the list (the five bosses, 25 Deviations, and the base milestones), then pick up the other scenarios' achievements whenever that scenario is in the current rotation."
            ]
        },
        {
            "heading": "Manibus Scenario",
            "body": [
                "The base scenario: the five monolith boss kills (Ravenous Hunter, Treant, Arachsiam, Shadow Hound, Forsaken Giant), the first Securement Silo and the LEA Research Lab solo clear, the Deviation capture goals, and the base/territory milestones (crops, power, building rating, Deviant kills, Mods, defensive facilities, crates, drifts).",
                "The achievements here: Corruption Be Gone (Defeat the Ravenous Hunter in the Manibus scenario.); End the Blight (Defeat the Treant in the Manibus scenario.); Spider Nest Purge (Defeat the Arachsiam in the Manibus scenario.); Put Down That Dog (Defeat the Shadow Hound in the Manibus scenario.); I Remember Now! (Defeat the Forsaken Giant in the Manibus scenario.); Securement Silo Explorer (Complete your first Securement Silo challenge in the Manibus scenario.); Desperate Lone Wolf (Clear LEA Research Lab in Solo mode in the Manibus scenario.); First Securement (Capture your first Deviation in the Manibus scenario.); Securement Master (Secure 25 Deviations in the Manibus scenario.); Legendary Deviation (Capture a Deviation with Deviant Energy and Activity Rating both at 5 in the Manibus scenario.); Veteran Farmer (Harvest 50 crops from a Planter Box in the Manibus scenario.); Electricity Expert (Reach 80 Watts of Territory Power in the Manibus scenario.); Renovation Master (Achieve a Building Rating of 1,000 in the Manibus scenario.); Scavenging (Eliminate 2,000 Deviants in the Manibus scenario.); Mod Expert (Collect 40 different Mods at Lv. 15 or above in the Manibus scenario.); Manufacturing Tycoon (Build 25 defensive combat facilities in your territory in the Manibus scenario.); No Rock Unturned (Open 10 Mystical Crates in the Manibus scenario.); Treasure Hunter (Find 5 Vault Crates in the Manibus scenario.); Drift Master (Complete 10 drifts with any vehicle in the Manibus scenario.)."
            ]
        },
        {
            "heading": "Way of Winter & Deviation Scenarios",
            "body": [
                "The Way of Winter scenario (entering it, a Thermal Tower, 200 Raw Chaosium, a Chaosium Lantern) and the Deviation: Survive, Capture, Preserve scenario (entering it, an arena leader challenge, an S Deviation, 20+ registered Deviations).",
                "The achievements here: Frozen Solid (First time entering The Way of Winter scenario.); Stick Together for Warmth (Place a Thermal Tower in your territory in The Way of Winter scenario.); Raw Chaosium Collector (Forge 200 Raw Chaosium in the furnace in The Way of Winter scenario.); Spark Hoarder (Craft a Chaosium Lantern in The Way of Winter scenario.); Era of Deviations (Enter the Deviation: Survive, Capture, Preserve scenario.); Arena Master (Complete an arena leader challenge in the Deviation: Survive, Capture, Preserve scenario.); Ultimate Deviation (Register 1 S Deviation in Symbiosis System in the Deviation: Survive, Capture, Preserve scenario.); Deviation Log (Register 20+ Deviations in the Symbiosis System (Deviation: Survive, Capture, Preserve scenario).)."
            ]
        },
        {
            "heading": "Endless Dream & RaidZone",
            "body": [
                "The Endless Dream scenario (entering it, the Light and Deep Dreamer kills, 10 Wakeful Sand) and the RaidZone map (entering it, a 60-minute survival, defeating another Meta, looting another player), ending with Home Run for all other trophies.",
                "The achievements here: Sweet Dreams (First time entering the Endless Dream scenario.); Light Dreamer Killer (Defeat a Light Dreamer once in the Endless Dream scenario.); Dream Collector (Collect 10 Wakeful Sand in the Endless Dream scenario.); Deep Dreamer Killer (Defeat a Deep Dreamer once in the Endless Dream scenario.); RaidZone Recruit (First time entering the RaidZone map.); Survival History (Survive for 60 minutes in RaidZone.); Time to square off (Defeat 1 other Meta in RaidZone.); Gimme That! (Loot another player's supplies once in RaidZone.); Home Run (Unlock all other trophies.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Manibus scenario: kill the five monolith bosses, capture 25 Deviations, and hit the base-building milestones (power, building rating, crops, Mods, facilities).",
                "2. When they are in rotation, do The Way of Winter and the Deviation scenario for their smaller achievement sets.",
                "3. Play the Endless Dream scenario for the Dreamer kills and Wakeful Sand.",
                "4. Do the RaidZone map for the PvP achievements (60-minute survival, defeat a Meta, loot a player); Home Run unlocks with the last one.",
                "Tip: the base-milestone achievements (80 Watts of power, 1,000 Building Rating, 50 crops) all want an invested, well-powered territory - build one solid base in Manibus and push its infrastructure rather than spreading thin."
            ]
        }
    ]
};
