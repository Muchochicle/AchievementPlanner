// Imperator: Rome Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/imperator-rome.json), whose 72 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   859580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "imperator-rome-achievement-guide",
    "category": "game",
    "gameSlug": "imperator-rome",
    "icon": "🦅",
    "title": "Imperator: Rome Achievement Guide",
    "summary": "A practical guide to all 72 Steam achievements in Imperator: Rome - none are hidden. Covers the government, research and milestone achievements, the nation-formable and regional-conquest achievements, and the wonder, mission and achievements-of-legend.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Imperator: Rome has 72 Steam achievements and none of them are hidden. A handful are generic milestones - appoint and dismiss a Dictator, survive a Civil War, research 40 inventions, reform a Tribe to a Republic, import every strategic resource. The vast majority are nation-specific goals: start as (or play as) a particular country and form a specific realm, conquer a named region, own a set of cities, or complete a mission - Form Greater Iberia, Carthago Delenda Est, Reform Alexander's Empire, the Kingdom of David, Pax Aeterna (conquer the world), and dozens more.",
                "Nothing is missable - every start is replayable and the achievements just need Ironman mode. This is a long completion because so many achievements are their own full campaign with a specific country and a demanding territorial goal, and a few (Pax Aeterna, the huge multi-region formables) are hundreds of years of play.",
                "Tip: achievements only unlock in Ironman, so commit to a country and a goal per game, and pick nations whose starting position already points at the goal (Rome for the Mediterranean feats, Macedonia for the Greek ones, the Diadochi for Alexander's Empire)."
            ]
        },
        {
            "heading": "Government, Research & Milestones",
            "body": [
                "Cincinnatus (a Dictator who stands down) and Alea Iacta Est (one who refuses), Tribal Concord and Tribal Assembly, conquering a city, settling as a Migratory Tribe, sending a pretender away as a Mercenary, competing in 10 Olympic Games, two ruler-level friends, importing every strategic resource, surviving a Civil War, four high-finesse Researchers, and researching 40 inventions.",
                "The achievements here: Cincinnatus (Appoint a Dictator, and have the same Dictator voluntarily stand down.); Tribal Concord (Whilst you have a tribal government form, change a Law.); Render Unto Caesar (Conquer a city.); A New Home (Settle a new territory as a Migratory Tribe.); Alea Iacta Est (Have an appointed Dictator refuse to give up power.); Soldier of Fortune (Send a disloyal pretender away to be a Mercenary.); Panem Et Circenses (Compete in the Olympic Games on at least 10 occasions.); International Relations (With your current ruler, acquire two other ruler-level friends.); Strategic Reserve (Import at least one of each Strategic resource to your capital province.); Triumvir (Survive a Civil War.); Legacy of Aristotle (Have four Researchers with at least 11 finesse each.); Do Not Disturb My Circles (Research 40 inventions.); Tribal Assembly (As a Tribe, enact the decision to become a Republic.)."
            ]
        },
        {
            "heading": "Nation Formables & Regional Conquests",
            "body": [
                "Forming Greater Iberia, the Palestine \"what have the Romans done\" feat, Punic Ascendance, Times New Roman, Antipater's Dream, the Antigonid sack, 9,000 pops, Form Gaul, Carthago Delenda Est, the New Kingdom of Egypt, Pyrrhic Victory, Perfidious Albion, adopting the Empire government, a 100-Civilization-Value city, the Pan-Hellenic League, Mystery Solved (Stonehenge), Soter, To the End of the World, Form Persia, Holy Fire, Reform Alexander's Empire, Garum Nobile, the Vandal and Germania feats, The Man who would be King, Ashoka's Pillars, Mare Nostrum, Megalopolis, the Boii feat, Molon Labe, The Spice Must Flow, the Kingdom of David, rednaxelA, Heraclea Persica, Tyrian Purple, and Pax Aeterna (conquer the world).",
                "The achievements here: Hispania Universalis (Form Greater Iberia); What have the Romans ever done for us? (As Rome, own at least one City with 70 or more Civilization Value in each Province within the Palestine region.); Punic Ascendance (As Carthage, own or have a subject own all of Hispania.); Times New Roman (As Rome, conquer the cities of Cariala, Italica, and Aquae Helveticae.); Antipater's Dream (As Macedonia, own the region of Greece.); The Besieger (As the Antigonids, sack the territories of Babylon, Alexandria, Lysimacheia, and Pella.); Over 9000! (Have at least 9000 pops.); The Romans are Crazy (Form Gaul.); Carthago Delenda Est (As Rome, own and sack the city of Carthage.); New Kingdom (Form Egypt, enact the Egyptian Succession law, and conquer the regions of Nubia and Syria.); Pyrrhic Victory (As Epirus, own Rome.); Perfidious Albion (Form Albion before the year AUC 500.); Imperial Ambition (Adopt the Empire government form.); Envy of the World (Have any owned city with 100 or more Civilization Value.); Pan-Hellenic League (As any Greek Republic, own the entire region of Greece.); Mystery Solved (As a Megalithic country, own at least 20 cities producing Stone, and the city of Cunetio.); Soter (As Egypt, own all of the historical wonders of the world, through conquest or construction.); To the End of the World (As the Seleucid Empire or Bactria, conquer the regions of Gandhara, Mahdyadesa, Pracya, Maru, and Avanti.); Three Great Fires (Form Persia, and own Ganzak, Nevshapur, and Gur.); Holy Fire (Desecrate Holy Sites for at least 10 different religions.); No More Worlds Left to Conquer (Reform Alexander's Empire as a successor state.); Garum Nobile (In any owned city, produce a surplus of at least 10 fish.); True Vandal (As a Vandal nation, own any territory in the regions of Mauretania, Numidia, Africa, or Cyrenaica, and occupy Rome in a war.); Germania Magna (As a Germanic nation, own every city in the regions of Germania, Germania Superior, Vistulia, and Boiohaemum.); The Man who would be King (As Bactria, become independent, and conquer the regions of Ariana, Bactria, and Gandhara.); Ashoka's Pillars (As the Mauryas, conquer all of India, convert to Buddhism, and have at least 80% Religious Unity.); Mare Nostrum (As Rome, own every city adjacent to the Mediterranean Sea.); Megalopolis (As the nation of Megalopolis, have at least 80 pops in the city of Megalopolis.); The Bois Are Back in Town (As Boi, conquer or colonize the entire region of Boiohaemum.); Molon Labe! (As Sparta, conquer and sack the city of Persepolis.); The Spice Must Flow (As Mosylon, own every Spice producing city in the world.); Kingdom of David (Starting as a Jewish nation, own the regions of Palestine and Syria, as well as the areas of Sinai, Eastern Delta, Central Delta, Memphis, Euphrates, Niniveh, Mespotamia Superior, Tigris, Babylonia, Asoristan, and Veh Kavad.); rednaxelA (Starting as a Hindu, Buddhist, or Jain nation, which is not the Mauryas, conquer Pataliputra, Babylon, Memphis, and Athens.); Heraclea Persica (Starting as Heraclea Pontica, form Persia whilist your ruler belongs to the Achaemenid dynasty.); Tyrian Purple (Form Phoenicia, own at least 500 ships, and produce a surplus of at least 5 dyes in Tyrus.); Pax Aeterna (Conquer the world.)."
            ]
        },
        {
            "heading": "Wonders, Missions & Achievements of Legend",
            "body": [
                "The Byzantium trade feat, Pentecontaetia, Laconic If, Potter to King, Pytheas' Legacy, Brennus' Revenge, Holy Pilgrim, the deified-rulers pantheon, the Ivory Tower, building a Great Wonder, The Great Destroyer (destroy 10 Great Wonders), On the Measure of the Earth, The Corners of the World, Land of the Rising Sun, the Thrace and Antigonid mission feats, Periplus of the Seas, Legio Augusta, Nikator, Hall of the Mountain King, Ktistes, the Proclamation of Tyre, and Eumenes' Footsteps.",
                "The achievements here: City of the World's Desire (Have 15 Trade Routes in Byzantium.); Pentecontaetia (As Athens, be independent and own Delos, Naxos, Kassandreia, Thaso, Chalkis, Samos, Sestos, Kition, Salamis, and Oreos before 500 AUC.); Laconic If (As Sparta, conquer and sack Pella before 480 AUC.); Potter to King (As Syracuse, conquer all of Sicily by the death of your ruler, Agathocles.); Pytheas' Legacy (As Massalia, own at least one territory in Dumnonia and Cantiacia, as well as one territory in the Scandia region, and the territory of Orcades, before 550.); Brennus' Revenge (As a Gallic Tribe, desecrate all Hellenic Holy Sites in Greece before 480 AUC.); Holy Pilgrim (As a Jewish country, own and control all original Jewish Holy Sites: Ekbatana, Oros Chorib, Apologos, Jerusalem, Ephraim, Sousa, Kadasa and Aqola.); Catch them All (As a Polytheistic country, have a State Pantheon composed entirely of deified rulers.); An Unexpected Turn (As Grania, Raumaricia, Suionia, Leuonia, Guthonia, Dania or Burgundia, build an Ivory Tower in Uppakra with all effects upgraded to Tier 4.); Wonder Builder (Build a Great Wonder.); The Great Destroyer (Playing as any nation from the Veneti, Germanic, Pretani, Gaelic, Gallic, Celt-Iberian, Iberian or Pre-Indo-European culture groups, conquer and destroy 10 Great Wonders.); On the Measure of the Earth (As any Greek nation, build Towers in Omboi and Alexandria.); The Corners of the World (As any nation, build Great Wonders in Safim, Orcades, Sadiya, Odoka and Agawe.); Land of the Rising Sun (As a country in the Anatolian Culture Group, own, or have a subject own, the regions of Asia, Phrygia, Cilicia, Bithynia et Paphlagonia, Cappadocia Taurica and Armenia.); Gazophylax This! (As Thrace, kill the ruler of the Antigonid Kingdom, by completing the “Poetic Justice” mission task.); King of the Blind (As the Antigonid Kingdom, enact the decision “Secure Antigonid Position”.); Periplus of the Seas (As Egypt, own or have a subject own the Aegean Islands, Rhodes, Sicily, Sardinia, Cyprus, Alalaiou (Dahkla), Devada, Diouscourides (Socotra), Tylos (Bahrain), Sri Lanka, Mliet/Malta, Yermena, Corsica, Gymnaesia (Baleares), Korkyra and Qarkna.); Legio Augusta (Own a Legion with X honors.); Nikator (As the Seleucid Empire, conquer Pella before the death of Seleucus Nikator.); Hall of the Mountain King (As Armenia, construct a level XV Fortress.); Ktistes (Starting as Kios, form Pontus.); Proclamation of Tyre (As a Greek Republic, have Macedon, Egypt, the Seleucid Empire, Thrace or the Antigonid Empire as a subject.); Eumenes' Footsteps (As Cappadocia, keeping Macedonian primary culture, become independent and conquer Alexandria and Babylon.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first Ironman game as Rome for the milestone feats (Dictator, Civil War, research) and the Mediterranean formables (Mare Nostrum, Carthago Delenda Est).",
                "2. Do the Diadochi achievements (Antipater, the Antigonid feats, Nikator, Reform Alexander's Empire) in games as Macedonia and the successor states.",
                "3. Do the western formables (Greater Iberia, Form Gaul, Germania Magna, Perfidious Albion) as the relevant tribes.",
                "4. Do the eastern and Indian goals (Form Persia, Ashoka's Pillars, The Spice Must Flow) as Seleucids, Mauryas and others.",
                "5. Finish with the megaprojects (Pax Aeterna, the multi-region Kingdom of David and Periplus feats), which each take a full long campaign.",
                "Tip: for the huge territorial achievements, set the game speed low only for wars and let it run fast in peacetime - Imperator's manpower and aggressive-expansion limits mean you conquer in bites with long consolidation gaps, so plan for a real-time-hours campaign per megaproject."
            ]
        }
    ]
};
