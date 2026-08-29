// Peglin Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/peglin.json), whose 52 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1296610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 3 hidden achievements ship
//   no Steam description; their conditions here are curatorial - story
//   markers/endings kept spoiler-light, secret-boss feat conditions
//   cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "peglin-achievement-guide",
    "category": "game",
    "gameSlug": "peglin",
    "icon": "🟠",
    "title": "Peglin Achievement Guide",
    "summary": "A practical guide to all 52 Steam achievements in Peglin - bosses & combat feats, cruciball, relics & boss challenges, advanced boss feats & secrets, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Peglin has 52 Steam achievements, 3 of them hidden (all tied to the Orbserver secret boss - defeating it, ending its first phase early, and applying Yolk to it). The rest are the standard boss kills, the combat and build gags, the Cruciball difficulty levels, and a set of very specific per-boss-fight feats.",
                "Nothing is missable and everything is account-wide. The difficulty is Cruciball 20 (the hardest modifier stack) and the run-restriction wins (one relic, level-one orbs only), plus lining up the fiddly per-boss feats.",
                "Tip: play up the Cruciball ladder normally, ticking off the standard boss kills and combat gags on the way. Save the run-restriction wins and the specific-boss feats for deliberate attempts once you know the fights."
            ]
        },
        {
            "heading": "Bosses & Combat Feats",
            "body": [
                "The core boss kills (the Mole Boss, Slime Boss, Demon Wall, Ballista Militia, and the extra bosses - Qaballistic Ruins, Super Sapper, Thesaurosus the Dragon) and the combat gags (a first-turn boss kill, exactly one damage, 9000+ in one shot, exact lethal, a fully cleared pegboard, 1000+ pegs in one shot, Spinfection and Ballwark thresholds).",
                "The achievements here: Holey Moley (Defeat Avogadro, the Mole Boss); End Of The Slime (Defeat the Slime Boss); All In All (Defeat the Demon Wall); Siege No More (Defeat the Ballista Militia); First Come, First Served (Defeat any boss on the first turn); Sticks And Stones (Die during an event scenario); I Said Punny, Not Puny (Deal exactly one damage); Don't Make Us Say It (Deal more than 9000 damage in one shot); Math Is My Passion (Deal the exact damage needed to defeat an enemy); Spring Cleaning (Fully clear a pegboard); Walking On Pegshells (Hit 1000 pegs or more in one shot); It Was Not Your Time (Leave an enemy with just one health point); Red Slime Green Slime (Keep an enemy Tangled for 6 turns); Wood you kindly? (Defeat Avogadro's Tree before entering the Castle); Won't Get Ruined Again (Defeat the Qaballistic Ruins); Sapper Sweeper (Defeat the Super Sapper); The Treasurer Doesn't Measure Up (Vanquish Thesaurosus the Avaricious Dragon); Poison IV (Inflict 40+ Spinfection onto a single enemy)."
            ]
        },
        {
            "heading": "Cruciball, Relics & Boss Challenges",
            "body": [
                "The difficulty and build achievements: Cruciball Levels 5 / 10 / 15 / 20, the relic and orb combos (Assemball, Critsomallos Fleece, Matryorbshka, Haglin's Shop buyout), the later bosses (Betsy the Leshy, the Pigment of Imagination), the two-egg and vampire-deal runs, and the slime-bounce feat.",
                "The achievements here: Ballwark in a China Shop (Win a battle with 100+ Ballwark remaining); Slime After Slime (Have an orb bounce between slimed pegs 7 times without touching anything else); Some Assembly Required (Fully assemble the Assemball); Critical Thinking (Achieve a 5x crit multiplier with the Critsomallos Fleece); A Full Sweep (Battle the Ballista Militia until all its minions have spawned); Where's my membership card?! (Buy every item and relic, and remove an orb at Haglin's Shop at Cruciball Level 10 or higher); Multiballer (\nUsing the Matryorbshka, have 16 multiballs on screen at once); Cruciball Courier (Complete Cruciball Level 5); Cruciball Captain (Complete Cruciball Level 10); Cruciball Commander (Complete Cruciball Level 15); New Leshy on Life (Defeat Betsy the Leshy); In a Prickle (Get three Bramballs stuck in Leshy's vines at the same time); Eggstravaganza (Win a run with two eggs in your satchel); Masterpieces In Pieces (Defeat the Pigment of Imagination); Cruciball Conqueror (Complete Cruciball Level 20); Enthralled (Win a run after accepting the vampire's deal but skipping the infernal ingot.); You did it? (Die while defeating the Mines' boss)."
            ]
        },
        {
            "heading": "Advanced Boss Feats & Secrets",
            "body": [
                "The specific boss-fight feats: bringing an Egg to the Peglin Chef, the Rainbow Slime and Painbow kills, the one-relic and level-one-orbs win runs, the Bestiary and trading-card firsts, the Slime Boss / Demon Wall / Ruins / Sapper / Dragon / Painter special conditions, the demon-squirrel black hole, and the hidden Orbserver secret-boss achievements.",
                "The achievements here: Fragile Delivery (Bring an Egg to the peglin chef); At the End of the Rainbow (Defeat a Rainbow Slime); All for One (Win a run with only your class relic); One for All (Win a run with only level 1 orbs); Scholorb (Completely fill one entry in the Encirclepedia's Bestiary); Is this a card game? (Collect your first monster trading card); Heartburn (Throw a Rigged Bomb after being eaten by the Slime Boss); Art Connoisseur (Defeat the Pigment of Imagination without destroying any paintings); Not a Dull Wall at All (Convert or Destroy 3 dull pegs while fighting the Demon Wall); Surprised the Ruins (Defeat all 4 Qaballistic Ruins in the same turn); Minion to Winion (Deal 1000 damage to the Super Sapper in one battle by detonating adjacent Sappers); Master Burglar (Defeat Thesaurosus with no coins remaining in the pegboard); From Whence You Came (Send a summoned demon squirrel into a black hole); Taste the Painbow (Defeat the Painbow (slime))."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - story markers, endings or secret-boss feats:",
                "The achievements here: All Eye On You (Defeat the Orbserver (the secret final boss).); Phase Breaker (End the Orbserver's first phase early by destroying all its protective crystal pegs within 5 turns.); Egg On Your Face (Apply Yolk to the Orbserver's eye by breaking an Egg on it.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally, climbing Cruciball and killing every boss - the standard kills and most combat gags come along the way.",
                "2. Do the build/relic feats (Assemball, Matryorbshka multiballs, Critsomallos crits) with focused runs.",
                "3. Push Cruciball 20 and do the run-restriction wins (one relic, level-one orbs only).",
                "4. Set up the per-boss feats deliberately, and take on the Orbserver secret boss for the three hidden achievements.",
                "Tip: the Orbserver's Phase Breaker (destroy all its crystal pegs in the first phase, 5 turns) wants a fast peg-destroying build - Summoning Circle plus Ball Lightning is the classic combo; reset the run if phase two starts before you finish."
            ]
        }
    ]
};
