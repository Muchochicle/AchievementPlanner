// Project Winter Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/project-winter.json), whose 78 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   774861 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "project-winter-achievement-guide",
    "category": "game",
    "gameSlug": "project-winter",
    "icon": "❄️",
    "title": "Project Winter Achievement Guide",
    "summary": "A practical guide to all 78 Steam achievements in Project Winter (8 hidden). Covers the escapes and gathering achievements, the restriction runs and crafting achievements, the survivor and traitor role achievements, and the special roles, events and Practice achievements. Eight achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Project Winter has 78 Steam achievements and eight are Steam-hidden (the four single-player Practice-mode tasks, plus 'Super Traitor', 'Vigilante Justice', 'Hypocritic Oaf' and 'Double Agent'). The open seventy cover escaping on each vehicle type and with 1 through 6 survivors, gathering counters (100 trees, 75 rocks, 200 berries, 50 animals, 100 roots), restriction runs (10 no-kill games, a no-radio game, a no-ranged game, a no-animal-kills game), traitor and survivor role feats (sabotage, poisoning, disguises, truth serum), the special roles (Demon, Whisperer, Yeti) and the seasonal events.",
                "The catalog marks it difficulty 4. It is a social-deduction game, so most achievements need coordinated lobbies (or friends), and the restriction runs ('Pacifist' is 10 kill-free games) are a long grind.",
                "Tip: play regularly with a group, keep a checklist of the role and event achievements, and do the four Practice-mode hidden achievements solo up front."
            ]
        },
        {
            "heading": "Escapes & Gathering",
            "body": [
                "Escaping on the helicopter, escape pod, ground vehicle, submarine and VTOL, escaping with 1 through 6 survivors, crafting 20 firearms, chopping 100 trees, destroying 75 rocks, harvesting 200 berries, killing 50 animals, eating 100 roots, and escaping on the second radio-called vehicle.",
                "The achievements here: Get to Da Choppa (Escape on a helicopter); Gunsmith (Craft 20 firearms); Leaving on a Jet Plane (Escape on the escape pod); Jumping on the Bandwagon (Escape on the ground vehicle); Red October (Escape on the submarine); One is the Loneliest Number (Escape on a vehicle by yourself); Dynamic Duo (Escape on a vehicle with one other survivor); Third Wheel (Escape on a vehicle with two other survivors); The More the Merrier (Escape on a vehicle with three other survivors); The Fallen Will Be Remembered (Escape on a vehicle with four other survivors); No One Left Behind (Escape on a vehicle with five other survivors); Lumberjack (Chop down 100 trees); Miner (Destroy 75 rocks); Gatherer (Harvest 200 berries); Hunter (Kill 50 animals); Health Freak (Eat 100 roots); Verticality (Escape on the VTOL); You Go First (Escape on the second vehicle called from the cabin radio)."
            ]
        },
        {
            "heading": "Restriction Runs & Crafting",
            "body": [
                "A no-radio game, 10 kill-free games ('Pacifist'), a no-ranged-weapon game, a no-animal-kills game, 25 co-op console uses, the Steam-hidden 'Super Traitor', a last-one-alive game, 20 crafts and 30 cooks in one game, 10 traitor caches, 10 airdrop abilities, 10 sabotages, 10 knockdowns as a traitor, calling the rescue, being the only escapee, exploring the whole map, and 5 / 10 / 25 bonus objectives.",
                "The achievements here: Radio Silence (Do not pick up a portable radio for one game); Pacifist (Play 10 games without killing anyone); Close Quarters (Do not pick up or craft any ranged weapons for one game ); Meat is Murder (Do not kill any animals for one game); Cooperation is Key (Operate a co-op console 25 times); Hands-Off Killer (As a Traitor, have no Survivors living without directly killing any of them); Brave New World (Explore the entire map in one game); Super Traitor (As a Traitor, kill the other Traitor.); Last One Standing (Be the only one left alive); Blacksmith (Craft 20 items in one game); Exquisite Chef (Cook 30 items in one game); Clear Your Cache (Open 10 traitor caches); Clandestine (Use 10 traitor airdrop abilities); Saboteur (Conduct 10 sabotage actions); Assassin (Knock down 10 survivors as a traitor); Is There Anybody Out There? (Call the rescue from the cabin radio); Tell Our Story (Be the only one to escape in a game); Well Done (Complete 5 bonus objectives); Gold Star (Complete 10 bonus objectives); Over-Achiever (Complete 25 bonus objectives)."
            ]
        },
        {
            "heading": "Survivor & Traitor Roles",
            "body": [
                "Escaping as a survivor, killing a survivor as a traitor, the traitor team win with no caches opened, an all-blizzard game, a no-healing escape, the Steam-hidden 'Vigilante Justice', a last-minute and a sub-15-minute escape, being the last to board, an animal killed with a thrown item, the Steam-hidden 'Hypocritic Oaf', the repair-and-rescue survivor and traitor feats, the Steam-hidden 'Double Agent', 20 corpse clothes-swaps, 10 poisoned objects, 20 poisoned pot pies, 5 poison cures, and the truth-serum bunker and use achievements.",
                "The achievements here: I'm a Survivor (Escape as a survivor); Et tu, Brute? (Kill a survivor as a traitor); What's in the Box? (Complete the traitor team goal without opening a single traitor cache); Testing Physical Limits (Stay outside for the entire duration of blizzard events for one game); Tis' but a Flesh Wound (Survive to the end and escape without using any healing items); Vigilante Justice (As a Survivor, kill two Traitors in a single game.); Better Late than Never (Escape within the last minute of the round); Tight Schedule (Escape within 15 minutes from the start of the game); Women and Children First (Be the last survivor to board an escape); Home Run (Kill an animal with a thrown item); Hypocritic Oaf (Damage a player by throwing a first aid kit at them.); Little Red Hen (As a survivor, hit the 'repair' button on both objectives, and call for the rescue); The Deceit is Real (As a traitor, hit the 'repair' button on 10 survivor objectives); Double Agent (As a Survivor, kill a Traitor, swap clothes with their corpse, then kill the other Traitor.); Master of Disguise (Swap clothes with 20 corpses); Poisoner (Poison 10 interactable objects); Dark Chef (Craft 20 poisoned pot pies); Immune! (Remove the poison effect using a first aid kit 5 times); In Pursuit of Truth (Help open the truth serum bunker 10 times); Psychological Warfare (Use the truth serum 3 times on a player while playing as a traitor); The Truth Shall Set You Free (Use the truth serum 3 times on a player while playing as a survivor)."
            ]
        },
        {
            "heading": "Special Roles, Events & Practice",
            "body": [
                "Completing Basic Practice, converting 3 survivors as the Demon and as the Whisperer, a Blackout conversion, breaking and using a Rosary, being the only unconverted survivor, the Yeti achievements, the Witching Hour hunt, a Blackout flashbang, the wolf-ambush and bare-hands wolf-kill feats, 3 bunker sabotages, and the four Steam-hidden Practice-mode tasks (escape, sabotage, open bunkers, hike).",
                "The achievements here: Baby Steps (Complete Basic Practice); The Possessed (Convert 3 survivors in a single round as the Demon); Hive Mind (Convert 3 survivors in a single round as the Whisperer); Ambusher (Successfully convert a survivor during the Blackout event); Where Is Your God Now? (Break a survivor's Rosary); Begone, Devil (Use a Rosary to protect against a conversion); On the Straight and Narrow Path (Be the only survivor alive at the end of a round that has not been converted); The Elusive Cryptid (Survive to the end of a round as the Yeti); Picking a Side (Win a round with the survivors as the Yeti); Gone to the Dark Side (Complete your bonus objective and get a traitor win while playing as the Yeti); The Greatest Hunt (Take down a wild animal during the Witching Hour event); Light in the Dark (Use a flashbang during the Blackout event); Fool Me Once... (Get ambushed by wolves in bunkers twice in one game); The Grey (Kill 3 wolves with your bare hands in a single game); Bunker Buster (Sabotage 3 bunkers in a single game); Practice Makes Perfect (Escape in the single-player Practice mode.); Breaking New Ground (Complete a sabotage action in the single-player Practice mode.); Unlock and Load (Open bunkers in the single-player Practice mode.); Take a Hike (Travel a long distance on foot in the single-player Practice mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the Basic Practice tutorial and the four hidden Practice-mode tasks (escape, sabotage, open bunkers, hike) solo.",
                "2. Play regular games with a group, escaping on each vehicle type and with each survivor count.",
                "3. Chase the gathering and crafting counters, and the bonus-objective totals (up to 25).",
                "4. Do the traitor and survivor role feats as those roles come up (sabotage, poison, disguise, truth serum, 'Super Traitor', 'Double Agent').",
                "5. Play the special roles (Demon, Whisperer, Yeti) and the seasonal events for their achievements.",
                "Tip: 'Pacifist' (10 games with no kills) is the longest single grind - just play passively as a survivor and let it tick over across your normal sessions."
            ]
        }
    ]
};
