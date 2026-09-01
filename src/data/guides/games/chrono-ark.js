// Chrono Ark Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chrono-ark.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1188930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "chrono-ark-achievement-guide",
    "category": "game",
    "gameSlug": "chrono-ark",
    "icon": "🃏",
    "title": "Chrono Ark Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Chrono Ark (9 hidden). Covers clearing the game with each of the two dozen playable characters, the Expert difficulty and Blood Mist challenges, the modifier runs, the Investigator friendships, and the true and post-game endings. Nine of the achievements ship no Steam description - four are Steam-hidden (a jump easter egg and the three story endings) and five are visible modifier-clear achievements that Steam ships blank - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Chrono Ark has 40 Steam achievements. The bulk of the list is 'clear the game with character X' for the whole roster, the Expert-difficulty clear, the five Blood Mist challenge tiers, and the Investigator friendship milestones. Nine achievements ship no Steam description: four are Steam-hidden (the 'Jump, but 4 times' easter egg, the first ending 'Happiness within the Birdcage', the true ending 'End of Project', and the post-game story 'Farewell'), and five are visible modifier-clear achievements that Steam simply ships with a blank description (Lucy's Adventure, All Random, Everything is Once, Lone Wolf, Quick Building).",
                "The catalog marks it difficulty 3 - it is a demanding roguelike deckbuilder, but the achievement list is completion-based rather than skill-gated beyond the Expert and Blood Mist 4 clears. Nothing is missable; every character, difficulty and ending can be attempted freely.",
                "Tip: the two ending achievements branch on one run - 'End of Project' (the true ending) needs at least one Investigator at gold-level friendship before the final battle and the 'I won't accept it' choice; 'Happiness within the Birdcage' is what you get without those, so plan the friendship grind before your ending run."
            ]
        },
        {
            "heading": "Character Clears & Challenges",
            "body": [
                "The jump easter egg, clearing the game with each playable character (Azar, Joey, Lian, Miss Chain, Pressel, Trisha, Hein, Iron Heart, Silverstein, Sizz, Charon, Phoenix, Narhan, Huz, Selena & Helia, Johan, Ilya, Leryn, Momori), the Expert-difficulty clear, the modifier runs, and Blood Mist challenges 1 to 4 and the Blood Mist 4 clear.",
                "The achievements here: Jump! (The most important game element); Jump, but 4 times (Press jump four times in a single stage (using three Vitality/Swiftness Scrolls to enable extra jumps).); Clear Expert Difficulty (Clear the game on Expert Difficulty.); Illusion Sword! (Clear the game with Azar.); Master Alchemist (Clear the game with Joey.); Parry Master (Clear the game with Lian.); Burnnn! (Clear the game with Miss Chain.); Almighty Pressel... (Clear the game with Pressel.); Shadow (Clear the game with Trisha); Fake Madness (Clear the game with Hein.); You Shall Not Pass! (Clear the game with Iron Heart); Sharpshooter (Clear the game with Silverstein.); So, is her name Eve? (Clear the game with Sizz.); Little Evil(?) Friend (Clear the game with Charon.); *Burps* (Clear the game with Phoenix.); Master Psychologist (Clear the game with Narhan.); That Sounds Perfect (Clear the game with Huz.); Perfect Rotation (Clear the game with Selena & Helia.); War of Arrows (Clear the game with Johan); Power of Frost, Thunder, and Vodka (Clear the game with Ilya); Lucy's Adventure (Clear the game in Lucy's Adventure mode (Steam ships this achievement with no description).); All Random (Clear the game with the 'All Random' modifier (Steam ships this achievement with no description).); Everything is Once (Clear the game with the 'Everything is Once' modifier (Steam ships this achievement with no description).); Lone but not Lonely Wolf (Clear the game with the 'Lone Wolf' modifier - a single character (Steam ships this achievement with no description).); Quick Building (Clear the game with the 'Quick Building' modifier (Steam ships this achievement with no description).); Leap Through Time (Clear the game with Leryn.); A New Challenge (Challenge Blood Mist 1); Another Step (Challenge Blood Mist 2); Into the Abyss (Challenge Blood Mist 3); Push Your Limits (Challenge Blood Mist 4); Blood Mist Master (Clear Blood Mist 4); Momori☆Victory! (Clear the game with Momori.)."
            ]
        },
        {
            "heading": "Friendships & Endings",
            "body": [
                "Obtaining a Token of Friendship, befriending one, five and every Investigator, seeing everyone's true feelings, the first ending, the true ending, and the post-game story.",
                "The achievements here: Wanna Be Friends? (Obtain a Token of Friendship for the first time.); Best Friend (Become friends with an Investigator.); Cutie of the Investigators (Become friends with 5 Investigators.); Happiness within the Birdcage (Reach the first ending - the final battle without meeting the true-ending requirements (no gold-level friendship, or choosing 'I'll accept it').); End of Project (Unlock the true ending - have at least one Investigator at gold-level friendship before the final battle, then choose 'I won't accept it'.); Farewell (View the post-game story ('Story of the Real World' in the Ark Archive).); Everyone’s Friend (Become friends with every Investigator.); Irreplaceable Bonds (See everyone’s true feelings.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn the game and clear it once for the first ending ('Happiness within the Birdcage').",
                "2. Grind Investigator friendships to gold level, then do a run choosing 'I won't accept it' for the true ending ('End of Project').",
                "3. View the post-game story in the Ark Archive for 'Farewell'.",
                "4. Clear the game with every playable character, and do the Expert difficulty and modifier runs.",
                "5. Work up the Blood Mist challenge tiers to Blood Mist 4.",
                "Tip: 'Jump, but 4 times' needs three Vitality/Swiftness Scrolls used at once to stack extra jumps - set it up on an easy early stage rather than mid-fight."
            ]
        }
    ]
};
