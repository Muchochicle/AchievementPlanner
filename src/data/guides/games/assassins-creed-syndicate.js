// Assassin's Creed Syndicate Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assassins-creed-syndicate.json), whose 56 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   368500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assassins-creed-syndicate-achievement-guide",
    "category": "game",
    "gameSlug": "assassins-creed-syndicate",
    "icon": "🎩",
    "title": "Assassin's Creed Syndicate Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in Assassin's Creed Syndicate - none are hidden. Covers the story memory sequences, the London activities and borough conquest, the collectibles and skill progression, the vehicle and combat feats, and the Jack the Ripper DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assassin's Creed Syndicate has 56 Steam achievements and none of them are hidden. The story is nine memory sequences plus the World War I simulation. London fills out the rest: conquer every borough, secure Gang Strongholds, win Fight Clubs and Street Races, complete Raids, Bounties, Templar Hunts and Child Liberations, reach maximum Loyalty with an Associate, unlock all Secrets of London, and collect the Pressed Flowers, Historical Posters and Royal Letters. The remainder are carriage and combat feats, skill and level milestones, and the Jack the Ripper DLC's 100% synchronization.",
                "Nothing is missable - every sequence, activity and collectible can be revisited after the credits, and all counters are cumulative across Jacob and Evie.",
                "Tip: the carriage feats (\"Furious\", \"WHAT IS WRONG WITH YOU\", \"Without a Grudge\" 5000 destructibles) are easiest to farm in a single chaotic drive through a crowded market street rather than hoping they happen during missions."
            ]
        },
        {
            "heading": "Story: Memory Sequences & WWI",
            "body": [
                "Completing each of the nine memory sequences, recruiting a gang of five allies, and completing the World War I simulation.",
                "The achievements here: A Spanner in the Works (Complete Memory Sequence 1.); A Simple Plan (Complete Memory Sequence 2.); A Modern Babylon (Complete Memory Sequence 3.); A Quick and Reliable Remedy (Complete Memory Sequence 4.); The Perils of Business (Complete Memory Sequence 5.); A Run on the Bank (Complete Memory Sequence 6.); All Is Fair in Politics (Complete Memory Sequence 7.); The Joys of Freedom (Complete Memory Sequence 8.); Shall We Dance? (Complete Memory Sequence 9.); Friends at My Back (Recruit a gang of 5 allies.); The War at Home (Complete the World War I simulation.)."
            ]
        },
        {
            "heading": "London: Activities & Borough Conquest",
            "body": [
                "The activity goals - sampling every beer, kicking enemies off trains, Gang Strongholds, Fight Clubs, Street Races, Raids, Bounties, Templar Hunts, Child Liberations, cargo escorts, all Secrets of London, Associate Loyalty, a haystack multi-kill and conquering every borough.",
                "The achievements here: Cerevisaphile (Sample every beer brand in London.); No Ticket (Kick fifty enemies off of trains.); Flawless Conqueror (Secure three Gang Strongholds and complete their optional constraints.); Bare-Knuckle Champion (Win three different Fight Clubs.); A Quarter-Furlong at a Time (Finish first in 3 different Street Races.); Treasure Hunter (Complete ten Raids of any type with Jacob or Evie.); Thieftaker (Bring three Bounty targets back alive.); Unqualified Success (Complete three Templar Hunts and their challenges.); Children's Aid Society (Complete five Child Liberation memories.); Guardian Angel (Successfully escort ten friendly cargo shipments.); Godlike (Unlock all of the Secrets of London.); A Broad Base (Reach Loyalty level 1 with all Associates.); Bedfellows, Strange or Otherwise (Reach maximum Loyalty with any Associate.); Needle in a Haystack (Kill five enemies from within the same haystack.); Street Sweeping (Conquer all the boroughs in London)."
            ]
        },
        {
            "heading": "Collectibles, Skills & Progression",
            "body": [
                "Perks, Gang Upgrades, crafting a Level 10 item, learning every Fight and Stealth Skill, reaching Level 10, twenty Crowd Events, the Pressed Flowers, Historical Posters and Royal Letters, every Viewpoint and 100% Sync in the Main Memories.",
                "The achievements here: Multitalented (Acquire ten Perks.); Keys to the City (Acquire all of the Gang Upgrades.); Artisan (Craft a Level 10 Item.); Bartitsu (Learn every Fight Skill as Jacob.); Phantom (Learn every Stealth Skill as Evie.); Wonder of the Age (Reach Level 10.); Ordinary Criminal (Complete twenty Crowd Events.); Language of Flowers (Collect all of the Pressed Flowers.); Student of History (Collect all of the Historical Posters.); A Life in Letters (Collect all of the Royal Letters.); Chimney Sweep (Synchronize every Viewpoint in London.); Mentor (Reach 100% Sync in the Main Memories)."
            ]
        },
        {
            "heading": "Vehicle & Combat Feats",
            "body": [
                "The one-off feats - ramming and flipping vehicles, hanging-barrel and hijack feats, combo level 40, fifty Multi-Finishers, fifty assassinations, the Hallucinogenic Dart, zipline air assassinations, shooting fifty enemies first, 5000 carriage destructibles and the Jack the Ripper story hook.",
                "The achievements here: Furious (Destroy twenty vehicles by ramming them.); WHAT IS WRONG WITH YOU (Flip five vehicles by shooting their horses.); Look Out Below (Kill three enemies with a single stack of hanging barrels.); You Wouldn't Steal a Policeman's Helmet (Hijack twenty police vehicles.); Queensbury Rules (Reach combo level 40.); Whirlwind of Death (Perform fifty Multi-Finishers.); Blade in the Crowd (Assassinate fifty enemies.); Opium Scourge (Affect at least four enemies simultaneously with the Hallucinogenic Dart.); Blade from Above (Air Assassinate twenty enemies from a zipline.); Most Unsporting (Shoot fifty enemies before they shoot at you.); Without a Grudge (Destroy 5000 destructibles with your carriage.); A well-kept secret (Jack is dead and his identity will remain hidden forever.)."
            ]
        },
        {
            "heading": "Jack the Ripper DLC & Fear Feats",
            "body": [
                "Brutal Takedowns, the Brute and fear-based kills, frightening 200 enemies, unlocking half the skills, and 100% synchronization in Jack the Ripper.",
                "The achievements here: Brutal (Perform 30 complete Brutal Takedowns.); Keep calm and carry on (Kill a Brute while he calms down his panicked allies.); Put the fear of you into them (Scare an enemy and make him kill someone else by mistake.); Are you scared yet? (Frighten 200 enemies.); The new terror of Whitechapel (Unlock 50% of the skills.); Ripperologist (Achieve 100% synchronization in Jack the Ripper.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the nine memory sequences and the World War I simulation for the story achievements.",
                "2. Conquer London borough by borough, doing the Strongholds, Fight Clubs, Races, Raids, Bounties and Templar Hunts as you go.",
                "3. Sweep the collectibles (Flowers, Posters, Letters, Secrets of London) and push skills, Perks and Gang Upgrades to their milestones.",
                "4. Farm the vehicle and combat feats in a crowded street where you can retry freely.",
                "5. Finish with the Jack the Ripper DLC - the fear mechanics and 100% synchronization.",
                "Tip: alternate Jacob and Evie so the \"learn every Fight Skill as Jacob\" and \"learn every Stealth Skill as Evie\" achievements progress together, and the shared skill tree fills faster."
            ]
        }
    ]
};
