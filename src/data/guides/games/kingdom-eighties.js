// Kingdom Eighties Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kingdom-eighties.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1956040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kingdom-eighties-achievement-guide",
    "category": "game",
    "gameSlug": "kingdom-eighties",
    "icon": "🏕",
    "title": "Kingdom Eighties Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in Kingdom Eighties - none are hidden. None of the achievements are hidden. Covers completing all four episodes, destroying the portals in every biome, recruiting each type of kid, the Hard and Cursed difficulty clears, and a set of speed, survival and self-restriction challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kingdom Eighties has 31 Steam achievements and none are hidden. The story track is finding the missing trophy, destroying a portal in each area (forest, streets, mall, and one on Peaceful), entering a cave, and completing Episodes I to IV. Around it are recruiting an athletic, handy, smart and friendly kid, a run of 1980s pop-culture gags (a DeLorean, a shark, a monster truck, making it rain coins on a BMX), and the challenge achievements - a Hard clear, a Cursed clear, surviving 50 days on one level, winning in 50 days or fewer, completing a level with only two workers or no more than 20 kids, and losing 80 coins to the water.",
                "The catalog marks it difficulty 4. Kingdom Eighties is a Kingdom-series defence game and the Cursed-difficulty clear ('Captain N') is a real challenge; the speed and restriction runs ('Don't Smell the Flowers' - win in 50 days, 'Loner' - 20 kids max) also demand efficient play. The story and gag achievements come naturally.",
                "Tip: do the restriction challenges ('George Burnett Had Twins' - two workers, 'Loner' - 20 kids) on the earliest, easiest episode where the defence pressure is lowest, rather than trying to hold a late level shorthanded."
            ]
        },
        {
            "heading": "Episodes & Portals",
            "body": [
                "Finding the missing trophy, destroying portals in a forest (twice), on the streets and around the mall, entering a cave, and completing Episodes I ('No Camp Pinewood!'), II, III and IV.",
                "The achievements here: Confidence is an Illusion (Find the missing trophy); 1st Down (Destroy a portal in a forest); 2nd Down (Destroy another portal); Hail Mary (Enter a cave); No Camp Pinewood! (Complete Episode I); Calling Dr. Martha Lesh (Complete Episode II); I Miss Hill Valley (Complete Episode III); An Excellent Adventure (Complete Episode IV); 3rd Down (Destroy a portal on the streets); Touchdown (Destroy a portal around the mall)."
            ]
        },
        {
            "heading": "Recruits & Gags",
            "body": [
                "Recruiting an athletic, handy, smart and friendly kid, waiting for the bus, the BMX coin-rain, getting something back from the past, defeating 10 greed with a machine gun, getting eaten by a shark, slapping a monster truck, and the rainbow-pony gag at Paradise Estate.",
                "The achievements here: Letterman (Recruit someone athletic); Chief Technician (Recruit someone handy); Falken's Maze (Recruit someone smart); Rover-Rooby-Roo! (Recruit someone friendly); County Connection (Wait for the bus); BMX Model 3003 (Uncredited professional BMX rider making it rain coins); 88 mph (Get something back from the past); The Force of Freedom (Defeat 10 greed with a machine gun); REALLY REALLY Personal (Get eaten by a shark); Muscle Machine (Slap a monster truck); My Little Horsey! (Rainy day at Paradise Estate with Rainbows in tow)."
            ]
        },
        {
            "heading": "Challenges",
            "body": [
                "Completing a level with only two workers, losing and retaking the Crown, clearing every tree on a level, completing the game on Hard and on Cursed, surviving 50 days on one level, winning in 50 days or fewer, completing a level with no more than 20 kids, losing 80 coins to the water, and destroying a portal on Peaceful.",
                "The achievements here: George Burnett Had Twins (Complete a level with only two workers); Clumsy (Lose the Crown, and take it back); Saw Boss (Clear all the trees on any level); Wizard (Complete the game on Hard); Captain N (Complete the game on Cursed); Stubborn (Survive for 50 days in one level); Don't Smell the Flowers (Complete the game in 50 days or less); Loner (Complete a level with no more than 20 kids); It's Not a Wishing Well (Lose 80 coins to the waters); It Still Counts (Destroy a portal on Peaceful)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, completing Episodes I-IV and destroying a portal in every biome.",
                "2. Recruit each kid type and pick up the 1980s gags as you play.",
                "3. Do the restriction challenges (two workers, 20 kids) on an early episode.",
                "4. Do a fast run for 'Don't Smell the Flowers' (win in 50 days) and a slow one for 'Stubborn' (survive 50 days).",
                "5. Clear the game on Hard, then on Cursed for 'Captain N'.",
                "Tip: 'Saw Boss' (clear every tree on a level) is easiest on a small early map - clearing trees removes your archer cover, so do it somewhere the greed pressure is low enough to survive without the forest wall."
            ]
        }
    ]
};
