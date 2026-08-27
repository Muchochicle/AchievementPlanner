// Mark of the Ninja's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mark-of-the-ninja.json), whose 38 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   214560 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 38 ship a real,
//   official Steam description, quoted directly below. There are no
//   Steam-hidden achievements in this game at all.
// - The grouping below (main story, completionist collectible hunts,
//   stealth/non-lethal playstyles, the long list of specific combat and
//   terror techniques, and the Special Edition/developer-commentary
//   extras) is read directly from what each achievement's own official
//   description requires, not invented.
export const GUIDE = {

    slug: "mark-of-the-ninja-achievement-guide",
    category: "game",
    gameSlug: "mark-of-the-ninja",
    icon: "🥷",
    title: "Mark of the Ninja Achievement Guide",
    summary: "A practical guide to all 38 Steam achievements in Mark of the Ninja - the main story, completionist collectible hunts, stealth playstyles, and the game's long list of specific combat and terror techniques.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Mark of the Ninja has 38 Steam achievements, and every single one ships with a real, public Steam description - there are no hidden achievements to research here at all.",
                "The list splits cleanly into three kinds of goal: automatic story progress, per-level completionist collectible hunts (stars, seals, scrolls), and a long tail of specific one-off combat/terror techniques you can pick up gradually across normal play rather than needing a dedicated detour for each one."
            ]
        },

        {
            heading: "Main Story",
            body: [
                "Hisomu's Heir (kill one guard) unlocks almost immediately. Awakened (save Azai from the mercenaries), The Mercenary (assassinate Kelly, the mercenary captain), Karajan's Fate (assassinate Karajan), and Escape (escape from the Stronghold) mark the game's major story beats in order.",
                "Fated (determine your fate) is the story's final achievement, tied to the game's ending choice."
            ]
        },

        {
            heading: "Completionist Challenges",
            body: [
                "Descendent of Iga (earn three stars in every level), Perfection (earn all the Seals in every level), Haiku (find all three scrolls in every level), and Marked (earn all the upgrades) are the game's four big completionist collectible hunts, each requiring full coverage across every level rather than a single playthrough's worth of exploration.",
                "Of The Mind (complete all of the challenge rooms) is a separate, dedicated challenge-room gauntlet outside the main story levels.",
                "True Ninja (complete the game in New Game Plus) is the deepest replay goal on this list - a second full playthrough under New Game Plus rules."
            ]
        },

        {
            heading: "Stealth & Non-Lethal Playstyles",
            body: [
                "Mercy (complete a level without killing any guards), Masterful (complete a level without getting detected), and Ghost (complete a level without killing any guards and without being detected) escalate the same core stealth challenge - each only needs to happen once, on any single level, not across the whole game.",
                "Tip: attempt Ghost on an earlier, more open level you already know well rather than a late-game level you're still learning - familiarity with guard patrol routes matters more here than raw skill."
            ]
        },

        {
            heading: "Combat & Terror Techniques",
            body: [
                "A long list of achievements each reward one specific technique performed at least once: Oni (terrorize 10 guards), Manipulator (distract 25 guards using your equipment), Trickster (distract 25 guards using environmental objects), Stealth Assassin (perform 25 successful stealth kills), and Crimson Haiku (perform five different types of stealth kills successfully in one level) reward breadth of technique.",
                "Inner Heaven (kill a guard from inside the box), The Dark Project (get the Undetected honor bonus 10 times in one level), Things Better Left Unseen (throw the body of one guard to terrorize another), Tactical Espionage Action (within a single Focus, aim and throw three different types of items), No One Lives Forever (stealth kill an elite guard after stunning him), and Deadly Shadows (stealth kill a guard from inside a dumpster) are each single specific setups you'll naturally stumble into while experimenting with the game's tools.",
                "The Worst Allies (kill a guard by getting other guards to shoot them), Unstable Footing (terrify a guard and cause him to stumble to his death), Gallows (terrify a guard using the result of a hanging stealth kill five times), Snare (use a dead body to lure another guard and then stealth kill them), The Humble Moth (stun an elite guard with moths then dispatch him), Back to Bed With You (knock out an enemy again that was revived from being knocked out), Cordyceps (dispatch two enemies at once using a body infected with Toxic Fungus), and Couldn't Do That Before (disable a spotlight using the Dusk Moths) round out the rest of this list - all worth watching for opportunistically rather than forcing."
            ]
        },

        {
            heading: "Special Edition & Developer Commentary",
            body: [
                "Days Long Past (complete the new Special Edition level) is tied to the extra level added after the game's original release.",
                "Behind the Curtain (view any of the developer commentaries) and Well, I Think It's Interesting (read one of the history lesson developer commentaries) both reward engaging with the game's optional developer-commentary system, toggled on from the main menu.",
                "What Could Have Been (complete one of the original Mark of the Ninja levels using the Path of Wisdom) is tied to the game's alternate non-lethal upgrade path, distinct from the default lethal Path of the Blade."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up the main-story achievements and most of the combat/terror technique achievements naturally as you experiment with different tools.",
                "Dedicate a second pass to the completionist collectible hunts (stars, seals, scrolls, upgrades) and the challenge rooms once you know every level's layout.",
                "Attempt Mercy, Masterful, and Ghost on a level you're already comfortable with, then tackle Days Long Past and the developer-commentary achievements whenever convenient.",
                "Save True Ninja for last - a full New Game Plus completion is the natural final step once everything else on this list is already done."
            ]
        }

    ]

};
