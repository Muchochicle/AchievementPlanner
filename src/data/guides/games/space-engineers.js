// Space Engineers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/space-engineers.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   244850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "space-engineers-achievement-guide",
    "category": "game",
    "gameSlug": "space-engineers",
    "icon": "🚀",
    "title": "Space Engineers Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Space Engineers - none are hidden. Covers the sandbox and survival-mode feats and the built-in scenario challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Space Engineers has 30 Steam achievements and none of them are hidden. About half are open-ended sandbox and Survival-mode feats: fly a 20-colour ship, declare war and make peace with a faction, kill an enemy with a rifle, reach the monolith, connect your suit to power with under 1% remaining, visit every planet and moon, walk 1,969 metres on a moon, build 25 solar panels, build and destroy a million kilograms of blocks, and pass 150 hours played. The rest are tied to the game's built-in scenarios - First Jump, Learning to Survive, Never Surrender (survive 10 / 30 / 100 drone waves), Frostbite - plus the economy feats Millionaire Club and befriending three factions.",
                "Nothing is missable - every scenario is replayable and the sandbox feats can be done at any time in a Survival save. The long poles are Master Engineer (150+ hours), the million-kilogram build and destroy feats, and Never Surrender's 100-wave achievement.",
                "Tip: start a Survival world with a decent asteroid or planet start and treat the sandbox feats as a checklist you tick off while you build normally - the mass, solar panel, planet-visit and playtime achievements all accrue on their own if you just keep playing that one save."
            ]
        },
        {
            "heading": "Sandbox & Survival Feats",
            "body": [
                "Building a 20-colour ship, declaring war, a warhead double-kill, a rifle kill, reaching the monolith, the under-1%-power suit connection, changing style 20 times in 10 minutes, waving back at an enemy, making peace, five hours of Armageddon Mode, visiting all planets and moons, walking 1,969 m on a moon, 25 solar panels, an hour out of sight on a multiplayer server, 150+ hours played, and building and destroying more than 1,000,000 kg of cubes.",
                "The achievements here: Crayon Box (Build and fly ship with more than 20 colors.); Declare War (Declare war with different faction.); I've Got Present For You (Detonate a warhead that kills you and another player.); Lock And Load (Kill an enemy with a rifle.); Monolith (Get within 5 meter radius of the monolith in Survival. *Monoliths have to be in the world on loading time); Number 5 Is Alive (Connect your suit to power with less than 1% power remaining in Survival.); Personality Crisis (Change astronaut style (color or skin) 20 times in 10 minutes.); Smile And Wave (Wave to an enemy that is also waving back within 5 meters looking at you in Survival.); Win-Win (Make peace with a faction.); Death Wish (Armageddon Mode for 5 hours in Survival.); Explorer (Visit all planets and moons in Survival mode.); Giant Leap For Humankind (Walk 1969 meters on a Moon.); Going Green (Build 25 Solar Panels while playing in Survival Mode.); Lost In Space (Spend more than 1 hour out of sight of other players on a MP server.); Master Engineer (150+ hours.); The Bigger They Are (Build more than 1,000,000 Kg of cubes.); The Harder They Fall (Destroy more than 1,000,000 Kg of cubes.)."
            ]
        },
        {
            "heading": "Scenario Challenges",
            "body": [
                "Finishing the First Jump scenario, the Learning to Survive scenario (final objective, all tasks, the no-atmosphere pirate-facility and no-death variants), the Never Surrender drone-wave feats (10 / 30 / 100 waves, 1,000 drones destroyed, 10 waves co-op), the Millionaire Club and three-faction friendship economy feats, and completing the Frostbite scenario.",
                "The achievements here: The Story Begins (Finish the First Jump scenario.); Promoted Engineer (Complete the final objective of Learning to Survive scenario.); Engineering Degree ( Finish all tasks of Learning to Survive scenario.); Planetesphobia (Disable the pirate facility without entering the atmosphere in Learning to Survive scenario.); It Takes But One (Complete all objectives without dying in Learning to Survive scenario.); I See Dead Drones (Survive 10 waves of drones in Never Surrender scenario.); Bring It On (Survive 30 waves of drones in Never Surrender scenario.); I'm Doing My Part (Survive 100 waves of drones in Never Surrender scenario.); Scrap Delivery (Destroy 1000 pirate drones in Never Surrender scenario.); Joint Operation (Survive 10 waves with at least 1 other player in Never Surrender scenario.); Millionaire Club (Get 1,000,000 Space Credits and join the club of the wealthiest people in the galaxy.); The friend of the factions (Befriend 3 factions; earning trust always pays well in the future.); Playing it cool (Complete the Frostbite scenario)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the tutorial scenarios first: First Jump, then Learning to Survive - do the all-tasks, no-atmosphere and no-death variants of the latter while you are there.",
                "2. Start a long-term Survival world and let the passive feats build up (mass built/destroyed, solar panels, playtime, planet visits, the moon walk).",
                "3. Do the deliberate sandbox feats on that save - the 20-colour ship, the warhead double-kill, the faction war/peace, the monolith visit, the under-1%-power connection.",
                "4. Play the Never Surrender scenario for the 10 / 30 / 100 wave achievements and 1,000 drones destroyed, ideally with a co-op partner for Joint Operation.",
                "5. Play the Frostbite scenario for Playing it cool, and finish the economy feats (Millionaire Club, three-faction friendship).",
                "Tip: for the million-kilogram build and destroy feats, spawn a large-grid platform and mass-place heavy armour blocks, then grind them down with a ship-mounted drill - a few large blueprints placed and removed will cover both counters far faster than normal base-building."
            ]
        }
    ]
};
