// Mafia III: Definitive Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mafia-iii-definitive-edition.json), whose 85 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   360430 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 32 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mafia-iii-definitive-edition-achievement-guide",
    "category": "game",
    "gameSlug": "mafia-iii-definitive-edition",
    "icon": "🎙️",
    "title": "Mafia III: Definitive Edition Achievement Guide",
    "summary": "A practical guide to all 85 Steam achievements in Mafia III: Definitive Edition (32 hidden). The 32 hidden achievements are the 15 main-story markers, the four missable underboss outcomes, and the story markers for the Faster, Baby!, Stones Unturned and Sign of the Times DLC packs. Sourced from PowerPyx and vgtimes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mafia III: Definitive Edition has 85 Steam achievements, 32 of them hidden. Mafia III follows Vietnam veteran Lincoln Clay building a criminal organization in 1968 New Bordeaux to take revenge on the Marcano crime family. The visible achievements are the underboss and racket systems (recruiting associates, flipping racket bosses, the earn milestones), combat and driving feats, wiretapping, and the side content for its three story DLCs.",
                "The 32 hidden achievements are the 15 main-story markers (from 'Before They Bury You' through avenging Sammy and Ellis), the four missable underboss outcomes (keeping all three or only one alive, and loyal status with one or all), and the story markers for the three DLC packs - Faster, Baby! (Sinclair Parish), Stones Unturned (Connor Aldridge and the lost nuke), and a set that varies in DLC attribution across sources.",
                "The catalog marks it difficulty 3, missable:true and single-playthrough. The four underboss achievements are decided by how you distribute districts and whether you do each underboss's side missions - We're in This Together and Just You and Me are mutually exclusive in one run."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The 15 Steam-hidden story markers, from hanging Ritchie Doucet through avenging Sammy and Ellis and deciding Lincoln's fate. They unlock automatically and are described here spoiler-light.",
                "The achievements here: Before They Bury You (Decide Lincoln's fate - the ending marker); Pray on the Way Up (Hang Ritchie Doucet from a Ferris wheel - a story marker); It's a Brave New World (Turn the Butcher over to Burke - a story marker); Fish Gotta Eat (Help Vito capture Michael Grecco - a story marker); Everyone Will Notice (Toss Derazio out his penthouse window - a story marker); My Name is Lincoln Clay (Kill Santangelo - a story marker); Little Late for That (Help Enzo escape - a story marker); The Poor Sumb**** (Kill Judge Holden - a story marker); Burn Like Napalm (Burn Tommy Marcano beyond recognition - a story marker); Certainly Was Exciting (Leave Olivia Marcano to her fate - a story marker); Yet Here We Are (Avenge Sammy and Ellis - a late-story marker); Somethin' I've Gotta Do (Collect your things from Sammy's - a story marker); For Old Time's Sake (Cassandra agrees to help you kill Marcano - a story marker); Cut & Run (Burke agrees to help you kill Marcano - a story marker); We Partners Now (Vito agrees to help you kill Marcano - a story marker)."
            ]
        },
        {
            "heading": "Underbosses & Rackets",
            "body": [
                "Recruiting all associates, completing each underboss's side missions (and the missable loyal-status and keep-alive outcomes), the earn and spend milestones, flipping and killing racket bosses, recruiting and killing informants, and weakening or storming a racket.",
                "The achievements here: Sure Thing, Boss (Unlocked all Associates); IRA Don't Ask (Completed all of Burke's side-missions); I Need a Favor (Completed all of Vito's side-missions); .45 in My Hand (Completed all of Cassandra's side-missions); Cash in Hand (Saved $150,000 between your wallet and the bank ); Baby, You're a Rich Man (Earned $500,000); Racketeer (Got the maximum earn from one of your Rackets); We're in This Together (Keep all three underbosses alive through 'Yet Here We Are' by distributing districts equally (missable)); Just You and Me (Keep only one underboss alive by assigning all districts to one boss and skipping the others' side missions (missable)); Trust (Reach loyal status with one underboss by completing their side missions (missable)); Family (Reach loyal status with all three underbosses (missable)); Hole in Your Pocket (Spent at least $500,000); Big Earner (Received $10,000 in earn from one Underboss); The New Boss (Flipped 16 Racket Bosses); Live Another Day (Recruited 15 Racket Informants); No Loose Ends (Killed all of the Racket Bosses); Can't Trust a Rat (Killed 15 Racket Informants); Softened 'Em Up (Completely weakened a Racket by killing all of its Enforcers); I'm Goin' In! (Attacked a Racket without killing any Enforcers); Standard Communication Grid (Wiretapped the Delray Hollow Smack Racket)."
            ]
        },
        {
            "heading": "Combat & Driving Feats",
            "body": [
                "The driving stunts (120 mph, a 50-metre jump, drifting, a high-speed 180), vehicle and stealth and brutal takedowns, headshot chains, the alligator feeding, stealing a police car, escaping a police zone, and the explosive-suicide trick.",
                "The achievements here: Custom 358 (Drove at 120 mph or faster for 20 seconds); Testing the Shocks (While driving, performed a 50-meter jump and landed on your wheels); New Bordeaux Drifter (While driving, drifted for at least 5 seconds); One Good Turn (Made a 180 degree turn at high speed without hitting anything); Wrecker (Executed 10 Vehicle Takedowns); Combat Specialist (Killed 300 enemies using Takedowns); Shh, shh (Performed 100 Stealth Takedowns on enemies); Closed Casket (Performed 50 Brutal Takedowns); Recruited to 5th SFG (Performed 5 headshots in 5 seconds); Bon Appétit! (Fed a body to an alligator); Next Time Swim Faster (Got eaten by an alligator); Sending A Message (Chained together 3 or more Brutal Takedowns); Code 112 (Stole a Police car); Insurance Risk (Escaped a Police Zone after being chased for 2 minutes); Never Saw it Coming (Killed an enemy within 2 seconds of kicking open a door); Flambé (Made 10 enemies kill themselves with their own Molotovs)."
            ]
        },
        {
            "heading": "Faster, Baby! & Stones Unturned DLC",
            "body": [
                "The Faster, Baby! expansion in Sinclair Parish (the grow house, Slim's billboards, proximity mines, vehicle traps, and its four Steam-hidden story markers) and Stones Unturned (Connor Aldridge and the lost nuke - the Dart Gun and Sniper Support feats, all Bounty Hunting, and its five Steam-hidden markers).",
                "The achievements here: Real Nice Time (Gut Lou Marcano - a Mafia III story-DLC marker); The Connection to Cuba (Follow the lead to Cuba - a Stones Unturned DLC marker); There's a War Goin' On (A war is going on - a Stones Unturned DLC marker); Jesuit in New Mexico (Help Alvarez escape - a Stones Unturned DLC marker); Another Brother Falls (Survive the drive into Sinclair Parish (Faster, Baby! DLC)); Kickin' Up Dust (Help MJ and Roxy free the witnesses (Faster, Baby! DLC)); Ain't Nowhere Safer (Capture Sheriff Slim Beaumont (Faster, Baby! DLC)); Concerned Citizens (Help Irma, Jeremiah and Christian (Faster, Baby! DLC)); Herbalist (Reached the Max Herbalism level); Mr. Green Thumb (Fully upgraded the Grow House); That Good Connect (Sold a single batch of weed for $10,000 or more); Campaign Strategy (Destroyed 10 of Slim's re-election billboards); Danger Close (Killed 30 enemies using Proximity Mines); Trap Game Strong (Successfully triggered 10 Vehicle Traps); Creature of Habit (Investigate the scene (Stones Unturned DLC)); Devotchka (Survive the trip to Boicherot's (Stones Unturned DLC)); Big Money (Get a hot tip on a loose nuke (Stones Unturned DLC)); Aid and Comfort (Help Donovan end Connor Aldridge (Stones Unturned DLC)); There Are No Dominos (Secure the nuke (Stones Unturned DLC)); Operation: Deep Sleep (Knocked out 30 people with the Dart Gun); Did I Forget Something? (Placed an unconscious person in the trunk of a car); Big Fat Party Animal (Killed 50 enemies using the Hartmann 7.62mm and wearing the Party Animal outfit); Skip Trace (Completed all Bounty Hunting assignments); Spotter (Killed 30 Enemies Using Sniper Support)."
            ]
        },
        {
            "heading": "Sign of the Times DLC",
            "body": [
                "The Sign of the Times expansion - Father James, a serial-killer cult and Bonnie Harless, plus Sammy's renovation, the Places of Darkness, and the Slow-Mo Shooting, Throwing Knife and Samson Harrier feats.",
                "The achievements here: A Little Closure (You investigated the cult's activities at Sammy's); Covered in Blood (You met Bonnie Harless); Haunted Places (Investigated the 3 \"Places of Darkness\"); …Worse Than Dying (You killed Bonnie Harless); Barkeep (Began Sammy's Renovation); Amateur Bouncer (Protected Sammy's from the Dixie Mafia); Pour Sammy! (Fully renovated Sammy's); Pop, Pop (Killed 4 enemies using Slow-Mo Shooting 10 Times); Blade of Death (Killed 20 enemies using Throwing Knives); Street Rocket (Drove a distance of 50 km in the Samson Harrier )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, banking the 15 markers, and decide early how you'll handle the underbosses - equal districts for We're in This Together, or one boss for Just You and Me.",
                "2. Do every underboss's side missions for Trust and Family (loyal status), which also unlocks all associates.",
                "3. Flip and then kill every racket boss, recruit and then kill informants, and hit the earn/spend milestones.",
                "4. Grind the driving and combat feats during normal free roam.",
                "5. Play the three DLCs - Faster, Baby!, Stones Unturned and Sign of the Times - each a short self-contained story with its own markers and feats.",
                "Tip: We're in This Together and Just You and Me cannot both be earned in one playthrough - pick one before the district-assignment missions, and if you want the other you will need a second save."
            ]
        }
    ]
};
