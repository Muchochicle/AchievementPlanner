// Bridge Constructor Portal Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bridge-constructor-portal.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   684410 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bridge-constructor-portal-achievement-guide",
    "category": "game",
    "gameSlug": "bridge-constructor-portal",
    "icon": "🌉",
    "title": "Bridge Constructor Portal Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in Bridge Constructor Portal (3 hidden). Covers the base-game test-chamber chapters, the base-game feats and cumulative milestones, and the Portal Proficiency DLC. Three DLC achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bridge Constructor Portal has 26 Steam achievements. The base game has 16: finishing every test chamber in Chapters 1-6, a set of portal-abuse feats (passing through the same portal 15 times, 30 back-and-forth trips, 25 repulsion-gel bounces, decommissioning a turret), convoy-delivery counts (20/40/60), and the cumulative 1,000 and 5,000 portal transitions plus 100 test vehicles destroyed. The other 10 are the Portal Proficiency DLC - its three chapters, convoy counts, a full-portal test run, and three Steam-hidden ones (10 invalid-portal start attempts, first and 50th DLC vehicle destroyed).",
                "The catalog marks it difficulty 3. The chapter achievements just need every level solved (some are genuine physics puzzles); the feat and milestone achievements come with replaying and experimenting.",
                "Tip: solve all six base chapters and the three DLC chapters first, then farm the portal-transition and vehicle-destruction milestones on any solved level."
            ]
        },
        {
            "heading": "Base Game Chapters",
            "body": [
                "Finishing every test chamber in Chapters 1 through 6 ('Extended Testing Opportunity', 'Food and Artificial Sunlight', 'Post-Insignificance', 'Official Pre-Admittance', 'Full Chief Custodian candidate', 'Spectacularly Lonely').",
                "The achievements here: Extended Testing Opportunity (Finish every test chamber in Chapter 1); Food and Artificial Sunlight (Finish every test chamber in Chapter 2); Post-Insignificance (Finish every test chamber in Chapter 3); Official Pre-Admittance (Finish every test chamber in Chapter 4); Full Chief Custodian candidate (Finish every test chamber in Chapter 5); Spectacularly Lonely (Finish every test chamber in Chapter 6)."
            ]
        },
        {
            "heading": "Base Game Feats & Milestones",
            "body": [
                "Passing through the same portal 15 times and 30 times back and forth, decommissioning your first turret, 25 repulsion-gel bounces with one vehicle, delivering 20/40/60 convoys, 1,000 and 5,000 total portal transitions, and destroying 100 test vehicles ('You monster.').",
                "The achievements here: Centrifugal Convoy Adjustment System (Passed through the same portal 15 times); Entry-Exit Relay Repeater System (30 times back and forth through the same portal); No Hard Feelings (First turret decommissioned ); Aerial Mobility Support System (Bounced 25 times on the repulsion gel with the same vehicle); 66% Loss (20 Convoys delivered); 66% Delivery (40 Convoys delivered); 0% Non-Delivery (60 Convoys delivered); For Science! (1,000 Portal Transitions); For More Science! (5,000 Portal Transitions); You monster. (100 Test Vehicles destroyed)."
            ]
        },
        {
            "heading": "Portal Proficiency DLC",
            "body": [
                "Finishing all three Portal Proficiency chapters, delivering 10/20/30 DLC convoys, a maximum-portals test run, and the three Steam-hidden ones - 10 invalid-portal start attempts ('Portal Deficiency Certificate'), the first DLC vehicle destroyed, and 50 DLC vehicles destroyed.",
                "The achievements here: Principals of Portalability (Finish every test chamber in Chapter 1 of \"Portal Proficiency\".); Advanced Tunneling (Finish every test chamber in Chapter 2 of \"Portal Proficiency\".); Profound Portal Proficiency (Finish every test chamber in Chapter 3 of \"Portal Proficiency\".); Convoyability 10 (10 convoys delivered in the Portal Proficiency initiative); Convoyability 20 (20 convoys delivered in the Portal Proficiency initiative); Convoyability 30 (30 convoys delivered in the Portal Proficiency initiative); Portal Deficiency Certificate (In the Portal Proficiency DLC, try to start a test run 10 times with a portal placed on an invalid surface.); Tunneling at Full Capacity (Maximum amount of portals successfully used in a test run.); Deliverance from Non-delivery (Destroy your first test vehicle in the Portal Proficiency DLC ('First job for the Condolence Letter Delivery Fleet').); Condolence Letter Delivery Boom (Destroy 50 test vehicles in the Portal Proficiency DLC.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through all six base-game chapters, solving every test chamber.",
                "2. Do the portal-abuse feats on an easy solved level (same-portal 15 times, back-and-forth 30, gel bounces 25, turret kill).",
                "3. Deliver convoys for the 20/40/60 counts.",
                "4. Play the three Portal Proficiency chapters and deliver its 10/20/30 convoys.",
                "5. Farm the cumulative milestones: 1,000 and 5,000 transitions, 100 base and 50 DLC vehicles destroyed, and deliberately misplace a portal 10 times for 'Portal Deficiency Certificate'.",
                "Tip: a level with a long looping track lets you leave a convoy running to pile up portal transitions and (if you remove a support) destroyed vehicles at the same time."
            ]
        }
    ]
};
