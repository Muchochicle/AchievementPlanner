// PlateUp! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/plateup.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1599600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "plateup-achievement-guide",
    "category": "game",
    "gameSlug": "plateup",
    "icon": "🍽️",
    "title": "PlateUp! Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in PlateUp! - none are hidden. dishes, kitchen chaos & feats, progression & challenge days.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "PlateUp! has 26 Steam achievements and none are hidden. Nine are \"serve dish X\", nine are chaos/trick feats (fires, a sub-second serve, a conveyor loop), and the rest are run-level goals - a franchise, the Overtime day milestones, and the restriction-day achievements.",
                "Nothing is missable and everything is account-wide. The only real grind is Overtime Day 15, which needs a very strong, well-automated kitchen deep into a run; the rest are one-offs you can set up deliberately.",
                "Tip: unlock every dish across a few runs for the dish achievements, then do a dedicated \"mess around\" run for the chaos feats (deliberately start fires, wear the wrong gear, build a conveyor loop). Save Overtime Day 15 for a run where your automation and money are strong."
            ]
        },
        {
            "heading": "Dishes",
            "body": [
                "Serving each dish to a customer at least once: steak, stir fry, pizza, salad, pie, fish, hotdog, breakfast and burger.",
                "The achievements here: Steaks Were Made (Serve a steak to a customer); Stirring Things Up (Serve a stir fry to a customer); Piece of the Action (Serve a pizza to a customer); A New Leaf (Serve a salad to a customer); Soggy Bottom (Serve a pie to a customer); Something Fishy (Serve a fish to a customer); Man's Best Friend? (Serve a hotdog to a customer); Least Important Meal (Serve a breakfast to a customer); Burger Prince (Serve a burger to a customer)."
            ]
        },
        {
            "heading": "Kitchen Chaos & Feats",
            "body": [
                "The chaos and trick achievements: a day with a 15-second fire, 10 appliances on fire at once, a sub-second serve, a day with a mess on 10 tiles, setting a customer on fire, the Danger Hob with Gas Safety Override, Trainers plus a Sharp Knife, a conveyor loop, and activating Practice Mode.",
                "The achievements here: This Is Fine (Complete a day when the restaurant has been on fire for more than 15 seconds); Fireman (Complete a day with 10 appliances on fire at once); Flawless Timing (Serve a customer with less than a second to spare); Health Inspector? (Complete a day with a mess on at least 10 tiles); Oh No (Set a customer on fire); Charcoal Factory (Cook something on a Danger Hob with an activated Gas Safety Override); Safety Last (Wear Trainers while holding a Sharp Knife); Circle Line (Convey an item back to where it started); Chef School (Activate Practice Mode during preparation time)."
            ]
        },
        {
            "heading": "Progression & Challenge Days",
            "body": [
                "The run-level goals: creating a franchise, reaching Overtime Day 5 / 10 / 15, the tutorial fish gag, and the restriction-day achievements (no direct serving, no player leaving their tile, the first group still waiting at day's end).",
                "The achievements here: New Chef Plus (Create a franchise); Overtime 5 (Reach Overtime Day 5); Overtime 10 (Reach Overtime Day 10); Overtime 15 (Reach Overtime Day 15); Learning By Doing (Throw away a cooked fish in the tutorial); Anti-social (Complete a day without anyone serving a customer directly); Work Smart (Complete a day without any player leaving the tile they started on); Please Wait (Have the first group to arrive still be waiting to order when the day ends)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a few runs choosing different dishes to get the nine dish achievements.",
                "2. Do a chaos run for the fire, sub-second serve, mess, and gear-gag achievements - these are easier when you are not trying to win.",
                "3. Do the restriction-day achievements (Anti-social, Work Smart, Please Wait) as one-offs on an easy early day.",
                "4. Build toward a strong automated kitchen and push for Overtime Day 15.",
                "Tip: Fireman (10 appliances on fire at once) and This Is Fine (15-second fire) are easiest on a cramped kitchen with lots of hobs - let a small fire spread, then put it out and finish the day rather than restarting."
            ]
        }
    ]
};
