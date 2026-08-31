// The Last of Us Part I Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-last-of-us-part-i.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1888930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-last-of-us-part-i-achievement-guide",
    "category": "game",
    "gameSlug": "the-last-of-us-part-i",
    "icon": "🍄",
    "title": "The Last of Us Part I Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in The Last of Us Part I - none are hidden. Covers the story and collectibles, the completion and crafting achievements, and the one-off moments and easter eggs. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Last of Us Part I has 29 Steam achievements and none are hidden. Ten are story and collectibles - completing the main campaign and the Left Behind chapter, and finding every Firefly pendant, comic, note/artifact, optional conversation, Ellie joke and training manual. Nine are completion and crafting - shivving every locked door, all workbenches, safes and workbench tools, upgrading and breaking one of every melee weapon, and crafting every item. The last ten are one-off scripted moments and easter eggs (pet the dog, ride the sewer contraption, win the water-gun fight, beat Black Fang without being hit).",
                "The catalog marks it difficulty 3. Nothing here needs a hard difficulty; the risk is missing the one-shot moment achievements, several of which pass in a single scene.",
                "Tip: play once with a collectibles guide open, and keep a checklist of the scripted moments so you do each one when its scene comes up."
            ]
        },
        {
            "heading": "Story & Collectibles",
            "body": [
                "Collecting all achievements, completing Part 1 and the Left Behind chapter, finding all Firefly pendants, comics, notes and artifacts, engaging in every optional conversation, surviving all of Ellie's jokes, finding all training manuals, and fully upgrading a weapon.",
                "The achievements here: It Can't Be For Nothing (Collect all the achievements); No Matter What (Complete Part 1); Don't Go (Complete Left Behind); Look for the Light (Find all Firefly pendants); Endure and Survive (Collect all comics); Chronicles (Find all notes and artifacts); Getting to Know You (Engage in all optional conversations); That's All I Got (Survive all of Ellie's jokes); Something to Fight For (Find all training manuals); Combat Ready (Fully upgrade a weapon)."
            ]
        },
        {
            "heading": "Completion & Crafting",
            "body": [
                "Shivving into every locked door, finding all workbenches, opening all safes, finding all workbench tools, upgrading and then breaking one of every melee weapon, and the incremental finds - a first Firefly pendant, a first training manual, a first comic - plus crafting every item.",
                "The achievements here: Master of Unlocking (Break into every locked door using shivs); Prepared For the Worst (Find all workbenches); Sticky Fingers (Open all safes); Sharpest Tool in the Shed (Find all workbench tools); Build Em Up, Break Em Down (Upgrade and then break one of every melee weapon); Fallen Firefly (Find a Firefly pendant); Self-Help (Find one training manual); Savage Starlight Fan (Find a comic); Geared Up (Craft every item)."
            ]
        },
        {
            "heading": "Moments & Easter Eggs",
            "body": [
                "Picking up Frank's discarded note, turning off the Pittsburgh spotlight generator from stealth, riding the sewer contraption with Henry and Sam, leaving Ellie hanging, petting Buckley, playing Jak X in Left Behind, winning the brick-throwing contest, beating Black Fang without getting hit, winning the water-gun fight, and luring an infected into attacking a human.",
                "The achievements here: In Memoriam (Pick up Frank's note after it's discarded); Lights Out (While in stealth, turn off the spotlight generator in Pittsburgh); Waterlogged (Ride the sewer contraption with Henry and Sam); Left Hanging (Leave Ellie hanging after a job well done); Who's A Good Boy? (Pet Buckley the dog); Nobody's Perfect (Play the Jak X game in Left Behind); Brick Master (Win the brick throwing contest); Angel Knives (Defeat Black Fang without getting hit); Skillz (Win the water gun fight); Live Bait (Use bricks or bottles to lure an infected into attacking a human)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on any difficulty with a collectibles guide for pendants, comics, artifacts and manuals.",
                "2. Along the way, shiv every locked door, open every safe, and hit every workbench and workbench tool.",
                "3. Do the scripted moments in their scenes: the Pittsburgh spotlight, the sewer ride, Frank's note, leaving Ellie hanging, petting Buckley.",
                "4. Craft every item and upgrade-then-break one of each melee weapon.",
                "5. Play the Left Behind chapter for 'Don't Go', the water-gun fight, the Jak X arcade game and the brick contest.",
                "Tip: 'Left Hanging', 'In Memoriam' and 'Lights Out' each happen in a single specific scene with no second chance - check the list before those chapters so you do not have to replay."
            ]
        }
    ]
};
