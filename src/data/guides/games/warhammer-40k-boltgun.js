// Warhammer 40,000: Boltgun Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/warhammer-40k-boltgun.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2005010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "warhammer-40k-boltgun-achievement-guide",
    "category": "game",
    "gameSlug": "warhammer-40k-boltgun",
    "icon": "🔨",
    "title": "Warhammer 40,000: Boltgun Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Warhammer 40,000: Boltgun - base campaign, forges of corruption (expansion), horde mode.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Warhammer 40,000: Boltgun has 21 Steam achievements and none are hidden. They are the three campaign chapters, the four difficulty clears, the two big boss kills, the secret-collectible sweeps per chapter, the Forges of Corruption expansion (its four difficulty clears, its secrets, the Helbrute), and Horde Mode.",
                "Nothing is missable - chapters and Horde Mode replay freely, and secrets can be revisited by chapter select. The real work is Exterminatus (the hardest difficulty) across both the base campaign and the expansion.",
                "Tip: play through once on a middle difficulty to learn the levels and grab every secret with a guide, then replay on Exterminatus - the difficulty clears stack, so an Exterminatus run also credits the lower ones."
            ]
        },
        {
            "heading": "Base Campaign",
            "body": [
                "The three chapter completions, the four difficulty clears (The Emperor Protects, My Armour is Contempt, Emperor's Mercy, Exterminatus), the Lord of Change and Great Unclean One boss kills, and finding all secrets in Chapters 1, 2 and 3.",
                "The achievements here: Chapter I - Complete (Complete all Chapter I Missions); Chapter II - Complete (Complete all Chapter II Missions); Chapter III - Complete (Complete all Chapter III Missions); The Emperor Protects (Complete all Missions on The Emperor Protects Difficulty); My Armour is Contempt (Complete all Missions on My Armour is Contempt Difficulty); Emperor’s Mercy (Complete all Missions on Emperor’s Mercy Difficulty); Exterminatus (Complete all Missions on Exterminatus Difficulty); Defeat a Lord of Change (Defeat a Lord of Change); Defeat a Great Unclean One (Defeat a Great Unclean One); Find all Secrets - Chapter 1 (Find all Secrets in Chapter 1); Find all Secrets - Chapter 2 (Find all Secrets in Chapter 2); Find all Secrets - Chapter 3 (Find all Secrets in Chapter 3)."
            ]
        },
        {
            "heading": "Forges of Corruption (Expansion)",
            "body": [
                "The expansion's four difficulty clears (The Emperor Still Protects, Contempt Maintained, Mercy Extended, There Is Only War), the Helbrute kill (Rage Incarnate), and finding all its secrets.",
                "The achievements here: The Emperor Still Protects (Complete Forges of Corruption on The Emperor Protects Difficulty); Contempt Maintained (Complete Forges of Corruption on My Armour Is Contempt Difficulty); Mercy Extended (Complete Forges of Corruption on Emperor's Mercy Difficulty); There Is Only War (Complete Forges of Corruption on Exterminatus Difficulty); Rage Incarnate (Defeat a Helbrute); Find All Secrets - Forges of Corruption (Find all secrets in Forges of Corruption)."
            ]
        },
        {
            "heading": "Horde Mode",
            "body": [
                "Completing Horde Mode on any difficulty, on Emperor's Mercy, and on Exterminatus.",
                "The achievements here: Let None Survive (Complete Horde Mode on any difficulty); Duty Fulfilled (Complete Horde Mode on Emperor's Mercy Difficulty); For the Emperor! (Complete Horde Mode on Exterminatus Difficulty)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign on My Armour is Contempt or Emperor's Mercy with a secrets guide - grab every Chapter 1/2/3 secret and the two bosses on the way.",
                "2. Play Forges of Corruption the same way, taking its secrets and the Helbrute.",
                "3. Replay both on Exterminatus - the difficulty clears stack downward, so this also credits any you skipped.",
                "4. Finish with Horde Mode on Exterminatus (For the Emperor!), which also credits the easier Horde clears.",
                "Tip: Exterminatus is a real step up - lean on the pistol's stagger, keep moving, and use the chainsword execution for health. The difficulty-clear achievements only need every mission finished, not a deathless run."
            ]
        }
    ]
};
