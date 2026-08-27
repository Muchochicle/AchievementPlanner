// Portal's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data (backend/catalog/games/portal.json),
//   whose 15 achievements were sourced directly from Steam's own achievement
//   schema for appid 400 via ISteamUserStats/GetSchemaForGame (fetched
//   through this app's own backend/services/steamApi.js, the same service
//   the live app uses) - every quoted description below is that official
//   Steam text, not a curatorial guess. Independently cross-checked against
//   Steam's public community achievement stats page for appid 400, which
//   lists the same 15 names/descriptions in the same order.
// - The catalog's own missable:false (game-level and every individual
//   achievement) reflects Portal's chapter-select menu and always-available
//   Advanced Maps/Challenge Mode: nothing here is permanently missable, and
//   every achievement can still be earned long after finishing the story.
// - The grouping below (automatic story beats vs. the two
//   look-around-the-world achievements vs. the two distinct post-game
//   unlocks - Advanced Maps and Challenge Mode) is read from what each
//   achievement's own official description actually requires, not guessed:
//   e.g. Cupcake/Fruitcake/Vanilla Crazy Cake explicitly reference "Portal
//   advanced maps," and Basic/Rocket/Aperture Science explicitly reference
//   medals on "Portal challenges" - two separate, well-documented
//   menu-accessible modes unlocked after the campaign ends.
export const GUIDE = {

    slug: "portal-achievement-guide",
    category: "game",
    gameSlug: "portal",
    icon: "🔷",
    title: "Portal Achievement Guide",
    summary: "A practical guide to all 15 Steam achievements in Portal - the campaign, its two hidden secrets, and the post-game Advanced Maps and Challenge Mode.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Portal has 15 Steam achievements. Nothing is permanently missable: most unlock automatically just by finishing the roughly 3-hour campaign, and the rest come from two modes - Advanced Maps and Challenge Mode - that stay available from the main menu forever once you've beaten the game.",
                "A single unhurried playthrough plus one dedicated cleanup pass afterward is enough to see all 15 - there's no risk of locking yourself out of anything by playing normally first."
            ]
        },

        {
            heading: "Story Progress (Automatic)",
            body: [
                "Six achievements happen just by playing through the campaign normally, in roughly this order: Lab Rat (\"Acquire the fully powered Aperture Science Handheld Portal Device\"), Fratricide (\"Do whatever it takes to survive\" - the story forces this moment with the Weighted Companion Cube), and Partygoer (\"Make the correct party escort submission position decision\", GLaDOS' dialogue for the escape sequence near the end).",
                "Terminal Velocity (\"Fall 30,000 feet\") and Long Jump (\"Jump 300 feet\") are both cumulative distance counters that fill up naturally across a normal playthrough's portal usage - you don't need to detour for either, though both are easy to top off deliberately (drop through a floor/ceiling portal loop a few extra times) if they haven't popped by the credits.",
                "Heartbreaker (\"Complete Portal\") is simply finishing the story."
            ]
        },

        {
            heading: "The Two Secrets",
            body: [
                "Camera Shy (\"Detach security cameras from the walls\") is the one collectible-style achievement in the campaign: small wall-mounted cameras are scattered across most test chambers throughout the game, and shooting a portal near one knocks it loose. Missing a few on a first playthrough is normal - there's no per-level counter shown in-game, so if this hasn't unlocked by the end, a chamber-select replay pass specifically looking for cameras will finish it.",
                "Transmission Received (\"..?\") is Portal's well-known hidden secret: a concealed passage (found by breaking through a specific weak wall panel using momentum) leads to one of several \"Rat Man's den\" rooms hidden behind the test chambers, scrawled with the game's hidden backstory and a radio playing Morse code. If you don't already know which chamber hides it, a walkthrough for this specific achievement is worth checking rather than searching blind - it's the one achievement in this game that isn't discoverable just by playing attentively.",
                "Friendly Fire (\"Knock down a turret with another turret\") needs one deliberate action in a test chamber that has multiple active turrets later in the game: knock one turret over so it topples into another. It's a five-minute detour once you're in the right room, not a long hunt."
            ]
        },

        {
            heading: "Advanced Maps (Post-Game)",
            body: [
                "Beating the campaign unlocks Advanced Maps from the main menu - six harder remixes of earlier test chambers, playable in any order, any time. Cupcake needs 2 cleared, Fruitcake needs 4, and Vanilla Crazy Cake needs all 6 - each threshold-based achievement fires the moment you cross it, so clearing all six naturally earns all three.",
                "These aren't puzzle-design-wise much harder than the main campaign's late chambers, just longer and less hand-held - budget roughly an hour total for all six."
            ]
        },

        {
            heading: "Challenge Mode (Post-Game)",
            body: [
                "Also unlocked after beating the campaign: Challenge Mode replays each main-campaign test chamber under three separate scoring categories - least time, fewest portals placed, and fewest steps taken - awarding a bronze/silver/gold medal per chamber per category based on how you compare to Valve's own benchmarks.",
                "Basic Science needs bronze on every challenge, Rocket Science needs silver on every challenge, and Aperture Science needs gold on every challenge - gold is the real time investment here, since Valve's gold thresholds are tuned close to optimal, speedrun-style play on several chambers. This is comfortably the longest achievement in the game.",
                "Tip: chase these camera-loop-and-portal-placement-efficient routes chamber by chamber rather than trying to nail every category in one pass per chamber - time, portals, and steps often pull toward different routes, so replaying a chamber once per category is usually faster overall than trying to satisfy all three simultaneously."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the campaign through once normally, keeping an eye out for wall-mounted cameras (Camera Shy) as you go.",
                "If Camera Shy or the fall/jump-distance achievements haven't fired by the ending, do a quick chamber-select cleanup pass for whichever is left.",
                "Look up Transmission Received's specific chamber and wall if you want it without a blind search - it's the one achievement here that genuinely benefits from a walkthrough.",
                "Clear all six Advanced Maps in one sitting (covers Cupcake/Fruitcake/Vanilla Crazy Cake together), then save Challenge Mode's gold-medal sweep (Aperture Science) for whenever you're up for a longer, more deliberate session."
            ]
        }

    ]

};
