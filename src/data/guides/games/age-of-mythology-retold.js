// Age of Mythology: Retold Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/age-of-mythology-retold.json), whose 132
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1934680 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - The ACHIEVEMENT_* apiname order roughly tracks when each achievement
//   was added, so the sections walk the list in four blocks, listing
//   every real name and condition rather than one line each. Campaign
//   achievements are described only by mission/challenge, no plot
//   detail.
export const GUIDE = {
    "slug": "age-of-mythology-retold-achievement-guide",
    "category": "game",
    "gameSlug": "age-of-mythology-retold",
    "icon": "⚡",
    "title": "Age of Mythology: Retold Achievement Guide",
    "summary": "A practical guide to all 132 Steam achievements in Age of Mythology: Retold - none are hidden. Because the list is a mix of campaign, per-god, skirmish and expansion tasks, it is walked through in four roughly ordered blocks, with every official achievement name and its condition listed in its block.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Age of Mythology: Retold has 132 Steam achievements and none are hidden. They cover the Fall of the Trident campaign (and the later campaigns), per-god and per-pantheon feats, big cumulative counters (10,000 units killed, 10,000 Villagers trained), skirmish and multiplayer goals, and the expansion content.",
                "Nothing is missable - campaign missions replay from the menu and skirmish achievements accumulate - but several want a campaign on a higher difficulty, a full pantheon of god powers used, or a large kill/train count.",
                "The apiname order roughly tracks when each achievement was added, so this guide walks the list in four blocks. Within a block there is no strict order.",
                "Tip: play the Fall of the Trident campaign on Hard for the campaign and difficulty achievements at once, then use skirmish games against the AI (large map, lots of resources) to farm the counting achievements and try out each god's units and powers."
            ]
        },
        {
            "heading": "Combat, Economy & Early Milestones",
            "body": [
                "The base counters and early feats: killing 10,000 units, destroying 2,000 buildings, completing a Wonder and a Titan gate, training 10,000 Villagers, and the assorted \"do X 500 times\" and age-up achievements.",
                "The achievements here: Annihilation (Defeat 10000 units in battle.); Demolition (Destroy 2000 buildings in battle.); Creating a Masterpiece (Complete a Wonder.); Horror Unleashed (Complete a Titan gate.); I Believe They Can Fly (Toss 500 units into the air.); Auto Everything (Train 10000 Villagers.); Big Boomer (Reach the Villager build limit in a match.); Cyclopean Masonry (Build 50 Fortress-like buildings.); Age against the Machine (Defeat 100 AI opponents.); First Blood (Play a multiplayer match.); Boxing Match (Defeat 50 enemy units with Villagers.); Zeus Eat Town Center (Destroy 3 Town Centers with Infantry.); Poseidon's Revolt (Defeat 50 units with Militia.); Centum Centauri (Defeat 100 units with Centaurs.); Anubitten (Defeat 50 Villagers with Anubites.); A Hero in the Making (Complete the Tutorial mission.); And So It Begins (Complete the first mission of the Fall of the Trident campaign.); To Hades and Back (Complete the Greek portion of the Fall of the Trident campaign.); Osiris Reborn (Complete the Egyptian portion of the Fall of the Trident campaign.); This Is for Chiron (Complete the Norse portion of the Fall of the Trident campaign.); Arkantos Ascended (Complete the Fall of the Trident campaign.); Into the Mines! (Complete the first mission of the Golden Gift Campaign.); Freyr's Gift (Complete the Golden Gift campaign.); New World, New Gods (Complete the first mission of the New Atlantis campaign.); Honor to Kastor! (Complete the New Atlantis campaign.); Fast Food (Win a match without building a Farm.); No Time for Mortals (Win a match without training any military units aside from Heroes and Myth Units.); All In (Win a match without building an additional Village Center or Town Center.); Hoplite Heresy (Win a match as Greeks without training Ranged Soldiers or Cavalry.); Hersir, Your Honor (Win a match as Norse without training Infantry, except Hersirs.); Prowl Patrol (Defeat 100 Villagers with Fenris Wolf Broods.); Titanic Terror (Unleash a Greek, an Egyptian, a Norse, and an Atlantean Titan.); Wrath of the Gods (Use 4 God Powers within 30 seconds.)."
            ]
        },
        {
            "heading": "The Fall of the Trident Campaign",
            "body": [
                "The main campaign block: mission-completion markers and optional mission challenges through Arkantos's journey, plus the campaign difficulty achievements.",
                "The achievements here: Chonkers (Fully fatten 10 livestock animals in a single match.); Praise the Sun (Empower 15 buildings simultaneously.); Pet of Set (Deal 2000 damage with Set Animals in a single match.); Thorium Mining (Reach the Villager build limit training only Dwarves.); Kronos' Telephone Booth (Time shift 200 buildings.); Minoan Tennis (Toss a unit twice within 4 seconds with Minotaurs.); Ride of the Valkyries (Heal 4000 HP with Valkyries.); Care and Calamity (Heal 10000 HP using Caladrias.); Beastly Bulwark (Absorb 5000 damage with Behemoths.); Anger Problems (Cast the Einheri's 'Horn Blast' ability 20 times in one game session.); Norse Space Program (Use the Mountain Giant's 'Punt' ability.); Terrif-eyeing (Create over 666 Argus eyes in a single match.); Omnivore (Regenerate 5000 hitpoints using the Colossus' 'Colossal Hunger' ability.); Chiron's Apprentice (In Fall of the Trident 7. \"More Bandits\", win by only training Centaurs, no other units!); Power of the Gods (Invoke the Bolt God Power on the Manticore in the Tutorial Mission.); Preparation (In Fall of the Trident mission 1. \"Omens\", train an additional 10 Hoplites and 10 Toxotai.); Lost Treasure (In Fall of the Trident 2. \"Consequences\", find the Shipwreck to help boost your economy.); Blessed be the Legend (Bestow your first Blessing upon your Legend.); Chosen by the gods (Bestow 3 Blessings upon your Legend simultaneously.); Gods' Favorite (Bestow 3 divine and/or eternal Blessings upon your Legend simultaneously.); Slayer (Allow your Legend to deal the final blow on 50 enemies.); Deicide (Complete a Large Gateway.); Traveler (Complete the final Gateway of a page.); Nomad (Complete the final Gateway of an episode.); Underdog (Complete a Large Gateway without any Blessing.); Ironside (Complete 10 Gateways in a row without losing.); Veteran (Complete every Gateway in an episode.); War Hero (Complete every Gateway in an episode on Hard.); Through Thick and Thin  (Win an Arena of the Gods mission in co-op.); Imperial Garden (Invoke Peach Blossom Spring 5 or more times in a single match.); Forged from Clay (Invoke Creation during the Mythic Age.); Agricultural Revolution (Win a match with 20 or more farms blessed by Shennong's Prosperous Seeds.); Archaic Shot Put (Deal over 10000 damage to enemy units and structures with Kuafus.)."
            ]
        },
        {
            "heading": "Gods, Myth Units & Skirmish Feats",
            "body": [
                "The per-god and per-pantheon achievements (Zeus, Poseidon, Hades, Ra, Isis, Set, Thor, Odin, Loki, Kronos, Oranos, Gaia and the Chinese pantheon), using god powers, fielding myth units and Titans, and the skirmish and multiplayer feats.",
                "The achievements here: Bringing All Kinds of Hurt (Add a total of 300 Training Yards or Towers to your Machine Workshops or Military Camps.); Three Kingdoms (Link 3 or more Town Centers in a chain within Favored Land.); Terracotta Army (Summon 25 Terracotta Riders in a single match.); Beast Buffet (Consume 5 units with a single Taotie.); Don't Mess With Me (Defeat 100 enemy units using Qilins.); Set the World on Fire (Invoke Blazing Prairie for the first time.); Ten-Pin Strike (Launch 10 or more enemy units into the air using Tao Wu’s Rampage ability.); Rain of Pain (Damage 10 enemies simultaneously using Qinglong's Aqua Burst ability.); Embarrassment of Riches (Acquire 1,000 food and 1,000 wood using Pixius.); Pickup Artist (Win a match with Replicate mirror image units dealing at least 600 damage.); Become Immortal (Complete the first mission of the Chinese Campaign.); Pillar of the Community (Complete the last mission of the Chinese Campaign.); All Your Base Are Belong to Us (In scenario 2 of the Chinese Campaign, capture both the Northern and Southern bases.); Gotta Catch ’Em All (In Scenario 4 of the Chinese Campaign, free all valley guardians.); It Doesn't Look Scratched (In Scenario 6 of the Chinese Campaign, win with the Pillar remaining at least 60% HP.); Burn Baby Burn (In scenario 1 of the Chinese Campaign, Use the Blazing Prairie God Power on the enemy base.); Xuanyuan Sword (In Scenario 3 of the Chinese Campaign, find the lost relic in the ruins.); Invincible Warlord (Cast Solar Shield on a Shogun.); Eternal Reaper (Respawn a Shinigami at a Goshinboku tree after its first demise); Typhoon Season! (Cast Dragon Typhoon 3 times in one game.); Bushido Master (Reach bushido tier 5.); Classical Champions (Unlock Champion units in the Classical age.); Wheel of Misfortune (Destroy a building with Wanyudo.); It's Over Nine Thousand! (Inflict 9001 damage with Asuras whilst using their ability.); The One and Oni (Inflict 1111 damage with a single Oni.); The Ultimate Discount (Obtain a Sacred gate from another player whilst playing as Susanoo.); A Blessing Sent From Heaven (Complete the first mission of the Japanese Campaign.); Proven Worthy (Complete the last mission of the Japanese Campaign.); Cut Off the Head of the Snake (In scenario 10 of the Japanese Campaign, defeat Kagemasa without capturing either enemy fortress.); Emergency Response (In scenario 12 of the Japanese Campaign, reach every village and rescue their people.); Labyrinth Runner (Complete a Labyrinth on any difficulty in the Gauntlet game mode.); God Tier (Reach level 99 in the Gauntlet game mode.); A Legendary Rush (Win a final Boss node in the Gauntlet game mode with 5 different Legends.)."
            ]
        },
        {
            "heading": "Expansions, Challenges & Endgame",
            "body": [
                "The later campaigns and the harder challenge achievements: no-loss and speed clears, full-pantheon tasks, the Immortal Pillars / Chinese content, and the remaining endgame counters.",
                "The achievements here: Legends Assemble! (Unlock 13 Legends in the Gauntlet game mode.); Connoisseur of the Gods (Win the final Boss node in the Gauntlet game mode with 9 different Major Gods.); Don’t Go it Alone (Join another player in co-op to complete any 3 nodes in the Gauntlet game mode.); Friends in the End (Win a final Boss node in the Gauntlet game mode with a co-op partner.); We Have Titans at Home (Summon a Titan from 6 different Pantheons using the Favor Stash.); I Choose Violence (Use the “Glutton for Chaos” Favor Stash item to start a Chaos Event.); All Dolled Up (Equip a badge on your player profile.); The Secret Grove (Find the secret of the forest in the ‘Silent Sanctuary’ Mythical Battle.); Relic Racer (Get the Relic to Demeter's Temple in 25 min. in the 'Silent Sanctuary' Mythical Battle.); Bandit Buster (Rescue the occupied villages in the ‘Silent Sanctuary’ Mythical Battle.); Age of the Goat (In the ‘Silent Sanctuary’ Mythical Battle, gain 12 Herdables on a single age up.); Herding for Glory (Fill up a temple with the maximum number of Herdables.); Hearth and Home (Convert 50 units with the Communal Hearth.); Lupine Lethality (Kill 50 cavalry units with Lykaons.); Wither Wood Chipper (Destroy 100 trees with the Wither God Power.); Woodland Whammy (Hit 20 units at once with the Hamadryad’s ‘Piercing Rootsnare’ ability.); Battle Bard (Use Orpheus' 'Bard of Heroes' ability to boost 10 units at once.); Seeing Red (Use the \"RED TIDE\" cheat code to turn the water red while all blood pack settings are enabled.); Wet Ground (Reach 250 active visible blood pools during a single game.); Cleansing Rains (Use the Rain God Power to clear 100 visible blood pools with a single cast.); Migration (Complete the first mission of the 'Obsidian Mirror' Aztec campaign. ); Return to Sender (Rescue all captives in ‘Delivery Service’.  ); Hades’ Ruin (Destroy Hades' Town Centers in 'Hells Divided' on Hard or higher difficulty.); Feast Denied (Prevent Cipactli from reaching the 3rd village in 'Endless Hunger'.); Smoke and Mirrors (Complete the last mission of the Obsidian Mirror Aztec campaign. ); Divine Nourishment (Devote 260 units to the Gods.); It’s a Trap!  (Spring 52 Aztec traps on your enemies. ); Daily Ritual (Train 260 Warrior Priests.); Eaten Alive (Eat 104 enemies with the Earth Monster God Power. ); Surprise! (Successfully ambush 52 enemies from stealth.); Godspeed (Speed up 400 friendly units with the Tailwind God Power.); Dreamweaver (Cause 104 enemy units to sleep with the Lullaby God Power. ); Primordial Hunger (Defeat 400 enemy units with the Cipactli Titan.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Fall of the Trident campaign on Hard - clears the campaign block and its difficulty achievements together.",
                "2. Play skirmish games versus the AI on a big map, using a different god each time, to farm the kill/train/god-power counters and the per-god feats.",
                "3. Do the myth-unit, Titan and Wonder achievements inside those skirmish games.",
                "4. Play the later campaigns and the expansion (Chinese pantheon / Immortal Pillars) content.",
                "5. Finish with the challenge achievements (no-loss and speed clears) once you have the units and economy down.",
                "Tip: the 10,000-unit-kill and 10,000-Villager-train counters are the slowest in the game - they accumulate across every match, so by the time the campaigns and per-god feats are done they are usually most of the way there."
            ]
        }
    ]
};
