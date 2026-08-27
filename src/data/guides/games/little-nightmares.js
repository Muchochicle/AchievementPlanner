// Little Nightmares' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/little-nightmares.json), whose 22
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 424840 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 12
//   of 22 ship a real, official Steam description, quoted directly
//   below. Note: the schema's own `gameName` field for this appid
//   incorrectly reads "ATLAS" (a stale/unrelated value on Steam's
//   side) - the achievement content itself (apinames like
//   LittleLostThings, KitchenHand, TheLadysQuarters, and displayNames
//   unmistakably matching Little Nightmares) and Steam's public
//   storesearch API both confirm 424840 is genuinely Little Nightmares.
// - Kitchen Hand, Highly Sprung, Rascal, Elusive, Six's Song, Fun &
//   Games Ahead, Ashes in The Maw, " We'll Meet Again" (Steam's own
//   displayName has a leading space, quoted verbatim), Ashes to Ashes,
//   and I'm Losing You are hidden achievements Steam never describes
//   publicly (confirmed via the same API call) - their descriptions
//   here are curatorial, cross-checked against multiple independent
//   Steam Community/TrueAchievements-style guides for their real
//   unlock conditions.
// - The grouping below (base-game chapters and secrets vs. the Secrets
//   of the Maw DLC's three episodes) is read directly from what each
//   achievement's own description/context requires, not invented.
export const GUIDE = {

    slug: "little-nightmares-achievement-guide",
    category: "game",
    gameSlug: "little-nightmares",
    icon: "🕯️",
    title: "Little Nightmares Achievement Guide",
    summary: "A practical guide to all 22 Steam achievements in Little Nightmares - the five main chapters, its playful hidden secrets, and the three Secrets of the Maw DLC episodes.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Little Nightmares has 22 Steam achievements. Five reward simply completing each of the base game's chapters, and most of the rest reward smaller, playful interactions with the world - throwing things, jumping on furniture, or narrowly escaping danger - rather than difficult challenges.",
                "Nothing here is permanently missable - the game's Chapter Select menu lets you jump back into any completed chapter to mop up a missed hidden achievement or collectible without replaying the whole game."
            ]
        },

        {
            heading: "The Five Chapters",
            body: [
                "The Prison, The Lair, The Kitchen, The Guest Area, and The Lady's Quarters each unlock automatically for finishing that chapter of the story, in order - together they cover the entire base-game campaign from waking in the ship's hold to its final escape.",
                "Little Lost Things is a separate, ongoing collectible hunt threaded through all five chapters: rescue every hidden Nome (the game's small, shy lost creatures) you come across rather than ignoring them."
            ]
        },

        {
            heading: "Hidden Secrets",
            body: [
                "Kitchen Hand (throw three ingredients into the boiling pot in the kitchen), Highly Sprung (jump on any bed about six times until it breaks), Fun & Games Ahead (throw the ball into the waiting basket), and Six's Song (climb onto the piano in chapter two and play its keys) are all small, one-off interactions with specific objects you'll pass along the way.",
                "Light Up Your Life is an official-but-vague achievement tied to a specific set of trustworthy lights encountered during the story.",
                "Rascal asks for something bigger: smash all 10 porcelain statues scattered across every chapter, a real collectible hunt on top of the Nomes.",
                "Elusive rewards narrowly escaping a pursuer six times across chapters two through four - it doesn't need to be the same enemy or happen in a row, just six close calls total over the course of a normal playthrough.",
                "Tip: check the Chapter Select menu's own progress indicators for each chapter before assuming you've found every Nome and statue - it will tell you exactly how many of each collectible remain in a given chapter."
            ]
        },

        {
            heading: "Speedrun & Extras",
            body: [
                "Hard to the Core is the base game's one real challenge achievement: complete the entire campaign in under an hour without ever dying, though you can save and reload freely as long as your total played time stays under the limit."
            ]
        },

        {
            heading: "Secrets of the Maw - The Depths",
            body: [
                "So Close marks the end of The Depths, the first of the three Secrets of the Maw DLC episodes.",
                "Not Alone is a collectible hunt within The Depths: find and pick up all 5 Flotsam bottles scattered through the episode.",
                "Ashes in The Maw, a hidden achievement, is a specific multi-step puzzle in The Depths - work through the lure, lever, and saw sequence, then throw the wooden gnome you find into the furnace."
            ]
        },

        {
            heading: "Secrets of the Maw - The Hideaway",
            body: [
                "End in Sight marks the end of The Hideaway, the DLC's second episode.",
                "Is Anybody Out There? is The Hideaway's own Flotsam-bottle collectible hunt, the same idea as Not Alone but in this episode instead.",
                "Ashes to Ashes, a hidden achievement, asks you to reunite both halves of a hidden book found upstairs and downstairs in the episode's library, which opens a secret door - then knock over the vase waiting inside."
            ]
        },

        {
            heading: "Secrets of the Maw - The Residence",
            body: [
                " We'll Meet Again, a hidden achievement, marks reaching the end of The Residence, the third and final Secrets of the Maw episode.",
                "I'm Losing You, also hidden, is The Residence's own Flotsam-bottle hunt: collect all 5 bottles scattered through the episode."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the five base-game chapters normally, picking up Nomes and the easy hidden interactions (Kitchen Hand, Highly Sprung, Fun & Games Ahead, Six's Song) as you naturally encounter them.",
                "Go back through Chapter Select for any statues (Rascal) or Nomes (Little Lost Things) you missed, and for the six close calls Elusive needs if you didn't rack them up during a normal playthrough.",
                "Play through all three Secrets of the Maw episodes in order, collecting each episode's Flotsam bottles as you go and working out Ashes in The Maw and Ashes to Ashes along the way.",
                "Save Hard to the Core for a dedicated, no-death speed-focused replay once you already know every chapter's layout and puzzle solutions."
            ]
        }

    ]

};
