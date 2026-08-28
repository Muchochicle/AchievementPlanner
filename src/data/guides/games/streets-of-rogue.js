// Streets of Rogue's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/streets-of-rogue.json), whose 52 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   512900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 52 ship a real,
//   official Steam description, quoted directly below. Streets of Rogue
//   has no Steam-hidden achievements at all.
// - The grouping below (district/story progress, the 20 unlockable
//   playable characters, big quests and special encounters, and the
//   game's many "chaos" achievements for creative, systemic mayhem) is
//   read directly from what each achievement's own official description
//   requires, not invented.
export const GUIDE = {

    slug: "streets-of-rogue-achievement-guide",
    category: "game",
    gameSlug: "streets-of-rogue",
    icon: "🕶️",
    title: "Streets of Rogue Achievement Guide",
    summary: "A practical guide to all 52 Steam achievements in Streets of Rogue - the district-by-district story, all 20 unlockable playable characters, and the game's many systemic, sandbox-driven chaos achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Streets of Rogue has 52 Steam achievements. Nothing here is truly missable in the strict sense - it's a run-based immersive sim roguelike, so any floor, character, or systemic interaction you haven't tried yet is always available again on your next run.",
                "The achievement list splits cleanly into four groups: progressing through the game's six districts, unlocking all 20 playable characters, a handful of big quests and special encounters, and a long tail of \"chaos\" achievements that reward creative, often absurd interactions with the game's fully systemic world."
            ]
        },

        {
            heading: "Districts & Story Progress",
            body: [
                "Didn't Skip the Tutorial and Adapting to City Life mark the very start - finishing the tutorial and completing any single floor for the first time.",
                "Savior of the Slums, Industrial Idol, Park President, Downtown Diva, and Uptown Upper-Cruster each unlock for completing one of the game's five main districts (Slums, Industrial, Park, Downtown, Uptown) in turn, while Industrial, Park, Downtown, and Uptown themselves unlock for reaching that district's elevator access - a separate, earlier milestone than actually completing it.",
                "You Rule marks reaching and completing the final district, Mayor Village, which branches into three distinct endings: Legal Takeover (win the in-game election), Hostile Takeover (neutralize the Mayor directly), and Peaceful Takeover (win without doing either). The Bad Ending is a separate, alternate finale found by exploring rather than pursuing any of the three main routes.",
                "Tip: each of the three main endings (Legal Takeover, Hostile Takeover, Peaceful Takeover) requires a different playstyle on your Mayor Village run, so plan which one you're going for before you start that final floor rather than improvising once you're there."
            ]
        },

        {
            heading: "Unlockable Playable Characters",
            body: [
                "20 achievements each unlock one of the game's alternate playable characters, found and freed across your runs: Gangster (Blahd), Comedian, Investment Banker, Shopkeeper, Assassin, Jock, Bartender, Cop, Gorilla, Scientist, Shapeshifter, Vampire, Werewolf, Wrestler, Cannibal, Slavemaster, Zombie, Firefighter, Mobster, and Robot.",
                "Every one of these accumulates naturally as you explore and interact with NPCs across normal play - there's no dedicated \"character hunting\" detour needed, just enough varied runs to encounter and unlock each one."
            ]
        },

        {
            heading: "Big Quests & Special Encounters",
            body: [
                "Quest Conqueror rewards completing any one of the game's larger, multi-step Big Quests, distinct from the smaller side objectives that appear on every floor.",
                "Terminator (kill the Killer Robot), True Believer (find the Alien), and The Best Around (win an Arena fight) are each tied to a specific, less-common encounter type that doesn't show up on every single run."
            ]
        },

        {
            heading: "Chaos & Creative Kills",
            body: [
                "Fast Food (make a Refrigerator \"Run\"), Creature Feature (kill a Vampire while playing a Werewolf), Flat Earther (fall off the edge of the map), Fountain of Life (poison a water body with Resurrection Shampoo), Potent Mix (have four status effects at once), Slaver Enslaver (enslave a Slavemaster), Massacrist (kill everyone in a level), Safe Travels (nicely ask an NPC to leave a level), Ironic Killer (kill someone by throwing a Gravestone at them), Murderous Mixologist (give someone a Cyanide Cocktail), and Shocker (electrocute someone in water) are all one-off, often darkly comic interactions that reward experimenting with the game's fully systemic tools and items rather than following any fixed path.",
                "Creative Genius (create a custom character) is a separate, purely creative achievement tied to the game's character editor rather than anything you do in a run.",
                "Tip: most of the chaos achievements above are far easier to pursue deliberately once you already have a stable, high-level character and don't need to worry about surviving a serious run - treat a late-game character as your dedicated \"chaos testing\" run instead of trying to combo them into an early, more fragile playthrough."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally through the tutorial and Slums, Industrial, Park, and Downtown districts first - most character unlocks, the elevator-access achievements, and several chaos achievements accumulate naturally along the way.",
                "Once you're comfortable with the game's systems, dedicate a run or two purely to chaos achievements (Fast Food, Potent Mix, Massacrist, Ironic Killer, and the rest) using a strong, well-equipped character.",
                "Finish out any remaining character unlocks and the Big Quest / special-encounter achievements (Quest Conqueror, Terminator, True Believer, The Best Around) whenever they come up naturally.",
                "Save Uptown and Mayor Village for last, and decide in advance which of the three main endings (Legal Takeover, Hostile Takeover, or Peaceful Takeover) you're aiming for on that final run - The Bad Ending can be picked up on a separate, later attempt."
            ]
        }

    ]

};
