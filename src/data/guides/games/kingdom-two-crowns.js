// Kingdom Two Crowns Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kingdom-two-crowns.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   701160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kingdom-two-crowns-achievement-guide",
    "category": "game",
    "gameSlug": "kingdom-two-crowns",
    "icon": "👑",
    "title": "Kingdom Two Crowns Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in Kingdom Two Crowns - none are hidden. Covers the early-days build order, exploration and combat challenges, defeating the Greed across every land, and the Shogun 2 wait - the Skull Island and Mount Olympus expansion campaigns.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kingdom Two Crowns has 46 Steam achievements and none are hidden. The base game covers the early-days build order (archers, walls, camp, hunting, gold, land clearing, the Crown forge, holding a Gem, destroying a portal), a run of specific exploration and combat challenges (riding different steeds, filling a boat with hermits, maxing towers, escaping the cave), and defeating the Greed on one land through all five lands, including a full five-land defeat in a single reign. The two expansion campaigns - Skull Island (Shogun-themed) and Mount Olympus (Greek mythology-themed) - each add their own conquest, puzzle, and collectible achievements.",
                "Nothing is missable across separate reigns - most achievements track lifetime or single-reign milestones that can be re-attempted on any future kingdom, since dying and starting a new reign is a core part of Kingdom's roguelike-lineage structure. The genuine long pole is There Is No Greater Ruler Than Thou (defeat the Greed on all five base-game lands in a single unbroken reign), which needs a long, careful run without losing your crown along the way.",
                "Tip: the game intentionally punishes overextension - achievements like By the Fifth Day (survive a day without killing anything) reward patient, defensive play, so do not assume every achievement wants aggressive expansion; some specifically want you to hold back."
            ]
        },
        {
            "heading": "Early Days",
            "body": [
                "The opening build-order achievements: recruiting 8 archers, free walls, starting your camp, hunting 40+ critters, a day without killing anything, holding more gold than you can carry, clearing an acre of land, forging a new Crown, holding a Gem, and destroying a portal.",
                "The achievements here: On the First Day (Recruited eight archers); On the Second Day (You got free walls.); On the Third Day (You started your camp.); By the Fourth Day (You hunted 40 or more critters.); By the Fifth Day (You didn't kill anything.); On the Sixth Day (You had more gold than you could carry.); On the Seventh Day (You cleared an acre of land.); By the Eighth Day (You forged a new Crown); On the Ninth Day (You held a Gem); By the Tenth Day (You destroyed a portal.)."
            ]
        },
        {
            "heading": "Exploration & Challenges I",
            "body": [
                "Specific exploration and challenge feats: sailing away before day 6, riding 4 different steeds on one land, packing 4 hermits on one boat, 20 max-level towers on one land, escaping the cave with your crown intact, setting 20 Greed on fire with one flame barrel, reviving a decayed land, lighthouses on all 5 lands, clearing all trees from a land, and beating a portal with a squire.",
                "The achievements here: Master of the Sea (Sail away before day 6!); I am an Equestrian (Ride 4 different steeds on the same land); Is a Hermit still a Hermit if they have friends? (Put 4 hermits on the same boat); I HAVE THE TOWER! (I have 20 max-level towers on a single land); Playing with goo (Escape the cave with your crown in tact); Pyrotechnics (Set fire to 20 greed with one flame barrel); Their Savior (Revive a Land after 200 days of decay); Safe Passage (Have lighthouses on all 5 lands); Easter Island (Clear all trees from a single land.); The Student Becomes the Teacher (Beat a portal with a squire)."
            ]
        },
        {
            "heading": "Greed Conquest",
            "body": [
                "Defeating the Greed on one, two, three, four, and all five base-game lands, defeating it from all five lands in a single reign, retrieving your crown 300 times, sailing to another land in co-op 30 times, overcoming the Greed on Skull Island, and losing your crown while keeping your legacy.",
                "The achievements here: Beginning of a legend (Defeat the Greed on one land); Stories Have Begun (Defeat the Greed on two lands); Songs Will Be Written (Defeat the Greed on three lands); Legends Will Be Passed Down (Defeat the Greed on four lands); You have Sealed Your Reign In History (Defeat the Greed on all five lands); There Is No Greater Ruler Than Thou (Defeat the Greed from all five lands in a single reign); Never Gives Up (Retrieve your crown 300 times); A Journey Is Better Shared (Sail to another land in Coop 30 times); Cracked the Skull (Overcome the Greed on Skull Island); A New Heir (Lose your crown, but not your legacy.)."
            ]
        },
        {
            "heading": "Skull Island & Beyond",
            "body": [
                "Skull Island expansion achievements: summoning the four monarchs, riding the Gamigin, recruiting a Cat, converting a Beggar Camp into a Citizen House, defeating the Greed on all 6 lands, unlocking all Items of Power, sailing from Oracle Island, receiving 10 prophecies, unlocking the pouch upgrade, and collecting all fish.",
                "The achievements here: The Four Horsemen (Summoned the four monarchs to the land of the dead.); Igavania! (Ride the Gamigin.); Here Kitty Kitty Kitty (Recruit a Cat); Arm the Homeless (Convert a Beggar Camp into a Citizen House); Above and Beyond (Defeat the Greed on all 6 Lands); I HAVE THE POWER! (Unlock all Items of Power (Solve All Puzzles)); Answer the Call of Olympus (Sail away from Oracle Island); Oracle Hotline (Receive 10 prophecies from the Oracle); Bigger on the Inside (Unlock the pouch upgrade); Go Fish (Collect all fish)."
            ]
        },
        {
            "heading": "Oracle Island & Endgame",
            "body": [
                "The Mount Olympus expansion's remaining achievements: collecting all four divine Artifacts, setting 300 Greed on fire, petrifying 20 subjects, conquering Mount Olympus, conquering it in a single reign, and beating every portal on all ten lands.",
                "The achievements here: Blessings from the Gods (Collect all four divine Artifacts); Gift of Prometheus (Set 300 Greed on fire); That's Not Very Gneiss (Petrify 20 subjects); End of an Odyssey (Conquer Mount Olympus); Hero of Olympus (Conquer Mount Olympus in a single reign); Mediterranean Vacation (Beat all portals on all ten lands)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn the early build order across a few runs: recruit 8 archers, get free walls, start your camp, hunt 40+ critters, and hold more gold than you can carry, clearing an acre of land and forging a new Crown.",
                "2. Work through the exploration and challenge achievements: ride 4 different steeds, pack 4 hermits on one boat, get 20 max-level towers, escape the cave with your crown intact, and set 20 Greed on fire with one flame barrel.",
                "3. Defeat the Greed on one land, then two, then three, four, and finally all five base-game lands, working toward a full five-land defeat in a single unbroken reign.",
                "4. Play the Skull Island expansion campaign for its own conquest and collectible achievements (the four monarchs, the Gamigin, recruiting a Cat, converting a Beggar Camp).",
                "5. Play the Mount Olympus expansion for its own achievements - the Oracle's prophecies, the divine Artifacts, Items of Power puzzles, and conquering Mount Olympus, including in a single reign.",
                "Tip: A New Heir (lose your crown but not your legacy) is a deliberately positive framing of dying with an heir already in place - keep a spare heir ready in your kingdom at all times rather than treating every death as a full restart."
            ]
        }
    ]
};
