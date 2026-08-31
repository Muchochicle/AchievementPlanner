// Snuggle Truck Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/snuggle-truck.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   111100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "snuggle-truck-achievement-guide",
    "category": "game",
    "gameSlug": "snuggle-truck",
    "icon": "🚛",
    "title": "Snuggle Truck Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Snuggle Truck - none are hidden. Covers the fuzzy-catching and stunt achievements and the run and medal achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Snuggle Truck has 11 Steam achievements and none are hidden. Seven are gameplay feats - catching 10, 50 and 200 fuzzies, a barrel roll, a long wheelie, catching a high-flying passenger, and the 'Horrible Driver' massacre - and four are run and medal milestones (12+ passengers to the zoo in one run, and earning 50, 100 and all medals).",
                "The catalog marks it a short single playthrough - the whole game is a couple of hours, and 'All Medals' is the only real completion goal. Nothing is missable.",
                "Tip: replay levels for gold medals as you go - 'All Medals' needs a strong (usually gold) result on every level, so cleaning up as you unlock them beats a big backtrack."
            ]
        },
        {
            "heading": "Fuzzies & Stunts",
            "body": [
                "Catching 10, 50 and 200 fuzzies, doing a barrel roll, an extra-long wheelie, catching a high-flying passenger, and the 'Horrible Driver' driving-atrocities feat.",
                "The achievements here: 10 Fuzzy Catcher (Catch 10 fuzzies!); 50 Fuzzy Catcher (Catch 50 fuzzies!); 200 Fuzzy Catcher (Catch 200 fuzzies!); Truck Flip (Do a barrel roll!); Wheelie Master (Do an extra long wheelie!); High Flier (Catch a high flying passenger.); Horrible Driver (Commit unspeakable driving atrocities.)."
            ]
        },
        {
            "heading": "Runs & Medals",
            "body": [
                "Getting 12 or more passengers safely to the zoo in one run, and earning 50, 100 and all medals.",
                "The achievements here: Fuzzy Run (Get 12 or more passengers safely to the zoo in one run.); 50 Medals (Earn 50 medals.); 100 Medals (Earn 100 medals.); All Medals (Earn ALL THE MEDALS :))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the levels, catching fuzzies and doing barrel rolls and wheelies.",
                "2. Get a clean run with 12+ passengers safely delivered for 'Fuzzy Run'.",
                "3. Replay levels for gold medals as you unlock them.",
                "4. Do the 'Horrible Driver' massacre feat on a level with a lot of passengers.",
                "5. Keep earning medals to 50, 100 and finally all for 'All Medals'.",
                "Tip: 'High Flier' (catch a high-flying passenger) is easiest on ramp-heavy levels - launch off a jump and steer into a passenger arc rather than waiting for one to land."
            ]
        }
    ]
};
