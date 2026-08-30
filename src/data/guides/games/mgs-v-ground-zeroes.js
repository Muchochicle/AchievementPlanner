// Metal Gear Solid V: Ground Zeroes Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mgs-v-ground-zeroes.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   311340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mgs-v-ground-zeroes-achievement-guide",
    "category": "game",
    "gameSlug": "mgs-v-ground-zeroes",
    "icon": "🚁",
    "title": "Metal Gear Solid V: Ground Zeroes Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Metal Gear Solid V: Ground Zeroes - none are hidden. Covers the mission and S-Rank achievements and the Side Op / Extra Op challenge achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "METAL GEAR SOLID V: GROUND ZEROES has 16 Steam achievements and none of them are hidden. Six are progression - clear the main \"Ground Zeroes\" mission, reunite with Chico or Paz, clear a Side Op, clear every mission, get one S-Rank and then S-Rank every mission. The other ten are specific Side Op and Extra Op challenges (rescue the prisoner being executed, clear a Side Op without killing anyone, ride in a truck, recreate every Déjà-Vu scene, clear Jamais Vu with zero enemy combat alerts) plus collecting all cassette tapes and all XOF patches.",
                "Nothing is missable - every mission, Side Op and Extra Op is replayable from the menu and the collectibles persist. Ground Zeroes is a small game built for replay; the completion is short but the all-S-Ranks achievement (Hero) is a genuine skill and route-optimisation challenge.",
                "Tip: play the main mission and each Side/Extra Op once for the progression and challenge achievements, then learn a fast, silent route for each and re-run them for S-Rank - a high S-Rank score comes from speed, no kills, no alerts and a chopper extraction."
            ]
        },
        {
            "heading": "Missions & S-Ranks",
            "body": [
                "Clearing the \"Ground Zeroes\" mission, reuniting with Chico or Paz, clearing a Side Op or Extra Op, clearing all missions, a first S-Rank, and S-Ranking all missions (Hero).",
                "The achievements here: Downfall (Clear the \"Ground Zeroes\" mission); Reunion (Reunite with Chico or Paz); Genesis (Clear a Side Op or Extra Op); Accomplished (Clear all missions (including Side Ops and Extra Ops)); Skilled (Clear any mission (including Side Ops and Extra Ops) with a S-rank); Hero (Clear all missions (including Side Ops and Extra Ops) with a S-rank)."
            ]
        },
        {
            "heading": "Side Op & Extra Op Challenges",
            "body": [
                "Rescuing and extracting the prisoner to be executed, extracting both Renegade targets, a no-kill Intel Operative Rescue, clearing Classified Intel Acquisition from the back of a truck, extracting all prisoners in Destroy the Anti-Air Emplacements, recreating every Déjà-Vu scene, a zero-combat-status Jamais Vu, unlocking all trials, and obtaining all cassette tapes and all XOF unit patches.",
                "The achievements here: Rescue (In the \"Ground Zeroes\" mission, rescue the prisoner to be executed and extract him via chopper); Depth (Clear the \"Eliminate the Renegade Threat\" Side Op by extracting both targets); Pacifist (Clear the \"Intel Operative Rescue\" Side Op without killing a single enemy); Infiltration (Clear the \"Classified Intel Acquisition\" Side Op while riding in the back of a truck); Extraction (In the \"Destroy the Anti-Air Emplacements\" Side Op, rescue and extract all prisoners via chopper); Reminiscence (Recreate all scenes in the \"Déjà-Vu\" Extra Op); Hidden (Clear the \"Jamais Vu\" Extra Op with 0 enemy combat statuses); Unlocked (Unlock all trials); Information (Obtain all cassette tapes); Insignia (Obtain all XOF unit patches)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main \"Ground Zeroes\" mission for Downfall, and rescue the to-be-executed prisoner while you are there.",
                "2. Play each Side Op and Extra Op once, doing their specific challenge (no-kill, the truck ride, the extractions, the Déjà-Vu scenes, the zero-alert Jamais Vu) on that first run where possible.",
                "3. Collect all cassette tapes and all XOF patches (use a map guide - they persist across replays).",
                "4. Unlock all trials by playing the mission and its ops.",
                "5. Learn a fast silent route for each mission and re-run them for S-Rank, finishing with Hero (all S-Ranks).",
                "Tip: S-Rank scoring rewards speed and stealth heavily and punishes kills and alerts - aim for a sub-10-minute run of each op with zero kills, zero alerts, and every objective plus a chopper pickup, and the S-Rank follows."
            ]
        }
    ]
};
