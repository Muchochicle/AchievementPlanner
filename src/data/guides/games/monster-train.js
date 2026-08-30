// Monster Train Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/monster-train.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1102190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "monster-train-achievement-guide",
    "category": "game",
    "gameSlug": "monster-train",
    "icon": "🚂",
    "title": "Monster Train Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Monster Train - 4 are hidden. Covers clan leveling and covenant mastery, run-ending challenges, ascension difficulty tiers, and the 4 hidden cavern-event easter eggs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Monster Train has 53 Steam achievements, and 4 are hidden. The visible list covers leveling and fully-covenant-winning with all 5 clans (Hellhorned, Awoken, Melting Remnant, Stygian Guard, Umbra), defeating the game's bosses (including early/before-combat-phase kills), Daily Challenge score tiers, Ascension (the game's escalating-difficulty ladder) wins at Covenant 5/10/15/25, and a run of specific challenge-style wins (0 cards, no Champion, 40+ cards, googly eyes enabled). The 4 hidden ones are all rare cavern-event encounters that Steam ships with no description.",
                "Nothing is missable in a lasting sense - clan levels, covenant wins, and Ascension tiers are all permanent unlocks, and cavern events (including the hidden ones) can reappear across different runs since they are randomized encounters rather than one-time content. The long poles are Ascension Tier 4 (winning at Covenant 25, the game's highest standard difficulty) and finding all 4 hidden cavern events, since caverns are randomized and not guaranteed every run.",
                "Tip: unlock all 5 clans first (Melting Remnant, Stygian Guard, and Umbra are unlocked through play, not available from the start) so you can level and covenant-win with each - trying to knock out one clan's achievements to 100% before touching the others just delays unlocking the roster you need for the full list."
            ]
        },
        {
            "heading": "Clan Leveling & Covenant Mastery",
            "body": [
                "The core clan-progression block: playing an Imp card, defeating the first boss, leveling up any clan, starting and losing runs, reaching Level 5 and Level 10 with all five clans (Hellhorned, Awoken, Melting Remnant, Stygian Guard, Umbra), maxing every clan at once, and winning a full-covenant run with each of the five clans.",
                "The achievements here: S-imp-le! (Play an Imp card.); Early Survivor (Defeat the first boss.); Level Up! (Level up any clan.); Is That a Challenge? (Start a Daily Challenge.); You Died! (Lose a run.); The Breaker of Horns (Reach Level 5 on The Hellhorned.); Hellhorned Dominance (Reach Level 10 on The Hellhorned.); A Semblance of Sentience (Reach Level 5 on The Awoken.); Fully Awakened (Reach Level 10 on The Awoken.); A Vicarious Remnant (Reach Level 5 on The Melting Remnant.); An Endless Flicker (Reach Level 10 on The Melting Remnant.); Guardian of the Styx (Reach Level 5 on The Stygian Guard.); Stygian Defender (Reach Level 10 on The Stygian Guard.); A Wisp Reanimated (Reach Level 5 on The Umbra.); Penultimate (Reach Level 10 on The Umbra.); Igniter of Pyre, Savior of Hell (Achieve max level on all clans.); The Hellhorned (Win a run with all covenants enabled on The Hellhorned.); The Awoken (Win a run with all covenants enabled on The Awoken.); The Melting Remnant (Win a run with all covenants enabled on The Melting Remnant.); The Stygian Guard (Win a run with all covenants enabled on The Stygian Guard.); The Umbra (Win a run with all covenants enabled on The Umbra.)."
            ]
        },
        {
            "heading": "Runs, Bosses & Daily Challenges",
            "body": [
                "Winning without artifacts, defeating Fel and Seraph, creating a Custom Challenge, upgrading your Champion twice, the three Daily Challenge score tiers (30,000/40,000/50,000 points), and two big-damage-in-one-hit feats (a monster hit and a spell hit).",
                "The achievements here: Only Determination (Win a run without collecting any artifacts.); Angel Hunter (Defeat Fel.); Seraph the Defeated (Defeat Seraph.); My Game, My Rules (Create a Custom Challenge.); Upgraded Champion (Upgrade your Champion twice.); Trainee of the Pyre (Score at least 30,000 points in a Daily Challenge.); Apprentice of the Pyre (Score at least 40,000 points in a Daily Challenge.); Master of the Pyre (Score at least 50,000 points in a Daily Challenge.); Hell’s Finest (Have a monster deal at least 60 damage in one hit.); All Brain, No Brawn (Have a spell deal at least 120 damage in one hit.)."
            ]
        },
        {
            "heading": "Ascension & Deck Size Challenges",
            "body": [
                "The Ascension difficulty ladder - winning at Covenant 5, 10, 15, and 25 - plus deck-size challenge wins (10 or fewer cards, 40 or more cards), unlocking the Melting Remnant, Stygian Guard, and Umbra clans, and viewing the credits.",
                "The achievements here: The Long Journey Begins (Win a run at Covenant 5.); The Devil is in the Details (Win a run at Covenant 10.); Hell Hath No Fury (Win a run at Covenant 15.); We Were Born of Monsters (Win a run at Covenant 25.); The Ragtag Bunch (Win a run with 10 or fewer cards at the end of the run.); A Cramped Train (Win a run with at least 40 cards at the end of the run.); Guided by Candles (Unlock The Melting Remnant.); Into the Deep Sea (Unlock The Stygian Guard.); Diabolical Automation (Unlock The Umbra.); Creators of Hell (View the credits.)."
            ]
        },
        {
            "heading": "Speedkills & Special Wins",
            "body": [
                "Defeating Daedalus, Fel, and Seraph before their combat phase even begins, winning with 0 cards left in your deck, winning without a Champion, winning with the game's googly-eyes cosmetic option enabled, and defeating the Talos and Archus boss variants before their combat phase.",
                "The achievements here: Dead-alus (Defeat Daedalus before his combat phase.); Li-Fel-less (Defeat Fel before her combat phase.); Sans Seraph (Defeat Seraph before his combat phase.); How to Deckbuilder (Win a run with 0 cards at the end of the run.); On Your Own (Win a run without a Champion.); 20/20 Vision (Win a run with googly eyes enabled.); Ta-ta Talos (Defeat Talos before her combat phase.); Archpocalypse (Defeat Archus before his combat phase.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 4 of Monster Train's hidden achievements are rare cavern-event encounters and one shopkeeper easter egg, sourced from community guides (Steam Community discussions and guides, TrueAchievements):",
                "Dante’s Inferno: Recruit Dante the Deceptive. Triggered by a cavern event where you're offered 3 Candle cards that damage your own Pyre unless played each turn - survive long enough carrying them and Dante rewards you with his cloak and his unit card.",
                "It’s a Secret...: Triggered by a cavern event depicting the remains of a battlefield, where you're given a Purge card. Don't use that Purge card for 2 full battles, and a follow-up event appears granting the \"Hope for Peace\" artifact - a rare flower reward.",
                "Thief! Stop!: First, get the 'Petty Thief' card from a cavern event. Later in the same run, find a different cavern event that asks you to sacrifice life for money - with Petty Thief in hand, a third dialogue option appears letting you discard it for gold instead of paying with life.",
                "Buy Something, Won't You?: Spam-click the shopkeeper NPC in the shop screen repeatedly until the achievement pops - purely an easter egg with no in-run cost."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through early runs with the Hellhorned and Awoken (the two starting clans) to unlock Melting Remnant, then Stygian Guard, then Umbra as you progress.",
                "2. Level each clan to 5 and 10, and win a run with all covenants enabled on each of the 5 clans for their respective covenant achievements, finishing with Igniter of Pyre, Savior of Hell once every clan is maxed.",
                "3. Defeat Fel and Seraph normally first, then work toward defeating Daedalus, Fel, Seraph, Talos, and Archus before their combat phase begins for the \"early kill\" achievements.",
                "4. Push Ascension tiers upward as your decks improve - Covenant 5, then 10, then 15, then 25 - and try the specific challenge wins along the way (0 cards, 10 or fewer cards, 40+ cards, no Champion, no artifacts, googly eyes).",
                "5. Play Daily Challenges for the score-tier achievements, and keep an eye out for rare cavern events for the 4 hidden achievements - a Candle-card offer (Dante), a battlefield-remains event where you skip using a granted Purge card twice (the hidden flower), and a life-for-money event once you are carrying a Petty Thief card (the pickpocket swap) - plus spam-clicking the shopkeeper for the joke achievement.",
                "Tip: Ascension tiers and the specific challenge-win achievements (0 cards, no Champion, etc.) do not need to happen in the same run - focus on winning consistently at your current Covenant level first, then chase the odd challenge conditions once your deck skill lets you experiment without risking the run."
            ]
        }
    ]
};
