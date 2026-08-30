// Sunset Overdrive Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sunset-overdrive.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   847370 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sunset-overdrive-achievement-guide",
    "category": "game",
    "gameSlug": "sunset-overdrive",
    "icon": "🥤",
    "title": "Sunset Overdrive Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Sunset Overdrive - none are hidden. Covers the OD kill and traversal-style milestones, gun and Amp upgrades, the Faction quests and challenge ratings, the huge collectible hunts across Sunset City, the story missions and Fort Night Defense, and the Buck/Kingdom challenge and DLC score targets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sunset Overdrive has 80 Steam achievements and none of them are hidden. The list is a mix of open-world combat milestones (thousands of OD massacred, style-level kills, grind and bounce kills, trap kills), progression achievements (upgrading guns to Level 5, unlocking Overdrives, completing Faction quests and challenge ratings), enormous collectible hunts across Sunset City (150 shoes, 150 balloons, 150 cameras, 150 hologram signs, 40 smartphones, and more), story-mission completions, and the Fort Night Defense set-pieces. A block near the end covers score targets on the standalone challenge maps and the two DLC areas.",
                "Nothing is missable - the city stays open after the story, every collectible and challenge can be revisited, and missions can be replayed. Completion is mostly a matter of thoroughness: sweeping all of Sunset City's collectibles and hitting the various kill-count and challenge-rating thresholds is the bulk of the work, and the high-score challenge achievements (Insomniac QA scores, the Buck National challenge series) are the main skill checks.",
                "Tip: turn on the in-game collectible markers once you have found the first few of each type - the collectibles (shoes on wires, Fizzie balloons, hologram signs, security cameras, toilet paper, smartphones) are spread across the whole map, and manually hunting the last dozen of a 150-item set is far slower than letting the map guide you while you traverse between missions."
            ]
        },
        {
            "heading": "Combat, Style & Progression",
            "body": [
                "The core loop: OD kill totals, style-level and elemental kills, chaining traversal moves, a clean Night Defense, upgrading guns to Level 5, equipping Amps, earning Badges, looting supply drops, spending Overcharge, the Faction-clothing and Faction-quest achievements, the challenge bronze/silver/gold rating tiers, and the early story beats (Fizzco's secrets, Ignatius' RPG, the Overcharge vats, the comic collection, Fargarthia, Sunset City).",
                "The achievements here: Orange Soda (5,000 OD Massacred); Perfection (Complete an optional Night Defense without losing any of your overcharge); The Floor is Lava (Chain together 100 traversal moves without stopping or touching the ground); Stylish Kills (Kill 500 enemies while at Style Level 3); Let me Count the Ways (Burn, Shock, Freeze, or Enrage 1,000 enemies); Favorite (Upgrade one of your guns to Level 5); Many Favorites (Upgrade 10 guns to Level 5); I Like Them All (Upgrade 20 guns to Level 5); Amped Up (Equip 5 Amps on your character at the same time); Badge (Earn a Badge); Who is Sending These? (Loot 25 emergency supply drops); Can't Commit (Equip one piece of clothing from each Faction at the same time); The .1% (Spend at least 25,000 Overcharge); Overachiever (You earned an achievement); Appreciation (Watch the credits all the way through); Not so Secret Ingredient (Get to the bottom of Fizzco's corporate secrets); Roleplay While Rolepaying (Reach Level 99 in Ignatius' epic RPG campaign); Vat Pack Rat (Upgrade the Overcharge vats at every fort); Ultimate Collection (Liberate all the comic books for the comic book collector); Defender of the Realm (Clear Fargarthia of a hidden evil); Revolutionary (Take back Sunset City for the misfit survivors); Equal Opportunity (Complete a quest from every Faction); A Challenger Appears (Complete 10 challenges with at least a bronze rating); Second Place (Complete 30 challenges with at least a silver rating); The Champion (Complete 50 challenges with a gold rating); Orange Soda II (15,000 OD massacred); Grind Kills (Kill 100 enemies while grinding)."
            ]
        },
        {
            "heading": "Kill Feats, Collectibles & Challenges",
            "body": [
                "Grind, bounce, trap and Springboard kills, destroying vending machines and Fizzco Blimps, unlocking Overdrives, and the big Sunset City collectible hunts - smartphones, sightseeing spots, security cameras, satellites, billboards, shoes, fashion items, hologram signs, Fizzie balloons, toilet paper, and Floyd's Amps - plus the QA high-score challenges, under-par mission replays, and Horror Night.",
                "The achievements here: Bounce Kills (Kill 100 enemies while bouncing or while in the air); Trap Kills (Kill 500 enemies with traps); Flung to Safety (Kill 100 enemies by flinging them into danger using the Springboard Trap); Grind Melee (Melee 50 enemies while grinding); Out of Stock (Destroy 250 Overcharge XT vending machines); Crash Landing (Destroy 25 Fizzco Blimps just because you can); Overdrive (Unlock an Overdrive); More Overdrive (Unlock at least one Rank 4 Overdrive); Intel (Collect all 40 Smartphones); Explorer (Find all 20 secret sightseeing locations in Sunset City); Big Brother (Destroy all 150 Fizzco security cameras); Wire Tapping (Eavesdrop on nine conversations by hacking into satellites); It's Art Ok (Deface 40 billboards with graffiti); Shoe Closet (Collect all 150 shoes hanging from wires); Going to Need a Bigger Closet (Collect 250 fashion items); I Should Get Paid for This (Beat Insomniac QA's high score of 534,080 on the Challenge 'Buck's Revenge'); Replay (Replay any Mission and complete it under par); Not the Boss of Me (Replay the final mission and defeat the boss under par); What's Your Sign? (Collect all 150 Overcharge hologram signs); Hot Air (Collect all 150 Fizzie balloons); Litter (Collect all 150 scraps of toilet paper); Mixology 101 (Collect 20 Amps from Floyd); Oh the Horror! (Survive Horror Night); Dusk 'til Dawn (Survive one night at your Fort); Buck National (Become a reality TV star)."
            ]
        },
        {
            "heading": "Story Missions, Forts & Challenge Scores",
            "body": [
                "The rest of the campaign - the glider crash, becoming a reality-TV star, the Scouts, Excalibro, the final Fizzco machine, the Mooil Rig and the DLC areas (the sea monster, the movie producer, the robot costume, Snackwrap) - the Fort Night Defense survivals, Ainsley's drawings, and the Buck National / Kingdom challenge-map and DLC score targets (including the April Fools gag achievement).",
                "The achievements here: Plan B (Survive the glider crash and look for another way out of the city); That Balloon (You killed a balloon); Scouts Honor (Become an honorary Troop Member by finding Bryllcream and defeating Norton); Ultra Mega Kill (That was a lot of pigeons); Save Everyone (Save Sunset City from Fizzco's second-most powerful robot); Excalibro (You forged the mythical Excalamune); This is my City Now (You beat the final Fizzco corporate machine); Lost and Found (Find Bryllcream... again); Crude Oil (Arrive at the Mooil Rig); Big Tobacco (Smoking causes lung cancer, heart disease, and instant death); It's Full of Stars (Light fires big enough to see from space); Seas the Day (Protect the boat from bombs, mortars, and OD); Calamari (Defeat the DL-sea monster); Big Break (Anybody can be a movie producer, because nobody knows what they do); A Boy's Best Friend is his Mother (Build the 'Feel the Burn' weapon for a guy who is stir-crazy... or just crazy); Cosplay (Put on a robot costume and collect the kill codes); Ballin' (Reroute the power inside the factory in the weirdest way possible); Language Lessons (Work with Buck and Sam to create a new weapon); Saved (Find Fiona and Lou, then help them escape by fixing Snackwrap); Special Delivery (Ride a cargo container into the factory); The Most Punchable Face (Defeat Brandon. Like, for real); The Pitch (Weapons design is a tough business); Hardcore Buck National vs The Apocalypse (Beat the score of 400,000 on the Challenge 'Buck National vs The Apocalypse'); Hardcore Buck Strikes Back (Beat the score of 500,000 on the Challenge 'Buck Strikes Back'); Hardcore Buck Stops Here (Beat the score of 600,000 on the Challenge 'Buck Stops Here'); Dawwwwww (Find all 12 of Ainsley's drawings scribbled on city walls); Worst Job in the Kingdom (Replay the Floating Garbage mission and beat the score of 50,000); Fizzie Says April Fools (Ha, ha! I can't believe you fell for that! (Acquire Worst Job in the Kingdom))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story, which naturally unlocks the Overdrives, Amp slots, gun upgrades and Faction quests, and turn on collectible map markers as soon as each type appears.",
                "2. While traversing between missions, grind out the combat milestones (OD kills, style-level kills, grind/bounce/trap kills, elemental status kills) and pick up collectibles you pass.",
                "3. After the story, do a systematic collectible sweep of Sunset City - the 150-item sets (shoes, balloons, cameras, hologram signs, toilet paper), the 40 smartphones, sightseeing spots, satellites and billboards.",
                "4. Complete Faction quests for every Faction, push the challenge maps up through bronze, silver and gold ratings, and do the Fort Night Defense survivals and Horror Night.",
                "5. Finish with the high-score challenges - the Insomniac QA scores and the Buck National / Kingdom challenge and DLC score targets - which are the hardest, most skill-dependent achievements in the list.",
                "Tip: score challenges reward keeping your Style multiplier maxed - stay off the ground, keep grinding, bouncing and wall-running between kills, and switch weapons to avoid the same-weapon style penalty; a broken combo is what costs you the gold-tier and QA scores."
            ]
        }
    ]
};
