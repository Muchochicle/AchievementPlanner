// Call of Duty: Black Ops Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/call-of-duty-black-ops.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   42700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "call-of-duty-black-ops-achievement-guide",
    "category": "game",
    "gameSlug": "call-of-duty-black-ops",
    "icon": "🔫",
    "title": "Call of Duty: Black Ops Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in Call of Duty: Black Ops (3 hidden). Covers the campaign missions, per-level and Veteran feats, hidden intel, the core Zombies achievements and menu easter eggs, and the DLC Zombies maps (Ascension, Call of the Dead, Shangri-La, Moon).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Call of Duty: Black Ops has 68 Steam achievements and three are hidden - all famous easter eggs (the distance Ballistic Knife revive in Zombies, breaking free of the interrogation chair in the menu, and playing Zork on the menu terminal). The rest cover the campaign (mission completions, per-level challenge feats, the Hardened/Veteran clear and the grouped Veteran-mission achievements, the frag/crossbow/Sally general feats, all hidden intel), the core Zombies achievements (buy every wall weapon, the Pentagon thief, Dead Ops Arcade), and a large DLC block - the Ascension, Call of the Dead, Shangri-La and Moon Zombies maps.",
                "The catalog marks it as roughly two playthroughs - a normal campaign run for the per-level feats plus a Veteran run - and nothing is missable: missions and Zombies maps replay freely.",
                "Tip: do the per-level campaign feats on a normal run with checkpoint restarts, then a Veteran run for the difficulty achievements. The DLC Zombies achievements are the biggest time sink and are far easier with a co-op group following an easter-egg guide."
            ]
        },
        {
            "heading": "Campaign Missions & Feats",
            "body": [
                "The campaign - mission completions (Cuba, Vorkuta, Pentagon, Khe Sanh, Hue City, WMD, POW, the ship, the underwater base), the per-level challenge feats (Castro headshot, slingshot targets, dual-wield Kowloon, the Rebirth monkeys, and many more), the Hardened/Veteran clear and the grouped Veteran-mission achievements, the frag / crossbow / Sally / Grim Reaper general feats, and finding all hidden intel.",
                "The achievements here: Death to Dictators (Take down Castro with a headshot.); Sacrifice  (Ensure your squad escapes safely from Cuba.); Vehicular Slaughter (Destroy all enemies on vehicles during the prison break.); Give me liberty, or give me death (Escape Vorkuta.); Slingshot Kid  (Destroy all slingshot targets in 3 attempts.); VIP (Receive orders from Lancer.); A safer place (Sabotage the Soviet space program.); Tough Economy (Use no more than 6 TOW guided missiles to destroy the tanks in the defense of Khe Sanh.); Looks don't count (Break the siege in the battle of Khe Sanh.); SOG Rules (Retrieve the dossier and the defector from Hue City.); Raining Pain (Rack up a body count of 20 NVA using air support in Hue City.); The Dragon Within (Kill 10 NVA with Dragon's Breath rounds.); Heavy Hand (Use the Grim Reaper to destroy the MG emplacement.); Up close and personal (Silently take out 3 VC.); Double Trouble (Use only dual wield weapons to escape Kowloon.); Broken English (Escape Kowloon.); Lord Nelson (Destroy all targets and structures while making your way up the river.); Never get off the boat (Find the Soviet connection in Laos.); Pathfinder (Guide the squad through the Soviet outpost without them getting killed.); Mr. Black OP (Enter the Soviet relay station undetected.); With extreme prejudice (Get to the POW compound in the Hind using only rockets.); Russian bar-b-q (Incinerate 10 enemies with the flamethrower attachment in the POW compound.); Light Foot (Escape the ship with 2:15 left on the timer in Veteran.); Some wounds never heal (Escape the past.); I hate monkeys (Kill 7 monkeys in under 10 seconds in the Rebirth labs.); No Leaks (Make it through the NOVA 6 gas without dying on Rebirth Island.); Clarity (Crack the code.); Double Whammy (Destroy both helicopters with one Valkyrie missile from the deck of the ship.); BLACK OP MASTER (Complete the campaign on Hardened or Veteran difficulty.); Stand Down (Complete the campaign on any difficulty.); Frag Master (Kill 5 enemies with a single frag grenade in the campaign.); Sally Likes Blood (Demonstrate killer economic sensibilities by taking down 3 enemies with a single bullet); Unconventional Warfare (Use the explosive bolts to kill 30 enemies in the campaign.); Cold Warrior (Complete \"Operation 40,\" \"Vorkuta,\" and \"Executive Order\" on Veteran difficulty.); Down and Dirty (Complete \"SOG\" and \"The Defector\" on Veteran difficulty.); It's your funeral (Complete \"Numbers,\" \"Project Nova,\" and \"Victor Charlie\" on Veteran difficulty.); Not Today (Complete \"Crash Site,\" \"WMD,\" and \"Payback\" on Veteran difficulty.); Burn Notice (Complete \"Rebirth\" and \"Redemption\" on Veteran difficulty.); Closer Analysis (Find all the hidden intel.)."
            ]
        },
        {
            "heading": "Zombies: Core & Menu Secrets",
            "body": [
                "The Collector (every wall weapon in one game), the hidden distance-revive Ballistic Knife feat, the Pentagon thief, the Pack-a-Punched Crossbow kill, the Dead Ops Arcade feats, and the hidden menu easter eggs - breaking the interrogation chair and playing Zork.",
                "The achievements here: The Collector (Buy every weapon off the walls in a single Zombies game.); See Me, Stab Me, Heal Me (In Zombies, fire a Pack-a-Punched Ballistic Knife at a downed ally to revive them from a distance.); Hands Off the Merchandise (Kill the Pentagon thief before it can steal your load-out.); Sacrificial Lamb (Kill 6 zombies after getting shot by a Pack-a-Punched Crossbow bolt.); \"Insert Coin\" (Access the terminal and battle the forces of the Cosmic Silverback in Dead Ops Arcade.); Easy Rhino (In Dead Ops Arcade, use a Speed Boost to blast through 20 or more enemies at one time.); Just ask me nicely (Break free from the interrogation chair in the main menu.); Eaten by a Grue (Play the hidden text adventure Zork on the main-menu terminal (type 'zork').)."
            ]
        },
        {
            "heading": "Zombies DLC Maps",
            "body": [
                "The Ascension (lunar landers, Gersh Device, early Pack-a-Punch, fire-trap monkey), Call of the Dead (send the crew to Paradise, V-R11, Scavenger, cut the lights), Shangri-La (the focusing stone, Shrieker, Napalm zombie, the monkeys, the 31-79 JGb215) and Moon (Richtofen's grand scheme, hacking, the Receiving Area, every perk, three Pack-a-Punched weapons, the excavators, the finale) achievements.",
                "The achievements here: The eagle has landers (In Ascension, escape on all 3 lunar landers.); They are going THROUGH! (In Ascension, kill at least 5 zombies with 1 Gersh Device.); Space Race (In Ascension, Pack-a-Punch a weapon by round 8.); Chimp on the barbie (In Ascension, kill a space monkey with a fire trap.); Stand-in (In Call of the Dead, send the crew to Paradise in solo or co-op.); Ensemble Cast (In Call of the Dead, send the crew to Paradise in co-op); Stuntman (In Call of the Dead, make a zombie explode using the V-R11); Shooting on Location (In Call of the Dead, kill 10 zombies with one Scavenger shot from over 100 feet away); Quiet on the Set (In Call of the Dead, cut the lights on the Director); Time Travel Will Tell (In Shangri-La, acquire the focusing stone.); Blinded By the Fright (In Shangri-La, kill a Shrieker zombie while blinded by it.); Zomb Disposal (In Shangri-La, dispose of a Napalm zombie without it harming any players.); Monkey See, Monkey Don't (In Shangri-La, get something from the monkeys.); Small Consolation (In Shangri-La, use the 31-79 JGb215 on each type of zombie.); Cryogenic Slumber Party (In Moon, complete Richtofen's grand scheme.); One Small Hack for a Man...  (In Moon, hack something.); One Giant Leap  (In Moon, become trapped in the Receiving Area and free yourself through resurrection in co-op.); Perks in Spaaaaace!  (In Moon, purchase every perk in one game.); Fully Armed and Operational  (In Moon, acquire 3 pack-a-punched weapons at the same time.); Ground Control  (In Moon, prevent each excavator from breaching the base in one game.); Big Bang Theory  (In Moon, gain sweet, sweet, revenge.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on a normal difficulty, doing the per-level challenge feats with checkpoint restarts.",
                "2. Collect all hidden intel and do the frag / crossbow / Sally general feats.",
                "3. Do a Veteran campaign run for \"BLACK OP MASTER\" and the grouped Veteran-mission achievements.",
                "4. Play the core Zombies map for The Collector, the Pentagon thief and the menu easter eggs.",
                "5. Grind the DLC Zombies maps - Ascension, Call of the Dead, Shangri-La and Moon - with a co-op group.",
                "Tip: the Moon map achievements (Cryogenic Slumber Party, Big Bang Theory) are a long multi-step easter-egg quest - follow a video guide with a coordinated four-player team."
            ]
        }
    ]
};
