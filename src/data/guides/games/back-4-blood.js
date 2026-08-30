// Back 4 Blood Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/back-4-blood.json), whose 93 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   924970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "back-4-blood-achievement-guide",
    "category": "game",
    "gameSlug": "back-4-blood",
    "icon": "🧟",
    "title": "Back 4 Blood Achievement Guide",
    "summary": "A practical guide to all 93 Steam achievements in Back 4 Blood - none are hidden. Covers the base campaign's four Acts and their Recruit/Veteran/Nightmare difficulty tiers, the Ridden-killing, teamplay and weapon feats, every map's hidden secret, and all three expansions (Tunnels of Terror, Children of the Worm, River of Blood plus Trial of the Worm).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Back 4 Blood has 93 Steam achievements and none of them are hidden. The base game covers the four-Act campaign - individual level completions plus each Act cleared on Recruit, Veteran and Nightmare difficulty - a run of combat and teamplay feats (revives, heals, card play, no-death and pacifist map runs), the special-Ridden kills, and a hidden secret to find in every single map. Roughly half the list comes from three expansions: Tunnels of Terror (the Ridden Hives), Children of the Worm (Act 5 and the No Hope difficulty), and River of Blood (Act 6 and the Trial of the Worm score mode).",
                "Nothing is missable - every level and difficulty can be replayed, and the feats accumulate across all your runs. The hard part is the difficulty ladder: Nightmare (and the expansions' No Hope) clears of every Act are a serious co-op challenge that realistically need a coordinated team and well-built card decks.",
                "Tip: do a Recruit run of everything first purely to find all the map secrets and knock out the easy feats, then focus your Veteran and Nightmare attempts on one Act at a time with a fixed team - the difficulty achievements only check that you completed each map in that Act at that level, so clearing an Act in pieces across sessions is fine."
            ]
        },
        {
            "heading": "Campaign & Difficulty",
            "body": [
                "The opening, the base game's Act 1-4 level completions, and clearing every map of each Act on Recruit, Veteran and Nightmare difficulty (Act 4 is a single finale level).",
                "The achievements here: Welcome to the Apocalypse (Good luck out there, you're gunna need it.); Paid the Toll (Complete The Devil's Return.); This Round's On Me (Complete Search & Rescue.); Breakfast Can Wait (Complete The Dark Before The Dawn.); Enemy of Mine (Complete Blue Dog Hollow.); Act 1 Recruit (Complete all Act 1 maps on Recruit difficulty or higher.); Act 1 Veteran (Complete all Act 1 maps on Veteran difficulty or higher.); Act 1 Cleaner (Complete all Act 1 maps on Nightmare difficulty.); Bob's Your Uncle (Complete The Armory.); Down the Drain (Complete Plan B.); Of Biblical Proportions (Complete Job 10:22.); Act 2 Recruit (Complete all Act 2 maps on Recruit difficulty or higher.); Act 2 Veteran (Complete all Act 2 maps on Veteran difficulty or higher.); Act 2 Cleaner (Complete all Act 2 maps on Nightmare difficulty.); Don't You Eat My Neighbor (Complete Dr. Rogers' Neighborhood.); Paved With Good Intestines (Complete Remnants.); Act 3 Recruit (Complete all Act 3 maps on Recruit difficulty or higher.); Act 3 Veteran (Complete all Act 3 maps on Veteran difficulty or higher.); Act 3 Cleaner (Complete all Act 3 maps on Nightmare difficulty.); Act 4 Recruit (Complete Act 4 on Recruit difficulty or higher.); Act 4 Veteran (Complete Act 4 on Veteran difficulty or higher.); Act 4 Cleaner (Complete Act 4 on Nightmare difficulty.)."
            ]
        },
        {
            "heading": "Combat, Teamplay & Secrets",
            "body": [
                "Ridden kill milestones and special-Ridden feats (Snitch, Breaker, Ogre), the teamplay achievements (revives, heals, ammo drops, cocoon rescues, no-incap and no-Ridden-kill map runs), weapon feats, a Swarm PvP win, and finding the hidden secret in each of the ten base-game maps.",
                "The achievements here: Good Riddence! (Kill 53,600 Ridden over your career.); Snitches Get Stitches (Kill a Snitch without it alerting the horde.); Breakfest (Kill a Monstrous Breaker after removing all of its armor.); Jugger-not (Make a Breaker hurt itself.); Brute Force (Kill an Ogre with the Howitzer.); No Time for a Nap (Revive a fallen teammate.); Hippocrates Would be Proud (Heal a teammate.); Share the Load (Drop some ammo for a teammate.); Don't Ask… (Rescue a teammate from a cocoon.); Cleanup Crew (Complete a mission without any players being incapacitated or killed.); Expanding the Arsenal (Spend your first Supply Point.); Grateful Eight (Complete a mission with each of the original Cleaners.); Squad Up (Form a party in Fort Hope.); Apocalypse Pacifist (Complete a map without any players on the team killing a single Ridden.); Dead Quiet (Complete a map without ever triggering a horde from Reekers, Birds, Snitches, or alarms.); Stacked Deck (Play 25 cards in a single match.); Jukebox Hero (Defend the jukebox in Bar Room Blitz without it breaking.); Nemesis (Safely descend the ladder in the construction zone in Resurgence.); Down, But Not Out (Kill 15 enemies while downed.); Brought a Knife to a Gunfight (Complete a level while getting at least 50 kills with melee weapons.); Smörgåsbord (Kill at least one of each non-boss Mutation.); A Humerus Weapon (Kill 10 Ridden with Bob's Arm.); Swarmed (Win a game in Swarm Mode.); Port Man Toe? (Find the secret in The Devil's Return.); Bell Hop (Find the secret in Search & Rescue.); Pallet Cleanser (Find the secret in The Dark Before the Dawn.); Easily Mist (Find the secret in Blue Dog Hollow.); Cooped Up (Find the secret in The Armory.); Dangerous To Go Alone (Find the secret in Plan B.); Cryptozoologist (Find the secret in Job 10:22.); Night of the Living Hedge (Find the secret in Dr. Rogers' Neighborhood.); Extra Credit (Find the secret in Remnants.); Mind Your Step (Find the secret in The Abomination.)."
            ]
        },
        {
            "heading": "DLC: Tunnels of Terror & Children of the Worm",
            "body": [
                "Tunnels of Terror (completing all Ridden Hives, Legendary weapons, Skull Totems, Warped Ridden, and each Hive map's secret) and Children of the Worm (Act 5 on every difficulty including No Hope, its secret, and the new-weapon kill feats - Bait Jar, Iron Claws, Bow, and the Duffel Bag / Food Buff challenges).",
                "The achievements here: Master Spelunker (Complete All Ridden Hives.); Overwhelming Power (Get a kill with a Legendary Weapon.); Totem Toter (Earn some Skull Totems.); Using Your Noggin (Kill 10 Ridden with a Skull Totem.); Unnatural Selection (Kill each of the Warped Ridden.); Left Ventricle (Find the Secret in The Nursery.); Nook, or Cranny? (Find the Secret in Sunken Passages.); Unholy Grail (Find the Secret in The Cut.); Precarious Perch (Find the Secret in Brood Lair.); Backtrack (Find the Secret in 300 Below.); Round the Riverbend (Find the Secret in Blood Stream.); Pipe Dream (Find the Secret in Caustic Cesspool.); Act 5 Recruit (Complete all Act 5 maps on Recruit difficulty or higher.); Act 5 Veteran (Complete all Act 5 maps on Veteran difficulty or higher.); Act 5 Cleaner (Complete all Act 5 maps on Nightmare difficulty or higher.); Act 5 Ace (Complete all Act 5 maps on No Hope difficulty.); Left Fork Dead End (Find the Secret in Act 5.); Jar Jar Bonks (Hit a Pusflinger with a Bait Jar.); Force Majeure Claws (Kill a Slasher with Iron Claws.); Who Snipes The Snipers? (Kill a Sniper with a Sniper Rifle.); Take A Bow (Kill a Crone with the Bow.); Smoke And Mirrors, But Without The Mirrors (Use a Smoke Grenade to become hidden while at Critical Health.); Barely Made It (Jump over a Cultist Bear Trap without triggering it.); Duffel Brothers (Bring 11 Duffel Bags to Saferooms.); Balanced Meal (Have at least five different Food Buffs active at one time.)."
            ]
        },
        {
            "heading": "DLC: River of Blood & Trial of the Worm",
            "body": [
                "River of Blood (Act 6 on every difficulty including No Hope, its secret, and the LAW and Flamethrower feats) and the Trial of the Worm score mode (first play, a 100,000 score, a x20 modifier map, killing all Sentinel variants, and beating The Harbinger without the LAW).",
                "The achievements here: Act 6 Recruit (Complete all Act 6 maps on Recruit difficulty or higher.); Act 6 Veteran (Complete all Act 6 maps on Veteran difficulty or higher.); Act 6 Cleaner (Complete all Act 6 maps on Nightmare difficulty or higher.); Act 6 Ace (Complete all Act 6 maps on No Hope difficulty.); TR's Secret Stash (Find the Secret in Act 6.); And The LAW Won (Land a final blow on a Boss Mutation with the LAW.); This Is Fine (Set an enemy on fire with the Flamethrower, while also being on fire.); A Can Of Worms (Play Trial of the Worm for the first time.); Going For Broke (Earn a score of at least 100,000 in Trial of the Worm.); The Path To Glory (Complete a map in Trial of the Worm with a total modifier of at least x20.); Constant Vigilance (Kill all variants of the Sentinel.); Hard-Boiled (Defeat The Harbinger without using the LAW.); LAW and Hors D'oeuvres (Blow up a Food Item with the LAW.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the whole base campaign plus all three expansion Acts on Recruit difficulty, using each run to find every map's hidden secret and to knock out the easy teamplay feats (revives, heals, ammo drops, cocoon rescues).",
                "2. Do the one-off feat achievements deliberately - the special-Ridden kills, the weapon-specific kills, the Swarm PvP win, and the no-incap / pacifist / no-horde map runs on an easy setting.",
                "3. Grind the Ridden kill totals and card-play milestones during normal play.",
                "4. With a coordinated team and good decks, clear each Act on Veteran and then Nightmare (and No Hope for the expansions), one Act per session.",
                "5. Finish with the Trial of the Worm score-mode achievements - a 100,000 score, a x20-modifier map, all Sentinel variants, and the no-LAW Harbinger kill.",
                "Tip: the pacifist and no-horde map achievements (Apocalypse Pacifist, Dead Quiet) are far easier on the first, short maps of Act 1 with a full team that all agree to sprint objectives and avoid shooting - attempting them on a long mid-campaign map almost always ends in an accidental horde trigger."
            ]
        }
    ]
};
