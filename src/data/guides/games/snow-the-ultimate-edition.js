// SNOW Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/snow-the-ultimate-edition.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   244930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "snow-the-ultimate-edition-achievement-guide",
    "category": "game",
    "gameSlug": "snow-the-ultimate-edition",
    "icon": "🏂",
    "title": "SNOW Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in SNOW - none are hidden. Covers the trick and air-time milestones, and the speed, distance and progression milestones. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "SNOW - The Ultimate Edition has 33 Steam achievements and none are hidden. They are all cumulative milestones: grind time, Perfect Landings, air time, total degrees flipped / rolled / spun, top speed (up to 50 m/s), total distance ridden (up to 5,000 km), distance ridden switch, total score, and player level (up to 60).",
                "The catalog marks it a short single (long-term) playthrough - everything accrues just by riding, so the only real time sink is the 5,000 km distance and level 60. Nothing is missable.",
                "Tip: pick a long open mountain route and do a continuous run - distance, air time, flips/rolls/spins, score and level all climb together on one descent."
            ]
        },
        {
            "heading": "Trick & Air Milestones",
            "body": [
                "Grinding for 120 / 500 / 2,000 seconds, 50 / 200 / 1,000 Perfect Landings, 300 / 1,000 / 5,000 seconds of air time, and flipping, rolling and spinning a total of tens to hundreds of thousands of degrees.",
                "The achievements here: Pepper Grinder (Grind for a total of 120 seconds); On the grind (Grind for a total of 500 seconds); Grinding your teeth (Grind for a total of 2,000 seconds); Stomp (Achieve 50 Perfect Landings); Stomper (Achieve 200 Perfect Landings); Stompest (Achieve 1,000 Perfect Landings); Up in the air (Spend a total of 300 seconds in the air); Air Miles (Spend a total of 1,000 seconds in the air); Frequent Flyer (Spend a total of 5,000 seconds in the air); Flipper (Flip a total of 36,000°); Flip Flop (Flip a total of 180,000°); Flipping the Bird (Flip a total of 360,000°); On a Roll (Roll a total of 36,000°); Keep Rollin (Roll a total of 180,000°); You've gotta roll with it (Roll a total of 360,000°); Spinning top (Spin a total of 18,000°); Spin to win (Spin a total of 36,000°); Future Spin (Spin a total of 540,000°)."
            ]
        },
        {
            "heading": "Speed, Distance & Progression",
            "body": [
                "Reaching 30 / 40 / 50 m/s, riding a total of 50 / 500 / 5,000 km, riding switch for 25 / 250 / 1,000 km, accumulating 10,000 / 30,000 / 100,000 points, and reaching level 10, 30 and 60.",
                "The achievements here: Speed demon (Achieve a speed of 30m/s); I've got the need... (Achieve a speed of 40m/s); ...The need, for speed! (Achieve a speed of 50m/s); Touring (Travel a total distance of 50km); Boring (Travel a total distance of 500km); Snoring (Travel a total distance of 5,000km); Back to front (Ride switch a total distance of 25km); Sdrawkcab (Ride switch a total distance of 250km); It feels like we're only going backwards (Ride switch a total distance of 1,000km); That counts (Accumulate 10,000 points); I get the point (Accumulate 30,000 points); Count Dracula (Accumulate 100,000 points); Level playing field (Reach level 10); Do you need a level? (Reach level 30); Let me level with you (Reach level 60)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Ride long open routes doing tricks - flips, rolls, spins and Perfect Landings all accrue together.",
                "2. Chase the speed milestones on steep sections (30, 40, 50 m/s).",
                "3. Keep riding for the distance totals (50, 500, 5,000 km) and the switch-distance totals.",
                "4. Let score and player level climb toward 100,000 points and level 60.",
                "5. Mop up the grind-time and air-time totals on park sections.",
                "Tip: 'Snoring' (5,000 km total) is the long pole - just keep the game to a long point-to-point line rather than restarting short runs."
            ]
        }
    ]
};
