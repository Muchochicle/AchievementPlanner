// Yu-Gi-Oh! Duel Links Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/yu-gi-oh-duel-links.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   601510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "yu-gi-oh-duel-links-achievement-guide",
    "category": "game",
    "gameSlug": "yu-gi-oh-duel-links",
    "icon": "🎴",
    "title": "Yu-Gi-Oh! Duel Links Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Yu-Gi-Oh! Duel Links - none are hidden. Covers the Duel-win and Stage milestones, the damage and summon/destroy totals, the Prismatic and card-type collection goals, and the PvP win counts.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Yu-Gi-Oh! Duel Links has 20 Steam achievements and none of them are hidden. They are all cumulative: win 5 / 30 / 50 / 100 / 300 Duels, reach Stage 3 / 10 / 20 / 50, inflict 1,000,000 total damage, collect 10 and 100 Prismatic Cards, win 30 and 100 PvP matches, collect 300 card types, destroy 100 and 1000 monsters, and successfully Summon 100 and 1000 monsters. \"Ultimate Duelist\" is the meta-achievement for earning all the others.",
                "Nothing is missable - every counter accrues over your account's lifetime and there are no timed or one-shot achievements.",
                "Tip: the Stage 50 and 300-Duel-win milestones are the long poles - progress through the world map and Duel the auto-Duel gate opponents on repeat to accrue wins, summons and destroys all at once."
            ]
        },
        {
            "heading": "Win & Stage Milestones",
            "body": [
                "The \"Ultimate Duelist\" meta-achievement, winning 5 / 30 / 50 / 100 / 300 Duels, and reaching Stage 3, 10, 20 and 50.",
                "The achievements here: Ultimate Duelist (Earn all achievements.); Novice Duelist (Win 5 Duels.); Fledgling Duelist (Win 30 Duels.); Mid-Tier Duelist (Win 50 Duels.); Advanced Duelist (Win 100 Duels.); Duel King (Win 300 Duels.); Duelist Awakened (Reach Stage 3.); Single Novice (Reach Stage 10.); Single Duelist (Reach Stage 20.); Ultra Single Duelist (Reach Stage 50.)."
            ]
        },
        {
            "heading": "Collection & Combat Totals",
            "body": [
                "Inflicting 1,000,000 damage, collecting 10 and 100 Prismatic Cards, winning 30 and 100 PvP matches, collecting 300 card types, destroying 100 and 1000 monsters, and Summoning 100 and 1000 monsters.",
                "The achievements here: Damage Dealer (Inflict a total of 1 million points of damage.); Rare Collector (Collect 10 Prismatic Cards.); Super Rare Collector (Collect 100 Prismatic Cards.); PvP Novice (Win 30 PvP matches.); PvP Duelist (Win 100 PvP matches.); Card Collector (Collect 300 types of cards.); Master of Destruction (Destroy a total of 100 monsters.); God of Destruction (Destroy a total of 1000 monsters.); Summoner (Successfully Summon a total of 100 monsters.); Creator God (Successfully Summon a total of 1000 monsters.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story world map to climb Stages, unlocking auto-Duel as you go.",
                "2. Auto-Duel the gate opponents on repeat to grind Duel wins, summons and monster destroys together.",
                "3. Open card packs and complete missions to build toward 300 card types and the Prismatic collection goals.",
                "4. Play ranked PvP for the 30 and 100 PvP-win achievements.",
                "5. Keep grinding toward 300 Duel wins and Stage 50 - the last milestones to fall.",
                "Tip: a fast aggro deck that ends Duels in two or three turns maximises your wins-per-hour and pushes the summon, destroy and damage counters at the same time."
            ]
        }
    ]
};
