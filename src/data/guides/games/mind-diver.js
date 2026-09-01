// Mind Diver Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mind-diver.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2259330 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mind-diver-achievement-guide",
    "category": "game",
    "gameSlug": "mind-diver",
    "icon": "🧠",
    "title": "Mind Diver Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Mind Diver (3 hidden). Covers restoring every memory party in the story, from the first dive to the ending, plus a hidden mid-story reveal and a full animal collection. Three of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mind Diver has 10 Steam achievements and 3 are hidden. Seven are the story's memory-restoration beats - Party: Outside, Party: Welcome, Party: Back Rooms, Party: Diving, Party: Recovery, Party: A Reminder, and Party: Secrets/Departure. The other three are hidden: finding Sebastian's whereabouts partway through the story, finishing the game for its ending, and collecting all four animals with your mind-gun tool (two cats, a bird and a squirrel).",
                "The catalog marks it difficulty 2. Mind Diver is a short narrative puzzle game; nothing here is hard to miss since the animal collectibles are all in the Graveyard and Prophecies areas you naturally pass through.",
                "Tip: keep an eye out for the bird and squirrel in the Graveyard and the two cats in the Prophecies area (one on top of the boxing machine, one by the Fortune Teller's entrance stairs) for the hidden Animal Collector achievement."
            ]
        },
        {
            "heading": "Restoring the Memories",
            "body": [
                "Restoring Party: Outside, Party: Welcome and its memory The Day After, Party: Back Rooms and The First Meeting, Party: Diving and Love and Fear, Party: Recovery and A Second Chance, Party: A Reminder and The Killing, and Party: Secrets and Departure.",
                "The achievements here: Welcome, Diver (Restore \"Party: Outside\"); The Day After (Restore \"Party: Welcome\" and its associated memories: \"The Day After\"); The First Meeting (Restore \"Party: Back Rooms\" and its associated memories: \"The First Meeting\"); Love and Fear (Restore \"Party: Diving\" and its associated memories: \"Love and Fear\"); A Second Chance (Restore \"Party: Recovery\" and its associated memories: \"A Second Chance\"); The Killing (Restore \"Party: A Reminder\" and its associated memories: \"The Killing\"); Secrets (Restore \"Party: Secrets\" and \"Departure\")."
            ]
        },
        {
            "heading": "Secrets & Endgame",
            "body": [
                "The hidden mid-story reveal of Sebastian's whereabouts, finishing the game for its ending, and collecting all four animals with your mind-gun tool.",
                "The achievements here: Irregularity (Find Sebastian's whereabouts, partway through the story.); The Aftermath (Finish the game and reach its ending.); Animal Collector (Collect all four animals with your mind-gun tool - a bird and a squirrel in the Graveyard (the bird in the tree branches, the squirrel beneath the 'always loved, never forgotten' tombstone), and two cats in the Prophecies area (one atop the boxing machine, one beside the Fortune Teller's entrance stairs).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, restoring each memory party as it becomes available.",
                "2. Along the way, keep an eye out in the Graveyard and Prophecies areas for the bird, squirrel and two cats for the hidden Animal Collector achievement.",
                "3. Follow the story to find Sebastian's whereabouts for the hidden Irregularity achievement.",
                "4. Finish the game to reach the ending and the hidden The Aftermath achievement.",
                "Tip: this is a short, one-sitting narrative game - a single careful playthrough that explores the Graveyard and Prophecies areas thoroughly gets all 10 achievements."
            ]
        }
    ]
};
