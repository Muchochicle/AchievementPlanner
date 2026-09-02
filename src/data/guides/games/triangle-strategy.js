// TRIANGLE STRATEGY Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/triangle-strategy.json), whose 108 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1850510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "triangle-strategy-achievement-guide",
    "category": "game",
    "gameSlug": "triangle-strategy",
    "icon": "⚖️",
    "title": "TRIANGLE STRATEGY Achievement Guide",
    "summary": "A practical guide to all 108 Steam achievements in TRIANGLE STRATEGY (1 hidden). The one hidden achievement is clearing the secret Golden Route. Everything else - the Conviction and voting achievements, the story-branch choices, the battle and exploration counters, and the 'reach the pinnacle of strength' and 'view all character stories' sets for each recruitable unit - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "TRIANGLE STRATEGY has 108 Steam achievements, 1 of them hidden. Serenoa Wolffort navigates a war between three nations over salt and iron, with the party voting on the Scales of Conviction at key turning points. The visible achievements cover the three Conviction values and unanimous/tiebreaker votes, the mutually-exclusive story-branch choices (Benedict's, Roland's and Frederica's paths), a long list of battle and exploration counters (100 battles, elemental-terrain tricks, mock battles, all notes and info, speak to all cats, travel all paths), and two big per-unit sets: 'reach the pinnacle of strength' for 30 units and 'view all character stories' for 29 units.",
                "The 1 hidden achievement is clearing the Golden Route - the secret fourth ending reached by very specific Chapter 7 and Chapter 17 choices.",
                "The catalog marks it difficulty 3 and multiple playthroughs - seeing all four routes, recruiting every unit and maxing everyone realistically takes New Game + runs."
            ]
        },
        {
            "heading": "Convictions & Story Paths",
            "body": [
                "The platinum, recruiting all units, the three Conviction values (and all three), the voting achievements, the mutually-exclusive story-branch choices, and the hidden Golden Route.",
                "The achievements here: Champion of a New Era (Obtain every achievement.); One and All (Recruit all units.); Defender of Morality (Reach a sufficient Morality Conviction value.); Seeker of Utility (Reach a sufficient Utility Conviction value.); Believer of Liberty (Reach a sufficient Liberty Conviction value.); Unshakable Convictions (Reach a sufficient Morality, Utility, and Liberty Conviction value.); Negotiator (Successfully persuade an ally.); Unanimous (Successfully persuade everyone to vote the same way.); Tiebreaker (Cast the deciding vote when there is a tie.); As Lord (Do not sacrifice the town of Wolffort during chapter 7.); The Enemy of an Enemy (Reveal Roland's identity to Svarog.); Birthright (Receive the royal signet from Symon.); Secret of the Continent (Find the key in the Rosellan village.); Wrongdoing Exposed (Successfully report Sorsley's misdeeds.); Never-Ending Path (Assent to Benedict's strategy.); The End of Sin (Stand with Roland's idea.); Silent Sea (Place your faith in Frederica's ideals.); Grand Finale (Clear the game's Golden Route - the hidden fourth path - reached by a specific set of Chapter 7 and Chapter 17 choices, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Battle & Exploration",
            "body": [
                "The combat counters (100 battles, weakness exploits, follow-ups, back attacks, elemental terrain, collisions, falls, counters, heals, supports), the mock battles, speaking to all cats, all quietuses, travelling all paths, all notes and all information.",
                "The achievements here: First Campaign (Win a battle for the first time.); Veteran Warrior (Win 100 battles.); Efficiency Is Key (Exploit enemy weaknesses 100 times.); Working Together (Perform 100 follow-up attacks.); From Behind (Perform 100 back attacks.); Playing with Fire (Set the ground ablaze 50 times.); Playing with Ice (Freeze the ground 50 times.); Playing with Water (Create puddles 50 times.); Playing with Lightning (Electrocute units 50 times.); Forces Collide (Deal collision damage 50 times.); From Above (Deal fall damage 50 times.); On the Defensive (Counter 50 times.); Healer (Heal 100 times.); Supporter (Perform 100 support actions to give allies an advantage.); Enfeebling Force (Perform 100 support actions to put enemies at a disadvantage.); Item User (Use items 100 times.); One Fell Swoop (Defeat 5 or more units at one time.); Few but Fierce (Embark with half or less than the maximum units and claim victory.); Careful! (Deal damage with a mine cart.); Spoils of War (Pick up 100 spoils.); Shrewd Strategist (Use quietuses 50 times.); Bold Battler (Accumulate 1,000 kudos.); A Heavy Purse (Accumulate 1,000,000 coins.); Reaper of 100 Souls (Complete the mental mock battle \"The Assassins.\"); Tavern Regular (Complete all mental mock battles.); Feline Fanatic (Speak to all cats.); Sundry Shop Regular (Learn all quietuses and obtain the maximum amount of Quietus Points.); Weaver of Histories (Travel all paths.); Avid Reader (Collect all notes.); Wise Warrior (Gather all information.); Smithy Regular (Learn the Weapon Skill of all units.)."
            ]
        },
        {
            "heading": "Unit Mastery",
            "body": [
                "'Reach the pinnacle of strength' for each of the 30 recruitable units.",
                "The achievements here: Swordmaster (Reach the pinnacle of Serenoa's strength.); Master Cavalryman (Reach the pinnacle of Roland's strength.); Master Strategist (Reach the pinnacle of Benedict's strength.); Fire Master (Reach the pinnacle of Frederica's strength.); Master Curist (Reach the pinnacle of Geela's strength.); Master Assassin (Reach the pinnacle of Anna's strength.); Master Flyer (Reach the pinnacle of Hughette's strength.); Master Guardian (Reach the pinnacle of Erador's strength.); Bow Master (Reach the pinnacle of Rudolph's strength.); Ice Master (Reach the pinnacle of Corentin's strength.); Master Advisor (Reach the pinnacle of Julio's strength.); Master Dancer (Reach the pinnacle of Milo's strength.); Prayer Master (Reach the pinnacle of Cordelia's strength.); Big Boss (Reach the pinnacle of Travis's strength.); Treasure Hunter (Reach the pinnacle of Trish's strength.); Great General (Reach the pinnacle of Avlora's strength.); Cure Knight (Reach the pinnacle of Hossabara's strength.); Spell Master (Reach the pinnacle of Narve's strength.); Medicine Master (Reach the pinnacle of Medina's strength.); Craft Master (Reach the pinnacle of Jens's strength.); Divine Spear (Reach the pinnacle of Maxwell's strength.); Divine Bow (Reach the pinnacle of Archibald's strength.); Winguard (Reach the pinnacle of Flanagan's strength.); Spirit Master (Reach the pinnacle of Ezana's strength.); Elocutionist (Reach the pinnacle of Lionel's strength.); Divine Fist (Reach the pinnacle of Groma's strength.); Trick Master (Reach the pinnacle of Piccoletta's strength.); Numerologist (Reach the pinnacle of Decimal's strength.); Timespeaker (Reach the pinnacle of Quahaug's strength.); Land Master (Reach the pinnacle of Giovanna's strength.)."
            ]
        },
        {
            "heading": "Character Stories",
            "body": [
                "'View all character stories' for each of the 29 units that have them.",
                "The achievements here: King and Friend (View all of Roland's character stories.); A Toast to the Future (View all of Benedict's character stories.); Beneath the Starry Sky (View all of Frederica's character stories.); Tutor (View all of Geela's character stories.); True Parents (View all of Anna's character stories.); To the Open Skies (View all of Hughette's character stories.); For an Eternity (View all of Erador's character stories.); A Promise Fulfilled (View all of Rudolph's character stories.); Groundbreaking Research (View all of Corentin's character stories.); A Lord Worth Serving (View all of Julio's character stories.); A Useful Poisonous Plant (View all of Milo's character stories.); A Princess and Her People (View all of Cordelia's character stories.); Bandit Boss (View all of Travis's character stories.); Allies of the Poor (View all of Trish's character stories.); For a Peaceful World (View all of Avlora's character stories.); A Spot of Sunshine (View all of Hossabara's character stories.); Disciple of the Archmage (View all of Narve's character stories.); The Value of a Life (View all of Medina's character stories.); The Perfect Weapon (View all of Jens's character stories.); A Righteous Kingdom (View all of Maxwell's character stories.); An Old Soldier's Regrets (View all of Archibald's character stories.); A Shield for the People (View all of Flanagan's character stories.); Blessed Rain (View all of Ezana's character stories.); A Merchant's Joy (View all of Lionel's character stories.); Unwavering Fist (View all of Groma's character stories.); Of Circuses and Smiles (View all of Piccoletta's character stories.); The Automaton's Master (View all of Decimal's character stories.); Dreaming of Mother (View all of Quahaug's character stories.); Every Corner of Norzelia (View all of Giovanna's character stories.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first route (any of Morality / Utility / Liberty), making Conviction and vote achievements happen naturally, and start recruiting units and viewing their character stories.",
                "2. On New Game +, take the other two named routes, then the Golden Route via the specific Chapter 7 and Chapter 17 choices for 'Grand Finale' and 'Weaver of Histories'.",
                "3. Across runs, recruit every unit (many are route- or Conviction-gated) and view all of each unit's character stories.",
                "4. Grind the battle counters on the mental mock battles at the tavern - they are repeatable and cover elemental terrain, follow-ups, back attacks and heals efficiently.",
                "5. Max every recruited unit to the pinnacle of strength, and mop up the collectibles (all cats, all notes, all information, all quietuses).",
                "Tip: recruit-gating is the real obstacle - several units need a specific Conviction balance or route choice, so look up the recruitment requirements before your first run and steer your early votes to unlock the hardest-to-get characters rather than backfilling them over extra playthroughs."
            ]
        }
    ]
};
