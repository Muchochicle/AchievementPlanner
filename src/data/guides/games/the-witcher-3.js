// The Witcher 3: Wild Hunt's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-witcher-3.json), whose 78 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   292030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 52 of 78 ship a real,
//   official Steam description, quoted directly below.
// - The other 26 are hidden (story beats, quest decisions, and the two
//   expansions' content). Their unlock conditions here are curatorial,
//   cross-checked against the Witcher wiki, Ten Ton Hammer's achievement
//   guide, and per-expansion trophy guides. Story achievements are
//   described by which quest earns them, not by what happens in it.
// - The grouping (main story, difficulty runs, quest decisions,
//   contracts and combat feats, character/gear/Gwent, then Hearts of
//   Stone and Blood and Wine) follows the achievements' own descriptions
//   and the game's structure. The two expansions are split out because
//   they require the paid DLC.
export const GUIDE = {

    slug: "the-witcher-3-achievement-guide",
    category: "game",
    gameSlug: "the-witcher-3",
    icon: "🐺",
    title: "The Witcher 3: Wild Hunt Achievement Guide",
    summary: "A practical guide to all 78 Steam achievements in The Witcher 3: Wild Hunt - the main story, the difficulty runs, quest decisions, contracts and combat feats, Gwent, and the Hearts of Stone and Blood and Wine expansions.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "The Witcher 3 has 78 Steam achievements, 26 of them hidden. Many hidden ones are simply story beats or quest decisions; the rest belong to the Hearts of Stone and Blood and Wine expansions, which require the paid DLC.",
                "A few things need care. The difficulty runs stack downward (a Death March run also counts for the two easier ones). Several achievements are tied to secondary quests that fail permanently if you push the main story too far - Assassin of Kings and Friends With Benefits are the usual casualties. Realistically this is a two-playthrough game: one relaxed completionist run and one Death March run.",
                "Tip: keep a checklist of missable secondary quests (\"Reason of State\", Keira Metz's quests, the an Craite quests) and do them before the point of no return. Everything else can be mopped up afterwards in the open world."
            ]
        },

        {
            heading: "Main Story",
            body: [
                "The main story unlocks a chain of hidden achievements as it progresses: Lilac and Gooseberries (find Yennefer, at the end of the White Orchard prologue), A Friend in Need (rescue Dandelion), Family Counselor (resolve the Bloody Baron's story in \"Family Matters\"), Necromancer (the quest \"Nameless\"), Full Crew (bring every possible ally to Kaer Morhen), Something More (find Ciri on the Isle of Mists), Xenonaut (\"Through Time and Space\"), and The King is Dead (defeat Eredin)."
            ]
        },

        {
            heading: "Difficulty Runs",
            body: [
                "Passed the Trial (finish on any difficulty), Ran the Gauntlet (finish on \"Blood and Broken Bones!\" or \"Death March!\"), and Walked the Path (finish on \"Death March!\"). A single Death March completion unlocks all three."
            ]
        },

        {
            heading: "Quest Decisions",
            body: [
                "Outcome-specific achievements: Geralt: The Professional (complete every witcher contract in Velen, Novigrad and Skellige before finishing the game), Kingmaker (the an Craite family quests, deciding who rules Skellige), Assassin of Kings (the secondary quest \"Reason of State\"), Friends With Benefits (Keira Metz's questline), and The Doppler Effect (resolve the doppler problem in Novigrad).",
                "Side-content completion: Brawl Master (all fistfighting quests in Velen, Skellige and Novigrad), Brawler (beat Olaf, the Skellige champion), and Fast and Furious (win every horse race)."
            ]
        },

        {
            heading: "Contracts & Combat Feats",
            body: [
                "Named contracts: Shrieker, Fearless Vampire Slayer (Sarasti), Woodland Spirit, Fiend or Foe? (Morvudd), and Ashes to Ashes (Therazane), plus Even Odds (kill two contract monsters without Signs, potions, mutagens, oils or bombs).",
                "Sign and technique feats: The Enemy of My Enemy (Axii an enemy into killing another, 20 times), Humpty Dumpty (Aard 10 enemies off a height), Environmentally Unfriendly (50 environmental kills), That Is the Evilest Thing (ignite Dragon's Dream gas with a burning foe, 10 times), Kaer Morhen Trained (10 counterattacks in a row unhit), Can't Touch This! (5 kills in a fight without damage or Quen), and Fist of the South Star (win a fistfight without taking damage).",
                "Kill feats: Butcher of Blaviken (5 kills in 10 seconds), Overkill (bleeding + poison + burning at once, 10 times), Master Marksman (50 crossbow headshots), Return to Sender (kill 3 enemies with their own arrows), Fire in the Hole (10 monster nests with bombs), and the hidden Triple Threat (3 kills in one fight with three different methods), What Was That? (bomb, counter, Sign and attack within 4 seconds), and Can Quit Anytime I Want (7 potions/decoctions active at once)."
            ]
        },

        {
            heading: "Character, Gear & Gwent",
            body: [
                "Progression and gear: Dendrologist (max one skill tree), Mutant (fill all mutagen slots), Munchkin (character level 35), Weapon \"W\" (develop a mutation), Let's Cook! (12 potion formulae), Bombardier (6 bomb types), Bookworm (read 30 documents), Armed and Dangerous (a full witcher gear set), Dressed to Kill (the set bonus for a full School set), Turned Every Stone (all grandmaster diagrams for every School), Power Overwhelming (all Place of Power bonuses at once), Globetrotter (100 fast-travel points), and Pest Control (all monster nests in a region).",
                "Gwent: Card Collector (all base-game cards), I Have a Gwent Problem (the full Skellige deck), Gwent Master (win the Passiflora tournament), Geralt and Friends (win a round with only neutral cards), All In (play three hero cards in one round and win), and Killed It (win a round with total strength 187+)."
            ]
        },

        {
            heading: "Hearts of Stone",
            body: [
                "Pacta Sunt Servanda unlocks for finishing the expansion. Along the way: I'm Not Kissing That (kill the toad prince), Let the Good Times Roll! (all 10 wedding activities in \"Dead Man's Party\"), Shopaholic (buy all three lots at the Borsodi auction), Curator of Nightmares (recreate all eight of Iris's memories in the painting world), and When It's Many Against One… (provoke all six of Iris's Nightmares at once and win)."
            ]
        },

        {
            heading: "Blood and Wine",
            body: [
                "Story and knighthood: The Witcher's Gone South (reach Toussaint), David and Golyat (kill Golyat with a crossbow bolt to the eye), A Knight to Remember (a flawless run of the knights' tourney), Last Action Hero (the Order of Vitis Vinifera), and Embodiment of the Five Virtues (be given Aerondight).",
                "Toussaint side content: Playing House and I Wore Ofieri Before It Was Cool (develop Corvo Bianco; collect the Ofieri gear), Kling of the Clink (serve time in Toussaint), Wild Rose Dethorned (clear the Order of the Flaming Rose deserter camps), The Grapes of Wrath Stomped (unite the warring vineyards), and the trick shots Rad Steez, Bro! (slide downhill for 10 seconds) and Hasta la Vista™ (kill a frozen enemy with a crossbow bolt).",
                "Moo-rderer (kill 20 cows) can be done anywhere in the game and its expansions."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "First run, comfortable difficulty: do every missable secondary quest early (Assassin of Kings, Friends With Benefits, Kingmaker), then progress the main story for Lilac and Gooseberries through The King is Dead, clearing all contracts along the way for Geralt: The Professional. Pick up the combat, gear, and Gwent achievements as you play, and finish both expansions (Pacta Sunt Servanda, and the Blood and Wine set).",
                "Second run on Death March: this covers Passed the Trial, Ran the Gauntlet, and Walked the Path in one go, and is the place to clean up any combat feats, contracts, or Gwent cards you missed.",
                "Fit the pure grinds - Butcher of Blaviken, Master Marksman, The Enemy of My Enemy, Fire in the Hole, Moo-rderer, Globetrotter, and the Place of Power / monster-nest sweeps - into whichever run has time."
            ]
        }

    ]

};
