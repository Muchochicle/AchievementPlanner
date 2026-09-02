// Aliens: Dark Descent Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/aliens-dark-descent.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1150440 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 19 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "aliens-dark-descent-achievement-guide",
    "category": "game",
    "gameSlug": "aliens-dark-descent",
    "icon": "👽",
    "title": "Aliens: Dark Descent Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Aliens: Dark Descent (19 hidden). Fourteen hidden achievements are spoiler-free markers (the Prologue, twelve missions, and unlocking the APC); the other five are combat and survival feats (the Queens, luring one into a mine, an embryo save, an APC run-over, a two-prosthesis marine). Everything else - difficulty clears, class leveling, campaign-wide counters and collectibles - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Aliens: Dark Descent has 45 Steam achievements, 19 of them hidden. A Colonial Marine detachment stranded on Lethe fights a Xenomorph outbreak across a campaign of real-time squad tactics with permanent stress, injury and death. The visible achievements cover the four difficulty clears (Medium, Hard, Nightmare, and the Ironman 'No One Can Hear Them Scream' mode), advancing each Marine class to level 10 (and all classes), the campaign-wide counters (100 Xenomorphs, all datapads, all Xeno Techs, all weapons, 5 survivors, a no-death campaign), and a spread of tactical one-offs (a Sentry with 10 kills, a 4-egg grenade, a stealth kill, prevent an abduction).",
                "Of the 19 hidden achievements, fourteen are spoiler-free markers (the Prologue, twelve missions, and unlocking the APC). The other five are combat feats: killing the Queens, luring a Queen into a mine, saving a marine from incubation, an APC run-over, and a marine with two prostheses.",
                "The catalog marks it difficulty 3 and two playthroughs - the no-death campaign and the Ironman clear both realistically want their own careful run."
            ]
        },
        {
            "heading": "Campaign Missions",
            "body": [
                "The Prologue, the twelve mission markers, and unlocking the APC - all spoiler-free.",
                "The achievements here: This Is Hayes, Pioneer Station, Signing Off (Story progress marker - complete the Prologue, described here spoiler-free.); Something Lurks Under The Hills (Story progress marker - complete Mission 1, described here spoiler-free.); First Steps Into Madness (Story progress marker - complete Mission 2, described here spoiler-free.); Harper's Hell (Story progress marker - complete Mission 3, described here spoiler-free.); Making a Stand (Story progress marker - complete Mission 4, described here spoiler-free.); Where It All Begun (Story progress marker - complete Mission 5, described here spoiler-free.); Living Nightmare (Story progress marker - complete Mission 6, described here spoiler-free.); The Darwin Era Was Here (Story progress marker - complete Mission 7, described here spoiler-free.); Deep Into Insanity (Story progress marker - complete Mission 8, described here spoiler-free.); The Passenger (Story progress marker - complete Mission 9, described here spoiler-free.); The Spire (Story progress marker - complete Mission 10, described here spoiler-free.); Excavating The Truth (Story progress marker - complete Mission 11, described here spoiler-free.); Abysmal Horrors (Story progress marker - complete Mission 12, the finale, described here spoiler-free.); The More The Merrier (Unlock the APC vehicle.)."
            ]
        },
        {
            "heading": "Difficulty & Progression",
            "body": [
                "The four difficulty clears, advancing each Marine class (and all) to level 10, and the no-death campaign.",
                "The achievements here: This Went Smoothly (Finish the game on Medium.); Fair And Square (Finish the game on Hard.); This Ain't No Picnic (Finish the game on Nightmare.); Perfect Organism (Finish the game on \"No One Can Hear Them Scream\" mode.); Come on, You Wanna Live Forever? (Advance a Sergeant to level 10.); El Riesgo Siempre Vive (Advance a Gunner to level 10.); Bandage Lover (Advance a Medic to level 10.); The Cable Guy (Advance a Tecker to level 10.); Frontliner (Advance a Recon to level 10.); Hardened In The Heat Of Battle (During a campaign, advance each Marine Class to level 10.); Flawless Victory (Keep all of your marines alive during a campaign.)."
            ]
        },
        {
            "heading": "Combat & Collectibles",
            "body": [
                "The Queens, luring one into a mine, the embryo save, the APC run-over, the two-prosthesis marine, 100 Xenomorphs, all datapads, all Xeno Techs, all weapons, 5 survivors, and the tactical one-offs (Sentry kills, 4-egg grenade, barrel kill, stealth kill, prevent abduction, save from bleeding, solo objective, remove a trait, clear a Massive Onslaught).",
                "The achievements here: Regicide (Kill the Xenomorph Queens during the campaign, described here spoiler-free.); Cleaning Lethe, One Nest At A Time (During a campaign, kill 100 Xenomorphs.); Heavy Steps (Lure a Queen into a mine.); Stuff Of Nightmares (Save a marine from being incubated by extracting the embryo in time.); Archivist (Gather all datapads.); Colonial Barrels (Kill an enemy by using an explosive barrel.); Damn Dude, You Gotta Lose Some Weight! (Secure an unconscious marine.); Omelette Du Fromage (Destroy 4 eggs with one grenade or an RPG shot.); Recouped Investment (Have one Sentry kill at least 10 aliens.); Use The Bumper, That's What It's For (Run an enemy over with the APC.); This Was No Papercut (Save a marine from dying of Bleeding.); Keep 'Em Coming (Kill every Alien of a Massive Onslaught.); Snatched Out (Prevent a marine from being Abducted.); The True Experience (In any mission, complete at least one objective with only one marine in the squad.); The Shrink Hates Me (Remove a Trait from a marine.); Call Me Snake (Kill an enemy before they detect the squad.); Perfect Enhancements (During a campaign, unlock every Xeno Tech.); One For Every Occasion (During a campaign, unlock every weapon.); People Person (During a campaign, secure 5 survivors.); Chalk It Up To Experience (Have a marine fitted with at least two prostheses.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first campaign on Medium, aiming to keep everyone alive - if it holds, 'Flawless Victory' and the 'This Went Smoothly' clear stack, along with the mission markers and the APC unlock.",
                "2. On that run, unlock every Xeno Tech and weapon, gather all datapads, secure 5 survivors, and advance every class to level 10.",
                "3. Do the tactical one-offs opportunistically: lure a Queen into a mine, an APC run-over, a 4-egg grenade, a stealth kill, an embryo save, a two-prosthesis marine.",
                "4. Kill the Queens and beat the campaign for the difficulty ladder - Hard, then Nightmare.",
                "5. Do a dedicated Ironman run ('No One Can Hear Them Scream') for 'Perfect Organism'.",
                "Tip: manage stress, not just health - a maxed-out squad panics, friendly-fires and dies, which loses you both 'Flawless Victory' and the Ironman clear; rest at safe rooms early and often rather than pushing objectives with a rattled team."
            ]
        }
    ]
};
