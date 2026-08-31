// Metro 2033 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/metro-2033.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   43110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "metro-2033-achievement-guide",
    "category": "game",
    "gameSlug": "metro-2033",
    "icon": "🚇",
    "title": "Metro 2033 Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Metro 2033 (2 hidden). Covers the combat and level-specific feats (including both endings), the exploration and morality achievements, and the weapon-mastery and Ranger Mode clears. Two achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Metro 2033 (the original 2010 release) has 48 Steam achievements and two are hidden - both endings. 'Enlightened' is the good ending (accumulate enough Moral Points and shoot the missile guidance laser immediately before the final cutscene), and 'If it's hostile, you kill it.' is the default Ranger ending (finish without enough Moral Points, or don't destroy the guidance system at the end). The rest are open: kill-type counts, a set of one-off level feats (the no-alarm 'Armory', the no-kill 'Frontline', the no-death 'Ghosts and Anomaly'), the exploration and 'help everyone' morality achievements, and the two Ranger Mode clears.",
                "The catalog marks it missable and roughly two playthroughs - the per-level feats are one-shot each, Moral Points accrue from small easy-to-miss actions (overhearing conversations, giving ammo to beggars, sparing enemies), and the two endings conflict on a single run.",
                "Tip: play a first run focused on stealth and positive Moral Points for 'Enlightened' and the no-kill / no-alarm level feats, then reload the final level or replay to get 'If it's hostile, you kill it.' by not shooting the guidance laser."
            ]
        },
        {
            "heading": "Combat & Level Feats",
            "body": [
                "The kill-type counts (pneumatic, revolver, knife, throwing knife, flamethrower, stationary MG, and per-creature counts), the hidden 'Enlightened' and 'If it's hostile, you kill it.' endings, and the one-off level feats - blowing the 'Cursed' tunnel, the no-kill and kill-all 'Frontline' runs, the no-alarm 'Armory', the no-death 'Ghosts' and 'Anomaly', the no-kill 'Black Station', 'DJ Artyom', 'Raider', 'Rescue Ranger', 'Quick Draw' and 'Quick-witted'.",
                "The achievements here: Air gunner (Kill 30 enemies using pneumatic weapons.); Ka-Boom! (Explode 10 enemies.); Cowboy (Kill 30 enemies using revolvers.); Demolitionist (Blow up the tunnel and airlock at 'Cursed' station.); Enlightened (Reach the 'Enlightened' (good) ending - accumulate enough Moral Points over the game, then shoot the missile guidance laser immediately before the final cutscene.); Fire in the hole (Kill 20 lurkers.); First blood (What doesn't kill you, makes you stronger.); Hedge-hopper (On the level 'Frontline' kill all of the enemy Red Army and Fascist Soldiers.); Invisible man (Complete 'Frontline' level without killing anyone.); Fugitive (Complete level 'Armory' without getting caught.); Exorcist (Complete levels 'Ghosts' and 'Anomaly' without dying.); Heavy Metal (Kill 15 enemies using stationary machine gun.); If it's hostile, you kill it. (Reach the default 'Ranger' ending - finish the game without enough Moral Points, or do not destroy the missile guidance system at the end.); Inquisitor (Kill 2 demons.); Slice & Dice (Kill 20 enemies with the knife.); Merciful (Complete the level 'Black Station' without killing any Fascist Soldiers.); Ninja (Kill 10 enemies with throwing knives.); Nosalis hunter (Kill 30 nosalises.); Old school (Kill 30 enemies with the double-barreled shotgun.); Pathoanatomist (Kill 5 amoebas.); Pyro (Kill 5 enemies with a flamethrower.); Quick-witted (Break the support and activate the chandelier in less than 20 seconds.); DJ Artyom (On the level 'Outpost' reach the radio tower and broadcast the commander's message.); Raider (On the level 'Depot' silently kill the first guard and break into the Fascist station unnoticed.); Rescue Ranger (Save a group of 'Reds' from Fascist captivity.)."
            ]
        },
        {
            "heading": "Exploration & Morality",
            "body": [
                "Killing a librarian, disarming 10 wire traps, saving 500 military-grade rounds, 25 headshots, exchanging 500 rounds at kiosks, all Ranger stashes in Dead City, destroying the Panzer, 10 weapon-shop deals, visiting every location, helping everyone ('Generous'), and the 'Metro dweller', 'Realist' and 'Sherlock' morality/collectible achievements.",
                "The achievements here: Heavy Reader (Kill a librarian.); Soft Touch (Disarm 10 wire traps.); Scrooge (Save 500 military-grade rounds.); Sniper (Make 25 headshots.); Wheeler-Dealer (Exchange 500 Military-Grade 5.45 rounds at Exchange kiosks.); Ranger (Find all Ranger stashes in Dead City 1 and 2); Quick Draw (On the level 'Hunter' kill the nosalises before they break through the ventilation grilles.); Tank Buster (Destroy fascists' Panzer.); Metro Trader (Make 10 deals in weapon shops.); Explorer (There is no place in metro you did not visit); Generous (Help the poor, a coin for the kid, medicine for the sick. You help everyone you see.); Metro dweller (A true metro citizen. You know everyone and have seen everything.); Realist (A coin for a hungry kid? Get a job.); Sherlock (Found all gold ammo, hidden throughout the stations.)."
            ]
        },
        {
            "heading": "Weapon Mastery & Ranger Mode",
            "body": [
                "The extended kill counts (30 humans with pneumatics, 50 with the automatic shotgun, 50/25 with the Volt Driver, 50 mutants with the knife, 15 with sticky grenades), killing an enemy with every weapon, and completing the game in Ranger Mode Easy and Ranger Mode Hardcore.",
                "The achievements here: Air Bender (Kill 30 humans with only pneumatic weapons.); Gunman (Kill 50 enemies with heavy automatic shotgun.); Shocking (Get 50 kills with Volt Driver.); Sterling Effort (Kill 50 mutants with your knife.); Sticks like a bur (Kill 15 enemies using sticky grenade.); Stunning (Get 25 kills with alternative fire of Volt Driver.); Survivor (Complete the game in Ranger Mode Easy.); Weaponsmith (Kill at least one enemy with each weapon available in the game.); Last Man Standing (Complete the game in Ranger Mode Hardcore.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run stealthily, sparing enemies and exploring, building positive Moral Points for 'Enlightened'.",
                "2. On that run, do the no-kill / no-alarm / no-death level feats and collect the Ranger stashes.",
                "3. Get 'Enlightened' by shooting the guidance laser before the final cutscene; then replay the finale without shooting it for 'If it's hostile, you kill it.'.",
                "4. Grind the kill-type counts and the weapon-mastery achievements on a second run.",
                "5. Do a Ranger Mode Easy run and then a Ranger Mode Hardcore run for 'Last Man Standing'.",
                "Tip: Moral Points come from small, missable actions - listen to full NPC conversations, tip performers, give ammo to beggars, and don't kill fleeing or surrendering humans."
            ]
        }
    ]
};
