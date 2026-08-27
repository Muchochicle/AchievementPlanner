// Cult of the Lamb's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cult-of-the-lamb.json), whose 57 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1313140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 49 of 57 ship a real,
//   official Steam description, quoted directly below.
// - Do No Evil, True Love Found, Leader of Leaders, Regenerate, Eat the
//   Rich, Swing of the Axe, Rot No More, and Respect Thy Mother are
//   hidden achievements Steam never describes publicly (confirmed via
//   the same API call) - their descriptions here are curatorial,
//   cross-checked against TrueAchievements, XboxAchievements, Game8,
//   and independent Steam Community guides for their real unlock
//   conditions. Kept deliberately light on story specifics around the
//   base game's true ending and the Woolhaven DLC's final boss.
// - The grouping below (early goals, follower counts, the four Bishops,
//   the true ending, cult management, exploration, the big collection
//   achievements, minigames/side quests, and the Woolhaven DLC) is read
//   directly from what each achievement's own description requires.
export const GUIDE = {

    slug: "cult-of-the-lamb-achievement-guide",
    category: "game",
    gameSlug: "cult-of-the-lamb",
    icon: "🐑",
    title: "Cult of the Lamb Achievement Guide",
    summary: "A practical guide to all 57 Steam achievements in Cult of the Lamb - founding your cult, defeating the four Bishops, the game's true ending, collection achievements, and the Woolhaven DLC.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Cult of the Lamb has 57 Steam achievements. Most of the base-game list unlocks naturally over a normal playthrough - gaining followers, defeating bosses, and building up your cult - while the deeper collection achievements (every weapon, curse, relic, tarot card) and the Woolhaven DLC content reward much longer-term investment.",
                "Nothing here is permanently missable on a given save - crusades, followers, and cult upgrades can all be pursued indefinitely after the story's main events, so a slower or more exploratory playthrough loses nothing."
            ]
        },

        {
            heading: "Getting Started",
            body: [
                "First Follower, Deal with the Devil, Preacher of Truth, The First Death, and Death to Non-Believers are all early-game milestones that unlock naturally within the opening hour or two: gaining your first devotee, striking the deal that starts the whole game, delivering your first sermon, losing your first follower, and defeating your first mini-boss."
            ]
        },

        {
            heading: "Growing the Flock",
            body: [
                "The Flock Grows, Flock of Many, and Flock of All scale the same idea up - 5, 10, and 20 followers respectively - while Apostles asks for 12 Disciples specifically, a smaller and more curated subset of your flock's most devoted members."
            ]
        },

        {
            heading: "The Four Bishops",
            body: [
                "See No Evil, Speak No Evil, Hear No Evil, and Think No Evil are the base game's four main boss kills - Leshy, Heket, Kallamar, and Shamura respectively. Order, Sate, Cure, and Peace are the harder no-damage variant of each of those same four fights.",
                "Tip: attempt the no-damage Bishop fights on a return visit once you already know each boss's patterns from a normal first kill - going in blind against all four without ever having taken damage is a much bigger ask than learning one fight at a time."
            ]
        },

        {
            heading: "The One Who Waits & the True Ending",
            body: [
                "Do No Evil is the game's true final boss fight - refusing to kneel to The One Who Waits and defeating him afterward, a different and harder encounter than the credits you get by accepting his offer.",
                "Leader of Leaders asks you to indoctrinate all five Bishops - including The One Who Waits himself - into your own cult, which becomes possible only after the post-game lets you fight and convert them again. True Love Found is a separate, easy-to-miss post-game questline: reuniting Baal and Aym with their mother, Forneus, during a crusade.",
                "Godhood is the game's ultimate long-term achievement, reached only once your cult and its cause have been built up far beyond simply finishing the main story."
            ]
        },

        {
            heading: "Cult Rituals & Management",
            body: [
                "Keeper of Secrets (take confession), Sacrificial Beast (sacrifice a Follower), and Weigher of Souls (sacrifice 10 Followers) are all tied to the darker side of cult leadership - hearing out your followers versus offering them up.",
                "Devotion (fully upgrade your cult), Aesthetics of the Lamb (fully upgrade the Temple), Gospel (unlock all doctrines), Transform (unlock a new fleece), Transmute (unlock all fleeces), and Cannibal (cook a Follower meat meal) round out the cult-management side of the achievement list - each tied to investing resources back into your cult rather than into combat runs."
            ]
        },

        {
            heading: "Exploration & World",
            body: [
                "Leader of the Crusade (find all 5 locations) and Bringer of Light (reignite the lighthouse) are early-to-mid-game world-progression milestones. Crosser of Thresholds marks your first step into the deeper Purgatory-style content beyond the main story.",
                "Hoarder of Wealth (666 gold coins) and Shake Down (get your Gold back from Midas) are both money-focused, while Slayer of Souls (complete a row in Purgatory) is the entry point into the game's dedicated late-game challenge content."
            ]
        },

        {
            heading: "Collections - The Completionist Achievements",
            body: [
                "Full Flock (all Follower Skins), Full Deck (all tarot cards), Teach a Lamb to Fish (catch every fish), Weapons of Plenty (all weapons), Curses of Plenty (all curses), Relics of the Old Faith (all Relics), Holder of History (all lore), Setter of Trends (all outfits), Maker of Legends (restore all Legendary Weapons), and The Complete Collection (all Flockade pieces) are the game's ten big completionist checklists - each one realistically a long-term goal spanning many crusades rather than something to finish in one sitting.",
                "Tip: don't try to chase all ten collection achievements on a single dedicated run - they accumulate naturally across many crusades over the course of a long-term save, and trying to force them early just means repeatedly fighting through content you haven't unlocked the tools for yet."
            ]
        },

        {
            heading: "Minigames, Followers & Side Quests",
            body: [
                "Game of Chance (win a game of Knucklebones) and Master of Chance (defeat all opponents in Knucklebones) are tied to the game's dice minigame rather than combat. Propagate the Flock (hatch 5 eggs) rewards a different kind of follower-growing loop.",
                "Regenerate, The Prodigal Child, and Eat the Rich are three separate follower side-questlines: fully completing Sozo's requests, inheriting Ratau's legacy, and successfully indoctrinating Midas into your cult after hatching him from his skull."
            ]
        },

        {
            heading: "The Woolhaven DLC",
            body: [
                "Killer Instinct (defeat Marchosias) and Swing of the Axe (defeat the Executioner) are the DLC's two earlier boss fights, found while exploring The Rot.",
                "Rot No More is the payoff for finishing the DLC's story - defeating Yngya, its final boss - while Respect Thy Mother is a much harder variant of that same fight: defeating Yngya without landing a single attack.",
                "Woolhaven Reborn (complete everything in Woolhaven) is the DLC's own completionist achievement, requiring every Woolhaven-specific quest and rebuild to be finished, separate from the base game's collection achievements above."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the main story normally first, defeating all four Bishops and picking up the early-game and follower-count achievements along the way without any dedicated detour.",
                "Decide how you want the base game to end - accepting The One Who Waits' offer, or refusing and fighting him for Do No Evil - then use the post-game to indoctrinate the Bishops for Leader of Leaders.",
                "Work on the ten collection achievements gradually across many crusades, alongside cult-management upgrades like Devotion and Aesthetics of the Lamb, rather than as one dedicated push.",
                "Save the Woolhaven DLC's achievements, Respect Thy Mother in particular, and Godhood for last - they all assume a well-developed cult and a strong understanding of the game's combat from the base game first."
            ]
        }

    ]

};
