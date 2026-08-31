// GRIP: Combat Racing Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grip-combat-racing.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   396900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grip-combat-racing-achievement-guide",
    "category": "game",
    "gameSlug": "grip-combat-racing",
    "icon": "🏎️",
    "title": "GRIP: Combat Racing Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in GRIP: Combat Racing - none are hidden. Covers the racing and speed achievements, the killstreak and destruction achievements, and the weapon and stunt achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GRIP: Combat Racing has 35 Steam achievements and none are hidden. Fifteen are racing and speed feats (a 20-lap race, 50 / 250 / 1000 total laps, three and six wins in a row, 10th-to-1st in one lap, a 700 km/h average, hitting Mach 1), ten are killstreaks (up to Penta Kill) and destruction totals (50 / 100 / 250 opponents destroyed) plus the carkour courses and finishing the campaign, and ten are weapon and stunt achievements (a ceiling wheelie, a double somersault, airborne Scorpion hits, a full Raptor burst, a triple Hydra hit).",
                "The catalog marks it difficulty 3. Nothing is very hard; 'GRIP Master' (1000 total laps), '250 opponents destroyed' and 'Skillz' (six wins in a row) are the grinds, and a few weapon feats need setup.",
                "Tip: play the campaign and free races to rack up laps and kills, and do the weapon/stunt achievements deliberately in a custom race with weak AI."
            ]
        },
        {
            "heading": "Racing & Speed",
            "body": [
                "Finishing the tutorial and a race, a 20-lap race, 50 / 250 / 1000 total laps, a first race win, three and six wins in a row, 10th to 1st in one lap, a 700 km/h average, a triple charged RamRaider, destroying an opponent, finishing an arena match, and hitting Mach 1.",
                "The achievements here: Got a GRIP (Finish the tutorial); You did a thing (Finish a race); Endurance (Finish a 20 lap race); GRIP Rookie (Race 50 laps in total); GRIP Addict (Race 250 laps in total); GRIP Master (Race 1000 laps in total); There's a first for everything (Finish 1st in a race); Skill or luck? (Finish 1st 3 races in a row); Skillz (Finish 1st 6 races in a row); Underdog (Go from 10th to 1st within one lap); Bullet (Average a speed 700kmph+ in a race); Skewered (Hit 3 or more opponents with a single charged RamRaider); More than a pink slip (Destroy an opponent); Participated in a death ballet (Finish an arena match); We've gone plaid (Hit Mach 1 in a race)."
            ]
        },
        {
            "heading": "Killstreaks & Destruction",
            "body": [
                "Double, Triple, Quad and Penta kills, destroying 50 / 100 / 250 opponents, finishing a carkour course, finishing all carkour courses, and finishing the campaign.",
                "The achievements here: Double Kill (Destroy 2 players without dying); Triple Kill (Destroy 3 players without dying); Quad Kill (Destroy 4 players without dying); Penta Kill (Destroy 5 players without dying); Vehicular homicide (Destroy 50 opponents); Vehicular genocide (Destroy 100 opponents); There are no cars left to kill, so chill (Destroy 250 opponents); It's a play on words. Get it? (Finish a carkour course); Playground bound (Finish all carkour courses); Combat Racing Legend (Finish the campaign)."
            ]
        },
        {
            "heading": "Weapons & Stunts",
            "body": [
                "Creating a custom tournament, a ceiling wheelie, an airborne Scorpion hit and an airborne-launched Scorpion hit, a double somersault, a full Raptor burst on one opponent, a vehicles-only Hydra salvo, destroying scenery, a last-second race win, and a triple Hydra hit.",
                "The achievements here: I did it my way (Create a custom tournament); Stunt double (Pull a wheelie on the ceiling); Death from above (Hit an opponent with a Scorpion launched when airborne); Duck hunt (Hit an airborne opponent with the Scorpion); Twisted (Perform a double-somersault when airborne); Dropped your load (Hit an opponent with a full round of Raptor bullets); Serpent's kiss (Hit only vehicles with every Hydra missile in a salvo); Demolition man (Destroyed some scenery); Stolen victory (Win a race by passing the leader in the last second); Driller killer (Hit 3 or more opponents with a single Hydra)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign and free races - laps, kills and most speed feats accumulate.",
                "2. Grind toward 1000 total laps and 250 opponents destroyed.",
                "3. Do 'Skillz' (six wins in a row) against easier AI.",
                "4. Do the weapon and stunt achievements in a custom race: ceiling wheelie, double somersault, full Raptor/Hydra hits, airborne Scorpion.",
                "5. Finish all carkour courses.",
                "Tip: the multi-opponent weapon hits ('Skewered', 'Driller killer') want a tight pack - trigger them at the start line before the field spreads out."
            ]
        }
    ]
};
