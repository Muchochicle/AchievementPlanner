// Resident Evil 5 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/resident-evil-5.json), whose 70 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   21690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "resident-evil-5-achievement-guide",
    "category": "game",
    "gameSlug": "resident-evil-5",
    "icon": "🧟",
    "title": "Resident Evil 5 Achievement Guide",
    "summary": "A practical guide to all 70 Steam achievements in Resident Evil 5 - none are hidden. Covers the sixteen story chapters and the four difficulty clears, the collectibles and completion goals, the co-op and combat feats, The Mercenaries versus modes, and the Lost in Nightmares and Desperate Escape DLC episodes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Resident Evil 5 has 70 Steam achievements and none of them are hidden. The base list is the sixteen story chapters (each on any difficulty), the four difficulty clears (Amateur, Normal, Veteran, Professional), the collectibles (BSAA emblems, treasures, figurines, eggs, all weapons and full upgrades), a large set of combat feats (weapon-specific kills, headshots, environmental kills, partner assists), and thirty-win milestones plus combo and score goals in the online Mercenaries versus modes. The rest come from the two DLC episodes, Lost in Nightmares and Desperate Escape, each with completion, S-rank, Professional and challenge achievements.",
                "The catalog marks it as roughly two playthroughs - a Professional clear plus mopping up the harder DLC ranks and the versus grind - but nothing is missable: every chapter, difficulty and collectible can be replayed from chapter select with cumulative unlocks carried over.",
                "Tip: play through co-op on Normal collecting emblems, treasures and figurines, then do a Professional run with fully upgraded weapons - Professional is far easier once your handgun one-shots and you know the maps."
            ]
        },
        {
            "heading": "Story Chapters & Difficulty Clears",
            "body": [
                "Completing each of the sixteen story chapters on any difficulty, and clearing all chapters on Amateur, Normal, Veteran and Professional.",
                "The achievements here: Completed Chapter 1 - 1 (Complete Chapter 1 - 1 on any difficulty setting.); Completed Chapter 1 - 2 (Complete Chapter 1 - 2 on any difficulty setting.); Completed Chapter 2 - 1 (Complete Chapter 2 - 1 on any difficulty setting.); Completed Chapter 2 - 2 (Complete Chapter 2 - 2 on any difficulty setting.); Completed Chapter 2 - 3 (Complete Chapter 2 - 3 on any difficulty setting.); Completed Chapter 3 - 1 (Complete Chapter 3 - 1 on any difficulty setting.); Completed Chapter 3 - 2 (Complete Chapter 3 - 2 on any difficulty setting.); Completed Chapter 3 - 3 (Complete Chapter 3 - 3 on any difficulty setting.); Completed Chapter 4 - 1 (Complete Chapter 4 - 1 on any difficulty setting.); Completed Chapter 4 - 2 (Complete Chapter 4 - 2 on any difficulty setting.); Completed Chapter 5 - 1 (Complete Chapter 5 - 1 on any difficulty setting.); Completed Chapter 5 - 2 (Complete Chapter 5 - 2 on any difficulty setting.); Completed Chapter 5 - 3 (Complete Chapter 5 - 3 on any difficulty setting.); Completed Chapter 6 - 1 (Complete Chapter 6 - 1 on any difficulty setting.); Completed Chapter 6 - 2 (Complete Chapter 6 - 2 on any difficulty setting.); Completed Chapter 6 - 3 (Complete Chapter 6 - 3 on any difficulty setting.); Recruit (Complete all chapters on Amateur.); Soldier (Complete all chapters on Normal.); Veteran (Complete all chapters on Veteran.); War Hero (Complete all chapters on Professional.)."
            ]
        },
        {
            "heading": "Collectibles & Completion",
            "body": [
                "The completion goals - all four egg types, every alternative costume, all weapons, fully upgrading every weapon, all treasures, all BSAA emblems and all figurines.",
                "The achievements here: Egg Hunt (Find all 4 types of eggs.); All Dressed Up (Purchase all available alternative costumes in Bonus Features.); Stockpile (Obtain all available weapons.); Take It to the Max (Completely upgrade all weapons.); They Belong in a Museum (Obtain all treasures in the game.); Badge of Honor (Find all the BSAA emblems.); They're ACTION Figures! (Collect all the figurines.)."
            ]
        },
        {
            "heading": "Co-op & Combat Feats",
            "body": [
                "The partner assists, headshots and weapon-specific kill counts (Knife, Stun rod, Gatling gun, Longbow, physical attacks), the maximum combo, and the many environmental and situational kills - Molotovs, transformers, oil canisters, gas tanks, the armored truck, the rotten egg, and the Wesker fight feats.",
                "The achievements here: A Friend in Need (Save partner 10 times when HELP is displayed.); Lifeguard (Save partner 10 times when DYING is displayed.); Exploding Heads (Pull off 20 headshots.); A Cut Above (Defeat 5 enemies with the Knife.); Cattle Prod (Defeat 30 enemies with the Stun rod.); Crowd Control (Defeat 30 enemies with the Gatling gun.); Bull's-eye (Defeat 30 enemies with the Longbow.); Get Physical (Defeat 20 enemies with physical attacks.); The Works (Chain the maximum number of combos together in one go.); Lead Aspirin (Defeat a Majini with a headshot while it's jumping.); Fireworks (Shoot an enemy Molotov cocktail, dynamite stick, or hand grenade.); Be the Knife (Deflect a bow gun arrow with your knife.); Meat Shower (Defeat 3 Majini with one grenade or proximity bomb.); Go into the Light (Defeat 2 enemies with one flash grenade.); Ride the Lightning (Defeat a Majini using the electric current from a transformer.); Stop, Drop, & Roll (Defeat 3 Majini at once by setting oil canisters on fire.); Baptism by Fire (Defeat 3 Majini at once with a drum or gas tank explosion.); Masters of Removing (Work together to save someone special.); Bad Blood (During the first fight with Wesker, damage him a set number of times.); Drive By (Stop an armored truck by taking out the driver.); Egg on Your Face (Defeat a Majini with a rotten egg.); Heart Stopper (Defeat a certain enemy by stabbing it in the heart.); Who Do You Trust? (Build up a certain level of trust with your partner.)."
            ]
        },
        {
            "heading": "The Mercenaries & Versus",
            "body": [
                "The online versus modes - 30 wins each in Slayers, Survivors, Team Slayers and Team Survivors, the 20- and 40-defeated combos, the Survivors score goals, unlocking all Versus characters and 100 physical-attack kills.",
                "The achievements here: Army of One (Win 30 matches in Slayers.); Eye of the Tiger (Win 30 matches in Survivors.); The Team That Slays Together... (Win 30 matches in Team Slayers.); We Will Survive (Win 30 matches in Team Survivors.); Keep the Good Times Rolling (Chain a 20-defeated combo in Slayers.); It Takes Two to Tango (Chain a 40-defeated combo in Team Slayers.); It's All About the Points (Score at least 40,000 points in Survivors.); There's no \"I\" in Team (Score at least 80,000 points in Team Survivors.); Let's Get This Party Started! (Unlock all selectable characters in Versus.); Bringing the Pain (Defeat 100 players using physical attacks in Versus.)."
            ]
        },
        {
            "heading": "DLC: Lost in Nightmares & Desperate Escape",
            "body": [
                "The two DLC episodes - completing each on any difficulty, with an S rank and on Professional, plus the Wesker damage, Score-star, 150-kill and Agitator-Majini challenge feats.",
                "The achievements here: Must've Got Lost (Complete \"Lost in Nightmares\" on any difficulty setting.); It's Just a Bad Dream! (Complete \"Lost in Nightmares\" with an S rank.); Night Terrors (Complete \"Lost in Nightmares\" on Professional.); Kung Fu Fighting (Inflict a set amount of damage to Wesker in \"Lost in Nightmares.\"); Wish Upon a Star (Destroy all 18 of the Score stars found throughout \"Lost in Nightmares.\"); Getaway (Complete \"Desperate Escape\" on any difficulty setting.); The Great Escape (Complete \"Desperate Escape\" with an S rank.); Run the Gauntlet (Complete \"Desperate Escape\" on Professional.); Way of the Warrior (Defeat 150 enemies singlehandedly in one playthrough of \"Desperate Escape.\"); Shoot the Messenger (Defeat 3 Agitator Majini in one playthrough of \"Desperate Escape.\")."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story in co-op on Normal, collecting BSAA emblems, treasures, figurines and eggs as you go.",
                "2. Do the environmental and weapon-specific combat feats during those runs or in a quick chapter-select mop-up.",
                "3. Fully upgrade your weapons, then clear all chapters on Professional.",
                "4. Play the two DLC episodes on Normal, then return for their S-rank and Professional clears and challenge feats.",
                "5. Grind The Mercenaries versus modes for the 30-win, combo and score achievements.",
                "Tip: bring a co-op partner for Professional and the DLC S-ranks - split aggro and revives make the hardest achievements dramatically more reliable, and progress credits both players."
            ]
        }
    ]
};
