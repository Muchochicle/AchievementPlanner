// Assassin's Creed Rogue Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assassins-creed-rogue.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   311560 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assassins-creed-rogue-achievement-guide",
    "category": "game",
    "gameSlug": "assassins-creed-rogue",
    "icon": "⚔",
    "title": "Assassin's Creed Rogue Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in Assassin's Creed Rogue - none are hidden. Covers the story and present-day memories, the completion and Naval Campaign achievements, the exploration and ship-combat feats, and the combat and cheat-run challenges. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assassin's Creed Rogue has 46 Steam achievements and none are hidden. Twelve are story - completing Sequences 1 through 6, the final glitched memory, finishing the game, and the four present-day Abstergo memories. The rest are open: 100% synchronisation, capturing all Gang HQs / Forts / settlements, fully upgrading the Morrigan, the renovation and Abstergo-challenge sweeps, the North Atlantic ship-combat feats (icebergs, ice sheets, narwhal harpoon, legendary battles), and a handful of combat and cheat-modifier challenges.",
                "Nothing is missable - locations and activities can be revisited, and the collectible and counter-based achievements all persist. The four cheat-run achievements ('Hunt the hunted', 'I ENDURE', 'Supplier', 'Killing machine') require the corresponding Uplay/cheat modifier active and nothing else.",
                "Tip: leave the four cheat-modifier challenges for last, after the story is done - they disable synchronisation and progress, so you don't want them active during normal completion."
            ]
        },
        {
            "heading": "Story & Present Day",
            "body": [
                "Completing Sequences 1 through 6, the final glitched memory, finishing the game, and the four present-day Abstergo Entertainment memories.",
                "The achievements here: Halcyon days (Complete sequence 1); The end of youth (Complete sequence 2); Making new friends (Complete sequence 3); Picking teams (Complete sequence 4); One legend dies, and one is born (Complete sequence 5); Brotherhood broken (Complete sequence 6); No page unturned (Complete the final glitched memory.); Templar then; Templar now (Complete the game); Did I do that? (Complete Present 1); He's not dead, is he? (Complete Present 2); A worthy cause (Complete Present 3); Sending a message (Complete Present 4)."
            ]
        },
        {
            "heading": "Completion & Naval Campaign",
            "body": [
                "100% synchronisation, all Gang HQs, 30 Stalker counter-kills, all renovations, 35 Abstergo Challenges, fully upgrading the Morrigan, looting 20 supply camps and 20 ship convoys, 20 gas-mask smoke-bomb counters, repairing all Abstergo computers, visiting every location, the Native and Templar Armor, and 17 Naval Campaign story missions.",
                "The achievements here: Achieve full synchronization (Achieve 100% synchronization in all main missions); Capture all Gang HQs (Capture All Gang HQs); Stalker killer (Counter-Kill [30] Stalkers); Property Tycoon (Complete all renovations); Dedicated Employee (Complete [35] Abstergo Challenges); Phantom Queen (Fully Upgrade the Morrigan); Camper (Loot [20] supply camps); What's yours is mine (Loot [20] ship convoys); Do not want (Counter [20] smoke bombs successfully using a gas mask); Repairman (Repair all computers in Abstergo Entertainment); Cartographer (Visit every location in the game); Ancient Hero (Get the Native Armor); Knight of Yore (Get the Templar Armor); Globe Trotter (Complete 17 story missions in the Naval Campaign)."
            ]
        },
        {
            "heading": "Exploration & Ship Combat",
            "body": [
                "All Animus fragments, every activity in one location, all Forts, all settlements, all Legendary Battles, 100 icebergs destroyed, 500 m of ice sheets, 300 British PoWs freed, harpooning a Narwhal, surviving a Reverse-Boarding, 15 air-attack counters, and all Native hills and Ice Caves.",
                "The achievements here: Memory collector (Collect all Animus fragments); Owned (Complete every activity in a single location.); For the Empire! (Capture all Forts); I'll take that (Capture all settlements); Master of the North Atlantic (All legendary Battles Completed); Smashing (Destroy 100 Ice Bergs); Ice Breaker (Break through 500 meters of Ice Sheets); Freedom Fighter (Free 300 British PoW's); Unicorn Slayer (Harpoon a Narwhal); Defence First (Survive a Reverse-Boarding); Denied (Counter [15] air surprise attacks); King of the Hill (Complete all Native hills and Ice Caves)."
            ]
        },
        {
            "heading": "Combat & Cheat Challenges",
            "body": [
                "An undetected Outpost, the berserk and sleep grenade 5-enemy hits, all assassin interceptions, and the four cheat-modifier runs (HUNTED, ENDURANCE, VETERANS) - sinking 10 ships or clearing camps or killing 30 guards with only that modifier active.",
                "The achievements here: Ninja (Complete an Outpost without getting detected); Instant Vikings (Hit 5 enemies with the berserk grenade (at the same time)); Nap Time (Put 5 enemies to sleep with the sleep grenade (at the same time)); This war of mine (Complete all assassin interceptions); Hunt the hunted (Sink 10 ships in North Atlantic without dying while only the HUNTED cheat is active.); I ENDURE (Sink 10 ships in North Atlantic without dying while only the ENDURANCE cheat is active.); Supplier (Take over 10 large supply camps while only the VETERANS cheat is active.); Killing machine (Kill 30 guards without dying while only the ENDURANCE cheat is active.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to completion, including the final glitched memory and the present-day memories.",
                "2. Chase 100% synchronisation, then capture all Gang HQs, Forts and settlements.",
                "3. Fully upgrade the Morrigan and do the North Atlantic ship-combat feats and Legendary Battles.",
                "4. Sweep the collectibles (Animus fragments), renovations, Abstergo Challenges and remaining activities.",
                "5. Last, activate each cheat modifier one at a time for 'Hunt the hunted', 'I ENDURE', 'Supplier' and 'Killing machine'.",
                "Tip: 'Smashing' (100 icebergs) and 'Ice Breaker' (500 m of ice) come naturally while sailing the North Atlantic - just take the icy routes rather than steering around them."
            ]
        }
    ]
};
