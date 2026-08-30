// Trine 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trine-2.json), whose 97 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   35720 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trine-2-achievement-guide",
    "category": "game",
    "gameSlug": "trine-2",
    "icon": "🧙",
    "title": "Trine 2 Achievement Guide",
    "summary": "A practical guide to all 97 Steam achievements in Trine 2 - none are hidden. Covers the main campaign's level completions and physics trick feats, the per-level experience and chest collectibles, the hardcore/hard and solo-character challenges, and the entire Goblin Menace expansion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trine 2: Complete Story has 97 Steam achievements and none of them are hidden. Roughly half are straightforward: completing each level of the main campaign and the Goblin Menace expansion, and collecting all experience pickups and all chests in each level (plus the whole-game collector achievements). The rest are physics-sandbox trick feats built around the three heroes' abilities - stacking conjured boxes into towers, catching arrows on the Knight's shield, freezing and shattering enemies, bouncing on conjured objects - and a set of challenge-run achievements (hardcore mode on hard difficulty, and completing levels with only a single character).",
                "Nothing is missable - every level can be replayed freely from the level select with your unlocked abilities, and collectible progress is tracked per level. The two \"platinum\" achievements simply unlock when you have earned every other base-game (or every Goblin Menace) achievement.",
                "Tip: do the trick-feat achievements on early levels where you have room and time to set them up - many need a specific object arrangement (a three-piece tower, stacked frozen enemies, a box bouncing on a bouncy surface) that is fiddly under combat pressure, so replay a calm section and take your time rather than attempting them on a first playthrough."
            ]
        },
        {
            "heading": "Main Campaign: Levels & Trick Feats",
            "body": [
                "The main story's 13 level completions and game completion, plus the physics trick feats - plank surfing, environmental-hazard kills, box towers, arrow catches, ice shatters, grapple swings, hammer bounces, and the friendly-fire and bubble feats.",
                "The achievements here: Surfboard Master (Stand on a plank floating on a single airflow for four seconds); I Didn't Do It (Make goblins die of three different environmental hazards in a single level); Flying Solo (Complete a whole level playing one character only); A Floral Feast (Feed carnivorous plants with three or more different kinds of treats); Icebreaker (Shatter three frozen enemies within one second); Hammer Havoc (Kill an enemy with a thrown hammer bouncing at least once before kill); Dirty Tactics (Get at least 10 enemies killed by other enemies' actions in a single level); Bouncy Bouncy (Stand on a conjured box bouncing on any bouncy surface for 10 seconds); A Hail of Arrows (Shoot 3 arrows in the air and catch them all with the Knight's shield); High Rise (Construct a tower made of eight objects and stand on top of it); Cirque de Zoya (Using grapple, swing around an object and reattach grapple again without touching any surface); This Wasn't the Plan (Make a bubble sink for three seconds); Trine 2 hard (Earn all (original) Achievements in Trine 2); I want more! (Complete the game); Into the Story (Complete The Story Begins); Wild in Wilderness (Complete Forlorn Wilderness); Mudproof Hero (Complete Mudwater Dale); March Through the Marsh (Complete Mosslight Marsh); Treehouse Adventure (Complete Petrified Tree); No More Lizard Soup (Complete Shadowed Halls); Hostile Gardening (Complete Hushing Grove); Funs with Fungi (Complete Mushroom Caves); Shrooms and Glooms (Complete Mushroom Murk); Pearl Diver (Complete Searock Castle); Sinister Plumbing (Complete Eldritch Passages); Hot and Cold (Complete Icewarden Keep); Through Dangers Untold (Complete The Final Chapter)."
            ]
        },
        {
            "heading": "Main Campaign: Collectibles & Challenges",
            "body": [
                "Collecting all experience pickups and all chests in each main-campaign level (and the whole-game Master Collector / Lost and Found), the hardcore-on-hard challenge achievements, and the solo-character feats - completing levels using only Amadeus, only Zoya, only Pontius, a no-damage level, and specific Pontius tower and Knight's-charge feats.",
                "The achievements here: The Story Begins Collector (Collect all experience pickups in The Story Begins); Forlorn Wilderness Collector (Collect all experience pickups in Forlorn Wilderness); Mudwater Dale Collector (Collect all experience pickups in Mudwater Dale); Mosslight Marsh Collector (Collect all experience pickups in Mosslight Marsh); Petrified Tree Collector (Collect all experience pickups in Petrified Tree); Shadowed Halls Collector (Collect all experience pickups in Shadowed Halls); Hushing Grove Collector (Collect all experience pickups in Hushing Grove); Mushroom Caves Collector (Collect all experience pickups in Mushroom Caves); Mushroom Murk Collector (Collect all experience pickups in Mushroom Murk); Searock Castle Collector (Collect all experience pickups in Searock Castle); Eldritch Passages Collector (Collect all experience pickups in Eldritch Passages); Icewarden Keep Collector (Collect all experience pickups in Icewarden Keep); Secrets of Forlorn Wilderness (Find all chests in Forlorn Wilderness); Secrets of Mudwater Dale (Find all chests in Mudwater Dale); Secrets of Mosslight Marsh (Find all chests in Mosslight Marsh); Secrets of Petrified Tree (Find all chests in Petrified Tree); Secrets of Shadowed Halls (Find all chests in Shadowed Halls); Secrets of Hushing Grove (Find all chests in Hushing Grove); Secrets of Mushroom Caves (Find all chests in Mushroom Caves); Secrets of Mushroom Murk (Find all chests in Mushroom Murk); Secrets of Searock Castle (Find all chests in Searock Castle); Secrets of Eldritch Passages (Find all chests in Eldritch Passages); Secrets of Icewarden Keep (Find all chests in Icewarden Keep); Rosabel's Secrets (Find all chests in The Final Chapter); Sharp-Eyed (Collect all experience pickups in any level); Master Collector (Collect all experience pickups in the game); Lost and Found (Find all chests in the game); Snowman (Freeze two enemies and stack them on top of each other); Challenge is My Middle Name (Complete any level with hardcore mode on and difficulty set to hard); Walk in the Park (Complete the game on hard using hardcore mode); O Solo Mio (Complete a level with only Amadeus); Like a Shadow (Complete a level with only Zoya); Alone and Mighty (Complete a level with only Pontius); Trine Kaput? (Complete a level with only Amadeus, a level with only Zoya and a level with only Pontius); Catch This! (Kill an enemy with an airborne object tossed with the Knight's charge ); All Too Easy! (Finish a level without taking any damage (Not the Tutorial)); The Leaning Tower of Pontius (Build a three-piece or three-character tower where lowest part is Pontius and his shield, tower must stand at least five seconds)."
            ]
        },
        {
            "heading": "Goblin Menace Expansion",
            "body": [
                "The Goblin Menace expansion: its six level completions, its per-level experience and chest collectibles (and expansion-wide collectors), its own hardcore-on-hard and solo-character challenges, and its trick feats - cannonball rebounds, sandworm-versus-sandworm kills, makeshift rafts, Kitesail glides, catapult launches, and stacked box captures.",
                "The achievements here: No Time to Change Clothes (Complete The Heroes Return); Sunstroke (Complete Deadly Dustland); Indigestion (Complete Belly of the Beast); Grand Theft Aviation (Complete Brackenridge Rise); I'm Walking in the Air (Complete Cloudy Isles); Happy Reunion (Complete Goblin Machinations); The Heroes Return Collector (Collect all level experience in The Heroes Return); Deadly Dustland Collector (Collect all level experience in Deadly Dustland); Belly of the Beast Collector (Collect all level experience in Belly of the Beast); Brackenridge Rise Collector (Collect all level experience in Brackenridge Rise); Cloudy Isles Collector (Collect all level experience in Cloudy Isles); The Treasurer (Find all chests in the Goblin Menace expansion); Sharpeyed II (Goblin Menace Expansion) (Find all level experience in any level in the expansion); Goblin Menace Collector (Collect all level experience in the Goblin Menace expansion); Trine 2 Hard II (Goblin Menace Expansion) (Earn all Achievements in Trine 2: The Goblin Menace); Wicked Collection (Capture three different types of enemies inside boxes and stack them on top of another); Grand Collector (Collect all experience pickups in both the main game and the Goblin Menace expansion); Cannonball Rebound (Kill a grenadier goblin with its own cannonball); Mutually Assured Destruction (Make a sandworm kill another sandworm); Pontius Baseball (Launch an object with Knight's magnetic shield and break it with hammer before the object touches the ground); Rise to the Challenge (Complete any level of the Goblin Menace expansion with hardcore mode on and difficulty set to hard); Trine Kaput For Good? (Complete each expansion level using only one character); Easy as Pie (Complete the Goblin Menace expansion on hard using hardcore mode); Play Catch (Throw a box with Pontius' magnetic shield and catch it or have another player catch it); Rafting (Create a makeshift raft of three separate parts and have a goblin sail it for five seconds); Pontius Transportation Company (Glide for five seconds with Kitesail Shield while having an object or character on top of the shield); This is Trine! (Kick five enemies of the same kind into a bottomless pit with the Thief's grappling hook kick or the Knight's Kitesail Shield glide kick); Off You Go (Capture a goblin in a Monster Prison and then launch it with a catapult); Secrets of the Heroes Return (Find all secret chests in The Heroes Return); Secrets of Deadly Dustland (Find all secret chests in Deadly Dustland); Secrets of Belly of the Beast (Find all secret chests in Belly of the Beast); Secrets of Brackenridge Rise (Find all secret chests in Brackenridge Rise); Secrets of Cloudy Isles (Find all secret chests in Cloudy Isles)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main campaign once on Normal difficulty for the level-completion achievements, picking up experience and chests as you go.",
                "2. Replay levels from the level select to finish every experience and chest collection (aiming for Master Collector and Lost and Found), and set up the trick feats one at a time in calm sections.",
                "3. Do the solo-character achievements (a level each with only Amadeus, Zoya and Pontius) and a no-damage level.",
                "4. Do a hardcore-mode run on hard difficulty - at least one level for the individual achievement, then the full game for Walk in the Park.",
                "5. Repeat the whole pattern for the Goblin Menace expansion: levels, collectibles, trick feats, solo-character runs, and the hardcore-on-hard clear. The two platinum achievements unlock automatically once each set is complete.",
                "Tip: for the hardcore full-game runs (Walk in the Park, Easy as Pie), lean on Amadeus - conjuring platforms to skip hazards entirely is safer than fighting through them, and hardcore mode only ends the run on death, not on taking damage."
            ]
        }
    ]
};
