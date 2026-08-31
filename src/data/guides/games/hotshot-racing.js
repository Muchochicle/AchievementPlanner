// Hotshot Racing Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hotshot-racing.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   609920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hotshot-racing-achievement-guide",
    "category": "game",
    "gameSlug": "hotshot-racing",
    "icon": "🏁",
    "title": "Hotshot Racing Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Hotshot Racing - none are hidden. Covers the Grand Prix and per-character Expert wins, the arcade and Cops & Robbers achievements, the Drive or Explode and Time Trial achievements, and the boost, customisation and online achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hotshot Racing has 53 Steam achievements and none are hidden. Eleven cover Grand Prix play - a 1st place on Expert with each of the eight characters, 'Hotshot' for winning every GP on Expert, plus 'Wheeler Dealer' and a burning-car finish. The rest are arcade-race wins and Cops & Robbers moments, the 'Drive or Explode' mode (no-damage lap, chain explosions, a 300mph finish) and Time Trial (ghost times, driving inside a ghost), and boost, customisation and online achievements including 'Overachiever' for unlocking every customisation option.",
                "The catalog marks it difficulty 3 and a short list. The main skill check is winning a Grand Prix on Expert with every character; most of the rest are one-off stunts done in a single race.",
                "Tip: grind the eight Expert GP wins first (the AI is aggressive on Expert), then pick off the mode-specific stunts one race at a time."
            ]
        },
        {
            "heading": "Grand Prix & Character Wins",
            "body": [
                "A burning-car race finish, completing a race in every vehicle, a 1st place on Expert as Alexa, Aston, Xing, Keiko, Marcus, Viktor, Mike and Toshiro, and 'Hotshot' for winning every GP on Expert as any character.",
                "The achievements here: Barely Breathing (Drive or Explode: Finish a race on fire.); Wheeler Dealer (Complete a race in every vehicle.); Follow Your Dreams (Achieve 1st place as Alexa in any Grand Prix on Expert.); Gentrified (Achieve 1st place as Aston in any Grand Prix on Expert.); Daredevil (Achieve 1st place as Xing in any Grand Prix on Expert.); Artiste (Achieve 1st place as Keiko in any Grand Prix on Expert.); Speedster (Achieve 1st place as Marcus in any Grand Prix on Expert.); Raving (Achieve 1st place as Viktor in any Grand Prix on Expert.); Family Man (Achieve 1st place as Mike in any Grand Prix on Expert.); Not a Robot (Achieve 1st place as Toshiro in any Grand Prix on Expert.); Hotshot (Come 1st in every GP as any character on Expert.)."
            ]
        },
        {
            "heading": "Arcade & Cops & Robbers",
            "body": [
                "Arcade-race wins (1, 4, 8 and 16 different tracks), a comeback win from 8th, a reverse-across-the-line win, finishing on every track, the Cops & Robbers achievements (convert 3 robbers, survive as a robber, donuts, double conversions), and a full boost segment from one drift.",
                "The achievements here: Newbie (Come 1st in an arcade race.); Competent (Come 1st in 4 arcade races on different tracks.); Professional (Come 1st in 8 arcade races on different tracks.); World Class (Come 1st in 16 arcade races on different tracks.); Hustler (Come 1st in an Arcade Race after dropping to 8th place from 1st place. ); Show Off… (Reverse across the finish line and take 1st place in an arcade race.); Globetrotter (Finish an arcade race on every track.); Referral Bonus ((Cops only) Convert 3 Robbers into Cops in a Cops & Robbers race.); Beat the Rap ((Robbers only) Complete a race of Cops & Robbers without being converted into a Cop.); Dunkin' ((Robbers Only) Perform a donut in a race and achieve the highest score.); Seeing Double ((Cops Only) Convert 2 Robbers within a second of eachother); Catch my Drift (Build a full boost bar segment from one drift.); Reverse Psychology ((Cops only) Convert a Robber by colliding whilst driving in the wrong direction.)."
            ]
        },
        {
            "heading": "Drive or Explode & Time Trial",
            "body": [
                "A no-damage lap, three explosions in 10 seconds, an explosion-kill crash, a 300mph finish, exploding before checkpoint 1, four explosion timers, beating default and downloaded ghosts, 5 seconds inside a ghost, a personal best on every track, 5 personal bests on one track, a 5-second slipstream, two full boost meters in a race, a no-collision race, 10 boosts, and a failed-start comeback win.",
                "The achievements here: Precision (Drive or Explode: Finish a lap without taking any damage. (Restored health is irrelevant.)); The Destroyer (Drive or Explode: Cause 3 vehicles to explode within 10 seconds of hitting them.); K.O. (In Drive or Explode, crash into another racer causing them to explode.); Supersonic (Cross the finish line on Drive or Explode at 300mph.); Not Your Lucky Day (In Drive or Explode, explode before reaching the 1st checkpoint.); C4 (Start the explosion timer 4 times in Drive or Explode.); Stick it to the Dev (Beat a default ghost time in Time Trial.); Follow the Crowd (Beat a downloaded ghost time in Time Trial.); Machine in the Ghost (Drive inside a ghost in Time Trial for 5 seconds.); Marking Territory (Set a personal best time on every track. (No mirrored track required.)); Practise Makes Perfect (Beat 5 personal bests on any track.); BWM Driver (Slipstream behind a player for 5 seconds.); Grafting hard (Build your boost meter to full from empty twice in a race.); Pacifist (Complete a race without colliding with another racer.); Serial Sprinter (Perform 10 boosts in a race.); Redemption Arc (Fail a start line boost and take 1st place in arcade mode.)."
            ]
        },
        {
            "heading": "Boosts, Customisation & Online",
            "body": [
                "Exiting a drift with a boost, a 1-second win margin, 20 destructibles destroyed, unlocking and purchasing every customisation option, 9 online wins, fully customising and racing a vehicle (offline and online), a mirrored-track race, an online race, the Barrel Barrage achievements, and winning the Boss Level GP on Expert.",
                "The achievements here: Speedy Exit (Exit a Drift with a Boost.); Phew! (Come 1st and beat 2nd place by 1 second.); Destruction Level 99 (Finish a race with 20 track destructibles destroyed.); Overachiever (Unlock all customisation options. ); Trophy Hunter (Purchase all customisation options. ); On Cloud 9 (Come 1st in 9 online races (any game mode)); The Peacock (Customise every aspect of a vehicle and complete a race with it.); Fishing for Compliments (Play an Online race with a customised vehicle.); Self Reflection (Complete a race on a mirrored track.); Carbon Fibre Optic (Play an Online race.); Barrel-ly Made It (Finish a Barrel Barrage race on fire); Barreling Along (Finish a Barrel Barrage race without hitting a single barrel); Download Diva (Finish first in the Boss Level GP on Expert)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Win a Grand Prix on Expert with each of the eight characters, then 'Hotshot' and 'Download Diva' (Boss Level GP).",
                "2. Do the arcade-win counts (1/4/8/16 tracks) and 'Globetrotter'.",
                "3. Play a few Cops & Robbers rounds for those achievements.",
                "4. Run 'Drive or Explode' for its stunt achievements (no-damage lap, chain explosions, 300mph finish).",
                "5. Do Time Trial (ghosts, personal bests) and mop up the boost, customisation and online achievements.",
                "Tip: many stunt achievements ('Show Off…', reverse finish; 'Not Your Lucky Day', early explosion) are easiest set up deliberately at the very end of a race you've already got in the bag - don't try to combine them with a serious win."
            ]
        }
    ]
};
