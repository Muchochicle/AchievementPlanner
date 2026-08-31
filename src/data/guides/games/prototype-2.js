// Prototype 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/prototype-2.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   115320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "prototype-2-achievement-guide",
    "category": "game",
    "gameSlug": "prototype-2",
    "icon": "🧬",
    "title": "Prototype 2 Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Prototype 2 - none are hidden. Covers the story missions, the combat and traversal feats, and the upgrades, collectibles, //BLACKNET completion and the Hard-difficulty clear.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Prototype 2 has 43 Steam achievements and none of them are hidden. Nine are story-mission completions (from \"It's an Epidemic\" to completing the game). The bulk are open-world feats: combat achievements (Black Hole and Hammerfist multi-kills, Bio-Bomb kills, Devastator double-kills, missile deflects, tank rampages, helicopter mounts), traversal feats (a half-mile without touching the ground, 25 seconds airborne, reaching the highest point), and the collectible and progression goals (all BlackBoxes, all Lairs, all Field Ops teams, all //BLACKNET dossiers, 46 Consume upgrades, fully upgrading Heller). \"Master Prototype\" is the Hard-difficulty clear.",
                "The catalog marks it as roughly two playthroughs - a normal run plus a Hard run - and nothing is missable: the open world stays available after the story and all collectibles and feats can be mopped up.",
                "Tip: do the story and all the combat feats on your first run, then clean up collectibles in free-roam and do a fast Hard playthrough for \"Master Prototype\"."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "Completing each story mission - Meet Your Maker, Resurrection, meeting Father Guerra, acquiring a Prototype Power, Natural Selection, Fall from Grace, Labor of Love, and completing the game.",
                "The achievements here: It's an Epidemic (Complete MEET YOUR MAKER.); I Want Some More (Complete RESURRECTION.); Religious Experience (Meet Father Guerra.); This is a Knife (Acquire a Prototype Power.); Project Closed (Complete a //BLACKNET operation.); The Mad Scientist (Complete NATURAL SELECTION.); Something to Live For (Complete FALL FROM GRACE.); What a Bitch (Complete LABOR OF LOVE.); Murder your Maker? (Complete the game.)."
            ]
        },
        {
            "heading": "Combat & Traversal Feats",
            "body": [
                "The open-world combat and movement feats - BlackBoxes, Field Ops teams, a 15-second Strike Team kill, consume streaks, Mutations, Black Hole and Devastator multi-kills, missile deflects, Lair destruction, tank hijack rampages, the half-mile no-ground traversal, Hammerfist and Bio-Bomb multi-kills, Pack Leader helicopter kills and vehicle weaponizing.",
                "The achievements here: Follow Your Nose (Find all BlackBoxes.); Up to No Good (Defeat all Field Ops teams.); Strike, You're Out. (Destroy a Strike Team in 15 seconds or less.); Compulsive Eater (5 consumes in 10 seconds or less.); Do the Evolution (Acquire 5 Mutations.); Just a Flesh Wound (Dismember a Brawler. ); All Together Now (10 or more kills with a single Black Hole attack.); Back Atcha! (Deflect 5 missiles at enemies using Shield Block.); Two for the Price of One (Simultaneously kill 2 Brawlers using a single Devastator.); Lair to Rest (Destroy a single Lair.); Hijack Be Nimble (Stealth hijack 5 tanks or APCs.); Road Rage (Destroy 10 Blackwatch tanks, APCs or helicopters using a single hijacked tank or APC.); Who Watches the Watchers?  (Consume 10 //BLACKNET targets.); Hard to Please (Acquire a Mutation in each of the 5 categories.); The Floor is Lava (Travel a half mile using only Wall Run, Glide, Jump and Air Dash.); Cannonball! (20 or more kills with a single Hammerfist dive attack.); You're the Bomb (10 or more kills using a single Bio-Bomb.); Sic 'em! (Destroy 5 helicopters using Pack Leader.); Over-Equipped (Weaponize 10 vehicles.); The Best Offense (Counter enemy attacks 20 times using Shield.); Arcade Action (Karate kick a helicopter.)."
            ]
        },
        {
            "heading": "Upgrades, Collectibles & Completion",
            "body": [
                "Finisher and Shield feats, the Whipfist helicopter mount, 25 seconds airborne, 10 / 30 / all 46 Consume upgrades, the highest point in the world, destroying all Lairs, all //BLACKNET dossiers, 50 stealth consumes, 50 alerts, fully upgrading Heller, and the Hard-difficulty clear.",
                "The achievements here: I Caught a Big One! (Mount a helicopter using Whipfist.); Anger Management (Destroy 5 vehicles using a Finisher. ); So Above It All (Spend at least 25 consecutive seconds in the air (helicopters don't count).); Vitamin B-rains (Acquire 10 upgrades through Consumes.); Eating Your Way to the Top (Acquire 30 upgrades through Consumes.); Finally Full (Acquire all 46 upgrades through Consumes.); Icarus (Reach the highest point in the world.); Spindler's Search (Destroy all Lairs.); //BLACKNET Hacker (Complete all //BLACKNET dossiers.); One by One (Stealth Consume 50 Blackwatch troopers.); Wanted Man (Trigger 50 alerts.); All Growed Up (Fully upgrade Heller.); Master Prototype (Complete the game on HARD difficulty.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story missions, doing the combat feats as the relevant powers unlock.",
                "2. Clean up the collectibles in free-roam - BlackBoxes, Lairs, Field Ops teams, //BLACKNET dossiers.",
                "3. Grind the Consume upgrades to all 46 and fully upgrade Heller.",
                "4. Knock out the traversal feats (half-mile no-ground, 25 seconds airborne, highest point).",
                "5. Do a fast Hard-difficulty playthrough for \"Master Prototype\".",
                "Tip: the Black Hole (10 kills), Hammerfist dive (20 kills) and Bio-Bomb (10 kills) multi-kill feats are easiest at a large Blackwatch base or Lair swarm - bait a crowd, then unload the ability."
            ]
        }
    ]
};
