// Trombone Champ Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trombone-champ.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1059990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trombone-champ-achievement-guide",
    "category": "game",
    "gameSlug": "trombone-champ",
    "icon": "🎺",
    "title": "Trombone Champ Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Trombone Champ - 5 are hidden. Covers song and scoring milestones, cosmetic and Tromboner Card collection, and the four secret-room easter-egg achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trombone Champ has 25 Steam achievements, and 5 are hidden. The visible list covers playing tracks and racking up \"S\" ranks, unlocking trombone colors and Sound Sets, collecting Tromboner Cards, and a few joke achievements for going the opposite direction (staying silent, never tooting). The 5 hidden ones are all secret-room easter eggs and card-collection milestones that Steam ships with no description at all.",
                "Nothing is missable - every card, color, Sound Set, and S-rank count is a permanent save-file stat, and the secret rooms stay accessible any time you want to revisit them. There is no wrong order to do things in; just play tracks, collect cards, and poke at the game's odder menu corners.",
                "Tip: the two character-cameo hidden achievements (The Tootmaster, The Bassmaster) are both found by spam-clicking something in a dimly-lit secret room reached from an unusual menu interaction - Trombone Champ hides a lot of its best jokes behind exactly this kind of \"click the weird thing repeatedly\" discovery, so when something looks a little too clickable, click it a lot."
            ]
        },
        {
            "heading": "Scoring & Song Mastery",
            "body": [
                "The core rhythm-game ladder: playing 20 tracks, the \"S\" rank tiers from 1 through 20+ tracks, and the joke achievement for abstaining from tooting entirely.",
                "The achievements here: The Music Enjoyer (Play at least 20 tracks); S Apprentice (Receive an \"S\" score on one track); S Associate (Receive an \"S\" score on five tracks); S Aficionado (Receive an \"S\" score on ten tracks); S Virtuoso (Receive an \"S\" score on fifteen tracks); S GOD (Receive an \"S\" score on twenty or more tracks); I Would Prefer Not To (Abstain from tooting)."
            ]
        },
        {
            "heading": "Customization & Collection",
            "body": [
                "Unlocking trombone colors and Sound Sets (one, then all of each), collecting your first Tromboner Card and 50 of them, turding your last Mozart card, staying silent completely, and expressing your love of baboons.",
                "The achievements here: Aesthete (Unlock a trombone color); Apex Aesthete (Unlock all trombone colors); Gettin' Tootier (Unlock a Sound Set); Got Tootiest (Unlock all Sound Sets); Yo! I Got a Sack (Get a sack); Card Collector (Get 50 Tromboner Cards); Never Liked the Guy (Turd your last Mozart card); No more (Abstain from sound completely); I Want Them All! (Express your love of baboons)."
            ]
        },
        {
            "heading": "Champion Status & Endgame",
            "body": [
                "The skill-ceiling achievements: becoming the Trombone Champ of Legend, developing a Big Brain full of facts, and the top two \"S\" rank tiers (25 and 30+ tracks).",
                "The achievements here: TROMBONE CHAMP (Become the Trombone Champ of Legend); Big Brain Scholar (Develop an enormous brain full of facts); S ULTRA-GOD (Receive an \"S\" score on twenty-five or more tracks); S ULTRA-MEGA-GOD (Receive an \"S\" score on thirty or more tracks)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 5 of Trombone Champ's hidden achievements are secret-room easter eggs and card-collection milestones, sourced from community guides (Steam Community, KosGames, the Trombone Champ Fandom wiki):",
                "The Tootmaster: Get an \"S\" score on 4 different tracks first. Then, from the Main Menu, click \"Baboon\" to reach a dimly lit room; click the hatch to inspect it, click all 4 \"S\" corners then the center to unlock it, then spam-click the hatch to meet Tootmaster Tom, the game's Toot Vessel character.",
                "The Bassmaster: Obtain a copy of the Bass Clef card (#23), open your Collection, click the card to view its full-size art, then spam-click the card art itself. This drops you into a dimly lit room with a hatch on the left and the Turdvessel's silhouette on the right - meet Bassmaster Ben, the game's Turd Vessel character, to unlock it.",
                "New Friend: In the Card Collection screen, look in the bottom-right corner for a small candle icon. Spam-click it to summon a new friend and unlock the achievement.",
                "I DID ENGOLDENATION: Collect 10 copies of the same Tromboner Card, then select and confirm the \"Engoldenate\" prompt on it - the 10 duplicates combine into a single card with a gold border instead of the usual blue one. (Turding an Engoldenated card removes the effect, so you would need to collect 10 copies again.)",
                "ENGOLDENATION GOD: The follow-up to Engoldenating a single card: repeat the same 10-copies-into-one \"Engoldenate\" process (see I DID ENGOLDENATION) until every unique card in your Collection has been converted to its gold-bordered Engoldenated version."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through tracks naturally and aim for \"S\" ranks as your skill improves, working toward the 20-and-30-track S-rank tiers.",
                "2. Play at least 20 tracks total for The Music Enjoyer, and unlock trombone colors and Sound Sets as you earn currency.",
                "3. Collect Tromboner Cards through normal play toward 50 for Card Collector, then work on getting 10 copies of any single card to Engoldenate it (I DID ENGOLDENATION), and eventually every card (ENGOLDENATION GOD).",
                "4. Find the two secret-room easter eggs: get an S score on 4 tracks and click into the Baboon room on the Main Menu for The Tootmaster, and spam-click a Bass Clef card in your Collection for The Bassmaster.",
                "5. Visit the Card Collection screen's bottom-right candle for New Friend, turd your last Mozart card, and try the joke achievements (abstain from tooting, abstain from all sound, express your love of baboons) whenever you feel like a change of pace.",
                "Tip: Big Brain Scholar and TROMBONE CHAMP itself are late-game/skill-ceiling achievements tied to deeper play - do not expect either on your first few sessions; they come naturally once you have logged real hours with the trombone."
            ]
        }
    ]
};
