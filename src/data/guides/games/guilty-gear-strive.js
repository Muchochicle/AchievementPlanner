// GUILTY GEAR -STRIVE- Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/guilty-gear-strive.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1384160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 17 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides / official wikis) and is a curatorial summary. Every non-hidden
//   description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "guilty-gear-strive-achievement-guide",
    "category": "game",
    "gameSlug": "guilty-gear-strive",
    "icon": "⚔️",
    "title": "GUILTY GEAR -STRIVE- Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in GUILTY GEAR -STRIVE- (17 hidden). 17 of the 39 are hidden, researched from Steam Community and TrueSteamAchievements guides - mostly Arcade Mode difficulty-branch markers, mission completions, online-mode milestones, and specific in-match techniques Steam ships with no description.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GUILTY GEAR -STRIVE- has 39 Steam achievements, 17 of them hidden. STRIVE itself is the completionist achievement for earning all the others. Arcade Mode branches into Normal/Hard/Extreme difficulty paths depending on how well you play, and 3 of the hidden achievements (Armor-Clad Faith, Heart is Blazing, Messiah Will Not Come) are tied to specific branches - missable if you don't reach the right difficulty path during a run. A 4th, Play the Hero till I Die, is winning a round against a mysterious Survival Mode challenger.",
                "Further hidden achievements cover Mission Mode (3 combo missions, 3 character match-up missions), online modes (fighting in the Rank Tower, fighting in the Open Park, completing the Network Mode tutorial), reaching character level 30, and a long list of specific in-match techniques: reaching a Positive Bonus state without a Wall Break, winning with 30% or less health remaining, entering the Afro state via Faust's command grab, winning while in Dragon Install as Ky, and playing 3 different characters.",
                "The catalog marks it difficulty 4 and missable:true because the 3 Arcade Mode difficulty-branch achievements can be permanently missed for that playthrough if your performance routes you down the wrong branch - you'd need to replay Arcade Mode to catch them."
            ]
        },
        {
            "heading": "Completion & Arcade Mode",
            "body": [
                "STRIVE (earn every other achievement), defeating the Arcade boss with one character, winning your first versus match, finishing the tutorial, completing a Lv.1 mission, and the hidden Arcade Mode difficulty-branch achievements Armor-Clad Faith, Heart is Blazing and Messiah Will Not Come.",
                "The achievements here: STRIVE (Obtain all other achievements.); That's Heavy... ([ARCADE] Defeated the Boss with 1 character.); Armor-Clad Faith ([ARCADE] Reach the Extreme difficulty branch by completing the first 6 stages without losing a round.); Heart is Blazing ([ARCADE] Reach the Hard difficulty branch and clear its harder, partner-assisted Stage 8.); Messiah Will Not Come ([ARCADE] Defeat the powerful boss at the end of the Extreme or Hard difficulty branch.); Play the Hero till I Die ([SURVIVAL] Win a round against the mysterious challenger.); I'll have a Little of Your Time ([VERSUS] Win against a CPU opponent.); Battle Ready ([TUTORIAL] Finished the tutorial until the end. (Excluding Team of 3 Mode))."
            ]
        },
        {
            "heading": "Missions & Survival",
            "body": [
                "The hidden Gaze of the Strong (3 combo missions) and At the End of the Struggle (3 character match-up missions), 30 minutes of training, watching 3 replays, and the hidden Extinct Species (spend 100,000W$), Gateway to the Tower and To the World Outside (online Rank Tower and Open Park matches), The Room where Demons Dwell (Network Mode tutorial), and Day 1 Bounty Hunter (reach character level 30), plus the hidden Play the Hero till I Die (win a round against Survival Mode's mysterious challenger).",
                "The achievements here: Knowledge is Power ([MISSION] Completed 5 difficulty Lv.1 mission.); Gaze of the Strong ([MISSION] Completed 3 combo missions.); At the End of the Struggle ([MISSION] Completed 3 character match-up missions.); Gym Regular ([TRAINING] Trained for more than 30 min.); Begin Assessment of the Target ([REPLAY] Watched 3 replays.); Extinct Species (Spent 100,000 World Dollars.); Gateway to the Tower ([ONLINE MATCH] Fought a match in the Rank Tower.); To the World Outside ([ONLINE MATCH] Fought a match in the Open Park.); The Room where Demons Dwell ([ONLINE MATCH] Completed the Network Mode tutorial.)."
            ]
        },
        {
            "heading": "Customization & Match Milestones",
            "body": [
                "Fully customizing your avatar, fishing for the first time, 100 matches played, 10 Wall Breaks, 5 Homing Jumps, a Homing Jump knockdown, 100 Roman Cancels, 5 special-move Roman Cancel cancels, 10 dash-input Roman Cancels, 10 blue Psych Bursts, a MAX R.I.S.C. Gauge counter hit, 100 Faultless Defense blocks, and 100 Instant Blocks.",
                "The achievements here: Day 1 Bounty Hunter (Reached character level 30 with one character.); This Year's Fashion Trend (Customize the hair, top, bottom, shoes, hat and equipment of your avatar.); Beautiful Catch, Ain't It? (Fished for the first time.); Everlasting Thirst (Played 100 matches. (Excluding Tutorial Mode and Team of 3 Mode)); Destruction and Creation (Perform 10 Wall Breaks against an opponent while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); A Pleasant Flight (Perform 5 Homing Jumps against an opponent while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Strike from Heaven (Knock the opponent down during a Homing Jump while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Manipulator of Time (Perform Roman Cancel 100 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); In the Blink of an Eye (Cancel a Roman Cancel with a special move 5 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Nothing Personal, Kid (Perform dash input Roman Cancel 10 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); You've Fallen Right into my Trap (Successfully land a blue Psych Burst 10 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Ready to Meet Your Maker? (Successfully land a counter hit on an opponent with MAX R.I.S.C. Gauge  while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Extraordinary Defensive Instinct (Successfully block an attack with Faultless Defense 100 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode))."
            ]
        },
        {
            "heading": "Advanced Techniques",
            "body": [
                "The hidden I'm Overflowing with Power (reach a Positive Bonus state without a Wall Break) and Give It My All (win with 30% or less health remaining), a perfect-round win, 10 punished ground-throw whiffs, and the hidden Around the World, No Return High Risk (Faust's Afro state), Behold the Power of My Lightning (win in Ky's Dragon Install) and Triple Cross (play 3 different characters).",
                "The achievements here: Shine When Polished (Successfully block an attack with Instant Block 100 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); I'm Overflowing with Power (Reached a Positive Bonus state without performing a Wall Break while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Give It My All (Defeated an opponent while at 30% or less health remaining while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); I'm Your God Now (Defeated the opponent with a perfect while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Not Missing an Opportunity (Punish the opponent's ground throw whiff with a jumping attack 10 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Around the World (Won matches with characters from 3 different regions of the world. (Excluding Tutorial Mode and Team of 3 Mode)); No Return, High Risk (Entered the Afro state after being hit by Faust's command grab while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Behold the Power of My Lightning (Defeated the opponent while in Dragon Install as Ky Kiske while in a match. (Excluding Tutorial Mode and Team of 3 Mode)); Triple Cross (Played matches using 3 different characters. (Excluding Tutorial Mode))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Arcade Mode carefully, tracking which difficulty branch you're on, to catch Armor-Clad Faith, Heart is Blazing and Messiah Will Not Come before they become missable for that run.",
                "2. Clear the tutorial, complete Mission Mode's combo and match-up missions, and try Survival Mode for its mysterious-challenger achievement.",
                "3. Play online in both the Rank Tower and Open Park, and run through the Network Mode tutorial.",
                "4. Grind versus matches (online or against CPU) for the technique tallies - Wall Breaks, Homing Jumps, Roman Cancels, Psych Bursts, Faultless Defense and Instant Block counts.",
                "5. Mop up the specific one-off techniques (Faust's Afro state, Ky's Dragon Install win, a Positive Bonus without a Wall Break, a sub-30%-health win) and play 3 different characters for Triple Cross.",
                "Tip: since the 3 Arcade Mode branch achievements are genuinely missable per playthrough, replay Arcade Mode once deliberately losing a round early to route into the Hard/Extreme branch if you missed it the first time."
            ]
        }
    ]
};
