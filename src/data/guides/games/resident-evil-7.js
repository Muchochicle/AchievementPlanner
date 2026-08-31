// Resident Evil 7 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/resident-evil-7.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   418370 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "resident-evil-7-achievement-guide",
    "category": "game",
    "gameSlug": "resident-evil-7",
    "icon": "🏚",
    "title": "Resident Evil 7 Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Resident Evil 7 - none are hidden. Covers the main story beats, endings and difficulty clears, the mechanics and combat feats, the collectibles and challenge runs, and the Banned Footage Vol. 1 & 2, End of Zoe and Not a Hero DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Resident Evil 7 has 58 Steam achievements and none of them are hidden. The base game covers the story chapters and the two endings, the Easy / Normal / Madhouse difficulty clears, a set of mechanics and combat feats (knife finishers, guarding, lock picks, two-in-one-shot kills, remote bomb kills), and the collectibles and challenge runs (all Antique Coins, all files, all Mr. Everywhere statuettes, a sub-4-hour run, low-item-box and low-heal runs). The rest are DLC: Banned Footage Vol. 1 and 2 (Bedroom, Nightmare, Ethan Must Die, 21, Daughters, Jack's 55th Birthday) and the End of Zoe and Not a Hero episodes.",
                "The catalog marks it as roughly two playthroughs - a Madhouse clear plus the timed and restricted runs - but nothing is missable: chapters replay freely and the challenge-run achievements can each be a dedicated attempt.",
                "Tip: do the low-heal, low-item-box and sub-4-hour achievements together on one focused Normal run once you know the route - all three are compatible in a single playthrough."
            ]
        },
        {
            "heading": "Main Story, Endings & Difficulty",
            "body": [
                "Reaching each story location, escaping the Baker home and the ship, both endings, and the Easy, Normal and Madhouse difficulty clears.",
                "The achievements here: She's Alive (Travel to Louisiana.); Welcome to the Family, Son (Escape from the guest house.); You Ain't Gettin' Away (Escape to the yard.); The Grave Will Out the Truth (Uncover the secret in the old house.); You Better Start Running (Escape from the Baker family home.); Into the Depths (Escape from the ship.); End of the Night (Get ending 1.); Just A Memory Now (Get ending 2.); Playing it Safe (Complete the game on Easy.); The Nightmare's Finally Over (Complete the game on Normal.); Who's Your Daddy Now? (Complete the game on Madhouse.)."
            ]
        },
        {
            "heading": "Mechanics & Combat Feats",
            "body": [
                "The one-off mechanic and combat achievements - closing a door, guarding, examining items, lock picks, shadow plinths, psychostimulants, item-slot upgrades, knife finishers, and the Marguerite and Jack encounter feats.",
                "The achievements here: Behind Closed Doors (Close an open door by yourself.); Arms in the Air (Block an enemy attack by guarding.); A-ha! (Obtain something by closely examining an item.); Master of Unlocking (Use a lock pick to open something.); Nice Try (Put an unrelated object on a shadow plinth.); Open Your Eyes (Use psychostimulants.); In the Bag (Increase your item slots.); Things Got Personal (Finish off an enemy with the knife.); Slash Slash, Slashity Slash! (Clear insects off a door using a knife.); Back Off, Mrs. B! (Fight off Marguerite while she wanders the old house to make her run away.); Duck If You Love Life (Avoid Jack's scissor attack by crouching.); Less is More (Take down two or more enemies with one shot.); Fly Swatter (Shoot and knock back Marguerite while she's leaping at you.); That's a Spicy Meat-a-ball (Kill an enemy by attaching a Remote Bomb to them and detonating it.)."
            ]
        },
        {
            "heading": "Collectibles & Challenge Runs",
            "body": [
                "All Chem Fluid items, both videotape challenges, watching every tape, all Antique Coins on Normal and Madhouse, all files, the Mr. Everywhere statuettes, and the sub-4-hour, low-item-box and low-heal completion runs.",
                "The achievements here: 1st Place at the Science Fair (Create all items that contain Chem Fluid and Strong Chem Fluid.); Can't Catch Me (Complete the \"Mia\" videotape without being spotted by Marguerite.); Out Before Dessert (Complete the \"Happy Birthday\" videotape within 5 minutes.); Be Kind, Please Rewind (Watch all the videotapes in a single playthrough.); Pelicans in Your Pocket (Obtain all of the Antique Coins in Easy or Normal difficulty.); Mad Pelicans (Obtain all of the Antique Coins in Madhouse difficulty.); The Devil Is in the Details (Read all of the files in a single playthrough.); He's Here, There, Everywhere! (Destroy a Mr. Everywhere statuette.); Mr. Nowhere (Destroy all Mr. Everywhere statuettes.); Just Get Me Outta Here (Complete the game within 4 hours.); Resource Manager (Complete the game without opening the Item Box more than 3 times.); Walk it Off (Complete the game using only 3 First Aid Meds or less.)."
            ]
        },
        {
            "heading": "Banned Footage DLC (Vol. 1 & 2)",
            "body": [
                "The Banned Footage episodes - Nightmare, Night Terror, Bedroom, Ethan Must Die, 21 (and Survival / Survival+), Daughters (both endings) and Jack's 55th Birthday (time bonus, all foods, all-stage S rank).",
                "The achievements here: Dead by Dawn? (Complete Nightmare.); Sleepless in Dulvey (Complete Night Terror.); Like Mama Used to Make (Complete Bedroom.); Ratcatcher (Find all the dead rats in Bedroom in a single play.); Ethan Never Dies (Complete Ethan Must Die.); Eye in the Sky (Complete 21.); Card Shark (Complete Survival mode in 21.); You Gotta Know When To Hold 'Em (Complete Survival+ mode in 21.); Butterfly Effect (Get the bad ending in Daughters.); One Instinct: Survival (Get the true ending in Daughters.); Don't Keep the Man Waiting (Clear a stage with a 10 minute time bonus or higher in Jack's 55th Birthday.); Miracle Chef (Feed Jack every type of food and drink in Jack's 55th Birthday.); Best Birthday Ever (Get an S Rank or higher on all stages in Jack's 55th Birthday.)."
            ]
        },
        {
            "heading": "End of Zoe & Not a Hero DLC",
            "body": [
                "The End of Zoe episode (Easy/Normal, Joe Must Die, no-weapons, Extreme Challenge, bare-fist combo, stealth kills) and Not a Hero (Easy/Normal and Professional clears).",
                "The achievements here: Promise Kept (Complete End of Zoe on Easy or Normal.); King of the Swamp (Complete End of Zoe on Joe Must Die.); The Only Guns You Need (Complete End of Zoe on Normal or Joe Must Die using no weapons.); Fastest Man in the Swamp (Complete an Extreme Challenge in End of Zoe.); Queensberry Rules (Perform a 4-hit combo with your bare fists in End of Zoe.); Swamp Warfare (Stealth kill 5 enemies in End of Zoe.); Mission Accomplished (Complete Not a Hero on Easy or Normal difficulty.); You're the Hero Now (Complete Not a Hero on Professional difficulty.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story on Normal, getting both endings via a reload of the final choice.",
                "2. Do the mechanic and combat feats during that run or a quick chapter-select pass.",
                "3. Do a focused Normal run combining the sub-4-hour, low-heal and low-item-box achievements, collecting all coins, files and Mr. Everywhere statuettes.",
                "4. Clear Madhouse difficulty (this also covers the Madhouse coin achievement).",
                "5. Play the DLC: Banned Footage Vol. 1 & 2, then End of Zoe and Not a Hero.",
                "Tip: Ethan Must Die and the End of Zoe Extreme Challenge are the hardest achievements - they are pure skill/luck gauntlets, so leave them for last and expect many attempts."
            ]
        }
    ]
};
