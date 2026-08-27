// Return of the Obra Dinn's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/return-of-the-obra-dinn.json), whose 16
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 653530 via ISteamUserStats/GetSchemaForGame (fetched
//   through this app's own backend/services/steamApi.js) - 13 of 16 ship
//   a real, official Steam description, quoted directly below.
// - Captain Did It, Abandon Ship, and Obra Done are hidden achievements
//   Steam never describes publicly (confirmed via the same API call) -
//   their descriptions here are curatorial, cross-checked against
//   TrueAchievements' and the Obra Dinn Fandom wiki's independent
//   documentation of their real unlock conditions. Deliberately described
//   without revealing any of the game's actual correct fates - Captain
//   Did It and Abandon Ship are both meta/joke achievements about a
//   specific way of finishing (blaming one person for everyone, or
//   leaving early), not about the real solution to the mystery, so
//   describing them accurately doesn't spoil anything the game itself
//   asks you to figure out.
// - The catalog's game-level missable:false reflects the game's own
//   pocket-watch mechanic, which lets any scene be freely revisited to
//   re-examine or reconsider a fate at any point - nothing about a wrong
//   guess is ever permanently locked in.
export const GUIDE = {

    slug: "return-of-the-obra-dinn-achievement-guide",
    category: "game",
    gameSlug: "return-of-the-obra-dinn",
    icon: "🧭",
    title: "Return of the Obra Dinn Achievement Guide",
    summary: "A practical, spoiler-conscious guide to all 16 Steam achievements in Return of the Obra Dinn - solving each chapter, the full 100% ending, and two joke achievements about not solving it at all.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Return of the Obra Dinn has 16 Steam achievements. Nothing is permanently missable - the pocket watch lets you revisit any scene and reconsider any fate at any point, so an early wrong guess is never locked in for good.",
                "This guide deliberately says nothing about who actually killed or caused the fate of anyone aboard the ship - figuring that out from the evidence is the entire point of the game. Nothing below spoils the actual solutions."
            ]
        },

        {
            heading: "Chapter Achievements",
            body: [
                "Nine achievements - Loose Cargo, A Bitter Cold, Murder, The Calling, Unholy Captives, Soldiers of the Sea, The Doom, Escape, and The End - each unlock for correctly solving every fate within one specific chapter's set of memories. These happen naturally as you work through the book chapter by chapter; there's no separate action needed beyond the core deduction gameplay.",
                "Tip: chapters don't have to be solved in order, and the game deliberately lets you jump between memories as new evidence from later scenes helps explain earlier ones - don't feel obligated to fully lock in a chapter before moving on if you're stuck on a few fates."
            ]
        },

        {
            heading: "Fate-Count Milestones",
            body: [
                "Any 6, Any 15, Any 30, and Any 45 track cumulative progress - solving that many fates correctly, regardless of which chapter they came from. These fire automatically as you make progress through the book as a whole, on top of (not instead of) the chapter achievements above.",
                "With 60 fates total in the full crew and passenger list, Any 45 is most of the way to a complete solve - the remaining stretch from there to fully done is usually the hardest, since the easier, more obvious fates tend to get solved first."
            ]
        },

        {
            heading: "Obra Done - The True Ending",
            body: [
                "Obra Done is the game's real 100% completion achievement: every single fate aboard the Obra Dinn, correctly identified and confirmed. This is comfortably the most demanding achievement in the game, and the natural goal of a full, careful playthrough rather than something to chase separately from normal play."
            ]
        },

        {
            heading: "Captain Did It & Abandon Ship (Joke Achievements)",
            body: [
                "Two hidden achievements reward doing the opposite of a careful investigation. Captain Did It unlocks by marking every single crew and passenger fate as caused by Captain Robert Witterel - identifying who each person actually is isn't required, so it's safe to leave everyone unidentified while doing this. Abandon Ship unlocks simply by leaving the Obra Dinn before the game has told you there's nothing left to solve - i.e., quitting the investigation early on purpose.",
                "Tip: both are easiest to grab together in one short playthrough, ideally right at the start or on a fresh save - blame the captain for every fate, then leave the ship before the game flags the book as complete. Doing this on your \"real\" investigation file would overwrite fates you actually want to keep correct, so use a separate save if you've already made real progress."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "If you want Captain Did It and Abandon Ship, get them out of the way first on a fresh save, before starting your real investigation - they take minutes and avoid any risk of disturbing genuine progress.",
                "Then play through the real investigation chapter by chapter, picking up the 9 chapter achievements and the 4 fate-count milestones as natural byproducts of solving the mystery.",
                "Obra Done comes last, once every remaining fate - usually the trickiest, most ambiguous ones - is finally nailed down."
            ]
        }

    ]

};
