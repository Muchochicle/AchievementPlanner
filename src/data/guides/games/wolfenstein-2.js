// Wolfenstein II: The New Colossus Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wolfenstein-2.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   612880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 13 hidden achievements ship
//   no Steam description; their conditions here are curatorial (story
//   markers kept spoiler-light in the God of War house style), and
//   feat conditions cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "wolfenstein-2-achievement-guide",
    "category": "game",
    "gameSlug": "wolfenstein-2",
    "icon": "🔫",
    "title": "Wolfenstein II: The New Colossus Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Wolfenstein II: The New Colossus - collectibles, upgrades & difficulty, skills, feats & districts, the freedom chronicles (dlc), hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wolfenstein II: The New Colossus has 80 Steam achievements, 13 of them hidden (nine campaign-chapter markers and four feats - the Hitler kill, the no-kill Panzerhund ride, the Ubergewehr Zerstorer kill, and letting the credits roll). The rest are the base-game collectibles and upgrades, six difficulty clears, activity feats, and the three Freedom Chronicles DLC episodes.",
                "Several achievements are genuinely missable: I'm Machine Enough and Taste of Your own Medicine are one-shot moments, and Mein leben is a single perfect run with no checkpoints. The six difficulty clears do NOT stack, so a Mein leben run only credits Mein leben.",
                "Tip: do a first playthrough on a low difficulty for the story markers, collectibles and feats (grab Kick It, I'm Machine Enough and Taste of Your own Medicine deliberately), then dedicated runs for the higher difficulties, ending with Mein leben."
            ]
        },
        {
            "heading": "Collectibles, Upgrades & Difficulty",
            "body": [
                "The base-game checklist: the choice in Deja Vu, one of every collectible plus the full sets (Max's toys, records, gold, Ubercommander death cards, starcards, concept art), upgrading and fully upgrading weapons, maxing perks, the six difficulty clears (up to Mein leben), and the three enemy-takedown feats (Ramshackles, Constrictor Harness, Battle Walker).",
                "The achievements here: Déjà Vu (Make the choice); Starting a Collection (Find at least one of each collectible item); Toy Collector (Find all of Max's toys); Audiophile (Find all records); Golden Boy (Find all gold); Terror-Billy (Collect all Übercommander death cards); Meet the Cast (Find all starcards); Art Aficionado (Found all concept art); Tinkerer (Upgrade a weapon); Specialist (Fully upgrade a weapon); Gun Nut (Fully upgrade all weapons); Revolution (Beat the game); Bring 'em on! (Beat the game on \"Bring 'em on!\" difficulty or higher); Do or die! (Beat the game on \"Do or die!\" difficulty or higher); Call me Terror-Billy! (Beat the game on \"Call me Terror-Billy!\" difficulty or higher); I am death incarnate! (Beat the game on \"I am death incarnate!\" difficulty or higher); Mein leben (Beat the game on \"Mein leben\" difficulty); Max a Perk (Max a perk); Max all perks (Max all Perks); Bull Rush (Ramshackles tackle a charging Supersoldat); Snakebite (Perform a Constrictor Harness takedown); The Sky is the Limit (Perform a Battle Walker takedown)."
            ]
        },
        {
            "heading": "Skills, Feats & Districts",
            "body": [
                "The activity feats: a 10-kill stealth streak, 1,000 helmets collected, visiting every District and completing the Killboard, the Contraption goals, the Shooting Range and Killhouse targets, a wheelchair takedown, a 30 m hatchet kill, an Enigma decipher, playing Wolfstone 3D, an alarm-free District, and completing all side missions.",
                "The achievements here: They did Nazi that Coming (Stealth kill 10 enemies in a row); Hard Headed (Collect 1000 helmets); Coming Back for More (Visit every District); Across the Board (Complete the Killboard); Complete Package (Acquire all Contraptions and Contraption upgrades); Plus Package (Upgrade a Contraption); Make a Point (Achieve the highest score in the Shooting Range); First Loser (Achieve the second best time in the Killhouse); Crippled but Able (Perform a takedown while in the wheelchair); Hail Mary (Throw a hatchet and kill an enemy from 30m); Sightseeing (Visit a District); Puzzler (Decipher an Übercommander's location using the Enigma Machine); Retro (Play Wolfstone 3D); Ghost (Finish a District without triggering an alarm); Sidetracked (Complete all side missions)."
            ]
        },
        {
            "heading": "The Freedom Chronicles (DLC)",
            "body": [
                "The three DLC episodes - The Adventures of Gunslinger Joe, The Diaries of Agent Silent Death, and The Deeds of Captain Wilkins - each with its mission markers, its readables and gold sets, an \"I am Death Incarnate\" and a \"Mein leben\" clear, and the per-level challenge medals.",
                "The achievements here: First Down (Escape from Research Station Omega); Down at the Half (Elude your pursuers); Touchdown (Enact Revenge on Übercommander Metze); Read the Defense (Find all readables in \"The Adventures of Gunslinger Joe\"); Signing Bonus (Find all gold in \"The Adventures of Gunslinger Joe\"); First Team Soldier (Beat the \"The Adventures of Gunslinger Joe\" on \"I am Death Incarnate\" difficulty or higher); All-Pro Warrior (Beat \"The Adventures of Gunslinger Joe\" on \"Mein leben\" difficulty); Laboratory Expert (Beat the Station Omega challenge on \"I am Death Incarnate\" difficulty); Nightmare Expert (Beat the Nightmare challenge on \"I am Death Incarnate\" difficulty); Venusian Expert (Beat the Venus challenge on \"I am Death Incarnate\" difficulty); Back in the Field (Eliminate Übercommander Hans); Cut! Cut! Cut! (Cancel Chuck Lorentz); Dunked (Kill General Dunkel); Investigation Complete (Find all readables in \"The Diaries of Agent Silent Death\"); California Gold (Find all gold in \"The Diaries of Agent Silent Death\"); Expert Spy (Beat \"The Diaries of Agent Silent Death\" on \"I am Death Incarnate\" difficulty or higher); Ultimate Spy (Beat \"The Diaries of Agent Silent Death\" on \"Mein leben\" difficulty); Sacramento Medalist (Beat the Sacramento challenge on \"I am Death Incarnate\" difficulty); Hollywood Medalist (Beat the Hollywood challenge on \"I am Death Incarnate\" difficulty); Lunar Medalist (Beat The Moon challenge on \"I am Death Incarnate\" difficulty); Homecoming (Return to America); Ticket Punched (Destroy the cannons of Kodiak Island); Hero's Journey (Stop the Sun Gun); Intel Acquired (Find all readables in \"The Deeds of Captain Wilkins\"); Stipend Gained (Find all gold in \"The Deeds of Captain Wilkins\"); Army Vet (Beat \"The Deeds of Captain Wilkins\" on \"I am Death Incarnate\" difficulty or higher); Super Soldier (Beat \"The Deeds of Captain Wilkins\" on \"Mein leben\" difficulty); Alaskan Expert (Beat the Anchorage challenge on \"I am Death Incarnate\" difficulty); Kodiak Expert (Beat the Kodiak Islands challenge on \"I am Death Incarnate\" difficulty); Sub Expert (Beat the Submerged challenge on \"I am Death Incarnate\" difficulty)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - all are story markers or one-off feats:",
                "The achievements here: Carrying the Torch (Complete a chapter of the campaign (story achievement, no plot detail).); Enemy Within (Complete a chapter of the campaign (story achievement, no plot detail).); Amazing Grace (Complete a chapter of the campaign (story achievement, no plot detail).); It's Fricking Space Aliens! (Complete a chapter of the campaign (story achievement, no plot detail).); R.I.P. (Complete a chapter of the campaign (story achievement, no plot detail).); All the Gains! (Complete a chapter of the campaign (story achievement, no plot detail).); Sermons and Moonshine (Complete a chapter of the campaign (story achievement, no plot detail).); Venus (Complete a chapter of the campaign (story achievement, no plot detail).); The Ausmerzer (Complete a chapter of the campaign (story achievement, no plot detail).); Kick It (Kill Hitler during the Aerostat Audition.); I'm Machine Enough (Beat the Panzerhund ride without killing anyone, on \"Bring 'em on!\" difficulty or higher (missable).); Taste of Your own Medicine (Destroy a Zerstörer with an Übergewehr (missable).); Keep Playing (Let the credits play all the way to the end.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First playthrough on \"Can I play, Daddy?\" or similar: all collectibles, all upgrades, the side missions, and the missable feats (Kick It, I'm Machine Enough on Bring 'em on!, Taste of Your own Medicine).",
                "2. Play the three Freedom Chronicles episodes for their markers, collectibles and challenge medals.",
                "3. Dedicated difficulty runs - the clears do not stack, so you need one run at each of the higher tiers, or replay chapters where possible.",
                "4. Finish with a Mein leben run: one life, no checkpoints, start to finish.",
                "Tip: Taste of Your own Medicine (destroy a Zerstörer with an Übergewehr) has a narrow window - the Übergewehr first appears late, and Zerstörer enemies are rare, so know exactly which encounter you are going to do it in before you get there."
            ]
        }
    ]
};
