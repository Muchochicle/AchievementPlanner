// Blood and Bacon Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/blood-and-bacon.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   434570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "blood-and-bacon-achievement-guide",
    "category": "game",
    "gameSlug": "blood-and-bacon",
    "icon": "🐖",
    "title": "Blood and Bacon Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Blood and Bacon - none are hidden. Covers the farm combat feats and the Day 10 / 20 / 30 bosses, and the secrets, hats, four-player goals and the Space Update optional achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Blood and Bacon has 42 Steam achievements and none of them are hidden. They are deliberately silly single-session feats: make 10 creatures explode, kill while bleeding out, blow off both your arms with a grenade, drink a water pump dry, ride Princess the boar for a minute, kick a body part 50 times, and beat the game. A set covers the day-based bosses (first mini boss on Day 10, first big boss on Day 20, Day 30 on Hard with four players and no cheats). The rest are secrets and collectibles - five Golden Keys, the toxic blimp, the Red Sun targets, the tunnel heirlooms and Mr. Green's story - plus the four-player \"same hat\" gag and the three \"Optional Achievement\" Space Update goals.",
                "Nothing is missable - the game loops day by day and every feat can be set up on any run. It is a short, chaotic completion.",
                "Tip: most feats just need \"some\" of a thing (make 10 creatures explode, kick a body part 50 times) - keep a mental checklist and knock them out during normal runs rather than grinding."
            ]
        },
        {
            "heading": "Farm Feats & Bosses",
            "body": [
                "The core combat and gag feats - explosions, bleed-out kills, melee knockouts, the Bulkify cans, blowing off your arms, the FrankenBoar revives, the grinder pushes, the Day 10 mini boss, the Day 20 big boss, and beating the game.",
                "The achievements here: Kaboom Kaboom (Make 10 Creatures Explode); While You're Down (Kill 10 Creatures While You Are Bleeding Out); You Murderer (Shoot 100 Creatures Dead); You Wont Like Me When Im Angry (Consume 5 Cans of Bulkify); Skidmarked (Get Shit On by Princess); Mama Said Knock You Out (Knockout 10 Creatures With a Melee Attack); Bite the Hand that Feeds You (Shoot the Farmer's Face to Make Him Talk 10 Times); Gas Guzzler (Drink at a WaterPump Until it Runs Dry); I'm Ambidextrous (Blow Off Both Your Arms With A Grenade); Needy Greedy (Defeat The First Mini Boss on Day 10); Royalty Killer (Defeat The First Big Boss Day 20); Watch The Show (Shoot a Body Part In The Air More Than 7 Times In a Row); Charcoal Crumbler (Crumble 10 Creatures After Electrocution); The Chunk Kicker (Kick a Body Part 50 Times); Acid Washed (Get Puked on By Princess); Where Credits Due (Watch The Credits All The Way Until The End); Graphics Whore (Change Your Graphics Settings from Main Menu); Blinded By The Light (Shine Your Flashlight in The Farmers Face); The Longest Yard (Throw A Grenade As High As You Can Using Milk); You Are The Champion (Beat The Game)."
            ]
        },
        {
            "heading": "Secrets, Hats & Space Update",
            "body": [
                "The keyboard-layout and graphics-menu gags, riding and bouncing on Princess, the highest point on the farm, Day 30 four-player Hard with no cheats, FreeRoam exploration, five Golden Keys, the revive and stranger feats, the toxic blimp, the Red Sun targets, the four-player \"same hat\", the tunnel heirlooms, Mr. Green's story, the pit-fall survival, and the three Space Update \"Optional Achievement\" goals.",
                "The achievements here: You Have An Apt Pupil  (Read The Keyboard Layout in Main Menu); Ride The Wave (Ride Princess For A Minute); Chicken On The Farm (Do Something That Is Cowardly); That's The Way The Boar Bounces (Bounce On A Running Boar); Become A Mile High Club Member (Climb To The Highest Location On The Farm); FrankenBoar's Monsters (Bring 10 Boars Back To Life In Single Player); I Will Swallow You Whole (Push 20 Whole Boars Into The Grinder); Always Sing Off Key (Make The Farmer Sing A Western); Birds Of A Feather  (Make Everyone Wear The Same Hat In 4P); You Are Hardened (Defeat Day 30 On HardMode With 4 Players And No Cheats); Life After Death (Explore The Map In FreeRoam); The Mad Hatter (Collect 5 Golden Keys); Doctor Who (Get Revived By 10 Strangers And Survive The Day); It Was The Hindenburg (Shoot Down The Toxic Blimp); The Red Sun (Shoot 6 Red Sun Targets In One Session); Friended (Play With A Stranger For An Entire Round); Optional Achievement (Space Update : Honk Horn  5 Times); Optional Achievement (Space Update :  Run Over An Astronaut); Optional Achievement (Space Update : Save 3 Space Flowers); Heirlooms (Examine 5 heirlooms from the tunnels, in great detail); Mr Green (Listen to the story of Mr. Green, and the 3 Skulls); FreeFall  (Fall down a pit and live)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normal runs and knock out the combat feats (explosions, bleed-out kills, melee knockouts, body-part kicks) as you go.",
                "2. Push to the Day 10, Day 20 and Day 30 bosses.",
                "3. Do the menu and Princess gags (keyboard layout, graphics settings, ride Princess, get shat on).",
                "4. Explore FreeRoam for the Golden Keys, heirlooms, Mr. Green's story and the pit-fall survival.",
                "5. Get a four-player group for the \"same hat\" gag and the Day 30 Hard no-cheats clear, and do the three Space Update optional achievements.",
                "Tip: \"You Have An Apt Pupil\" and \"Graphics Whore\" are free - just open the keyboard layout and change a graphics setting from the main menu before you even start a run."
            ]
        }
    ]
};
