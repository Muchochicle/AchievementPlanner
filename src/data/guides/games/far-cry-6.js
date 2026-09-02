// Far Cry 6 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/far-cry-6.json), whose 99 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2369390 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "far-cry-6-achievement-guide",
    "category": "game",
    "gameSlug": "far-cry-6",
    "icon": "🐊",
    "title": "Far Cry 6 Achievement Guide",
    "summary": "A practical guide to all 99 Steam achievements in Far Cry 6 (0 hidden). Every achievement carries Steam's own text - the base-game story of the Yaran revolution, the open-world activities and collectibles, combat feats, the Special Operations, the three villain roguelite DLCs (Vaas, Pagan, Joseph), and the Lost Between Worlds DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Far Cry 6 has 99 Steam achievements, none hidden. Dani Rojas joins the guerrilla Libertad to overthrow dictator Antón Castillo on the island of Yara. The base-game achievements cover the story (recruiting the three factions, capturing FND bases and checkpoints, taking back Yara), the open-world activities (Yaran Stories, cockfighting, dominoes, Gran Premios, Bandido Operations), the collectibles (49 unique weapons, all Supremos, USB sticks, Criptograma Chests, Rides, Roosters, Amigos), and a long list of combat feats.",
                "The rest is DLC: the Special Operations co-op missions (including the five Mastery 3 clears), the three villain roguelite episodes - Vaas: Insanity, Pagan: Control and Joseph: Collapse, each with the same shape of escape, score, discovery and collectible achievements - and the Lost Between Worlds expansion.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable; the story, open world and every DLC stay available after the credits."
            ]
        },
        {
            "heading": "Story & Yara",
            "body": [
                "The base-game story (the three factions, FND bases and checkpoints, taking back Yara), the open-world activities (Yaran Stories, cockfighting, dominoes, Gran Premios, Bandido/Special Operations intro), and the early collectibles.",
                "The achievements here: Yo Soy Dani Rojas (Select Dani's look (Solo Campaign only)); Hidden In Plain Sight (Find your way to Miami); Cutting Foreign Ties (Recruit the Legends of '67 and La Moral); Montero Justicia (Recruit the Monteros); Voz del Pueblo (Recruit Máximas Matanzas); Viva La Revolución (Take back Yara); Ninjerilla (Capture an FND Base without being detected (Solo Campaign only)); Co-Dependent (Capture an FND base with a Co-op partner); Liberty (Capture all FND Bases (Solo Campaign only)); Finders Keepers! (Return 3 FND Resource vehicles in mint condition); Check It Out (Capture 10 Checkpoints (Solo Campaign only)); Friendly Skies (Blow up 16 Anti-Aircraft Cannons (Solo Campaign only)); It's Raining Treasure! (Intercept 10 Military Supply Drops (Solo Campaign Only)); Undying Tradition (Complete the Yaran Story \"Triada Blessings\"); Top of the Pecking Order (Win a Cockfighting match); Speed Racer (Complete 3 Gran Premios); Beginner's Luck (Win a Dominoes game); Overheated (Complete a Special Operation); Alpha Guerrilla (Successfully complete 5 Bandido Operations); Road Rage (Perform a Vehicle Machete Kill from a horse); Armed to the Teeth (Collect 49 Unique Weapons); Hogar Dulce Hogar (Fully upgrade one Camp Facility at any Guerrilla Camp (Solo Campaign only)); Backpacking (Acquire every Supremo in Yara); Fry Cry (Purchase 15 Meals)."
            ]
        },
        {
            "heading": "Combat & Collectibles",
            "body": [
                "The rest of the base-game collectibles (meals, USB sticks, Criptograma Chests, Rides, Roosters, Amigos) and the combat feats (Amigo tricks, poison and Heat kills, Mythical Animals, vehicle and stealth takedowns, gear sets and weapon mods).",
                "The achievements here: That's My Jam (Find 15 USB Sticks); That's Puzzling (Unlock 15 Criptograma Chests); Car Cry (Collect all 4 Rides); Recrooster (Find all Roosters); Loyal Army (Recruit 5 Amigos); @CanYouPetTheCroc (Pet Guapo); Strutting His Stuff (Equip Chicharrón with the Motherclucker Outfit); Secret Weapon (Distract 10 soldiers with Chorizo); Heated Conflict (Take out 10 soldiers with active Heat); Jawson Brody (Take out a shark with an explosion); Sophishticated (Catch 10 fish); Outdated Tech (Take out a soldier by sabotaging an alarm); Oh No You Don't! (Take out 3 Insurgent Leaders); Not So Special (Take out 10 Special Forces soldiers); Not So Tough (Disable and hijack a tank using an EMP device); Ultimate Predator (Hunt all Mythical Animals (Solo Campaign only)); Slip Sliding Away (Slide 200m at once); Hit 'n Run (Run over 10 soldiers in a vehicle); Didn't See That Coming! (Use a Security Control Center to disable all cameras and alarms); Death From Above (Take out a soldier from 50m above them); Toxic Influence (Have poisoned soldiers kill 5 other enemies); Fashionista (Equip a full matching Gear Set); Do It Yourself (Install every Mod on a single Resolver Weapon); Glamping (Build one of each Camp Facility (Solo Campaign only)); Furiously Fast (Have 10 parts installed on a Ride)."
            ]
        },
        {
            "heading": "Special Operations",
            "body": [
                "Reaching Comandante rank, the Special Operations feats (cool PG-240X, hidden Moneda, freeing hostages), and the five Mastery 3 clears.",
                "The achievements here: Glorious Leader (Reach the Rank of Comandante); Stay Cool (Complete any Special Operation without exceeding 50% on the PG-240X's temperature meter); Hidden Cash (Locate a stash of hidden Moneda in any Special Operation); Termination Phase (Free 30 hostages during a Lola's Informants challenge in any Special Operation); Crocodile Tears (Complete Special Operation: Cocodrilo on Mastery 3 difficulty); Extinction Level Event (Complete Special Operation: Mesozoico on Mastery 3 difficulty); Everything Must Go (Complete Special Operation: Los Tres Santos on Mastery 3 difficulty); Queenslayer (Complete Special Operation: Puerta del Edén on Mastery 3 difficulty); Agua Mala (Complete Special Operation: Maceo on Mastery 3 difficulty)."
            ]
        },
        {
            "heading": "Villain Episodes DLC",
            "body": [
                "The Vaas: Insanity, Pagan: Control and Joseph: Collapse roguelite episodes - escaping each mind (and at Mind Level 5, and with a 25,000 score), discovering every location, unlocking and upgrading each Armory, and the diary/chibi/vision/trait collectibles.",
                "The achievements here: No, I Won (Escape Vaas' mind); I Rule This Kingdom (Escape Vaas’ mind with a score of at least 25,000); The 1% (Carry at least 8,000 Cash at one time); This Is Your Brain (Discover every location in Vaas' mind); Freudian Field Day (Unlock all weapons in Vaas' Armory (Solo Game only)); Dear Diary (Collect all of Vaas' Diary Pages); Puff, Puff, Vaas (Collect all of the Vaas Chibis); So Much For Poetics (Collect all of the Visions in Vaas' mind); Self-Help (Fully upgrade all Weapon Cases in Vaas' Armory (Solo Game only)); Definition of Insanity (Escape Vaas' mind at Mind Level 5); True End(ing) (Escape Pagan's mind); Mind Monarch (Escape Pagan's mind with a score of at least 25,000); Pocket Money (Carry at least 8,000 Respect at once); Enlightened Monarch (Discover every location in Pagan's mind); Accessorizing (Unlock all weapons in Pagan's Armory (Solo Game only)); Early Drafts (Collect all of Pagan's Diary Pages); Vanity Project (Collect all of the Pagan Chibis); Radio is More My Thing (Collect all of the Visions in Pagan's mind); Min-Maxed (Have 8 Power equipped at one time); What's a King to a God? (Escape Pagan's mind at Mind Level 5); A New Dawn (Successfully escape Joseph's mind); Crusader (Escape Joseph's mind with a score of at least 25,000); Non-Profit (Carry at least 8,000 Penance at one time); Pilgrimage (Discover every location in Joseph's mind); Prepper (Unlock all weapons in Joseph's Armory (Solo Game only)); Family History (Collect all of Joseph's Diary Pages); False Idols (Collect all of the Joseph Chibis); Parables (Collect all of the Visions in Joseph's mind); Heavenly Father (Unlock all of Joseph's traits in the Mirror); Walking the Path (Escape Joseph's mind at Mind Level 5)."
            ]
        },
        {
            "heading": "Lost Between Worlds DLC",
            "body": [
                "The Lost Between Worlds expansion - escaping the Encasement, the five Vessel Shards, the rift challenges (Fractured Fortress, 5 consecutive rifts, a 15-minute run), and the Defense Unit feats across its maze levels.",
                "The achievements here: Back Home (Escape the Encasement with Fai's help); Intergalactic Mechanic (Collect all 5 Vessel Shards); Refracted Yara (Enter the portal and complete Fractured Fortress); Now You're Riftin' (Complete 5 consecutive rifts without using glints to respawn); Flawless Clarity (Complete a run in Lost Between Worlds in 15 minutes); Into the Void (Take out 25 Defense Units with gadgets); Mighty Minotaur (Take out 10 Defense Units with melee attacks in one run of The Maze); Yaran National Scuba Team (Swim to a depth of 185 meters in Sunken Esperanza); Sun Striker (Take out 20 Defense Units in one run of Death by Darkness); Demolitions Expert (Blow up 30 Defense Units as Fai in Comandante Fai); Crystal Crusader (Complete Color Combat without Dani's health falling to a critical level)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base-game story to 'Viva La Revolución', capturing FND bases and checkpoints and recruiting all four Amigos as you go.",
                "2. Sweep the open world: 49 unique weapons, all Supremos, USB sticks, Criptograma Chests, Rides and Roosters, the Yaran Stories and the minigames.",
                "3. Do the combat feats opportunistically (poison chains, Heat kills, Mythical Animals, the Guapo pet), and reach Comandante rank via Insurgencies.",
                "4. Run the Special Operations in co-op, ending with the five Mastery 3 clears.",
                "5. Play each villain episode (Vaas, Pagan, Joseph) for its escape/score/discovery/collectible set, then the Lost Between Worlds expansion.",
                "Tip: the villain episodes share an identical achievement template - a Mind Level 5 escape, a 25,000-score escape, discover every location, unlock and fully upgrade the Armory, and four collectible sets - so learn the loop once in Vaas: Insanity and the other two go much faster."
            ]
        }
    ]
};
