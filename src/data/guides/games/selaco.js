// Selaco Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/selaco.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1592280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "selaco-achievement-guide",
    "category": "game",
    "gameSlug": "selaco",
    "icon": "☄",
    "title": "Selaco Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Selaco (3 hidden). Covers story progression, combat feats, minigames, and a long list of joke and secret interactions. Three of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Selaco has 30 Steam achievements and 3 are hidden. They cover story milestones (suiting up, unlocking your first Safe Room, reaching the streets, visiting Dawn's home, fighting through the Liancria Office Complex), combat feats (1,000 kills, a 70-meter headshot, defeating a Juggernaut with your fists, a fists-only kill while triple-buffed), stat grinds (15,000 steps, all upgrades on one weapon, 1200 DPS at the shooting range), Special Campaign content, and a long list of joke and secret interactions - starting an argument at a bar, spending an hour in a sauna, exploding a toilet without explosives, saving a fish, and more. The three hidden achievements are obtaining the Railgun, preventing a mutation, and completing Chapter 1.",
                "The catalog marks it difficulty 3. Selaco is a fast, story-heavy retro FPS; the hidden Railgun achievement wants you to find all 6 Security Cards and reach the Starlight building, a genuine collectible hunt.",
                "Tip: don't rush past the game's optional side rooms and minigames (The Broken Seal bar, the Mall, Burger Flipper, SPACE BRO, the Gwyn Machine) - most of the joke achievements live there."
            ]
        },
        {
            "heading": "Story & Combat Milestones",
            "body": [
                "Dying fast on Selaco Must Fall, 15,000 steps in a save, suiting up, unlocking your first Safe Room, a pub brawl, the hidden Railgun, a daily bonus drink, escorting Wilson home, an hour in the sauna, saving a fish, an explosive-free toilet burst, a fists-only Juggernaut kill, and 1,000 total kills.",
                "The achievements here: NotEvenRemotelyFair.WAD (Die within 5 seconds of starting a game on Selaco Must Fall difficulty); Marathon Runner (Take 15,000 steps in a single Campaign save); Reporting for duty! (Suit up); Safe Heaven (Unlock your first Safe Room ); Pub Brawl (Start an argument at The Broken Seal  ); Power Overwhelming (Find all 6 Security Cards throughout the game, then enter the Starlight building to obtain the Railgun.); Daily Bonus (Claim a free daily drink at the Mall  ); Little Plushy Man (Safely return Wilson the Bear to Dawn's home); AFK (Spend 1 hour inside a 'Xen Wellness Center' sauna without interruption); Crime Averted (Save a fish from suffocation); Myth, busted! (Cause a toilet to explode without using explosives); Humiliation! (Defeat a Juggernaut with your fists); Death Incarnate (Kill 1,000 Enemies)."
            ]
        },
        {
            "heading": "Story Progress & Stats",
            "body": [
                "Buddying up with Jonathan, maxing a single weapon's upgrades, a 70-meter headshot, spending big at the Gwyn Machine, 100 Minimum-Wagers in Burger Flipper, reaching the streets, visiting Dawn's home, the hidden 'prevent a mutation' achievement, fighting through the Liancria Office Complex, and the hidden Chapter 1 completion.",
                "The achievements here: Buddy System (Buddy-up with Jonathan   ); Sharp and Shiny (Obtain all upgrades for a single weapon); Sharp Shooter (Land a Headshot Kill from at least 70 meters away); Gwyn Simp (Spend at least 5000 Selver in a single Gwyn Machine session); Unionize! (Get 100 Minimum-Wagers in Burger Flipper); Humanity's Second Chance (Reach the streets); Homecoming (Visit Dawn's home); Death Toll (Prevent a mutation from happening, by any means necessary.); Paper Forever (Fight through the Liancria Office Complex); Game Over! (Complete Chapter 1.)."
            ]
        },
        {
            "heading": "Minigames & Special Campaign",
            "body": [
                "1200 DPS at the shooting range, a triple-buffed fists kill, reaching level 10 in SPACE BRO, triggering a Trash Tornado, finding a full pizza box, completing Chapter 1 in Special Campaign, and unlocking an Encounter Chest in Special Campaign.",
                "The achievements here: DPS LFG (Obtain 1200 DPS at the Shooting Range in Punching Bag mode); Overkill (Kill an enemy with your Fists while having a Bunny Hopper, Protein Shake and Confidence Booster active); Save the World, bro! (Reach Level 10 in SPACE BRO); It's not a bug, it's a feature! (Trigger a Trash Tornado); Mozzarella Miracle! (Get very lucky by finding a full box of pizza); Embrace The Chaos (Complete Chapter 1 in Special Campaign); Strongbox (Unlock an Encounter Chest in Special Campaign)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, suiting up and unlocking your first Safe Room as you go.",
                "2. Explore side areas for the joke achievements - The Broken Seal bar, the Mall's daily drink, the sauna, and saving the fish.",
                "3. Track down all 6 Security Cards and reach the Starlight building for the hidden Railgun.",
                "4. Push your combat stats - 1,000 kills, a 70-meter headshot, all upgrades on one weapon, and a fists-only Juggernaut kill.",
                "5. Try the minigames (SPACE BRO, Burger Flipper, the Gwyn Machine, the shooting range) and the Special Campaign mode.",
                "Tip: the hidden 'Death Toll' achievement wants you to actively prevent a mutation during a specific story moment - pay attention to warnings rather than just fighting through."
            ]
        }
    ]
};
