// Unravel Two Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/unravel-two.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1225570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "unravel-two-achievement-guide",
    "category": "game",
    "gameSlug": "unravel-two",
    "icon": "🧶",
    "title": "Unravel Two Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Unravel Two - none are hidden. Covers the seven chapter completions, the per-chapter no-death runs and gold-medal times, the bonus levels, the co-op and customisation achievements, and a handful of level-specific trick feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Unravel Two has 28 Steam achievements and none of them are hidden. Seven are simple chapter completions. Thirteen more are two challenges per chapter: completing it in one go without dying, and earning its gold medal (a target time). The rest cover the bonus levels (complete one, then all of them in under 45 minutes in one go), a co-op level, customising a character, and four specific trick feats in the At the rapids and Ashes to ashes chapters (a no-water traversal, a no-directional-input glide, surviving five pike attacks without the lasso).",
                "Nothing is missable - every chapter and bonus level replays from the level select, and the no-death and time-trial attempts are independent. The gold medals and the 45-minute all-bonus-levels run are the skill challenges; everything else falls out of a normal playthrough plus a few focused replays.",
                "Tip: do the no-death runs and gold medals as separate attempts on the same chapter replay - go for the gold time first (which naturally means playing fast and clean), and if you also survive it without dying you get both Safety rope-style achievements at once."
            ]
        },
        {
            "heading": "Chapter Completion & No-Death Runs",
            "body": [
                "Completing each of the seven chapters (Foreign shore, Hideaway, Little frogs, Nightswimming, Is that all there is, Ashes to ashes, At the rapids), and completing six of them in one go without dying.",
                "The achievements here: Start anew (Complete Foreign shore); Be safe (Complete Hideaway); Don't conform (Complete Little frogs); Go explore (Complete Nightswimming); Get crushed (Complete Is that all there is); Fall apart (Complete Ashes to ashes); Bounce back (Complete At the rapids); Safety rope (Complete Hideaway in one go without dying); Party responsibly (Complete Little frogs in one go without dying); Off the hook (Complete Nightswimming in one go without dying); No spanner in the works (Complete Is that all there is in one go without dying); Fireproof (Complete Ashes to ashes in one go without dying); Dry as a bone (Complete At the rapids in one go without dying)."
            ]
        },
        {
            "heading": "Gold Medals & Bonus Levels",
            "body": [
                "Earning the gold medal (target time) in each of the six timed chapters, earning any medal at all (Decorated), completing a bonus level, and completing all of the bonus levels in under 45 minutes in one go (Hard and fast).",
                "The achievements here: Roof runner (Earn the gold medal in Hideaway); Absquatulate (Earn the gold medal in Little frogs); Flying fish (Earn the gold medal in Nightswimming); Like clockwork (Earn the gold medal in Is that all there is); Flash fire (Earn the gold medal in Ashes to ashes); At the rapidest (Earn the gold medal in At the rapids); Decorated (Earn a medal for achieving a time or not dying on any level); Rescuer (Complete any bonus level); Hard and fast (Complete all of the bonus levels in under 45 minutes in one go)."
            ]
        },
        {
            "heading": "Co-op, Customisation & Trick Feats",
            "body": [
                "Completing a level in co-op, customising a character, and the four level-specific trick feats - the no-water barrel traversal and the tables-to-lifebuoy trip in At the rapids, the no-directional-input moose-signs glide in Ashes to ashes, and surviving five pike attacks without your lasso in the pike chase.",
                "The achievements here: Better together (Complete a level in co-op); New threads (Customise a character); Don't go with the flow (Travel from the island with the tables back up to the lifebuoy in At the rapids); Airs and graces (Travel between the two barrels in At the rapids without touching the water); Falling with style (Make it between the two moose signs in Ashes to ashes without using any directional inputs); Live bait (Survive 5 pike attacks in a row without using your lasso in the pike chase)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all seven chapters once for the completion achievements and to learn each level's layout.",
                "2. Do the level-specific trick feats on targeted replays: the two At the rapids traversals, the Ashes to ashes no-input glide, and the five-pike-attack survival.",
                "3. Replay each timed chapter going for its gold-medal time - play fast and clean, and if you also finish without dying you pick up that chapter's no-death achievement in the same run.",
                "4. Play a level in co-op (a second controller, or the game's single-player co-op where you control both) and customise a character.",
                "5. Do the bonus levels - complete one for Rescuer, then chain all of them in under 45 minutes in a single sitting for Hard and fast.",
                "Tip: for Hard and fast (all bonus levels under 45 minutes in one go), practise each bonus level individually first so you know the fast route - the timer is generous per level but unforgiving across the whole set, so a couple of retries on one hard level can blow the run."
            ]
        }
    ]
};
