// DUSK Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dusk.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   519860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dusk-achievement-guide",
    "category": "game",
    "gameSlug": "dusk",
    "icon": "🪓",
    "title": "DUSK Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in DUSK (5 hidden). Covers the episode completions and per-level awards, the secret / Endless / extra achievements, and the speedmap and challenge feats. Five achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DUSK has 30 Steam achievements and five are hidden - all easter-egg secrets: 'Duskwife' (the basketball-and-hoop secret in E1M2), 'Duskbaby' (the Hallowed Health behind bars in E3M8), 'It Lives' (the Dopefish painted in a secret area of E1M3), 'Mother!' (the Wife of Intoxigator at the end of E2M9), and 'Go Away' (the hidden 'you aren't supposed to be here' sign). The rest are open: completing the three episodes, the per-level awards (Pacifist, Completionist, Untouchable, Low Tech), beating par time, the Endless Mode wave milestones, the Duskmare difficulty feat, and reaching each secret speedmap.",
                "The catalog marks it roughly two playthroughs and difficulty 4 - 'True 100%' (the Completionist award on every level), 'Untouchable' and a Duskmare level are all demanding, and the hidden secrets each need a specific route on a specific level.",
                "Tip: use a secret-locations video for the five hidden easter eggs - they are one-time, level-specific interactions (a basketball to dunk, a wall painting, an end-of-level room) that you will never find blind."
            ]
        },
        {
            "heading": "Episodes & Awards",
            "body": [
                "Completing episode 1, 2 and 3 and all three, earning the Pacifist, Completionist, Untouchable and Low Tech awards, the Completionist award on every level ('True 100%'), and beating par time in a level.",
                "The achievements here: Only the Beginning (Complete all three episodes); The Foothills (Complete episode 1); The Facilities (Complete episode 2); The Nameless City (Complete episode 3); Pacifist (Earn the 'Pacifist' award); Completionist (Earn the 'Completionist' award); Untouchable (Earn the 'Untouchable' award); Low Tech (Earn the 'Low Tech\" award); True 100% (Earn the 'Completionist' award in every level); Gotta Go Fast (Beat par time in a level)."
            ]
        },
        {
            "heading": "Secrets, Endless & Extras",
            "body": [
                "The two hidden farm/city secrets (Duskwife, Duskbaby), picking up a bar of soap in each level, getting past waves 5, 10 and 20 in Endless Mode, opening Duskworld, watching the credits, a Duskmare-difficulty level, and the three hidden easter eggs (the Dopefish, the Wife of Intoxigator, the 'Go Away' sign).",
                "The achievements here: Duskwife (In E1M2 (Down On The Farm), carry a basketball through the teleporter back to the farmhouse and put it through the hoop to open a secret.); Duskbaby (In E3M8 (As Above, So Below), reach the giant room and find the Hallowed Health behind bars.); Don't Drop It (Pick up a bar of soap in each level); 5 Survived  (Get past wave 5 in Endless Mode); 10 Survived (Get past wave 10 in Endless Mode); 20 Survived (Get past wave 20 in Endless Mode); Frag your Friends (Open Duskworld); Thanks! (Watch the credits to the end); Not Even Remotely Fair (Beat a level on 'Duskmare'); It Lives (Find the Dopefish painted on a wall in a secret area of E1M3.); Mother! (Find the 'Wife of Intoxigator' at the end of E2M9.); Go Away (Find the hidden 'you aren't supposed to be here, go away' sign.)."
            ]
        },
        {
            "heading": "Speedmaps & Challenge Feats",
            "body": [
                "Reaching the E3, E2 and E1 secret speedmaps, using cheats, killing the Intoxigator while intoxicated, telefragging the Guardian, neutralising Chomper, and killing an enemy by spinning your weapons.",
                "The achievements here: So I Hear You Like... (Reach E3MS); Hardcore Parkour (Reach E2MS); Swamped (Reach E1MS); UNWORTHY (Use cheats); Intoxigated (Kill Intoxigator while intoxicated); Telefragged (Telefrag the Guardian); Somebody's Poisoned the Waterhole! (Neutralize Chomper); Spin 2 Win (Kill an enemy by spinning your weapons)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all three episodes on a normal difficulty, learning the levels.",
                "2. Do the per-level awards (Pacifist, Completionist, Low Tech, Untouchable) and 'True 100%'.",
                "3. Follow a secrets guide for the five hidden easter eggs (Duskwife, Duskbaby, It Lives, Mother!, Go Away).",
                "4. Grind Endless Mode to wave 20 and reach each secret speedmap.",
                "5. Do a Duskmare-difficulty level and the one-off combat feats (telefrag the Guardian, spin-kill, Intoxigator while intoxicated).",
                "Tip: 'Untouchable' (finish a level with no damage) is easiest on a short early level - learn its enemy placements and use corners, then do a clean run."
            ]
        }
    ]
};
