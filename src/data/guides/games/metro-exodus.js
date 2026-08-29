// Metro Exodus Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/metro-exodus.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   412020 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 10 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "metro-exodus-achievement-guide",
    "category": "game",
    "gameSlug": "metro-exodus",
    "icon": "🚂",
    "title": "Metro Exodus Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in Metro Exodus - story & levels, vehicles & exploration, set-piece & side events, combat & weapons, collectibles & difficulty, the two colonels (dlc), sam's story (dlc), hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Metro Exodus has 68 Steam achievements, 10 of them hidden. They cover the story levels, the vehicles and set-piece moments, a large combat and weapon block, the collectible sets, two difficulty clears, and a block for each DLC (The Two Colonels, Sam's Story). The hidden ones are the two endings, three companion outcomes (Duke, Damir, Alyosha), and a few one-off feats.",
                "Several are missable in a single run - the companion outcomes and endings depend on moral choices spread across the game, Forest child needs a no-alert Taiga level, and Dodge master is a DLC final-fight feat. Full Strength and Your Destination want a careful morality run; plan a second playthrough for Ranger Hardcore and New Game+.",
                "Tip: do a first blind run for fun, then a guided \"good morality\" run (spare enemies, don't kill surrendering foes, complete optional beats) to line up Full Strength, Your Destination and the three companion achievements together. Save Hardcore, Iron Mode and NG+ for dedicated runs."
            ]
        },
        {
            "heading": "Story & Levels",
            "body": [
                "The level-completion markers: MOSCOW (Exodus), VOLGA (Lower the Bridge), YAMANTAU (Spoiled dinner), THE CASPIAN (New order), TAIGA (Sword of Damocles), the putrid tunnel (Putrification), and the DEAD CITY Research Facility with no Blind One killed (Guide).",
                "The achievements here: Exodus (Complete the MOSCOW level.); Lower the Bridge (Complete the VOLGA level.); Spoiled dinner (Complete the YAMANTAU level.); New order (Complete the CASPIAN level.); Sword of Damocles (Complete the TAIGA level.); Putrification (Pass the putrid tunnel.); Guide (Pass the Research Facility without killing a Blind One on the DEAD CITY level.)."
            ]
        },
        {
            "heading": "Vehicles & Exploration",
            "body": [
                "Naming the locomotive, getting into a boat and the Trolley, driving the Bukhanka, using the CASPIAN bucket lift to reach the Oasis, and finding the maps in the laboratory (Complete road map).",
                "The achievements here: Aurora (Name the locomotive.); Regatta (Get into a boat.); Railwayman (Get into the Trolley.); Driver (Drive the Bukhanka.); Roller coaster (Use the bucket lift on the CASPIAN level to reach the Oasis.); Complete road map (Find maps in the laboratory.)."
            ]
        },
        {
            "heading": "Set-Piece & Side Events",
            "body": [
                "The scripted moments: the guitar and teddy bear on VOLGA, the passenger train car, killing the Catfish, attending the wedding, destroying the biggest statue on TAIGA, standing your ground against the Bear, the Admiral's tea party, and finishing TAIGA unnoticed and non-lethal (Forest child).",
                "The achievements here: Friend of the Crew (Find the guitar and teddy bear on the VOLGA level.); Long distance passenger (Find the passenger train car.); Fisherman (Kill the Catfish.); Gor'ko! (Attend the wedding on the SUMMER level.); Decommunization (Destroy the biggest statue in front of the children's camp on the TAIGA level.); Master of the Forest (Stand your ground against the Bear at the first encounter.); 5 o'clock (Take part in the Admiral's tea party on the TAIGA level.); Forest child (Complete the TAIGA level without attacking anyone or getting noticed.)."
            ]
        },
        {
            "heading": "Combat & Weapons",
            "body": [
                "The weapon and kill-count achievements: a kill with every ranged weapon, a full mod set and a mod of each category on one weapon, spending 500 resources on cleaning and 500 on crafting, all suit upgrades, patching the gasmask, a last-second filter craft, 300 mutants, 300 humans, 50 long-distance kills, 30 Tikhar and 30 Crossbow kills, 50 melee/stun kills, the scoped gas-mask-plus-night-vision triple, and a fire kill on a demon.",
                "The achievements here: Professional (Make at least one kill with every ranged weapon.); Gunsmith (Install a modification of each category on a single weapon.); Tidyman (Spend 500 chemical resources on cleaning weapons.); Handyman (Spend 500 consumable resources on crafting.); Dressed for Success (Find all upgrades for Artyom's suit.); Martian (Patch the Gasmask.); Last Breath (After running out of filters in a hazard zone, craft a new one while suffocating.); Antibiotic (Kill 300 mutants.); Stand back (Kill 50 enemies at long distance.); Silent marksman (Kill 30 enemies with Tikhar.); Robin Hood (Kill 30 enemies with Crossbow.); Headhunter (Kill 300 human enemies.); Saboteur (Melee-kill or stun 50 enemies.); Kaleidoscope (Kill 3 enemies using sniper scope while wearing the Gas mask and using the Night Vision goggles.); Firebird (Kill a demon with fire.)."
            ]
        },
        {
            "heading": "Collectibles & Difficulty",
            "body": [
                "Finding all 70 Diary pages and all 21 postcards, a tune on the radio, the three New Game+ toys, and the difficulty clears: Hardcore (Ranger Hardcore), Iron Mode, and a New Game+ completion.",
                "The achievements here: Hardcore (Complete the game in Ranger Hardcore mode.); Librarian (Find all 70 hidden Diary pages.); Old world pictures (Find all 21 post cards.); Join us on air (Find a tune on the radio.); Toy seller (Find 3 toys in New Game+ mode: teddy bear, sun and fish.); Mutation (Complete the game in New Game+ mode using any modification.); Iron Mode (Complete the game in Iron Mode.)."
            ]
        },
        {
            "heading": "The Two Colonels (DLC)",
            "body": [
                "The first DLC: the New Year moment, the moral choice, guiding Kirill, completing the chapter, all 9 Diary pages, three flamethrower-melee Nosalis kills, and a no-Medkit completion on Normal+.",
                "The achievements here: New Year (Celebrated the New Year in THE TWO COLONELS Chapter.); Duty and conscience (Make a moral choice in THE TWO COLONELS Chapter.); Father and son (Provide guidance for Kirill in THE TWO COLONELS Chapter.); Real Colonel (Complete THE TWO COLONELS Chapter.); The whole picture (Find all 9 hidden Diary pages in THE TWO COLONELS Chapter.); Mind you, it's quite heavy! (Kill 3 Nosalises with flamethrower's melee attack in THE TWO COLONELS Chapter.); It's just a scratch (Complete THE TWO COLONELS Chapter without using any Medkits on Normal or higher difficulty.)."
            ]
        },
        {
            "heading": "Sam's Story (DLC)",
            "body": [
                "The second DLC: the documentary screening, all 5 traps, a no-death Batwing run, completing the chapter, earning the Captain's full trust, all Night Hunter stashes, all harmonica melodies, and all Sammy/Stallion upgrades.",
                "The achievements here: Cinephile (Organize a documentary screening in the SAM'S STORY chapter.); Trapper (Set all 5 traps in the SAM'S STORY chapter as the Captain requests.); Untouchable (Complete SAM'S STORY on Normal or higher difficulty without dying in Batwing encounters.); The Last Hero (Complete the SAM'S STORY chapter.); A Man of Principle (Complete the SAM'S STORY chapter earning the Captain's full trust.); Great Owl (Find all the Night Hunters' secret stashes in the SAM'S STORY chapter.); Music Lover (Collect all harmonica melodies in the SAM'S STORY chapter.); Lord of War (Collect all the upgrades for Sammy rifle and Stallion pistol in the SAM'S STORY chapter.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Ten achievements are hidden - the two endings, the three companion outcomes, and a few feats:",
                "The achievements here: Brakeman (In MOSCOW, release both train cars via the switch while crossing between cars to destroy the pursuing train.); Duke (On VOLGA, make enough moral choices that Duke survives.); Righteous vengeance (Kill 90 or more cannibals across the VOLGA level.); Carmaheddon (In THE CASPIAN, kill 50 enemies by running them over with the Bukhanka van.); Damir (On THE CASPIAN, make enough moral choices that Damir stays with the crew.); Alyosha (On TAIGA, make enough moral choices that Alyosha does not get wounded.); Full Strength (In one playthrough, get the good outcome for Duke, Damir and Alyosha.); Eternal Voyage (Reach the bad ending (not enough crew saved - Artyom dies).); Your Destination (Reach the good ending by saving enough crew members across the game.); Dodge master (In THE TWO COLONELS, dodge every one of the Blind One's throwing attacks in the final fight (missable).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run however you like to learn the game.",
                "2. Do a guided \"good morality\" run: spare enemies, avoid killing surrendering or non-hostile people, and complete the optional beats on VOLGA, CASPIAN and TAIGA - this lines up Duke, Damir, Alyosha, Full Strength and Your Destination together. Do Forest child (no-alert Taiga) on this run.",
                "3. Grind the combat and collectible achievements across these runs (they carry no morality cost).",
                "4. Dedicated runs for Hardcore, Iron Mode and New Game+, then play both DLCs (Dodge master in The Two Colonels final fight).",
                "Tip: Eternal Voyage (bad ending) is the odd one out - it needs a run where you save too few crew, so do it on a fast, low-effort playthrough rather than trying to \"undo\" a good run."
            ]
        }
    ]
};
