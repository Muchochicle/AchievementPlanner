// Kingdom: Classic Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kingdom-classic.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   368230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kingdom-classic-achievement-guide",
    "category": "game",
    "gameSlug": "kingdom-classic",
    "icon": "👑",
    "title": "Kingdom: Classic Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Kingdom: Classic - none are hidden. Covers the \"On the Nth Day\" opening-days challenges, the \"Day V\" through \"Day LX\" survival milestones, and the final challenges for securing the crown.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kingdom: Classic has 34 Steam achievements and none of them are hidden. Two groups: a set of \"On the Nth Day\" challenges tied to the first ten days (recruit 8 archers day one, don't start your camp until day three, hunt 20 deer by day four, kill nothing until day six, clear an acre by day seven, and so on), and the \"Day V\" through \"Day LX\" survival milestones for simply surviving past days 5, 10, 15 ... up to 60. Four \"Safe in N\" achievements ask you to make your kingdom permanently safe from harm.",
                "Nothing is missable across your account - the survival milestones accumulate over any run - but the \"On the Nth Day\" challenges each require a fresh run played a specific way in the opening days, so they are effectively per-attempt.",
                "Tip: do the early-day challenges on dedicated short runs (you can restart the moment you have the one you want), then settle in for a long defensive game to tick the survival milestones up to Day LX."
            ]
        },
        {
            "heading": "The Nth Day Challenges",
            "body": [
                "The opening-days challenges - recruit 8 archers on day one, free walls on day two, don't camp until day three, hunt 20 deer by day four, kill nothing until day six, be rich by day six, the day-eight coin feat, don't lose your steed before day nine, and destroy a portal by day ten.",
                "The achievements here: On the First Day I Built an Army (Recruit 8 archers on the first day.);  On the Second Day I Got a Gift (Get free walls on the second day.); On the Third Day I Lit a Fire (Do not start your camp until day 3.); On the Fourth Day We Had a Feast (Hunt 20 deer before the end of day four.); For Five Days I Turned the Other Cheek (Kill nothing until day six.); By Day Six I Was Rich (Have more gold than you can carry by day six.); On the Eighth Day I Fumbled (A nimble ruler will never let his money touch the ground.); On the Ninth Day I First Ran (Do not let your steed run away before this day.); The Tenth Day We Fought Back (Destroy by this day from whence they came!)."
            ]
        },
        {
            "heading": "Survival Milestones",
            "body": [
                "Surviving past day 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55 and 60, plus the intermediate milestones - straightforward endurance achievements that accrue over your longest run.",
                "The achievements here: Day V (Survive past day 5. ); Day X (Survive past day 10); Day XV (Survive past day 15); Day XX (Survive past day 20); Day XXV (Survive past day 25); Day XXX (Survive past day 30); Day XXXV (Survive past day 35); Day XL (Survive past day 40); Day XLV (Survive past day 45); Day L (Survive past day 50); Day LV (Survive past day 55); Day LX (Survive past day 60); Day LXV (Survive past day 65); Day LXX (Survive past day 70); Day LXXV (Survive past day 75); Day LXXX (Survive past day 80); Day LXXXV (Survive past day 85); Day XC (Survive past day 90); Day XCV (Survive past day 95); Day C (Survive past day 100)."
            ]
        },
        {
            "heading": "Final Challenges & Securing the Crown",
            "body": [
                "Clearing an acre of land before the end of day seven, and the four \"Safe in N\" achievements for making your kingdom permanently safe from harm by destroying every portal.",
                "The achievements here: By the Seventh Day I Cleared an Acre (Clear an acre of land before the end of day seven.); Safe in 25 (Secure the crown by making your kingdom safe from harm.); Safe in 30 (Secure the crown by making your kingdom safe from harm.); Safe in 35 (Secure the crown by making your kingdom safe from harm.); Safe in 40 (Secure the crown by making your kingdom safe from harm.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do quick restart-heavy runs for the early-day challenges (8 archers day one, no camp until day three, 20 deer by day four).",
                "2. On another short run, get \"For Five Days I Turned the Other Cheek\" (kill nothing until day six) and the day-six wealth achievement.",
                "3. Play a careful long game, expanding steadily, to climb the Day V -> Day LX survival milestones.",
                "4. On that run, clear an acre by day seven and work toward destroying the portals.",
                "5. Push to fully clear every portal on both sides for the \"Safe in N\" achievements.",
                "Tip: the survival milestones do not require the same run - your best game's furthest day is what counts, so focus on one strong defensive run rather than restarting."
            ]
        }
    ]
};
