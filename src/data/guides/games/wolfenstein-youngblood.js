// Wolfenstein: Youngblood Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wolfenstein-youngblood.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1056960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wolfenstein-youngblood-achievement-guide",
    "category": "game",
    "gameSlug": "wolfenstein-youngblood",
    "icon": "🗡️",
    "title": "Wolfenstein: Youngblood Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Wolfenstein: Youngblood (7 hidden). The 7 hidden achievements are five story markers (Lab X, your father, the resistance, the God Key, Winkler) and two secrets (killing Lothar, 50 reflected-bullet kills). Sourced from XboxAchievements and Magic Game World.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wolfenstein: Youngblood has 60 Steam achievements, 7 of them hidden. Youngblood is the co-op-focused spin-off starring BJ Blazkowicz's twin daughters Jess and Soph in 1980s Nazi-occupied Paris. The visible achievements are cumulative kill and combat counters (500 enemies, dual-wield, airborne, stealth, take-downs, thrown weapons, the Crush ability), the three Brother-fortress boss fights, the ability and weapon-upgrade trees, weapon mastery levels, and the collectible sets.",
                "The 7 hidden achievements are five story markers (entering and infiltrating Lab X, meeting your father, linking up with the resistance, obtaining the God Key, defeating Winkler), and two secrets - killing Lothar and reflecting 50 enemy bullets with the God Key power.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is permanently missable - the open Paris hub stays available after the story for collectibles, mastery grinding and any remaining Brother fights."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "The three Brother-fortress Ubergarde boss fights and the Steam-hidden story markers - entering and infiltrating Lab X, meeting your father, linking up with the resistance, the God Key, and defeating Winkler and Lothar.",
                "The achievements here: Brother 1 (Defeat the Übergarde in Brother 1); Brother 2 (Defeat the Übergarde in Brother 2); Brother 3 (Defeat the Übergarde in Brother 3); God Key (Obtain the God Key during the Lab X mission); Plain sight (Enter Lab X); World's best Dad (Meet up with your father); Among friends (Link up with the resistance); Airship down (Defeat Winkler); Vive la révolution! (Kill Lothar)."
            ]
        },
        {
            "heading": "Combat & Kills",
            "body": [
                "The cumulative combat counters - 500 kills, explosives, thrown weapons, stealth, take-downs, airborne kills, dual-wielding, the Crush ability, pep signals, uncloak kills, 100,000 shots fired - plus the God Key reflected-bullet secret.",
                "The achievements here: Teamwork (Complete a mission with co-op player); Resistor (Kill 500 enemies); Swatter (Kill 20 drones); Immovable object (Kill 10 charging Supersoldaten); Bomber (Kill 50 enemies using explosives); Supreme ninja (Kill 50 enemies using thrown weapons); Stealthy (Stealthily kill 50 enemies); Ripper (Kill 75 enemies using take-downs); Trigger happy (Fire 100,000 shots); Prepper (Pick up 250 loot supplies); A red mist (Gore 150 enemies); Rasputin (Revive or get revived 25 times); Airborne (Kill 50 enemies while airborne); Sting like a bee (Stealth Kill 10 Supersoldaten); Hard boiled (Kill 100 enemies while dual-wielding); Right tool for the job (Kill 75 enemies using the weapon type that's most effective against their shield type); Heavy artillery (Tuck a Hammer weapon away for later); American Football (Kill 50 enemies with your Crush ability); Predator (Kill an enemy within 3 seconds of uncloaking 50 times); Supportive (Perform 100 pep signals); God mode (Kill 50 enemies with their own bullets, reflected using the God Key power)."
            ]
        },
        {
            "heading": "Weapons, Abilities & Upgrades",
            "body": [
                "Code locks, weapon-brand and improved upgrades, the ability tree, power-armor skins, and level-10 mastery with every individual weapon.",
                "The achievements here: Intruder (Get through 10 code locks); Partisan (Complete all missions); Tacticool (Fully upgrade a weapon brand); Kitted out (Obtain 10 weapon upgrades); Gear head (Obtain all improved weapon upgrades); A better you (Obtain 5 abilities); Extra everything (Obtain 15 abilities); More human than human (Obtain all abilities); See my vest (Obtain 5 power armor skins); One woman army (Achieve mastery level 10 with all weapons); Gunslinger (Achieve mastery level 10 with the Pistole); Chopper (Achieve mastery level 10 with the Sturmgewehr); A cloud of lead (Achieve mastery level 10 with the Kugelgewehr); Electric feel (Achieve mastery level 10 with the Elektrokraftwerk); Dust to dust (Achieve mastery level 10 with the Laserkraftwerk); Demolition woman (Achieve mastery level 10 with the Dieselkraftwerk); Hammer time (Achieve mastery level 10 with a Hammer weapon); Spray and pray (Achieve mastery level 10 with the Blitzgewehr); Get the strap (Achieve mastery level 10 with the Maschinenpistole); Chop and slice (Achieve mastery level 10 with a melee weapon)."
            ]
        },
        {
            "heading": "Exploration & Collectibles",
            "body": [
                "Opening supply crates, the Dunwall souvenir, and the collectible sets - Cassette Tapes, Readables, Floppy Disks, 3D glasses, coins, Undergrounds and UVK Covers.",
                "The achievements here: Explorer (Open 200 supply crates); Expert explorer (Open all red supply crates); Tribute (Obtain the souvenir from Dunwall); Audiophile (Find all Cassette Tapes); Librarian (Find all Readables); Hacker (Find all Floppy Disks); 3-D (Find all 3D glasses); Banker (Find 60,000 coins); Dark Days (Enter all Undergrounds); Cinephile (Find all UVK Covers)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, banking the story markers and the three Brother boss fights as you clear the fortresses.",
                "2. Kill Lothar and Winkler (Winkler is a hidden story marker; Lothar is an optional secret target) and get the God Key, then rack up 50 reflected-bullet kills.",
                "3. Keep upgrading weapons and abilities and unlock power-armor skins as you earn resources.",
                "4. After the story, grind level-10 mastery with every weapon type - the biggest single time sink in the list.",
                "5. Sweep the open Paris hub for all collectibles (tapes, readables, floppy disks, 3D glasses, UVK covers) and open every supply crate.",
                "Tip: the cumulative kill counters (500 kills, 100,000 shots, 150 gore kills) will finish on their own during the mastery grind - don't chase them separately."
            ]
        }
    ]
};
