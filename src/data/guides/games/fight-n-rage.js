// Fight'N Rage Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fight-n-rage.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   674520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fight-n-rage-achievement-guide",
    "category": "game",
    "gameSlug": "fight-n-rage",
    "icon": "👊",
    "title": "Fight'N Rage Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Fight'N Rage - none are hidden. Covers the difficulty and mastery achievements, and the 1CC, ranking and ending achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fight'N Rage has 20 Steam achievements and none are hidden. Thirteen are difficulty and mastery - clearing the game on Easy, Normal, Hard and Hardest, earning each of the three characters' Black Belts and all their costumes, getting all Complements and all Characters from the shop, and a clear at any Extra Speed. The other seven are a One Credit Clear on Normal or harder, Rank S with all characters in Score Attack, Time Attack and Survival modes, and discovering 25% / 50% / 100% of the game's many endings.",
                "The catalog marks it difficulty 5. The Hardest clear, the One Credit Clear, Rank S in all three modes with every character, and 100% of the branching endings make this a genuine test.",
                "Tip: use normal runs to unlock characters, costumes and Complements and to see endings, then dedicate practice to the Hardest clear, the 1CC and the Rank S runs."
            ]
        },
        {
            "heading": "Difficulty & Mastery",
            "body": [
                "Clearing the game on Easy, Normal, Hard and Hardest, earning Gal's, Ricardo's and F.Norris' Black Belts, all their costumes, all Complements, all Characters from the shop, and a clear at any Extra Speed.",
                "The achievements here: Child's Play (Finish the game at Easy Difficulty.); Good Enough (Finish the game at Normal Difficulty.); More Than Good (Finish the game at Hard Difficulty.); Hardcore Player (Finish the game at Hardest Difficulty.); Mastered Gal (Get the Gal's Black Belt.); Mastered Ricardo (Get the Ricardo's Black Belt.); Mastered F.Norris (Get the F.Norris' Black Belt.); Gal Completionist (Get all Gal's Costumes.); Ricardo Completionist (Get all Ricardo's Costumes.); F.Norris Completionist (Get all F.Norris' Costumes.); Complement Completionist (Get All Complements.); Recruiter (Get All Characters.); Faster! (Finish the game playing at any Extra Speed.)."
            ]
        },
        {
            "heading": "1CC, Rankings & Endings",
            "body": [
                "A One Credit Clear on Normal or harder, Rank S with all characters in Score Attack, Time Attack and Survival modes, and discovering 25%, 50% and 100% of the game's endings.",
                "The achievements here: One Credit Clear (Finish the game without use continues at Normal Difficulty or Harder.); Score Attack Master (Get Rank S with All Characters at Score Attack Mode.); Ending Completionist 25% (Discover the 25% of the Endings.); Ending Completionist 50% (Discover the 50% of the Endings.); Ending Completionist 100% (Discover All the Endings.); Time Attack Master (Get Rank S with All Characters at Time Attack Mode.); Survival Master (Get Rank S with All Characters at Survival Mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normal runs to unlock all characters, all Complements and every costume, and to see 25% then 50% of the endings.",
                "2. Explore the branching paths and secret routes for 100% of the endings.",
                "3. Earn each character's Black Belt (a mastery challenge run).",
                "4. Do a One Credit Clear on Normal or harder, and a Hardest-difficulty clear.",
                "5. Grind Score Attack, Time Attack and Survival to Rank S with every character.",
                "Tip: the Black Belt runs and the 1CC reward defensive play - learn each character's safe crowd-control tools and the boss patterns rather than pushing for style points."
            ]
        }
    ]
};
