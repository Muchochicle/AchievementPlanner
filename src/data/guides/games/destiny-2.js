// Destiny 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/destiny-2.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1085660 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "destiny-2-achievement-guide",
    "category": "game",
    "gameSlug": "destiny-2",
    "icon": "🔫",
    "title": "Destiny 2 Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Destiny 2 (3 hidden). Covers the Guardian progress achievements and the endgame and collection achievements. Three achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Destiny 2 has 23 Steam achievements and three are Steam-hidden (entering the Dreaming City, 15 Forsaken Exotics, and the Shattered Throne dungeon). The open twenty are level 20, acquiring every subclass for all three classes, the 'Light Reforged' quest, Heroic Public Events, Vanguard Ops on Master and Grandmaster, Red War and Forsaken Exotic collections, 5,000 Triumph points, a Triumph Seal, a Collections Badge, a Gambit win, and the Last Wish Raid.",
                "The catalog marks it difficulty 4. It needs the Forsaken content, and the Grandmaster Ops, the Last Wish Raid, a Triumph Seal and 5,000 Triumph points are serious endgame commitments best done with a group.",
                "Tip: level up, unlock all subclasses and do the public-event and quest achievements solo, then bring a fireteam for the Raid, the dungeon and the Grandmaster Ops."
            ]
        },
        {
            "heading": "Guardian Progress",
            "body": [
                "Reaching level 20, acquiring every Titan, Hunter and Warlock subclass, the 'Light Reforged' quest, 5 Heroic Public Events, a Heroic public event, a Master Vanguard Ops, 15 Red War Exotics, Weekly Rewards Rank 20, and an Ops Activity on Master and on Grandmaster.",
                "The achievements here: Long and Winding Road (Reach level 20.); Zavala's Lieutenant (Acquire each Titan subclass.); Cayde's Pathfinder (Acquire each Hunter subclass.); Ikora's Protégé (Acquire each Warlock subclass.); Show Me What You Got (Complete the \"Light Reforged\" quest.); In A Flash (Complete 5 Heroic Public Events.); The People's Hero (Complete a Heroic public event.); Heart of Darkness (Complete a Vanguard Ops activity on Master difficulty or higher.); The Life Exotic (Collect 15 Red War exotic weapons or armor.); Challenge Accepted (Reach Weekly Rewards Rank 20 in the Seasonal Hub.); Belly Of The Beast (Complete an Ops Activity on Master difficulty or higher.); The Prestige (Complete an Ops Activity on Grandmaster difficulty.)."
            ]
        },
        {
            "heading": "Endgame & Collections",
            "body": [
                "Encountering an Agent of the Nine, 5,000 Triumph points, 10 Forsaken Exotics, a Triumph Seal, a Collections Badge, the Steam-hidden Dreaming City entry and 15-Forsaken-Exotics goal, a Gambit win, 'The Corrupted' or 'Warden of Nothing' on Master, the Steam-hidden Shattered Throne dungeon, and the Last Wish Raid.",
                "The achievements here: Lest Ye Be Judged (Encounter an Agent of the Nine somewhere in the system.); Legends Grow (Earn 5,000 Triumph points.); Exotique (Collect 10 Forsaken Exotic weapons or armor.); Seal the Deal (Complete a Triumph Seal.); Fashion Statement (Complete a Collections Badge.); Heart of the Awoken (Enter the Dreaming City (accessible from the interplanetary map after the Forsaken campaign).); An Exotic Journey (Collect 15 Forsaken Exotic weapons or armour pieces.); High-Stakes Play (Win a Gambit match.); Darkness Falls (Complete \"The Corrupted\" or \"Warden of Nothing\" on Master difficulty or higher.); Nothing Left to Say (Complete the Shattered Throne dungeon in the Dreaming City.); Wishing for the Best (Complete the \"Last Wish\" Raid.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Level to 20, unlock every subclass for all three classes, and do the 'Light Reforged' quest.",
                "2. Do the Heroic Public Event achievements and reach Weekly Rewards Rank 20.",
                "3. Progress Forsaken to unlock the Dreaming City ('Heart of the Awoken'), collecting Forsaken Exotics toward 10 and 15.",
                "4. With a fireteam: the Shattered Throne dungeon, the Last Wish Raid, and Ops on Master then Grandmaster.",
                "5. Grind toward 5,000 Triumph points and complete a Triumph Seal and a Collections Badge.",
                "Tip: 'The Prestige' (Grandmaster Ops) is the hardest single achievement - it needs a maxed, well-coordinated fireteam; do everything else first."
            ]
        }
    ]
};
