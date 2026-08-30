// Serious Sam 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/serious-sam-4.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   257420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "serious-sam-4-achievement-guide",
    "category": "game",
    "gameSlug": "serious-sam-4",
    "icon": "🔫",
    "title": "Serious Sam 4 Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Serious Sam 4 - none are hidden. Covers the sixteen campaign missions, the beat-the-game and S.A.M. upgrade goals, the weapon and kill-feat challenges, and the full set of optional side missions across Italy and France.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Serious Sam 4 has 54 Steam achievements and none of them are hidden. Sixteen of them are simply campaign-mission completion markers as Sam Stone fights across Italy and France, and one more is for beating the game on any difficulty. The rest split between combat-feat challenges (headshot and melee kill counts, weapon-specific trick kills, a 100-enemy mininuke, killing enemies with the environment or with each other) and the game's optional side missions, each of which has its own named achievement.",
                "Nothing is missable - the mission select lets you replay any level for its side missions and feats, and kill-count achievements accumulate across all your play. The side missions are the part most easily overlooked: they are optional objectives found off the main path in most campaign levels, and several achievements exist only to reward completing them.",
                "Tip: turn on the S.A.M. and side-mission markers and do a thorough first playthrough that detours for every side mission and S.A.M. upgrade - that single pass covers all sixteen mission markers, the beat-the-game and 'unlock 10 S.A.M.s' achievements, and roughly half the side-mission achievements, leaving only the trick-kill feats to mop up afterwards."
            ]
        },
        {
            "heading": "Campaign Missions",
            "body": [
                "The sixteen story-mission completion markers, from the opening 'Regression' through the assault on Rome, the French countryside, Carcassonne, the Oil Rig and the finale 'From Earth With Love'.",
                "The achievements here: Regression (Get knocked on the head and remember how you got here.); Ecclesiastical Extraction (Save the rookie. Find Father Mikhail. See the sights.); Roman Holiday (Get together with your friends and kill something big.); Volcano Antagonizer (Die HAARP With A Vengeance.); Hot Hot Hot (Run away from an angry volcano you foolishly antagonized.); All Roads Lead To Rome (Head into Rome. Ditch Rodriguez.); Are You Not Entertained? (Party like it's 199.); La Nonna é Mobile (Meet a powerful granny.); Holy Driver (Ride the Popemobile to victory.); Harvest Noon (Don't fear the reaper. Be the reaper.); See Carcassonne And Die (Cross the French countryside and get very cross.); The Informant? (What if you could talk to the monsters?); Class Reunion (Navigate the citadel of Carcassonne. Start reassembling your team.); The Last Human (Get justice. Get the Holy Grail. Get screwed over.); Oil's Well That Ends Well (Escape the Oil Rig.); From Earth With Love (Send Mental a message he won't forget.)."
            ]
        },
        {
            "heading": "Combat Feats & Progress",
            "body": [
                "Beating the game on any difficulty, unlocking S.A.M.s (one, then 10 in a playthrough), destroying propaganda drones, and a long run of trick-kill challenges: headshot and melee kill counts, one-shot Werebulls, a 100-enemy mininuke, Time Warp multi-kills, dual-wielded double shotguns, combine-harvester kills, Psychotropic Grenade infighting, and low-health kill streaks.",
                "The achievements here: Serious Sam (Beat the game on any difficulty.); Get Serious (Unlock 10 S.A.M.s in a single playthrough.); Oh, Shut Up (Destroy 10 propaganda drones.); Bullseye (One-shot kill 3 Werebulls with a shotgun.); Tear 'n' Rip (Melee a big enemy.); Max Pain (Kill 5 enemies during a single Time Warp slowdown.); Atomic Wedgie (Use the mininuke to eliminate 100 enemies at once.); Heads Up! (Kill 100 enemies with a headshot.); Pow Pow! (Kill an Aludran Reptiloid using nothing but a pistol.); Megabarf (Kill a Belcher using Belcher collateral barf damage.); Spinal Tap (Kill 11 different enemies using melee attacks.); All Kleer (Kill 50 healthy Kleers with a direct double shotgun hit.); Enemy of My Enemy (Make 20 enemies kill each other using Psychotropic Grenades.); Say Hello To My Mini Friend (Spend 1000 minigun rounds while firing continuously.); Harvest Festival (Harvest 100 enemies with a combine harvester.); No Surrender (Kill 5 enemies in a row while your health is below 10 HP.); Spread the Joy (Kill 3 enemies with a double shotgun blast.); This Seems Safe (Unlock a S.A.M.); Veni Vidi Witchy (Kill a Witchbride using C4.); Quadruple the Gun (Kill 20 enemies while dual wielding double shotguns.); Dismemberfest (Dismember 50 enemies with cannonballs.)."
            ]
        },
        {
            "heading": "Side Missions",
            "body": [
                "The optional side missions found off the main path across the campaign - helping Massimo Murena, recovering stolen keys and artifacts, Dr. Stein's and Professor Kiesel's errands, the black-hole weapon, saving Gabriella, the text adventure on the Oil Rig, and the rest - each with its own achievement.",
                "The achievements here: The Spirit of Roma (Fight alongside Massimo Murena.); Cultist Stimulator (Recover a key stolen by a cultist.); For the Cause (Find out what happened to Alessandro.); That Belongs In A Museum (Recover the alien artifact located by Dr. Stein.); That Burning Sensation (Collect scorched aliens for Professor Kiesel.); Hard Science Fiction (Get a weaponized black hole, using science.); Signature Move (Sign Secchi's rifle.); You Have Been Wormed (Assist Dr. Vermetti in his war on worms.); Where's That Girl (Make sure Gabriella is OK.); Mushroom Surprise (Find out what happened to the English airman.); Southern Gentleman (Assist a couple of young ladies out hunting.); Fulbert le Fou (Discover Fulbert's great invention.); Serious Art (Protect humanity's treasures from invaders with no taste.); The French Achievement (Achievement is your middle name.); Classic Hero Stuff (Save a princess. Doesn't get more classic than that.); Quality Time (Go on a date with Hellfire.); Brass Lantern (Finish a text adventure. On an oil rig. During an alien invasion.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign straight through, detouring for every side mission and S.A.M. upgrade you can find - this covers all sixteen mission markers, Serious Sam (beat the game), Get Serious (10 S.A.M.s), and a large share of the side-mission achievements in one pass.",
                "2. Keep the trick-kill feats in mind while you play: aim for headshots, melee big enemies, one-shot Werebulls with the shotgun, and use Time Warp and Psychotropic Grenades when crowds appear.",
                "3. After the campaign, use mission select to return to any levels whose side missions you missed and complete them for their achievements.",
                "4. Grind the remaining kill-count feats (headshots, minigun rounds, combine harvester, dismemberment) on an enemy-dense level replay.",
                "5. Do the one-off gimmick achievements - the 100-enemy mininuke, the black-hole weapon, and the Oil Rig text adventure (Brass Lantern) - deliberately on the levels that contain them.",
                "Tip: the 100-enemy mininuke (Atomic Wedgie) is easiest during one of the large horde arenas late in the campaign - hold the mininuke until a wave has fully spawned and clustered rather than firing it at the first big group you see."
            ]
        }
    ]
};
