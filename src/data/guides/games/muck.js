// Muck Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/muck.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1625450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "muck-achievement-guide",
    "category": "game",
    "gameSlug": "muck",
    "icon": "🪵",
    "title": "Muck Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Muck - 1 are hidden. Covers difficulty and speed clears, no-damage challenge wins, boss kills, kill-count and collection milestones, and the 1 hidden easter-egg achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Muck has 49 Steam achievements, and 1 is hidden. The visible list covers clearing the game on each of its three difficulties (plus speed and equipment-restriction variants), no-damage challenge wins solo and with 2/4/8 players, boss kills (Chief, Gronk, Guardian, and clearing every boss), kill-count and collection milestones (mobs, cows, goblins, chests, builds, coins), and a run of odd survival feats (drowning, dying repeatedly, eating the wrong mushroom, swimming and walking long distances). The 1 hidden achievement is a developer easter egg tied to finding a hidden NPC.",
                "Nothing is missable - every kill count, distance, and death counter is a permanent save-file stat, and the challenge-run achievements (Untouchable, Caveman, Muck) can be reattempted on any future run since Muck restarts fresh each time. The genuine long poles are the highest kill-count tiers (100,000 mob kills) and the multiplayer no-damage runs with a full 8-player lobby, both of which need real time investment or a very coordinated group.",
                "Tip: several achievements are much easier in a specific lobby size (the no-damage achievements exist separately for solo, 2, 4, and 8 players) - if you are farming these with friends, agree on a target player count per run rather than mixing sizes, since a solo no-damage clear does not count toward the 2/4/8-player versions."
            ]
        },
        {
            "heading": "Difficulty, Speed & No-Damage Runs",
            "body": [
                "Clearing the game on Easy, Normal, and Gamer difficulty, a sub-10-day Gamer-mode clear and a sub-8-day clear overall, winning without any player picking up a powerup, leaving Muck (Set sail), and the no-damage challenge wins solo and with 2, 4, and 8 players on Normal difficulty or higher.",
                "The achievements here: Easy Peasy (Beat the game on easy difficulty); Learning the ropes (Beat the game on normal difficulty); Hardcore gamer (Beat the game on gamer difficulty); A gamer move (Beat the game in less than 10 days on Gamer mode); Speedrunner (Beat the game in less than 8 days); What the muck (Beat the game without any players picking up a powerup); Set sail (Leave Muck); Untouchable (Beat the game alone without taking any damage (Normal difficulty or harder)); Dream Team (Beat the game with 2 players, but no one can take any damage (Normal diff or harder)); The bois (Beat the game with 4 players, but no one can take any damage (Normal diff or harder)); Sweat and tears (Beat the game with 8 players, but no one can take any damage (Normal diff or harder))."
            ]
        },
        {
            "heading": "Kills & Collection Milestones",
            "body": [
                "The kill-count ladder (100 through 100,000 mobs), 250 buff-mob kills, 200 bow kills, 250 cow kills, defeating Big Chunk, Gronk, and Guardian, defeating every boss in a run, starting 200 battle totems, and slaying 1,000 goblins.",
                "The achievements here: Muckinator (Kill 100 mobs); Muckinator 2 (Kill 1,000 mobs); Muckinator 3 (Kill 10,000 mobs); Muckinator 4 (Kill 100,000 mobs); Underdog (Kill 250 buff mobs); Bullseye (Kill 200 enemies using bows); That's not very milk of you, sir (Kill 250 cows); David vs Goliath (Defeat big chunk); Gronk (Defeat Gronk); Guardian (Defeat Guardian); Fearless (Slay all bosses); Death Wish (Start 200 battle totems); Goblin Slayer (Slay 1000 goblins)."
            ]
        },
        {
            "heading": "Survival Feats & Deaths",
            "body": [
                "Playing Muck for the first time, dying 10/25/50/100 times, drowning, opening 500 chests, building 250 structures, crafting 1,000 coins, surviving 100 days, wielding the Night Blade, collecting 10 Milk powerups in one game, swimming 25km, reviving a teammate, eating 50 red shrooms without growing, killing a friend in Survival Mode, walking 250km, collecting all 5 gems, and jumping 10,000 times.",
                "The achievements here: Big Mistake (Play Muck for the first time); Pain and suffering (Die 10 times); This is fine (Die 25 times); Muck off (Die 50 Times); Muck this game (Die 100 Times); You're not a fish (Drown); Treasure Hunter (Open 500 chests); Architect (Build 250 builds); Illegal work (Craft 1,000 coins); Go outside (Survive for 100 days); The Black Swordsman (Wield the Night Blade); Milkman (Pick up 10 Milk powerups in one game); You're a fish (Swim 25km); Team player (Revive a teammate); The red plumber man lied (Eat 50 red shrooms without growing bigger); Salty (Kill a friend on Survival Mode); Leg day (Walk 250km); I am Inevitable (Collect all 5 gems); Phoon (Jump 10,000 times)."
            ]
        },
        {
            "heading": "Rock-Only Runs & the Chief",
            "body": [
                "Clearing the game using only a rock as a weapon/tool (Caveman), clearing it with a rock, no damage, and no powerups across the whole lobby (Muck), defeating Chief, opening the Chief's chest, and killing 100 Woodmen.",
                "The achievements here: Caveman (Beat the game using only a rock as your weapon / tool. This goes for all players.); Muck (Beat the game using only a rock, taking no damage and using no powerups. This goes for all players in lobby. (Normal or harder)); Chief (Defeat Chief); Irresistible (Open Chiefs chest); Public Enemy (Kill 100 Woodmen)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "Muck's one hidden achievement is a developer easter egg, sourced from community guides (Steam Community, the Muck Fandom wiki):",
                "Oh you don't know what Karlson is?: Find Billy, a small robot with a \":)\" drawn on its TV-shaped head, hidden somewhere on the map, and press E while looking at him. Billy is a nod to the indie FPS prototype Karlson by the same developer community. On seed 931098003, walk south from spawn and check the ground on the minimap; on any other seed, turning off \"Show Grass\" in the Graphics settings makes him much easier to spot."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game on Easy, then Normal, then Gamer difficulty for the three base difficulty clears, and try a sub-10-day and sub-8-day speed clear on a later, more practiced run.",
                "2. Work toward the no-damage challenge wins at each player count you have access to (solo, 2, 4, 8 players) on Normal difficulty or higher.",
                "3. Hunt down the named bosses (Chief, Gronk, Guardian) and defeat every boss in one run for Fearless, and open the Chief's chest.",
                "4. Grind the kill-count and collection milestones during normal play - mob kills, cow kills, goblin kills, buff-mob kills, bow kills, chests opened, builds constructed, coins crafted, days survived, distance walked and swum.",
                "5. Pick off the specific feats and the hidden achievement as opportunities appear: a rock-only clear (Caveman), a rock-only no-damage-no-powerup clear (Muck), drowning, eating 50 red shrooms without growing, reviving a teammate, wielding the Night Blade, and finding Billy for the hidden achievement.",
                "Tip: the hidden \"Oh you don't know what Karlson is?\" achievement is a hidden NPC named Billy (a small robot with a \":)\" TV-shaped head) - the fastest way to find him on any seed is to turn off \"Show Grass\" in the Graphics settings, which makes him stand out clearly on the ground, then press E on him."
            ]
        }
    ]
};
