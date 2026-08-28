// Hotline Miami Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hotline-miami.json), whose 35 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   219150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 26 of 35 ship a real,
//   official Steam description, quoted verbatim below.
// - The 9 hidden achievements ship no Steam description; they are the
//   three endings, the letter puzzle and several easter-egg feats.
//   Their conditions here are curatorial, cross-checked against the
//   Hotline Miami Wiki, XboxAchievements/PlayStationTrophies and Steam
//   community guides, and kept spoiler-light.
export const GUIDE = {
    "slug": "hotline-miami-achievement-guide",
    "category": "game",
    "gameSlug": "hotline-miami",
    "icon": "🎭",
    "title": "Hotline Miami Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Hotline Miami - the combo and A+ rank achievements, the kill feats and lifetime counts, the weapon and mask collection achievements, and the 9 hidden achievements (the endings, the puzzle, and several easter-egg feats), covered with spoiler-light conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hotline Miami has 35 Steam achievements, 9 of them hidden. The visible list is combos, A+ ranks, kill feats and cumulative counts, and the weapon/mask collections. The hidden set is the three endings, the letter puzzle, and a handful of easter-egg feats.",
                "Nothing is missable - every chapter is replayable from the menu and counts persist - but Get A Life (A+ on every chapter) is demanding, and Achievement Whore requires every other achievement.",
                "Tip: play the story once for the endings and the mask/weapon collections, then chapter-select for the combo and kill feats and to grind A+ ranks. The letter puzzle (Eye For Details, The Boss, This Is It) is done by finding all 16 pieces and entering the password in the epilogue."
            ]
        },
        {
            "heading": "Combos & Rank",
            "body": [
                "The combo achievements (4x up to 12x) and the rank achievements: an A+ on any chapter, and an A+ on every chapter (Get A Life).",
                "The achievements here: Combo Beginner (Perform a 4x combo); Combo Intermediate (Perform a 6x combo); Combo Pro (Perform a 8x combo); Combo Master (Perform a 10x combo); Combo King (Perform a 12x combo); Aced It (Get an A+ on any chapter); Get A Life (Get A+ on all the chapters)."
            ]
        },
        {
            "heading": "Kill Feats & Counts",
            "body": [
                "The lifetime counts (1989 kills, 99 dogs, 200 glass panels, die 1000 times, go to the car 60 times), the brick and thrown-weapon trick kills, the human shield, performing every ground kill, and completing chapter five barehanded.",
                "The achievements here: 1989 (Kill 1989 enemies); Dog Lover (Kill 99 dogs); Let In Some Air (Destroy 200 glass panels); Nigel Lowrie (Use a human shield); Two Birds With One Stone (Kill two enemies with the same brick in one throw); Plain Luck (Kill three or more enemies with the same brick in one throw); Playing Pool (Kill an enemy with a brick bounced against a wall); Domino Effect (Throw a weapon at an enemy so that his weapon hits another); Always On Top (Perform every ground kill in the game); These Are My Guns (Complete chapter five barehanded); Karma (Die 1000 times); 60 To Car (Go to the car 60 times)."
            ]
        },
        {
            "heading": "Weapon & Mask Collections",
            "body": [
                "Collecting all masks, wearing all masks at least once, unlocking all weapons, using every gun / melee / throwing weapon at least once, and Achievement Whore (all other achievements).",
                "The achievements here: Zoo Keeper (Collect all the masks); Sounds of Animals Fighting (Wear all masks at least once); I Got New Friends (Unlock all weapons); Guns For Show (use all guns at least once); Knife For Pros (use all melee weapon at least once); Pitcher (use all throwing weapon at least once); Achievement Whore (Unlock all achievements)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Nine achievements are hidden and ship no Steam description - the three endings, the letter puzzle, and several easter-egg feats:",
                "The achievements here: The End? (Complete the final chapter (the standard ending).); That's It? (Reach the epilogue chapter that follows the standard ending.); This Is It (Reach the secret ending: solve the puzzle (all 16 pieces), then use the computer as the Biker in the epilogue and finish the game.); Smell Something Burning (Kill the thug in the second-floor bathroom of \"Clean Hit\" with the hidden Fire Axe.); Batman (Reverse your controls in the options so they read normally while wearing the Nigel bat mask.); Sewer Alligator (Revisit the man in the sewers while wearing the mask he gave you.); Cat Fight (Defeat the two panthers in the final chapter, \"Showdown\", while wearing the Brandon panther mask.); Eye For Details (Find all 16 hidden puzzle pieces across the game.); The Boss (Solve the puzzle (its solution is the password for the secret ending).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to completion for The End? and That's It?, collecting masks and unlocking weapons as you go.",
                "2. Find all 16 puzzle pieces across the chapters (Eye For Details), solve the puzzle (The Boss), then use the computer as the Biker in the epilogue for the secret ending (This Is It).",
                "3. Do the easter-egg feats: Smell Something Burning (\"Clean Hit\" fire axe), Batman (reversed controls + Nigel mask), Sewer Alligator (revisit the sewer man in his mask), Cat Fight (Brandon mask vs the panthers in \"Showdown\").",
                "4. Chapter-select for the combo achievements and the kill/trick feats (Two Birds With One Stone, Plain Luck, Playing Pool, Domino Effect, Always On Top, These Are My Guns).",
                "5. Grind A+ ranks for Get A Life - the hardest part - and Achievement Whore pops for the last one.",
                "Tip: A+ requires high combo, mobility, boldness and flexibility scores - it rewards fast, aggressive, weapon-varied clears, so learn a fast route per chapter and never stop moving."
            ]
        }
    ]
};
