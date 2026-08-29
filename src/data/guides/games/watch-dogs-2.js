// Watch Dogs 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/watch-dogs-2.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   447040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "watch-dogs-2-achievement-guide",
    "category": "game",
    "gameSlug": "watch-dogs-2",
    "icon": "📡",
    "title": "Watch Dogs 2 Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Watch Dogs 2 - none are hidden. main operations, world activities & races, traversal & combat feats, shopping & cosmetics, silly & multiplayer.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Watch Dogs 2 has 55 Steam achievements and none are hidden. The backbone is the main-story Operations (one \"Finish Operation: X\" achievement each, plus the Who Am I opener and Hack the World finale); the rest are San Francisco world activities, traversal and combat feats, shopping and cosmetics, and a set of silly and multiplayer achievements.",
                "Nothing is missable - every Operation, collectible and activity stays available, and there is no difficulty requirement. The multiplayer achievements (co-op Operation, Bounty Hunter, invasions, Showd0wn streak) are the only ones that need online play.",
                "Tip: play the story Operations to completion, then use the map to mop up Key Data, races (drone, bike, sailboat) and the DedSec Events. Save the multiplayer set for one dedicated online session."
            ]
        },
        {
            "heading": "Main Operations",
            "body": [
                "The story spine: Who Am I (erasing your identity) and the \"Finish Operation: X\" markers through the campaign and its updates (Shadow, Hack teh World, Looking Glass, False Profits, Cyber Driver, Haum Sweet Haum, Limp Nudle, $911, W4tched, Eye for An Eye, Hacker War, Power to the Sheeple, Robot Wars, Shanghaied, Ubistolen, Bad Medicine, Automata, Caustic Progress, Off the Hook, Moscow Gambit), plus Hack the World for the hack of the century.",
                "The achievements here: Who Am I (Erase your past identity in the Blume servers); The Fox (Finish Operation: Shadow); Joined the Mile High Club (Finish Operation: Hack teh World); Picking Up the Pieces (Finish Operation: Looking Glass); Baby, I Got Your Money (Finish Operation: False Profits); Knight Ridden (Finish Operation: Cyber Driver); No Place Like Haum (Finish Operation: Haum Sweet Haum); Informer (Finish Operation: Limp Nudle); 100% Legit (Finish Operation: $911); Hypnotize (Finish Operation: W4tched); Old School Justice (Finish Operation: Eye for An Eye); Sabotage (Finish Operation: Hacker War); Make Every Voice Count (Finish Operation: Power to the Sheeple); The Itsy Bitsy Spider (Finish Operation: Robot Wars); You're On A Boat! (Finish Operation: Shanghaied); Leaks and Leaks (Finish Operation: Ubistolen); Hack the World (Trigger the hack of the century); Not the Pizza Guy (Finish Operation: Bad Medicine); The Score of Your Life (Finish Operation: Automata); Nanotriumph (Finish Operation: Caustic Progress); Prize Catch (Finish Operation: Off the Hook); That Escalated Quickly (Finish Operation: Moscow Gambit)."
            ]
        },
        {
            "heading": "World Activities & Races",
            "body": [
                "The open-world content: riding a cable car, hijacking a boat and a bus, collecting all the Key Data, a sailboat race, 5 DedSec Events, a drone race and a bike race.",
                "The achievements here: DedSec-A-Roni (Ride a cable car); Bad Boys (Hijack a boat); Something To Ride (Hijack a bus); Researcher (Collect all the Key Data hidden in the world); Earn your Sea Legs (Do a sailboat race); One of the Gang (Complete 5 DedSec Events); I Get Around (Do a drone race); Ain't No Stopping (Do a bike race)."
            ]
        },
        {
            "heading": "Traversal & Combat Feats",
            "body": [
                "The one-off feats: driving a Unique Vehicle, escaping a Level 5 felony, 4 km in the Merengue, 30 stealth takedowns, a 140 m vehicle jump, hacking a robot, 3 jumps in a row aboard a vehicle, and 200 m on top of a hacked car.",
                "The achievements here: A Ride to Remember (Drive one of the Unique Vehicles); Smooth Felon (Escape a Level 5 felony); Miniroadtrip! (Drive 4 km in the world while driving the Merengue from Elek Motors); Knock You Out (Do a stealth takedown on 30 enemies); Jump Around (Do a 140 meters long jump while driving a vehicle); Roboteer (Hack a robot); Third Time's the Charm (Make 3 jumps in a row aboard a vehicle); Let Me Ride (Travel 200 meters on top of a car by hacking it)."
            ]
        },
        {
            "heading": "Shopping & Cosmetics",
            "body": [
                "The purchases: pants after the party, a two-handed 3D-printed weapon, the Gatorfeet Whine Country footwear, a shirt from a Nudle vending machine, 25 cars from dealerships, all eKart upgrades, and all the apps in the App Shop.",
                "The achievements here: Put Your Damn Pants On (Buy some pants after the party); Menace (Buy a two handed weapon at the 3D printer); In Style (Buy the Gatorfeet Whine Country footwear); Only God Can Judge Me (Buy a shirt in the Nudle vending machine); One-Man Garage (Buy 25 cars in car dealerships); Pimp My eKart (Get all the eKart upgrades); App'ing Around (Buy all the apps in the App Shop)."
            ]
        },
        {
            "heading": "Silly & Multiplayer",
            "body": [
                "The gags and online modes: petting 10 dogs, getting photobombed, photographing someone vomiting, the \"Call the cops\" hack on the donut-disguised man, Bounty Hunter (1 Hunter, 5 fugitives), an online co-op Operation, invading another hacker, 25 ScoutX location pictures, and the maximum win-streak bonus in Showd0wn.",
                "The achievements here: Doggyland (Pet 10 dogs); Photobombed! (Get photobombed in a selfie); Hold My Hair (Take a picture of someone vomiting); Natural Born Killer (Neutralize 1 Hunter in Bounty Hunter mode); Please Marcus, Don't Hurt Them (Successfully neutralize 5 fugitives in Bounty Hunter); Hold My Hand (Successfully complete an online Co-op Operation); Feeding Frenzy (Use the \"Call the cops\" hack on the donut-disguised man in Haight-Ashbury); Troll'r (Successfully invade another hacker); Got The Shutterbug (Take 25 ScoutX location pictures); It's the Final Showd0wn (Reach the maximum win streak bonus in Showd0wn)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story Operations in order - most of the list is one achievement per Operation.",
                "2. Sweep the map: all Key Data, the three race types, 5 DedSec Events, and the traversal feats (jumps, felony escape, hacked-car ride).",
                "3. Do the shopping achievements once you have the cash (cars, eKart, apps, clothing).",
                "4. Spend one online session on the multiplayer set (co-op, Bounty Hunter, invasion, Showd0wn).",
                "Tip: the Showd0wn streak achievement (It's the Final Showd0wn) is the flakiest - queue when the mode's population is highest, right after a title update or on a weekend, so matches fill quickly."
            ]
        }
    ]
};
