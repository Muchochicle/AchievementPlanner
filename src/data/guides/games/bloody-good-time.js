// Bloody Good Time Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bloody-good-time.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bloody-good-time-achievement-guide",
    "category": "game",
    "gameSlug": "bloody-good-time",
    "icon": "🗡",
    "title": "Bloody Good Time Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Bloody Good Time - none are hidden. Covers the round-based combat and objective feats, and the career Star totals and mastery achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bloody Good Time has 12 Steam achievements and none of them are hidden. They cover single-round feats - your first murder, a last-second infection pass, a 10-star fine Security escape, surviving as the Leader in Hunt the Leader, a perfect murder (boast + 5-star kill + humiliate), killing your Hunter 3 times in a round, and holding the statue for 60 seconds in Scene Stealer - plus career milestones (200 and 2000 Stars, win on every level, finish a match as every character, win without dying).",
                "Nothing is missable - every counter is cumulative and every mode and level stays available. This is a small multiplayer completion; the main issue is finding populated lobbies or using bots.",
                "Tip: most of these can be done against bots in a private match - set up the objective mode you need and the AI is predictable enough to pull off the round feats."
            ]
        },
        {
            "heading": "Combat & Round Feats",
            "body": [
                "Your first murder, a last-second infection pass, a 10-star fine Security escape, surviving as the Leader in Hunt the Leader, a perfect murder, and killing your Hunter 3 times in a single round.",
                "The achievements here: First Blood (Commit your first murder); Last Moment Upset (During an Infected scene, pass on your infection in the final 5 seconds and end the round clean); The Great Escapist (Escape from Security with a 10 Star fine); Untouchable (During a Hunt the Leader scene, survive the whole round as the Leader without being killed); Award Winning Scene (Commit a perfect murder (boast, 5 star kill, humiliate)); V for Vindictive (During a Hunt or Elimination scene, kill your Hunter 3 times in a single round)."
            ]
        },
        {
            "heading": "Career & Mastery",
            "body": [
                "Earning 200 and 2000 career Stars, winning a match on every level, finishing a match as every character, winning without being killed, and holding the statue for 60 seconds in Scene Stealer.",
                "The achievements here: Rising Star (Earn 200 Stars in your career); Superstar (Earn 2000 Stars in your career); Director’s Darling (Win a match on each level); Character Actor (Finish a match as each character); Screen Legend (Win a match without being killed); Hogging the Limelight (During a Scene Stealer scene, hold onto the statue for 60 seconds without being killed)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a match for \"First Blood\" and to learn the modes.",
                "2. In private bot matches, set up each objective mode you need and do its round feat (the infection pass, the Leader survival, the statue hold, the perfect murder).",
                "3. Win a match on every level and as every character.",
                "4. Win a match without dying.",
                "5. Keep playing toward 200 and then 2000 career Stars.",
                "Tip: the perfect murder (\"Award Winning Scene\") needs you to boast before the kill, land a 5-star kill, and humiliate the corpse - do it on an unaware bot in a quiet corner of the map."
            ]
        }
    ]
};
