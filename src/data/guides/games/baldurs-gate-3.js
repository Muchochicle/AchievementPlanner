// Baldur's Gate 3's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/baldurs-gate-3.json), whose 54 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1086940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 25 of 54 ship a real,
//   official Steam description, quoted directly below.
// - The other 29 are hidden. Their unlock conditions here are
//   curatorial, cross-checked against Game Rant's hidden-achievement
//   guide and a Steam Community 100% guide. The act-transition and
//   ending achievements are described by how they are reached, not by
//   what happens in the story.
// - The grouping (story and endings, difficulty runs, companion/camp
//   moments, per-act deeds, then the playful one-off challenges)
//   follows the achievements' own quest numbering and the game's
//   three-act structure.
export const GUIDE = {

    slug: "baldurs-gate-3-achievement-guide",
    category: "game",
    gameSlug: "baldurs-gate-3",
    icon: "🎲",
    title: "Baldur's Gate 3 Achievement Guide",
    summary: "A practical guide to all 54 Steam achievements in Baldur's Gate 3 - the act transitions and endings, the Tactician and Honour runs, the companion moments, the per-act deeds, and the playful one-off challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Baldur's Gate 3 has 54 Steam achievements, 29 of them hidden. Most of the hidden ones are act transitions, endings, or one specific deed per act. The visible ones are a wide spread of \"do this once\" challenges plus two full difficulty runs.",
                "Endings are the only real planning problem: several are mutually exclusive at the very end of Act 3. Keep a save from just before the final confrontation and you can see each ending achievement from it. Everything else can be spread across your playthroughs.",
                "Tip: play your first run on Tactician for Critical Hit, then do a focused Honour run for Foehammer. Honour mode has one save and permanent consequences, so treat it as its own careful playthrough rather than an achievement to force."
            ]
        },

        {
            heading: "Story & Endings",
            body: [
                "Progression: Descent From Avernus (take control of the nautiloid and escape the Hells), The Plot Thickens (leave Act 1), The City Awaits (leave Act 2), and All's Well That Ends Well (finish the game).",
                "Endings, reached by the choices you make at the end of Act 3: Hero of the Forgotten Realms (destroy the Absolute for good), Absolute Power Corrupts (seize the Netherbrain for yourself), Ceremorphosis (become a mind flayer to win), and - only as the Dark Urge origin - Sins of the Father (seize the Netherbrain for Bhaal) and Embrace Your Urge (become the Slayer)."
            ]
        },

        {
            heading: "Difficulty Runs",
            body: [
                "Critical Hit rewards completing the game on Tactician difficulty. Foehammer rewards completing it on Honour mode, which adds one shared save, tougher boss mechanics, and permadeath for the run. These are the two longest single achievements in the game."
            ]
        },

        {
            heading: "Companions & Camp",
            body: [
                "Fetch Quest (play fetch with Scratch) and You Have Two Hands for a Reason (pet Scratch and the Owlbear Cub at the same time) are camp moments. Romance beats: Hot Date (a date with Karlach), Mind Blown (romance the Emperor), Just a Nibble (let Astarion feed on you), and To Bloom in Darkest Night (give Shadowheart a Night Orchid).",
                "Companion questline outcomes: Loophole (break Wyll's pact with Mizora) and Repairing the Weave (stabilise Gale's Netherese orb)."
            ]
        },

        {
            heading: "Act 1 Deeds",
            body: [
                "Combat set-pieces: Devil's in the Details (defeat Commander Zhalk on the nautiloid), Non-Invasive Procedure (kill the Surgeon before he operates on you), Penny Pincher (beat the Toll Collector without her using gold against you), and Pest Control (kill the Spider Matriarch before her eggs hatch).",
                "The Grymforge: Forged in Blood and Fire (craft an item at the Adamantine Forge) and A Grym Fate (kill the Adamantine Golem without using the forge hammer).",
                "Other Act 1 deeds: Rude, Crude, and Full of Attitude (find and summon the quasit Shovel), Taking Blood (claim the Blood of Lathander from Rosymorn Monastery), The Lich-Queen's Wrath (side with Voss against Vlaakith), Expand Your Mind (consume a parasite), and Leave No One Behind (save every tiefling refugee)."
            ]
        },

        {
            heading: "Act 2 & 3 Deeds",
            body: [
                "Act 2: She Cannot Be Caged! (rescue Sazza from three locations in one playthrough), Under Lock and Key (rescue every prisoner from Moonrise Towers), and No Free Lunches (defeat the Apostle of Myrkul before consuming any necromites).",
                "Act 3: Murder in Baldur's Gate (become an Unholy Assassin of Bhaal), First Blood (kill Orin the Red during the ritual), Interfectorem Draconis (kill the red dragon in the Upper City), Fancy Footwork (defeat Gortash in Wyrm's Rock without setting off a trap), and Crash Landing (in the Wyrmway, knock the dragon out of the sky mid-flight)."
            ]
        },

        {
            heading: "Playful Challenges",
            body: [
                "One-off feats you can grab whenever they come up: Roleplayer (complete ten background goals), Bedrolls and Breakfast (four full Long Rests), Bottoms Up (Long Rest on only alcohol), Dig for Victory (dig up five buried chests), No Penny Required (use Detect Thoughts on someone), Escapologist (break out of prison), Outsourcing (recruit a hireling), and Jack-of-all-Trades (multiclass into every class in one playthrough without Withers).",
                "Combat and skill tricks: Homebrewer (create three unique alchemical solutions), Kill Two Birds With One Gnome (use an enemy as an improvised weapon), Busker (earn 100 gold busking), Action Surge (five attacks in one turn), Fists of Fury (kill with an Unarmed Strike), Shove Off (kill with falling damage), and Punch Drunk (defeat twenty opponents while drunk).",
                "And the reading challenge: Bookworm (read 100 different books in one playthrough)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "First run on Tactician: pick up Descent From Avernus, The Plot Thickens, The City Awaits, and as many Act deeds and playful challenges as you can along the way. Keep a save before the final confrontation, take one ending, then reload for the other ending achievements you can reach (Hero of the Forgotten Realms, Absolute Power Corrupts, Ceremorphosis). Critical Hit unlocks when you finish.",
                "Second run as the Dark Urge on Honour mode: this covers Foehammer plus the Dark-Urge-only endings (Sins of the Father, Embrace Your Urge) and Murder in Baldur's Gate, and lets you clean up any deeds, companion moments (Hot Date, Mind Blown, Just a Nibble, To Bloom in Darkest Night, Loophole, Repairing the Weave), and challenges you missed.",
                "Fit Jack-of-all-Trades, Bookworm, Roleplayer, and the alcohol/drunk achievements (Bottoms Up, Punch Drunk) into whichever run suits them, since each needs to happen within a single playthrough."
            ]
        }

    ]

};
