// Enter the Gungeon's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/enter-the-gungeon.json), whose 54
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 311690 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 34
//   of 54 ship a real, official Steam description, quoted directly
//   below.
// - The 20 remaining hidden achievements (the four characters' Pasts,
//   the Sixth Chamber, several secret areas, both unlockable
//   characters, and various curse/end-game feats) are hidden
//   achievements Steam never describes publicly (confirmed via the
//   same API call) - their descriptions here are curatorial, based on
//   cross-agreeing community documentation of their real unlock
//   conditions.
// - The grouping below (the four Pasts leading to the Sixth Chamber,
//   floor progression, hidden areas and unlockable characters, NPC
//   quests, combat feats, and special playthrough modes) is read
//   directly from what each achievement's own requirement is, not
//   invented.
export const GUIDE = {

    slug: "enter-the-gungeon-achievement-guide",
    category: "game",
    gameSlug: "enter-the-gungeon",
    icon: "🔫",
    title: "Enter the Gungeon Achievement Guide",
    summary: "A practical guide to all 54 Steam achievements in Enter the Gungeon - the four playable characters' Pasts, floor progression, hidden areas, NPC quests, and the game's long list of specific combat feats.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Enter the Gungeon has 54 Steam achievements. As a roguelike, almost nothing here is missable in the usual sense - a failed or incomplete run just means trying again, since every achievement's requirement can always be attempted on a future run.",
                "The list splits into distinct layers: unlocking the Bullet that can kill the Past, using it to beat each starting character's own Past, floor-clear progression, several hidden areas and unlockable characters, a handful of specific NPC side quests, and a long tail of one-off combat feats."
            ]
        },

        {
            heading: "The Characters' Pasts & The Sixth Chamber",
            body: [
                "Gunsmith (construct the Bullet that can kill the Past) is the prerequisite for this whole track. Once built, it can be carried into a run to unlock Wingman (beat the game as the Pilot while carrying it), Double Jeopardy (complete the game as the Convict while carrying it), Squad Captain (finish the game as the Marine while carrying it), and Deadliest Game (complete the game as the Hunter while carrying it) - each character's own hidden Past achievement.",
                "Historian (complete all 4 main character Pasts) is the natural payoff once all four are done, and Gungeon Master (clear the Sixth Chamber, only reachable after defeating every starting character's Past) is the final, hardest achievement this track leads to.",
                "Tip: only one character's Past needs to be beaten per successful run - spread the four Pasts across separate runs with your strongest available character each time, rather than trying to force all four in a single marathon session."
            ]
        },

        {
            heading: "Floor Progression",
            body: [
                "Slayer (defeat the Boss of the Fifth Chamber) marks reaching the end of the game's main five chambers for the first time.",
                "Castle Crasher (clear the First Chamber 50 Times), Dungeon Diver (clear the Second Chamber 40 Times), Mine Master (clear the Third Chamber 30 Times), Hollowed Out (clear the Fourth Chamber 20 Times), and Forger (clear the Fifth Chamber 10 Times) are long-term, repeated-clear milestones that accumulate naturally the more you play.",
                "Going Down (open the shortcut to the Second Chamber), Going Downer (open the shortcut to the Third Chamber), Going Downest (open the shortcut to the Fourth Chamber), and Last Stop (open the shortcut to the Fifth Chamber) reward unlocking each floor's permanent elevator shortcut, letting future runs skip ahead."
            ]
        },

        {
            heading: "Hidden Areas & Unlockable Characters",
            body: [
                "Grate Hall (access the Oubliette by finding a fireplace, extinguishing it with a water barrel, and unlocking the hatch with 2 keys) and Reverence for the Dead (access the Cathedral by retrieving the old crest armor from the Oubliette and placing it on an altar in the Second Chamber) are the game's two chained secret-area discoveries.",
                "The Password (access the Hidden Market by entering a demon-face door while carrying either one curse or 100 shells) is a separate hidden-area achievement.",
                "Case Closed (unlock the Bullet character by encountering the Bullet Kin five times after killing any character's Past without attacking it) and Beep (unlock the Robot character by retrieving a busted television from the Second Chamber's elevator shaft and bringing it to the Blacksmith) each unlock a new playable character."
            ]
        },

        {
            heading: "NPC Quests & Challenges",
            body: [
                "Re-Armed (deliver the Golem's replacement arm), Weird Tale (complete Frifle's Challenges), Trickshot (Ace Winchester's game 3 times), Hedge Slinger (win a wager against the Gunsling King 5 times), and Sworn Gun (avenge Manuel) are each tied to a specific NPC's own side quest found across runs.",
                "Great Hall (populate the Breach) rewards rescuing and bringing back NPCs to the game's hub area over time. Gungeon Acolyte (complete the Tutorial) is the simplest achievement on this list.",
                "Terminated (defeat the Robot's Past) and Hero of Gun (defeat the Bullet's Past) extend the Pasts track above to the game's two unlockable characters, once each is available."
            ]
        },

        {
            heading: "Combat Feats",
            body: [
                "Lead God (collect five Master Rounds in one run) and Patron (spend big at the Acquisitions Department) reward specific in-run collection and spending habits. Biggest Wallet (carry a large amount of money at once) and Cartographer's Assistant (map the first Five Chambers for the lost adventurer) are similar one-off milestones.",
                "Demolition Man (kill a frozen enemy by rolling into it), Woodsie Lord (steal 10 things), Day Ruiner (kill a boss after covering it with glitter), Money Pit (kill 100 enemies by dropping chandeliers), Rider (kill 100 enemies while riding in a mine cart), and Pit Lord (kill 100 enemies by knocking them into pits) are each a specific kill-method achievement, accumulating naturally across many runs.",
                "Not Just A Box (get the jump on a Mimic by waiting near a chest until it opens its mouth, then attacking it first) and I Knew Someone Would Do It (push a table into a pit) are smaller, easy-to-miss interaction achievements.",
                "Time Paradox (travel to any character's Past and lose all your health there), Exorcist (defeat a boss while Jammed - all ten curse stacks active), and Jammed (accumulate all ten curse stacks in a single run) are all built around the game's curse system - Jammed is a prerequisite worth reaching before attempting Exorcist.",
                "Advanced Slayer (defeat an Advanced Boss) and Resourceful (take Revenge) round out the rest of this list."
            ]
        },

        {
            heading: "Special Playthroughs",
            body: [
                "Gun Game (complete the game with the Sorceress' Enchanted Gun) requires unlocking the Sorceress from a cell and paying for the enchantment before finishing a run with it equipped.",
                "Rage Mode (always be flipping - guns are for flippers) and Beast Master (complete the game with Beast Mode on) are both tied to specific toggled play styles.",
                "Sledge-Dog (complete Tonic's Challenge) and Challenger (complete a run in Challenge Mode, unlocked from Daisuke at the Breach) both reward finishing the game's dedicated challenge-run modes.",
                "Lion Leap (jump off the path after defeating the Fifth Chamber boss) is a small, easy-to-miss secret tied directly to that same boss fight."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through normally at first, picking up Gungeon Acolyte, Slayer, the floor-clear and shortcut achievements, and most of the combat-feat achievements naturally along the way.",
                "Prioritize building the Bullet that can kill the Past (Gunsmith) early, then work through Wingman, Double Jeopardy, Squad Captain, and Deadliest Game across separate runs before attempting Historian and finally Gungeon Master.",
                "Chase the hidden areas (Grate Hall, Reverence for the Dead, The Password) and the two unlockable characters (Case Closed, Beep) once you know the game's layout well.",
                "Save Gun Game, Jammed, Exorcist, and the special-mode achievements (Rage Mode, Beast Master, Sledge-Dog, Challenger) for last - they each need either a specific unlocked item or a dedicated, focused run rather than accumulating passively."
            ]
        }

    ]

};
