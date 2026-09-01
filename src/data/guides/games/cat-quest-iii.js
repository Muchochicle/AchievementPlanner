// Cat Quest III Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cat-quest-iii.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2305840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cat-quest-iii-achievement-guide",
    "category": "game",
    "gameSlug": "cat-quest-iii",
    "icon": "⚓",
    "title": "Cat Quest III Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Cat Quest III (1 hidden). Covers the five Purribean boss fights, bounties, equipment and ship collections, puzzle stones, dungeons, spells, questlines and hidden items. One achievement is hidden and its unlock condition is researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cat Quest III has 30 Steam achievements and 1 is hidden. About a third are collection and completion milestones - equipment pieces, ship blueprints, puzzle stone sets, treasure chests, spells learned, and hidden items. The rest are the five Purribean boss fights (Cathulhu, the Duck of Doom, Captain Meowtallika, the Pi-Rat King, Captain Takomeowki), claiming bounties, clearing the 8-bit dungeon, Golden Tower and Lovepurr dungeon, finishing the Kidd Cat, Mage Bonny and Mama Milka questlines, returning lost items, and the hidden secret/good ending.",
                "The catalog marks it difficulty 2. Cat Quest III is a light, breezy pirate-themed action RPG (solo or co-op); nothing here is missable since you can revert to before the final boss fight after clearing the game.",
                "Tip: talk to Aelius all three times he appears on the overworld map and get all his mana upgrades before you beat the Pi-Rat King, so the secret ending (and its hidden achievement) triggers automatically at the end."
            ]
        },
        {
            "heading": "Bosses, Bounties & Collections",
            "body": [
                "Defeating Cathulhu, the Duck of Doom, Captain Meowtallika, the Pi-Rat King and Captain Takomeowki, claiming your first and then every bounty, and collecting 10, 40 and then all equipment pieces and 1, 5 and then all ship blueprints.",
                "The achievements here: Paws Over Tentacles (Defeated Cathulhu, the menace of the ocean.); Quack Goes the Ducky (Defeated the Duck of Doom, the ruler of the seven seas!); Rock on, Supurrstar! (Defeated Captain Meowtallika, the leader of the Meowtallika crew.); King of Pi-rats No More (Defeated the Pi-rat King, the leader of the pi-rats, in his hideout.); Furry Spicy yet Supurr Sweet (Defeated Captain Takomeowki, the leader of the Spicy Squids!); Furst Bounty (Claimed a wanted poster's bounty!); Bounty Domiewnator (Claimed all wanted poster bounties!); Armeowry Amateur (Collected 10 different pieces of equipment!); Armeowry Enjoyer (Collected 40 different pieces of equipment!); Armeowry Furshionista (Collected all equipment in the Purribean!); Ship Miewtenant (Collected your first ship blueprint!); Ship Furst Mate (Collected 5 ship blueprints!); Ship Mewster (Collected all the ship blueprints!)."
            ]
        },
        {
            "heading": "Puzzles, Dungeons & Spells",
            "body": [
                "Completing a set of puzzle stones and then all 12 sets, clearing the 8-bit dungeon, the Golden Tower and the Lovepurr dungeon, opening 20, 50 and then 80 treasure chests, and learning all 10 spells.",
                "The achievements here: Purrzzler (Completed a set of puzzle stones!); Purroblem Solver (Completed all 12 sets of puzzle stones!); Once Bitten, 8 Times Shy (Completed the 8-bit dungeon!); Purrsitively Golden (Completed the Golden Tower!); Love is Furever (Completed the Lovepurr dungeon!); Treasure Rummeowger (Opened 20 Treasure Chests!); Treasure Pouncer (Opened 50 Treasure Chests!); Treasure Expurrlorer (Opened 80 Treasure Chests!); Spellmewster (Learned all 10 spells!)."
            ]
        },
        {
            "heading": "Questlines & Secrets",
            "body": [
                "Completing the Kidd Cat, Mage Bonny and Mama Milka questlines, witnessing the Purrmaid find her Prince Charming, returning every lost item, the hidden secret ending, and finding a first and then every hidden item.",
                "The achievements here: Meowsterwork (Completed the Kidd Cat questline!); No Necromeowncy Here! (Completed the Mage Bonny questline!); A Painful Pawst, Avenged (Completed the Mama Milka questline!); Happurrly Ever After (Witnessed the Purrmaid find her Prince Charming!); Commewnity Helper (Returned all lost items to their rightful owners!); My North Star was Always You (Reach the secret/good ending: find Aelius all three times on the overworld map and receive all three of his mana upgrades before defeating the Pi-Rat King, then finish the game.); Furst Secret (Found a hidden item!); Secret Purrlunderer (Found all the hidden items!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore the Purribean and take on the five boss fights - Cathulhu, the Duck of Doom, Captain Meowtallika, the Pi-Rat King, and Captain Takomeowki.",
                "2. Claim bounties, collect equipment and ship blueprints, and open treasure chests as you explore.",
                "3. Work through the puzzle stone sets, the 8-bit dungeon, the Golden Tower and the Lovepurr dungeon, and learn all 10 spells.",
                "4. Complete the Kidd Cat, Mage Bonny and Mama Milka questlines, and return every lost item to its owner.",
                "5. Before you fight the Pi-Rat King, find and talk to Aelius all three overworld appearances for his mana upgrades - it locks in the secret ending's hidden achievement at the end of the game.",
                "Tip: nothing is missable - you can revert to just before the final boss after clearing the game to mop up anything you skipped."
            ]
        }
    ]
};
