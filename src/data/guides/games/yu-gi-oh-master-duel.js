// Yu-Gi-Oh! Master Duel Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/yu-gi-oh-master-duel.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1449850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "yu-gi-oh-master-duel-achievement-guide",
    "category": "game",
    "gameSlug": "yu-gi-oh-master-duel",
    "icon": "🃏",
    "title": "Yu-Gi-Oh! Master Duel Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Yu-Gi-Oh! Master Duel - none are hidden. Covers the summoning, attack and Spell/Trap totals earned across Ranked and Event Duels, the burst-damage and Graveyard-revival feats, and reaching Platinum rank in Standard.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Yu-Gi-Oh! Master Duel has 11 Steam achievements and none of them are hidden. Every one is a cumulative milestone earned in Ranked or Event Duels: registering a player name, Tribute Summoning 20 monsters, Special Summoning 50 monsters (and 50 from the Graveyard), building a Chain of 5 effects, declaring 100 attacks, activating 100 Spell/Trap Cards, dueling in Standard 30 times, dealing 4000+ damage in one hit, dealing 100,000 total damage with card effects, and reaching Platinum rank in Standard.",
                "Nothing is missable - every counter accrues across your whole account and only Ranked and Event Duels count (casual and solo mode do not). The Platinum-rank achievement is the only one gated by skill rather than volume.",
                "Tip: a modern combo deck naturally racks up the Special Summon, Chain, Spell/Trap and Graveyard-revival counts in a handful of games - you rarely need to grind these deliberately if you play a current meta archetype in Ranked."
            ]
        },
        {
            "heading": "Duel Milestones",
            "body": [
                "Registering your player name, Tribute Summoning 20 monsters, Special Summoning 50 monsters, building a Chain of 5 effects, declaring 100 attacks, and dueling in Standard 30 times.",
                "The achievements here: Welcome to MASTER DUEL (Register your player name); Come Forth... (Tribute Summon a total of 20 or more monsters in Ranked/Event Duels); Master of Special Summoning (Special Summon a total of 50 or more monsters in Ranked/Event Duels); Chain Blazer (Make a Chain of 5 or more effects (activated by either player) in a Ranked/Event Duel ); Let's Duel! (Declare an attack on a monster 100 or more times in Ranked/Event Duels); Beginner No More (Duel in Standard 30 times or more in Ranked Duels)."
            ]
        },
        {
            "heading": "Advanced Feats & Rank",
            "body": [
                "Activating 100 Spell/Trap Cards, a single 4000+ damage finish, Special Summoning 50 monsters from the Graveyard, dealing 100,000 total effect damage, and reaching Platinum rank or higher in Standard.",
                "The achievements here: Master of Spells ＆ Traps (Activate 100 or more Spell/Trap Cards in Ranked/Event Duels); Ultra Burst (Defeat your opponent by dealing more than 4000 damage at a time in a Ranked/Event Duel); Necromancer (Special Summon 50 or more monsters from the Graveyard in Ranked/Event Duels); Burn It All (Deal a total of 100K or more damage with card effects in Ranked/Event Duels); To Greater Heights (Reach the Platinum rank or higher in Standard)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Register your name and play the Solo mode gates to build a starter deck (these do not count toward the achievements, but they fund a Ranked-viable deck).",
                "2. Take a current meta combo deck into Ranked - the Special Summon, Chain, Graveyard and Spell/Trap counters fill quickly.",
                "3. Keep playing Ranked/Event Duels for the 100-attack and 30-Standard-duel milestones.",
                "4. Watch for a 4000+ damage swing to pop \"Ultra Burst\", and let the 100,000 effect-damage counter accrue.",
                "5. Climb Standard ranked to Platinum for \"To Greater Heights\".",
                "Tip: burn or FTK decks clear \"Ultra Burst\" and \"Burn It All\" almost incidentally, but a standard combo deck reaches Platinum far more reliably - pick based on which achievement is left."
            ]
        }
    ]
};
