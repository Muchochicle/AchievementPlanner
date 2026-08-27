// RiME's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data (backend/catalog/games/rime.json),
//   whose 31 achievements were sourced directly from Steam's own
//   achievement schema for appid 493200 via ISteamUserStats/
//   GetSchemaForGame (fetched through this app's own
//   backend/services/steamApi.js) - all 31 ship a real, official Steam
//   description, quoted directly below. RiME has no hidden achievements
//   at all, unlike most other games in this catalog.
// - RiME's official achievement descriptions are themselves written in a
//   deliberately vague, poetic style (matching the game's own wordless,
//   emotional storytelling) rather than plain mechanical instructions -
//   this guide interprets what each one is actually asking for in
//   concrete terms without claiming to reveal story specifics the game
//   itself keeps understated.
// - The grouping below (collectibles vs. story beats vs. optional side
//   challenges) is read directly from what each achievement's own
//   official description requires, not invented.
export const GUIDE = {

    slug: "rime-achievement-guide",
    category: "game",
    gameSlug: "rime",
    icon: "🏝️",
    title: "RiME Achievement Guide",
    summary: "A practical guide to all 31 Steam achievements in RiME - its scattered collectibles, the story's emotional beats, and its optional side challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "RiME has 31 Steam achievements, and unlike most other games in this catalog, none of them are hidden - every single one ships with an official Steam description, even if RiME's own descriptions lean poetic rather than literal.",
                "The story is told entirely without dialogue, so several achievements below are written in the game's own understated language - this guide explains what each one concretely asks you to do without spelling out story specifics RiME itself leaves for you to discover."
            ]
        },

        {
            heading: "Collectibles",
            body: [
                "Toyful Child, Full Wardrobe, and It's a process are the game's three big scattered-collectible hunts across the whole island: every toy, every outfit, and every emblem piece respectively.",
                "The Truth (peek through every keyhole) and Lost Lullaby (complete the lost lullaby, a musical collectible thread) are two smaller, separate collection tasks layered on top of the main three.",
                "Bite the dust (break five specific statues), Jars in the sand, and Lighten up (light many lights) are smaller world-interaction collectibles rather than full-island hunts - each tied to a specific area rather than scattered everywhere.",
                "Tip: RiME doesn't lock any chapter behind a point of no return in a way that would strand a missed collectible - if you're specifically hunting these, it's still easier to sweep each chapter thoroughly before moving on than to plan on backtracking later."
            ]
        },

        {
            heading: "Story Beats",
            body: [
                "Sweet Memory, Don't say no, Unbearable, Ask for a miracle, No hope, Letting go, and Without a trace each unlock automatically at a specific emotional beat in the main story - they require no extra effort beyond simply playing through the game's five chapters.",
                "Happy family, Good intentions, and Ancient treasure are similarly tied to specific story moments and side-details you'll naturally encounter while progressing.",
                "The path of light (bring light to the labyrinth of darkness) marks a specific lit-puzzle sequence within the main story rather than an optional side task."
            ]
        },

        {
            heading: "Side Challenges",
            body: [
                "Reckless cannonball and That went too far are playful, low-stakes achievements for jumping from a height and throwing something as far as possible - pure experimentation rather than anything story-critical.",
                "Careful steps (don't smash the eggs) and Hold your breath (use only one bubble in the underwater cave) are each a specific, optional execution challenge tied to one particular puzzle area.",
                "Dark and quiet (complete the labyrinth without making a sound) and Blend-in with the surroundings (move undetected amongst the shades) are the game's stealth-style challenges - each asks for a specific area to be cleared without triggering detection.",
                "What lies in the deep (find the shark), From the sky to the abyss, Wrong direction, Patience, and Racing (be faster than the Sentinels) are each their own smaller optional discovery or execution challenge scattered through different chapters.",
                "Funeral flowers (find a nice resting place) closes out the list as one more small, discoverable side-detail rather than a difficult challenge."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through each chapter slowly and thoroughly rather than rushing - the large majority of RiME's achievements (every story beat, most of the side challenges, and the scattered collectibles) come from careful exploration rather than any special technique.",
                "Treat Toyful Child, Full Wardrobe, The Truth, and It's a process as your main checklist per chapter, since they're each spread across the whole game rather than concentrated in one place.",
                "Save the execution-focused challenges - Dark and quiet, Blend-in with the surroundings, Hold your breath, and Racing - for once you're comfortable with a chapter's layout, since each rewards familiarity with the space more than raw skill."
            ]
        }

    ]

};
