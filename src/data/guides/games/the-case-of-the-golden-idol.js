// The Case of the Golden Idol Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-case-of-the-golden-idol.json), whose 17 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1677770 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-case-of-the-golden-idol-achievement-guide",
    "category": "game",
    "gameSlug": "the-case-of-the-golden-idol",
    "icon": "🗿",
    "title": "The Case of the Golden Idol Achievement Guide",
    "summary": "A practical guide to all 17 Steam achievements in The Case of the Golden Idol - none are hidden. Covers the eleven base-game cases and the six DLC cases (The Spider of Lanka and The Lemurian Vampire). None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Case of the Golden Idol has 17 Steam achievements and none are hidden. Eleven are simply solving each of the base game's eleven cases, from 'An Abrupt Termination of Contract' through 'The Slight Delay in the Peaceful March to the King's Castle'. The other six are the two DLC packs - The Spider of Lanka (three cases) and The Lemurian Vampire (three cases).",
                "The catalog marks it difficulty 2. There are no missable or restriction achievements; simply working through every case and its DLC to completion is 100%.",
                "Tip: play the base game's eleven cases in order, then the two DLC packs - each case's achievement pops when you correctly fill in its final scenario."
            ]
        },
        {
            "heading": "Base Game Cases 1-11",
            "body": [
                "Solving each of the eleven base-game cases: the contract termination, the rural gentleman, the outsider, the Little Mermaid murder, the poisoning dinner party, the forest cabin, the secretive society, the lighthouse celebration, the doctor's salon, 'The Triumph of Order' and the march to the King's Castle.",
                "The achievements here: First Case Solved (An Abrupt Termination of Contract); Second Case Solved (The Untimely Passing of a Rural Gentleman); Third Case Solved (The Dramatic Departure of an Outsider); Fourth Case Solved (The Murder at the Little Mermaid); Fifth Case Solved (The Intoxicating Dinner Party); Sixth Case Solved (The Explosive Events in the Forest Cabin); Seventh Case Solved (The Strange Practices of a Secretive Society); Eight Case Solved (The Crowning Celebration by The Lighthouse); Ninth Case Solved (The Interrupted Weekend at the Doctor's Salon); Tenth Case Solved (The Triumph of Order); Eleventh Case Solved (The Slight Delay in the Peaceful March to the King's Castle)."
            ]
        },
        {
            "heading": "DLC: Spider of Lanka & Lemurian Vampire",
            "body": [
                "The Spider of Lanka DLC (the card-game tournament, the Raja's Court accident, 'In the Web of the Spider') and The Lemurian Vampire DLC (the island commune death, 'The Lemurian Vampire Strikes!', the two explorers' departure).",
                "The achievements here: The Spider of Lanka 1st Case Solved (The Overly Enthusiastic Card Game Tournament in the Yellow Lily.); The Spider of Lanka 2nd Case Solved (The Unfortunate Accident in the Raja's Court); The Spider of Lanka 3rd Case Solved (In the Web of the Spider); The Lemurian Vampire 1st Case Solved (The Enigmatic Expiration in a Harmonious Island Commune.); The Lemurian Vampire 2nd Case Solved (The Lemurian Vampire Strikes!); The Lemurian Vampire 3rd Case Solved (The Less than Amicable Departure of Two Explorers.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base game's eleven cases in order.",
                "2. Each case's achievement unlocks when you correctly complete its final fill-in-the-blanks scenario.",
                "3. Play The Spider of Lanka DLC (three cases).",
                "4. Play The Lemurian Vampire DLC (three cases).",
                "Tip: there is no penalty for wrong guesses, so if a case is stuck you can brute-force the last few blanks - the achievement still counts."
            ]
        }
    ]
};
