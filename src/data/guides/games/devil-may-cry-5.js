// Devil May Cry 5 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/devil-may-cry-5.json), whose 55 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   601150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below (the
//   per-mission achievements are described only by what you do, no plot
//   detail).
// - Sections group by what each achievement needs: difficulty clears,
//   per-mission progress and secret feats, Style ranks and combat, the
//   S-rank/skill/milestone grind, and Bloody Palace plus the Vergil
//   (Special Edition) content.
export const GUIDE = {
    "slug": "devil-may-cry-5-achievement-guide",
    "category": "game",
    "gameSlug": "devil-may-cry-5",
    "icon": "🗡️",
    "title": "Devil May Cry 5 Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Devil May Cry 5 - none are hidden. The six difficulty clears, the per-mission progress and secret feats, the Style-rank and combat achievements, the S-rank / skill / milestone grind, and the Bloody Palace and Vergil (Special Edition) set.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Devil May Cry 5 has 55 Steam achievements and none are hidden. The list is built from six difficulty clears, one achievement per campaign mission plus a few secret feats, Style-rank and combat achievements, big cumulative milestones (1,000,000 Red Orbs, 1,000 enemies), full skill sets for each character, and the Bloody Palace and Vergil (Special Edition) content.",
                "Nothing is missable - every mission and difficulty replays freely, skills can always be bought, and Heaven or Hell mode makes the difficulty clears trivial. The real work is Worthy of Legend / Hell of a Hunter: an S rank on every mission (and on every difficulty except Heaven or Hell).",
                "Tip: unlock the higher difficulties by clearing the game once, then do Heaven or Hell (one-hit kills, one-hit deaths) and Hell and Hell purely to tick those two boxes. Grind Red Orbs and buy every skill early - Nothing's Impossible, Be the Legend and Demon Breeder just fall out of a maxed character, and full skills make the S ranks far easier."
            ]
        },
        {
            "heading": "Difficulty Clears",
            "body": [
                "One achievement for beating the game on each difficulty: Human, Devil Hunter, Son of Sparda, Dante Must Die, Heaven or Hell and Hell and Hell.",
                "The achievements here: Let's Rock! (Complete the game on Human mode.); Showtime! (Complete the game on Devil Hunter mode.); Doing Daddy Proud (Complete the game on Son of Sparda mode.); Dance with the Devil (Complete the game on Dante Must Die mode.); Stairway to Heaven (Complete the game on Heaven or Hell mode.); Highway to Hell (Complete the game on Hell and Hell mode.)."
            ]
        },
        {
            "heading": "Mission Progress & Secret Feats",
            "body": [
                "One achievement per mission from the Prologue to Mission 20, plus the hidden-area and no-damage feats scattered through them (destroy a certain wall, avoid a menace from above, clear missions with specific characters, the no-continues Missions 19-20 clear).",
                "The achievements here: Fall from Grace (Clear the Prologue Mission.); Protect the People (Defeat all enemies in Mission 01.); Where the Red Orbs Grow (Collected Red Orbs from an unexpected spot in Mission 02.); Reunion (Clear Mission 03.); Backroad (Destroy a certain wall in Mission 04.); Break a Leg (Fend off a menace from above in Mission 05.); End of the Line (Clear Mission 06.); Share the Pain (Clear Mission 07 with both Nero and V.); Light in the Darkness (Clear Mission 08.); Eagle-Eyed (Destroy a certain wall in Mission 09.); This Ain't Over (Clear Mission 10.); Don't Mess with the Best (Use proper timing to get a leg up in a close-quarters battle against the boss in Mission 11.); The Qliphoth (Clear Mission 12.); Each In His Own Way (Clear Mission 13 with Nero, V, and Dante.); Gotta Hurry (Clear Mission 14.); Slick Moves (Proceed with caution and avoid unneeded damage in Mission 15.); Obedience Training (Go on the offensive without relying on brute force in the Mission 16 boss battle.); Back to Life (Clear Mission 17.); Man on a Mission (Clear Mission 18.); Battle for the Ages (Clear Missions 19 and 20 without using continues (any difficulty except Heaven or Hell).)."
            ]
        },
        {
            "heading": "Style Ranks & Combat",
            "body": [
                "The combat-flair achievements: Stylish Rank S, SS and SSS combos, defeating 5 enemies in 1 second, an unexpected conclusion, 60 minutes airborne, the weapon-restricted Mission 11 and Mission 07 clears, the Mission 05 pet-protection clear, and Dr. Faust / Devil Breaker usage.",
                "The achievements here: Not Too Shabby (Perform a Stylish Rank S combo.); Steppin' up the Style (Perform a Stylish Rank SS combo.); Seriously Stylish Slaying! (Perform a Stylish Rank SSS combo.); The Quick and the Dead (Defeat 5 enemies in 1 second.); Well I'll Be Damned (Wield overwhelming power to exact an unexpected conclusion.); I Believe I Can Fly (Rack up a total of 60 minutes in the air by jumping or other means.); Jackpot! (Collect more than 1,000,000 Red Orbs total.); Demon Destroyer (Defeat 1,000 enemies total.); Rearm and Repeat (Collect more than 100 Devil Breakers during missions.); Dante The Gambler (Use more than 500,000 Red Orbs total with Dr. Faust.)."
            ]
        },
        {
            "heading": "S Ranks, Skills & Milestones",
            "body": [
                "The grind: S rank on all missions (Hell of a Hunter) and on all missions on every difficulty except Heaven or Hell (Worthy of Legend), all secret missions, every character's full skill set (Nero, Dante, V), maxed vitality and Devil Trigger gauges, 1,000,000 Red Orbs, 1,000 enemies defeated and 100 Devil Breakers collected.",
                "The achievements here: Secrets Exposed (Clear all secret missions.); Hell of a Hunter (Clear all missions with S rank.); Worthy of Legend (Clear all missions with S rank on all difficulties except Heaven or Hell.); Nothing's Impossible (Acquire all of Nero's skills.); Be the Legend (Acquire all of Dante's skills.); Demon Breeder (Acquire all of V's skills.); Physical Perfection (Upgrade your vitality gauge to max.); The Devil's Own (Upgrade your Devil Trigger Gauge to max.); A New Job (Accept a new job from Morrison after the Red Grave incident.); Who Needs Weapons Anyway? (Clear Mission 11 without equipping a weapon set for Dante (any difficulty except Heaven or Hell).); Unarmed and Dangerous (Beat Mission 07 without any starting Devil Breakers equipped (any difficulty except Heaven or Hell).); Pet Protection (Clear Mission 05 without V's demons getting stalemated (any difficulty except Heaven or Hell).)."
            ]
        },
        {
            "heading": "Bloody Palace & Vergil",
            "body": [
                "Clearing the Bloody Palace with Nero, Dante and V, and the Vergil (Special Edition / free update) content: clearing all missions as Vergil, all of his skills, the Yamato-only Mission 19 clear and the Bloody Palace as Vergil.",
                "The achievements here: Slam Dunk (Clear the Bloody Palace with Nero.); Too Easy (Clear the Bloody Palace with Dante.); Rest in Peace (Clear the Bloody Palace with V.); Sibling Rivalry (Clear all missions as Vergil.); Concentrated Strength (Acquire all of Vergil's skills.); Heart of a Swordsman (Clear Mission 19 as Vergil without using any weapons other than Yamato. (Heaven or Hell excluded)); This is Power (Clear the Bloody Palace as Vergil.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First clear on Devil Hunter, learning the missions and grabbing the secret-feat achievements as you go.",
                "2. Grind Red Orbs (replay a high-orb mission or Mission 19) and buy every skill for Nero, Dante and V, then Vergil - clears Nothing's Impossible, Be the Legend, Demon Breeder, Concentrated Strength, Physical Perfection and The Devil's Own.",
                "3. Do Heaven or Hell and Hell and Hell just for Stairway to Heaven and Highway to Hell, and Son of Sparda / Dante Must Die on the way to the S-rank grind.",
                "4. S-rank every mission on Devil Hunter/Son of Sparda/Dante Must Die for Hell of a Hunter and Worthy of Legend - the big time sink.",
                "5. Do the Bloody Palace with each character and the Vergil-specific achievements last.",
                "Tip: S rank is scored on time, style, items used and damage - a fully-skilled character with a memorised route and no items used will S-rank most missions on the first try, so do the skill grind before the S-rank grind, not after."
            ]
        }
    ]
};
