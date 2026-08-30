// Kingdom: New Lands Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kingdom-new-lands.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   496300 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kingdom-new-lands-achievement-guide",
    "category": "game",
    "gameSlug": "kingdom-new-lands",
    "icon": "👑",
    "title": "Kingdom: New Lands Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Kingdom: New Lands - none are hidden. Covers the day-by-day narrative achievements of an early game, the survival-day milestones up to day 100, and the per-land speedruns and reign progression through to the crown.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kingdom: New Lands has 34 Steam achievements and none of them are hidden. Ten are a narrative set for the first ten days of a single game (recruit eight archers on day one, hunt 20 deer by day four, destroy a portal by day ten). Fifteen are survival milestones - surviving to day 5, 10, 15... up to day 100 - which stack, so a single long game gets all of them at once. The last nine are per-land speedruns (build the boat and escape each of the five lands before a day limit) and reign progression (win your first game, a reign spanning five lands, and escaping the final land for Crowned).",
                "Nothing is missable across your whole account - the first-ten-days achievements just need one careful early game, and the survival and speedrun achievements can be pursued on separate runs. The completion is short; the trickiest achievements are the tight per-land speedruns and simply surviving to day 100 on the first land.",
                "Tip: do the first-ten-days achievement set on a dedicated, cautious opening game where you deliberately hit each day's requirement, then start a separate run purely for the day-100 survival milestone - trying to do both at once means the greed and portal-destruction goals pull you into fights that shorten the run."
            ]
        },
        {
            "heading": "The First Ten Days",
            "body": [
                "The narrative achievements for the opening days of a single game: eight archers on day one, free walls on day two, starting your camp on day three, 20 deer hunted by day four, five days without killing anything, being rich by day six, an acre cleared by day seven, never dropping a coin until day eight, never galloping until day nine, and destroying a portal by day ten.",
                "The achievements here: On the First Day I Built an Army. (On the first day you recruited eight archers.); On the Second Day I Got a Gift. (On the second day you got free walls.); On the Third Day I Lit a Fire. (On the third day you started your camp.); On the Fourth Day We Had a Feast. (By the fourth day you hunted 20 or more deer.); For Five Days I Turned the Other Cheek. (For five days you didn't kill anything.); By the Sixth Day I Was Rich. (By the sixth day you had more gold than you could carry.); By the Seventh Day I Cleared an Acre. (By the seventh day you cleared an acre of land.); On the Eighth Day I Fumbled. (Until the eighth day you never dropped a coin on the ground.); On the Ninth Day I First Ran. (Until the ninth day you never galloped.); On The Tenth Day We Fought Back! (By the tenth day you destroyed a portal.)."
            ]
        },
        {
            "heading": "Survival Milestones",
            "body": [
                "The stacking survival achievements: surviving to day 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90 and 100 in a single game (each earlier one unlocks automatically as you pass it).",
                "The achievements here: Day V (Survive day 5.); Day X (Survive day 10.); Day XV (Survive day 15.); Day XX (Survive day 20.); Day XXV (Survive day 25.); Day XXX (Survive day 30.); Day XXXV (Survive day 35.); Day XL (Survive day 40.); Day XLV (Survive day 45.); Day L (Survive day 50.); Day LX (Survive day 60.); Day LXX (Survive day 70.); Day LXXX (Survive day 80.); Day XC (Survive day 90.); Day C (Survive day 100.)."
            ]
        },
        {
            "heading": "Speedruns & Reign Progression",
            "body": [
                "Building the boat and escaping each of the five lands before its day limit (day 10, 15, 20, 25, 30), winning your first game, decorating your coat of arms with antlers, a reign spanning five lands, and escaping the final land to earn the crown (Crowned).",
                "The achievements here: Maiden Voyage (Build the boat and escape the first land before day 10.); Smooth Sailing (Build the boat and escape the second land before day 15.); Stormy Waters (Build the boat and escape the third land before day 20.); Reef the Main (Build the boat and escape the fourth land before day 25.); All Hands on Deck (Build the boat and escape the fifth land before day 30.); Birth of a Reign (Win your first game.); Interior Decoration (Earn some antlers to decorate your coat of arms.); Heraldic Achievement (Have a reign that spans five lands.); Crowned (Escape the final land and earn the crown.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a cautious opening game on the first land, deliberately meeting each of the first-ten-days requirements one day at a time.",
                "2. Start a fresh game purely to survive to day 100 on the first land - dig in, wall up, and turtle rather than expanding.",
                "3. Do the per-land speedruns: on a new reign, rush the boat on each land and escape before its day limit, which also progresses the five-lands reign achievement.",
                "4. Complete a full reign - escape all five lands to earn Crowned - and pick up the antlers and streak achievements along the way.",
                "Tip: for the speedruns, ignore almost everything except paying the builders and the boat - don't clear the whole map, don't fully wall up, and use the merchant and stables only if they are directly on the path to the dock, since every detour costs days."
            ]
        }
    ]
};
