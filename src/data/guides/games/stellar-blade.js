// Stellar Blade Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/stellar-blade.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3489700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 21 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "stellar-blade-achievement-guide",
    "category": "game",
    "gameSlug": "stellar-blade",
    "icon": "⚔️",
    "title": "Stellar Blade Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Stellar Blade (21 hidden). The hidden achievements are the fourteen story boss/area markers, the three endings, three named side quests, and one late-game combat feat - described spoiler-free or by choice. Everything else - collectibles, max-upgrade sets, combat tallies and the New Game + achievements - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Stellar Blade has 45 Steam achievements, 21 of them hidden. EVE, an airborne-squad soldier, drops to a ruined Earth to fight the Naytiba and uncover what happened to humanity. The visible achievements cover the collectible sets (all cans, 30 Nano Suits, 200 Data Bank entries, 20 fish, 200 boxes, all Naytiba intel, all Camps), the max-upgrade sets (Exospines, Blood Edge, Tumbler, HP, Beta Energy, all skills), the combat tallies (perfect dodges, perfect parries, executions, Beta/Burst/ranged kills, 1,500 total kills) and the two New Game + achievements.",
                "The 21 hidden achievements are the fourteen story boss and area markers (Abaddon, Corrupter, Gigas, Brute, Altess Levoire, Stalker, Juggernaut, Tachy, Behemoth, Abyss Levoire, Belial, Karakuri, Demogorgon, Raven), the three endings, the named side quests 'Beyond Fate', 'Sisterly Love' and 'Beep!', and defeating 50 enemies with the late-game Tachy skill. They are described here spoiler-free or by the choice that triggers them.",
                "The catalog marks it difficulty 3 and two playthroughs (New Game + is required for two achievements, and it is the easy way to see all three endings). The three named side quests can be failed by advancing the story past them, so treat them as missable."
            ]
        },
        {
            "heading": "Story Bosses & Areas",
            "body": [
                "The platinum, the first Camp, and the fourteen hidden story boss and area markers - all described spoiler-free.",
                "The achievements here: EVE Protocol (You have unlocked all achievements in the main game.); Camp Preparation (Activated the first Camp.); Abaddon (Defeat Abaddon - an early story boss, described here spoiler-free.); Corrupter (Defeat the Corrupter - a story boss, described here spoiler-free.); Gigas (Defeat Gigas - a story boss, described here spoiler-free.); Brute (Defeat the Brute - a story boss, described here spoiler-free.); Altess Levoire (Complete the Altess Levoire area.); Stalker (Defeat the Stalker - a story boss, described here spoiler-free.); Juggernaut (Defeat the Juggernaut - a story boss, described here spoiler-free.); Tachy (Defeat Tachy - a story boss, described here spoiler-free.); Behemoth (Defeat the Behemoth - a story boss, described here spoiler-free.); Abyss Levoire (Complete the Abyss Levoire area.); Belial (Defeat Belial - a story boss, described here spoiler-free.); Karakuri (Defeat Karakuri - a story boss, described here spoiler-free.); Demogorgon (Defeat the story boss nicknamed Demogorgon, described here spoiler-free.); Raven (Defeat Raven - a story boss, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Endings",
            "body": [
                "The three endings. New Game + carries your gear, so the fastest route is one full run for 'Making New Memories' (build Lily's bond first) then reloads of the final save for the other two.",
                "The achievements here: Return to the Colony (Reach the 'Return to the Colony' ending by not taking Adam's hand at the final choice in the Nest.); Cost of Lost Memories (Reach the 'Cost of Lost Memories' ending by taking Adam's hand at the final choice without a fully built bond with Lily.); Making New Memories (Reach the 'Making New Memories' true ending - take Adam's hand with Lily's relationship fully built up through her side missions and Data Bank documents.)."
            ]
        },
        {
            "heading": "Collectibles & Upgrades",
            "body": [
                "The collectible sweeps and the max-upgrade sets - most fall out of thorough exploration plus a late-game farming pass for materials.",
                "The achievements here: Can Collector (Collected all cans.); Nano Suit Collector (Acquired 30 Nano Suits.); Records Collector (Collected 200 Data Bank entries (Memorysticks, Documents, or Passcodes).); Lonely Fisherman (Caught 20 different fish.); Box Hunter (Opened 200 boxes.); Naytiba Researcher (Got information on all Naytibas.); Meticulous Explorer (Activated all Camps.); Perfect Exospine (Enhanced 10 Exospines to their max.); Perfect Blood Edge (Enhanced Blood Edge to its max.); Perfect Rechargeable Tumbler (Enhanced the Rechargeable Tumbler to its max.); Perfect Physical Enhancement (Enhanced HP to its max.); Perfect Beta Energy Enhancement (Enhanced Beta Energy to its max.); Thorough Technician (Learned all skills.)."
            ]
        },
        {
            "heading": "Side Quests & Combat",
            "body": [
                "Three named side quests (missable - do them before the story locks their regions), the combat tallies, and defeating 50 enemies with the Tachy skill.",
                "The achievements here: Beyond Fate (Complete the side quest 'Beyond Fate' for Enya.); Sisterly Love (Complete the side quest 'Sisterly Love' for Kaya.); Beep! (Complete the side quest 'Beep!' involving the digger robot.); Battlefield Martial Artist (Perfect Dodged 200 enemy attacks.); Agile Gladiator (Perfect Parried 300 enemy attacks.); Silent Executioner (Defeated 50 enemies by execution.); Naytiba Hunter (Defeated 100 enemies with Beta Skills.); Relentless Destroyer (Defeated 50 enemies with Burst Skills.); Revenging Agent (Defeat 50 enemies using the Tachy skill, the special combat mode unlocked later in the story.); Cold-blooded Sniper (Defeated 150 enemies with ranged attacks.); Cruel Liberator (Defeated 1,500 enemies.)."
            ]
        },
        {
            "heading": "New Game +",
            "body": [
                "The two achievements that require a second run.",
                "The achievements here: Repeating Protocols (Completed New Game +.); Infinite Blade (Learned all skills in New Game +.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. On your first run, pick up cans, Data Bank entries, fish, boxes and Camps as you explore, and clear side quests as soon as their regions open - especially 'Beyond Fate', 'Sisterly Love' and 'Beep!', which can be locked out by story progress.",
                "2. Build Lily's relationship through her side missions and Data Bank documents so your first ending is 'Making New Memories'.",
                "3. Farm materials late-game to finish every max-upgrade set (Exospines, Blood Edge, Tumbler, HP, Beta Energy, all skills).",
                "4. From the final save, reload to also get 'Cost of Lost Memories' and 'Return to the Colony'.",
                "5. Start New Game + for 'Repeating Protocols' and re-learn every skill for 'Infinite Blade'; mop up any combat tallies here.",
                "Tip: 'Perfect Parried 300 attacks' and 'Perfect Dodged 200 attacks' come naturally if you fight bosses honestly instead of dodging out - the Blood Edge parry timing is generous, and bosses like Stalker and Raven throw dozens of parryable strings per attempt."
            ]
        }
    ]
};
