// Homeworld 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/homeworld-3.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1840080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 18 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "homeworld-3-achievement-guide",
    "category": "game",
    "gameSlug": "homeworld-3",
    "icon": "🚀",
    "title": "Homeworld 3 Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Homeworld 3 (18 hidden). The 18 hidden achievements are the 13 campaign mission markers plus two optional Mission 10 objectives and three fleet-mechanic firsts. Descriptions use the game's own spoiler-light mission-objective text. Sourced from Last Word on Gaming.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Homeworld 3 has 35 Steam achievements, 18 of them hidden. Homeworld 3 is the fully 3D space real-time strategy sequel from Blackbird Interactive. The visible achievements are the three campaign difficulty clears, a War Games session, fleet-command and combat feats (capture an enemy ship, research your first upgrade, eliminate strikecraft and capital ships, build 500 ships), and the persistent-fleet challenge.",
                "The 18 hidden achievements are the 13 campaign mission-completion markers (plus two optional Mission 10 objectives), and three fleet-mechanic firsts - unlocking the Fusion Missile through research, scuttling one of your own ships, and setting a command group's formation.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is permanently missable in the campaign; the optional Mission 10 objectives (an undetected mothership approach, wiping the Incarnate reinforcement fleet) can be retried from mission select, and the difficulty clears stack downward."
            ]
        },
        {
            "heading": "Campaign",
            "body": [
                "The three difficulty clears (which stack downward), the mothership no-damage streak, the persistent-fleet challenge, and the 13 Steam-hidden mission markers plus two optional Mission 10 objectives.",
                "The achievements here: Captain (Complete the campaign on Easy difficulty); Admiral (Complete the campaign on Medium difficulty); Navigator (Complete the campaign on Hard difficulty); Untouchable (Complete 5 missions without the Mothership being hit by enemy fire); A Path Across the Galaxy (In Campaign, have a (non-mothership) ship built in Facility 315 survive all the way through until the end of the campaign); Chapel Perilous (Survive the Asteroid Storm (a campaign-mission objective)); We Are Away (Put the Khar-Kushan through its paces (Mission 1)); A Helluva Ship (Integrate the production facility into the mothership (Mission 2)); Into the Glacier (Navigate the icy crevasse (a Mission 10 objective)); Ghosts Of The Desert (Enter the Ice Shelf without the mothership being detected (an optional Mission 10 objective)); Nothing Short Of Miraculous (Eliminate the Incarnate reinforcement fleet (an optional Mission 10 objective)); Warriors Of The Fringe (Defeat the Kalan Raider Carrier (Mission 3)); One Step Too Close (Encounter a new, mysterious enemy (Mission 4)); Open The Way (Disable the Citadel (Mission 8)); As They Have Hunted Us (Defeat the Warsage (Mission 9)); The Sajuuk-Khar (Reunite with the Khar-Sajuuk (Mission 11)); The Time Of Prophecy (Witness the enemy using a Hyperspace Tunnel (Mission 12)); This War Is Over (Complete the campaign by defeating the Incarnate Titan (Mission 13)); A Dark Cloud Gathers (Uncover the enemy's identity (Mission 5)); Prepare To Shipbreak (Ward off enemies during core repairs (Mission 7))."
            ]
        },
        {
            "heading": "Fleet Command & Combat",
            "body": [
                "Strikecraft and capital-ship kill totals, capturing an enemy ship, ship repairs, splash-damage kills, research, guarding, building 500 ships, and the Steam-hidden fleet-mechanic firsts (Fusion Missile research, scuttling a ship, setting a formation).",
                "The achievements here: Bug Swatter (Eliminate 200 total enemy strikecraft in the campaign); Hostile Takeover (Capture an enemy ship); Big Game Hunter (Eliminate 50 total enemy capital ships); The Great Cannon (Unlock the mothership's Fusion Missile through research); The Unbound (Research your first ship upgrade); Destruct Sequence Alpha-One (Scuttle one of your own ships); If You’ll Be My Bodyguard (Order a ship to guard another ship); Stay in formation! (Set a command group to assume a new formation); Grand Armada (Build a grand total of 500 ships); Fix-it Frigate (Fully repair 50 ships using Support Frigates); Kablammo (Blow up 5 ships with one explosion); That Was One in a Million! (Land the final shot to destroy a Capital ship with a Fleet Bomber ship)."
            ]
        },
        {
            "heading": "War Games & Skirmish",
            "body": [
                "Completing a War Games co-op session, collecting an artifact in War Games, and winning a large Skirmish match.",
                "The achievements here: Shall We Play a Game? (Successfully complete a War Games session for the first time); That Belongs in a Museum! (Collect an artifact during a War Games session); Not Today, Singularity! (Win a Skirmish match consisting of at least 3 enemy AI opponents)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the 13-mission campaign once on Easy, banking every mission marker and doing the two optional Mission 10 objectives (undetected approach, kill the reinforcement fleet).",
                "2. During the campaign, pick up the fleet-mechanic firsts - research an upgrade and the Fusion Missile, scuttle a ship, set a formation, guard a ship, capture an enemy vessel.",
                "3. Replay on Hard for Navigator (it grants Admiral and Captain too), aiming for the 5-mission no-mothership-damage streak.",
                "4. Play War Games sessions for Shall We Play a Game? and the artifact, and a large Skirmish match for Not Today, Singularity!",
                "5. Grind the cumulative kill and build totals (200 strikecraft, 50 capital ships, 500 ships built, 50 repairs) across Skirmish and War Games.",
                "Tip: the cumulative combat and economy totals count across every mode, so long Skirmish matches against AI are the fastest way to finish Bug Swatter, Big Game Hunter and Grand Armada."
            ]
        }
    ]
};
