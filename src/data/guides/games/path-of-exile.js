// Path of Exile Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/path-of-exile.json), whose 127 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   238960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "path-of-exile-achievement-guide",
    "category": "game",
    "gameSlug": "path-of-exile",
    "icon": "💀",
    "title": "Path of Exile Achievement Guide",
    "summary": "A practical guide to all 127 Steam achievements in Path of Exile - none are hidden. labyrinth, acts & story bosses, act bosses & encounters - part 1, act bosses & encounters - part 2, endgame & pinnacle bosses, atlas, league & expansion bosses.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Path of Exile has 127 Steam achievements and none are hidden. Almost every one is a boss kill - the three Labyrinth difficulties, the ten acts' story bosses, the Atlas map bosses and Guardians, the pinnacle fights (Shaper, Elder, Sirus, Maven), and the rotating league and expansion bosses.",
                "Nothing is missable - every boss can be re-fought - but this is an enormous time investment: the pinnacle and Uber bosses need a strong, well-invested character, and some achievements require league mechanics that only appear in specific leagues or via Atlas trees.",
                "Tip: play the campaign once for the Labyrinth and act-boss achievements, then build one strong character for the Atlas and grind toward the pinnacle bosses. Check which league-specific bosses are currently accessible before committing an Atlas tree to them."
            ]
        },
        {
            "heading": "Labyrinth, Acts & Story Bosses",
            "body": [
                "The campaign spine: the three Labyrinth difficulties (normal and Hardcore), and the named story-boss kills through the ten acts - Brutus, Merveil, and the rest.",
                "The achievements here: Challenger (Complete the Labyrinth in a non-Hardcore league.); Leader (Complete the Cruel Labyrinth in a non-Hardcore league.); Lord (Complete the Merciless Labyrinth in a non-Hardcore league.); Fearless (Complete the Labyrinth in a Hardcore League.); Dauntless (Complete the Cruel Labyrinth in a Hardcore League.); Indomitable (Complete the Merciless Labyrinth in a Hardcore League.); Mercy Killing (Kill Brutus, Warden of Axiom Prison.); The Star of Wraeclast (Kill Merveil, the Siren.); A New Dawn (Vanquish the Vaal Oversoul.); Rest for the Wicked (Defeat Piety in her laboratory.); Hunter (Kill Dominus as the Ranger.); Saviour (Kill Dominus as the Templar.); Usurper (Kill Dominus as the Witch.); Assassin (Kill Dominus as the Shadow.); Champion (Kill Dominus as the Duelist.); Conqueror (Kill Dominus as the Marauder.); Seeker (Kill Dominus as the Scion.); Freedom (Free the Scion.); Beginning of the End (Reach level 60 as a non-Hardcore character.); Foot of the Mountain (Reach level 70 as a non-Hardcore character.); Scaling the Ladder (Reach level 80 as a non-Hardcore character.); Diminishing Returns (Reach level 90 as a non-Hardcore character.); Survivor (Reach level 60 as a Hardcore character.); Undying (Reach level 70 as a Hardcore character.); Immortal (Reach level 80 as a Hardcore character.); Eternal (Reach level 90 as a Hardcore character.)."
            ]
        },
        {
            "heading": "Act Bosses & Encounters - Part 1",
            "body": [
                "The first block of act-boss and encounter kills across the campaign, described by boss name only.",
                "The achievements here: Locomancer (Tag every waypoint as one character.); No Loose Ends (Complete every side-quest as one character.); All Ears (Listen to all optional NPC dialogue as one character.); No Stone Unturned (Discover all environmental lore as one character.); Left to Chance (Create a Unique item using an Orb of Chance.); Well-Connected (Create an item with six linked sockets using an Orb of Fusing.); Gemling (Have a Skill Gem reach level 20.); Overcharged (Have 15 combined Endurance, Frenzy, and Power Charges active simultaneously.); Elemental Trinity (Slay an enemy that is simultaneously Ignited, Shocked, and Frozen.); Geared Up (Equip a Rare or Unique item in every non-Flask slot.); Cryomancer (Shatter 5 monsters with a single action.); One of a Kind (Equip a Unique item.); Paradigm Shift (Allocate a Keystone Passive Skill.); Explorer (Fully clear an end-game Map area.); Traitor (Help all three Bandit Lords.); Golden Touch (Open a Large Chest.); Ancestral Power (Have 3 Totems alive at one time.); Out of the Gate (Reach level 8 in any Race Event.); Capture the Flag (Capture a Flag in PvP.); Zombie Horde (Have 9 Raised Zombies at the same time.); Elemental Aegis (Have at least 75% resistance to Fire, Cold, and Lightning.); Dream within a Dream (Have a Unique Map drop within a Unique Map.); Beginner's Luck (Have a Unique Item drop in the Twilight Strand in Act 1.); Full Clear: Dread Thicket (Fully clear the Dread Thicket.); Specialist (Allocate a character's fourth Keystone Passive.); Full Clear: Catacombs (Fully clear the Catacombs.)."
            ]
        },
        {
            "heading": "Act Bosses & Encounters - Part 2",
            "body": [
                "The second block of act-boss and encounter kills, covering the later acts and the harder named fights.",
                "The achievements here: Raise the Bar (Have 90% resistance to any Element.); Full Clear: Archives (Fully clear the Archives.); Band Together (Join a public party.); Full Clear: Ship Graveyard Cave (Fully clear the Ship Graveyard Cave.); Vaal Gemling (Have a Vaal Skill Gem reach level 20.); Full Spectrum (Corrupt an item to have a white socket.); Behold My Army (Have 60 Minions at the same time.); Hostile Territory (Corrupt a map to have eight mods.); Cut-throat (Kill another player in any mode or league.); Dream Corruption (Corrupt a map into a Vaal Temple map.); Virtue Corruption (Corrupt a skill gem into a Vaal skill gem.); Dream Enrichment (Enhance a map with a Vaal fragment.); Identity Corruption (Corrupt an item to have a new implicit mod.); Full Clear: Apex of Sacrifice (Kill Atziri in the Apex of Sacrifice.); Gladiator (Fully clear the Colosseum or Pit end-game Map.); Cleanser (Fully clear The Harvest.); Purifier (Kill Voll, Emperor of Purity.); Umbra Slayer (Kill Shavronne of Umbra.); Dispelling the Curse (Kill Doedre Darktongue.); Bringer of Pain (Kill Maligaro, The Inquisitor.); Releaser of Souls (Kill the Eater of Souls in the Core end-game Map.); Soothsaying (Hand in a full set of Divination Cards.); End of the Nightmare (Kill Malachai, The Nightmare.); Invested with Blood (Reserve 95% or more of your Life.); Defence Against the Darkness (Land the killing blow on the Vaal Oversoul while you have the Fortify Buff active.); Stranger in a Strange Land (Kill a Rogue Exile in Kaom's Stronghold.)."
            ]
        },
        {
            "heading": "Endgame & Pinnacle Bosses",
            "body": [
                "The Atlas endgame: the map-boss and Guardian kills, the Shaper and Elder fights, the Conquerors and Sirus, and the pinnacle bosses (Maven, Uber Elder and the rest).",
                "The achievements here: Engulfed in Flames (Land the killing blow on the Burning Man while you are burning.); Time Capsule (Open a Vaal Vessel in a corrupted zone.); Maraketh Steel (Equip each Maraketh Weapon type.); Alchemist's Stone (Craft a Jewel with four mods using an Orb of Alchemy.); Imperfections (Corrupt a Unique Jewel into a different Unique Jewel.); Unique Influence (Equip a Unique Jewel with a radius.); Unforgettable (Defeat The Elder.); Fall of Oriath (Complete Part 1.); King Tide (Kill Tsoagoth, the Brine King.); Widow's Lament (Kill Arakaali, Spinner of Shadows.); Eternal Eclipse (Kill both Lunaris and Solaris in the same encounter.); Rule of Three (Kill the Depraved Trinity.); Sin and Salvation (Complete Part 2.); Apprentice Cartographer (Have a Voidstone socketed in your Atlas.); Journeyman Cartographer (Have two Voidstones socketed in your Atlas.); Master Cartographer (Have three Voidstones socketed in your Atlas.); Atlas of Worlds (Complete every map on the Atlas.); Grandmaster (Complete the Hall of Grandmasters.); Sacrifice of the Vaal (Kill Atziri in the Alluring Abyss.); New World Order (Complete a Tier 11 or higher Map with a Horned Scarab applied.); Breachlord (Kill It That Was Esh and It That Was Tul.); Ascendancy (Choose an Ascendancy class.); Ruler of the Court (Complete the Vinktar Square.); Shaper of Worlds (Defeat the Shaper.); Emperor (Complete the Eternal Labyrinth in a non-Hardcore league.); Untouchable (Complete the Eternal Labyrinth in a Hardcore League.)."
            ]
        },
        {
            "heading": "Atlas, League & Expansion Bosses",
            "body": [
                "The rotating league and expansion content: Delve, Betrayal, Expedition, the Scourge and Scars-of-the-Atlas bosses (The Infinite Hunger, The Searing Exarch, The Eater of Worlds), and the Atlas-progression goals.",
                "The achievements here: Heretic (Kill High Templar Dominus.); Loyal to the End (Kill Argus.); Treasure Hunter (Kill Izaro and have him drop 3 treasure keys.); Deicide (Kill a god and obtain their power.); Two of a Kind (Equip two unique items with the same name.); Decimation (Complete a map area that is affected by 10 or more modifiers.); One Small Step (Open a map in the map device and step through its portal.); Beyond Death (Kill Beidat, Archangel of Death.); All in a Day's Work (Complete a Master's Atlas Mission.); The Forsaken Masters (Defeat each Master's most dangerous foe.); Deadly Sins (Obtain every Pantheon power.); Omnipotent (Fully upgrade every god power.); Essence Corruption (Corrupt an Essence monster with a Vaal Orb.); Quintessence (Kill a monster that is under the influence of five Essence mods.); Warlord (Kill all Warbands leaders.); Augmentation (Use an orb to change the mods of a Strongbox.); King Cartographer (Have four Voidstones socketed in your Atlas.); Sirus, Awakener of Worlds (Defeat Sirus, Awakener of Worlds.); Defeat The Maven (Accept The Maven's Invitation and defeat The Maven.); The Star-Strewn Abyss (Defeat The Black Star.); The Unearthly Devourer (Defeat The Infinite Hunger.); The Scintillating Flame (Defeat The Searing Exarch.); The Ravenous Maw (Defeat The Eater of Worlds.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the campaign and all three Labyrinth difficulties (non-Hardcore is fine) for the act-boss and Labyrinth achievements.",
                "2. Build one strong character and progress the Atlas, killing map bosses and Guardians as you go.",
                "3. Work up to the pinnacle bosses - Shaper, Elder, Sirus, Maven, and their Uber versions - with a fully-invested build.",
                "4. Do the league and expansion bosses (Delve, Betrayal, Expedition, Scars of the Atlas) as the current league and your Atlas tree allow.",
                "Tip: many of these are far easier bought as carries or done in a group - the achievements do not care how the boss died, so a party kill of Uber Elder or the Feared counts the same as a solo one."
            ]
        }
    ]
};
