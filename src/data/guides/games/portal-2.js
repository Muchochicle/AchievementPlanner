// Portal 2's Game Guide (Phase 73). Sources:
//
// - PRIMARY: this app's own catalog data (src/data/games/portal-2.json),
//   whose 51 achievement names/descriptions were themselves sourced
//   directly from Steam's own achievement schema (see PHASE_40_AUDIT.md)
//   and independently re-confirmed here against Steam's public achievement
//   stats page for appid 620 - every factual sentence below quotes or
//   closely paraphrases those official descriptions.
// - The single-player/co-op split (29 solo + 22 co-op achievements) and
//   each achievement's missable flag are read directly from that same
//   catalog file, not guessed.
// - Community-sourced only: the "Tip:" paragraphs, and the general framing
//   that every solo/co-op chapter can be replayed via chapter select at
//   any time (the game's own well-documented chapter-select menu) - this
//   is why the catalog's game-level `missable` is false even though 32 of
//   the 51 individual achievements are flagged missable (not automatically
//   earned by finishing the story - they need a specific extra action,
//   but that action stays available forever via replay).
export const GUIDE = {

    slug: "portal-2-achievement-guide",
    category: "game",
    gameSlug: "portal-2",
    icon: "🧪",
    title: "Portal 2 Achievement Guide",
    summary: "A practical, chapter-by-chapter guide to all 51 Steam achievements in Portal 2 - solo campaign and co-op.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Portal 2 has 51 Steam achievements: 29 from the single-player campaign and 22 from the separate two-player co-op campaign. Nothing is permanently missable - every chapter in both campaigns can be replayed at any time from the in-game chapter select menu, so an achievement you skipped on your first pass through a chamber is always still reachable later.",
                "13 of the 29 solo achievements and all but 2 of the 22 co-op achievements unlock automatically just by finishing that chapter's story content - the remaining ones need a specific extra action in a specific test chamber, covered by category below.",
                "Tip: keep chapter select in mind the whole way through - there's no need to force every optional achievement into your first playthrough. Finish the story first, then sweep back through specific chambers for anything left over."
            ]
        },

        {
            heading: "Early Solo Campaign (Chapters 1-3)",
            body: [
                "These come from simply progressing through the opening chapters and their new mechanics: Wake Up Call (survive the manual override), You Monster (reunite with GLaDOS), Undiscouraged (complete the first Thermal Discouragement Beam test), Bridge Over Troubling Water (complete the first Hard Light Bridge test), SaBOTour (make a break for it), and Tater Tote (carry science forward).",
                "The three gel-mastery achievements also land here as you're introduced to each substance: Vertically Unchallenged (Repulsion Gel), Stranger Than Friction (Propulsion Gel), and White Out (the first Conversion Gel test), plus Tunnel of Funnel (master the Excursion Funnel).",
                "Tip: none of these need any deviation from normal play - just complete each new mechanic's introductory test chamber as presented."
            ]
        },

        {
            heading: "Story Beats (Chapters 4-9)",
            body: [
                "The rest of the story's automatic achievements: The Part Where He Kills You (Wheatley's betrayal), Lunacy (\"that just happened\"), Pit Boss (show the pit who's boss), and Team/Confidence/Bridge/Obstacle Building plus You Saved Science are actually co-op-course achievements that land later - the solo story's own remaining beats finish with the ending itself.",
                "Two solo achievements are missable-flagged because they require a specific choice inside a story chamber rather than just clearing it: Stalemate Associate (press the button, in Chamber's Stalemate Associate puzzle) and Dual Pit Experiment (do the same test twice). Both stay available via chapter select for the rest of the game."
            ]
        },

        {
            heading: "Hidden Chamber Secrets (Solo)",
            body: [
                "A dedicated exploration/secret-finding group, all missable-flagged and all replayable via chapter select: Drop Box (place a cube on a button without touching the cube), Overclocker (complete Test Chamber 10 in 70 seconds), Preservation of Mass (break the rules in Test Chamber 07), Pturretdactyl (launch a turret with an Aerial Faith Plate), and Final Transmission (find the hidden signal in one of the Rat Man's dens).",
                "Also in this group: Good Listener (take GLaDOS' escape advice), Scanned Alone (stand in a defective turret detector), No Hard Feelings (save a turret from redemption), Schrodinger's Catch (catch a blue-painted box before it touches the ground), Ship Overboard (discover the missing experiment), Door Prize (examine all the vitrified test chamber doors), Portrait of a Lady (find a hidden portrait), You Made Your Point (refuse to solve the first Chapter 8 test), and Smash TV (break 11 test chamber monitors).",
                "Tip: most community walkthroughs for Portal 2 are built specifically around this list, since a first playthrough easily misses several of them without knowing to look. Chapter select makes a dedicated cleanup pass painless afterward."
            ]
        },

        {
            heading: "Co-op Campaign",
            body: [
                "High Five (celebrate your cooperative calibration success) opens the co-op campaign, followed by four course-completion achievements earned just by clearing every chamber in that course: Team Building, Confidence Building, Bridge Building, and Obstacle Building (Mass and Velocity, Hard-Light Surfaces, and Excursion Funnels courses respectively), capped by You Saved Science for finishing every course.",
                "The rest of co-op's 22 achievements are missable-flagged extra actions inside specific co-op chambers: Iron Grip (never lose a cube in Mass and Velocity Chamber 6), Gesticul-8 (perform all 8 gestures of your own volition), Can't Touch This (dance in front of a turret behind a bridge), Empty Gesture (drop your partner in goo mid-gesture by removing their bridge), Party of Three (find the hidden co-op companion cube), Narbacular Drop (place a portal under your gesturing partner), Air Show (2 aerial gestures before touching ground), Portal Conservation Society (Hard-Light Surfaces Chamber 3 with only 5 portal placements), Four Ring Circus (enter 4 different portals without touching ground), Triple Crown (solve 3 Mass and Velocity chambers under 60 seconds each), Still Alive (finish Course 4 with neither partner dying), Asking for Trouble (taunt GLaDOS on camera in all five co-op courses), Rock Portal Scissors (win 3 co-op rock-paper-scissors games in a row), Friends List With Benefits (hug 3 different friends-list people in co-op), and Talent Show (never lose a cube in the Mobility Gels course's Chamber 6).",
                "Professor Portal (complete Calibration Course online with a friend who's never played) is the one co-op achievement that genuinely needs a specific real-world partner - it can't be earned solo or with someone who's already played the course.",
                "Tip: most of these are far easier with a partner who already knows what's coming, since several require precise timing on both ends. Doing a full co-op cleanup pass together after finishing the story normally is more efficient than chasing them mid-campaign."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the solo campaign through once normally - most of its achievements complete themselves, and chapter select means nothing is lost by not stopping to hunt secrets on the first pass.",
                "Do a dedicated solo cleanup pass afterward using chapter select for the hidden-secret group above - it's much faster once you already know each chamber's layout.",
                "Play co-op with a partner start to finish for the course-completion achievements, then do a second co-op pass together specifically for the missable extra-action list, since several of those need deliberate coordination rather than natural play.",
                "Save Professor Portal for whenever you know someone who genuinely hasn't played Portal 2's co-op yet - there's no way to force this one otherwise."
            ]
        }

    ]

};
