// Dead Island: Definitive Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dead-island-definitive-edition.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   383150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dead-island-definitive-edition-achievement-guide",
    "category": "game",
    "gameSlug": "dead-island-definitive-edition",
    "icon": "🏝️",
    "title": "Dead Island: Definitive Edition Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Dead Island: Definitive Edition - none are hidden. Covers the melee and weapon-type kill feats, the island exploration, four-act story completion, levelling, quest and collectible milestones, the co-op partner achievements, and the Bloodbath Arena DLC wave-survival challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dead Island: Definitive Edition has 57 Steam achievements and none of them are hidden. The main game's set is built around combat feats (kill streaks with no damage, weapon-type kill counts for blunt, edged and firearms, bare-fist and vehicle kills, severing 100 limbs), exploration and progression (explore the whole island, complete all four acts, reach level 50, finish 75 quests, find 120 collectibles), and co-op (playing with different partners, completing quests as a full team). The last ten achievements are the Bloodbath Arena DLC's wave-survival challenges.",
                "Nothing is missable - the island stays open, chapter and quest progress carries into free-roam, and the co-op achievements can be done at any time with willing partners. One achievement, How many days exactly?, simply requires launching the game 28 days after you first started it, so it unlocks on a real-world timer regardless of play.",
                "Tip: spread your kills across weapon types from the start - blunt, edged and firearm kill counts each want 250, and Tae Kwon Leap wants 25 bare-fist kills - because retroactively grinding a neglected category at level 50 against tougher zombies is far slower than just varying your loadout throughout the campaign."
            ]
        },
        {
            "heading": "Combat & Weapon Feats",
            "body": [
                "Kill-streak and no-damage feats, weapon-type kill counts (blunt, edged, firearm, bare fists, vehicle), setting groups of zombies on fire, headshot and single-blow streaks, killing with 10 different melee weapons, a grenade kill, travel distances on foot and by vehicle, and severing 100 limbs.",
                "The achievements here: I want one of those (Customize 25 weapons.); One is all I need (Kill 5 Infected in a row with a single blow.); Can't touch this (Use a hammer to kill a series of 15 zombies without taking damage.); Humanitarian (Kill 50 human enemies.); Light my fire (Set 10 zombies on fire simultaneously.); 10 heads are better than 1 (Kill 10 zombies in a row with headshots.); A taste of everything (Kill a zombie with 10 different melee weapons.); To put it bluntly (Kill 250 zombies using blunt melee weapons.); Hack & slash (Kill 250 zombies using edged melee weapons.); Guns don't kill but they help (Kill 250 zombies using firearms.); Tae Kwon Leap (Kill 25 zombies with your bare fists.); Karma-geddon (Kill 50 zombies using a vehicle.); Catch! (Kill an Infected with a grenade blast.); Road Trip (Drive a total distance of 10 kilometers.); Cardio (Travel a distance of 20 kilometers on foot.); Tis but a flesh wound! (Sever 100 limbs.)."
            ]
        },
        {
            "heading": "Exploration, Progression & Co-op",
            "body": [
                "Exploring the entire island, healing milestones, completing all four acts (and act 1 with four characters), the 28-day real-time achievement, finishing 75 quests, reaching levels 10/25/50, finding 60 and 120 collectibles, saving besieged people, the co-op partner and team-quest achievements, 100 Fury kills, crafting customised weapons, and the special-enemy kills (Suicider, Ram, Butcher).",
                "The achievements here: There and back again (Explore the entire island.); Gesundheit! (Heal yourself with a medkit 100 times.); Everybody lies (Use a large medkit to heal an injury of 5% or less.); Hell in paradise (Complete act 1.); No raccoons in here (Complete act 2.); King of the jungle (Complete act 3.); Banoi Redemption (Complete act 4.); Right 4 Life (Complete act 1 with 4 different characters.); How many days exactly? (Play Dead Island - Definitive Edition at least 28 days after starting it for the first time.); Busy, busy, busy (Finish 75 quests cumulatively.); Learning the ropes (Reach level 10.); Dedicated student (Reach level 25.); School of hard knocks (Reach level 50.); Knock, knock (Breach a locked door with the first blow.); Gotta find'em all (Find 60 collectibles.); Nearly there (Find 120 collectibles.); Savior (Save 5 people besieged by zombies.); Need a hand? (Join another player's game.); People Person (Play with 10 different co-op partners for at least 15 minutes each.); Originality (Play in a co-op team of 4 different playable characters.); Together in the light (Complete 5 quests in a single co-op game with the same partners.); Going steady (Complete 25 quests while playing with at least one co-op partner.); Ménage à trois (Complete 5 quests with 3 co-op partners.); Rageman (Kill 100 enemies with Fury attacks.); Warranty Void if Used (Create a customized weapon.); Steam Punk (Create weapons to rival the gods of fire or thunder.); First! (Kill a Suicider with a grenade.); A very special day (Kill 250 zombies with modified weapons.); Oh, no you don't (Kill a Ram using tackle skill.); Ah! Spoiled meat! (Kill a Butcher using an axe.); Rootin' Tootin' Lootin' (Loot 5 Exceptional Weapons.)."
            ]
        },
        {
            "heading": "Bloodbath Arena DLC",
            "body": [
                "The Bloodbath Arena DLC's four combat arenas: playing an arena in co-op, an explosive-and-fire combo kill, surviving 5 waves with fists only, killing one of every enemy type in a round, surviving 5 waves in each arena, 15 consecutive waves with analog controls and with each character, 10 waves with custom weapons only, 30 waves with a co-op player, and reaching wave 30 for Death Incarnate.",
                "The achievements here: Wave and Smile (Play any Arena in co-op.); Extreme Firefighting (Set 5 enemies on fire and then kill them with explosives.); Out of honey? Chew bees! (Survive 5 waves using only your fists and legs.); Complete a set (During a single round kill an Infected, Suicider, Ram, Butcher, Floater, Walker.); Looking for trouble (Survive 5 waves in each of the 4 Arenas.); Stick it to the enemy (Survive 15 consecutive waves using the analog combat controls.); Gladiator school (Survive 15 consecutive waves with each of the 4 characters.); Fancy (Survive 10 consecutive waves using only custom weapons.); Morituri te salutant (Survive 30 consecutive waves with at least one co-op player.); Death Incarnate (Survive wave 30.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the four-act campaign with one character, varying your weapon types (blunt, edged, firearm, fists) as you go so all the kill-count achievements progress together.",
                "2. Explore thoroughly for the whole-island achievement and the 120 collectibles, finish side quests toward the 75-quest total, and push your character to level 50.",
                "3. Do the specific combat feats deliberately - the no-damage hammer streak, 10 headshots in a row, 5 kills in a single blow, 50 vehicle kills, 100 limbs, and the Suicider/Ram/Butcher special kills.",
                "4. Team up for the co-op achievements: complete act 1 with four different characters, play with 10 different partners for 15+ minutes each, and finish quests as a full team.",
                "5. Play the Bloodbath Arena DLC and work through its wave-survival challenges, ending with 30 consecutive waves for Death Incarnate.",
                "Tip: How many days exactly? is on a real-world 28-day timer from your first launch - just make sure you open the game again after four weeks; it does not require you to be playing continuously or to have made any progress in between."
            ]
        }
    ]
};
