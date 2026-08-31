// shapez Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/shapez.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1318690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "shapez-achievement-guide",
    "category": "game",
    "gameSlug": "shapez",
    "icon": "🔶",
    "title": "shapez Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in shapez (8 hidden). Covers the basics and mechanics, the throughput and efficiency achievements, and the milestones and secret achievements. Eight achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "shapez has 45 Steam achievements and eight are Steam-hidden (a 500-tile belt, dark mode, an irrelevant shape delivered, a 1,000-building blueprint, the logo before level 18, 15 map markers, the Microsoft logo shape, the old level 17 shape). The open thirty-seven are the basic operations (paint, cut, rotate, stack, blueprint), unlocking wires (level 20) and free play (level 26), the speedrun tiers (level 12 in under 30 / 60 / 120 minutes), throughput goals (25 / 50 blueprints and logos per second, 10 / 20 rockets per second), the restriction runs, the upgrade tiers (5 and 8), the MAM 'make anything machine', and the level and playtime milestones (level 50, level 100, 10 and 20 hours).",
                "The catalog marks it difficulty 4. Level 100, tier-8 upgrades, 50-per-second throughput and the sub-30-minute speedrun are the real work; the mechanic and milestone achievements come with normal play.",
                "Tip: play through to free play, building efficient factories; do the speedrun and restriction achievements on dedicated saves, then grind throughput and the level milestones."
            ]
        },
        {
            "heading": "Basics & Mechanics",
            "body": [
                "Painting, cutting, rotating and stacking a shape, placing a blueprint, unlocking wires (level 20) and free play (level 26), using storage, 5,000 wires, producing the logo and rocket shapes, 100k and 1M stored blueprint shapes, and the three speedrun tiers (level 12 in under 30, 60 and 120 minutes).",
                "The achievements here: Painter (Paint a shape); Cutter (Cut a shape); Rotater (Rotate a shape); Wait, they stack? (Stack a shape); Now it's easy (Place a blueprint); Wires (Complete level 20, unlocking the wires layer); Storage (Store a shape in the storage); Freedom (Complete level 26, unlocking the free play mode); Computer Guy (Have more than 5,000 wires); The logo! (Produce the shapez.io logo); To the moon (Produce the rocket shape); It's piling up (Have 100k blueprint shapes stored in your hub); I'll use it later (Have 1 million blueprint shapes stored in your hub); Speedrun Master (Reach & complete level 12 in under 30 minutes); Speedrun Novice (Reach & complete level 12 in under 60 minutes); Not an idle game (Reach & complete level 12 in under 120 minutes)."
            ]
        },
        {
            "heading": "Throughput & Efficiency",
            "body": [
                "25 and 50 blueprint shapes/second, 25 and 50 logo shapes/second, 10 and 20 rocket shapes/second, a 4-layer shape, 100 unique shapes stored, the Steam-hidden 500-tile belt and dark mode, the no-inverse-rotator and no-belt-upgrades runs, all upgrades at tier 5 and tier 8, the Steam-hidden 'Oops', and the MAM machine.",
                "The achievements here: Efficiency 1 (Deliver 25 blueprints shapes / second to your hub); Efficiency 2 (Deliver 50 blueprints shapes / second to your hub); Branding specialist 1 (Deliver 25 logo shapes / second to your hub); Branding specialist 2 (Deliver 50 logo shapes / second to your hub); Preparing to launch (Deliver 10 rocket shapes / second to your hub); SpaceY (Deliver 20 rocket shapes / second to your hub); Stack overflow (Produce a shape with 4 layers); It's a mess (Have 100 different shapes stored in your hub); I need trains (Have a single connected belt at least 500 tiles long.); My eyes no longer hurt (Enable dark mode in the settings.); King of Inefficiency (Use no inverse rotator until level 14); It's so slow (Reach & Complete level 12 without upgrading your belts); Faster (Have all upgrades on tier 5 or higher); Even faster (Have all upgrades on tier 8 or higher); Oops (Deliver a shape to the hub that is neither the current goal nor relevant to any upgrade.); MAM (Make Anything Machine) (Complete any level (after level 26) without modifying your factory)."
            ]
        },
        {
            "heading": "Milestones & Secrets",
            "body": [
                "Destroying 1,000 objects at once, the Steam-hidden 1,000-building blueprint, 1,000 shapes trashed, 10 and 20 hours on one save, the Steam-hidden logo-before-18, level 50 and 100, 1 hour on one save, opening the wires layer, and the Steam-hidden 15 map markers, Microsoft logo shape and old level 17 shape.",
                "The achievements here: Perfectionist (Destroy more than 1000 objects at once); Copy-Pasta (Place a single blueprint containing at least 1,000 buildings.); Get rid of them (Have 1000 shapes trashed); It's been a long time (Play one savegame for more than 10 hours); Addicted (Play one  savegame for more than 20 hours); A bit early? (Produce the shapez.io logo shape before completing level 18.); Can't stop (Reach level 50); Is this the end? (Reach level 100); Getting into it (Play one savegame for more than 1 hour); The next dimension (Open the wires layer); GPS (Place 15 map markers.); I've seen that before .. (Produce the Microsoft logo shape (RgRyRbRr).); Memories from the past (Produce the old (pre-rework) level 17 shape.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through to free play (level 26), building efficient factories and hitting the mechanic and blueprint achievements naturally.",
                "2. Do a dedicated speedrun save for level 12 in under 30 minutes, and the no-belt-upgrades and no-inverse-rotator runs.",
                "3. Build high-throughput factories for the 50-per-second blueprint/logo and 20-per-second rocket achievements.",
                "4. Grind upgrades to tier 8 and levels to 100, and rack up 20 hours on one save.",
                "5. Do the hidden secrets: dark mode, 15 map markers, the Microsoft and old-level-17 shapes, the 1,000-building blueprint and 500-tile belt.",
                "Tip: the 50-per-second throughput achievements need a factory designed around one shape at scale - build a dedicated line for the blueprint shape, then the logo, then the rocket, rather than one factory for all."
            ]
        }
    ]
};
