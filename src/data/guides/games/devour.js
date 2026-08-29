// DEVOUR Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/devour.json), whose 131 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1274570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "devour-achievement-guide",
    "category": "game",
    "gameSlug": "devour",
    "icon": "🕯️",
    "title": "DEVOUR Achievement Guide",
    "summary": "A practical guide to all 131 Steam achievements in DEVOUR - general & cross-map, character wins (hard & nightmare), the farmhouse, the asylum, the inn, the town, the slaughterhouse, the manor, the carnival.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DEVOUR has 131 Steam achievements and none are hidden. They are organised by map - The Farmhouse, The Asylum, The Inn, The Town, The Slaughterhouse, The Manor and The Carnival - each with a set of collectibles, banish/lure/stagger counters, and Normal/Hard/Nightmare win achievements, plus a block of cross-map goals (per-character Hard and Nightmare wins, no-medkit and no-battery runs).",
                "Nothing is missable and progress is account-wide. The grind is the counters (banish 666 of a map's creature, lured 20, staggered 20) and the Nightmare-difficulty wins, which are far easier and more reliable in co-op.",
                "Tip: play each map in co-op, focusing on its collectibles and Normal win first, then escalate to Hard and Nightmare. The 666-banish and 20-lure/stagger counters fill naturally over repeated runs of the same map."
            ]
        },
        {
            "heading": "General & Cross-Map",
            "body": [
                "The map-agnostic goals: losing a game, reviving 20 teammates, being knocked out 20 times, the co-op clean-run achievements (no knockout, only you knocked out, no knockouts at all), winning 5 times, getting knocked out in a hiding spot, and the no-medkit / no-battery wins on Normal, Hard and Nightmare.",
                "The achievements here: ​​Left For Dead (Lost a game); Medic (Revived 20 teammates); Hurt Me Plenty (Got knocked out 20 times); MVP (Won a co-op game without being knocked out yourself); Carried (Won a co-op game but you were the only player knocked out); ​​I Think I’m Getting The Hang Of This (Won the game 5 times); Leave No One Behind (Won a co-op game without a single knockout); Peek-A-Boo! (Got knocked out while in a hiding spot); Unharmed (Normal) (Won a co-op game on Normal mode without medkits); Unharmed (Hard) (Won a co-op game on Hard mode without medkits); Unharmed (Nightmare) (Won a co-op game on Nightmare mode without medkits); Running On Empty (Normal) (Won a game on Normal mode without batteries); Running On Empty (Hard) (Won a game on Hard mode without batteries); Running On Empty (Nightmare) (Won a game on Nightmare mode without batteries)."
            ]
        },
        {
            "heading": "Character Wins (Hard & Nightmare)",
            "body": [
                "Winning a game in Hard mode and in Nightmare mode as each playable character - Anna, April, Cultist, Frank, Kai, Molly, Nathan, Sam and Zara.",
                "The achievements here: Nerves Of Steel (Anna) (Won a game in Hard mode as Anna); Nerves Of Steel (April) (Won a game in Hard mode as April); Nerves Of Steel (Cultist) (Won a game in Hard mode as Cultist); Nerves Of Steel (Frank) (Won a game in Hard mode as Frank); Nerves Of Steel (Kai) (Won a game in Hard mode as Kai); Nerves Of Steel (Molly) (Won a game in Hard mode as Molly); Nerves Of Steel (Nathan) (Won a game in Hard mode as Nathan); Nerves Of Steel (Sam) (Won a game in Hard mode as Sam); Nerves Of Steel (Zara) (Won a game in Hard mode as Zara); Demon Tamer (Anna) (Won a game in Nightmare mode as Anna); Demon Tamer (April) (Won a game in Nightmare mode as April); Demon Tamer (Cultist) (Won a game in Nightmare mode as Cultist); Demon Tamer (Frank) (Won a game in Nightmare mode as Frank); Demon Tamer (Kai) (Won a game in Nightmare mode as Kai); Demon Tamer (Molly) (Won a game in Nightmare mode as Molly); Demon Tamer (Nathan) (Won a game in Nightmare mode as Nathan); Demon Tamer (Sam) (Won a game in Nightmare mode as Sam); Demon Tamer (Zara) (Won a game in Nightmare mode as Zara)."
            ]
        },
        {
            "heading": "The Farmhouse",
            "body": [
                "The first map: all roses, the goat-burning counters (1 / 3 / 5 / 7 in a game, 666 total), luring 20 goats, all of Anna's diary pages, releasing goats from the cages, lighting the altar 100 times, banishing 20 demons, staggering and calming Anna, the knockout gags, and the single-player / co-op / Hard / Nightmare wins.",
                "The achievements here: Old Fashioned Romantic (Found all the roses (The Farmhouse)); Medium Rare (Burned a goat (The Farmhouse)); Three’s A Crowd (3 goats burned in a single game (The Farmhouse)); ​​Halfway There (5 goats burned in a single game (The Farmhouse)); Feeling Lucky? (7 goats burned in a single game (The Farmhouse)); ​​Ain’t Got Time To Bleed (Won a game in single player mode (The Farmhouse)); ​​Survivors (Won a game in co-op mode (The Farmhouse)); ​​Twenty’s Plenty (Lured 20 goats with hay (The Farmhouse)); ​​All Work And No Play (Found all of Anna’s diary pages (The Farmhouse)); ​​KO (Got knocked out by Anna (The Farmhouse)); ​​Demonology (Got knocked out by a demon (The Farmhouse)); Hide And Seek (Released goats from cage (The Farmhouse)); Open Sesame (Released goats from attic cage (The Farmhouse)); Twisted Firestarter! (Lit altar 100 times (The Farmhouse)); ​​Wouldst Thou Like To Live Deliciously? (Banished 20 demons (The Farmhouse)); Sting Like A Bee (Staggered Anna 20 times (The Farmhouse)); Pacifier (Got Anna to calm down 10 times (The Farmhouse)); Shhh (Got Anna to calm down (The Farmhouse)); No More Room In Hell (Won a co-op game in Nightmare mode (The Farmhouse)); ​​G.O.A.T (Won the game 5 times in Nightmare mode); Moonwalk (Won a single player game in Nightmare mode (The Farmhouse)); Piece O' Cake (Won a co-op game in Hard mode (The Farmhouse)); No Rest For The Wicked (Won a single player game in Hard mode (The Farmhouse)); Goat Curry (Burnt 666 goats (The Farmhouse))."
            ]
        },
        {
            "heading": "The Asylum",
            "body": [
                "The second map: 100 fuses used, all clipboards, all patches, frying a rat, banishing 100 inmates and electrocuting 666 rats, luring 20 rats, staggering and calming Molly, kicking 20 trash cans, and the single-player / co-op / Hard / Nightmare wins.",
                "The achievements here: Nikola (100 fuses used (The Asylum)); The Doctor Will See You Now (Read all clipboards (The Asylum)); May Queen (Found all the patches (The Asylum)); Crispy (Fried a rat (The Asylum)); Ratched (Banished 100 inmates (The Asylum)); Come To Mamma (Lured 20 rats with rotten food (The Asylum)); Interrupted (Staggered Molly 20 times (The Asylum)); Cast Him Into The Darkness (Won a game in single player mode (The Asylum)); Icon of Sin (Won a single player game in Hard mode (The Asylum)); In Your Prime (Won a single player game in Nightmare mode (The Asylum)); Not Today, Satan! (Won a game in co-op mode (The Asylum)); You've Got Red On You (Won a co-op game in Hard mode (The Asylum)); Out Of The Cuckoo's Nest (Won a co-op game in Nightmare mode (The Asylum)); The Trashman (Kicked over 20 trash cans (The Asylum)); Tranquillised (Got Molly to calm down 10 times (The Asylum)); Ratatouille (Electrocuted 666 rats (The Asylum))."
            ]
        },
        {
            "heading": "The Inn",
            "body": [
                "The third map: staggering Zara 20 times, all cherry blossoms, destroying 666 eggs and banishing 666 spiders, cleaning the Onsen water 20 times, and the single-player / co-op / Hard / Nightmare wins.",
                "The achievements here: Arachnophobia (Staggered Zara 20 times (The Inn)); Huntsman (Won a game in single player mode (The Inn)); Curse Breakers (Won a game in co-op mode (The Inn)); Pollination (Found all the cherry blossoms (The Inn)); Eggcellent (Destroyed 666 eggs at shrines (The Inn)); That's A Lot Of Legs (Banished 666 spiders (The Inn)); Cleansing (Cleaned the Onsen water 20 times (The Inn)); Venomous (Won a co-op game in Hard mode (The Inn)); Better The Devil You Know (Won a single player game in Hard mode (The Inn)); Goblins Be Thine (Won a co-op game in Nightmare mode (The Inn)); An Excellent Day For An Exorcism (Won a single player game in Nightmare mode (The Inn))."
            ]
        },
        {
            "heading": "The Town",
            "body": [
                "The fourth map: all horseshoes, staggering Sam 20 times, burning 666 books and cursing 100, banishing 666 ghosts, and the single-player / co-op / Hard / Nightmare wins.",
                "The achievements here: If The Shoe Fits (Found all the horseshoes (The Town)); Rodeo (Staggered Sam 20 times (The Town)); Lone Wolf (Won a game in single player mode (The Town)); Posse Up (Won a game in co-op mode (The Town)); Unholy Communion (Won a co-op game in Hard mode (The Town)); No Mercy (Won a co-op game in Nightmare mode (The Town)); Reach For The Sky (Won a single player game in Hard mode (The Town)); This Town Ain't Big Enough (Won a single player game in Nightmare mode (The Town)); Destroyer Of Words (Burned 666 books (The Town)); Cursed (Cursed 100 books at pentagrams (The Town)); That's The Spirit (Banished 666 ghosts (The Town))."
            ]
        },
        {
            "heading": "The Slaughterhouse",
            "body": [
                "The fifth map: staggering Nathan 20 times, searching 20 piles of poop, banishing 666 boars, dunking 666 pigs, freeing 100 corpses, all barbed wires, luring 20 pigs, and the single-player / co-op / Hard / Nightmare wins.",
                "The achievements here: Down, Pig! (Staggered Nathan 20 times (The Slaughterhouse)); Slice And Dice (Won a game in single player mode (The Slaughterhouse)); Team Spirit (Won a game in co-op mode (The Slaughterhouse)); Little Squealers (Won a co-op game in Hard mode (The Slaughterhouse)); A Hundred Yards Of Prime Rib (Won a single player game in Hard mode (The Slaughterhouse)); Blood Bond (Won a co-op game in Nightmare mode (The Slaughterhouse)); The Butcher (Won a single player game in Nightmare mode (The Slaughterhouse)); That Is One Big Pile Of Shit (Searched 20 piles of poop (The Slaughterhouse)); This Is Starting To Get Boaring (Banished 666 boars (The Slaughterhouse)); Minced Meat (Dunked 666 pigs (The Slaughterhouse)); Bone Collector (Freed 100 corpses from their suffering (The Slaughterhouse)); Tetanus Shot (Found all the barbed wires (The Slaughterhouse)); Here, Piggy! (Lured 20 pigs with bones (The Slaughterhouse))."
            ]
        },
        {
            "heading": "The Manor",
            "body": [
                "The sixth map: the single-player / co-op / Hard / Nightmare wins, banishing 666 crows, burying 666 heads, luring 20 heads with cake, all feathers, staggering April 20 times, and cleaning 20 heads.",
                "The achievements here: Through The Looking Glass (Won a game in single player mode (The Manor)); Who You Gonna Call? (Won a game in co-op mode (The Manor)); Heartbreaker (Won a single player game in Hard mode (The Manor)); Open Casket (Won a co-op game in Hard mode (The Manor)); Spectre (Won a single player game in Nightmare mode (The Manor)); Wedding Crashers (Won a co-op game in Nightmare mode (The Manor)); Flight Risk (Banished 666 crows (The Manor)); Gravedigger (Buried 666 heads (The Manor)); Let Them Eat Cake (Lured 20 heads with cake (The Manor)); Ticklish (Found all the feathers (The Manor)); Jilted (Staggered April 20 times (The Manor)); Glow Up (Cleaned 20 heads (The Manor))."
            ]
        },
        {
            "heading": "The Carnival",
            "body": [
                "The seventh map: the single-player / co-op / Hard / Nightmare wins, banishing 666 monkeys and 666 doll heads, blowing up 20 dolls with music boxes, all tickets, staggering Kai 20 times, and spending 100 coins.",
                "The achievements here: Send in the Clowns (Won a game in single player mode (The Carnival)); You Must Be This Tall To Ride (Won a game in co-op mode (The Carnival)); Escape Artist (Won a single player game in Hard mode (The Carnival)); Last Laugh (Won a co-op game in Hard mode (The Carnival)); Ringleader (Won a single player game in Nightmare mode (The Carnival)); You'll Float Too (Won a co-op game in Nightmare mode (The Carnival)); Monkeying Around (Banished 666 monkeys (The Carnival)); Mercy Killing (Banished 666 doll heads (The Carnival)); KABOOM! (Blew up 20 dolls with music boxes (The Carnival)); Step Right Up (Found all the tickets (The Carnival)); Slapstick (Staggered Kai 20 times (The Carnival)); Fortunate (Spent 100 coins (The Carnival))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through the maps in order in co-op: for each, get the collectibles and the Normal single-player and co-op wins.",
                "2. Escalate each map to Hard, then Nightmare, with a coordinated group.",
                "3. Let the banish / lure / stagger counters (mostly 666 or 20) accumulate across repeated runs - they will finish around the time you have all difficulties done.",
                "4. Mop up the cross-map block: the per-character Hard and Nightmare wins, and the no-medkit / no-battery runs.",
                "Tip: the 666-banish counters are per-map creature kills - pick the map you are grinding difficulties on and just keep banishing; you do not need to win the run for the counter to tick."
            ]
        }
    ]
};
