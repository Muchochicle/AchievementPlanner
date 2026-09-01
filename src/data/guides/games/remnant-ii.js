// Remnant II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/remnant-ii.json), whose 65 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1282100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 38 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "remnant-ii-achievement-guide",
    "category": "game",
    "gameSlug": "remnant-ii",
    "icon": "🔫",
    "title": "Remnant II Achievement Guide",
    "summary": "A practical guide to all 65 Steam achievements in Remnant II (38 hidden). Covers the campaign bosses and world secrets, the NPC encounters, the Archetype, trait, weapon and mutator grinds, and all three DLC packs (The Awakened King, The Forgotten Kingdom, The Dark Horizon). Thirty-eight of the achievements are hidden - the bosses, secrets, secret Archetypes and DLC beats - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Remnant II has 65 Steam achievements and 38 are hidden. In the base game they cover the five NPC encounters (Nimue, the Flautist, Meidra, the Custodian, Mudtooth), the hidden bosses (the Corrupted Ravager, the Nightweaver, Tal'Ratha, the Guardian of N'Erud, Many Faces, the Root Mantis, the Fae Imposter, the Labyrinth Sentinel, Annihilation), the Aberration counters, and world secrets (the Blood Moon Room, Leto's Lab, the secret Archetype, the Water Harp song, the Nightweaver's Web). The other fourteen come from the three DLC packs - The Awakened King (the One True King, the true ending, the Ritualist), The Forgotten Kingdom (Lydusa, Walt, the Invoker, the Trinity Crossbow), and The Dark Horizon (Spark's shop, the B.O.T., the new engram, the Custodian's Bastion).",
                "The catalog marks it difficulty 4. Because worlds are procedurally generated, many bosses, NPCs and secrets only appear with the right layout - Adventure Mode re-rolls each world so you can keep trying, and nothing is permanently missable, but completion is a long grind of re-rolls plus a full pass through each DLC. 'Maxed Out!' (all trait points) and the +10 mutator are the main base-game time sinks.",
                "Tip: use Adventure Mode to re-roll one world at a time when hunting a specific boss, NPC or secret - it is far faster than replaying the whole campaign, and the Aberration, trait and scrap counters all carry over across every mode."
            ]
        },
        {
            "heading": "NPCs, Bosses & World Secrets",
            "body": [
                "Meeting Nimue, the Flautist, Meidra, the Custodian and Mudtooth, defeating the Corrupted Ravager, the Nightweaver, Annihilation, the Aberration counters, the Labyrinth Sentinel, Tal'Ratha, the Guardian of N'Erud, Many Faces, the Root Mantis and the Fae Imposter, and discovering the Blood Moon Room and Leto's Lab.",
                "The achievements here: Blue Goddess (Meet Nimue in Nimue's Retreat (Losomn).); Familiar Face (Meet the Flautist in Yaesha.); Equal Measures (Receive an alignment reading from Meidra in Yaesha.); Not a Janitor (Meet the Custodian in the Ascension Spire (N'Erud).); Tall Tales (Listen to all of Mudtooth's stories at Ward 13.); Chaos (Defeat the Corrupted Ravager in Yaesha (solve the Water Harp and kill the doe).); Dark Designs (Defeat the Nightweaver in the Tormented Asylum (Losomn).); Forever is a Long Time Coming (Defeat Annihilation, the final boss.); Am I Seeing This? (Defeat 10 Aberrations.); Ghost in the Machine (Defeat 25 Aberrations.); Gleaming the Cube (Defeat the Labyrinth Sentinel (after defeating your first World Boss).); Madman's Paradise (Defeat Tal'Ratha in the Forgotten Prison (N'Erud).); Not so special now (Defeat 100 Special Enemies); Power Surge (Defeat the Guardian of N'Erud in Sentinel's Keep (after collecting three Seeker's Keys).); Only Human (Defeat a Boss in Single-Player Without Taking Any Damage); Quest for Survival (Defeat a World Boss); The God Gambit (Defeat the Corruptor (Many Faces) in The Great Bole (Yaesha).); The Killing Jar (Defeat the Root Mantis at the end of the tutorial.); Traitor (Defeat the Fae Imposter in Malefic Palace (Losomn).); Red Room (Discover the Blood Moon Room in Yaesha during a full blood moon.); The Agenda (Discover Leto's Lab in Ward 13's hidden chamber (via the Biome Portal Key).)."
            ]
        },
        {
            "heading": "Archetypes, Traits & Gear Grinds",
            "body": [
                "Boss weapons, melee weapons and guns, the first and second Archetype, the secret Archetype, Archetype level 10, traits (non-starter, 10, 20, upgraded to 10, maxed out), scrap totals, the Nightweaver's Web item, world-boss alternate rewards, relics, Blood Moon and Water Harp items, weapon mods, boss and standard weapon upgrades, relic capacity, and a +10 mutator.",
                "The achievements here: Boss'n Up (Craft a Boss Weapon); Edgelord (Acquire 10 Melee Weapons); Cutting Edge (Acquire 20 Melee Weapons); First of Many (Choose Your First Archetype); Duality (Slot a Second Archetype); Shhh...It's a Secret (Obtain a secret Archetype through its hidden questline (e.g. the Archon).); Top Performer (Reach Level 10 on Any Archetype); Not Your Average Trait (Obtain a Non-Starter Trait); All These Traits... (Obtain 10 Traits); Proving Grounds (Acquire 20 traits); Scrap Collector (Acquire 50,000 Scrap); Scrap Hoarder (Acquire 100,000 Scrap); Strapped (Acquire 15 Guns); The Trigger (Acquire 30 Guns); The Web (Obtain an item from the Nightweaver's Web (place the Nightweaver Stone Doll into the web in the Tormented Asylum).); Was This Supposed To Happen? (Acquire a World Boss's Alternate Reward); The Collector (Acquire 10 Relics); Bad Moon Rising (Craft an item at a Blood Moon Altar during a full blood moon.); Carnage in C-Minor (Play the secret song on the Water Harp after defeating the Ravager.); Expanding Horizons (Craft a Non-Starter Weapon Mod); Crafty (Craft 15 Weapon Mods); Trait Chaser (Upgrade Any Trait to 10); Maxed Out! (Reach the maximum trait points (65 in the base game).); The Ultimate Weapon (Upgrade a Boss Weapon to +10); Almost There (Upgrade a Boss Weapon to +5); Good, but Could be Better! (Upgrade a Standard Weapon to +10); No One Should Have All That Power (Upgrade a Standard Weapon to +20); Make Some Room (Upgrade Relic Capacity); Transmutate (Upgrade a weapon Mutator to level +10.)."
            ]
        },
        {
            "heading": "DLC: Awakened King, Forgotten Kingdom & Dark Horizon",
            "body": [
                "The Awakened King (the One True King, the Feast Master's ring, the true ending, the Ritualist, the bridge-guard ring), The Forgotten Kingdom (Lydusa, befriending Walt, returning the Trinity amulet, the Invoker, the Trinity Crossbow), and The Dark Horizon (the story, Spark's shop for the Redeemer, the B.O.T., the new engram, the Custodian's Bastion).",
                "The achievements here: Regicide ((The Awakened King) Defeat the One True King.); A Foul Feast ((The Awakened King) Bring the Feast Master's food to the sewer NPC for his ring.); Succession ((The Awakened King) Discover the One True Ending.); Master of the Dark Arts ((The Awakened King) Acquire the Ritualist Archetype.); You Shall Pass ((The Awakened King) Get the bridge guard's ring by talking to him while shrouded from view.); Requiem of the Forgotten Kingdom ((The Forgotten Kingdom) Complete the DLC story (defeat Lydusa).); Thank You For Being a Friend ((The Forgotten Kingdom) Forge a friendship with Walt.); The Burden Hardest to Bear ((The Forgotten Kingdom) Return the Trinity amulet to Dwell after collecting a Trinity Memento.); Master of Elements ((The Forgotten Kingdom) Acquire the Invoker Archetype.); Triple Takeover ((The Forgotten Kingdom) Acquire the Trinity Crossbow.); The Ultimate Doom (Complete The Dark Horizon Story); The Master Builder ((The Dark Horizon) Buy nine unique items from Spark's shop (excluding consumables and concoctions) to earn the Redeemer.); B.O.T. ((The Dark Horizon) Repair the B.O.T. with all four Prototype parts, activating the Memory Core's light mechanism first.); Master of Technology ((The Dark Horizon) Retrieve the Weathered Mechanism engram past the Custodian's glider in the Withered Necropolis and bring it to Wallace.); Still Not a Janitor ((The Dark Horizon) After defeating Alepsis-Taura, exhaust the Custodian's dialogue and choose the right options to receive the Custodian's Bastion ring.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, defeating whatever bosses your worlds generate and meeting the NPCs you come across.",
                "2. Use Adventure Mode to re-roll each world and hunt the specific bosses, NPCs and secrets you're missing (the Ravager, Many Faces, the Blood Moon Room, etc).",
                "3. Grind Archetypes to level 10 and unlock the secret Archetype, max your trait points, and push a mutator to +10.",
                "4. Play The Awakened King - the One True King, the true ending, the Ritualist, and the two ring rewards.",
                "5. Play The Forgotten Kingdom (Lydusa, Walt, the Invoker, the Trinity Crossbow) and The Dark Horizon (Spark's shop, the B.O.T., the engram, the Custodian's Bastion).",
                "Tip: 'Am I Seeing This?' and 'Ghost in the Machine' just count Aberrations killed across all modes - Corrupted difficulty and Apocalypse Adventure runs spawn them constantly, so these fill in without deliberate farming."
            ]
        }
    ]
};
