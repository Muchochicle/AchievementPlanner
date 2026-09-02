// Roots of Pacha Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/roots-of-pacha.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1245560 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "roots-of-pacha-achievement-guide",
    "category": "game",
    "gameSlug": "roots-of-pacha",
    "icon": "🦴",
    "title": "Roots of Pacha Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in Roots of Pacha (2 hidden). The two hidden achievements are a howling event and passing out in a strange place. Everything else - the Ideas tech tree, the fishing / plant / animal / bug collections, the Contribution and friendship milestones, the cave and pyramid challenges, and the endgame restorations - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Roots of Pacha has 62 Steam achievements, 2 of them hidden. It is a Stone Age take on the farming-life-sim: your clan develops shared 'Ideas' (its tech tree) as you farm, fish, tame animals and befriend villagers. The visible achievements cover the Ideas (1, 10, all), the fishing / plant-discovery / animal-taming / bug / cooking / processing collections, plant-knowledge levels, the Contribution milestones (1,000 to 1,000,000), friendship flowers and dancing with NPCs, building and upgrading your house, the animal cave challenges and dark rooms, raising the pyramid (once through fully), forming a union and having a baby, a pet, and the endgame restorations (Sun and Moon trees, all time threads).",
                "The 2 hidden achievements are 'Howling Good Time' (a howling event) and 'House Guest' (passing out in a strange place).",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable - the clan's calendar loops and every collection can be finished at your own pace."
            ]
        },
        {
            "heading": "Ideas & Collections",
            "body": [
                "The Ideas tech tree (1, 10, all), fishing, plant discovery, plant-knowledge levels, animal taming (including rare and legendary), and the bug and cooking/processing collections.",
                "The achievements here: The First Spark (Complete 1 Idea); A Bonfire (Complete 10 Ideas); Light The Way (Complete all Ideas); Make Frer Proud (Catch 1 fish); Make Inza Proud (Catch 10 fish); Make Tetih Proud (Catch all fish); Make Igrork Proud (Discover 1 plant); Make Ada Proud (Discover 12 plants); Make The Clan Proud (Discover all plants); Green Thumb (Get to level 2 knowledge of any plant); Green Hand (Get to level 5 knowledge of any plant); Green Arm (Get to level 5 knowledge for all plants); Animal Friend (Tame 1 animal); Animal Hangout (Tame 10 animals); Animal Herd (Tame 30 animals); A Rare Friend (Tame a rare animal); Legend Of The Land (Tame a legendary animal); Delightful Dish (Cook 1 dish); Chef Of The Ages (Cook 10 dishes); Culinary Innovator (Cook all dishes); Lasting Food (Process 1 product); Meals Until Next Season (Process 10 different types of products); Great Ideas (Produce 1 of every product type); Best In Show (Breed an animal to max stats); An Ancient Bond (Harness the full power of jewelry); It's a bug (Catch 1 bug); Bugged out (Catch 10 bugs); QA (Catch all the bugs); Future flora (Harvest one evolved plant); Future fauna (Breed one evolved animal)."
            ]
        },
        {
            "heading": "Village Life",
            "body": [
                "The Contribution milestones, friendship flowers and dancing with NPCs, building and upgrading your house, forming a union and having a baby, a pet, the amphitheater songs, and beating everyone at dice.",
                "The achievements here: A Person Of Note (Gain 1000 Contribution); A Passing Tale (Gain 10000 Contribution); Stories Will Be Told (Gain 100000 Contribution); A Legend Of Old (Gain 1000000 Contribution); A Friend Indeed (Gain 5 flowers with one NPC); Besties For Life (Gain 10 flowers with one NPC); Social Butterfly (Gain 5 flowers with one NPC of each clan); Talk Of The Town (Gain 10 flowers with one NPC from each clan); Start The Party (Dance with one NPC); Party Animal (Dance with all NPCs); Your Place In The World (Build your own house); Your Bigger Place In The World (Upgrade your house once); Your Big Place In The World (Fully upgrade your house); Generations (Form a union and have a baby); Fur Friend (Have a pet); Pro gamer (Beat everyone at dice); Performer (Play all songs in the amphitheater)."
            ]
        },
        {
            "heading": "Caves, Pyramid & Endgame",
            "body": [
                "The animal cave challenges and dark rooms, raising the pyramid (once through fully), the two hidden secrets, and the endgame restorations (Sun and Moon trees, all time threads).",
                "The achievements here: A Glyptodon Gathering (Complete the glyptodons cave challenge); A Wise Flight (Complete Owl's cave challenge); Playing With Platforms (Complete Monkey's cave challenge); Crushing Riddles (Complete Bear's cave challenge); Totem Rite Of Passage (Complete the final cave challenge); Ancestral Guides (Make your mark in all dark rooms); Uncover The Mysteries (Raise the pyramid once); Navigate The Unknown (Raise the pyramid twice); Investigate The Meaning (Raise the pyramid three times); Think A Little Deeper (Raise the pyramid four times); Explore The Lessons (Fully raise the pyramid); Howling Good Time (A hidden 'howling' event - trigger it by interacting with the wolves at night.); House Guest (Pass out from exhaustion in a strange place and wake up somewhere unexpected.); Seal of approval (Restore the Sun and Moon trees); Threads tied (Restore all time threads)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the clan's years, completing Ideas and doing a bit of every activity each season (fish, forage, tame, cook).",
                "2. Keep Contribution climbing toward a million and build friendship with villagers - 10 flowers with one NPC of each clan, and dance with everyone.",
                "3. Build and fully upgrade your house, form a union and have a baby, and get a pet.",
                "4. Clear each animal's cave challenge and all dark rooms, and raise the pyramid step by step to fully raised.",
                "5. Finish the collections (all fish, all plants, all bugs, all dishes, all products) and the endgame restorations, and trigger the two secrets (howl with the wolves at night; let yourself pass out from exhaustion).",
                "Tip: the collection 'all' achievements are seasonal - many plants, fish and bugs only appear in one season - so do a full sweep each season rather than assuming you have caught everything, and keep an eye on plant-knowledge levels, which need repeated harvests of every crop."
            ]
        }
    ]
};
