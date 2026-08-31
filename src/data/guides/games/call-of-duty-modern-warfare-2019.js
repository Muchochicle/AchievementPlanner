// Call of Duty: Modern Warfare (2019) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/call-of-duty-modern-warfare-2019.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2000950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "call-of-duty-modern-warfare-2019-achievement-guide",
    "category": "game",
    "gameSlug": "call-of-duty-modern-warfare-2019",
    "icon": "🔫",
    "title": "Call of Duty: Modern Warfare (2019) Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Call of Duty: Modern Warfare (2019) - none are hidden. Covers the campaign completion and Veteran/Realism clear, the mission-specific challenge feats, and the Special Operations completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Call of Duty: Modern Warfare (the 2019 reboot) has 27 Steam achievements and none of them are hidden. Two are campaign completions (any difficulty, and every mission on Veteran or Realism). The rest are mission-specific challenge feats: a molotov quad-kill, a ladder streak, crashing a helicopter by shooting the pilot, no civilian injuries in 'Piccadilly', the one-bullet-per-threat 'Clean House', the cinder-block companion run in 'Embedded', the eight-weapon 'Old Comrades' run, the no-backup Church/Clocktower/Pool clear, the drone-strike-only push to Barkov's lab, and 'Liberation' for completing all Special Operations missions.",
                "The catalog marks it as roughly two playthroughs - a normal run for the feats plus a Veteran/Realism run - and nothing is missable: missions replay from mission select and every challenge can be retried.",
                "Tip: do most of the mission challenges on a normal run using checkpoint restarts, then a Veteran/Realism run for the difficulty achievement - 'Golden Path' (one bullet per threat in 'Clean House') is the trickiest and worth practising on its own."
            ]
        },
        {
            "heading": "Campaign Progression & Feats",
            "body": [
                "The tripwire, molotov, ladder, helicopter-pilot and smoke-grenade feats, the any-difficulty and Veteran/Realism campaign clears, the 'Fog of War' frag, no civilian injuries in 'Piccadilly', the 'Embedded' field-of-bodies clear, the cinder-block run, and saving Alpha 3-2.",
                "The achievements here: Press [BOOM] to Defuse (Blow up 3 tripwires with explosives.); Ashes to Ashes (Burn 4 enemies with a single molotov.); Hang Time (Kill 3 enemies while you are on a ladder.); Long Way Down (Crash a helicopter by shooting the pilot.); Wild Fire (Take down a flying helicopter with a molotov.); Good Effect on Target (Kill an enemy with a direct hit from a smoke grenade.); Out of the Fire (Complete every single player mission on Veteran or Realism difficulty.); Tea Time (Finish single player on any difficulty.); Nothing but Net (Neutralize the 'Fog of War' machine gun with a frag grenade.); Trigger Discipline (Do not injure any civilians in 'Piccadilly'.); Play Dead (Kill all the enemies in the 'Embedded' field of dead bodies.); Companion Block (Only use one cinder block and bring it to the end of 'Embedded'.); Wall Hax (Save Alpha 3-2 from being downed.)."
            ]
        },
        {
            "heading": "Mission Challenges & Special Ops",
            "body": [
                "The one-bullet 'Clean House', the 'Embassy' drone-truck feat, the APC and suicide-truck stops, the two-birds shot, the 1911-only tunnels, the no-sniper-hit escape, spitting on Barkov, the eight-weapon 'Old Comrades', the 'Going Dark' power-off, the no-backup Church clear, the drone-strike-only lab push, the 'Circus Tour' feat, and 'Liberation' (all Special Operations missions).",
                "The achievements here: Golden Path (Complete 'Clean House' without being hit using one bullet per threat.); Love from Above (Destroy 4 trucks with 4 drone strikes before they reach the end of their path in 'The Embassy'.); Pit Stop (Stop three APCs with Hadir's sniper rifle.); Driver's Ed (Shoot the driver of the suicide truck.); Two Birds (Kill both soldiers with one shot in 'Hometown'.); Tunnel Rat (Complete 'The Wolf's Den' tunnels using only the 1911.); Dodged a Bullet (Never get hit by the sniper while escaping captivity.); Got Something on Your Face (Spit on Barkov.); Hot Swap (Get at least one kill with eight different weapons when completing 'Old Comrades'.); Lights Out (Shut off the power to 4 buildings in 'Going Dark'.); We Own the Night (Kill all enemies at the Church, Clocktower, and Pool without anyone calling for backup.); Warheads on Foreheads (Reach Barkov's lab entrance using only drone strikes.); Circus Tour (Kill at least one enemy while inside The Reading Place, Aural Chic, and both Subway undergrounds.); Liberation (Complete all Special Operations missions.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on a normal difficulty, doing the mission challenge feats with checkpoint restarts.",
                "2. Practise 'Golden Path' (one bullet per threat in 'Clean House') separately - it is the hardest single feat.",
                "3. Do a Veteran or Realism run for 'Out of the Fire'.",
                "4. Mop up any mission challenges you missed from mission select.",
                "5. Complete every Special Operations mission for 'Liberation'.",
                "Tip: 'Hot Swap' (a kill with eight different weapons in 'Old Comrades') just needs you to keep picking up dropped enemy guns - carry two, fire one shot to get the kill, swap, repeat."
            ]
        }
    ]
};
