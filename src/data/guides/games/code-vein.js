// CODE VEIN Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/code-vein.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   678960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "code-vein-achievement-guide",
    "category": "game",
    "gameSlug": "code-vein",
    "icon": "🩸",
    "title": "CODE VEIN Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in CODE VEIN - none are hidden. Covers the progress, collection and combat achievements, the boss battles, and the companion memory echoes and endings. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "CODE VEIN has 43 Steam achievements and none are hidden. Seventeen cover progress and collection ('Revenant Preeminent' for 100%, viewing every ending, restoring all Vestiges, exploring the depths, collecting every blood code, learning 150 Gifts, maxing a weapon and a Blood Veil), fifteen are boss kills (the Queen's Knight, Oliver Collins, the Butterfly of Delirium, the Successors, Skull King and the rest), and eleven are the six companions' memory echoes plus the three named endings, 'Drink Deep' and 'Resonant Power'.",
                "The catalog marks it difficulty 4 and about three runs. It is a full Souls-like: every ending needs multiple playthroughs or NG+, 'Weaver of Wills' wants every blood code (many are missable per run without NG+), and the 150-Gift and Vestige goals are long.",
                "Tip: follow a blood-code checklist on your first run, take the 'To Eternity' (true) ending path, then use NG+ for the other endings and any codes or Vestiges you missed."
            ]
        },
        {
            "heading": "Progress, Collection & Combat",
            "body": [
                "'Revenant Preeminent' (100%), learning 50 and 150 Gifts, viewing every ending, restoring all Vestiges, exploring the depths, activating all mistles, 50 partner conversations, 30 presents, companion reputation 30, inheriting 50 Gifts, every weapon and Blood Veil type, every blood code, maxing a weapon and a Blood Veil, and Io's memory echoes.",
                "The achievements here: Revenant Preeminent (Unlocked all other achievements); Gift Gatherer (Learn 150 Gifts (excluding those learned when acquiring a blood code)); Determiner of Fate (View every ending); Mender of Minds (Restore all Vestiges); Deep Trailblazer (Explore every part of the depths); Miasma Manager (Activate all mistles); Together Until Oblivion (Listen to partner conversations 50 times while exploring); Proven Devotion (Receive 30 presents from friends); Exalted Reputation (Raise your reputation as a companion to rank 30); Burning Spirit (Unlock the ability to inherit 50 Gifts); A Weapon for Every Season (Equip every weapon type); Revenant Requisites (Equip every Blood Veil type); Weaver of Wills (Collect every blood code); Gifted (Learn 50 Gifts (excluding those learned when acquiring a blood code)); Ultimate Armament (Upgrade a weapon to its maximum level); Unbreakable Veil (Upgrade a Blood Veil to its maximum level); Io's Memories (View Io's memory echoes)."
            ]
        },
        {
            "heading": "Boss Battles",
            "body": [
                "Giving a friend a desired valuable ('Building Trust'), then the boss kills: the Queen's Knight and its Reborn form, Oliver Collins, the Insatiable Despot, the Butterfly of Delirium, the Invading Executioner, the Successors of the Ribcage / Breath / Claw / Throat, the Gilded Hunter, the Blade Bearer and Cannoneer, Juzo Mido and the Skull King.",
                "The achievements here: Building Trust (Give a desired valuable to a friend); Queen's Knight (Defeat the Queen's Knight within your memory); Queen's Knight Reborn (Defeat the Queen's Knight Reborn in the provisional government outskirts); Oliver Collins (Defeat Oliver Collins in the ruined city underground); Insatiable Despot (Defeat the Insatiable Despot in the dried-up trenches); Butterfly of Delirium (Defeat the Butterfly of Delirium in the ruined city center); Invading Executioner (Defeat the Invading Executioner in the Howling Pit); Successor of the Ribcage (Defeat the Successor of the Ribcage in the Cathedral of the Sacred Blood); Successor of the Breath (Defeat the Successor of the Breath in the Ridge of Frozen Souls); Gilded Hunter (Defeat the Gilded Hunter in the Ashen Cavern); Successor of the Claw (Defeat the Successor of the Claw in the City of Falling Flame); Successor of the Throat (Defeat the Successor of the Throat in the Crown of Sand); Blade Bearer and Cannoneer (Defeat the Blade Bearer and Cannoneer in the Crypt Spire); Juzo Mido (Defeat the boss of the Crypt Spire, Juzo Mido); Skull King (Defeat the Skull King in the Gaol of the Stagnant Blood)."
            ]
        },
        {
            "heading": "Companion Memories & Endings",
            "body": [
                "Viewing Louis's, Yakumo's, Murasame's, Coco's, Davis's and Mia's memory echoes, a successful special drain ('Drink Deep'), the 'Heirs', 'To Eternity' and 'Dweller in the Dark' endings, and executing a Communal Gift ('Resonant Power').",
                "The achievements here: Louis's Memories (View Louis's memory echoes); Yakumo's Memories (View Yakumo's memory echoes); Murasame's Memories (View Murasame's memory echoes); Coco's Memories (View Coco's memory echoes); Davis's Memories (View Davis's memory echoes); Mia's Memories (View Mia's memory echoes); Drink Deep (Successfully use a special drain from a parry, back attack, or launch attack); Heirs (View the \"Heirs\" ending); To Eternity (View the \"To Eternity\" ending); Dweller in the Dark (View the \"Dweller in the Dark\" ending); Resonant Power (Execute a Communal Gift)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First run: follow a blood-code guide so you don't miss any, restore Vestiges as you find them, and beat every boss.",
                "2. Explore the full depths, activate all mistles, and keep giving companions gifts for the reputation and present achievements.",
                "3. Take the 'To Eternity' true-ending path on this run.",
                "4. In NG+ get the other endings ('Heirs', 'Dweller in the Dark') and any blood codes, Gifts or Vestiges you missed.",
                "5. 'Revenant Preeminent' unlocks once everything else is done.",
                "Tip: the ending is decided by a late-game choice and how many Vestiges/relationships you have - keep a save just before the point of no return so you can reload for each ending instead of doing full extra runs."
            ]
        }
    ]
};
