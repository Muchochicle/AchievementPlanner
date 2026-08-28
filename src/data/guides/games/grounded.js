// Grounded Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grounded.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   962130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 30 of 45 ship a real,
//   official Steam description, quoted verbatim below.
// - The 15 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against the Grounded
//   Wiki (grounded.wiki.gg) and Steam Community 100% guides, and kept
//   spoiler-light (lab and boss names only).
export const GUIDE = {
    "slug": "grounded-achievement-guide",
    "category": "game",
    "gameSlug": "grounded",
    "icon": "🐜",
    "title": "Grounded Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Grounded - the progression and crafting milestones, the combat, building and exploration feats, the fun and Photo Mode unlocks, the visible end-game story achievements, and the 15 hidden achievements (the story labs and boss kills), covered with spoiler-light conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Grounded has 45 Steam achievements, 15 of them hidden. The visible achievements are ordinary survival-progression tasks; the hidden ones are almost all story-lab milestones and boss kills, so a full completion tracks the main story to its end plus every optional boss.",
                "Nothing is permanently missable - the yard persists, bosses respawn, and BURG.L's quests and the creature cards can always be finished - but Super Win (100% end-game Report Card) needs literally everything: all upgrades, cards, landmarks, Milk Molars, MIX.Rs, mutations, recipes, max Brainpower and every boss.",
                "Tip: play co-op and follow BURG.L's quest list as your main thread - it walks you through the labs and bosses in a sensible order - then do a dedicated Report Card cleanup pass at the end for Super Win, checking each category for what is still incomplete."
            ]
        },
        {
            "heading": "Progression & Crafting",
            "body": [
                "The survival-progression block: your first ASL upgrade and Mutation, analyzing resources, matching Tier 2 armour, first Tier 3 item, SCA.B colour schemes, Milk Molars and Brainpower level, maxing a Tier 3 item at the Smithing Station, crafting Tier 3 arrows, and the Super Duper duplicator.",
                "The achievements here: Science Rules (Purchase your first upgrade from an ASL Station); Growing Pains (Obtain your first Mutation); Resourceful (Analyze 15 resources); Exoskeleton (Equip a matching set of Tier 2 armor); Beefing Up (Craft your first Tier 3 item); Flavorful (Obtain 10 new SCA.B color schemes); Get Yoked (Infuse yourself with 20 regular Milk Molars); Shrinky and the Brain (Achieve level 10 Brainpower); Glob Job (Upgrade a tier 3 item to the max level at the Smithing Station); Splinter Master (Craft tier 3 arrows); Super Dupe (Duplicate an item at the Super Duper)."
            ]
        },
        {
            "heading": "Combat, Building & Exploration",
            "body": [
                "The combat, building and map feats: a 10-perfect-block streak, discovering 20 map sites, killing your first Wolf Spider, a 100 cm zipline ride, taming a pet, a 30 cm arrow kill on a flying bug, five Beefy smoothies and your first Mushroom Brick building.",
                "The achievements here: Block Buster (Perform 10 perfect blocks in a row); Protein Shake (Consume 5 Beefy memorized recipe Smoothies); Fortified (Construct your first Mushroom Brick building); Snoopy (Discover 20 Sites on the Map); Face Your Fears (Kill your first Wolf Spider); Web Master (Zip across a teen made Zipline longer than 100 cm); Friends in Low Places (Tame a bug as a pet); Aim Small (Kill a flying bug with an arrow from over 30 cm away)."
            ]
        },
        {
            "heading": "Fun & Photo Mode",
            "body": [
                "The light unlocks: cooking on the Roasting Spit, a 40 cm basketball shot, lounging in a chair, a Photo Mode picture, and unwinding at a max-coziness base.",
                "The achievements here: Fine Dining (Cook a bug on the Roasting Spit); From Downtown (Score a basket with the Basketball Hoop from over 40 cm away); Lounging Around (Lounge in a Chair); Underexposed (Snap a picture using Photo Mode); Chillax (Unwind at a base while experiencing max coziness)."
            ]
        },
        {
            "heading": "Story & End Game",
            "body": [
                "The visible story and completion achievements: defending all the MIX.Rs, the two \"Go Big\" grow-back achievements, Super Win (100% Report Card), finishing BURG.L's quest list, dealing with all the Ant Queens, and unlocking every Creature Card.",
                "The achievements here: Gotta Peep Them All (Unlock every Creature Card); Mini Mix-a-lot (Defend all of the MIX.Rs and Super MIX.Rs); Go Big (Grow big again!); Super Win (Grow big again and score 100% on the end game Report Card); No More Homework! (Complete BURG.L's list of Quests); Royal Arrangements (Deal with all of the Ant Queens)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Fifteen achievements are hidden and ship no Steam description - they are the story-lab milestones and the optional boss kills, described here spoiler-light:",
                "The achievements here: BURG.L Flipper (Story: enter the Oak Lab and help BURG.L up after the explosion.); Hedge Lab (Story: find and enter the password at the Hedge Lab terminal.); Pond Lab (Story: reach the end of the Pond Lab and open the dome at the final console.); Mom Genes (Boss: defeat the Hedge Broodmother.); Sticky Hands (Story: seal the crack on the Haze weed-killer canister with a Gum Nugget.); Black Ant Hill Lab (Boss: defeat the Assistant Manager in the Black Anthill Lab.); Raisin Man (Story: find Dr. Wendell Tully in the Undershed Lab.); Tighty Whities (Boss: defeat the Mant.); Assassin Assassin (Boss: defeat the Mantis.); The Best Part of Waking Up (Craft the Embiggening Cocktail.); Ominent Schmominent (Story: defeat Director Schmector.); A Muse Sting (Boss: defeat the Wasp Queen.); Creepy Crawler (Boss: defeat the Infected Broodmother.); Did I Do That? (Story: activate the REMIX.R after defeating three boss creatures.); Go Big Again (Story: activate the SPAC.R again, after the REMIX.R and the JavaMatic event.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Follow BURG.L's quest list as the spine of the game - it routes you through the Oak, Hedge, Pond, Black Anthill and Undershed labs (BURG.L Flipper, Hedge Lab, Pond Lab, Black Ant Hill Lab, Raisin Man) and the Haze (Sticky Hands).",
                "2. Fight the optional bosses as you gear up: the Hedge Broodmother (Mom Genes), the Mant (Tighty Whities), the Mantis (Assassin Assassin), the Wasp Queen (A Muse Sting), and the Assistant Manager.",
                "3. Push the main story to Director Schmector (Ominent Schmominent), the REMIX.R (Did I Do That?) and the two grow-back milestones (Go Big, Go Big Again).",
                "4. Do the progression, combat and fun achievements naturally on the way, then a Report Card cleanup pass for Super Win and Gotta Peep Them All.",
                "5. Fight the Infected Broodmother (Creepy Crawler) and craft the Embiggening Cocktail (The Best Part of Waking Up) once fully geared.",
                "Tip: Super Win's Report Card wants every Milk Molar and landmark - use an interactive map to find the last few rather than combing the yard, since a handful are easy to miss entirely."
            ]
        }
    ]
};
