// Bugsnax Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bugsnax.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   674140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bugsnax-achievement-guide",
    "category": "game",
    "gameSlug": "bugsnax",
    "icon": "🐛",
    "title": "Bugsnax Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Bugsnax (5 hidden). Covers the catching and transforming achievements, the exploration and collectible achievements, and the story-completion achievements. Five achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bugsnax has 30 Steam achievements and five are Steam-hidden (the waterfall passage, Beffica's diary, transforming Gramble, scanning the Snaxsquatch, and the 'Survivor' good-ending condition). The open twenty-five are catching your first Bugsnak and 25 / 50 / 100 unique species, the transformation feats (a full transform, every Grumpus transformed, the Combo Meal and Sundae Best sets), traps and Buggy Ball tricks, emptying a biome of Snakpods, and the story completion goals - returning and interviewing every Grumpus, all Legendary Bugsnax, all video diaries, all side quests, Broken Tooth, and the main story.",
                "The catalog marks it difficulty 3. It is a short game; 'Got to Catch Them All' (100 unique species) is the main grind, and 'Survivor' requires the specific end-game path where nobody dies.",
                "Tip: do a thorough playthrough catching every species and completing every quest, get the hidden secrets as you pass them, and take the everyone-lives ending path for 'Survivor'."
            ]
        },
        {
            "heading": "Catching & Transforming",
            "body": [
                "Your first Bugsnak, the Steam-hidden waterfall passage, reaching Snaxburg, the Combo Meal transform, a cheese scan, the Steam-hidden Beffica's diary, a double trap, emptying a biome of Snakpods, a full transform, transforming every Grumpus, and the launch-stun and Trip Shot Buggy Ball tricks.",
                "The achievements here: Everybody Gets One (Catch your first Bugsnak.); Wonderfalls (Enter the hidden passage behind the left waterfall at Flavor Falls.); Gone Home (Find your way to Snaxburg.); Combo Meal (Transform a Grumpus with Bunger, Fryder, and Sodie.); Say Cheese! (Scan a Grumpus after saucing them with cheese.); Perf Dirt (Steal Beffica's diary from her cave.); Double Trapper (Catch more than one Bugsnak in your Snak Trap at once.); Grab Bag (Empty one biome of all its Snakpods.); I'm Stuffed (Fully transform a Grumpus.); Feeding Frenzy (Fully transform every Grumpus.); Launch Party (Stun a flying Bugsnak by launching another Bugsnak at it.); Clothesline (Stun a Bugsnak with the Trip Shot attached to your Buggy Ball.)."
            ]
        },
        {
            "heading": "Exploration & Collectibles",
            "body": [
                "Donating the max to Gramble's ranch, catching 25 / 50 / 100 unique species, the Steam-hidden 'Midnight Snak' (transforming Gramble), a lava-cave or dunes puzzle, the Steam-hidden Snaxsquatch scan, the Sundae Best transform, returning and interviewing every Grumpus, all Legendary Bugsnax, and all of Lizbert's video diaries.",
                "The achievements here: In The Arms of the Gramble (Donate max amount of Bugsnax to Gramble's ranch.); Quartermaster (Catch 25 unique species of Bugsnax.); Halfway There (Catch 50 unique species of Bugsnax.); Got to Catch Them All (Catch 100 unique species of Bugsnax.); Midnight Snak (Fully transform Gramble with Bugsnax.); That Reminds Me of A Puzzle (Solve the secret of the lava cave or the secret of the dunes.); Candid Cryptid (Scan the Snaxsquatch - it appears at spots such as the Scorched Gorge windmills at midnight.); Sundae Best (Transform a Grumpus with Scoopy, Banopper, and Cheery.); Know Thy Neighbor (Return every Grumpus to Snaxburg.); Talkin' Bout Bugsnax (Interview every Grumpus.); Bossy Bugs (Defeat all of the Legendary Bugsnax.); Documentarian (Watch all of Lizbert's video diaries.)."
            ]
        },
        {
            "heading": "Story Completion",
            "body": [
                "Completing all side quests, the Steam-hidden 'Survivor' (everyone lives), fully furnishing your hut, collecting 10 hats, completing the Broken Tooth adventure, and finishing the main story.",
                "The achievements here: Sidetracked (Complete all of the side quests.); Survivor (Reach the ending with every Grumpus still alive.); Live Laugh Hut (Fully furnish your hut.); Dapper Capper (Collect 10 hats.); Deep Impact (Complete the adventure at Broken Tooth.); Vacation's End (Complete the main story of Bugsnax.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, catching every species you see toward 100 unique.",
                "2. Do every side quest, interview and return every Grumpus, and watch all of Lizbert's diaries.",
                "3. Get the hidden secrets: the waterfall passage, Beffica's diary, transforming Gramble, and the Snaxsquatch scan (Scorched Gorge windmills at midnight).",
                "4. Defeat all Legendary Bugsnax and complete the Broken Tooth section.",
                "5. Take the everyone-lives path in the finale for 'Survivor'.",
                "Tip: 'Survivor' is the only truly missable one - in the final sequence keep every Grumpus alive; reload from an earlier save if someone is lost."
            ]
        }
    ]
};
