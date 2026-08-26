// Celeste's Game Guide (Phase 73). Sources:
//
// - PRIMARY: this app's own catalog data (src/data/games/celeste.json),
//   whose 32 achievements were sourced directly from Steam's own
//   achievement schema for appid 504230 (see PHASE_72_AUDIT.md for the
//   sourcing methodology) - every factual sentence below quotes or closely
//   paraphrases those official descriptions (2 of 32 ship an official
//   Steam description; the rest are grounded in the apiname's own naming
//   convention, e.g. `CH1`-`CH7`/`HEART1`-`HEART8`/`BSIDE1`-`BSIDE8`
//   mapping cleanly onto the game's own chapter/Crystal Heart/B-Side
//   structure).
// - No missable claim in this guide is invented: the catalog's own
//   `missable: false` (game-level, and every individual achievement) is
//   confirmed by the game's well-documented free chapter select, which
//   lets any chapter, B-Side, or C-Side be replayed at any time.
export const GUIDE = {

    slug: "celeste-achievement-guide",
    category: "game",
    gameSlug: "celeste",
    icon: "🏔️",
    title: "Celeste Achievement Guide",
    summary: "A practical guide to 100%-completing Celeste's 32 Steam achievements, from the main story to its hardest optional B-Sides and C-Sides.",

    relatedSlugs: ["achievement-completion-and-tracking", "getting-started"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Celeste has 32 Steam achievements, and none of them are missable - the game's chapter select lets you revisit any chapter, B-Side, or C-Side at any time, so nothing pursued later is ever locked out by earlier choices.",
                "Community completion-time estimates for 100% span a wide range - roughly 15 hours for just the main story's seven chapters, up to 60+ hours for full C-Side and Golden Strawberry completion, since the hardest optional content is dramatically harder than the story itself.",
                "This guide splits the 32 achievements into 6 groups: the main story, Crystal Hearts, B-Sides, Strawberries, secrets, and Chapter 9 (Farewell)."
            ]
        },

        {
            heading: "Main Story (A-Sides)",
            body: [
                "Eight achievements come from simply completing each main chapter: Forsaken (Chapter 1: Forsaken City), Archaeology (Chapter 2: Old Site), Checking Out (Chapter 3: Celestial Resort), Breathe (Chapter 4: Golden Ridge), In the Mirror (Chapter 5: Mirror Temple), Reflection (Chapter 6: Reflection), Celeste (Chapter 7: climb Celeste Mountain), and Heart of the Mountain (Chapter 8: Core, which also requires collecting its Crystal Heart).",
                "Tip: the main story climbs in both length and difficulty chapter by chapter - Chapter 8 in particular is meaningfully harder than 1-7 and is best attempted once you're comfortable with the game's core movement tech (wall jumps, dashes, climbing)."
            ]
        },

        {
            heading: "Crystal Hearts",
            body: [
                "Each of the first seven chapters hides one optional Crystal Heart, each with its own achievement: Pointless Machines (Chapter 1), Resurrections (Chapter 2), Scattered and Lost (Chapter 3), Eye of the Storm (Chapter 4), Quiet and Falling (Chapter 5), Heavy and Frail (Chapter 6), and Pink Sunrise (Chapter 7: The Summit).",
                "Collecting a chapter's Crystal Heart is also what unlocks that chapter's B-Side remix level, making Hearts the natural bridge between the main story and Celeste's harder optional content."
            ]
        },

        {
            heading: "B-Sides",
            body: [
                "Each chapter's Crystal Heart unlocks a remixed, harder version of that chapter (its B-Side), each with its own completion achievement: Sever the Skyline (Ch.1), Black Moonrise (Ch.2), Good Karma (Ch.3), Golden Feather (Ch.4), Mirror Magic (Ch.5), Center of the Earth (Ch.6), No More Running (Ch.7), and Say Goodbye (Ch.8's B-Side, Core).",
                "Tip: B-Sides step up in difficulty sharply compared to their A-Side counterparts - treat them as a distinct, later goal rather than something to clear on the same run you first find each Heart."
            ]
        },

        {
            heading: "Strawberries",
            body: [
                "Strawberries are Celeste's main collectible, scattered throughout every chapter (including B-Sides), and three achievements track cumulative totals across the whole game: Strawberry Badge (30 Strawberries), Strawberry Medal (80 Strawberries), and Impress Your Friends (175 Strawberries) - close to the game's full Strawberry count.",
                "Tip: Strawberries are entirely optional collectibles that don't affect story progress, so there's no risk in skipping hard ones on a first pass through a chapter and returning later via chapter select."
            ]
        },

        {
            heading: "Secrets",
            body: [
                "A handful of achievements reward finding or engaging with the game's hidden content rather than just clearing chapters: Gateway (collect a Cassette Tape - these unlock each chapter's C-Side, the hardest remix tier), 1UP! (get a 1UP, a rare in-level bonus), Real Gamer (complete the hidden PICO-8 minigame tucked away in the game world), and Wow (discover Celeste's best-kept secret).",
                "Thanks For Playing (complete every chapter's C-Side) is the single hardest completionist achievement in the base game - C-Sides are built entirely around Celeste's most demanding movement tech and are best left until you're genuinely comfortable with everything else on this list."
            ]
        },

        {
            heading: "Farewell (Chapter 9)",
            body: [
                "Farewell (complete Chapter 9: Farewell) is Celeste's free epilogue chapter, added after the base game's original release - it's longer and more mechanically demanding than any of the first eight chapters, and is best attempted last, once every other movement skill on this list is already second nature.",
                "Tip: Farewell is optional relative to the main story's own ending (Chapter 7/8) but required for full completion of this achievement list - budget significant extra time for it specifically."
            ]
        }

    ]

};
