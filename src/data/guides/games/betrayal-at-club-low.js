// Betrayal At Club Low Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/betrayal-at-club-low.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1885750 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "betrayal-at-club-low-achievement-guide",
    "category": "game",
    "gameSlug": "betrayal-at-club-low",
    "icon": "🎲",
    "title": "Betrayal At Club Low Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in Betrayal At Club Low - none are hidden. Covers reaching each of the game's 11 endings, collecting cosmetics and story items, and a handful of playstyle-specific challenge runs. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Betrayal At Club Low has 24 Steam achievements and none are hidden. Twelve are for reaching each of the game's 11 endings and then all of them for Completionist. The rest are cosmetic and story pickups (a fancy coat, a fierce mask, opening your 'sixth eye'), specific outcomes (fooling Mo, becoming a DJ Master, mortified by bad faith, a spiked-fruit pizza, reviving the Beast Mobile), a long 3-hour-plus playthrough, having $200 in unspent cash, and two challenge-mode clears without losing all your Health or Nerve.",
                "The catalog marks it difficulty 2. Betrayal At Club Low is a dice-driven branching narrative game; its 11 endings are all worth seeing, so getting Completionist means replaying with different approaches to the same night.",
                "Tip: play a mix of aggressive and cautious approaches across replays - the different endings reward very different strategies, from stealth to charm to brute force."
            ]
        },
        {
            "heading": "The 11 Endings",
            "body": [
                "Reaching each of the game's 11 endings - Twilight Diner, The Circus Rides Again, The Bridge, The DJ Dome, The Gig, Big Mo!, Couched, The Inner Game, Eight Sides To Every Story, Deep Exhaustion and Nerve Burned - and experiencing all of them for Completionist.",
                "The achievements here: Twilight Diner (You reached Ending #1); The Circus Rides Again (You reached Ending #2); The Bridge (You reached Ending #3); The DJ Dome (You reached Ending #4); The Gig (You reached Ending #5); Big Mo! (You reached Ending #6); Couched (You reached Ending #7); The Inner Game (You reached Ending #8); Eight Sides To Every Story (You reached Ending #9); Deep Exhaustion (You reached Ending #10); Nerve Burned (You reached Ending #11); Completionist (You experienced all 11 endings.)."
            ]
        },
        {
            "heading": "Story Pickups & Challenge Runs",
            "body": [
                "Acquiring the Fancy Jacket, opening your 'sixth eye', wearing the Fierce Mask, fooling Mo, becoming a DJ Master, being mortified by bad faith, a 3-hour-plus playthrough, reviving the Beast Mobile, a spiked-fruit pizza, $200 in unspent cash, and no-Health/no-Nerve-loss clears in both 4AM mode and Iron Pizza mode.",
                "The achievements here: Fancy Jacket acquired. (Of course you needed to wear that coat.); Seeing Emotions (Your \"sixth eye\" or whatever is now open.); Wearing the Fierce Mask (Amazing this thing even fits.); Fooled Mo (Mo had no idea you just said the Escape Phrase right to his face.); DJ Master (You really are a great DJ... somehow.); Mortified By Bad Faith (It really was that bad.); Solid Game Night (One playthrough of this game ran for at least three hours total.); The Beast Mobile (You breathed new life into that old car.); A Spiked-Fruit Pizza (It's an acquired taste.); Frugal Patron (Find yourself with $200 in unspent cash.); Twilight Warrior (Complete the game without losing all your Health or Nerve in 4AM mode.); Iron Pizza Chef (Complete the game without losing all your Health or Nerve in Iron Pizza mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through a first run of Betrayal At Club Low to see one of its 11 endings.",
                "2. Replay with different approaches - stealthy, aggressive, charming - to unlock the other endings toward Completionist.",
                "3. Pick up cosmetic and story items along the way - the fancy coat, the fierce mask, and opening your 'sixth eye'.",
                "4. Try specific outcomes like fooling Mo, becoming a DJ Master, or reviving the Beast Mobile.",
                "5. Once you know the game well, attempt a no-Health/no-Nerve-loss clear in both 4AM mode and Iron Pizza mode.",
                "Tip: this is a short game meant to be replayed - each of the 11 endings comes from a genuinely different approach to the same night, so don't expect to see them all in one run."
            ]
        }
    ]
};
