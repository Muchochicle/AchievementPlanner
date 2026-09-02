// Dicey Dungeons Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dicey-dungeons.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   861540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dicey-dungeons-achievement-guide",
    "category": "game",
    "gameSlug": "dicey-dungeons",
    "icon": "🎲",
    "title": "Dicey Dungeons Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Dicey Dungeons (0 hidden). Every achievement carries Steam's own text - the episode completions across all six contestants, the elimination / parallel-universe / hard-mode bonus rounds, and a long list of one-turn combat challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dicey Dungeons has 53 Steam achievements, none hidden. Six contestants - Warrior, Thief, Robot, Inventor, Witch, Jester - roll dice into equipment to fight through Lady Luck's game show. The achievements cover unlocking episodes and completing 6 / 9 / 12 / all 36 of them, all six episodes for one contestant, the named episodes (Curse of Greed, Finders Keepers, Countdown and so on), the special rounds (the six elimination episodes, the six parallel-universe episodes, all six bonus rounds and all six in hard mode), and a long list of single-turn combat feats (12 damage with thrown dice, 40 damage in one attack, 10 ones in a row, five status effects at once, lock all enemy dice, and beating Lady Luck).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 3 (the hard-mode bonus rounds and some challenges are demanding) and single-playthrough - though 'complete all 36 episodes' is many runs."
            ]
        },
        {
            "heading": "Episodes",
            "body": [
                "Unlocking episodes, completing 6 / 9 / 12 and all 36, all six episodes for one contestant, and the six named story episodes.",
                "The achievements here: Unlock episodes (Unlock episodes.); 6 episodes (Complete any 6 episodes.); 9 episodes (Complete any 9 episodes.); 12 episodes (Complete any 12 episodes.); All episodes for one contestant (Complete all six episodes for any one contestant.); Curse of Greed (Complete the episode named \"Curse of Greed\".); Finders Keepers (Complete the episode named \"Finders Keepers\".); You Choose, You Lose (Complete the episode named \"You Choose, You Lose\".); The Inevitability of Rust (Complete the episode named \"The Inevitability of Rust\".); Countdown (Complete the episode named \"Countdown\".); Losers, Weepers (Complete the episode named \"Losers, Weepers\".); Complete all 36 episodes (Complete all 36 regular episodes.)."
            ]
        },
        {
            "heading": "Special Rounds",
            "body": [
                "The elimination-round episodes (1 through all 6), the parallel-universe episodes (1 through all 6), all six bonus rounds, and the bonus rounds in hard mode (1 through all 6).",
                "The achievements here: Elimination Round 1 (Complete any elimination round episode.); Elimination Round 2 (Complete any two elimination round episodes.); Elimination Round 3 (Complete any three elimination round episodes.); Elimination Round 4 (Complete any four elimination round episodes.); Elimination Round 5 (Complete any five elimination round episodes.); Elimination Round 6 (Complete all six elimination round episodes.); Parallel Universe 1 (Complete any parallel universe episode.); Parallel Universe 2 (Complete any two parallel universe episodes.); Parallel Universe 3 (Complete any three parallel universe episodes.); Parallel Universe 4 (Complete any four parallel universe episodes.); Parallel Universe 5 (Complete any five parallel universe episodes.); Parallel Universe 6 (Complete all six parallel universe episodes.); All six bonus rounds (Complete all six bonus round episodes.); Hard Mode Bonus Round 1 (Complete any bonus round episode in hard mode.); Hard Mode Bonus Round 2 (Complete any two bonus round episodes in hard mode.); Hard Mode Bonus Round 3 (Complete any three bonus round episodes in hard mode.); Hard Mode Bonus Round 4 (Complete any four bonus round episodes in hard mode.); Hard Mode Bonus Round 5 (Complete any five bonus round episodes in hard mode.); Hard Mode Bonus Round 6 (Complete all six bonus round episodes in hard mode.)."
            ]
        },
        {
            "heading": "Combat Challenges",
            "body": [
                "The single-turn feats - big damage (thrown dice, Dagger, 40 in one attack), 10 ones in a row, a first-turn kill, a full-health boss kill, double limit break, five Burn/Freeze/Shock, 10 and 30 Poison, lock all dice, triple gadget, the egg, 64 max HP, Dragon's Tooth, furry dice, and defeating Lady Luck.",
                "The achievements here: Defeat a boss with 4 Battle Axes (Defeat a boss with four or more battle axes equipped.); Use a Finale card (Use a Finale card.); Do 12 damage with thrown dice (Do 12 or more damage in one turn by throwing dice.); Four Prepared Slots (Complete an episode as Witch with four prepared slots.); 10 ones in a row (Roll 10 ones in a row.); Win on your first turn (Defeat an enemy on your first turn.); Defeat a boss with full health (Defeat a boss with full health.); Use limit break twice (Use your limit break twice in one turn.); 20 damage with Dagger (Do more than 20 damage in one turn with Dagger.); 40 damage in a one attack (Do more than 40 damage in a single attack.); Inflict 5 Burn (Inflict 5 or more Burn in a single turn.); Inflict 5 Freeze (Inflict 5 or more Freeze in a single turn.); Inflict 5 Shock (Inflict 5 or more Shock in a single turn.); Inflict 10 Poison (Stack 10 or more total Poison on an enemy at once.); Inflict 30 Poison (Stack 30 or more total Poison on an enemy at once.); Lock all dice (Lock all enemy dice.); Triple Gadget (Use the same gadget three times in one turn.); E G G (Hatch an egg.); 64 Max HP (Have max health of 64 or higher.); Use Dragon's Tooth (Use the Dragon's Tooth.); Furry Dice (Become a furry dice.); Defeat Lady Luck (Defeat Lady Luck.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through each contestant's six episodes; completing 6, 9, 12 and eventually all 36 unlocks along the way, as do the named-episode achievements.",
                "2. Do the elimination and parallel-universe episode sets, then all six bonus rounds and all six bonus rounds again in hard mode.",
                "3. Farm the combat challenges opportunistically - most (10 ones in a row, five Burn, lock all dice, triple gadget) fit naturally into the right contestant's run.",
                "4. Save the demanding feats (40 damage in one attack, 30 Poison, double limit break) for a build that trivialises them.",
                "5. Beat Lady Luck to close out the set.",
                "Tip: match each combat challenge to the contestant built for it - Poison stacks on the Thief, big single hits on the Warrior with Battle Axes, status floods on the Witch's prepared spells - and knock them out during that contestant's episode run rather than fighting the wrong class."
            ]
        }
    ]
};
