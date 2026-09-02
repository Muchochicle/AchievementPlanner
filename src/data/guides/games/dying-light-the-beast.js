// Dying Light: The Beast Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dying-light-the-beast.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3008130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary. Every non-hidden description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dying-light-the-beast-achievement-guide",
    "category": "game",
    "gameSlug": "dying-light-the-beast",
    "icon": "🧟",
    "title": "Dying Light: The Beast Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Dying Light: The Beast (16 hidden). 16 of the 42 are hidden - a mix of main-story markers and exploration/combat secrets, researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dying Light: The Beast has 42 Steam achievements, 16 of them hidden. The visible track covers completing the main story and all side quests, fully unlocking your survival and beast skill trees, activating every safe zone and transformer station, and a long list of combat and traversal feats - 500 vehicle kills, 6 revolver headshots in 20 seconds, 666 beast-power kills, a Dropkick finisher, 10,000 meters run, and fully upgrading every blueprint. New Game+, Nightmare difficulty, and the harder Restored Land Mode (with its own Dark Zone, Convoy, Safe Zone, Side Quest and full-map-reclaim achievements) make up the endgame.",
                "The 16 hidden achievements split into main-story markers (Free at Last - escape the Baron's bunker; New Friends - save the survivors at town hall; Largo Embargo - discover the Baron's sabotage; Less Obedient and Enhanced Telepathy - later story beats; There You Are! - capture 'The Beast'; and Experiment on the Loose - defeat your first Chimera) and exploration/combat secrets: winning gold in all of Travis's races (Kylin McCrane), killing a Volatile (Apex Predator), collecting all 11 Beaver collectibles (Know What 'Castor' Means?), all 8 podcasts (And Don't Forget to Wash Your Hands), the Asylum files (What Happened at the Asylum), the Fischer family clippings (Family Picture), reaching a high vantage point at the Hill of Heroes memorial (Crane on a Monument), killing the Alpha Volatile (I am The Alpha now), and completing the 'Vengeance is Mine' quest in Restored Land Mode (Pushing Through).",
                "The catalog marks it difficulty 3 and recommends 2 playthroughs - completing the base story once, then a second pass through the tougher Restored Land Mode (with its own Dark Zones, Convoys and One Life option) for its dedicated achievement set."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "6 hidden story markers (escaping the Baron's bunker, saving the survivors at town hall, discovering the Baron's sabotage, and three further story beats), completing the main story and all side quests, fully unlocking your survival and beast skills, activating every safe zone and transformer station, and the hidden Experiment on the Loose for defeating your first Chimera.",
                "The achievements here: Free at Last (Escape from the Baron's bunker.); New Friends (Save the survivors at town hall.); Largo Embargo (Discover the Baron's sabotage.); Less Obedient (Reached at a later point in the main story.); Enhanced Telepathy (Reached at a later point in the main story.); There You Are! (Capture 'The Beast'.); Glimpse into the Future (Complete the main story); Good Samaritan (Complete all side quests); Ultimate Survivor (Fully regain your survival skills); Ultimate Beast (Fully unlock your inner beast); We're Safe Here! (Activate all safe zones); And Then There Was Light (Activate all transformer stations); Experiment on the Loose (Defeat your first Chimera.)."
            ]
        },
        {
            "heading": "Combat & Crafting",
            "body": [
                "6 headshots with a revolver in 20 seconds, 500 vehicle kills, 666 beast-power kills, a Dropkick finisher, running 10,000 meters, finding every collectible, repairing weapons 50 times, killing 112 enemies with a flamethrower, fully upgrading every blueprint, installing your first weapon mod, and the hidden Kylin McCrane (gold in all of Travis's races), Apex Predator (kill a Volatile), Know What 'Castor' Means? (all 11 Beaver collectibles), and And Don't Forget to Wash Your Hands (all 8 podcasts).",
                "The achievements here: I Still Don't Approve of Mindless Fun (Kill 500 zombies with your vehicle); Gunslinger (Do 6 headshots with a revolver within 20 seconds); Craftsman (Upgrade all blueprints to their maximum); Kylin McCrane (Win gold in all of Travis's races.); Apex Predator (Kill a Volatile.); Blacksmith (Repair your weapons 50 times); Firefighter (Kill 112 enemies with the flamethrower); Hexakosioihexekontahexa  (Kill 666 enemies using your beast-like powers); Iconic (Kill an enemy using a Dropkick); Sunday Morning Run (Run at least 10,000 meters); Cabinet of Curiosities (Find all collectibles); Know What 'Castor' Means? (Collect all 11 Beaver collectibles.); And Don't Forget to Wash Your Hands (Collect all 8 podcasts.); Craftsman's Apprentice (Install your first weapon mod)."
            ]
        },
        {
            "heading": "Secrets & Endgame",
            "body": [
                "The hidden Crane on a Monument (a Hill of Heroes vantage point), What Happened at the Asylum (the Asylum files) and Family Picture (the Fischer family clippings), New Game+, your first Legend Point, an Iconic Weapon, the hidden I am The Alpha now (kill the Alpha Volatile), a Nightmare-difficulty clear, the hidden Pushing Through (the 'Vengeance is Mine' quest in Restored Land Mode), and Restored Land Mode's own Dark Zone/Convoy, Safe Zone, Side Quest, One-Life and full-region-reclaim achievements.",
                "The achievements here: Crane on a Monument (Reach the vantage point atop the Hill of Heroes memorial.); What Happened at the Asylum (Collect all 6 Asylum files.); Family Picture (Collect both Fischer family clippings.); Second Ascent (Finish the game in NewGame+ mode); The Legend Dawns (Spend your first Legend Point); Beast's Dowry (Get an Iconic Weapon); I am The Alpha now (Kill the Alpha Volatile.); The Nightmare is over (Complete the story on Nightmare difficulty); Pushing Through (Complete the 'Vengeance is Mine' quest in Restored Land Mode.); True Survivor (Complete the story in Restored Land Mode); Unbeatable (Complete the story in Restored Land Mode with the One Life option turned on); Hoarder (Complete all Dark Zones and Convoys in Restored Land Mode); Better Be Safe (Complete all Safe Zones and Safe Spots in Restored Land Mode); The Fearless Samaritan (Complete all Side Quests in Restored Land Mode); Peace Bringer (Reclaim all the regions of Castor Woods in Restored Land Mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story, picking up the 6 hidden story markers and Experiment on the Loose as you go.",
                "2. Fully unlock your survival and beast skill trees, and work through side quests and collectibles at a relaxed pace.",
                "3. Chase the combat tallies (vehicle kills, beast-power kills, revolver headshots, flamethrower kills) during normal play.",
                "4. Grab the harder secrets deliberately - Travis's races for Kylin McCrane, a Volatile and the Alpha Volatile kills, and the Hill of Heroes vantage point.",
                "5. Start New Game+ or Restored Land Mode for the endgame achievements, including a Nightmare-difficulty clear and the Restored Land Mode Dark Zone/Convoy/Safe Zone/Side Quest set.",
                "Tip: collect podcasts, Beavers, Asylum files and Fischer family clippings as you naturally explore - all four are exploration collectibles with fixed locations, so a completionist first pass avoids a tedious cleanup run later."
            ]
        }
    ]
};
