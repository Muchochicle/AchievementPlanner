// Sid Meier's Civilization VI Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/civilization-vi.json), whose 320 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   289070 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 320 ship a real,
//   official Steam description, quoted directly below. Civilization VI
//   has no Steam-hidden achievements.
// - With 320 achievements, the sections group them the way Steam's own
//   achievement IDs do: the base game's victories, difficulties, leaders,
//   maps and one-off feats, then each of the six original Scenario Packs,
//   then the Rise and Fall and Gathering Storm expansions, the Red Death
//   battle-royale mode, the New Frontier Pass (plus the Pirates
//   scenario), and finally the Leader Pass. Real names are woven into
//   explanatory sentences rather than one line each. This is read from
//   the achievements' own descriptions, not invented.
export const GUIDE = {

    slug: "civilization-vi-achievement-guide",
    category: "game",
    gameSlug: "civilization-vi",
    icon: "🌍",
    title: "Sid Meier's Civilization VI Achievement Guide",
    summary: "A practical guide to all 320 Steam achievements in Civilization VI - the victory types and difficulty ladder, every playable leader, the map and era-start wins, the base game's one-off feats, all six original Scenario Packs, the Rise and Fall and Gathering Storm expansions, Red Death, the New Frontier Pass and Pirates, and the Leader Pass.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Civilization VI has 320 Steam achievements and none are hidden. They span the base game and every piece of paid content: the six original Scenario Packs, the Rise and Fall and Gathering Storm expansions, the Red Death battle-royale mode, the New Frontier Pass and the Leader Pass. Owning all of that DLC is required for 100%.",
                "Nothing is missable in the usual sense - you can always start another game - but this is one of the longest achievement lists in the catalog because so many entries are 'win a game as leader X' and each win is a multi-hour game.",
                "Tip: play on the smallest map (Duel), fastest speed (Online), lowest difficulty that still counts, and beeline a single victory type - a Culture or Science rush, or an early Domination on Duel. Most leader-win and map-win achievements stack: one fast Duel win as a given leader on a given map type at a given era start can tick several boxes at once."
            ]
        },

        {
            heading: "Victories & Difficulty",
            body: [
                "The difficulty ladder is a single rising bar - each tier also awards every tier below it: Game, Settler, Match (Settler), Irish Heartbeat (Chieftain), Warlording Over Others (Warlord), Machiavelli's Great Work (Prince), The Divine Right of Kings (King), Emperor's New Groove (Emperor), 12 Labors of Hercules (Immortal) and God-Like (Deity). Winning once on Deity clears all eight.",
                "The four base victory types each have one: Mission to Mars (Science), Nirvana (Religious), Buying Your Blue Jeans and Listening to Your Pop Music (Culture) and Veni, vidi, vici (Domination)."
            ]
        },

        {
            heading: "Leaders of the Base Game",
            body: [
                "Twenty achievements are simply 'win a regular game as' a launch-era leader. In roughly playable order they are: Crusader King (Frederick Barbarossa), Valois Dynasty (Catherine De Medici), Daughter of Isis (Cleopatra), Be the Change You Wish to See In the World (Gandhi), First to Civilize (Gilgamesh), For Sparta!!! (Gorgo), Varangian Guard (Harald Hardrada), Katsu! (Hojo Tokimune), Montezuma's Revenge (Montezuma), Mwene Kongo (Mvemba a Nzinga), Emperor of Brazil (Pedro II), Oratorical Skills (Pericles), Bronze Horseman (Peter the Great), Non Sufficit Orbis (Philip II), Elixir of Immortality (Qin Shi Huang), Sultan of Egypt (Saladin), Warrior Queen (Tomyris), Rome If You Want To (Trajan), Let Teddy Win (Theodore Roosevelt) and I Am Amused (Victoria).",
                "Each is fastest as a cheesy Culture or Science win on Duel; a few (Gilgamesh, Gorgo, Trajan, Montezuma) are natural early-Domination picks."
            ]
        },

        {
            heading: "Maps, Era Starts & Special Victories",
            body: [
                "One win on each map size: Here's Looking At You Kid (Duel), Four Corners Offense (Tiny), Six Shooter (Small), Eight is Enough (Standard), Ten Commandments (Large) and Dirty Dozen (Huge). One win on each map script: Tectonic Shift (Continents), Mare Nostrum (Inland Sea), The Taste of Victory (Island Plates), Riffle and Bridge (Shuffle), Alfred Wegener's Legacy (Pangaea) and Unique Snowflake (Fractal).",
                "One win from each era start: The Test of Time (Ancient), After Antiquity (Classical), Out of the Dark Ages (Medieval), Renaissance Man (Renaissance), Captain of Industry (Industrial), Modern Major General (Modern), Splitting the Atom (Atomic) and Through the Digital Age (Information).",
                "Four are elaborate scripted victories: Man on the Moon (a Science win with a captured Egyptian city, having activated Newton and Darwin), We Are The Champions (a Religious win with Zoroastrianism while Suzerain of Zanzibar), Selfie (a Culture win with your own leader also in the game as an opponent) and Island Hopping (a Domination win on a Huge Island Plates map)."
            ]
        },

        {
            heading: "Civ-Specific & One-Off Feats (Base Game)",
            body: [
                "City-state and wonder interactions: Gift From the Storm God (a Strategic Resource from Hattusa), Army of Cthulhu (levy Nan Madol's military), Legends of the Hidden Temple (a Colossal Head next to a Temple'd Holy Site), The Origin of Species (activate Darwin by the Galapagos Islands) and New Orleans Style Spanish Rice (become Suzerain of a City-State).",
                "Civ-flavoured feats: 100th Anniversary (America - national-park Crater Lake and both Yosemite tiles), Arabian Knights (conquer a city with a Mamluk), Huey Tlatoani (Aztecs - attack with the full +16 luxury combat bonus), 2016 Ready (Brazil - Estadio Do Maracana and Christo Redentor in one city), Crouching Tiger Hidden Cannon (China - 5 Crouching Tigers on Great Wall tiles), Walk Like an Egyptian (Egypt - a Sphinx by the Pyramids on Desert Floodplains), Flight Slingulator (airlift a level 3 Slinger), For Queen and Country (England - a city on every continent on Huge), Loire Valley (France - 5 Châteaux with Wine in one city), Third Crusade (Barbarossa - take Jerusalem), 12 Olympians (Greece - 12 policy slots), Give Peace a Chance (India - +35 Faith in a turn from Satyagraha), Meiji Restoration (Japan - a district with 6 adjacent unpillaged districts), City of Kongo (Kongo - a size-30 capital), Viking Raid (capture a settler with a Longship), Missed That Day in History Class (clear fallout with a Roman Legion), Trans-Siberian Railroad (Russia - a road-and-trade-linked city 60+ tiles from the capital), Scythian Horse Rush (Scythia - 10 Saka Horse Archers), Nobody Expects the Spanish Inquisition (launch an Inquisition as Spain) and Epic of Gilgamesh (Sumeria - the first Great Work of Writing).",
                "Sandbox one-offs: Oneth By Land Twoeth By Sea (an Army plus 2 Armadas), Archimedes Bath (5 Tech boosts in a turn), Civ 6 Civets System (5 Civic boosts in a turn), Luftballons (a bomber nuke with its base and 9 Observation Balloons on Nena), Pizza Party! (Leonardo da Vinci in New York with Michelangelo and Donatello works and a sewer), Seven Wonders of the Post-Apocalyptic World (one WMD pillages seven wonders), Repo Man (steal a Great Work of Art uncaught), District 12 (every district plus the Colosseum in one city), Land Party (play a multiplayer game), Escort Service (put two units in a formation), If You Build It, They Will Come (6 Improvements at once), Voyage of the Mayflower (found or take a city on another continent), Everything is Awesome!!! (start a turn with an Ecstatic city), Investment Banking (start a turn besieging an enemy city), A Case for War (declare a formal war), Naming Rights (name a unit), A Revolution Without Dancing (change government), Secret Service (top-secret access with five civs at once), Silver Anniversary (6 Silver luxuries at once)."
            ]
        },

        {
            heading: "The Six Scenario Packs",
            body: [
                "Vikings, Traders, and Raiders!: three natural-wonder builds - Even Our Castles Have Castles (an Alcazar by the Alhambra), Finn MacCool's Pipe Organ (a Monastery by the Giant's Causeway) and What Do You Mean, \"Active Volcano?\" (three Aerodromes by Eyjafjallajökull) - plus the scenario wins Absolutely Nothing Rotten in the State of Denmark (Canute), More Hacksilver For Harald (Harald Hardrada), Master of the Baltic (Olof Skötkonung) and God of the Sea (on Deity).",
                "Poland (Jadwiga's Legacy): Armor of Faith (win as Jadwiga), You Are A Terrible Person (Poland - destroy a rival's half-built wonder with a Culture Bomb), then the scenario wins Winged Hussar Mastery (Stanislaw Potocki), Always Bet On Black (Mikolaj \"the Black\" Radziwill), The Grandest of Hetmans (Konstanty Ostrogski) and God-Like Legacy (on Deity).",
                "Australia (Outback Tycoon): A Smashing Victory (win as John Curtin), Wood for Sheep (Australia - a Pasture over Sheep next to a stolen Lumbermill), then Revenge of the Banana Benders (Queensland), Crow-eater Conquest (South Australia), Gumsucker Punch (Victoria), Sandgroper Sweep (Western Australia), Meanwhile, in Australia (on Deity), Quite a Crowded House (an online multiplayer game of it), Midnight Oil (an Oil Well on the final turn) and Attack of the Drop Bear (lose a unit to Australia's wildlife).",
                "Persia and Macedon (Conquests of Alexander): Never Lost a Battle (win as Alexander), King of the Four Corners of the World (win as Cyrus), Greatest Is As Greatest Does (Macedon - take a city holding both the Great Library and Great Lighthouse), Some Wine For Your Soldiers? (Persia - take the Scythian capital within 10 turns of a surprise war), Envoy Convoy (7 more wonders in the Apadana city), I Quenched Your Thirst For Blood (Scythia - retake one of your cities from Persia), and the scenario set No More Worlds To Conquer (win it), You're the Demonstrably Greatest (top rank on Deity), He Named Them All After Himself? (settle four cities in it) and Resplendent Panoply (hold a Hoplite, Saka Horse Archer, Maryannu Chariot Archer, Immortal and Varu after a conquest).",
                "Nubia (Gifts of the Nile): gg nub (win as Amanitore), Pyramid Scheme (Nubia - six adjacency bonuses on one Nubian Pyramid), Claim the Fourth Cataract (Egypt - take the Nubian capital within 10 turns of a formal war), The 25th Dynasty (Nubia - liberate the Egyptian capital), Overclocked Conviction (28 Faith per turn on Jebel Barkal), then More Wind for the Wind God (win it), Total A-Nile-hilation (Egypt on Deity), That's Some Good Kerma (Nubia on Deity), Sea of the Bow (Nubia - a coastal Mediterranean city) and From Med to Red to the Land of the Dead (Egypt - conquer Irem and Punt).",
                "Khmer and Indonesia (Path to Nirvana): Cardamom and Mangos and Elephants (win as Jayavarman VII), All Beneath the Wings of Garuda (win as Gitarja), Wat is Love (Angkor Wat plus a Wat inside it), Thalassocratophile  (Indonesia - 5 cities on tiny landmasses), Try To Snatch the Pebble From My Hand  (a Warrior Monk with 4 promotions), Raid Healer (a Guru heals 7 units at once), and the scenario set What is Mind? No Matter.  (win it), What is Matter? Nevermind.  (win it on Deity), Many Signs and Wonders  (build all 3 of its Wonders) and Do You Have A Moment To Talk About Salvation? (convert 3 opposing Holy Cities in it)."
            ]
        },

        {
            heading: "Rise and Fall",
            body: [
                "Nine leader wins: uSuthu! uSuthu! (Shaka), A Burning Splendor (Chandragupta), A small Country, a great people, so sorely tried (Wilhelmina), Lord of All Who Live in Felt Tents (Genghis Khan), From Peonies to Doricheon (Seondeok), Let gentle blood shew generous might (Robert the Bruce), Radiant Deeds, Bright as Sunshine (Tamar), Deeds of a Monarch-Scorning People (Lautaro) and Justice and Lasting Peace (Poundmaker), plus Master and Commander (a win on the Archipelago map).",
                "Leader-specific feats: Reverse Colonialism (Lautaro takes Philip II's capital), Buying your Deels and Listening to Your Throat Singing (Genghis wins Culture), Triple Seven (Wilhelmina - 7 cities and 7 Zeven de Provincien), Adamantine Confederacy (Poundmaker - an Alliance of every type), I Thought We'd Moved Past This Joke (Chandragupta nukes someone), Advanced Seminar in Astrophysics (Seondeok - a Spaceport next to a Seowon), Ibutho (Shaka - an Impi Corps from an Ikanda), Holy Righteous Queen Tamar (Tamar - every city-state follows your religion), Blackest Queen (France - build an Intelligence Agency) and Bromance (max Alliance with Gilgamesh).",
                "Systems the expansion added - Governors, Ages, Loyalty, Emergencies: Subject Matter Expert (a Governor with every promotion), Getting the Band Back Together (every Governor established before the Industrial Era), Drama Queen (3 Emergencies in one game), Curse your sudden but inevitable betrayal! (join a Betrayal Emergency), Die Another Day (neutralize a Governor with a Spy), Dark Horse (win while in a Dark Age), Victory Belongs to the Most Persevering (reach a Heroic Age), I'm going to break the wheel (three Golden Ages in a row), Desperate Times Call For Desperate Measures (a Dark Policy), Frenemy (keep an Ally's city that flipped to you) and Taxation Without Representation (England - lose a city with a Financier Governor to disloyalty).",
                "Odd one-offs: Mulligan (a Golf Course where a rival beat you to a Wonder), Circle of Life (a Fishery by the Great Barrier Reef), Extend the Olive Branch (a peace deal trading Olives), Shopping Spree (10 Shopping Malls at once), Elcano's Revenge (circumnavigate first after another player recruited Magellan), What Could Possibly Go Wrong? (improved Amber in a city with a Zoo and an Archaeological Museum) and Metroplex (fully ring your Government Plaza with your own districts or wonders)."
            ]
        },

        {
            heading: "Gathering Storm",
            body: [
                "Nine leader wins: Treasures of Heaven and Earth (Mansa Musa), Lord of Tahuantinsuyo (Pachacuti), Queen of the Byrsa (Dido), Padishah Efendim (Suleiman The Magnificent), Literally Playable (Kristina), The Sunny Way (Wilfrid Laurier), Majestrix of the Court of Love (Eleanor of Aquitaine), The Laurels of Virtues and Letters (Matthias Corvinus) and Tu Meke (Kupe), plus The Art of Telling Plain Truths (the new Diplomatic Victory).",
                "Leader and civ feats: Rivals on Ice (Russia - take a city with an Ice Hockey rink), Peacekeeper (Laurier completes an Emergency), Shield of Christianity (Hungary - a Christian civ defeats a non-Christian unit), Po-tay-toes! (Pachacuti - a Terrace Farm by 2 Aqueducts and 4 Mountains), One does not simply walk into Ngauruhoe (Maori - a Toa finds the volcano), Hajj (Mansa Musa - a 30-gold Trade Route to Mecca), Purple Reign (Dido - Move Capital on 4 continents), Nobody's Business But the Turks (Ottomans - capture and rename a capital), Smörgåsbord (Kristina - Open Air Museums in five terrain types), Meet the New Boss, Same as the Old Boss (Eleanor flips a city once held by another Eleanor) and Rock God (convert a city with a Rock Band while religion-less).",
                "New engineering and environment systems: Sid Meier's Ditchdigging Simulator (7 contiguous ship-passable land tiles via two cities and the Panama Canal), An Engineer's Dream (Canal, Dam, Aqueduct, Railroad, Golden Gate Bridge and Mountain Tunnel in one city), When Diplomacy Fails (a fully upgraded Giant Death Robot takes a city), A Man A Plan A Canal Panama (Teddy builds the Panama Canal), Surprise Attack (attack through a Mountain Tunnel or Qhapaq Nan), One Tree Hill (a Rock Band concert by a Maori Pa), Seahenge (Stonehenge lost to Coastal Flooding), Nobel-er than the Noblest (first in all three Nobel Prizes), Airing Your Grievances (a Diplomatic Victory Resolution used against a rival's progress), Let Our Powers Combine – Wait Heart is Missing! (Wind, Solar, Hydroelectric and Geothermal in one city), Toward Carbon Neutrality (Carbon Recapture 10 times in a game), Future is Now (finish the Future Era first in an 8+ player game), And the Walls Kept Tumbling Down (a Roman city loses 6 population to Vesuvius) and Real Estate Disclosures Required (a district pillaged by 3 different random events).",
                "The Black Death scenario: Eat, Drink and Be Merry (England), Santé Passe Richesse (France), Bendición (Castile), Gesundheit (the Holy Roman Empire), I'm Not Dead Yet (win after turn 80), Aggressive Strain (win after conquering five cities), Medieval Medicine (train 25 Plague Doctors) and Danse Macabre (win it on Deity).",
                "The War Machine scenario: Élan (France), Auftragstaktik (Germany), With The Army You Have (win without training a unit), Vernichtungsstrategie (Germany within 25 turns), Croix de Lorraine (France - take Metz within 5 turns) and Big Bertha (reduce and capture a full-health city in one turn). Hello Cleveland! (a Rock Concert in the city of Cleveland) rounds out the expansion."
            ]
        },

        {
            heading: "Red Death (Battle Royale)",
            body: [
                "The free Red Death mode has five scenario achievements: The Test of Royale (win it), Do Unto Others (nuke another faction), Have Them Do Unto You (get nuked), Reinforcements Have Arrived (claim a Supply Drop) and The Good Die Young (lose your last Civilian in the first ten turns).",
                "Eleven more are one per playable faction and grind across multiple games: Ashes of Time (Wanderers - explore 30 city ruins), Experience Is Everything (Preppers - 5 units with 5 promotions), It's Alive! (Mad Scientists - heal 1000 HP), Hope Springs Eternal (be defeated 5 times), From the Outer Darkness (Mutants - 20 attacks from inside the zone to outside), Getting Pruney (Pirates - 50 turns in water), U mad, bro? (Borderlords - trigger 5 Grieving Gifts), It Hungers (Cultists - 10 kills with the Undying Eye), NERDS! (Jocks - wound but not kill 5 Civilians with Hail Marys), They're coming to get you, Barbara (Zombie Beastmasters - spawn 30 Zombie Hordes) and Out of Sight, Out of Mind (Aliens - 20 cloaked attacks)."
            ]
        },

        {
            heading: "New Frontier Pass & Pirates",
            body: [
                "Leader wins added across the Pass: The stars are right (Lady Six Sky), El Libertador (Simón Bolívar), The Lion of Judah (Menelik II), One Eye in One Hundred (Basil II), Et tu, Gallia? (Ambiorix), Babylon Rocker (Hammurabi), I will not bend my back (Bà Triệu), For he on honey-dew hath fed (Kublai Khan) and The Spice Must Flow (João III).",
                "Maya & Gran Colombia and the Apocalypse mode: Court of Itzamna (Maya - a settlement by 4 luxuries), To plow the sea (Bolívar - activate all Comandante Generals across games), I'll melt with you (win any victory with Apocalypse mode on), The end of the world as we know it (be the last standing once comets fall) and The accursed share (a max-promotion Soothsayer sacrifices a max-promotion GDR).",
                "Ethiopia, the Secret Societies and Byzantium & Gaul: Battle of Adwa (Oromo Cavalry beats an off-continent Infantry), The Mask of Baphomet (all Owls of Minerva Governor promotions), Voice of Aiwass (all Hermetic Order promotions), Dead But Dreaming (all Voidsingers promotions), This Blood is the Life (all Sanguine Pact promotions), Rome is Where the Heart is (Byzantium - take Rome while it follows your religion) and Crom Laughs at Your Tanks (Gaul - a Gaesatae kills a Tank).",
                "Babylon, the Heroes mode and the Dramatic Ages / Monopolies systems: Let's Do the Time Warp Again (Babylon - 5 boosts for far-future techs), Sing, O Muse (claim every Hero across games), Clash of the Titans (your Hero kills an enemy Hero), The Brave Live Forever (recall a Hero 5 times in a game), Steel-Driving Man (recall a Hero after the Industrial Era), The Dream Team (5 Heroes at once), Things Fall Apart (Dramatic Ages - lose 4+ cities into a Dark Age), The City Ever-Shining (Dramatic Ages - a Golden Age with 20 excess Era Score), No Light Without the Dark (Georgia - a Golden and a Dark Policy at once), Top Hat and Monocle (a 100% Luxury monopoly), Jack of all Trades, Master of None (a win with 5+ Industries but no Corporations), Robber Baron (5 Luxury monopolies at once), Limited Edition (hire a Barbarian Clan unique unit), Finder's Fee (ransom 5 units from Clans in a game), Frenemies (Hire, Bribe, Incite and Raid one Clan), Ultramar Português (Portugal - Trading Posts in Brazil, India and Japan), Re-Animator (20 Zombie units at once), Well Hello Mr. Fancypants (kill a +50 Mutation Strength Zombie) and It's a Trap!!! (50+ trap damage to one unit in a turn).",
                "The Pirates scenario has its own ten: The Abyss is Hungry (Dread Pirate - 10 Walk-the-Plank sinks), Naval Supremacy (Privateer - a patron fleet twice any rival's), Port in Every Storm (Swashbuckler - visit 10 port taverns in a game), Love It When a Plan Comes Together (Hoarder - take a treasure ship while its escort is chainshot-locked), I am a Pirate King! (win it), Forced Retirement (lose it to mutiny), Liquid Assets (sink or capture a treasure ship), Mine! Mine! Mine! (win mostly on Treasure Points), I am Kind of a Big Deal (win mostly on Infamous Pirate Points) and I Want You to Hit Me as Hard as You Can (win mostly on Fightin' Points)."
            ]
        },

        {
            heading: "Leader Pass",
            body: [
                "The final thirteen are all 'win a regular game as' a Leader Pass persona: Salad Sensation (Julius Caesar), Addressing Gettysburg (Abraham Lincoln), The Self-Made Throne (Nzinga Mbande), I Will Wait (Tokugawa), Claimants of the Peacock Throne (Nader Shah), Live Yongle Reaction (Yongle), Mother’s Day (Wu Zetian), Valley of Kings (Ramses II), Dawn of a Dynasty (Sundiata Keita), Father of Korean Literature (Sejong), Partial Completionist (Ludwig II), The Power Beside the Throne (Theodora) and The Triumphs of Oriana (Elizabeth I).",
                "As with the base leaders, the quickest route is a rushed Culture or Science win on Duel at the fastest speed."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Do the base game first. One rushed Deity win clears the whole difficulty ladder; then run a series of fast Duel/Online games, each chosen to overlap a leader, a map size, a map script and an era start at once, and rotate the victory type so Mission to Mars, Nirvana, Buying Your Blue Jeans and Listening to Your Pop Music and Veni, vidi, vici all get covered. Pick up the sandbox one-offs (Naming Rights, Land Party, A Case for War, Escort Service and the rest) whenever they are convenient during those games.",
                "Then work through the six Scenario Packs - they are short, fixed-length games and the Deity variants are easier than a Deity full game. Do Rise and Fall and Gathering Storm next, again folding their leader wins into games that also chase their system feats (Governors, Ages, Emergencies, the Panama Canal builds, the Black Death and War Machine scenarios).",
                "Save Red Death and the New Frontier Pass factions/Heroes for last - several of those explicitly grind 'across multiple games' - and finish with the thirteen Leader Pass wins.",
                "Tip: a community achievement guide's 'overlap chart' is worth having open - it lists which leader, map, era-start and victory combination to force in each game so you play the fewest total games."
            ]
        }

    ]

};
