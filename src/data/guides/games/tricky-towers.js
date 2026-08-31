// Tricky Towers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tricky-towers.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   437920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tricky-towers-achievement-guide",
    "category": "game",
    "gameSlug": "tricky-towers",
    "icon": "🧱",
    "title": "Tricky Towers Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in Tricky Towers - none are hidden. Covers the single-player trials and unlocks, and the online and endless-challenge achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tricky Towers has 29 Steam achievements and none are hidden. Seventeen are single-player trials and unlocks - unlocking each trial tier (apprentice, pro, expert, master), completing all 50 trials ('Master wizard'), trial #50 with no heart lost ('Ultimate Wizard'), and specific trial restrictions (no magic on #40 and #21, no rotation on #30, no spell pickup on #6). Twelve are online and endless challenges - winning an online match, cup and every mode/difficulty ('Mode master'), 66 and 99 bricks in Endless Survival, a 99-brick endless puzzle tower, and clean online survival wins.",
                "The catalog marks it difficulty 4. 'Ultimate Wizard' (trial #50 flawless), 'Master wizard' (all 50 trials, several of which are hard) and 'Mode master' (an online win in every mode at every difficulty) are the real walls.",
                "Tip: grind the trials in order for the tier unlocks and 'Master wizard', do the flawless and restricted-trial achievements as you replay, and get the online achievements in a private lobby with a friend."
            ]
        },
        {
            "heading": "Trials & Unlocks",
            "body": [
                "Trial #50 flawless ('Ultimate Wizard'), all trials ('Master wizard'), 99 bricks flawless in endless survival, #40 with no magic, a sub-80-second clean race win, #6 with 3 hearts and no spell, dropping the moon, surviving wave 8, #8 with 52+ seconds left, 99 bricks in Endless Survival, #30 with no rotation, 7 bricks with one ivy, 'Mode master', and unlocking the apprentice, pro, expert and master trial tiers.",
                "The achievements here: Ultimate Wizard (Complete trial #50 without losing a heart.); Master wizard (Complete all trials.); Perfect start (Build a tower with 99 bricks in endless survival challenge without losing any hearts.); Bare bones (Complete trial #40 without using any magic.); Speed. Precision. (Win a normal race match within 80 seconds without dropping any bricks.); Like a glove… (Finish trial #6 with 3 hearts left without picking up a spell.); In the moonlight (Drop the moon.); Survivor (Survive the 8th wave in survival special mode or in endless survival challenge.); Think fast! (Finish trial #8 with at least 52 seconds left on the clock.); 99 Bricks! (Build a tower with 99 bricks in Endless Survival Challenge.); No need to rotate (Complete trial #30 without rotating a brick.); Green fingers (Connect 7 bricks with 1 ivy spell.); Mode master (Win an online game of every mode in every difficulty at least once.); Almost there (Unlock the master trials.); On the right track (Unlock the expert trials.); Doing good (Unlock the pro trials.); Baby steps (Unlock the apprentice trials.)."
            ]
        },
        {
            "heading": "Online & Endless Challenges",
            "body": [
                "An online match win, 66 bricks in endless survival, a roof 180 in race mode, 20+ bricks in a puzzle match, #20 finished one unit below the zapper, #21 with no magic, stomping 5 bubbled bricks without dropping them, using every spell, an online survival win with 1 heart, a no-magic online survival win, a 99-brick endless puzzle tower, and winning an online cup.",
                "The achievements here: Match winner (Win an online match.); Brick stacker (Place 66 bricks in endless survival challenge.); Trickster (Do a 180 with the roof in race mode.); Architect (Get a brick count of 20 or higher in a puzzle match.); Save some room (Finish trial #20 one unit below the zapper.); Bigger than magic (Finish trial #21 without using any magic.); You stay there! (Stomp on 5 bubbled bricks without dropping them in the water.); All-round magician (Use all magic spells once.); Close call (Win an online survival match with 1 heart left.); Show off (Win an online normal survival match without using any magic.); Shadow stacker (Build a tower of 99 bricks in endless puzzle mode.); Cup winner! (Win an online cup.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the trials in order - this unlocks each tier (apprentice -> master) and works toward 'Master wizard'.",
                "2. As you replay trials, do the restriction and flawless achievements (#6, #8, #21, #30, #40, #50 flawless).",
                "3. Grind Endless Survival and Endless Puzzle for 66, 99 and 99-puzzle brick towers.",
                "4. Play online with a friend for the match, cup and 'Mode master' achievements.",
                "Tip: 'Ultimate Wizard' (trial #50 with no heart lost) is the hardest - learn #50's layout first on normal attempts, then use light and slow spells sparingly to guarantee a clean finish."
            ]
        }
    ]
};
