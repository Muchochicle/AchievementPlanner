// Avowed Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/avowed.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2457220 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 19 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary. Every non-hidden description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "avowed-achievement-guide",
    "category": "game",
    "gameSlug": "avowed",
    "icon": "🗡️",
    "title": "Avowed Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Avowed (19 hidden). 19 of the 50 are hidden - mostly quest-choice outcomes and discoverable secrets, researched from VULKK, Gamer Social Club, and TrueAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Avowed has 50 Steam achievements, 19 of them hidden. The visible track covers completing the game (and on Path of the Damned), maxing out each companion's abilities (Kai, Giatta, Marius, Yatzli), collecting every God Shrine Totem, reaching max level, finding every Treasure Map item, cleansing every Strangled Adra, completing every Ancient Memory, finding every Pargrunen Cache, every Bounty, every Party Camp, every dungeon, 15 stealth kills, a fully-upgraded armor set and weapon, every side quest, 10 Spider/Beetle kills, every Fast Travel beacon, and a set of roleplay tallies (violent/peaceful conversation resolutions, maxing an attribute, lying 15 times, training with companions, 25 parries, every recipe cooked, every History volume, and Sanza's map).",
                "The 19 hidden achievements are mostly quest-choice outcomes and discoverable secrets: confronting your assassin in the Cistern, uncovering the secret of Naku Tedek, sailing to Paradis, saving Fior mes Ivèrno, completing the Trials of the Tebaru Sanakis, confronting Kostya in the Lava Tubes, and the mutually-exclusive Allochory (free Sapadal) versus Parasitoid (destroy and absorb Sapadal) choice at the climax of 'The Heart of the Living Lands'. Further secrets include summoning a bear to fight another bear, being knighted into the Steel Garrote (versus having every companion leave in disgust for that same choice), finding the hidden room in Fort Northreach, completing every companion moment in the Garden, trying Aiko's drugs with your party, killing Captain Ngunu with his own poison, selling your future corpse to Elia, ignoring a warning sign in the Sand Sea Ruins, and wearing Necropants with a Revenant Bell Collar at once.",
                "The catalog marks it difficulty 3, missable:true, and recommends 2 playthroughs - Allochory/Parasitoid and the Steel Garrote knighting/rejection are each a single either/or choice, so no one save can realistically capture every hidden achievement."
            ]
        },
        {
            "heading": "Completion & Secrets I",
            "body": [
                "The full-completion achievement, and 10 hidden quest-choice and secret achievements: confronting your assassin in the Cistern, uncovering the secret of Naku Tedek, sailing to Paradis, saving Fior mes Ivèrno, completing the Trials of the Tebaru Sanakis, confronting Kostya in the Lava Tubes, and the mutually-exclusive Allochory (free Sapadal) and Parasitoid (destroy and absorb Sapadal), summoning a bear to fight another bear, and having every companion leave after siding with the Steel Garrote.",
                "The achievements here: Avowed (Complete Avowed on any difficulty.); A Cistern Warning (Confront your assassin in the Cistern.); A Proper Introduction (Uncover the secret of Naku Tedek.); You've Got It From Here (Sail to Paradis from Fort Northreach.); Fior Extinguisher (Save Fior mes Ivèrno from the Steel Garrote's wrath.); Spectral Evidence (Complete the Trials of the Tebaru Sanakis.); It'll Cost Ya (Confront Kostya in the Lava Tubes of Solace Keep.); Allochory (Free Sapadal at the climax of 'The Heart of the Living Lands'.); Parasitoid (Destroy Sapadal and absorb their power at the climax of 'The Heart of the Living Lands'.); Two Bears High-Fiving (Summon a bear to fight another bear.); Everyone Disliked That (Have every companion leave your party after siding with the Steel Garrote.)."
            ]
        },
        {
            "heading": "Abilities & Exploration",
            "body": [
                "Maxing out Kai's, Giatta's, Marius's and Yatzli's abilities, collecting every God Shrine Totem, reaching max level, finding every Treasure Map item, cleansing every Strangled Adra, completing every Ancient Memory, finding every Pargrunen Cache, every Bounty, every Party Camp, every dungeon, 15 stealth kills, and a fully-upgraded armor set.",
                "The achievements here: Luckier Than They Know (Unlock all of Kai's abilities.); A Little Power Goes a Long Way (Unlock all of Giatta's abilities.); Bullseye (Unlock all of Marius's abilities.); Slay! (Unlock all of Yatzli's abilities.); Pantheon Purist (Collect and place all of the God Shrine Totems & Fragments.); Peak Performance (Reach max level.); Pathfinder (Find all items from Treasure Maps.); Pillars of Eternity (Cleanse all the Strangled Adra across all regions.); We Remember (Complete all Ancient Memories.); Gotta Cache 'Em All (Find and open all Pargrunen Caches across the Living Lands.); Bounty Hunter (Complete all Bounties from all regions.); Kith Lord (Discover all Party Camps across the Living Lands.); Dungeon Siege (Enter every dungeon across all regions.); Alpha Strike Protocol (Kill 15 enemies using stealth attacks.); Jingle, Jangle, Jingle (Equip a fully upgraded set of armor.)."
            ]
        },
        {
            "heading": "Story Choices & More Secrets",
            "body": [
                "The hidden Tyranny (be knighted into the Steel Garrote), completing every side quest, a fully-upgraded weapon, 10 Spider/Beetle kills, every Fast Travel beacon, a Path of the Damned clear, and the hidden Get in the Statue Envoy (find the 'contemplate death' spot), completing every companion moment in the Garden, trying Aiko's drugs with your party, demanding payment 5 times, killing Captain Ngunu with his own poison, selling your future corpse to Elia, finding the hidden room in Fort Northreach, and ignoring the warning sign in the Sand Sea Ruins.",
                "The achievements here: Tyranny (Be knighted as a member of the Steel Garrote.); Pentiment (Complete every side quest.); Big Iron On Your Hip (Equip a fully upgraded weapon.); Grounded (Slay 10 Spiders and 10 Beetles.); The Outer Worlds (Unlock all Fast Travel beacons.); A Test of Your Reflexes (Complete Avowed on the difficulty Path of the Damned.); Get in the Statue, Envoy (Find the spot to 'contemplate death'.); We're All In This Together (Complete every companion moment in the Garden.); Dream Fungi Rotation (Try Aiko's drugs with your companions during 'The Wasteland Courier'.); Skeyt Digger (Demand payment for your services 5 times.); Reverse Card (Kill Captain Ngunu with his own poison.); Retirement Plan (Sell your future corpse to Elia.); Hawkeye (Find the hidden room in Fort Northreach.); That Sign Can't Stop Me Because I Can't Read (Ignore the warning note and pull the lever in the Sand Sea Ruins.)."
            ]
        },
        {
            "heading": "Roleplay & Completion",
            "body": [
                "Resorting to violence 10 times, resolving conflicts peacefully 5 times, maxing an attribute, lying 15 times, completing every companion training session, 25 parries, cooking every recipe, collecting every History volume, completing Sanza's map, and the hidden Play Dead (wear Necropants and a Revenant Bell Collar together).",
                "The achievements here: Tired Of Being Nice (Resort to violence in a conversation 10 times.); Can't We All Get Along? (Resolve a potential conflict peacefully 5 times.); A Well Overflowing (Max out an attribute.); Pants on Fire (Lie 15 times.); Training Arc (Complete all training sessions with companions.); Now Riposte! (Parry an enemy's attacks 25 times.); Cooking By The Book (Cook every recipe at your Party Camp.); Historian (Collect all volumes of the History of the Living Lands in the Eothasian Temple.); Explorer (Complete Sanza's map of the Living Lands.); Play Dead (Wear Necropants and a Revenant Bell Collar at the same time.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story, exploring thoroughly for the God Shrine Totems, Treasure Maps, Strangled Adra, Ancient Memories, Caches, Bounties, Camps and dungeons.",
                "2. Level up each companion's full ability tree and gear up a full armor set and weapon.",
                "3. Decide in advance which climactic choice you want first - freeing Sapadal (Allochory) or destroying them (Parasitoid) - and which way you'll take the Steel Garrote storyline.",
                "4. Chase the roleplay tallies (violence vs. peace, lying, maxed attribute) and the discoverable secrets (the Cistern assassin, Fort Northreach's hidden room, the Sand Sea Ruins lever, the bear fight, Aiko's drugs, Captain Ngunu's poison) as you naturally play.",
                "5. Finish with a Path of the Damned run for its own achievement, and a second playthrough if you want the choice you skipped the first time.",
                "Tip: Allochory and Parasitoid can both be earned without a full second playthrough - reload a save from just before 'The Heart of the Living Lands' concludes and make the other choice, then let it play out to unlock the second achievement."
            ]
        }
    ]
};
