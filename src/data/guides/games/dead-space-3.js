// Dead Space 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dead-space-3.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238060 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dead-space-3-achievement-guide",
    "category": "game",
    "gameSlug": "dead-space-3",
    "icon": "❄️",
    "title": "Dead Space 3 Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Dead Space 3 (16 hidden). The 16 hidden achievements are the story markers and six discoverable secrets (the deer head, the shooting-gallery ride, the Feeders, the Drill Room, the Cyst kill, the Alien Artifacts). Sourced from GameTipCenter and XboxAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dead Space 3 has 58 Steam achievements, 16 of them hidden. Dead Space 3 follows Isaac Clarke and John Carver to the frozen planet Tau Volantis. The visible achievements are the difficulty and mode clears (Hardcore, Classic, Pure Survival), the collectible sets (Weapon Parts, Artifacts, Logs, Circuits), the bench-crafting and RIG-upgrade milestones, the co-op-only feats and Carver's demons, the Awakened DLC, and a large body of dismemberment and enemy-kill feats.",
                "The 16 hidden achievements are the story markers (from the Prologue through defeating the Moon), plus six discoverable secrets - shooting the deer-head trophy, a 70-target shooting-gallery ride, sneaking past the Feeders, a no-damage Drill Room, a 5-Cyst poison-cloud kill, collecting all Alien Artifacts, and killing 10 alien Necromorphs.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. Several secrets are one-shot chapter moments, and Classic / Pure Survival / Hardcore each need a dedicated run (Hardcore has no manual saves and one life)."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The nine Steam-hidden story markers (Prologue through defeating the Moon), the any-difficulty clear, escaping Tau Volantis to the Terra Nova, and the under-90-second reactor charge.",
                "The achievements here: Stranger in a Strange Land (Complete the Prologue); Space Odyssey (Survive your first spacewalk); Critical Mass (Recover the shuttle); Snow Crash (Reach Tau Volantis); Intestinal Fortitude (Defeat the Hive Mind); Hydra (Kill the Snowbeast); Together as One (Reassemble Rosetta); Infernal Machine (Reach the Alien Machine); Shoot for the Moon (Defeat the Moon - complete the game); Get On My Level (Complete the game on any difficulty setting); Get to the Chopper! (Escape from Tau Volantis to the Terra Nova); Supercharger (Finish charging the reactor in under 90 seconds); The Explorer (Complete all optional missions); Ghosts of the Past (Face all of Carver’s demons by completing all Co-Op only optional missions); From the Jaws (Save your Co-Op partner from an execution by killing the attacker); Share and Share Alike (Use the RIG to give an item to your Co-Op partner); Medic! (Revive your Co-Op partner 10 times)."
            ]
        },
        {
            "heading": "Difficulty & Modes",
            "body": [
                "The Hardcore (one life, no manual saves), Classic Mode, Pure Survival and Awakened DLC clears - including Awakened in Pure Survival.",
                "The achievements here: Aren't You Thankful? (Complete the game on Hardcore Mode); Epic Tier 4 Engineer (Complete the game in Classic Mode); Survivalist (Complete the game in Pure Survival Mode); Bad Moon Rising (Complete Dead Space™ 3 Awakened); Heretic (Kill the Unitologist Cult Leader); True Believer (Allow the Unitologist Cult Leader to survive); Pure Lunacy (Complete Dead Space™ 3 Awakened in Pure Survival Mode); Architect (Share a Blueprint with your Co-Op partner)."
            ]
        },
        {
            "heading": "Collectibles & Crafting",
            "body": [
                "All Weapon Parts, Artifacts, Logs and Circuits, finding Peng, the Scavenger Bot resource system, crafting a weapon and adding circuits and tools, the Large Med Pack, the RIG upgrade, and blueprint sharing.",
                "The achievements here: Gun Collector (Collect all Weapon Parts); The Professor (Collect all Artifacts); The Librarian (Collect all Logs); The Armorer (Collect all Circuits); There's Always Peng! (Find Peng); My Buddy (Retrieve Resources from a Scavenger Bot at a Bench); Metal Detector (Successfully deploy Scavenger Bots to 15 Resource Areas); Strapped (Craft a Weapon); Circuit's Edge (Add a Circuit to a Weapon); EMT (Craft a Large Med Pack); Full House (Craft a Weapon with 2 Tools, Tips, and Attachments with all Circuit slots filled); RIG Master (Fully upgrade your RIG); Master Plan (Create a Blueprint that needs at least 2000 resources worth of parts and Circuits to build); Just the Tip (Craft a weapon using a MK-II Weapon Tip)."
            ]
        },
        {
            "heading": "Combat & Secrets",
            "body": [
                "The six Steam-hidden discoverable secrets (the deer head, the shooting-gallery ride, the Feeders, the Drill Room, the Cyst poison-cloud kill, the Alien Artifacts, 10 alien Necromorph kills), plus the dismemberment totals, stasis and explosion and headshot kills, acid and Ripper kills, and the co-op quick-heal and downed-partner feats.",
                "The achievements here: Under a Buck (Shoot the deer-head trophy in the Admiral's Quarters); Space Ace (Shoot at least 70 targets during the ride to Tau Volantis); Hungry (Reach the pump room of the Waystation without alerting any Feeders); Drill Sergeant (Complete the Drill Room without taking any damage); Weedkiller (Kill 5 Cysts in the Biology Building with a single poison-gas cloud); Aliens (Collect all Alien Artifacts); Close Encounter (Kill 10 alien Necromorphs); Axes High (Kill 30 enemies using Fodder axes); Payback (Kill a Soldier by TK'ing a grenade or rocket back at them); Go for the Limbs! (Dismember 500 limbs from living enemies); And Then We Doubled It! (Dismember 1000 limbs from living enemies); Slow Mo (Kill 50 enemies while they are in stasis); Blast Corps (Kill 30 enemies with explosion damage); Shootbang (Kill 30 Soldiers with head shots); Empty Chamber (Kill 30 enemies using melee strikes or a melee Weapon Part); Dropping Acid (Dissolve 50 enemies with acid); Electric Lawnmower (Kill 30 enemies using an electrified Ripper blade); Overpowered Healing (Use quick heal to heal yourself 20 times); Heaven Can Wait (Stasis your Co-Op partner when he is downed to slow his bleed out timer)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story once on Normal, doing the six discoverable secrets as you reach their chapters (the deer head in the Admiral's Quarters, the shooting-gallery ride, the Feeder stealth, the Drill Room, the Biology Building Cysts).",
                "2. Collect all Weapon Parts, Artifacts, Logs and Circuits with a guide on that run, and craft toward the bench and RIG achievements.",
                "3. Play through with a co-op partner for the co-op-only feats and Carver's demons (Ghosts of the Past).",
                "4. Play the Awakened DLC and, ideally, its Pure Survival variant.",
                "5. Do the mode clears - Classic, Pure Survival, and finally Hardcore (one life, no saves) once you know the game well.",
                "Tip: Hardcore has a single life and no manual saves, so leave it for last and use the New Game+ carry-over of a maxed weapon and RIG to blitz through it."
            ]
        }
    ]
};
