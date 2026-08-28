// A Little to the Left's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/a-little-to-the-left.json), whose 65
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1629520 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - all
//   65 ship a real, official Steam description, quoted directly below.
//   A Little to the Left has no Steam-hidden achievements.
// - Many of the "unique" puzzle achievements have deliberately cryptic
//   official descriptions ("Where are your manners?", "What a mess").
//   Those are Steam's real text, quoted as-is; the guide explains what
//   each actually is (a secret alternate solution or interaction on a
//   specific puzzle) without walking through the solution step by step.
// - 30 of the 65 belong to the paid Cupboards & Drawers and Seeing
//   Stars DLC and say so in their own descriptions - split into their
//   own sections here, matching this catalog's DLC-inclusion precedent
//   (Cuphead, Guacamelee! 2).
export const GUIDE = {

    slug: "a-little-to-the-left-achievement-guide",
    category: "game",
    gameSlug: "a-little-to-the-left",
    icon: "🧦",
    title: "A Little to the Left Achievement Guide",
    summary: "A practical guide to all 65 Steam achievements in A Little to the Left - the campaign and its 100% completion, the Daily Tidy streaks, the lifetime tidy counts, the secret puzzle solutions, and the two DLC packs.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "A Little to the Left has 65 Steam achievements and none are hidden. 30 of them belong to the paid Cupboards & Drawers and Seeing Stars DLC. Nothing is missable - every level can be replayed from the level select, and every solution can be found later.",
                "The base game splits into: finishing and then 100%-ing the campaign, keeping up Daily Tidy streaks, lifetime \"tidy N items\" counts, and a set of secret alternate puzzle solutions with cryptic names.",
                "Tip: play the campaign once for fun, then use the level-select \"find all solutions\" view for the 100% pass. Most levels have two or three valid solutions, and the game shows you exactly which levels still have one missing."
            ]
        },

        {
            heading: "Campaign",
            body: [
                "Chapter completion: Home Sweet Home, Lost Recipe, Nitty Gritty, Inner Nature, and Near Earth Organizer for chapters 1 to 5, and A Cozy Completion for the whole campaign.",
                "100% completion: Guests Coming Over, Clean Kitchen, Spring Cleaning, One With Nature, and Encounters of the Tidy Kind for each chapter at 100%, and Tidy Triumph for finding every solution in the base game.",
                "Solution feats: Seeing In A New Light (solve a puzzle multiple ways) and Triple Threat (solve one three ways). Hint and skip achievements: Helpful Hints (take a hint), One Clean Page (fully reveal a hint), Hint Hunter (reveal 10 hints), Let It Be (skip a level with \"Let It Be\"), What Is Will Be (skip 10 levels that way), No Squint Hint (complete the game with no hints, on a clean playthrough), and No Mess Left Behind (finish the campaign without skipping a level, on a clean playthrough)."
            ]
        },

        {
            heading: "Daily Tidy",
            body: [
                "The Daily Tidy is one fresh puzzle per day. Total played: Today's Tidy (first), Tidy Toddler (3), My Lucky Number (7), Neat As A Pin (14), Flip the Calendar (30), Halfway There (50), and Three-Quarter Sorter (75).",
                "Consecutive days: Sqweeky Clean (7 in a row), Two-week Sweep (14 in a row), and Calendar Collector (30 in a row). Highly Decorated asks for all Daily Tidy badge ranks.",
                "Tip: the consecutive-day achievements are the longest thing on the list by real time. Start the Daily Tidy on day one and just don't miss a day - there is no way to speed this up."
            ]
        },

        {
            heading: "Lifetime Tidy Counts",
            body: [
                "Triple Digit Tidier (tidy 100 items), Categorization Cadet (250), Adept Aligner (500), and Extraordinary Organizer (1,000) are running totals across every level and Daily Tidy you complete, so they finish on their own during a full playthrough."
            ]
        },

        {
            heading: "Secret Puzzle Solutions",
            body: [
                "These reward a secret alternate solution or a hidden interaction on one specific puzzle, which is why their names and descriptions are cryptic. The cat-interference levels give Bad Kitty (\"Where are your manners?\") and Keep Away (\"Quick like a cat\"). The tower and rainbow puzzles give Draw Me A Rainbow, Rainbow To The Moon, and Unstable Stacker. Others are Fun for Humans Too, Exacting Eggs (solve the egg carton in the fewest moves), Harmonized Purr, Path of Destruction (\"What a mess\"), and Sweep Them On The Floor.",
                "Be The Chaos is the odd one out - bat every name and job title around in the credits sequence."
            ]
        },

        {
            heading: "Cupboards & Drawers DLC",
            body: [
                "The Other Side (complete the DLC) and Everything Put Away (find all its solutions at 100%).",
                "Its secret-solution achievements: Where Is My Cap? (\"Every cap has a new owner, but no two owners traded their caps\"), Can Do Altitude (\"That's one epic stack\"), A Balanced Meal (\"All you can eat\"), In No Rush (\"Sit with the cat for a while\"), Now You’re Playing With Power (\"A blast to the past\"), and Show Off (\"Be proud of your accomplishments\")."
            ]
        },

        {
            heading: "Seeing Stars DLC",
            body: [
                "Shooting Star (complete the DLC's main campaign), Nine Lives (complete its bonus finale), and Full Orbit (find all 100 of its solutions).",
                "Its secret-solution achievements: Sticky Wand (\"Introducing our newest flavour\"), I'll Take My Water Neat (\"I like my drinks lukewarm\"), Whatcha Lookin' At? (\"I'll go left, you go right\"), Keeping Count (solve the Music Box with the Counter set to the hidden number), Dead End Boss Gems (\"That doesn't look like anything\"), Top Heavy Slice (\"All for one\"), and Grabbed the Wrong End (\"Ouch, that's sharp\")."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Start the Daily Tidy on your very first day and never miss one - Sqweeky Clean, Two-week Sweep, and especially Calendar Collector gate the whole completion on real-world time.",
                "Play the base campaign for the five chapter clears and A Cozy Completion, then do a 100% pass from level select for the per-chapter 100% achievements and Tidy Triumph, picking up Seeing In A New Light and Triple Threat naturally.",
                "Hunt the secret puzzle solutions (Bad Kitty, Keep Away, Draw Me A Rainbow, Rainbow To The Moon, Unstable Stacker, Fun for Humans Too, Exacting Eggs, Harmonized Purr, Path of Destruction, Sweep Them On The Floor) and grab Be The Chaos in the credits. Do a clean no-hint, no-skip run for No Squint Hint and No Mess Left Behind.",
                "If you own the DLC, complete and 100% Cupboards & Drawers (The Other Side, Everything Put Away, plus its six secret solutions) and Seeing Stars (Shooting Star, Nine Lives, Full Orbit, plus its seven secret solutions). The tidy-count achievements (Triple Digit Tidier through Extraordinary Organizer) and Daily Tidy totals fill in across all of it."
            ]
        }

    ]

};
