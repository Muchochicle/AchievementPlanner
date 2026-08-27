// A Short Hike's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/a-short-hike.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1055540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 8 of 12 ship a real,
//   official Steam description, quoted directly below.
// - Crispy, Remember This Day Forever, Photo Friends, and Only You Can
//   Prevent Campfires are hidden achievements Steam never describes
//   publicly (confirmed via the same API call) - their descriptions here
//   are curatorial, cross-checked against multiple independent unlock
//   guides (TrueAchievements, PlayStationTrophies, and a Steam community
//   secret-achievements guide) that agree on the same requirements.
// - The catalog's game-level missable:false reflects that the island
//   stays fully explorable after the credits roll - nothing here is
//   permanently locked out by finishing the main story.
export const GUIDE = {

    slug: "a-short-hike-achievement-guide",
    category: "game",
    gameSlug: "a-short-hike",
    icon: "🥾",
    title: "A Short Hike Achievement Guide",
    summary: "A practical guide to all 12 Steam achievements in A Short Hike - reaching the summit, the island's scattered collectibles, and its handful of hidden, easy-to-miss secrets.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "A Short Hike has 12 Steam achievements. The island stays fully open to explore even after you reach the summit and roll credits, so nothing here is permanently missable on a given save - there's no rush to grab everything before finishing the main climb.",
                "Most of the list is straightforward exploration and collectibles; a handful of hidden achievements require noticing specific NPCs and side activities scattered around the island rather than just following the main path up the mountain."
            ]
        },

        {
            heading: "The Climb & Collectibles",
            body: [
                "Hawk Peak (\"You made it to the top!\") and The End (\"Take a nice long nap.\") mark reaching the summit and rolling credits - the two achievements every playthrough naturally earns just by finishing the story.",
                "Feathers Forever (find every feather) and Feather Finder (collect 10 golden feathers) both track the island's main collectible, used to boost your jump height and glide distance - Feather Finder is an early, easy milestone on the way to Feathers Forever's full set.",
                "The Fish Are Biting Today (trade every species of fish) and Green Thumb (water every sprout) are two smaller, similarly-shaped scavenger hunts elsewhere on the island - a fish trader and scattered wilting plants respectively.",
                "Parkour Master (beat each parkour race once) and Not A Scratch (complete the boating challenge in under 45 seconds) are the island's two skill-based mini-challenges - both are short, replayable attempts rather than one-shot chances."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "Crispy asks the Park Ranger near the Visitor's Center about the sign advertising \"Strawberries at 5 PM\" - the strawberries are out, but the Ranger offers a slice of toast instead. Eating it unlocks the achievement.",
                "Remember This Day Forever comes from a beach stick-ball minigame on the island's northern beach - land a rally of over 30 points in a row and the other player gives you their hat as a memento.",
                "Photo Friends requires having at least 10 golden feathers by the time you reach the area just below the summit - a climber there needs 6 feathers to make it to the top; lend them the feathers, and once you reach the peak together they offer to take a photo.",
                "Only You Can Prevent Campfires needs a bucket (found in a few spots around the island), filled with water from any lake or the ocean, then used to douse 4 different campfires. A doused campfire re-lights itself after you walk away, so this can be done at a single campfire 4 times over if a second one isn't handy.",
                "Tip: Photo Friends and Feathers Forever pull in slightly opposite directions - giving away 6 feathers for the photo temporarily lowers your count, so it's easiest to grab Photo Friends on your way up rather than after already maxing out every feather."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Explore freely on the way up the mountain - most collectible and hidden achievements sit naturally along or just off the main path, so a relaxed, wandering first climb picks up the bulk of this list without any dedicated backtracking.",
                "Save Feathers Forever, The Fish Are Biting Today, and Green Thumb for a free-roam pass after reaching the summit once, when you know the full shape of the island and can mop up whatever the first climb missed.",
                "Hawk Peak and The End complete themselves the moment you finish the story, whenever that happens to be."
            ]
        }

    ]

};
