// IXION Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ixion.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1113120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 17 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ixion-achievement-guide",
    "category": "game",
    "gameSlug": "ixion",
    "icon": "🛰️",
    "title": "IXION Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in IXION (17 hidden). Most hidden achievements are spoiler-free story and choice markers; the rest are small feats (discover Outer Hope in the prologue, fail the prologue, skip a transmission fast, the NAOMI Protocol across chapters). Everything else - the sector-building, population, hull and specialization milestones, and Challenge mode - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "IXION has 57 Steam achievements, 17 of them hidden. You administrate the Tiqqun, a wheel-shaped space station torn from Earth's orbit and hunting for a new home across four story chapters. The visible achievements cover the chapter completions, the sector-building milestones (unlock a sector then all six, build all solar panels, memorials / observatories / train stations / Hull Temples in every sector), the crisis feats (survive 5% hull, blackouts, mass fires), the population targets (1,000 and 3,079), the specialization tiers (Industry, Food, Population, Recycling), the hull repairs (Ship of Theseus), and completing Challenge mode.",
                "Of the 17 hidden achievements, most are spoiler-free story and choice markers. The others are 'discover Outer Hope in the prologue', 'fail the prologue', 'skip a transmission within a second', and running the grey NAOMI Protocol across three chapters.",
                "The catalog marks it difficulty 3 and two playthroughs - Challenge mode plus the branching story choices push toward a second run."
            ]
        },
        {
            "heading": "Chapters & Story Events",
            "body": [
                "The prologue and Chapter 1-4 completions, the spoiler-free story and choice markers, and the two prologue-specific feats (discover Outer Hope, fail the prologue).",
                "The achievements here: Without Breaking Some Eggs... (Finish the prologue); Guy de Borderlands (Story progress marker - a prologue event, described here spoiler-free.); Catastrophe Avoided (Story progress marker - a prologue event, described here spoiler-free.); Gregor Spinoza (Story progress marker - a prologue event, described here spoiler-free.); Tiqqun Unchained (Story progress marker - a prologue event, described here spoiler-free.); Hope Seeker (Finish Chapter 1); From the Past (Finish Chapter 2); What the Ruins Teach Us (Finish Chapter 3); Pulsar Disciple (Finish Chapter 4); Man's Best Friend (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); Mutual Loyalty (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); Better Him Than Me (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); Oats (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); Beyond Time and Space (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); Tiqqun Contender (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); What They Hide From Us (Story/choice marker - reached near the end of the story, described here spoiler-free.); Breaking Protocol (Discover Outer Hope during the prologue (you need a probe launcher).); Access Granted (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); Necessary Enhancement (Story/choice marker - reached at a specific point in the story, described here spoiler-free.); You Had One Job... (Fail to survive the prologue.)."
            ]
        },
        {
            "heading": "The Tiqqun",
            "body": [
                "Unlocking sectors, all solar panels, decrees, probes, memorials, awakening cryo-sleepers, the crisis-survival feats (5% hull, trust at 1%, blackouts), population 1,000 and 3,079, the Hull Temple, recycling, first colonists, the transmission-skip feat, the NAOMI Protocol across chapters, and Challenge mode.",
                "The achievements here: Infinite growth... (Unlock a sector); ... in a finite world (Unlock all sectors); Wakey Wakey (Awaken a human from cryogenic sleep); Sustainable Energy (Build all solar panels); Space Society (Implement a new decree); Sputnik 2049 (Find two large resource deposits using a single probe); Remember the Dead (Build a memorial in each of the six sectors); Sightseeing (Visit 15 planets); A Hunk of Junk (Have the Tiqqun's hull integrity erode below 5% and survive); In Dolos We Trust (Restore the crew's trust after reaching 1%); A Thousand Strong (Reach 1000 population); Exceeding Capacity (Reach 3079 population); Power Outage (Experience a blackout for the tenth time); Praise the Hull! (Build a Hull Temple); Fully Recycled (Convert waste into alloy, electronics or polymer); Ready for a New World (Train your first colonists); This is Fine (Have fires in 20 buildings at the same time); Ain't Nobody Got Time for That (Skip a transmission within one second of it starting.); Help of the Forgotten Member (Implement the (grey) NAOMI Protocol at least once in each of three different chapters.); I Give You The Stars (Complete Challenge mode)."
            ]
        },
        {
            "heading": "Sector Building",
            "body": [
                "The specialization tiers (Industry, Food, Population, Recycling), the Drone Bay upgrades, 200 buildings destroyed, observatories / train stations / a Health Center / an Exo-fighting Dome in every sector, the resource-transfer and mining-ship feats, and the Ship of Theseus hull repair.",
                "The achievements here: Work Harder (Reach tier 2 of the Industry specialization in a sector); Space Greenhouse (Reach tier 2 of the Food specialization in a sector); Suburban Perfection (Reach tier 2 of the Population specialization in a sector); A Junker's Dream (Reach tier 2 of the Recycling specialization in a sector); Delivery! (Research every single upgrade for the Drone Bay); Permanent Redesigns (Destroy 200 buildings in a single playthrough); Scenic View (Have an Observatory in each of the six sectors); Monotrack Drifter (Have a Train Station in each of the six sectors); BRAWL! (Build an Exo-fighting Dome); All in Good Health (Build a Health Center); Please Make it Stop! (Have 5 accidents within a single cycle); Pedal to the Metal (Transfer 300 resources between sectors in a single cycle); Drill-dozer (Have 5 Mining Ships active at the same time); The Ship of Theseus (Replace the last original piece of hull through EVA repairs); Crunch Culture (Have every single sector in a work status of at least \"Overwork\"); Scientifically Accurate (Reduce all audio sliders to 0 in the settings menu); Soylent Green (Have a Water Treatment Center in a sector with the Body Recycling decree in effect)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story through all four chapters; the markers unlock as you progress, and your choices decide which branch-specific hidden achievements you see.",
                "2. In the prologue, use a probe launcher to discover Outer Hope for 'Breaking Protocol'.",
                "3. As the station grows, hit the sector milestones (all six sectors, all solar panels, memorials / observatories / train stations in each) and the population targets.",
                "4. Push each of the four specializations to tier 2, do the Drone Bay research, and complete the Ship of Theseus hull repair over a long game.",
                "5. Do a Challenge-mode run, and on a spare save trigger the NAOMI Protocol in three chapters and deliberately fail the prologue for 'You Had One Job...'.",
                "Tip: the station is always one crisis from a death spiral - keep a stockpile buffer of alloy, food and workers, and expand sectors only when the previous one is stable, because most of the milestone achievements need a station that survives to the late game, not a fast-growing one that collapses."
            ]
        }
    ]
};
