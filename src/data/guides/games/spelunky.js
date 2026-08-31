// Spelunky Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/spelunky.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   239350 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "spelunky-achievement-guide",
    "category": "game",
    "gameSlug": "spelunky",
    "icon": "🪃",
    "title": "Spelunky Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Spelunky - none are hidden. Covers the area-progression markers, completing the game (and the hard way), the journal, and the trick achievements - Ironman, sub-8-minute, no-treasure, the damsel and shopkeeper feats, the kapala, and rescuing all 16 hidden characters.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Spelunky (the 2013 HD version) has 20 Steam achievements and none of them are hidden. Five are area-progression markers (reach the Jungle, Ice Caves, Temple, City of Gold, and complete the game). The rest are feats: 500,000 gold, the Ankh, an Ironman (no-shortcut) run, a sub-8-minute run, completing the game the hard way (to Hell), 50% and 100% journal, rescuing 10 damsels in one game, killing 12 shopkeepers in one game, a no-treasure run, winning the kapala from Kali, a two-player-alive co-op clear, and rescuing all 16 hidden characters.",
                "Nothing is missable in the permanent sense - every achievement can be attempted on any new run - but Spelunky is a hard roguelike and the achievements are the completion, not a formality. Several (Ironman, Speedlunky, To Hell and Back, Low Scorer) require clean full runs.",
                "Tip: unlock the shortcuts first for practice, but remember the run achievements (Ironman, Speedlunky, Low Scorer, Good Teamwork) all require \"no shortcuts\" - a full run from the Mines. Learn to consistently reach the Temple before attempting them."
            ]
        },
        {
            "heading": "Progression & Endings",
            "body": [
                "The area markers (Tutorial, Jungle, Ice Caves, Temple, City of Gold, game complete), 500,000 gold, the Ankh, the Ironman and sub-8-minute no-shortcut runs, and completing the game the hard way.",
                "The achievements here: So It Begins (Beat the Tutorial.); Mines Shafted (Reach the Jungle.); Jungle Jammed (Reach the Ice Caves.); Ice Creamed (Reach the Temple.); Made It (Complete the game.); Big Money (Obtain 500,000 gold.); City of Gold (Reach the City of Gold.); Eternal Life (Obtain the Ankh.); Ironman (Complete the game without using shortcuts.); Speedlunky (Complete the game in under 8 minutes. No shortcuts.); Addicted (Play Adventure Mode 1000 times.); To Hell and Back (Complete the game the hard way.)."
            ]
        },
        {
            "heading": "Journal, Feats & Secrets",
            "body": [
                "50% and 100% journal completion, rescuing 10 damsels in one game, killing 12 shopkeepers in one game, a no-treasure clear, a two-player-alive co-op clear, winning the kapala from Kali, and rescuing all 16 hidden characters.",
                "The achievements here: Seen a Lot (Complete 50% of the journal.); Seen It All (Complete 100% of the journal.); Casanova (Rescue 10 or more damsels in one game.); Public Enemy (Kill 12 or more shopkeepers in one game.); Low Scorer (Complete the game without collecting any treasure. No shortcuts.); Good Teamwork (Complete the game with at least two players alive. No shortcuts.); Her Favorite (Win the kapala from Kali.); The Entire Gang (Rescue all 16 hidden characters.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally, unlocking the shortcuts and filling the journal toward 50% and 100%.",
                "2. Grind full no-shortcut runs until you can reliably reach the Temple, picking up the area markers and City of Gold / Ankh along the way.",
                "3. Do the trick runs: Ironman (any full clear), Speedlunky (under 8 minutes), Low Scorer (no treasure).",
                "4. Set up the one-game feats deliberately - rescue 10 damsels, kill 12 shopkeepers (expect to die to the Shopkeeper wrath, that is fine).",
                "5. Learn the Hell route (Book of the Dead, Vlad's Amulet, City of Gold) for \"To Hell and Back\", and rescue the remaining hidden characters.",
                "Tip: \"Public Enemy\" (12 shopkeepers) is easiest by triggering the shop aggro early and using the Shotgun you steal - you will die, but the kills still count for the run."
            ]
        }
    ]
};
