// REMATCH Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rematch.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2138720 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rematch-achievement-guide",
    "category": "game",
    "gameSlug": "rematch",
    "icon": "⚽",
    "title": "REMATCH Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in REMATCH (2 hidden). Covers scoring, saving, assisting and match-progression milestones, plus customization and workshop training. Two of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "REMATCH has 37 Steam achievements and 2 are hidden. About twenty cover playing the ball - scoring goals (including a hat trick, a volley and an off-the-woodwork goal), goalkeeper saves, and assists (a no-look pass, a rebound, an assist as goalkeeper). The rest are match and progression milestones - your first win, a clean sheet, a ranked win, an MVP award, a win streak, reaching level 10 and 30, customization, the shop, and the workshop training modes, plus two running-distance achievements and the hidden prologue and friends-squad achievements.",
                "The catalog marks it difficulty 2. REMATCH is Sloclap's (Sifu) online arcade football game, so most achievements come naturally from playing matches; the higher-tier counters (100 goals, 100 saves, 5 gold-medal workshops) are the real grind.",
                "Tip: play the prologue first for the hidden 'It's just a game', and invite a Steam friend into your squad early for 'Power of friendship' rather than saving it for later."
            ]
        },
        {
            "heading": "Prologue, Scoring, Saves & Assists",
            "body": [
                "The hidden prologue-completion achievement, then scoring goals (a hat trick, an acrobatic volley, a shot off the woodwork, running totals up to 100), goalkeeper saves (including an overtime save), and assists (a no-look pass, a rebound, an assist as goalkeeper, delivering a goal/save/assist in one match).",
                "The achievements here: It's just a game (Complete the prologue tutorial.); Goal! (Score your first goal.); Serial scorer (Score 30 goals.); Golden boots (Score 100 goals.); Acrobat (Score a goal with an acrobatic volley shoot.); Pinball (Score a goal off the woodwork.); Hats off (Score a hat trick.); Marathon runner (Run 42,195 km.); Not in my house! (As goalkeeper, perform a save.); Rampart (As goalkeeper, perform 30 saves.); Golden gloves (As goalkeeper, perform 100 saves.); Guardian angel (As goalkeeper, save a shot on target in overtime.); Team first! (Deliver your first assist.); Vista (Deliver 30 assists.); Maestro (Deliver 100 assists.); Make them shine (Deliver an assist leading to an equalizer.); Post to post (Deliver an assist as goalkeeper.); Eyes closed (Deliver an assist with a no look pass.); Alley-oop (Deliver an assist with a rebound on a wall.); Versatile (Deliver an assist, score a goal and perform a save in the same match.)."
            ]
        },
        {
            "heading": "Matches, Progression & Friends",
            "body": [
                "Customizing an outfit, the shop and its item counts, your first win, a clean sheet, a ranked win, an MVP award, a running-distance milestone, a 3-match win streak, reaching level 10 and 30, and the hidden Power of friendship achievement for playing with a Steam friend in your squad.",
                "The achievements here: New look (Customize an outfit slot on a character.); Shopping (Acquire your first item.); Fashion victim (Collect 15 items.); Starting blocks (Win your first match.); Clean sheet (Win a match without conceding any goals.); Competitor (Win your first ranked match.); Winner (Win 30 matches in any game mode.); The Special One (Win the MVP award for the first time.); Ultra Trail (Run 170 km.); Can't lose (Win 3 matches in a row.); Pro (Reach level 10.); Expert (Reach level 30.); Power of friendship (Play a match with at least one Steam friend in your squad.)."
            ]
        },
        {
            "heading": "Workshops & Career Finale",
            "body": [
                "Completing your first workshop, 5 workshops with at least bronze medals, 5 workshops with gold medals, and the career-milestone finale achievement.",
                "The achievements here: Back on track (Complete your first workshop.); Mr Fundamentals (Complete 5 workshops with bronze medals minimum.); No pain no gain (Complete 5 workshops with gold medals.); Making History (The beginning of an amazing career.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the prologue first for the hidden 'It's just a game'.",
                "2. Jump into matches for the goal, save and assist ladder, and invite a Steam friend into your squad for 'Power of friendship'.",
                "3. Handle customization, the shop, and your first ranked win and win streak along the way.",
                "4. Work through the workshop training modes, aiming for gold medals on at least 5 of them.",
                "5. Keep playing to push your goal, save and assist totals up to 100, and climb toward level 30.",
                "Tip: the running-distance and 100-tier achievements (goals, saves, assists) are the real long-tail grind - they'll come naturally the more matches you play."
            ]
        }
    ]
};
