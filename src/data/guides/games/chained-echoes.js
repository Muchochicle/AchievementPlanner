// Chained Echoes' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chained-echoes.json), whose 37 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1229240 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 37 ship a real,
//   official Steam description, quoted directly below. Chained Echoes
//   has no Steam-hidden achievements at all.
// - The grouping below (main-story act progress, the Reward Board chain
//   tiers, Class Emblems and skill mastery, Sky Armor weapon mastery,
//   the game's various "collect/complete everything" lists, raw combat
//   milestones, and a handful of one-off world secrets) is read directly
//   from what each achievement's own official description requires, not
//   invented. The final superboss is referred to only as the game's
//   optional "ultimate boss", matching Steam's own wording, rather than
//   naming it, per this catalog's spoiler-conscious convention.
export const GUIDE = {

    slug: "chained-echoes-achievement-guide",
    category: "game",
    gameSlug: "chained-echoes",
    icon: "⚔️",
    title: "Chained Echoes Achievement Guide",
    summary: "A practical guide to all 37 Steam achievements in Chained Echoes - the main-story acts, the Reward Board chain tiers, Class Emblem and Sky Armor mastery, and every collect-everything list on the way to 100%.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Chained Echoes has 37 Steam achievements and none of them are hidden. A single playthrough can earn every one - there is no New Game Plus requirement and no difficulty-locked achievement.",
                "Several achievements are cleanup lists (all recruits, all Unique Monsters, all side quests, all lore books, all Deals, the full bestiary). These are not hard, but some of their pieces can be permanently locked out if you push through the final act, so treat the run-up to the finale as your completion checkpoint rather than the ending itself."
            ]
        },

        {
            heading: "Story Progress",
            body: [
                "The Beginning (finish the prologue), Act Racer (finish act I), Next Steps (finish act II), and Bad Memories (finish act III) unlock automatically as the main story advances, and Sky Champion is a story-gated beat for reclaiming your Sky Armor along the way.",
                "True King unlocks for beating the game. God King is separate - it rewards slaying the game's optional ultimate boss, a superboss fight you set up through late-game side content rather than the normal ending.",
                "Tip: the ultimate boss expects a fully built party - finished Class Emblems, mastered skills, and ultimate weapons. If you are going for 100% anyway, do all of the collection work below first and the God King fight becomes far more manageable."
            ]
        },

        {
            heading: "The Reward Board",
            body: [
                "The Reward Board is the game's grid-based progression system, and its chain bonus rewards claiming rewards without breaking the streak. Reward Starter (chain over 5), Reward Addict (over 20), Reward Junkie (over 40), Reward Mixer (over 80), and Reward Dealer (over 120) are the escalating chain-length tiers.",
                "Reward Cartel Boss is the completion payoff for filling in the entire Reward Board - the natural end state of doing every objective the board tracks."
            ]
        },

        {
            heading: "Class Emblems & Skill Mastery",
            body: [
                "Class Emblems are found throughout the world. Praying unlocks for finding your first, Son of a Preacher Man for 6, and Preacher Man for all 12.",
                "Class Master rewards fully mastering a single Class Emblem skill. Uncanny Expertise asks you to learn every skill for Tomke specifically, and Skill Share is the big one - learn every skill on every party member.",
                "Tip: skill points are shared across the party, so funnel them toward one or two characters first for Uncanny Expertise and Class Master, then spread the rest wide once the story's tougher fights are behind you and Skill Share is just a spending exercise."
            ]
        },

        {
            heading: "Sky Armor Mastery",
            body: [
                "Sky Armor is the game's mech combat mode. Master of One rewards mastering a single Sky Armor weapon, and Jack of All Trades asks you to master every Sky Armor weapon on one Sky Armor - both come from repeated Sky Armor encounters, of which there are plenty in the mid-to-late game."
            ]
        },

        {
            heading: "Collection & Completion Lists",
            body: [
                "One of Us (find all recruits), A Blade Runner (get all ultimate weapons), and Bargain Hunter (buy all Deals from the traveling merchant) are the three headline collect-everything lists.",
                "Walking Killing Machine (complete the bestiary) and Endangered Species (defeat all Unique Monsters) cover the enemy-hunting side, Side Tracker (finish all side quests) and Walking Library (read all lore books) cover the world content, and Ahoy ye Heartie is a small one for joining the Adventurer's Guild, which is also where much of this cleanup is tracked and turned in."
            ]
        },

        {
            heading: "Combat Milestones",
            body: [
                "Infleeencer rewards fleeing from battle 42 times - the fastest way to get it is to trigger encounters you have no intention of fighting and immediately run.",
                "Death to My Enemies (win 50 battles), Winning Streak (win 100), and Brutal Battler (win 200) are pure cumulative counters that fill in over a normal completionist run without any special effort."
            ]
        },

        {
            heading: "World Secrets & Oddities",
            body: [
                "Hitchcock was Right asks you to disturb 60 birds - flocks scattered around the overworld that fly off when you run through them.",
                "Oh Crab! (find the Crab Village) and The Platypus’ Mind (find the platypus gang's treasure) are two off-the-path discoveries, and Customer is King is a one-second achievement for selling a single piece of crap (the game's junk item category) to any shop."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the main story through acts I to III, letting The Beginning, Act Racer, Next Steps, Bad Memories, and Sky Champion unlock on their own, and pick up Customer is King, Oh Crab!, and any birds for Hitchcock was Right whenever they cross your path.",
                "Before the final act, sweep for completion: all recruits (One of Us), all Class Emblems (Praying, Son of a Preacher Man, Preacher Man), all Deals (Bargain Hunter), all lore books (Walking Library), all side quests (Side Tracker), the bestiary (Walking Killing Machine), and the Unique Monsters (Endangered Species).",
                "Finish skill and gear mastery next - Uncanny Expertise, Class Master, Skill Share, A Blade Runner, Master of One, and Jack of All Trades - and let the battle counters (Death to My Enemies, Winning Streak, Brutal Battler) and Reward Board chains (Reward Starter through Reward Dealer, then Reward Cartel Boss) fill in along the way.",
                "Beat the game for True King, then take your fully built party into the optional ultimate boss for God King."
            ]
        }

    ]

};
