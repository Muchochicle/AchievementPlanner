// Green Hell Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/green-hell.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   815370 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 61 of 68 ship a real,
//   official Steam description, quoted verbatim below.
// - The 7 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against the Green Hell
//   wiki and Steam Community 100% guides. The two story endings are
//   described only by their outcome label, no plot detail.
export const GUIDE = {
    "slug": "green-hell-achievement-guide",
    "category": "game",
    "gameSlug": "green-hell",
    "icon": "🌴",
    "title": "Green Hell Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in Green Hell - the survival-basics unlocks, the harder survival challenges and story completions, the animal-husbandry set, the large Spirits of Amazonia free-content block, and the 7 hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Green Hell has 68 Steam achievements, 7 of them hidden. About a third belong to the base survival game and the story; the rest were added with the free Spirits of Amazonia updates and need that content's tribes, trials and villages.",
                "Nothing is permanently missable - a survival save persists and the story can be replayed - but several achievements are long, difficulty-gated challenge runs (Green Hell difficulty clear, survive 25 days as a vegan, a 10-day pacifist run, a full metal armour Iron Man) and the two story endings are mutually exclusive per playthrough.",
                "Tip: do a relaxed Survival-mode save for the survival, farming, map and animal achievements with no time pressure, then dedicated Story runs for the endings and the harder challenge runs - and tackle the Spirits of Amazonia block as its own mini-campaign once you know the base systems."
            ]
        },
        {
            "heading": "Survival Basics",
            "body": [
                "The early unlocks: finishing the tutorial, starting a fire, surviving the first night, your first death and first tool, saving in a shelter, drinking safe water, travelling 64 km, unlocking all fire-starting tools and keeping one fire burning for five days.",
                "The achievements here: You are not prepared (Finish the tutorial); Globetrotter (Travel 64 km); I made fire! (Start a fire); Welcome to the jungle (Survive 1 night in the jungle); The first step to greatness (Die); Caveman (Craft your first tool); Making progress (Reach Max at any skill); I'm saved (Save your game in a shelter); Home Sweet Home (Build your first shelter); Fresh Water (Drink safe water); Keeper of the flame (Keep a single fire burning for over 5 days on Welcome to the jungle difficulty or higher); Pyromaniac (Unlock 4 fire starting tools)."
            ]
        },
        {
            "heading": "Survival Challenges & Story",
            "body": [
                "The harder survival goals and story completions: the Green Hell and King of the Jungle difficulty clears, the vegan, pacifist and Iron Man runs, the disease and injury feats (leeches, maggot wound, insomnia, catching everything at once, 12 unique ailments), the hunting and cooking goals, the map, collectible and farming completions, and the snowman event.",
                "The achievements here: Greedy (Complete Story mode on any difficulty with gold sack in backpack); Green Hell (Finish the game on Green Hell difficulty level); I made it (Survive 10 days on King of the Jungle difficulty or higher); Tastes like chicken... (Eat human meat); Self-defense (Kill a tribesman); Vegan! (Survive 25 days solely on mushroom and plant-based food on Welcome to the Jungle difficulty or higher); Pacifist (Survive 10 days on King of the Jungle difficulty or higher without killing animals, humans, destroying bee nests and interacting with traps); Iron Man (Create and wear a full metal armor set); Leeches, leeches everywhere (Remove 50 leeches from your body); Improvise, adapt, survive (Let maggots eat your infected wound); I don't need to sleep (Get 5 stacks of insomnia); Going back home (Make tortoise soup in it's shell); Gotcha! (Catch 9 aquatic animals); King of the jungle (Hunt a Rattlesnake, Jaguar, Puma, Caiman and 3 types of arachnids); Do you want to play with a snowman? (Find a snowman package in 3 different locations); Mr... I don't feel so good (At the same time get leeches, worm, rash, fever, poison, food poisoning, parasites, insomnia, dirt and any wound); Got to catch them all (Experience 12 unique diseases and wounds); I'm not afraid of any work (Complete 7 Challenges); Gardener (Cultivate 12 different plants); Cartographer (Unlock 60 places on the map); Librarian (Read 50 collectibles)."
            ]
        },
        {
            "heading": "Animal Husbandry",
            "body": [
                "The small animal-pen set: putting an animal in a pen, petting an animal and breeding one.",
                "The achievements here: A new friend (Put an animal into Animal Pen); Emotional support (Pet an animal); Circle of Life (Breed an animal)."
            ]
        },
        {
            "heading": "Spirits of Amazonia",
            "body": [
                "The free-update block: gaining 800 trust with the Mu'agi, Un'garaca and Habbacu tribes, the many \"help the tribe\" tasks (return kids, heal members, burn corpses and waste, help fishermen, rebuild totems, free women, find maps), completing the Spirits of Amazonia story, the three tribe Trials and the Yabahuaca Trial, discovering the three villages, completing each tribe's Legends, and the Complete all Spirits of Amazonia achievements capstone.",
                "The achievements here: Mu'agi Friend (Gain 800 trust of the Mu'agi tribe); Un'garaca Friend (Gain 800 trust of the Un'garaca tribe); Habbacu Friend (Gain 800 trust of the Habbacu tribe); Babysitter (Return 9 kids to safety); Molineria-man (Heal a Tribe Member); Rest in peace (Burn 10 Tribe Members' corpses); Cleaning volunteer (Burn 10 Toxic Waste Piles); Fishing in troubled waters (Help 5 Tribe Fishermen); Handyman (Rebuild 10 Tribe Totems); Cage opener (Free 9 Tribe Women); Map Collector (Find 5 maps); This is how it began (Complete the Spirits of Amazonia story); This is Jake Higgins... (Report back to base); The Ritual of Mu'agi (Complete the Mu'agi Trial); The Ritual of Habbacu (Complete the Habbacu Trial); The Ritual of Un'garaca (Complete the Un'garaca Trial); Are we there yet? (Reach the Yabahuaca village); Work hard, play hard (Complete the Yabahuaca Trial); Oyohua Mu'agi (Discover the Mu'agi Village); Oyohua Habbacu (Discover the Habbacu Village); Oyohua Un'garaca (Discover the Un'garaca Village); The Legends of Mu'agi (Complete all Mu'agi Legends); The Legends of Un'garaca (Complete all Un'garaca Legends); The Legends of Habbacu (Complete all Habbacu Legends); Thats the spirit! (Complete all Spirits of Amazonia achievements)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Seven achievements are hidden and ship no Steam description (the two endings are described only by their outcome label, no plot detail):",
                "The achievements here: Soul Vine (Brew and drink ayahuasca during the story.); It's all over, again (Reach the \"bad\" ending of the Story campaign.); Just, wait for me… (Reach the \"good\" ending of the Story campaign.); Casted Far Away (Find the lost volleyball hidden in the jungle (a Cast Away nod).); It's all their fault (Discover the hidden story cave.); Am I losing it? (Experience a low-sanity hallucination near a tribe.); I have it! (Obtain the cure during the Spirits of Amazonia storyline.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn the game on an easy Survival save - grab the basics, the farming/map/collectible completions and the animal-pen achievements with no pressure.",
                "2. Do the disease and injury feats (Leeches..., Improvise, adapt, survive, Mr... I don't feel so good, Got to catch them all) deliberately on any save.",
                "3. Do Story runs for the endings (one for the bad ending, one for the good) and pick up Soul Vine, the story cave and the sanity hallucination along the way.",
                "4. Do the dedicated challenge runs: Green Hell difficulty, the 25-day Vegan run, the 10-day Pacifist run and the Iron Man metal-armour run.",
                "5. Play the Spirits of Amazonia content as its own campaign for the tribe-trust, trial, village, legend and task achievements, finishing on Complete all Spirits of Amazonia achievements.",
                "Tip: Pacifist and Vegan both want a full run under specific rules from day one - start those saves knowing the restriction, since a single slip (killing an animal, eating meat) voids the attempt."
            ]
        }
    ]
};
