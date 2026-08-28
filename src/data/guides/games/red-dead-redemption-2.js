// Red Dead Redemption 2's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/red-dead-redemption-2.json), whose 51
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1174180 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 39
//   of 51 ship a real, official Steam description, quoted directly
//   below.
// - The 12 hidden achievements are ten story-chapter markers plus
//   Paying Respects and It's Art. Their unlock conditions here are
//   curatorial, cross-checked against the Red Dead wiki, SVG's secret-
//   achievement breakdown, and Gamer Guides. Chapter achievements are
//   described only by which chapter or mission earns them.
// - The grouping (story chapters, the 100% completion checklist, money
//   and Honor, then Red Dead Online) follows the achievements' own
//   descriptions. Red Dead Online achievements are split out because
//   they need the separate online mode.
export const GUIDE = {

    slug: "red-dead-redemption-2-achievement-guide",
    category: "game",
    gameSlug: "red-dead-redemption-2",
    icon: "🤠",
    title: "Red Dead Redemption 2 Achievement Guide",
    summary: "A practical guide to all 51 Steam achievements in Red Dead Redemption 2 - the story chapters, the 100% completion checklist, money and Honor milestones, and the Red Dead Online set.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Red Dead Redemption 2 has 51 Steam achievements. 12 are hidden (ten story-chapter markers plus two secret ones). 17 belong to Red Dead Online, the separate multiplayer mode.",
                "Two story achievements are big commitments: Best in the West (100% completion, which tracks a long in-game checklist) and Gold Rush (70 gold medals in story missions, several of which need a mission replay to hit their objectives).",
                "Tip: don't worry about mission gold medals on your first pass - play for the story. Gold medals are far easier from the Story menu's mission replay once you know each mission's optional objectives and have good weapons."
            ]
        },

        {
            heading: "Story Chapters",
            body: [
                "The chapter markers unlock automatically: Back in the Mud (Chapter 1), Just a Scratch (rescuing John in \"Enter, Pursued by a Memory\"), To Greener Pastures (Chapter 2), Settling Feuds (Chapter 3), Washed Ashore (Chapter 4), No Traitors (Chapter 5), Third Time Lucky (\"Goodbye, Dear Friend\" in Chapter 6), Redemption (the final Chapter 6 mission), Cowboy Builder (the epilogue mission \"A New Jerusalem\"), and Endless Summer (the final epilogue mission \"American Venom\").",
                "Lending a Hand rewards completing all optional Honor story missions, and Gold Rush the 70 gold medals mentioned above."
            ]
        },

        {
            heading: "100% Completion",
            body: [
                "Best in the West is the umbrella achievement for 100% game completion. Several other achievements are effectively items on that same checklist: Hobby Horse (play all mini games), Breaking and Entering (four homestead stashes), Artificial Intelligence (the Marko Dragic questline), Western Stranger (10 Stranger mission strands), Collector's Item (a Collectible strand), Errand Boy (5 camp companion item requests), and Friends With Benefits (a Companion Activity in each camp).",
                "Skill and nature: Self Sufficient (craft 30 unique items), Skin Deep (skin every species), Zoologist (study every animal), It was THIS Big! (a 16 lb fish), Grin and Bear it (survive and kill 18 bear attacks), Trusty Steed (max horse bonding), and Locked and Loaded (fully upgrade one weapon).",
                "The two secret completion achievements: Paying Respects (find the graves of each of your fallen companions) and It's Art (find a permanent home for the squirrel statue)."
            ]
        },

        {
            heading: "Money & Honor",
            body: [
                "Take From the Rich (rob or loot $250), Give to the Poor (donate $250 to the tithing box), Pony Up (spend $5,000 across shops), Extreme Personality (max or min Honor), and Bountiful (survive three days with a $250 bounty in all states)."
            ]
        },

        {
            heading: "Red Dead Online",
            body: [
                "Getting going: Breakout (the intro), Getting Started (Rank 10), and Notorious (Rank 50). Activities: Series Major (take part in a Series), Gun For Hire (10 Free Roam missions), Eventful (5 Free Roam Events), Buckle Up (5 gold belt buckles), and The Real Deal (MVP three times).",
                "Posse and camp: Posse Up (form a Persistent Posse), Strength in Numbers (a Free Roam mission in a posse of 3+), All's Fair (counter a rival posse's mission), Horses for Courses (own 5 horses at once), and Home Comforts (5 camp improvements).",
                "Crafting and trade: Non-Regulation (craft 25 ammunition), Master Craftsman (craft 20 non-ammo items), Butchered (sell 20 items to the Butcher), and Picked to Perfection (pick 25 herbs)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the story for the ten chapter markers (Back in the Mud through Endless Summer) and Lending a Hand, ignoring gold medals for now but picking up Take From the Rich, Give to the Poor, Extreme Personality, and the squirrel statue toward It's Art.",
                "After the story, work the 100% checklist: the animal achievements (Skin Deep, Zoologist), collectibles and strangers (Collector's Item, Western Stranger, Artificial Intelligence, Breaking and Entering), camp activities (Friends With Benefits, Errand Boy), crafting and bonding (Self Sufficient, Trusty Steed, Locked and Loaded), the odd ones (It was THIS Big!, Grin and Bear it, Hobby Horse, Bountiful, Pony Up), and Paying Respects. Best in the West unlocks at true 100%.",
                "Replay missions from the Story menu for Gold Rush (70 gold medals).",
                "Finish with Red Dead Online: rank up toward Getting Started and Notorious while working through the activity, posse, and crafting achievements."
            ]
        }

    ]

};
