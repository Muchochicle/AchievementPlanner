// Hammerwatch Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hammerwatch.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   239070 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hammerwatch-achievement-guide",
    "category": "game",
    "gameSlug": "hammerwatch",
    "icon": "🏹",
    "title": "Hammerwatch Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Hammerwatch - none are hidden. Covers the Castle Hammerwatch boss kills on medium and hard difficulty, the money and kill milestones, the survival level, the movement and combo feats, and the Temple of the Sun campaign and its easter eggs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hammerwatch has 38 Steam achievements and none of them are hidden. The core is beating each boss of the Castle Hammerwatch campaign (Queen, Knight, Lich, Dragon) and the survival level's Crystal Lich on both medium and hard difficulty, all \"without any crutches enabled\" (no assist options). Around that sit money and kill milestones (up to 1,000,000 coins and 250,000 kills in the campaign), the survival level completion, a few movement and combo feats, and the Temple of the Sun campaign - its three desert bosses on medium and hard, its completion, and the Full House achievement for beating both campaigns. The rest are hidden-easter-egg finds spread across both campaigns.",
                "Nothing is missable - both campaigns can be replayed, and the money and kill counters accumulate across all your campaign play. Full completion needs a medium and a hard playthrough of each campaign (with no assist options), plus a thorough hunt for the nine easter eggs.",
                "Tip: the boss achievements require no \"crutches\" (assist options like extra lives or damage reduction) enabled - so before your medium and hard runs, open the options and make sure every assist is off, since having one on silently voids every boss achievement for that run."
            ]
        },
        {
            "heading": "Castle Hammerwatch: Bosses & Milestones",
            "body": [
                "Killing the Queen, Knight, Lich and Dragon on medium and hard difficulty (no assist options), the survival-level Crystal Lich on medium and hard, the first four easter eggs, the money milestones (10k / 100k / 1,000,000 coins), the kill milestones (2,500 / 25,000 / 250,000), surviving the castle collapse, and the air-walk, grotto and combo feats.",
                "The achievements here: The Queen (Kill the Queen on medium difficulty without having any crutches enabled); The Knight (Kill the Knight on medium difficulty without having any crutches enabled); The Lich (Kill the Lich on medium difficulty without having any crutches enabled); The Dragon (Kill the Dragon on medium difficulty without having any crutches enabled); The Hard Queen (Kill the Queen on hard difficulty without having any crutches enabled); The Hard Knight (Kill the Knight on hard difficulty without having any crutches enabled); The Hard Lich (Kill the Lich on hard difficulty without having any crutches enabled); The Hard Dragon (Kill the Dragon on hard difficulty without having any crutches enabled); Harvesting (Find the first easter egg); The Heist (Find the second easter egg); Earth & Void (Find the third easter egg); Doomed Space Marine (Find the fourth easter egg); Affluent (Get 10,000 coins in the campaign); Rich (Get 100,000 coins in the campaign); Millionaire (Get 1,000,000 coins in the campaign); Mass murder (Kill 2,500 enemies in the campaign); Massacre (Kill 25,000 enemies in the campaign); Genocide (Kill 250,000 enemies in the campaign); Survivalist (Survive the castle collapsing); Crystal Lich (Kill the Crystal Lich in the survival level on medium difficulty without having any crutches enabled); Hard Crystal Lich (Kill the Crystal Lich in the survival level on hard difficulty without having any crutches enabled); Midway (Air-walk between the start and the end!); The Grisly Combination (Solve it like it was E1M4); Worse than Ghost and Goblins (Fail, where they fail: http://www.youtube.com/watch?v=-IAVCdu_DDs#t=467); Combo Killer! (Get combo kills until you reach 200); Combo Master! (Get combo kills until you reach 1000)."
            ]
        },
        {
            "heading": "Temple of the Sun & Easter Eggs",
            "body": [
                "The Temple of the Sun campaign: its three bosses (Dune Sharks, Krilith, Sha'Rand) on medium and hard difficulty, completing the Temple campaign, Full House for beating both campaigns, and the remaining easter-egg finds (Do it like Jones, Serious Pickup, Desert Zone, Pyramid of Fear).",
                "The achievements here: The Dune Sharks (Kill the Dune Sharks on medium difficulty without having any crutches enabled); The Frost Sorcerer (Kill Krilith on medium difficulty without having any crutches enabled); The Sun Guardian (Kill Sha'Rand on medium difficulty without having any crutches enabled); The Hard Dune Sharks (Kill the Dune Sharks on hard difficulty without having any crutches enabled); The Hard Frost Sorcerer (Kill Krilith on hard difficulty without having any crutches enabled); The Hard Sun Guardian (Kill Sha'Rand on hard difficulty without having any crutches enabled); Temple of the Sun (Complete the Temple campaign); Full House (Beat both the Castle Hammerwatch and the Temple of the Sun campaigns); Do it like Jones (It was better in the movie); Serious Pickup (Seriously?! That's what I got?); Desert Zone... (...is far away from the Green Hill Zone); Pyramid of Fear (Enter and exit the Pyramid of Fear)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Turn off every assist option, then play the Castle Hammerwatch campaign on medium difficulty, killing all four bosses and the survival Crystal Lich.",
                "2. Replay Castle Hammerwatch on hard difficulty for the hard boss achievements.",
                "3. Do the same for the Temple of the Sun campaign - a medium run, then a hard run - and finish both for Full House.",
                "4. The money and kill milestones accumulate across all this play; grind any stragglers (250,000 kills is the longest) in a replay.",
                "5. Hunt the nine easter eggs across both campaigns with a guide - they are tucked-away secrets that will not appear during normal play.",
                "Tip: the Wizard or Warlock class with a movement-speed and area-damage build clears the campaigns on hard fastest - the boss achievements only need the kill, so prioritise survivability and burst over exploration once you are just after the boss achievements."
            ]
        }
    ]
};
