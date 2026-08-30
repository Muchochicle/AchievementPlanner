// Helldivers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/helldivers-dive-harder.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   394510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "helldivers-dive-harder-achievement-guide",
    "category": "game",
    "gameSlug": "helldivers-dive-harder",
    "icon": "🌌",
    "title": "Helldivers Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in Helldivers - none are hidden. Covers the ranks and lifetime kill counts, the difficulty and mission-challenge feats (no-alarm, no-damage, stratagems-only, speed runs), the Galactic Campaign milestones, and a run of enemy-specific and easter-egg feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "HELLDIVERS (Dive Harder Edition) has 39 Steam achievements and none of them are hidden. Some are simple progression - reaching each rank (Sergeant, Captain, Grand Lord), lifetime kill counts (10,000 and 100,000), customising your character, finishing the training, and taking part in a successful Galactic Campaign. The rest are challenge feats: a deathless difficulty-10 mission, a no-alarm stealth mission, a no-damage mission against the Cyborgs, a stratagems-only mission, a 5-minute clear, an 80%-accuracy mission, and a set of enemy-specific kills (Bug Hive Lord, Cyborg Siegemech, Illuminate Great Eye) plus a few pure easter eggs (25 capespins on the bridge, four players in an APC on a Friday).",
                "Nothing is missable - every mission type, difficulty and planet can be revisited, and the ranks and kill counts accumulate. The hard part is skill and coordination: several of the mission-challenge achievements are on difficulty 7-10 and some require a full, competent four-player team.",
                "Tip: line up a dedicated four-player group for the co-op-gated achievements (No man left behind, Never give up never surrender, the escort-all-survive, the Friday APC egg) in one session - they cannot be done solo or with the AI, and they are far easier when everyone knows the plan than when relying on random matchmaking."
            ]
        },
        {
            "heading": "Core Feats & Kill Counts",
            "body": [
                "The headline feats and progression: a deathless difficulty-10 mission, 10,000 and 100,000 lifetime kills, completing a planet in a successful Galactic Campaign, an APC/HAV roadkill on an assassination target, reaching Grand Lord and Captain rank, a Resupply-Hellpod tank kill, a capital-city defense, a primary-weapon 7-kill multi-kill, the downed-last-Helldiver Reinforce clutch, and a sub-5-minute mission.",
                "The achievements here: Hell dive (Complete a difficulty 10 or higher mission without a single death.); Making mountains out of molehills (Kill 100,000 enemies.); Peace and prosperity reigns again (Complete at least one planet in a successful Galactic Campaign.); Royal Roadkill (Kill a Bug or Illuminate assassination target by running it over with the APC or HAV.); A shining inspiration to us all! (Achieve the rank of Grand Lord (Rank 25).); The element of Supplies (Kill a Bug Tank with a Resupply Stratagem Hellpod.); Defender of Humanity (Take part in a successful defense of a capital city by completing at least one mission.); Now that is what I would call a multi-kill! (Kill 7 enemies within a very short time using only your primary weapon.); No man left behind (Extract from a difficulty 8 or higher mission with 4 players where all 4 get on the shuttle.); Never give up, never surrender (Use the Reinforce Stratagem while downed and the last Helldiver alive on a difficulty 8 or higher mission with 4 players.); Back in time for dinner (Complete a difficulty 4 or higher mission in 5 minutes or less.); A molehill of corpses (Kill 10,000 enemies.); Next time we meet, I'll probably have to salute you (Achieve the rank of Captain (Rank 13).)."
            ]
        },
        {
            "heading": "Mission Challenges & Difficulty Feats",
            "body": [
                "The self-imposed and difficulty-gated challenges: a home-planet final assault, clearing all missions on a difficulty-10+ planet, a no-alarm stealth mission, a full-survival escort, a no-damage mission against the Cyborgs, a stratagems-only mission, an 80%-accuracy mission, joining a game via matchmaking, the four-players-in-an-APC-on-a-Friday egg, Sergeant rank, customising your character, completing a mission, playing every enemy race, and playing on desert, forest and snow planets.",
                "The achievements here: Spreading Managed Democracy (Take part in a successful final assault on an enemy's home planet by completing at least one mission.); Liberating the countryside (Complete all missions on a planet with difficulty 10 or higher.); Solid Stealth Execution (Complete a difficulty 7 or higher mission without triggering any alarms.); Don't you just hate escort missions? (Successfully complete an escort objective where all 4 NPCs survive.); They call me Mr. Danmaku (Complete a difficulty 7 or higher mission against the Cyborgs without taking damage from any enemy.); It's raining Hell, hallelujah! (Complete a mission using only Stratagems.); 80% of the time, I hit every time (Complete a mission with over 300 shots fired and 80% accuracy or better.); Brothers in Arms (Join another game through the matchmaking system.); Which seat can I take? (In a 4 player game, on a Friday, have all players sitting in an APC or HAV at the same time.); You're it until you die or I find someone better (Achieve the rank of Sergeant (Rank 7).); The Helldiver's new clothes (Customize your character.); Join the Army they said (Complete a mission.); Meet interesting people they said (Play at least once against all enemy races.); See the Galaxy they said (Play at least once on a desert, a forest, and a snow planet.)."
            ]
        },
        {
            "heading": "Secrets, Enemy Feats & Grinds",
            "body": [
                "Finishing the training, 25 capespins in a row on the bridge, destroying an objective with something other than the Hellbomb, fully upgrading all non-DLC weapons and stratagems, an extraction-shuttle tank kill, facing each new enemy once, using the \"NO\" command next to a Cyborg Warlord, a volcanic difficulty-5 planet, killing a closed Illuminate Obelisk, and defeating a Bug Hive Lord, a Cyborg Siegemech and an Illuminate Great Eye.",
                "The achievements here: That which doesn't kill you, scars you for life (Finish the Training.); Dancing Queen (Do 25 capespins in a row, without moving, while on the ship bridge.); When the wrong tools do the job, are they still wrong? (Destroy a Bug Nest, Cyborg AA, or Illuminate Beacon with anything but the NUX-223 Hellbomb.); Why wasn't this standard issue? (Fully upgrade all non DLC Weapons and Stratagems.); Make Frank kill a Tank! (Kill a Bug Tank, Bug Behemoth, or Cyborg IFV by having the extraction shuttle land on it.); I'm no Zoologist, but how do you classify a 20 foot tentacle? (Face each new enemy once.); Stick it to the Man! (While in melee range from a Cyborg Warlord, use the \"NO\" communication command.); Nothing is hotter than a cup of Liber-Tea (Complete a volcanic type planet of difficulty 5 or more.); Knock-knock, who's there? DEMOCRACY! (Kill an Illuminate Obelisk while it is closed.); Add that one to the fossil record! (Defeat a Bug Hive Lord.); Resisting democracy is futile! (Defeat a Cyborg Siegemech.); It didn't SEE that coming! (Defeat an Illuminate Great Eye.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the training and enough missions to reach Sergeant, customise your character, and take part in a full Galactic Campaign for the early progression achievements.",
                "2. Do the solo-friendly challenge feats on lower difficulties: the sub-5-minute mission, the stratagems-only mission, the 80%-accuracy mission, and the various biome and enemy-race requirements.",
                "3. Grind ranks toward Grand Lord and lifetime kills toward 100,000 during normal play, and fully upgrade all non-DLC weapons and stratagems as your requisition allows.",
                "4. Get a four-player team together for the co-op achievements - No man left behind, the Reinforce clutch, the all-survive escort, the deathless difficulty-10 mission, and the Friday APC egg.",
                "5. Finish with the tough enemy-specific kills (Hive Lord, Siegemech, Great Eye) and the no-alarm and no-damage high-difficulty missions, ideally with the same coordinated team.",
                "Tip: for the no-alarm and deathless high-difficulty missions, bring a stealth-oriented loadout (the Stalwart, a jump pack, and defensive stratagems) and prioritise killing patrols before they call reinforcements - a single triggered alarm on difficulty 7+ usually snowballs into a wipe."
            ]
        }
    ]
};
