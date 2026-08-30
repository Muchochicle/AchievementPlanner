// World War Z Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/world-war-z.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   699130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "world-war-z-achievement-guide",
    "category": "game",
    "gameSlug": "world-war-z",
    "icon": "🌍",
    "title": "World War Z Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in World War Z - none are hidden. Covers the perk and weapon progression, the three launch episodes and their difficulty and self-imposed-challenge clears, the zombie-kill and environmental feats, and the PvP, co-op and 100-game milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "World War Z has 35 Steam achievements and none of them are hidden. The list covers the perk and weapon-upgrade progression (max one specialization, then all perks; final version of one weapon, then all), the three launch episodes (New York, Jerusalem, Moscow) completed on any difficulty and then on the hardest, a set of self-imposed level challenges (no friendly fire, no health packs, pistol only, full team), and a run of zombie-kill and environmental feats. The rest is PvP, co-op teamplay, and a 100-games grind.",
                "Nothing is missable - episodes and levels replay freely and all the feat and kill counters accumulate across every session. This is one of the shorter completions in the co-op-shooter genre; the only real time sinks are Madman (finish 100 PvE games) and the all-perks / all-weapons unlocks, both of which come naturally from playing enough to also finish everything else.",
                "Tip: stack the self-imposed challenge achievements onto the same run - a full team of four players who bring only pistols, avoid friendly fire and skip health packs can clear an easy short level and unlock The most effective way, High caution, Strong immunity and Teamwork all at once."
            ]
        },
        {
            "heading": "Progression & Campaign",
            "body": [
                "The perk and weapon-upgrade unlocks (one specialization then all perks, final version of one weapon then all), finishing each of the three launch episodes on any difficulty and then all episodes on insane or extreme, and the self-imposed level challenges (no friendly damage, no health packs, pistol only, full team).",
                "The achievements here: Specialist (Open and buy all perks in one specialization); Handyman (Open and buy all perks in game); There are many guns but this one is mine (Open and buy final version of any weapon); Imposing arsenal (Open and buy final versions of all weapons); Escape (Finish episode \"New York\" on any difficulty); Hope (Finish episode \"Jerusalem\" on any difficulty); Salvation of the Motherland (Finish episode \"Moscow\" on any difficulty); This is just the beginning (Finish all episodes on any difficulty); Well, what did you achieve? (Finish all episodes on insane or extreme difficulty); High caution (Finish any level without dealing friendly damage); Strong immunity (Finish any level without using health packs); The most effective way (Finish any level using just pistol); Teamwork (Finish any level with full team)."
            ]
        },
        {
            "heading": "Zombie Kills & Environmental Feats",
            "body": [
                "Killing 10,000 zombies, the special-kill feats (Lurker midair, Bull mid-charge, 20 lying zombies before they rise, a 10-zombie tazer chain, 100 toxic-cloud walks), and the environmental achievements - breaching charges, turret captures, balloon and gasoline kills, building 100 defences, and defusing 10 mines.",
                "The achievements here: Genocide (Kill 10,000 zombies); Sport kills (Kill Lurker midair); Torero (Kill Bull during charge); Can't fool me (Kill 20 lying zombies before they get up); Chain reaction (Hit 10 zombies with one tazer shot); Toxicomaniac (Walk into toxic cloud 100 times); Burglar (Open 15 rooms or containers with breaching charge); Friend of machines (Capture 15 turrets); Explosive (Kill 10 zombies with balloon explosions); The floor is lava (Burn 10 zombies with one gasoline puddle); Builder (Build 100 defences); Waste of time (Defuse 10 mines)."
            ]
        },
        {
            "heading": "PvP, Co-op & Milestones",
            "body": [
                "The PvP achievements (25 matches, a top-score finish, holding a captured point, 200 resources in a scavenge raid), the co-op teamplay feats (30 rescues, 30 low-health heals, 10 explosive-ammo dispenses, masking-grenade saves, 50 special-zombie marks), and Madman (finish 100 PvE games).",
                "The achievements here: Veteran (Finish 25 PvP matches in any mode); Winner in life (Finish PvP match with highest score in any mode); Owner (Capture the point and hold it until the end of match); Walking bank (Gather 200 resources during single match in scavenge raid mode); First Aid (Rescue 30 incapacitated teammates); What the doctor ordered (Heal 30 teammates with health lower than 20% with health packs or stim pistol); Dispenser (Dispense 10 explosive ammo packs to teammates); I am safe! (Use masking grenade on 3 teammates with zombies near); Effective communication (Mark special zombies 50 times); Madman (Finish 100 games in PvE)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all three episodes on a normal difficulty to unlock the episode-completion achievements and start filling out your perks and weapon upgrades.",
                "2. On an easy, short level with a full team of four, stack the self-imposed challenges - pistol only, no friendly fire, no health packs, full team - into a single clean run.",
                "3. Do the special-kill and environmental feats deliberately (Lurker midair, Bull charge, tazer chain, turret captures, balloon and gasoline kills, 100 defences built).",
                "4. Play PvP for the 25-match, top-score, point-hold and scavenge-resource achievements, and cover the co-op teamplay feats (rescues, heals, dispenses, marks) during normal PvE runs.",
                "5. Grind toward the all-perks and all-weapons unlocks and the 100-PvE-games Madman achievement, which usually complete together as you finish everything else.",
                "Tip: replay the shortest level on the highest difficulty for the insane/extreme completion (Well, what did you achieve?) - it only requires finishing the episodes at that level, so a single well-defended run of the easiest map on hard difficulty is enough rather than a full hard playthrough."
            ]
        }
    ]
};
