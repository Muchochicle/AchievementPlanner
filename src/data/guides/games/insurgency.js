// Insurgency Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/insurgency.json), whose 100 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   222880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "insurgency-achievement-guide",
    "category": "game",
    "gameSlug": "insurgency",
    "icon": "💣",
    "title": "Insurgency Achievement Guide",
    "summary": "A practical guide to all 100 Steam achievements in Insurgency - 1 are hidden. Covers the PVP combat and objective milestones, their cooperative-mode mirrors, the checkpoint and hunt co-op missions, training, and survival/outpost progression.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Insurgency has 100 Steam achievements, and 1 is hidden. The list is built almost entirely of milestone counters that appear twice - once for standard PVP and again with the exact same requirement \"while playing in cooperative mode\" - plus a full set of one-achievement-per-map \"Decisive Victory\" (checkpoint) and \"Clean Sweep\" (hunt) co-op mission clears, a training course, War Hero/Hero Cap MVP counters, Survivalist and Stronghold wave-progression tiers, and one joke achievement (Humble Bundle) that bundles together a checklist of maps, weapons, and attachments to try at least once.",
                "Nothing is missable - every kill count, capture count, and mission clear is a permanent account stat. The long poles are the top kill-count tiers (100,000 kills, both PVP and Coop) and working through all 14+ checkpoint/hunt maps, which realistically need many, many hours of multiplayer or co-op play rather than any clever shortcut.",
                "Tip: co-op (checkpoint and hunt missions against bots) is the most efficient way to grind the base kill-count and capture-count achievements too, since every PVP achievement has an identical Coop counterpart that shares no progress with it - playing co-op lets you work on both tracks worth of Bodycount and Ground Control tiers if you also queue some PVP matches on the side."
            ]
        },
        {
            "heading": "Combat & Objective Basics",
            "body": [
                "The core PVP milestone block: surviving a C4 blast, the Bodycount kill-count ladder (100 through 100,000 kills), two First Blood variants, 5 knife kills in a round, defending all caches in Strike, capturing an objective with the whole team, 5 headshots in a row, and the Ground Control capture-point ladder (1 through 1,000 captures).",
                "The achievements here: Hurt Locker (Survive a C4 blast); Bodycount I (Kill 100 players of the opposing team); Bodycount II (Kill 250 players of the opposing team); Bodycount X (Kill 100,000 players of the opposing team); First Blood  (Get the first kill in a round); First Blood 2: Blade Reckoning (Get the first kill in a round with a knife); Silent But Deadly (Knife 5 enemies in 1 round ); Air Tight (Successfully defend all caches in Strike); All In (Capture an objective with your entire team); Head Hunter (Get 5 headshots in a row); Ground Control I (Capture one control point); Bodycount III (Kill 500 players of the opposing team); Bodycount IV (Kill 1,000 players of the opposing team); Bodycount V (Kill 2,500 players of the opposing team); Bodycount VI (Kill 5,000 players of the opposing team); Bodycount VII (Kill 10,000 players of the opposing team); Bodycount VIII (Kill 25,000 players of the opposing team); Bodycount IX (Kill 50,000 players of the opposing team); Ground Control II (Capture 10 control points); Ground Control III (Capture 50 control points); Ground Control IV (Capture 100 control points); Ground Control V (Capture 500 control points); Ground Control VI (Capture 1,000 control points)."
            ]
        },
        {
            "heading": "Cooperative Mode Mirrors",
            "body": [
                "The exact same 22 achievements from the previous section, each earned again \"while playing in cooperative mode\" instead of PVP - Hurt Locker, First Blood x2, Silent But Deadly, All In, Head Hunter, the full Bodycount ladder, and the full Ground Control ladder, all as separate Coop-only progress.",
                "The achievements here: Hurt Locker (Coop) (Survive a C4 blast while playing in cooperative mode); First Blood (Coop) (Get the first kill in a round while playing in cooperative mode); First Blood 2: Blade Reckoning (Coop) (Get the first kill in a round with a knife while playing in cooperative mode); Silent But Deadly (Coop) (Knife 5 enemies in 1 round while playing in cooperative mode); All In (Coop) (Capture an objective with your entire team while playing in cooperative mode); Head Hunter (Coop) (Get 5 headshots in a row while playing in cooperative mode); Bodycount I (Coop) (Kill 100 players of the opposing team while playing in cooperative mode); Bodycount II (Coop) (Kill 250 players of the opposing team while playing in cooperative mode); Bodycount III (Coop) (Kill 500 players of the opposing team while playing in cooperative mode); Bodycount IV (Coop) (Kill 1,000 players of the opposing team while playing in cooperative mode); Bodycount V (Coop) (Kill 2,500 players of the opposing team while playing in cooperative mode); Bodycount VI (Coop) (Kill 5,000 players of the opposing team while playing in cooperative mode); Bodycount VII (Coop) (Kill 10,000 players of the opposing team while playing in cooperative mode); Bodycount VIII (Coop) (Kill 25,000 players of the opposing team while playing in cooperative mode); Bodycount IX (Coop) (Kill 50,000 players of the opposing team while playing in cooperative mode); Bodycount X (Coop) (Kill 100,000 players of the opposing team while playing in cooperative mode); Ground Control I (Coop) (Capture one control point while playing in cooperative mode); Ground Control II (Coop) (Capture 10 control points while playing in cooperative mode); Ground Control III (Coop) (Capture 50 control points while playing in cooperative mode); Ground Control IV (Coop) (Capture 100 control points while playing in cooperative mode); Ground Control V (Coop) (Capture 500 control points while playing in cooperative mode); Ground Control VI (Coop) (Capture 1,000 control points while playing in cooperative mode)."
            ]
        },
        {
            "heading": "Training & Early Checkpoint Missions",
            "body": [
                "Completing the training course and doing it again in under 16 minutes without dying, plus the first block of \"Decisive Victory\" co-op checkpoint mission clears - Buhriz, Contact, District, Heights, Ministry, Siege, Market, every checkpoint mission (Complete), Revolt, and Sinjar.",
                "The achievements here: Recruited (Complete the training course); Aced It! (Complete the training course in less than 16 minutes without dying); Decisive Victory: Buhriz (Successfully complete the cooperative checkpoint mission of Buhriz); Decisive Victory: Contact (Successfully complete the cooperative checkpoint mission of Contact); Decisive Victory: District (Successfully complete the cooperative checkpoint mission of District); Decisive Victory: Heights (Successfully complete the cooperative checkpoint mission of Heights); Decisive Victory: Ministry (Successfully complete the cooperative checkpoint mission of Ministry); Decisive Victory: Siege (Successfully complete the cooperative checkpoint mission of Siege); Decisive Victory: Market (Successfully complete the cooperative checkpoint mission of Market); Decisive Victory: Complete (Successfully complete all cooperative checkpoint missions); Decisive Victory: Revolt (Successfully complete the cooperative checkpoint mission of Revolt); Decisive Victory: Sinjar (Successfully complete the cooperative checkpoint mission of Sinjar)."
            ]
        },
        {
            "heading": "War Hero, Hero Cap & Hunt Missions",
            "body": [
                "The MVP and revive counters (War Hero I-IV for MVP counts, Hero Cap I-IV for clutch objective revives) plus the first block of \"Clean Sweep\" co-op hunt mission clears - Contact, District, Heights, Ministry, Uprising, every hunt mission (Complete), and Panj.",
                "The achievements here: War Hero I (Be the Most Valuable Player); War Hero II (Become the MVP 10 times); War Hero III (Become the MVP 25 times); War Hero IV (Become the MVP 50 times); Hero Cap I (Secure an objective to revive your team if you are the last person alive); Hero Cap II (Secure an objective to revive your team if you are the last person alive 5 times); Hero Cap III (Secure an objective to revive your team if you are the last person alive 10 times); Hero Cap IV (Secure an objective to revive your team if you are the last person alive 25 times); Clean Sweep: Contact (Successfully complete the cooperative hunt mission of Contact); Clean Sweep: District (Successfully complete the cooperative hunt mission of District); Clean Sweep: Heights (Successfully complete the cooperative hunt mission of Heights); Clean Sweep: Ministry (Successfully complete the cooperative hunt mission of Ministry); Clean Sweep: Uprising (Successfully complete the cooperative hunt mission of Uprising); Clean Sweep: Complete (Successfully complete all cooperative hunt missions); Clean Sweep: Panj (Successfully complete the cooperative hunt mission of Panj)."
            ]
        },
        {
            "heading": "Survival, Outpost & Endgame",
            "body": [
                "The wave-based modes: the Survivalist ladder (reaching level 5 through 50 in a single Survival round), the Stronghold ladder (reaching wave 1 through 20 in a single Outpost round), and the joke Humble Bundle achievement (play specific maps and modes, gear up with a checklist of weapons and attachments).",
                "The achievements here: Survivalist I (Reach level 5 in one survival round); Survivalist II (Reach level 10 in one survival round); Survivalist III (Reach level 20 in one survival round); Survivalist IV (Reach level 30 in one survival round); Survivalist V (Reach level 50 in one survival round); Stronghold I (Reach wave 1 in a single round of Outpost); Stronghold II (Reach wave 5 in a single round of Outpost); Stronghold III (Reach wave 10 in a single round of Outpost); Stronghold IV (Reach wave 15 in a single round of Outpost); Stronghold V (Reach wave 20 in a single round of Outpost); Humble Bundle (Play Kandagal and Contact on any mode, Conquer on any map, gear up with the Galil, SLR, Sterling, .38 revolver, use the new grenade launchers with sights and hook up a drum magazine attachment to receive this humble achievement.)."
            ]
        },
        {
            "heading": "Remaining Hunt & Checkpoint Missions",
            "body": [
                "The rest of the co-op mission map list: Clean Sweep on Buhriz, Dry Canal, Embassy, Kandagal, Market, Peak, Revolt, Siege, Sinjar, Station, Tell, and Verticality, plus Decisive Victory on Dry Canal, Embassy, Tell, and Verticality.",
                "The achievements here: Clean Sweep: Buhriz (Successfully complete the cooperative hunt mission of Buhriz); Clean Sweep: Dry Canal (Successfully complete the cooperative hunt mission of Dry Canal); Clean Sweep: Embassy (Successfully complete the cooperative hunt mission of Embassy); Clean Sweep: Kandagal (Successfully complete the cooperative hunt mission of Kandagal); Clean Sweep: Market (Successfully complete the cooperative hunt mission of Market); Clean Sweep: Peak (Successfully complete the cooperative hunt mission of Peak); Clean Sweep: Revolt (Successfully complete the cooperative hunt mission of Revolt); Clean Sweep: Siege (Successfully complete the cooperative hunt mission of Siege); Clean Sweep: Sinjar (Successfully complete the cooperative hunt mission of Sinjar); Clean Sweep: Station (Successfully complete the cooperative hunt mission of Station); Clean Sweep: Tell (Successfully complete the cooperative hunt mission of Tell); Clean Sweep: Verticality (Successfully complete the cooperative hunt mission of Verticality); Decisive Victory: Dry Canal (Successfully complete the cooperative checkpoint mission of Dry Canal); Decisive Victory: Embassy (Successfully complete the cooperative checkpoint mission of Embassy); Decisive Victory: Tell (Successfully complete the cooperative checkpoint mission of Tell); Decisive Victory: Verticality (Successfully complete the cooperative checkpoint mission of Verticality)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "Insurgency's one hidden achievement is a co-op radio-transmission easter egg, sourced from community guides (Steam Community, TrueSteamAchievements):",
                "ODA 420: Needs 3+ players on a PVE server running the \"Panj Night\" map (panj_night) in Hunt mode. Enter the small building behind spawn in the map's northeast corner and find the radio on the table inside; each of the 3 players turns it on (do not interact a second time or it switches off). A long radio negotiation between Agent Spooner and Abdul plays out over 5 minutes while you fight off the enemies hunting your squad - when it ends, the achievement unlocks. Its real description, once unlocked in-game, is the joke line \"Successfully get an enemy combatant ripping baked.\""
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the training course (Recruited), then again in under 16 minutes without dying (Aced It!) once you know the layout.",
                "2. Play a mix of PVP and Coop matches to build up the Bodycount kill tiers and Ground Control capture-point tiers on both tracks simultaneously - they do not share progress, so both need attention.",
                "3. Work through every checkpoint map for Decisive Victory and every hunt map for Clean Sweep, finishing each set for the \"Complete\" bonus achievement.",
                "4. Grind co-op MVP and revive achievements (War Hero, Hero Cap) and the Survivalist/Stronghold wave-based modes over multiple rounds.",
                "5. Tackle the one-off combat and joke achievements (Hurt Locker, First Blood, Silent But Deadly, Head Hunter, All In, Air Tight, Humble Bundle) as natural opportunities come up, and organize a 3-player PVE group on Panj Night in Hunt mode for the hidden ODA 420 achievement.",
                "Tip: the Coop kill and capture counters are genuinely separate from PVP ones, so if you are aiming for 100% do not neglect co-op even if you strongly prefer PVP (or vice versa) - both full ladders need to be climbed independently."
            ]
        }
    ]
};
