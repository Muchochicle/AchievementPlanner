// Thomas Was Alone's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/thomas-was-alone.json), whose 35 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   220780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 26 of 35 ship a real,
//   official Steam description, quoted directly below.
// - The 9 "startChapN" achievements (Be There or Be..., The Hero Thomas
//   Needs, I'm Rubber, You're Glue, Derezzed, Viridian, Winter is
//   Coming, Tighten Up the Graphics on Level 3, Electric Boogaloo, and
//   Up, and to the Right) are hidden achievements Steam never describes
//   publicly (confirmed via the same API call) - each one is named
//   after, and unlocks upon reaching, one specific chapter of the
//   story; their descriptions here simply name which chapter each one
//   marks, cross-checked against independent achievement guides'
//   documentation of the exact chapter each one corresponds to.
export const GUIDE = {

    slug: "thomas-was-alone-achievement-guide",
    category: "game",
    gameSlug: "thomas-was-alone",
    icon: "🟥",
    title: "Thomas Was Alone Achievement Guide",
    summary: "A practical guide to all 35 Steam achievements in Thomas Was Alone - reaching each of its 10 chapters, its two hidden achievement pickups per level, and a handful of joke achievements tied to jumping, dying, and bouncing on Laura.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Thomas Was Alone has 35 Steam achievements. Nine of them simply mark reaching each of the story's later chapters, ten pairs reward finding two hidden achievement-pickup collectibles in each of the game's first ten levels, and the rest are small joke achievements tied to jumping, dying, or bouncing on your fellow rectangles a set number of times.",
                "Thomas Was Not Alone, the achievement for finishing the game, is the only one every player is guaranteed to get on a normal playthrough - everything else here is either automatic chapter progress or a deliberate, extra collectible hunt."
            ]
        },

        {
            heading: "Chapter Progress",
            body: [
                "Be There or Be..., The Hero Thomas Needs, I'm Rubber, You're Glue, Derezzed, Viridian, Winter is Coming, Tighten Up the Graphics on Level 3, Electric Boogaloo, and Up, and to the Right are each named after, and unlock the moment you reach, one specific chapter of the story: Array, Origin, Associations, Purge, Invert, Itterate, Design, Generation, and Y+1, X+1 respectively.",
                "Since these are tied purely to story progress, none of them can be missed on a normal playthrough - they simply arrive one after another as you play through to the end, alongside Thomas Was Not Alone at the very finish."
            ]
        },

        {
            heading: "Achievement Pickups",
            body: [
                "Each of the game's first ten levels hides two collectible \"achievement\" pickups, and finding both in a given level unlocks its own uniquely-named pair: Achievement for One and Gamification in 'Spawn', Double Act and They Seek It Here, They Seek It There... in 'Array', Hidden Depths and Not Exactly a Tesseract in 'Origin', A Token of Love and Shared Hobby in 'Associations', Distractions and Dwindling Capacity in 'Purge', The Last Place You Look and Darwinian Collection in 'Invert', And In the Darkness, Find Them and Achievements, All the Way Down in 'Itterate', The Breakfast Club and A Selfless Act in 'Design', 49 Shades of Grey and Needs More Hats in 'Generation', and That's What You Gets and The Final MacGuffin in 'Y+1, X+1'.",
                "Tip: these pickups are genuinely hidden in each level's geometry, often tucked behind or above the direct path to the exit - a level-by-level collectible guide is worth using if you want all 20 pairs rather than stumbling onto them by chance."
            ]
        },

        {
            heading: "Joke Achievements",
            body: [
                "On the Hop, Experienced Jumper, and Mario scale up the same simple action - jumping 800, then 1,600, then 2,400 times over the course of the whole game - which accumulates naturally the more you play rather than needing a dedicated grind.",
                "Huge Success rewards dying 100 times, and Part of the Problem rewards bouncing on Laura 100 times - both playful, self-deprecating jokes about how the game's own physics puzzles tend to go."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally from start to finish - every chapter-progress achievement and Thomas Was Not Alone itself will unlock automatically along the way, with zero extra effort.",
                "Explore each of the first ten levels thoroughly as you reach them if you want the achievement-pickup pairs, since they're much easier to spot with a level still fresh in memory than to hunt down afterward.",
                "Let the jump, death, and Laura-bounce counters build up naturally across your whole playthrough rather than grinding any one of them in isolation - by the time you've finished the story and swept the levels for pickups, most of these joke achievements are already close to done."
            ]
        }

    ]

};
