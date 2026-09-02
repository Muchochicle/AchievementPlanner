// STAR WARS Battlefront II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/star-wars-battlefront-ii.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1237950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 20 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "star-wars-battlefront-ii-achievement-guide",
    "category": "game",
    "gameSlug": "star-wars-battlefront-ii",
    "icon": "🌌",
    "title": "STAR WARS Battlefront II Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in STAR WARS Battlefront II (20 hidden). All 20 hidden achievements are spoiler-free campaign mission markers - the seventeen base-game missions plus the three Resurrection story update missions. The other 23 are multiplayer goals across the ground modes and Starfighter Assault, and carry Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "STAR WARS Battlefront II has 43 Steam achievements, 20 of them hidden. Iden Versio of the Empire's Inferno Squad heads the single-player campaign that bridges Return of the Jedi and The Force Awakens; the rest of the game is large-scale multiplayer. The visible achievements are all multiplayer: winning a match in every mode (Galactic Assault, Blast, Strike, Starfighter Assault, Heroes vs Villains, Arcade), reaching Rank 25 and 50, 25 Multiplayer Milestones, and a spread of weapon, class, ship and hero challenges.",
                "All 20 hidden achievements are campaign mission markers: the seventeen base-game missions from 'The Cleaner' to 'Master of Deception', plus the three missions of the free Resurrection story update ('Project: Resurrection', 'Ashes of the Empire', 'Inferno'). They are described here spoiler-free.",
                "The catalog marks it difficulty 3 and single-playthrough. The campaign is unmissable; the multiplayer ranks and challenges are the real time investment and need online play."
            ]
        },
        {
            "heading": "Campaign",
            "body": [
                "The seventeen base-game campaign mission markers, described spoiler-free.",
                "The achievements here: The Cleaner (Complete the campaign prologue 'The Cleaner', described here spoiler-free.); The Battle of Endor (Complete the campaign mission 'The Battle of Endor', described here spoiler-free.); The Dauntless (Complete the campaign mission 'The Dauntless', described here spoiler-free.); The Observatory (Complete the campaign mission 'The Observatory', described here spoiler-free.); The Storm (Complete the campaign mission 'The Storm', described here spoiler-free.); Outcasts (Complete the campaign mission 'Outcasts', described here spoiler-free.); Royalty (Complete the campaign mission 'Royalty', described here spoiler-free.); General Distress (Complete the campaign mission 'General Distress', described here spoiler-free.); Under Covered Skies (Complete the campaign mission 'Under Covered Skies', described here spoiler-free.); Cache Grab (Complete the campaign mission 'Cache Grab', described here spoiler-free.); The Battle of Jakku (Complete the campaign mission 'The Battle of Jakku', described here spoiler-free.); Until Ashes (Complete the campaign mission 'Until Ashes', described here spoiler-free.); Discoveries (Complete the campaign mission 'Discoveries', described here spoiler-free.); Dark Forces (Complete the campaign mission 'Dark Forces', described here spoiler-free.); Balance Point (Complete the campaign mission 'Balance Point', described here spoiler-free.); X-wing vs. TIE Fighter (Complete the campaign mission 'X-wing vs. TIE Fighter', described here spoiler-free.); Master of Deception (Complete the campaign - 'Master of Deception', described here spoiler-free.)."
            ]
        },
        {
            "heading": "Multiplayer & Starfighter Assault",
            "body": [
                "Winning a match in each mode, the Rank milestones, Multiplayer Milestones, and the weapon, class, ship and hero challenges.",
                "The achievements here: A Job Well Done (Complete 25 Multiplayer Milestones.); Outbound Flight (Win a match of Starfighter Assault.); There Has Been An Awakening (Reach Rank 25.); The Force is Strong With This One (Reach Rank 50.); Not All Miss (In Multiplayer, defeat 3 enemies within one Vanguard usage 5 times.); A Dominating Presence (In Multiplayer, boost 100 allies with the Officer commands.); Sentry Mode Engaged (In Multiplayer, defeat 150 enemies with the Heavy's Sentry Gun.); Scoped (In Multiplayer, get 25 headshots with longblaster rifles.); The Interceptor (Get 20 Killstreaks with Interceptor ships.); The Bomber (Defeat 50 enemies using Dual Proton Torpedoes with the Bomber ship class.); Multi-tasking (Defeat 25 Hero ships with Fighter ships.); Complete Your Training (Complete all unique Battle Scenarios.); There is No Such Thing As Luck (Engage in an Arcade match.); Ignore Your Instincts At Your Peril (Destroy 25 objectives in Starfighter Assault.); What a Blast (Win a match of Blast.); Strike Back (Win a match of Strike.); Battle Beyond the Stars (Win a match of Galactic Assault.); Choose Your Path (Defeat 50 enemies in Heroes Vs Villains.); Quick Strike (Be the first one to defeat an enemy in a Multiplayer match.); Heavy is the Hand (Win a match of Heroes vs Villains); Do. Or Do Not. There is no Try. (Play as all launch heroes in Multiplayer.); A Galaxy at War (Win one match in each Multiplayer game mode.); We are the Spark (Defeat 500 enemies as a hero on any Multiplayer map.)."
            ]
        },
        {
            "heading": "Resurrection Update",
            "body": [
                "The three campaign mission markers added by the free Resurrection story update, described spoiler-free.",
                "The achievements here: Project: Resurrection (Complete the Resurrection story-update mission 'Project: Resurrection', described here spoiler-free.); Ashes of the Empire (Complete the Resurrection story-update mission 'Ashes of the Empire', described here spoiler-free.); Inferno (Complete the Resurrection story-update - 'Inferno', described here spoiler-free.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign end to end for its seventeen mission markers - nothing is missable.",
                "2. Continue straight into the Resurrection update missions for the last three markers.",
                "3. Move to multiplayer: win one match in every mode for 'A Galaxy at War' and the per-mode achievements.",
                "4. Grind Rank 25 then Rank 50, and chip away at the 25 Multiplayer Milestones.",
                "5. Mop up the weapon, class, ship and hero challenges (Sentry Gun kills, longblaster headshots, Interceptor killstreaks, 500 hero kills) across Galactic Assault and Starfighter Assault.",
                "Tip: most of the multiplayer challenges complete themselves during the Rank 50 grind if you deliberately rotate classes and ships - spend a few matches each as Heavy, as the Officer, in an Interceptor and a Bomber, and as heroes, rather than maining one loadout."
            ]
        }
    ]
};
