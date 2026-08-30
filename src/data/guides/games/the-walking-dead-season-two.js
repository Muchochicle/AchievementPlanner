// The Walking Dead: Season Two Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-walking-dead-season-two.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   261030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-walking-dead-season-two-achievement-guide",
    "category": "game",
    "gameSlug": "the-walking-dead-season-two",
    "icon": "🧟",
    "title": "The Walking Dead: Season Two Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in The Walking Dead: Season Two - none are hidden. Covers the progress achievements across all five episodes of Season Two.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Walking Dead: Season Two has 40 Steam achievements and none of them are hidden. Every one is a progress achievement - reach each story checkpoint within an episode, and complete each of the five episodes. There are no choice-locked, collectible or difficulty achievements.",
                "Nothing is missable and nothing branches for achievement purposes - your choices reshape the story but every achievement unlocks by playing through to the next checkpoint. A single blind playthrough earns all 40.",
                "Tip: just play the whole season once at your own pace - there is nothing to collect or replay, so make the choices you want."
            ]
        },
        {
            "heading": "Episodes 1-2: All That Remains & A House Divided",
            "body": [
                "The story-checkpoint achievements of Episode 1 (River Runs Cold through Headed Out) and its completion (Split Decision), and of Episode 2 (New Morning through Past Midnight) and its completion (Reunion).",
                "The achievements here: River Runs Cold (Arrived at the shore.); Shelter (Found a campsite.); On the Path (Met new people.); Now What? (Arrived at the cabin.); Sneaky (Got what you needed.); Still. Not. Bitten. (Took care of yourself.); Headed Out (Headed out with the group.); Split Decision (Completed Episode 1: \"All That Remains\"); New Morning (Helped someone through a difficult time.); The Intruder (Talked to a stranger.); Moving On (Left the cabin.); Over the Bridge (Found a way across the water.); A Stranger (Met someone on a bridge.); Old Friends (Made it to the ski lodge.); Past Midnight (Settled things with a new friend.); Reunion (Completed Episode 2: \"A House Divided\")."
            ]
        },
        {
            "heading": "Episodes 3-4: In Harm's Way & Amid the Ruins",
            "body": [
                "The story-checkpoint achievements of Episode 3 (Fresh Fish through Rehabilitated) and its completion (Eye of the Storm), and of Episode 4 (Best Laid Plans through On Foot) and its completion (Beyond the Trees).",
                "The achievements here: Fresh Fish (Arrived at your new home.); Long Way Down (Witnessed a murder.); One Long Day (Made it through your first day.); Always the Quiet Ones (Committed larceny.); Not in Nottingham (Got beaten down.); Come Hither (Invited some friends into the compound.); Rehabilitated (Gave what you got.); Eye of the Storm (Completed Episode 3: \"In Harm's Way\"); Best Laid Plans (Got separated from the group.); Path Less Traveled (Learned new survival skills.); A Heavy Burden (Returned to the meeting place.); History Lesson (Reached the museum.); Making an Observation (Found the Observation Deck.); All Fall Down (Survived the attack.); On Foot (Got back on the road.); Beyond the Trees (Completed Episode 4: \"Amid the Ruins\")."
            ]
        },
        {
            "heading": "Episode 5: No Going Back",
            "body": [
                "The story-checkpoint achievements of Episode 5 (Blood and Iron through Kindly Stop for Me) and its completion (All The Dead Lie Down).",
                "The achievements here: Blood and Iron (Made it out alive.); Miles To Go (Took a breather.); Right of Frost (Stopped for the night.); Center Cannot Hold (Reached the other side.); All the Dark Night (Made it through to morning.); We Slowly Drove (Reached the terminus.); Kindly Stop for Me (Found your way through.); All The Dead Lie Down (Completed Episode 5: \"No Going Back\")."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Episode 1 through to the end - every checkpoint and the episode completion unlock as you go.",
                "2. Continue straight through Episodes 2, 3, 4 and 5 the same way.",
                "3. There is nothing else to do - no collectibles, choices or difficulty achievements exist.",
                "4. If a checkpoint achievement somehow does not unlock, replay that section from the episode select menu.",
                "5. Make whatever story choices you like; they do not affect the achievement list.",
                "Tip: rely on the autosave and do not shuffle save files between slots or PCs - that is the only thing known to skip a progress achievement in Telltale's Season titles."
            ]
        }
    ]
};
