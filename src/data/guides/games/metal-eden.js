// METAL EDEN Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/metal-eden.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   990380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "metal-eden-achievement-guide",
    "category": "game",
    "gameSlug": "metal-eden",
    "icon": "🤖",
    "title": "METAL EDEN Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in METAL EDEN (6 hidden). Covers combat and traversal milestones, weapon and upgrade collection, difficulty completions, and three hidden boss kills plus two hidden character meetings. Six of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "METAL EDEN has 26 Steam achievements and 6 are hidden. About half are combat and traversal milestones - ripping 250 Cores, multi-kills, Overdrive and Super Punch and Ramball kills, consuming Cores, collecting Dust, time spent airborne, and distance traveled on zip lines. The rest are weapons and upgrades (all weapons, all third upgrades), the Prologue, no-respawn and no-pickup and no-damage encounter clears, finishing with 5 One Ups, completing the game on Easy/Normal, Hard and Brutal, the full-completion meta-achievement, and the hidden boss kills and character meetings (the Beekeeper's bumblebees, Spiderbot, Overseer, Nexus, Architect and Operator).",
                "The catalog marks it difficulty 3. Most achievements come from playing normally; the hidden boss kills happen naturally on the story path, while completing the game on Brutal is the real difficulty spike.",
                "Tip: the hidden achievements are almost all just story-path boss kills and character meetings - you'll pick most of them up without going out of your way."
            ]
        },
        {
            "heading": "Combat & Bosses",
            "body": [
                "Ripping 250 Cores, the hidden Beekeeper (killing bumblebees) and three hidden boss kills (Spiderbot, Overseer, Nexus), 50 three-enemy multi-kills, 80 Overdrive kills, 69 Super Punch kills, 100 Ramball kills, consuming 200 Cores, and acquiring all weapons.",
                "The achievements here: Rip & Tear (Rip 250 Cores from the enemies); The Beekeeper (Kill 3 Bumblebees.); KILL BOSS!! (Kill the Overseer boss.); What a mess! (Kill at least 3 enemies with a single blow 50 times); KILL BOSS!!! (Kill the Nexus boss.); Dominating! (Kill 80 enemies when Overdrive is activated); KILL BOSS! (Kill the Spiderbot boss.); One Punch Aśka (Kill 69 enemies with Super Punch); Keep rollin', rollin', rollin', rollin' (Kill 100 enemies in Ramball mode); Consumer (Consume 200 Cores); Impulse 101 (Acquire all weapons)."
            ]
        },
        {
            "heading": "Upgrades, Exploration & Discipline Runs",
            "body": [
                "Third upgrades for all weapons, collecting 100,001 Dust, 1420 seconds airborne, 200,000 meters on zip lines, the full-completion meta-achievement, the hidden meeting with Architect, a no-respawn mission clear, and 15 encounters without collecting any placed pickups.",
                "The achievements here: Weapons Expert (Unlock third upgrade for all weapons); Hoarder (Collect 100 001 Dust); Fly high (Spend 1420 seconds in the air); Traveler (Travel 200 000 meters on zip lines); AŚKA (Obtain all achievements); Design with Architect (Meet the Architect.); God Mode (Complete a mission without respawning); I don't need it (Complete 15 encounters without collecting any placed pickups)."
            ]
        },
        {
            "heading": "Difficulty Clears & Final Secrets",
            "body": [
                "Completing the Prologue, finishing a mission with 5 One Ups, completing the game on Brutal, on Easy or Normal, and on Hard, the hidden meeting with Operator, and clearing 10 encounters without taking any damage.",
                "The achievements here: Let's do this! (Complete the Prologue); Live Long (Finish a mission with 5 One Ups); METAL EDEN: Brutal (Complete the game on Brutal); METAL EDEN: Completed (Complete the game on Easy or Normal); METAL EDEN: Hard (Complete the game on Hard); Operate with Operator (Meet the Operator.); Untouchable (Complete 10 encounters without taking any damage)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story - the Beekeeper, Spiderbot, Overseer and Nexus kills and the Architect and Operator meetings all happen along the way.",
                "2. Push your combat totals (multi-kills, Overdrive kills, Super Punch kills, Ramball kills) and collect all weapons and their third upgrades.",
                "3. Rack up Dust, airtime and zip-line distance as you explore, and finish the Prologue and a mission with 5 One Ups.",
                "4. Try a no-respawn mission, a no-pickup encounter run, and a no-damage encounter run.",
                "5. Complete the game on Easy or Normal, then Hard, then Brutal for the full difficulty set.",
                "Tip: the hidden achievements are almost all automatic story beats - focus on the difficulty completions and combat/collection totals, and the hidden ones will follow."
            ]
        }
    ]
};
