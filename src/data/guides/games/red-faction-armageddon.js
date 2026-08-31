// Red Faction: Armageddon Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/red-faction-armageddon.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   55110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "red-faction-armageddon-achievement-guide",
    "category": "game",
    "gameSlug": "red-faction-armageddon",
    "icon": "🪐",
    "title": "Red Faction: Armageddon Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Red Faction: Armageddon - none are hidden. Covers the campaign missions and Hard/Insane clears, the vehicle, weapon and Magnet Gun combat feats, the Infestation horde mode, and the Path to War DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Red Faction: Armageddon has 58 Steam achievements and none of them are hidden. Eighteen are campaign progression and the Hard and Insane difficulty clears. A large block covers combat feats - vehicle kill counts (L.E.O. exoskeleton, Marauder Scout Walker, Inferno GX, Mantis), the Impact, Shockwave, Berserk, Nano Forge and Magnet Gun feats, the Maul melee feats, and the audio-log and salvage collectibles with the full upgrade buy-out. Six cover the Infestation horde mode (waves 1-10, 1-20, 1-30, one wave on every map, 25 revivals, a 4-player run past wave 9 with no bleed-outs). The last ten are the Path to War DLC.",
                "The catalog marks it as roughly two playthroughs - a normal run for the feats plus an Insane run - and nothing is missable: chapters replay from mission select and every counter is cumulative.",
                "Tip: do the collectibles (40 audio logs, 200 salvage piles, 25,000 salvage) and the combat feats on your first Normal run, then a fast Insane run for the difficulty achievement."
            ]
        },
        {
            "heading": "Campaign & Difficulty",
            "body": [
                "Completing each campaign chapter from \"Unto The Breach\" through the finale, and finishing the Single Player game on Hard and Insane difficulty.",
                "The achievements here: Unto The Breach (Gain entry into the Terraformer.); Secrets Long Buried (Remove the Seal.); We're Not Alone (Make it back to civilization.); Vanguard (Escort the convoy.); Things Fall Apart (Destroy the Water Filtration Plant.); Survival Of The Fittest (Make it to the surface.); I'm All You've Got (Defend the Red Faction.); Weather The Storm (Destroy the Jamming Devices.); Family Business (Defeat the Mantis.); Must Go Faster (Travel to the Marauder homelands.); Old Friends, Older Enemies (Safely escort Winters through the depths.); Plan B (Find out how to reach the lair.); Knock, Knock (Open up the secret entrance.); Losses (Make it through to the lair.); One Big, Ugly Motha… (Defeat the source of it all.); That Coulda Gone Better (Finish the Single Player game on Hard Difficulty.); I Need A Nap (Finish the Single Player game on Insane Difficulty.); Breathe Easy (Put an end to the threat, once and for all.)."
            ]
        },
        {
            "heading": "Vehicle, Weapon & Combat Feats",
            "body": [
                "The vehicle kill counts (L.E.O., Marauder Scout Walker, Inferno GX, Mantis), 40 audio logs, 200 salvage piles, 25,000 salvage, an upgrade ring and every upgrade, a cheat, and the Impact, Shockwave, Berserk, Nano Forge, Magnet Gun and Maul combat feats.",
                "The achievements here: Crusader (Kill 175 enemies while in the L.E.O. exoskeleton.); Ooooh Yeah! (Kill 5 enemies with one L.E.O. shoulder bash.); Martian Drive-By (Kill 100 enemies while in the Marauder Scout Walker.); Hit 'N Run (Kill an enemy by ramming them with the Inferno GX.); Exterminator (Destroy 100 Pods while piloting the Mantis.); Chronicler (Listen to 40 Audio Logs.); Salvager (Find 200 piles of salvage.); Nanergy! (Gather 25,000 total salvage.); Money Well Spent (Buy out any one Upgrade ring.); Martian Can Opener (Buy every Upgrade.); Cheater! (Buy a Cheat.); It's All In The Wrist (Send an enemy at least 30 meters with Impact.); Haymaker (Kill 5 enemies in one shot with Impact.); Zero G War (Kill 50 Shockwaved enemies before they hit the ground.); Hold Still (Kill 6 enemies in one use of Shockwave.); Lock And Load (Keep Berserk active for at least 21 seconds in one use.); Back At Ya! (Make an enemy kill themselves while shooting at your Shell.); Liftoff (Send an enemy at least 50 meters with the Magnet Gun.); Martian Matchmaker (Fire an enemy into another enemy with the Magnet Gun.); Catch! (Use the Magnet Gun to fling debris BACK at a Tentacle.); In. The. Face! (Kill one of each enemy type with the Maul.); What Is Best In Life? (Perform melee finishers on 25 Creepers (single player only).); Boom Goes The Dynamite (Kill 2 other enemies with a single exploding Berserker.); Crack Shot (Kill a Wraith before it re-stealths.)."
            ]
        },
        {
            "heading": "Infestation Mode",
            "body": [
                "Finishing waves 1-10, 1-20 and 1-30 on any map, at least one wave on every map, 25 Revivals, and a 4-player game past wave 9 with no bleed-outs.",
                "The achievements here: Soldier (Finish waves 1 through 10 on any map in Infestation.); Commando (Finish waves 1 through 20 on any map in Infestation.); Honorary Mason (Finish waves 1 through 30 on any map in Infestation.); Bug Hunt (Finish at least one wave on each map in Infestation.); Field Surgeon (Perform Revival 25 times in Infestation.); All For One, One For All (Finish a 4 player Infestation game beyond wave 9 without anyone bleeding out.)."
            ]
        },
        {
            "heading": "Path to War DLC",
            "body": [
                "The Path to War expansion - the mission-completion achievements, 20 kills each with the Shard Cannon and Sharpshooter, 10 turret-turnaround kills, ending the three-way battle, and killing Mallus.",
                "The achievements here: Air Superiority (Clear a safe path to the Terraformer for Hale. (Path to War DLC Only).); Bird of Prey (Allow no Red Faction to survive your attacks on their mountain base. (Path to War DLC Only)); Swath of Destruction (Reunite Sgt. Winters with the Red Faction. (Path to War DLC Only)); Armored Cavalry (Rescue the pinned-down Red Faction soldiers. (Path to War DLC Only)); Nuke It from Orbit (Wipe out the Cultist military camp. (Path to War DLC Only)); Wrecking Ball (Get 20 kills with the Shard Cannon. (Path to War DLC Only)); A Taste of their Own (Eliminate 10 enemies using one of their own turrets. (Path to War DLC Only)); Triple Threat (End the three-way battle between yourself, the aliens, and the Cultists. (Path to War DLC Only)); Stick Around (Get 20 kills with the Sharpshooter. (Path to War DLC Only)); Full of Malice (Kill Mallus. (Path to War DLC Only))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Normal, collecting the 40 audio logs and 200 salvage piles and buying every upgrade.",
                "2. Do the vehicle, Magnet Gun, Impact and Shockwave combat feats during that run or via mission select.",
                "3. Do a fast Insane-difficulty run for \"I Need A Nap\".",
                "4. Play Infestation to wave 30, doing one wave on every map and 25 Revivals along the way.",
                "5. Play the Path to War DLC for its missions and weapon feats.",
                "Tip: the Magnet Gun feats (fling an enemy 50m, enemy-into-enemy, debris at a Tentacle) are the fiddliest - set them up deliberately in an open area rather than hoping they happen in a firefight."
            ]
        }
    ]
};
