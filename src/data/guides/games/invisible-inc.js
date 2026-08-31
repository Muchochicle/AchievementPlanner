// Invisible, Inc. Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/invisible-inc.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   243970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "invisible-inc-achievement-guide",
    "category": "game",
    "gameSlug": "invisible-inc",
    "icon": "🕵️",
    "title": "Invisible, Inc. Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Invisible, Inc. (1 hidden). Covers the campaign and difficulty clears, Endless mode and single-run tactics, and the Contingency Plan DLC modes. One achievement ('Meta-Hacking') is Steam-hidden and researched from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Invisible, Inc. has 23 Steam achievements and one ('Meta-Hacking') is Steam-hidden. The rest are open: difficulty clears from Beginner up to Expert Plus, restriction runs (no rewinds on Expert, never spotted, Faust and Brimstone only), Endless-mode survival milestones (5, 10 and 20 days, plus Endless Plus), single-run tactics (4 augments on one agent, every safe in a level), the 24/48/72-hour survival markers, Time Attack, and the four Contingency Plan DLC campaign clears.",
                "The catalog marks it difficulty 4 and many runs. The game is a short roguelike per campaign, but the hard achievements ('Never Look Back' with rewinds at 0 on Expert, 'Ghost Moves', 20 days of Endless) demand deep mastery of the stealth systems.",
                "Tip: learn the game on Beginner/Experienced, then grind the Expert and Expert Plus clears; save the no-rewind and Ghost Moves runs for last."
            ]
        },
        {
            "heading": "Campaign Clears",
            "body": [
                "The Steam-hidden 'Meta-Hacking', the Experienced and Expert clears ('Ant Society', 'Invisible Inc.'), unlocking every agent/alternate/program ('Fully Equipped'), surviving Alarm level 6 on Expert ('The Limit'), a never-spotted level ('Ghost Moves'), the zero-rewind Expert run ('Never Look Back'), and 5 days of Endless mode.",
                "The achievements here: Meta-Hacking (Hack the game itself: back up scripts.zip, edit client/states/state-main-menu.lua to uncomment the KLEIAchievements:achieve( \"META_HACKING\" ) line, blank hashes.dat to 0 bytes, and relaunch. Klei intended this achievement to be earned by modifying the game files.); Ant Society (Beat the game on Experienced difficulty.); Invisible Inc. (Beat the game on Expert difficulty.); Fully Equipped (Unlock every agent, agent alternate, and starting mainframe program.); The Limit (Beat a level after reaching Alarm level 6 in the level on Expert difficulty.); Ghost Moves (Beat a level without ever being spotted by a guard or camera on Beginner or Expert difficulty.); Never Look Back (Beat the game with rewinds set to 0 on Expert difficulty.); Rebuilding the Firm (Survive 5 days in Endless mode.)."
            ]
        },
        {
            "heading": "Endless Mode & Single-Run Tactics",
            "body": [
                "10 days of Endless ('Corporate Ladder'), the Expert Plus clear ('Acceptable Host'), 4 augments on one agent, a Faust-and-Brimstone run ('Daemon Code'), the 24/48/72-hour survival markers, and stealing from every safe in a level ('Attention to Detail').",
                "The achievements here: Corporate Ladder (Survive 10 days in Endless mode.); Acceptable Host (Beat the game on Expert Plus difficulty.); Meat Machine (Install 4 augments on an agent.); Daemon Code (Beat the game with Faust and Brimstone.); Contact Re-established (Survive for 24 Hours.); Nearing Confidence Threshold (Survive for 48 Hours.); Target Resolved (Survive for 72 Hours.); Attention to Detail (Steal from every safe in a level.)."
            ]
        },
        {
            "heading": "Contingency Plan & Extra Modes",
            "body": [
                "5 days of Endless Plus ('Smooth Operator'), Time Attack, the Beginner clear ('Training Wheels'), the three Contingency Plan campaign clears (Experienced, Expert, Expert Plus), and 20 days of Endless with the DLC ('Empire builder').",
                "The achievements here: Smooth Operator (Survive 5 days in Endless Plus mode.); Time Attack (Beat the game in Time Attack mode.); Training Wheels (Beat the game on Beginner difficulty.); Powerful Toast (Beat the Contingency Plan extended Campaign on Experienced difficulty); Technical Macguffin (Beat the Contingency Plan extended Campaign on Expert difficulty); \"surprised\" Face (Beat the Contingency Plan extended Campaign on Expert Plus difficulty); Empire builder (Survive 20 days in Endless mode with the Contingency Plan DLC)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Beat the game on Beginner ('Training Wheels'), then Experienced ('Ant Society').",
                "2. Unlock everything ('Fully Equipped') and clear Expert ('Invisible Inc.') and Expert Plus ('Acceptable Host').",
                "3. Do the restriction runs: 'Never Look Back' (0 rewinds, Expert), 'Ghost Moves' (never spotted), 'Daemon Code' (Faust + Brimstone).",
                "4. Grind Endless mode for the 5/10/20-day marks and Endless Plus for 'Smooth Operator'.",
                "5. Play the Contingency Plan DLC campaigns at each difficulty.",
                "6. For 'Meta-Hacking', follow the file-edit steps above - it is intended to be unlocked that way.",
                "Tip: the 24/48/72-hour survival achievements come naturally during any longer campaign or Endless run, so they usually tick off while you chase the harder goals."
            ]
        }
    ]
};
