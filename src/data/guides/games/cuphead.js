// Cuphead's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cuphead.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   268910 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 33 of 42 ship a real,
//   official Steam description, quoted directly below.
// - Swing You Sinner, Selling Out, Cutting Corners, Bravo Zulu P-26,
//   Rolling Sixes, High Roller, Pacifist, A Horrible Night To Have a
//   Curse, and Paladin are hidden achievements Steam never describes
//   publicly (confirmed via the same API call) - their descriptions here
//   are curatorial, cross-checked against multiple independent unlock
//   guides (Steam community guides, the Cuphead Fandom wiki, Den of Geek,
//   and Attack of the Fanboy) that agree on the same requirements.
// - The catalog's game-level missable:false reflects that every level and
//   boss stays selectable from the world map at any time, at any
//   difficulty already unlocked - nothing here is ever permanently locked
//   out on a given save.
export const GUIDE = {

    slug: "cuphead-achievement-guide",
    category: "game",
    gameSlug: "cuphead",
    icon: "☕",
    title: "Cuphead Achievement Guide",
    summary: "A practical guide to all 42 Steam achievements in Cuphead - the base game's four islands, ranks, parries, Ms. Chalice, and the Delicious Last Course DLC's own boss gauntlet and secret Devil fight.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Cuphead has 42 Steam achievements. Every level and boss stays selectable from the world map at any time on whichever difficulty is already unlocked, so nothing here is ever permanently missable on a given save - a bad run just means trying again.",
                "The full list spans the base game's three islands plus the Inkwell Hell finale, the Delicious Last Course DLC's fourth island, and a wide range of skill-based side-challenges (ranks, parries, no-hit runs) layered on top of simply beating the story."
            ]
        },

        {
            heading: "Story Progress",
            body: [
                "Taking Names (defeat a boss) is the very first achievement most players earn. A Walk in the Park, A Day at the Fair, and A Trip Downtown mark clearing every boss on Inkwell Isle I, II, and III respectively, and Casino Night marks completing the Dice Palace casino level that connects them.",
                "Souls Saved (complete the game on Normal) and Beat The Devil At His Own Game (complete the game on Expert) are the two main difficulty-completion achievements - Expert is considerably harder and is widely regarded as one of the toughest standard difficulty settings in any platformer.",
                "Swing You Sinner and Selling Out are the game's two different endings, both tied to the final choice in front of the Devil: refuse his contract offer and defeat him yourself for Swing You Sinner, or accept the offer instead for the earlier, worse Selling Out ending.",
                "A Vacation in the Wilds (defeat every boss in Inkwell Isle IV) and Compliments to the Chef (complete your quest on Inkwell Isle IV) mark the same kind of story progress inside the Delicious Last Course DLC."
            ]
        },

        {
            heading: "Ranks & Rare Runs",
            body: [
                "Put On a Show (get an S-Rank) is the first taste of Cuphead's rank system; Sheriff, Boss, Mayor, and King scale that up to A-Rank or better on every boss across Inkwell Isle I, II, III, and Inkwell Hell respectively, with Ranger doing the same for Inkwell Isle IV in the DLC. Cooked to Perfection (get an S-Rank on a DLC stage) is the DLC's own taste of the S-Rank chase.",
                "Perfect Run (complete a level without getting hit) and Rolling Sixes both reward flawless execution - Perfect Run on any regular level, and Rolling Sixes specifically for defeating King Dice in the Casino without taking a single hit.",
                "The High Hat (defeat a DLC boss without killing any of its minions) and Pacifist (complete 6 different Run 'n Gun levels without killing a single enemy) both reward deliberately holding back rather than fighting normally.",
                "Tip: attempt rank and no-hit achievements only on bosses and levels you already know well from normal play - memorizing attack patterns in advance matters far more than raw reflexes for most of these."
            ]
        },

        {
            heading: "Combat Techniques & Collectibles",
            body: [
                "Ceramic Strike (defeat a boss with an Extra Special move), Porcelain Power (defeat a boss with a Super Art), and Magician Lord (obtain all Super Arts) track the game's special-move system. Bouncing Ball, Parry Persistance, and Parry Performance escalate the parry mechanic from a single 5-hit chain up to 100 lifetime parries.",
                "Coffers Full (get every coin in all of the levels) and High Roller both track coin collection, with High Roller going further to require every coin in the entire game, including ones hidden in the overworld and given by NPCs.",
                "Cutting Corners is a hidden achievement for finding one of the overworld's hidden shortcuts - the easiest runs along the coastline just north of the Forest Follies level on Inkwell Isle I.",
                "Bravo Zulu P-26 and Hearty are both specific in-fight conditions: defeating a plane boss using only the mini-plane's basic peashooter bullets, and simply having 9HP at one time (achieved through the game's health-boosting charms)."
            ]
        },

        {
            heading: "Ms. Chalice & the DLC's New Toys",
            body: [
                "Alive and Kicking, Decadent, and The Golden Touch track using the playable character Ms. Chalice (unlocked via the DLC) - defeating a single boss, 10 bosses, and a boss with one of her Super Arts respectively.",
                "The Latest Sensation (defeat a boss with one of Porkrind's new DLC weapons), Checkmate (defeat all of the King of Games' Champions), and A King's Admiration (defeat the King's Gauntlet) round out the DLC's own new mechanics and boss content.",
                "Butter-and-Egg Man is a simpler, non-combat achievement: buy everything available in Porkrind's Shop."
            ]
        },

        {
            heading: "The DLC's Secret Devil Fight & Paladin",
            body: [
                "A Horrible Night To Have a Curse is a hidden, multi-step DLC achievement: buy the Broken Relic from Porkrind's shop on Inkwell Isle IV, solve the graveyard's tombstone puzzle to trigger a special, weakened Devil encounter, then defeat him to receive the Cursed Relic charm.",
                "Paladin is the payoff for that same Cursed Relic: defeat 6 bosses, from the base game or the DLC, while it's equipped. The Cursed Relic starts you at just 1HP and randomizes your weapon each time you stop firing, making this one of the more unusual late-game challenges in the list.",
                "Tip: once the Cursed Relic is equipped, hold the fire button down continuously rather than tapping it - releasing the button re-rolls your weapon, so a steady stream of fire keeps whatever weapon you land on."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the base game normally on Normal difficulty first, picking up Taking Names, the three island-completion achievements, Casino Night, Souls Saved, and Swing You Sinner (or Selling Out, if the joke ending is preferred first) along the way.",
                "Layer in rank, parry, and coin achievements gradually during natural replays rather than all at once - most of Sheriff through King, Coffers Full, and the parry milestones fall out of simply getting better at the game over time.",
                "Tackle the Delicious Last Course DLC content - A Vacation in the Wilds, Compliments to the Chef, Ms. Chalice's achievements, and A Horrible Night To Have a Curse - once the base game's roster and mechanics feel comfortable.",
                "Save Beat The Devil At His Own Game (Expert difficulty), Rolling Sixes, Cooked to Perfection, and Paladin for last - each is a genuine top-tier execution challenge best attempted with full-game familiarity already in place."
            ]
        }

    ]

};
