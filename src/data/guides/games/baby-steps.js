// Baby Steps Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/baby-steps.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1281040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "baby-steps-achievement-guide",
    "category": "game",
    "gameSlug": "baby-steps",
    "icon": "👟",
    "title": "Baby Steps Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Baby Steps (1 hidden). Covers returning lost items to NPCs across the mountain, finishing the game, a step-efficiency challenge, and beating the designer's gym time. One achievement is hidden and its unlock condition is researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Baby Steps has 13 Steam achievements and 1 is hidden. Most are for returning lost items to specific NPCs you meet on the mountain - the World's Best Dad's cup, the most perceptive person's keys, the most careful person's vase (unbroken), a hot person's ice cream, a responsible parent's child, a champion falconer's trophy, joining the Jiminy's Crickets, and stealing Cassie's trophy. The rest are finishing the game, beating the designer's time in the gym, measuring under 10,000 steps on the pedometer, collecting every achievement, and the hidden Invisible Trophy.",
                "The catalog marks it difficulty 4. Baby Steps is Bennett Foddy's (Getting Over It) deliberately awkward walking-physics game, so just reaching each NPC is the real challenge; the hidden Invisible Trophy is widely considered one of the hardest achievements in the game and is missable once you clear the Poison Slopes section.",
                "Tip: back up your save (or use cloud saves) before attempting the Invisible Trophy in the Poison Hills' Art Nature walk - it wants a long, mistake-free stretch of careful walking."
            ]
        },
        {
            "heading": "NPC Deliveries & Favors",
            "body": [
                "Returning the World's Best Dad's cup, the most perceptive person's keys, the most careful person's vase unbroken, an ice cream to a hot person, a responsible parent's child, a champion falconer's trophy, joining the Jiminy's Crickets, and stealing Cassie's trophy.",
                "The achievements here: World's Best Dad (Return the favorite cup to the World's Best Dad); Most Perceptive Person (Found and returned the keys of the most perceptive person.); Most Careful Person (Returned the most careful person's vase without breaking it.); Coolest Hand (Brought an ice cream to a very hot person.); Most Responsible Person (Rescued the child of a very responsible parent.); Mister Falconer (Retrieved the beloved trophy of a champion falconer.); Jiminy's Cricket (Joined the hallowed ranks of the Jiminy's Crickets.); Cassie's Trophy (Stole Cassie's award for yourself.)."
            ]
        },
        {
            "heading": "Challenges & Completion",
            "body": [
                "Finishing the game, beating the designer's time in the gym, the hidden Invisible Trophy, measuring under 10,000 steps on the pedometer, and collecting every achievement.",
                "The achievements here: Most Punctual (Finished the game on time.); The Greatest (Beat the designer's time in the gym.); Invisible Trophy (In the Poison Hills' Art Nature walk, find the wide white pillar with sunglasses, put them on, then carefully walk a long stretch of stepping stones without a single misstep to reach an invisible trophy - this becomes unobtainable once you clear the Poison Slopes, so back up your save first.); Most Economical (Measured less than ten thousand steps on the pedometer.); Ready for a Different Game (Collect all Achievements in Baby Steps)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore the mountain and return lost items to the NPCs you meet along the way.",
                "2. Beat the designer's time in the gym, and keep an eye on your step count for Most Economical.",
                "3. Before you clear the Poison Slopes, detour into the Poison Hills' Art Nature walk for the hidden Invisible Trophy - back up your save first, since it's missable and unforgiving.",
                "4. Finish the game for Most Punctual, then mop up anything left for the full-collection achievement.",
                "Tip: this is a physics-based walking game where every step is deliberate - expect the NPC deliveries and the hidden trophy to take real patience, not just time."
            ]
        }
    ]
};
