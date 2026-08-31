// Guacamelee! Super Turbo Championship Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/guacamelee-super-turbo-championship-edition.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   275390 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "guacamelee-super-turbo-championship-edition-achievement-guide",
    "category": "game",
    "gameSlug": "guacamelee-super-turbo-championship-edition",
    "icon": "🎃",
    "title": "Guacamelee! Super Turbo Championship Edition Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Guacamelee! Super Turbo Championship Edition (1 hidden). Covers the story and boss achievements, and the combat, completion and challenge achievements. One achievement ('El Savior') is Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Guacamelee! Super Turbo Championship Edition has 30 Steam achievements and one ('El Savior', the all-Orbs true ending) is Steam-hidden. The open twenty-nine are the story bosses (the Alebrije, Flame Face, Jaguar Javier, El Trio de la Muerte, Calaca), combat feats (a 200-hit combo, 20 kills in one INTENSO, a no-damage arena, a Slam-only Chupacabra kill), completion (all side quests, 20 shop upgrades, 100% in all areas), and the Infierno challenge medals (Bronze and Gold on all) plus a Hard-mode clear.",
                "The catalog marks it difficulty 4. 'El Savior' (all six Orbs, most behind brutal Goat Fly platforming), 'World Champion' (Gold on every Infierno challenge) and 'The Never Ending Combo' (200 hits) are the real skill walls.",
                "Tip: finish the story and side quests, get 100% in all areas, then grind the Infierno challenges and collect the Orbs on a cleanup pass with Goat Fly."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "Becoming a Luchador, killing the Alebrije, redeeming X'tabay, defeating Flame Face and Jaguar Javier, Uay Chivo's INTENSO training, a Slam-only Chupacabra kill, a no-damage arena, 100% items in one area, a 125-hit combo, becoming a Chicken, the fake statue, a New Game on slot 2, the first Combo Chicken Challenge, and El Trio de la Muerte.",
                "The achievements here: Viva La Resurrección (Become a Luchador); That's one big Gato Frito (Kill the Alebrije); X'tabay-Bye (Redeem X'tabay); Snuffed Out (Defeat Flame Face); Licking his Wounds (Defeat Jaguar Javier); Power Within (Complete Uay Chivo's INTENSO training); I swat you (Defeat a Chupacabra using only Slam); Flawless (Defeat an arena without taking any damage); Nooks and Crannies (Find 100% of the hidden items in a single area); Combo Nerd (Achieve a 125 Hit Combo); Pollo Power (Become a Chicken); Last Straw (Break Uay Chivo's fake statue in the Tule Tree); \"Next-gen!!\" (Start a New Game on Save Slot #2); Do or Do Not (Complete the first Combo Chicken Challenge); No Encore! (Defeat El Trio de la Muerte)."
            ]
        },
        {
            "heading": "Combat, Completion & Challenges",
            "body": [
                "A Pollo Bomb kill, a Skeleton Luchador, 20 kills in one INTENSO, all side quests, 20 shop upgrades, finding an Orb, the Combo Chicken quest, Bronze on all Infierno challenges, a 200-hit combo, a Hard-mode clear, 100% in all areas, the Steam-hidden 'El Savior', Gold on all Infierno challenges, a full-health Calaca kill in the Diablo's Suit, and defeating Calaca.",
                "The achievements here: Cock of the Walk (Defeat an enemy using the Pollo Bomb); Main Event (Defeat a Skeleton Luchador); That was INTENSE (Kill 20 Enemies in a single INTENSO sequence); Lore Master (Complete All Side Quests); I Have The Power (Purchase 20 Upgrades from the Shop); Got to catch them all (Find an orb); Poncho'd Out (Complete the Combo Chicken quest); Heavyweight (Earn a Bronze Medal in all Infierno challenges); The Never Ending Combo (Achieve a 200 Hit Combo); That was Hard Mode? (Defeat the game on Hard mode); Who put these here??? (Achieve 100% completion in all areas); El Savior (Collect all six Orbs (hidden in Agave Field, Caverna del Pollo, El Infierno, Forest del Chivo, Sierra Morena and Tule Tree - the last drops after defeating Calaca) to save Lupita and see the true ending. Needs the Goat Fly ability and very hard platforming.); World Champion (Earn a Gold Medal in all Infierno challenges ); The Devil wears Revenge! (Defeat Calaca with full health in Diablo's Suit); Boom-Shack-Calaca (Defeat Calaca)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, defeating every boss and completing every side quest.",
                "2. Get 100% completion in all areas ('Who put these here???').",
                "3. Do the combat feats: a 200-hit combo, 20 kills in one INTENSO, a no-damage arena.",
                "4. Grind the Infierno challenges to Bronze, then Gold on all.",
                "5. On a cleanup pass with Goat Fly, collect all six Orbs (the last drops after Calaca) for 'El Savior' and the true ending.",
                "6. Do a Hard-mode run.",
                "Tip: 'El Savior' is widely considered the hardest achievement - the Tule Tree and Sierra Morena Orbs need pixel-perfect Goat Fly chains, so use a video guide and expect many attempts."
            ]
        }
    ]
};
