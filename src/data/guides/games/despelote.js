// despelote Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/despelote.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2367820 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "despelote-achievement-guide",
    "category": "game",
    "gameSlug": "despelote",
    "icon": "🏟",
    "title": "despelote Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in despelote - none are hidden. Covers scoring, match outcomes and trick-shot moments in this short autobiographical street-football game. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "despelote has 11 Steam achievements and none are hidden. All of them are moments from playing street football as a kid in Quito, Ecuador - scoring a goal, winning and losing matches by a landslide, keeping a clean sheet, scoring in the last 5 minutes, scoring with the goalkeeper, an own goal, a long-range golazo, and kicking the ball clean out of the stadium.",
                "The catalog marks it difficulty 1. despelote is a very short, autobiographical narrative game (well under 2 hours), so there's no real grind here - most of these happen naturally while kicking the ball around during the story.",
                "Tip: play a few extra pickup games if any are on offer before the story moves on, since a couple of these (an own goal, kicking the ball out of the stadium) are more about trying odd things than playing well."
            ]
        },
        {
            "heading": "Playing the Match",
            "body": [
                "Scoring your first goal, winning the match, winning by 5 goals, keeping a clean sheet, scoring 3 goals during warmup in 30 seconds, and a golazo from outside the box.",
                "The achievements here: Gol (score a goal); Si Se Puede (win the match); Goleada (win by 5 goals); Invicto (don't let the other team score); Listo (score 3 goals during warmup in 30 seconds); Golazo (score from outside the box)."
            ]
        },
        {
            "heading": "Trick Shots & Misadventures",
            "body": [
                "Scoring in the last 5 minutes, scoring with the goalkeeper, an own goal, losing a match by 15 goals, and kicking a ball clean out of the stadium.",
                "The achievements here: El Gol Del Tin (score in the last 5 minutes); Gol De Arquero (score with the goalkeeper); Auto Gol (score an own goal); Jugamos Como (lose the match by 15 goals); Despelotini (kick a ball outside of the stadium)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Just play through despelote's short story - most goals and match outcomes happen naturally.",
                "2. During any pickup game or warmup, try for the trick shots: a golazo from outside the box, scoring with the goalkeeper, or scoring in the last 5 minutes.",
                "3. For the odder ones, deliberately try an own goal and kick the ball clean out of the stadium at some point.",
                "Tip: this is a short, one-sitting game - a single relaxed playthrough is enough to catch all 11 achievements."
            ]
        }
    ]
};
