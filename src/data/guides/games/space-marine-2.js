// Space Marine 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/space-marine-2.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2183900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community 100% guides, TrueAchievements, PSNProfiles/
//   PlayStationTrophies, GameFAQs, and the games' wikis), noted in the
//   Hidden Achievements section. Every other achievement's description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "space-marine-2-achievement-guide",
    "category": "game",
    "gameSlug": "space-marine-2",
    "icon": "🛡️",
    "title": "Space Marine 2 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Space Marine 2 - 16 are hidden. Covers Titus's single-player campaign story markers, the co-op Operations class mastery and objective feats, the per-class combat challenges and faction kill counts, and the Eternal War PvP playlists.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Warhammer 40,000: Space Marine 2 has 50 Steam achievements, 16 of which are hidden. Fifteen of the hidden ones are progress markers - ten trace Lieutenant Titus's campaign against the Tyranids and the forces of Chaos, and five more are primary-objective completions in the co-op Operations missions (killing the Hive Tyrant, eliminating a Daemonhost, and so on). None of them are cryptic; they simply unlock as you clear the relevant mission. The visible list covers Operations class mastery, per-class combat challenges, faction kill counts, and the Eternal War PvP playlists.",
                "The campaign has no difficulty-based achievements and nothing in it is missable, so a single relaxed playthrough clears every story marker. The real length in this list comes from the visible achievements: reaching max level on a class, weapon and ranged weapon; a Ruthless-difficulty Operations clear; 41,000 lifetime kills; and playing enough matches across all three Eternal War modes.",
                "Tip: the sixteenth hidden achievement, Why Is It Always You Three?, is easy to lock yourself out of noticing - it only triggers when you return to the Battle Barge after a specific campaign report and walk over to the Chaplain, then stand and let his entire conversation play out. Leaving early or skipping the dialogue means you have to reload to hear it again."
            ]
        },
        {
            "heading": "Campaign, Progression & Kill Milestones",
            "body": [
                "General progression that spans all modes: marking every enemy type, performing unique Finishers, collecting Dataslates, Righteous Fury kills, the big lifetime kill count, and the core Operations-mode milestones (a Ruthless clear, reaching max level on a class and its weapons, a full armour set, pickups, and the nova-cannon warhead objective).",
                "The achievements here: Purge Them All (Mark every enemy type); The Art of Dismemberment (Perform 50 unique Finishers); Data Mining (Collect all Dataslates); Furious Retribution (Kill 100 enemies using Righteous Fury); Outbound Payload (Deliver a nova cannon warhead to the Tyranid position); Valour Crest (Complete any Mission in Operations mode on Ruthless Threat Level); Strategic Specialty (Reach the maximum Level for one Class); Sharpest Edge (Reach the maximum Level for one Melee Weapon); Strongest Shot (Reach the maximum Level for one Ranged Weapon); Bespoke (Customise a full Armour set for one Class); Principia Imperialis (Find 200 pickups in Operations mode); A Blight to Be Purged (Kill 20,000 enemies (all game modes combined))."
            ]
        },
        {
            "heading": "Operations: Class Mastery & Combat Challenges",
            "body": [
                "The per-class Operations challenges - one signature feat for each of the six classes (Tactical, Sniper, Heavy, Assault, Bulwark, Vanguard) - plus precise combat encounters against specific enemies (cancelling a Ravener grab, ambushing a Lictor, perfect-parrying a Terminator) and the Tyranid and Chaos faction kill counts.",
                "The achievements here: Master of Arsenal (As a Tactical, kill 25 enemies with every available Primary Weapon); Dead Center (As a Sniper, make 250 Headshots); Immovable Object (As a Heavy, kill 500 enemies while in Heavy Stance); Thunderous Impact (As an Assault, hit 500 total enemies with Ground Pound); Guardian's Might (As a Bulwark, kill 100 enemies with every available Melee Weapon); Lightning Strike (As a Vanguard, perform 100 Gun Strikes); Unhand My Brother! (Force a Ravener to release a grabbed Squad Member); One Ugly Xenos (Bring down a Lictor before it attacks from an ambush); An End to Heresy (Kill a Lesser Sorcerer while he's reviving a Rubric Marine); Know No Fear (Break a Scarab Occult Terminator's Melee Combo Attack with 2 Perfect Parries in a row); Field of Battle (Kill 100 enemies using environmental hazards); Silence (Kill 5 enemies while they are conducting a Call for Reinforcements); Xenos Exterminator (Kill 1000 Tyranids in Operations mode); The Thousand Dead Sons (Kill 1000 Chaos servants in Operations mode); Still a True Son of the Emperor (Kill 41,000 Enemies (all game modes combined))."
            ]
        },
        {
            "heading": "Eternal War (PvP) & Final Trophy",
            "body": [
                "The competitive Eternal War playlists: winning a match, winning with every class, playing ten matches each of Annihilation, Capture and Control and Seize Ground, a five-kill streak, and the final \"do everything\" completion achievement.",
                "The achievements here: Glorious Victory (Win any match in Eternal War mode); Tactical Genius (Win a match in Eternal War mode with every Class); War Machine (Play 10 Annihilation matches in Eternal War mode); Unwavering Faith (Play 10 Capture and Control matches in Eternal War mode); Dominator (Play 10 Seize Ground matches in Eternal War mode); Merciless (Achieve a streak of 5 kills without dying in Eternal War mode); Defender of Humanity (Overcome every challenge and achieve ultimate victory)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Ten hidden achievements are unmissable campaign story markers - The Die Is Cast, Unleash the Cannon, Chaos All Along, Target Acquired, Vital Asset, Enemy Revealed, My Face Is My Shield, Break of Dawn, Into the Abyss and I'll Be Watching You - and unlock as you clear each mission. Crude but Effective, Sic Semper Tyrannis, Voice in the Dark, Douse the Flames and Resurrection are the primary-objective completions of co-op Operations 01-05. Why Is It Always You Three? is a one-off Battle Barge dialogue.",
                "The hidden achievements: The Die Is Cast (Complete the campaign prologue, in which Titus is reinstated and rises again as a Primaris Space Marine.); Unleash the Cannon (Complete the campaign mission in which you retake the anti-aircraft batteries and destroy the Tyranid hive ship.); Crude but Effective (In co-op Operations, deploy the acid bomb in the promethium well to destroy the Tyranid swarm (Operation 01: Inferno).); Chaos All Along (Complete the campaign mission that uncovers the Chaos presence on Kadaku.); Target Acquired (Complete the campaign mission that pinpoints the location of Adept Morias Leuze and defends the facility core.); Vital Asset (Complete the campaign mission that rescues Adept Morias Leuze from the Chaos assault.); Sic Semper Tyrannis (In co-op Operations, kill the Hive Tyrant (Operation 02: Decapitation).); Voice in the Dark (In co-op Operations, eliminate the Daemonhost and restore vox communication (Operation 03: Vox Liberatis).); Enemy Revealed (Complete the campaign mission in which the traitors are revealed and the Chaos Sorcerer is killed.); Douse the Flames (In co-op Operations, destroy the Chaos warp beacon (Operation 04: Reliquary).); Resurrection (In co-op Operations, reactivate the ancient weapon \"The Sword of Atreus\" (Operation 05: Fall of Atreus).); My Face Is My Shield (Complete the campaign mission that begins with an orbital drop-pod insertion onto the planet surface.); Break of Dawn (Complete the campaign mission that reveals the true nature of the Aurora device.); Into the Abyss (Complete the campaign mission in which you hold the line against the full Chaos invasion.); I'll Be Watching You (Complete the Warhammer 40,000: Space Marine 2 campaign.); Why Is It Always You Three? (Listen to the whole of the Chaplain's dialogue when he summons Titus, Gadriel and Chairon aboard the Battle Barge.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign straight through on any difficulty - all ten campaign story markers unlock automatically, and you can pick up general feats like marking every enemy type (Purge Them All) and collecting Dataslates (Data Mining) along the way.",
                "2. After the campaign report that sends you back to the Battle Barge, walk over to the Chaplain and let his full conversation play for Why Is It Always You Three?.",
                "3. Move into co-op Operations and complete Operations 01 through 05, making sure to do each mission's main objective (acid bomb, Hive Tyrant, Daemonhost, warp beacon, ancient weapon) for its hidden achievement, plus Outbound Payload.",
                "4. Keep playing Operations to grind class, melee and ranged weapon levels to maximum, finish a Ruthless-difficulty run, customise a full armour set, and clear the per-class combat challenges and faction kill counts.",
                "5. Finish with the Eternal War PvP achievements - win with every class and play the required number of Annihilation, Capture and Control and Seize Ground matches - then the lifetime kill totals for Defender of Humanity.",
                "Tip: the per-class Operations challenges (Master of Arsenal, Dead Center, Immovable Object, and the rest) each require a specific class, so rotate which class you bring to Operations deliberately rather than sticking with one favourite, and knock out that class's challenge while you level its weapons."
            ]
        }
    ]
};
