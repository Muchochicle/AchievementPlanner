// The Last of Us Part I Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-last-of-us-part-1.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1888930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "the-last-of-us-part-1-achievement-guide",
    "category": "game",
    "gameSlug": "the-last-of-us-part-1",
    "icon": "🦋",
    "title": "The Last of Us Part I Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in The Last of Us Part I - none are hidden. story & collectibles, crafting, upgrades & exploration, moments & secrets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Last of Us Part I has 29 Steam achievements and none are hidden. Two are story-completion markers (the main campaign and the Left Behind chapter); the rest are collectible sets, crafting and upgrade goals, and a handful of one-off scripted moments and secrets.",
                "Nothing is truly missable in one sense - chapter select lets you return for anything - but collectibles are far easier gathered on a first slow playthrough. There is no difficulty requirement, so play on the setting you enjoy and use a collectible guide.",
                "Tip: run the game once on Light or Normal with a Firefly pendant / comic / note / training-manual checklist open, then use chapter select to clean up any missed collectible or scripted moment (Lights Out, Waterlogged, In Memoriam) and the Left Behind mini-games."
            ]
        },
        {
            "heading": "Story & Collectibles",
            "body": [
                "The campaign markers and collectible sets: completing Part 1 and Left Behind, the full sets (Firefly pendants, comics, notes and artifacts, optional conversations, Ellie's jokes, training manuals), the single-item starters (one pendant, one manual, one comic), and It Can't Be For Nothing for the full list.",
                "The achievements here: It Can't Be For Nothing (Collect all the achievements); No Matter What (Complete Part 1); Don't Go (Complete Left Behind); Look for the Light (Find all Firefly pendants); Endure and Survive (Collect all comics); Chronicles (Find all notes and artifacts); Getting to Know You (Engage in all optional conversations); That's All I Got (Survive all of Ellie's jokes); Something to Fight For (Find all training manuals); Fallen Firefly (Find a Firefly pendant); Self-Help (Find one training manual); Savage Starlight Fan (Find a comic)."
            ]
        },
        {
            "heading": "Crafting, Upgrades & Exploration",
            "body": [
                "The survival-systems goals: fully upgrading a weapon, shivving open every locked door, finding all workbenches and workbench tools, opening all safes, upgrading then breaking one of every melee weapon, and crafting every item type.",
                "The achievements here: Combat Ready (Fully upgrade a weapon); Master of Unlocking (Break into every locked door using shivs); Prepared For the Worst (Find all workbenches); Sticky Fingers (Open all safes); Sharpest Tool in the Shed (Find all workbench tools); Build Em Up, Break Em Down (Upgrade and then break one of every melee weapon); Geared Up (Craft every item)."
            ]
        },
        {
            "heading": "Moments & Secrets",
            "body": [
                "The scripted one-offs and secrets: picking up Frank's discarded note, the stealth spotlight-generator kill in Pittsburgh, the sewer ride with Henry and Sam, leaving Ellie hanging, petting Buckley, and the Left Behind mini-games and contests (Jak X, the brick contest, Black Fang no-hit, the water-gun fight), plus luring an infected into a human.",
                "The achievements here: In Memoriam (Pick up Frank's note after it's discarded); Lights Out (While in stealth, turn off the spotlight generator in Pittsburgh); Waterlogged (Ride the sewer contraption with Henry and Sam); Left Hanging (Leave Ellie hanging after a job well done); Who's A Good Boy? (Pet Buckley the dog); Nobody's Perfect (Play the Jak X game in Left Behind); Brick Master (Win the brick throwing contest); Angel Knives (Defeat Black Fang without getting hit); Skillz (Win the water gun fight); Live Bait (Use bricks or bottles to lure an infected into attacking a human)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign start to finish at a comfortable difficulty with a collectible checklist - pendants, comics, notes/artifacts, training manuals, optional conversations and Ellie's jokes.",
                "2. Work the systems goals as you go: pick every lock with a shiv, open every safe, visit every workbench, fully upgrade a weapon, craft each item.",
                "3. Play Left Behind for Don't Go and its mini-games (Nobody's Perfect, Brick Master, Angel Knives, Skillz).",
                "4. Use chapter select to mop up any missed collectible or scripted moment, then It Can't Be For Nothing unlocks with the last one.",
                "Tip: Angel Knives (beat Black Fang in the Jak X arcade minigame's rival fight without getting hit) is pure practice - it is in Left Behind and can be retried instantly from the machine."
            ]
        }
    ]
};
