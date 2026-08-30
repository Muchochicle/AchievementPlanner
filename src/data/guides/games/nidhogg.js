// Nidhogg Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nidhogg.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   94400 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nidhogg-achievement-guide",
    "category": "game",
    "gameSlug": "nidhogg",
    "icon": "🤺",
    "title": "Nidhogg Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Nidhogg - none are hidden. Covers single-player and online match milestones, and the game's signature style-point feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nidhogg has 12 Steam achievements and none are hidden - though a couple keep their own sense of humor even with a real, official description (NSA's is just \"Intelligence gathered\"). The list splits into single-player and online match milestones (beating the campaign, dominating a level or a whole game, 100 kills in a match, a 20+ minute match, 100 matchmaking wins, finishing an 8-player tournament) and the game's signature style-point feats - specific, flashy things that can happen during a duel rather than raw win conditions.",
                "Nothing is missable - every match-count and style-point achievement can be earned in any future match, and Nidhogg's short round length means you get plenty of chances to fish for the specific situational feats. A few (Memories, Prometheus, Comeback Kid, Slow Played) genuinely need a particular moment in a duel to line up, so do not expect them on demand.",
                "Tip: the style-point achievements (Comeback Kid, Slow Played, Memories, Prometheus) are much easier to set up in local matches against a friend who is in on it than in random online matchmaking - if you are struggling to land one naturally, ask a friend to help you engineer the specific situation in a private match."
            ]
        },
        {
            "heading": "Match Milestones",
            "body": [
                "The core play-volume achievements: beating the single-player game, dominating a single level or an entire single-player game, reaching 100 total kills in one match, playing a match longer than 20 minutes, winning 100 matchmaking games, and finishing an 8-player tournament.",
                "The achievements here: FLESH AND BLOOD (Beat the singleplayer game); PERFECT STRIDE (Win the faceoff and never lose the arrow in a singleplayer match); HOGGLIKE (Dominate every level in one singleplayer game); BLOODLUST (100 total kills in one match); TRAPPED IN DONKEYSPACE (play a match lasting longer than 20 minutes); VALKYRIE (Win 100 games through matchmaking); GTD (Finish an 8 player tournament)."
            ]
        },
        {
            "heading": "Signature Feats",
            "body": [
                "The game's style-point achievements: getting eaten by the Nidhogg after nearly letting your opponent do the same (Comeback Kid), winning in sudden death after the timer runs out on your opponent's last screen (Slow Played), trapping an opponent on your sword while moving it up and down (Memories), running your final screen with your sword cocked the whole way (Prometheus), and NSA - officially described only as \"Intelligence gathered.\"",
                "The achievements here: COMEBACK KID (Get eaten by the nidhogg after nearly allowing your opponent to do the same); SLOW PLAYED (Let the timer run out in your opponent's last screen and win in sudden death); MEMORIES (Trap your opponent on your sword for a long time while moving it up and down); PROMETHEUS (Run across your final screen in the castle with your sword cocked the whole time); NSA (Intelligence gathered)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Beat the single-player campaign, then replay it aiming to dominate a level (win the faceoff and never lose the arrow) and eventually every level in one game.",
                "2. Play online matches toward the volume achievements: a 100-kill match, a match over 20 minutes, and 100 matchmaking wins over time.",
                "3. Finish an 8-player tournament bracket.",
                "4. Set up the style-point achievements deliberately, ideally with a cooperative friend in a local match: get eaten by the Nidhogg after nearly winning yourself (Comeback Kid), win in sudden death after your opponent runs out the clock on your last screen (Slow Played), trap an opponent on your sword while moving it up and down (Memories), and run your entire final screen with your sword cocked (Prometheus).",
                "5. Poke around the game's own systems and Steam client for NSA (Intelligence gathered) - it is intentionally left cryptic even in its own official description.",
                "Tip: dominating a level (winning the faceoff and never losing the arrow) is much easier on the earlier, shorter levels - practice the technique there before attempting it on a full multi-screen level for Hogglike (dominating an entire game)."
            ]
        }
    ]
};
