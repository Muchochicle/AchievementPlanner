// Sackboy: A Big Adventure Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sackboy-a-big-adventure.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1599660 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sackboy-a-big-adventure-achievement-guide",
    "category": "game",
    "gameSlug": "sackboy-a-big-adventure",
    "icon": "🧶",
    "title": "Sackboy: A Big Adventure Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in Sackboy: A Big Adventure (10 hidden). Covers the world bosses and story, the combat and level feats, the multiplayer and customisation achievements, and the collectibles, mastery and endgame achievements. Ten achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sackboy: A Big Adventure has 46 Steam achievements and ten are Steam-hidden - the world bosses (Soaring Summit, Colossal Canopy, Kingdom of Crablantis, Interstellar Junction), the two Vex fights, two Uproar story beats, and two multiplayer feats (a simultaneous slap, a team Topsy Turver win). The open thirty-six are combat feats (30 minions defeated each way), level feats (Gold ranks on Remix and Knitted Knight trials, a no-Whirltool level, 3,000 slide points), a big multiplayer block, and collectibles and mastery ('Amazing Ace' for 30 no-death levels, 'Golden Boy' for Gold on 50 scoreboards, all level goals, and 'String it Together' - Gold on the ultimate Knitted Knight trial).",
                "The catalog marks it difficulty 4. 'String it Together' (Gold on the brutal final trial), 'Golden Boy' (50 Gold scoreboards) and 'Master of One' / 'Multi-Master' (every level goal) are the skill and grind walls; the story and most feats come with normal play.",
                "Tip: play the story for the boss and Uproar achievements, mop up dreamer orbs and stickers for the mastery goals, and save the hardest Knitted Knight trials for last."
            ]
        },
        {
            "heading": "World Bosses & Story",
            "body": [
                "'Big Adventurer' (100%), the Steam-hidden bosses of The Soaring Summit, Colossal Canopy, Kingdom of Crablantis and the Interstellar Junction, both Steam-hidden Vex fights, the two Steam-hidden Uproar story beats ('Daydream Believer'), all stickers in a single World, and discovering the Trials of the Knitted Knights.",
                "The achievements here: Big Adventurer (Even Scarlet didn't get all the achievements, you're truly a Knitted Knight of legend.); You've got potential, squire! (Defeat the Master of the Uproar boss on The Soaring Summit (the first world's boss).); Metameric Malady (Complete 'Centipedal Force', the final level of the Colossal Canopy, defeating its boss.); Sonar So Good (Complete 'The Deep End', the final level of the Kingdom of Crablantis, defeating the Bringer of Nightmares.); Crash Override (Complete 'Nervous System', the final level of the Interstellar Junction, cleaning up N.A.O.M.I's code.); Vex Vanquisher! (Defeat Vex in 'Until Vex Time', near the end of the Centre of Craftworld.); Verified Vex Vanquisher! (Beat Vex for the fourth and final time, destroy the Topsy Turver and complete the story.); Daydream Believer (Push back the Uproar for the first time (a story beat).); Book of Dreams (Collect all the stickers in a single World.); Squired Up (Discover the Trials of the Knitted Knights.)."
            ]
        },
        {
            "heading": "Combat & Level Feats",
            "body": [
                "Throwing 30 minions to their doom, 30 ranged kills, 10 simultaneous multi-kills, 30 bounce kills, 30 stuns, your first Costume, a Gold on a Remix level and a Knitted Knight Trial, finishing Highs and Glows without the Whirltool, 3,000 slide points, 30 full Timed Score Bubble chains, four mid-air actions in one jump, and holding a Boomblebee Hive for 60 seconds.",
                "The achievements here: Out of bounds (Pick up and throw 30 of Vex's minions to their doom.); Pop 'n' Lobber (Defeat 30 of Vex's minions from a distance.); Multitasking (Defeat multiple minions simultaneously 10 times.); Bounder (Defeat 30 of Vex's minions by bouncing on them.); Stunner (Stun 30 of Vex's minions.); Fashionista! (Complete your first Costume.); Re-Mix-Master (Earn a Gold rank in any Remix level.); Knights of Gold (Earn a Gold rank in any Knitted Knight Trial.); Cut it out! (Complete Highs and Glows... without throwing the Whirltool.); Slide Away (Over the course of your adventure, collect 3000 points while sliding.); Bubble Binger (Collect a full chain of Timed Score Bubbles 30 times.); Gymnastic Fantastic (While in the air, perform four actions before touching the ground.); BEE! ARGH! BEE! (Pick up, and hold on to, a Boomblebee Hive for 60 seconds.)."
            ]
        },
        {
            "heading": "Multiplayer & Customisation",
            "body": [
                "Topping the multiplayer scoreboard 20 times, a custom Emote, saving a custom costume, a dance party, a high five, clobbering a chum as champ, stealing an item, the Steam-hidden simultaneous slap, a Gold trial while carrying a Sackperson, a Teamwork Level, most Collectabells 20 times, and reviving fallen friends.",
                "The achievements here: Buddy Beater (In multiplayer, get the top score on the scoreboard 20 times.); Thespian (Create your own custom Emote in Zom Zom's shop then show the world.); Icon of Style (Save a custom-made costume to your Wardrobe.); Let's twist again... (In multiplayer, start a dance party with your friends.); Up high! (In multiplayer, high five with a friend.); Sore Winner (In multiplayer, clobber one of your chums as the champ.); Stop! Thief! (In multiplayer, snatch an item from the clutches of another player.); Slap Attack (In multiplayer, have two players slap each other at exactly the same time.); Beast of burden (In multiplayer, get gold in any Knitted Knight Trial while carrying another Sackperson.); Fun Multiplied (In multiplayer, complete a Teamwork Level.); Capitalist (In multiplayer, snag the most Collectabells in a level 20 times.); Saviour (In multiplayer, save your fallen friends from certain doom!)."
            ]
        },
        {
            "heading": "Collectibles, Mastery & Endgame",
            "body": [
                "All of Gerald's secret spots, every fish, paintbrush and cocktail umbrella, 30 no-death 'Ace' levels, 10 multiplayer Ace goals, 300 costume pieces, a golden level badge, all goals for 10 levels, the Steam-hidden 'Best Friends Forever' (team Topsy Turver win) and 'Wonderplane Workout', Gold on 50 scoreboards ('Golden Boy'), and Gold on the ultimate trial ('String it Together').",
                "The achievements here: Naturalist (Find all of Gerald's secret spots.); Player's Player (Find and pick up every fish, paintbrush and cocktail umbrella on your journey.); Amazing Ace (Ace 30 levels by completing them without dying.); Best Friends (In multiplayer mode, earn 10 Ace level goals.); Walk-in Wardrobe (Fill your wardrobe with 300 costume pieces.); Master of One (Get a golden level badge by completing all the Level Goals for a single level.); Multi-Master (Achieve all the level goals for 10 different levels.); Best Friends Forever (In multiplayer, defeat the Topsy Turver (the final boss) as a team.); Wonderplane Workout (Mop up the last remnants of the Uproar (a late-game story beat).); Golden Boy (Earn Gold on the scoreboard in 50 different levels!); String it Together (Get a Gold on the Knitted Knight’s ultimate trial.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story - the four world bosses, both Vex fights and the two Uproar beats (all Steam-hidden) unlock as you progress.",
                "2. Collect stickers, dreamer orbs, Gerald's spots and the fish/paintbrush/umbrella set as you go.",
                "3. Do the combat-feat counters (30 minions each way) and the no-death 'Ace' levels.",
                "4. Do the multiplayer achievements with a friend or second controller (slap, high five, dance party, team Topsy Turver win).",
                "5. Grind Gold scoreboards to 50 and all level goals, and finish with Gold on the ultimate Knitted Knight trial ('String it Together').",
                "Tip: 'Golden Boy' (Gold on 50 scoreboards) and 'String it Together' need real platforming skill - do them after you've learned the game's movement on the mastery runs, not early."
            ]
        }
    ]
};
