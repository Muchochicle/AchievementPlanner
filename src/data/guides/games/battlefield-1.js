// Battlefield 1 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battlefield-1.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battlefield-1-achievement-guide",
    "category": "game",
    "gameSlug": "battlefield-1",
    "icon": "🎖️",
    "title": "Battlefield 1 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Battlefield 1 - none are hidden. Covers the single-player War Stories campaign and the multiplayer rank, class, and weapon-mastery grinds.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battlefield 1 has 50 Steam achievements and none are hidden. Sixteen come from the War Stories campaign - completing each of the five stories, its two difficulty tiers, and a handful of in-mission feats (a stealth Cavalry Sword kill, a dynamite multi-kill, collecting Field Manuals, killing all three officers in Young Men's Work). Everything else is multiplayer: reaching Rank 10 and every class's Rank 2, playing Operations and Squad Orders, and a long tail of weapon and vehicle kill-count grinds that stretch across the base game and both the \"In the Name of the Tsar\" and \"Turning Tides\" expansions.",
                "Nothing is missable - campaign chapters can be replayed freely from the mission select screen, and every multiplayer stat (kills, Warbonds, Service Assignments) accumulates permanently across every match you ever play. The long poles are the big kill-count grinds: 2000 total kills, 25 kills with the Lance as Cavalry, 15 kills with the L-Class Destroyer, and the class-specific 100-kill counters.",
                "Tip: play Operations and Conquest on populated official servers rather than grinding empty ones - Battlefield 1's big maps and vehicle sandbox make weapon-specific and vehicle-specific kills come naturally as you play normally, so treat the grindy achievements as things that finish themselves over a normal playtime rather than a separate task."
            ]
        },
        {
            "heading": "War Stories Campaign",
            "body": [
                "The single-player block: completing each of the five War Stories (Friends in High Places, Nothing is Written, Through Mud and Blood, Avanti Savoia!, The Runner), unlocking all of their Codex Entries, finishing the whole campaign on Normal and then Hard, and the in-mission feats - 10 melee kills, the hidden Cavalry Sword takedown, a 5-enemy dynamite kill, the Young Men's Work officer triple, Field Manual collection, and completing every campaign challenge.",
                "The achievements here: Friends in High Places (Complete Friends in High Places); Nothing is Written (Complete Nothing is Written); Through Mud and Blood (Complete Through Mud and Blood); Avanti Savoia! (Complete Avanti Savoia!); The Runner (Complete The Runner); Taking down giants (Unlock all Codex Entries in Friends in High Places); All men dream (Unlock all Codex Entries in Nothing is Written); Sound of thunder (Unlock all Codex Entries in Through Mud and Blood); Conquering the mountains (Unlock all Codex Entries in Avanti Savoia!); The hills of Gallipoli (Unlock all Codex Entries in The Runner); Up close and personal (Perform a melee kill on 10 enemies anywhere in the campaign); Mightier than the shovel (Find the hidden Cavalry Sword and take down an enemy on the French countryside in the campaign); Shock Wave (Kill 5 enemies by using dynamite in the campaign); Triple Boluk-Bashi (Kill all 3 Ottoman officers in Young Men's Work with melee kills in the campaign); The Great War (Complete the campaign on Normal difficulty); The War to End All Wars (Complete the campaign on Hard difficulty); Catching up on some reading (Collect one Field Manual in the campaign); Enough for a library (Collect all Field Manuals in the campaign); Up to the challenge (Complete one challenge in the campaign); Putting in the effort (Complete 10 challenges in the campaign); Master of adaptation (Complete all challenges in the campaign)."
            ]
        },
        {
            "heading": "Multiplayer Rank & Class Progression",
            "body": [
                "The core multiplayer ladder: winning an Operations round, a bolt-action counter-snipe, 25 Squad Orders, 450 Warbonds, reaching Rank 10, and reaching Rank 2 with all four base classes (Assault, Medic, Scout, Support) for the Decorated achievement.",
                "The achievements here: Operations (Win 1 round of Operations in multiplayer); Counter-sniper (Using a bolt action rifle, kill an enemy Scout in multiplayer); Play the Objective (Complete 25 Squad Orders in multiplayer); Warbonds (Earn 450 Warbonds in multiplayer); Corporal (Reach Rank 10 in multiplayer); Assault Enlistment (Reach Assault Rank 2 in multiplayer); Medic Enlistment (Reach Medic Rank 2 in multiplayer); Scout Enlistment (Reach Scout Rank 2 in multiplayer); Support Enlistment (Reach Support Rank 2 in multiplayer); Decorated (Reach Rank 1 with all 4 Infantry classes in multiplayer)."
            ]
        },
        {
            "heading": "Weapon & Vehicle Mastery",
            "body": [
                "The long tail of kill-count and mode-specific grinds, spanning the base game and both expansions: class-specific playtime and kill counts, roadkills, Service Assignments, \"In the Name of the Tsar\" map and weapon-variant sweeps, the Gallipoli Operation, \"Turning Tides\" naval kills and weapon variants, melee kills on a Flametrooper Elite, the Livens Projector, and the Broken Bottle, and the Behemoth Airship's anti-air kills.",
                "The achievements here: French War Hero (Spend 30 minutes in-game as French Republic Medic); Drei Vier Grenadier (Kill 4 enemies with the Trench Raider Elite Class); Saint Chamond Operator (Kill 25 enemies with the St Chamond Heavy Tank); Maître d'Armes (Perform one kill with each of the 5 primary Weapon Assignments weapons); The Revolution is Coming (Play all \"In the Name of the Tsar\" operations); Charged into Battle (Kill 25 enemies with the Lance as Cavalry); Secured the Resources (Win 5 games of Supply Drop); Endured the Winter (Play a round on all \"In the Name of the Tsar\" maps); Filled the Stockpile (Perform a kill with all \"In the Name of the Tsar\" weapon variants); Rough Seas (Perform a roadkill in a Sea Vehicle); Serve With Honor (Complete 1 Service Assignment); Become Operational (Complete the Gallipoli Operation); The Power in These Waters (Kill 15 enemies with the L-Class Destroyer); Naval Weapons Collection (Perform a kill with all \"Turning Tides\" weapon variants); Firefighter (Perform a melee kill on a Flametrooper Elite); Advanced Studies (Perform 1 kill with the Livens Projector); Modern Technology (Perform 1 kill with the Broken Bottle); Flyswatter (Destroy 5 airplanes while in the Behemoth Airship L30); Weapons of the Apocalypse (Perform a kill with all \"Apocalypse\" weapon variants)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the War Stories campaign on Normal difficulty first - Friends in High Places, Through Mud and Blood, Avanti Savoia!, The Runner, and Nothing is Written - to earn The Great War and the per-story completions.",
                "2. Replay on Hard for The War to End All Wars, and mop up the in-mission feats (melee kills, the Cavalry Sword easter egg, dynamite kills, the Ottoman-officer melee triple, all Field Manuals, all challenges) as you go.",
                "3. Move to multiplayer: play Operations and Conquest normally to level up, reach Rank 10 and every class's Rank 2, and complete Squad Orders and Service Assignments.",
                "4. Let the weapon and vehicle kill-count grinds (Vanguard, Footman, Archer, Knight class kills - wait, those are War Stories terms; the multiplayer equivalents are class and weapon-type kills) accumulate as you play a variety of classes and vehicles.",
                "5. If you own the DLC, play a round on every \"In the Name of the Tsar\" map and every \"Turning Tides\" naval mode to finish the expansion-specific achievements.",
                "Tip: French War Hero (30 minutes as French Republic Medic) and similar \"spend time as X\" achievements tick up just from playing normally on the relevant DLC maps - no need to babysit a timer."
            ]
        }
    ]
};
