// Besiege Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/besiege.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   346010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "besiege-achievement-guide",
    "category": "game",
    "gameSlug": "besiege",
    "icon": "🏰",
    "title": "Besiege Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Besiege - 4 are hidden. Covers building and movement basics, campaign secondary objectives and special techniques, fragment-hunting across the DLC campaigns, and the 4 hidden achievements from The Broken Beyond expansion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Besiege has 54 Steam achievements, and 4 are hidden. The base game covers building and machine-testing basics (the level editor, the Workshop, speed and efficiency feats), a run of physics-sandbox jokes (getting struck by lightning, setting yourself on fire, killing birds with fire), the main campaign's region conquests, and a long list of secondary objectives across levels - many involving finding and retrieving a \"strange fragment\" hidden in a level. The DLC campaigns (Beneath the Borealis and The Broken Beyond) add their own fragment hunts and conquest achievements, with the 4 hidden achievements all belonging to The Broken Beyond.",
                "Nothing is missable - every campaign level and secondary objective stays replayable, and machines can be rebuilt freely to attempt a missed objective. The genuine long pole is Completionist (every secondary objective in the base campaign) and its DLC equivalents, since many of Besiege's secondary objectives need a genuinely different, purpose-built machine rather than the one you used to just beat the level.",
                "Tip: many secondary objectives explicitly forbid a category of tool (no fire, no explosives, no projectiles) - read a level's objective before building your machine for it, since a machine built to brute-force a level will often disqualify you from that level's secondary objective entirely."
            ]
        },
        {
            "heading": "Building & Movement Basics",
            "body": [
                "The foundational achievements: a sub-2-second campaign level clear, a 6-block-or-fewer machine, exceeding sensible speeds, building your first level in the editor, sharing a machine to the Workshop, downloading someone else's machine, getting struck by lightning, extinguishing a burning block with water, defeating 1000 AI units, and setting yourself on fire.",
                "The achievements here: A Swift Siege (Complete a campaign level under 2 seconds); The Handyman (Complete a level with a machine of 6 block points or less); Gotta Go Fast (Travel at speeds faster than is sensible); A Whole New World (Build your first level using the level editor); Sharing is caring (Share your machine with the whole world); The copy-cat (Subscribe and download someone else's machine); Thunderstruck (Get hit by lightning); All Under Control (Put out a burning block using water); Carnage (Defeat 1000 AI units); Pyromaniac (Set yourself on fire)."
            ]
        },
        {
            "heading": "Campaign Challenges I",
            "body": [
                "Early campaign objectives: beating Queens Fodder without fire or explosives, destroying all Scout Balloons in Scouts of Tolbrynd, ringing all 3 Awakening Bells at once, hitting a sheep with the Standing Stone's laser, killing 100 birds with fire, destroying all supply crates in The Duke's Dear Freighters, beating Old Howl Battlefield by blowing up every bomb, and conquering Ipsilon, Tolbrynd, and Valfross.",
                "The achievements here: Raw Fodder (Beat Queens Fodder without using fire or explosives); Piloting 101 (Destroy all the Scout Balloons in Scouts of Tolbrynd); Professional Hunchback (Ring all 3 Awakening Bells at the same time); As Mutton (Hit a sheep with the Standing Stone's laser); Birbecue (Kill 100 birds with fire); Supply Chop (Destroy all the supply crates in The Duke's Dear Freighters and collect the strange fragment); Bomb Battlefield (Beat Old Howl Battlefield while having blown up all the bombs); Lord of the Lyre (Conquer Ipsilon); Duke of the Skies (Conquer Tolbrynd); The Frozen Monarch (Conquer Valfross)."
            ]
        },
        {
            "heading": "Special Techniques & Campaign II",
            "body": [
                "Technique-based achievements: completing a level without pressing a key, clearing the Mountain Barrier without explosives, retrieving the strange fragment (Golden Eye), clearing Tree of Akhmora without projectiles, lifting the Stock Tower boulder 10 units, conquering Krolmar, completing the full Campaign, completing a player-made map, a sub-30-second Kahraz village clear, and reaching freezing altitude.",
                "The achievements here: Automaton (Complete a level without pressing a key); Through and Through (Complete the Mountain Barrier without explosives); Golden Eye (Retrieve the strange fragment); Tree Hugger (Complete Tree of Akhmora without using Projectiles); Atlas' Challenge (Lift the boulder in Stock Tower 10 units off the ground); Emperor of Sand (Complete Krolmar); Conqueror (Complete the Campaign); Bonus Round (Complete a player-made map); Demolition Expert (Complete Kahraz village in less than 30 seconds); Freezing Frontier (Reach enough altitude to freeze your machine)."
            ]
        },
        {
            "heading": "DLC & Fragment Hunts I",
            "body": [
                "The first wave of DLC fragment hunts and objectives: destroying the crates in The Frozen Path, Ironweave Passage (DLC), finding the impostor in Solomon's Flock, retrieving the fragment in Argus' Grounds, conquering the Splintered Sea (DLC), breaking a fragment out of the ice in Relict Frost, hitting training targets in Penitent Tower, opening the shell in The Devouring Pit (DLC), destroying the cargo ship in Serpent's Crest (DLC), and destroying the crates in Ambush.",
                "The achievements here: Frozen Goods (Destroy all the crates in The Frozen Path and collect the strange fragment); Ironweaver (Destroy all the crates in Ironweave Passage and collect the cube fragment (DLC)); Where's Woolly? (Destroy the impostor in Solomon's Flock); Sword Buster (Find a way to retrieve the strange fragment in Argus' Grounds); Master of Tides (Conquer the Splintered Sea (DLC)); Cold as Ice (Break the strange fragment out of the ice and collect it in Relict Frost); Target Practice (Get the axe throwers in Penitent Tower to hit one of the training targets); Shell Shock (Find a way to open the shell in The Devouring Pit and collect strange fragment from inside (DLC)); A Pirate's Life (Destroy the cargo ship and collect the strange fragment in Serpent's Crest (DLC)); Bandicoot (Destroy all the crates in Ambush and collect the strange fragment)."
            ]
        },
        {
            "heading": "DLC & Fragment Hunts II",
            "body": [
                "The remaining DLC and secondary-objective achievements: luring a shark into the cage in Feeding Frenzy (DLC), opening the chests in Webley's Pass (DLC), finding the hidden shrine in The Last Stand, destroying an army without any tents in Midland Patrol, clearing every secondary objective in the base campaign and in The Splintered Sea (DLC), killing every knight but the diplomat in The Duke's Plea, leaving none alive in Aras' Refuge, making the monks play a secret melody in Grand Crystal, and destroying the monument in Lyre Peak.",
                "The achievements here: Chained Chomp (Lure a shark into the cage in Feeding Frenzy (DLC)); Mine or Inconvenience (Open the chests and collect the strange fragment in Webley's Pass (DLC)); Raider (Locate and collect the strange fragment in The Last Stand); Spawn Camper (Destroy the entire army in Midland Patrol, without destroying any tents); Completionist (Complete All Secondary Objectives in the campaign); Autilis Explorer (Complete All Secondary Objectives in The Splintered Sea (DLC)); Hostile Negotiations (Kill all the knights in The Duke's Plea, except the Duke's diplomat, and collect the strange fragment); Leave None Alive (Kill all the Duke's knights in Aras' Refuge); Mortissimo (Make the monks in Grand Crystal play a secret melody); Up Hill Struggle (Destroy the monument and collect the strange fragment in Lyre Peak)."
            ]
        },
        {
            "heading": "Hidden Achievements (The Broken Beyond)",
            "body": [
                "All 4 of Besiege's hidden achievements belong to The Broken Beyond expansion, sourced from community guides (Steam Hunters, Steam Community):",
                "Sandworm: Destroy all the crates in Doon Canyon Run and collect the cube fragment. (The Broken Beyond DLC)",
                "Hail Mary: Land on the planet without taking any damage and without using any aerodynamic blocks. (The Broken Beyond DLC)",
                "Tyrant of The Void: Conquer The Broken Beyond, the DLC's campaign.",
                "Aranea Completionist: Complete every Secondary Objective across The Broken Beyond campaign. (The Broken Beyond DLC)"
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn the basics: build your first level in the editor, share a machine to the Workshop and download someone else's, and pick up the early physics-sandbox jokes (lightning, fire, water) as you experiment.",
                "2. Play through the base campaign region by region, conquering Ipsilon, Tolbrynd, Valfross, and Krolmar, retrieving strange fragments and clearing secondary objectives as you go, and finish with Conqueror.",
                "3. Go back through the campaign for Completionist, building purpose-specific machines for objectives that restrict fire, explosives, or projectiles.",
                "4. If you own the DLC, work through Beneath the Borealis and The Broken Beyond the same way - conquering their regions, retrieving fragments, and clearing secondary objectives, aiming for Autilis Explorer and the region conquests.",
                "5. In The Broken Beyond specifically, chase the 4 hidden achievements: destroy the Doon Canyon Run crates for the cube fragment, land without damage or aerodynamic blocks (Hail Mary), conquer the whole DLC campaign, and clear every one of its secondary objectives.",
                "Tip: Piloting 101, Anti-Aircraft-style crate-destruction objectives, and the various \"collect the strange fragment\" achievements often reward a fast, disposable machine over a durable one - since you only need to survive long enough to grab the fragment, prioritize speed and firepower over armor for these specific objectives."
            ]
        }
    ]
};
