// Get In The Car, Loser! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/get-in-the-car-loser.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   938860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "get-in-the-car-loser-achievement-guide",
    "category": "game",
    "gameSlug": "get-in-the-car-loser",
    "icon": "🚗",
    "title": "Get In The Car, Loser! Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Get In The Car, Loser! - none are hidden. Covers the main story's four Acts plus both DLC campaigns, boss challenge runs, and combat-mechanic grinds. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Get In The Car, Loser! has 28 Steam achievements and none are hidden. Six are story completions - the tutorial, the main game's four Acts, and the Battle on the Big Boardwalk DLC campaign. Several more are collection achievements (every app, every road story in the main game and each DLC, every Community Request) and Devil Clock boss-challenge runs against Gaius, Mirror Sam, the Machine Devil and Orphan. The rest are combat-mechanic grinds - sacrificing items, tanking damage, chaining Sword of Fate uses, Exploit damage tiers, revives, a 30-hit combo, smite kills, Rust stagger, juggling, and Level 5 Fate attacks.",
                "The catalog marks it difficulty 3. The story and DLC campaigns clear at their own pace; the Devil Clock boss runs and the highest-tier combat grinds (1,000,000 Exploit damage, a 30-hit chain) are the real challenge.",
                "Tip: don't rush the Devil Clock achievements - they're optional harder versions of the boss fights, so tackle them once you've got a solid build."
            ]
        },
        {
            "heading": "Story, Apps & Completion",
            "body": [
                "The tutorial, all four main-game Acts, the Battle on the Big Boardwalk DLC campaign, unlocking all three apps, and collecting every road story, every guest road story and every Community Request.",
                "The achievements here: On The Road (Finish tutorial); Worthy Of Her Grace (Finish Act I); Done With That Guy (Finish Act II); What Never Was (Finish Act III); MACHINE DEVIL RETIRE B**** (Finish Act IV); Extra Arms (Finish Battle on the Big Boardwalk); Sideloading Super User (Unlock all three apps); Lore Fiend (Unlock every road story in the main game); Multiversal Librarian (Unlock every guest item road story in Battle on the Big Boardwalk); Local Hero (Complete every Community Request)."
            ]
        },
        {
            "heading": "Combat Grinds & Devil Clock",
            "body": [
                "Devil Clock boss-challenge runs against Gaius, Mirror Sam, the Machine Devil and Orphan, sacrificing 1000 items, tanking 10,000 damage, 300 Sword of Fate uses, Exploit damage tiers up to 1,000,000, acquiring a platonic ideal, 100 revives, a 30-hit combo, 20 smite kills, a huge Rust stagger increase, a 20-second juggle, 10 Level 5 Fate attacks, every Jo road story, and The Fate of Another World DLC campaign.",
                "The achievements here: Devil Clock Accelerationist (Beat Gaius with Devil Clock activated); The Unfairest Of Them All (Beat Mirror Sam with Devil Clock activated); Thousand Year Cycle (Beat the Machine Devil with Devil Clock activated); Champion Of Bad Civilization (Sacrifice 1000 Items While Upgrading); 3 2 1 Let's Jam! (Tank 10 000 damage for the team); Fate (8HR EXTENDED) (Use Sword of Fate 300 times); Exploit Damage Princess (Exploit 100 000 damage on staggered enemies); Exploit Damage Queen (Exploit 1 000 000 damage on staggered enemies); She's A 10 (Acquire a platonic ideal); Pearly Revolving Door (Revive 100 times); AH AH AH! DROPPED THAT S***! (Get a 30 chain); Cast In The Name Of God (Kill 20 enemies with smite); Borrow Checking Compiler (Increase stagger by 10 000 % with rust); From Downtown (Get 20 seconds airtime off a single juggle); Keep Honking -- I'm Building Meter (Use 10 fully charged Level 5 Fate attacks); Emily + Jo Forever (Unlock every Jo road story in DLC2); Elegy for an Edgelord (Finish The Fate of Another World); Thus Always To Gatekeepers (Beat Orphan with the Devil Clock activated)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the tutorial and the four main-game Acts, then Battle on the Big Boardwalk and The Fate of Another World DLCs.",
                "2. Unlock every app and collect every road story (main game, guest items, and Jo's) along the way.",
                "3. Work the combat-mechanic grinds during normal play - sacrifices, tanked damage, Sword of Fate uses, combos, smite kills, Rust and juggling.",
                "4. Once you've got a build you like, take on the Devil Clock challenge runs against each boss.",
                "Tip: the Exploit damage and Sword of Fate counters accumulate across the whole playthrough, so they'll clear naturally the more you fight."
            ]
        }
    ]
};
