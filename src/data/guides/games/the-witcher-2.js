// The Witcher 2: Assassins of Kings Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-witcher-2.json), whose 52 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   20920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 38 of 52 ship a real,
//   official Steam description, quoted verbatim below.
// - The 14 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against the Witcher
//   Wiki, XboxAchievements/GameFAQs and Steam community guides, and kept
//   spoiler-light (Chapter bosses, the Iorveth vs Roche path, and the
//   finale choices described by which decision, not its outcome).
export const GUIDE = {
    "slug": "the-witcher-2-achievement-guide",
    "category": "game",
    "gameSlug": "the-witcher-2",
    "icon": "🐺",
    "title": "The Witcher 2 Achievement Guide",
    "summary": "A practical guide to all 52 Steam achievements in The Witcher 2: Assassins of Kings - the story and difficulty markers, the character-build achievements, the combat feats, the side content and minigames, and the 14 hidden achievements (Chapter bosses, the divergent Iorveth/Roche paths and the finale choices), covered with spoiler-light conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Witcher 2 has 52 Steam achievements, 14 of them hidden. The hidden set is where the real planning is: Chapter 2 branches into two completely different acts (the Iorveth path and the Roche path), and several achievements are exclusive to one path, so a full completion needs at least two playthroughs plus one on Insane difficulty.",
                "Achievements are per-run for the path- and choice-specific ones (they cannot be earned by reloading past the decision), but the game is short (roughly 25-40 hours a run), and Insane can be done on a fast final run once you know the game.",
                "Tip: plan three runs - one Roche path grabbing its exclusive hidden achievements, one Iorveth path for its exclusives, and one Insane run (any path) for Madman that also mops up whatever build/combat/side achievements you still need. Use a guide for the shrine locations and the exact dialogue choices."
            ]
        },
        {
            "heading": "Story & Difficulty",
            "body": [
                "The campaign markers: finishing the Prologue and each Chapter, reaching the Epilogue, finishing the game on any difficulty, and finishing it on Insane (Madman).",
                "The achievements here: The Fugitive (Finish the Prologue.); To Aedirn! (Complete Chapter 1.); Alea Iacta Est (Complete Chapter 2.); Madman (Finish the game while playing at the Insane difficulty level.); To Be Continued... (Finish the game at any difficulty level.); Once Ain't Enough (Reach the Epilogue of the game.)."
            ]
        },
        {
            "heading": "Character Build",
            "body": [
                "The progression achievements: reaching character level 10 and 35, acquiring the capstone ability in each of the three trees (Mutant, Sense of Magic, Combat Acumen), enhancing abilities with mutagens, brewing potions and oils (including the ostmurk potion), hiring a craftsman, drinking a potion, and crafting the kayran-carapace armour.",
                "The achievements here: Backbone (Craft a suit of armor from elements of the kayran's carapace.); Guru (Achieve character level 35.); Master Alchemist (Acquire the Mutant ability.); Master of Magic (Acquire the Sense of Magic ability.); Swordmaster (Acquire the Combat Acumen ability.); Journeyman (Achieve character level 10.); Craftsman (Hire a craftsman to create an item.); Apprentice (Use alchemy to brew five potions or oils.); Taster (Drink one potion.); Mutant! (Enhance abilities using mutagens at least five times.); Great Potion! (Brew the ostmurk potion.)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "The fighting achievements: killing 500 foes, three ripostes in a row, an arrow ricochet kill, a three-foe group finisher, 10 kills without losing Vitality, a multi-kill with one bomb, the kayran-trap tentacle cut, and hitting Count Etcheverry with the ballista.",
                "The achievements here: Artful Dodger (Cut off a tentacle using the kayran trap.); Torn Asunder! (Kill more than one opponent using a single exploding bomb.); The Butcher of Blaviken (Kill 500 foes.); Focus (Perform three successful ripostes in a row.); Ricochet (Kill a foe by deflecting his own arrow at him.); Threesome (Kill three foes at once by performing a group finisher.); Perfectionist (Kill 10 foes in a row without losing any Vitality.); Eagle Eye (Hit Count Etcheverry using the ballista.)."
            ]
        },
        {
            "heading": "Side Content & Minigames",
            "body": [
                "The optional-content achievements: the arena, the asylum history, seducing Ves, touring the camp with Zyvik, sparing or killing all the trolls, the sneaking challenges, clearing all the monster nests, collecting 10,000 orens, and the minigames (arm wrestling, dice poker, fist fighting, a five-of-a-kind dice roll, intimidating someone).",
                "The achievements here: Miser (Collect 10000 orens.); Man of the Shadows (Successfully sneak through Loredo's garden and find the component of the kayran trap.); Librarian (Find all additional information about the insane asylum's history.); Gladiator (Defeat all opponents in the Kaedweni arena.); Heartbreaker (Seduce Ves.); Tourist (Tour the camp with Zyvik.); Friend of Trolls (Spare all trolls in the game.); Trollslayer (Kill all the trolls in the game.); Black Ops (Sneak through the lower camp without raising the alarm.); Pest Control (Finish all quests involving the destruction of monster nests.); Gambler (Win an arm wrestling match, a dice poker game and a fist fight.); Intimidator (Intimidate someone.); Poker! (Roll five-of-a-kind at dice poker.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Fourteen achievements are hidden. They are the Chapter bosses, the branch between the Iorveth path and the Roche path, and the finale choices - described here spoiler-light (by which path and which decision, not what happens):",
                "The achievements here: Oh My God! You Killed the Kayran! You Bastards! (Defeat the Kayran, the Chapter 1 boss.); Fat Man (Defeat the Draug (a Chapter 2 fight on the Roche path).); Being Witcher George (At the Chapter 3 finale, choose to kill the dragon.); Reasons of State (On the Roche path, talk Roche out of killing King Henselt after the Chapter 2 fight.); Kingmaker (On the Roche path, help Roche rescue Anais from the Kaedweni camp in Chapter 3.); Necromancer (On the Roche path, relive all of Auckes's memories during Dethmold's vision.); Spellbreaker (On the Iorveth path, help find the dagger needed to free Saskia from the spell.); Witch Hunter (At the end of Chapter 3, let Sile die rather than removing the flawed portal crystal.); Sensitive Guy (Make the compassionate, helpful dialogue choices when people ask Geralt for aid.); Dragonheart (At the Chapter 3 finale, choose to spare the dragon.); Avenger (At the finale, choose to fight and kill Letho.); Old Friends (At the finale, choose to let Letho leave in peace.); Summer Solstice (Bow before the Sun at a Summer shrine (Iorveth path, Chapter 2).); Winter Solstice (Bow to Death at a Winter shrine (available on either path).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First run on Normal, Roche path: grab the Kayran and Draug boss achievements, the Roche-exclusive hidden achievements (Reasons of State, Kingmaker, Necromancer), a Winter shrine, and as many build/combat/side achievements as you can.",
                "2. Second run, Iorveth path: the Iorveth-exclusive hidden achievements (Spellbreaker, a Summer shrine and a Winter shrine), plus anything from the side/build/combat blocks you still need.",
                "3. On either the second run or a dedicated third, do the finale choice pairs across your runs: Being Witcher George / Dragonheart (kill vs spare the dragon) and Avenger / Old Friends (kill vs spare Letho), plus Witch Hunter (let Sile die) and Sensitive Guy.",
                "4. Do the Insane run last for Madman - a fast route on the path you know best, cleaning up any remaining build, combat or minigame achievements.",
                "Tip: the path- and choice-specific hidden achievements cannot be earned by reloading a save from just before the decision if the game already recorded the branch - make the intended choice the first time on each run, guided by a checklist."
            ]
        }
    ]
};
