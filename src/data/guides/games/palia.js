// Palia Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/palia.json), whose 52 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2707930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "palia-achievement-guide",
    "category": "game",
    "gameSlug": "palia",
    "icon": "🏡",
    "title": "Palia Achievement Guide",
    "summary": "A practical guide to all 52 Steam achievements in Palia (0 hidden). Every achievement carries Steam's own text - the eight skill levels, the Kilima-and-Bahari collections (bugs, fish, forage, hunting, mining, cooking, decor), the five elemental Temple questlines, and the treasure hunts.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Palia has 52 Steam achievements, none hidden. It is a free-to-play cozy MMO life-sim: fish, cook, garden, mine, hunt, catch bugs, forage and make furniture in the valley of Kilima and Bahari Bay. The achievements cover reaching level 10 in each of the eight skills, the collections (all bugs and fish, and again at star quality; all forage, all Chapaa/Sernuk/Muujin hunts and their star-quality loot; every mineral and Starstone; all makeshift decor), the cooking sets (all dishes, and the Corn-and-Spice and Luna New Year connoisseur volumes, each also at star quality), building the glider and a house, the five elemental Temple questlines (each with a puzzle, a bundle and a lore/relic strand), the Grimalkin black-market purchase, a villager pin, and the three treasure hunts (Kilima caches, Bahari Bay chests, Einar's pebbles).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough (it is one persistent account). Nothing is missable; everything is a long cozy grind at your own pace."
            ]
        },
        {
            "heading": "Skills",
            "body": [
                "Reaching level 10 in Fishing, Cooking, Gardening, Mining, Hunting, Bug Catching, Foraging and Furniture Making.",
                "The achievements here: Advanced Angler (You've reached Level 10 in Fishing!); Advanced Cook (You've reached Level 10 in Cooking!); Advanced Gardener (You've reached Level 10 in Gardening!); Advanced Miner (You've reached Level 10 in Mining!); Advanced Hunter (You've reached Level 10 in Hunting!); Advanced Bug Catcher (You've reached Level 10 in Bug Catching!); Advanced Forager (You've reached Level 10 in Foraging!); Advanced Furniture Maker (You've reached Level 10 in Furniture Making!)."
            ]
        },
        {
            "heading": "Collections",
            "body": [
                "The bug, fish, forage, hunting and mining collections (and the star-quality versions), the waterlogged chest and makeshift decor, and the cooking sets (all dishes and the two connoisseur volumes, each also at star quality).",
                "The achievements here: My First Rare Bug (You caught your first rare bug!); My First Epic Bug (You caught your first epic bug!); Kilima and Bahari Bug Collector (You caught every type of bug in Kilima and Bahari!); Master Kilima and Bahari Bug Collector (You caught every type of bug at star quality in Kilima and Bahari!); My First Rare Fish (You caught your first rare fish!); My First Epic Fish (You caught your first epic fish!); Kilima and Bahari Fish Collector (You caught all types of fish in Kilima and Bahari!); Master Kilima and Bahari Fish Collector (You caught all types of fish at star quality in Kilima and Bahari!); My First Waterlogged Chest (You caught your first waterlogged chest!); Makeshift Is All Mine (You collected every Makeshift decor item!); Kilima and Bahari Forage Collector (You gathered all types of forage in Kilima and Bahari!); Chapaa Hunter (You've hunted all types of Chapaa!); Sernuk Hunter (You've hunted all types of Sernuk!); Muujin Hunter (You've hunted all types of Muujin!); A Tail of Luck (You've looted your first Star Quality Azure Chapaa Tail!); Antlers In A Haystack (You've looted your first Star Quality Proudhorned Sernuk Antlers!); Mane of the Hour (You've looted your first Star Quality Bluebristle Muujin Mane!); Every Mineral is Mine (You've acquired every type of mineral and bar in Kilima and Bahari!); All the Stars in the Ground (You've acquired every Starstone!); Palia Chef: Cooking by the Book (You've cooked a large number of unique dishes!); Master Palia Chef: Cooking by the Book (You've cooked a large number of unique dishes at Star Quality!); Palia Chef: A Dish of Spice and Corn (You've cooked a large number of unique Corn and Spicy Pepper dishes!); Master Palia Chef: A Dish of Spice and Corn (You've cooked a large number of unique Corn and Spicy Pepper dishes at Star Quality!); Palia Chef: Luna New Year (You've cooked a large number of unique Luna New Year dishes!); Master Palia Chef: Luna New Year (You've cooked a large number of unique Luna New Year dishes at Star Quality!)."
            ]
        },
        {
            "heading": "Temples & Exploration",
            "body": [
                "Building the glider and a house, the five elemental Temple questlines (Waves, Flames, Gales, Roots), the Grimalkin black-market buy, a villager pin, and the three treasure hunts.",
                "The achievements here: Glidin' High (You built your glider!); Puzzling when Wet (You've solved the Temple of the Waves!); Something's in the Water (You've filled the Bundle of the Waves!); Scholar of the Waves (You've read every lost relic in the Temple of the Waves!); Fiery Flummox (You've solved the Temple of the Flames!); Something's in the Garden (You've filled the Bundle of the Flames!); Scholar of the Flames (You've read every lost relic in the Temple of the Flames!); Bewildered in the Wind (You've solved the Temple of the Gales!); Something in the Sky (You've filled the Bundle of the Gales!); Thief of the Gales (You pilfered the Temple of the Gales for Zeki!); Scholar of the Gales (You helped Elouisa and Caleri come to a conclusion about the Silverwings!); Rooting for Meaning (You've solved the Temple of the Roots!); Something's in the Dirt (You've filled the Bundle of the Roots!); Waaaay Under the Table (You bought something from the Grimalkin Underground!); HOA-mazing (You built a house!); What Brings us Together (You acquired a villagers pin!); Kilima Caches (Found 12 of the hidden treasure chests in Kilima Village.); Plundering the Bay (Found 30 of the hidden treasure chests in Bahari Bay.); Pebbled Plunder (Found all of Einar's lost pebbles.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Level all eight skills to 10 - this happens naturally as you do a bit of everything each session.",
                "2. Work the Temple questlines (Waves, Flames, Gales, Roots) as they open - each gives a puzzle, a bundle and a lore achievement.",
                "3. Grind the base collections first (all bugs, all fish, all forage, all hunts, all minerals and Starstones), then loop back for the star-quality versions.",
                "4. Cook toward all dishes and the two connoisseur volumes, doubling up on star-quality ingredients so the star-quality cooking achievements come with them.",
                "5. Do the treasure hunts - the Kilima caches, the 30 Bahari Bay chests and Einar's pebbles - with a map, and grab the Grimalkin black-market purchase and a villager pin.",
                "Tip: always fish, mine and cook with star-quality bait/ingredients once you can afford to - the star-quality collection achievements are the real time sink, and doing everything at star quality from the start means one pass instead of two."
            ]
        }
    ]
};
