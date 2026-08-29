// Mad Max Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mad-max.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   234140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 5 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "mad-max-achievement-guide",
    "category": "game",
    "gameSlug": "mad-max",
    "icon": "🚙",
    "title": "Mad Max Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Mad Max - wasteland missions & legend, death runs & archangels, territory & strongholds, collectibles & camps, feats & upgrades, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mad Max has 49 Steam achievements, 5 of them hidden (the five story Acts). The rest are the open-world completion checklist: Death Run races, Archangel challenges, clearing threat and building projects in each stronghold territory, the collectible sets, the camp and Scrotus-outpost sweeps, and a set of driving and survival feats.",
                "Nothing is missable - all regions, camps and collectibles stay available after the story, and there is no difficulty setting. The two big time sinks are Chumbucket's project chains (they need scrap and specific unlocks) and the region-by-region 100% clear.",
                "Tip: follow the green story markers for the five hidden Act achievements, then clear each region fully (camps, minefields, scarecrows, snipers, scavenging locations) before moving on - it is far more efficient than backtracking."
            ]
        },
        {
            "heading": "Wasteland Missions & Legend",
            "body": [
                "Completing the Dinki-Di Wasteland Mission and all Wasteland Missions, reaching a new legend rank, and reaching the Road Warrior legend rank.",
                "The achievements here: Slight Distraction (Complete the Dinki-Di Wasteland Mission); Stop and Smell the Roses (Complete all Wasteland Missions); Golden Boy (Reach a new legend rank); Road Warrior (Reach Road Warrior legend rank)."
            ]
        },
        {
            "heading": "Death Runs & Archangels",
            "body": [
                "The race challenges: a Time Bomb, Scatter and Barrel Bash Death Run, a race at every Death Run location, a run in an Archangel, a run with every Archangel, a legendary-time run with every Archangel, and defeating an enemy vehicle with every Archangel.",
                "The achievements here: The Quick Driver (Complete a Time Bomb Death Run); The Smart Driver (Complete a Scatter Death Run); The Skilled Driver (Complete a Barrel Bash Death Run); Running Wild (Complete at least one race at every Death Run Location); The Saint (Complete a Death Run in an Archangel); The Guardian (Successfully complete a Death Run with every Archangel); The Messenger (Complete a Death Run in legendary time with every Archangel); The Exiled (Defeat an enemy vehicle with every Archangel)."
            ]
        },
        {
            "heading": "Territory & Strongholds",
            "body": [
                "Clearing all threat in Jeet's, Gutgash's and Pink Eye's territories, reducing threat to 0 in the region around each of their strongholds, building two projects in each stronghold, and building all projects in all strongholds.",
                "The achievements here: Start of Something Good (Clear all threat in Jeet's territory); Keep Up the Good Work (Clear all threat in Gutgash's territory); Spreading the Word (Clear all threat in Pink Eye's territory); Jeet Thrives (Reduce threat to 0 in the Balefire Flatland region around Jeet's Stronghold); Gutgash Thrives (Reduce threat to 0 in the Parch Moon region around Gutgash's Stronghold); Pink Eye Thrives (Reduce threat to 0 in the Knit Sack region around Pink Eye's Stronghold); Doing Jeet a Big Favor (Build two projects in Jeet's Stronghold); Doing Gutgash a Big Favor (Build two projects in Gutgash's Stronghold); Doing Pink Eye a Big Favor (Build two projects in Pink Eye's Stronghold); The Constructionist (Build all projects in all strongholds)."
            ]
        },
        {
            "heading": "Collectibles & Camps",
            "body": [
                "Collecting all hood ornaments and all History Relics, taking down a Top Dog camp and all Scrotus camps, flying the balloon at every Vantage Outpost, clearing all minefields, destroying all scarecrows, taking out all Scrotus snipers, looting all Scavenging Locations, and completing all optional camp objectives.",
                "The achievements here: Daddy Wants a New Grill (Collect all hood ornaments); A Thousand Words (Collect all History Relics); The Bigger they are… (Take down a Top Dog camp); Razing Legend (Take down all Scrotus camps); Up, Up and Away (Fly the balloon at every Vantage Outpost); Bomb Specialist (Clear all minefields); No Brainer (Destroy all scarecrows); Sniper Suppressor (Take out all Scrotus snipers); Looked Everywhere (Loot all Scavenging Locations); Explosions Are Not Enough (Complete all optional objectives in all camps)."
            ]
        },
        {
            "heading": "Feats & Upgrades",
            "body": [
                "The one-off feats and upgrade goals: giving water to a wanderer, a Wasteland jump, 4+ seconds airborne, 5,000 and 10,000 scrap, 1,300 car lengths driven and 650 on foot, eating maggots, collecting all body colors, owning the best V6 and V8 engines, fully upgrading Max, and completing all non-repeating challenges.",
                "The achievements here: Quench Their Thirst (Give water to a wanderer); Fresh Air (Drive the Magnum Opus off a Wasteland jump); Maximum Air (Be airborne in a vehicle for 4 seconds or more and land without dying); Just Rewards (Have 5,000 scrap in your inventory); Scrap Collector (Have 10,000 scrap in your inventory); On the Road to Nowhere (Travel 1300 car lengths in a vehicle); Wasteland Chef (Eat a meal of maggots); Rust is the New Black (Collect all body colors); Blockhead (Own the best V6 and V8 Engines); Maximum (Fully upgrade Max); Up to the Task (Complete all non-repeating challenges); Just Walk Away (Travel 650 car lengths on foot)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Five achievements are hidden - one per story Act:",
                "The achievements here: Everything Lost Again (Complete Act 1 of the story.); Wasteland of Opportunities (Complete Act 2 of the story.); Digging a Deeper Hole (Complete Act 3 of the story.); Power in the Machine (Complete Act 4 of the story.); Downward Spiral Reawakening (Complete Act 5 of the story (finish the game).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Follow the story markers for the five Act achievements, doing region content as you pass through.",
                "2. Region by region, reduce threat to 0: clear camps, minefields, scarecrows, snipers, scavenging locations and Vantage balloons.",
                "3. Build every Chumbucket project (needs scrap and Max upgrades) and do the Death Run and Archangel challenges.",
                "4. Mop up the collectibles (hood ornaments, History Relics, body colors) and the feats.",
                "Tip: the region-thrive achievements (Jeet/Gutgash/Pink Eye Thrives) need threat at exactly 0 in the specific region around the stronghold, not the whole territory - check the map's per-region threat bar rather than assuming a cleared camp did it."
            ]
        }
    ]
};
