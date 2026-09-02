// ARC Raiders Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/arc-raiders.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1808500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary. Every non-hidden description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "arc-raiders-achievement-guide",
    "category": "game",
    "gameSlug": "arc-raiders",
    "icon": "🤖",
    "title": "ARC Raiders Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in ARC Raiders (7 hidden). 7 of the 50 are hidden - researched from a Steam Community 100% hidden-achievements guide, since Embark Studios ships them with no description.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "ARC Raiders has 50 Steam achievements, 7 of them hidden. The exploration and progression track covers looting containers, safely extracting from every map, reaching a total lifetime loot value of 1,000,000, upgrading a weapon to Tier IV, reaching character level 10/75, and building out your Speranza workshop stations. A long list of miscellaneous feats covers close extracts, sliding 80 meters, long-range hits, status-effect combos, and squad revives, and the PvE/PvP tracks cover ARC enemy kills (including the named bosses Rocketeer, Bastion, Queen and Sentinel) and Raider-vs-Raider knockouts and extracts.",
                "The 7 hidden achievements are all specific, discoverable tricks rather than story beats: No Going Back (stay topside until the match timer hits 0:00), Just Dropping In (get hit by the parachute of a Supply Drop you called in), See You Never (extract while leaving a squadmate behind), Top of the World (climb to the top of the Launch Towers on Spaceport via zipline), Death From Above (deal 50 damage to an enemy while standing on top of a downed Rocketeer), A Vendetta Is Born (get knocked out while already standing inside a return point), and Enemy of My Enemy (get an encountered Raider downed by ARC enemies you summoned with a Snitch Scanner).",
                "The catalog marks it difficulty 3 - this is a live extraction shooter, so most achievements come from accumulated play, but the 7 hidden tricks and a few of the PvE boss kills (Bastion, the Queen) need real setup or a tough fight."
            ]
        },
        {
            "heading": "Exploration & Progression",
            "body": [
                "Looting 50 containers, safely returning from every map, your first and 100th extract, extracting through a Raider Hatch, visiting a locked room, reaching 50,000 and then 1,000,000 lifetime loot value, upgrading a weapon to Tier IV, carrying two Tier II+ weapons at once, 10 squad revives, reaching level 75, upgrading 5 workshop stations to level 3+, installing your first station, reaching level 10, upgrading a station to level 2, and setting off two car alarms in one round.",
                "The achievements here: Scavenger (Search 50 loot containers.); Well-Traveled (Safely return from Dam Battlegrounds, Buried City and Spaceport.); The Big Haul (Return to Speranza with 50 000 worth of loot.); Three Birds, One Stone (Destroy 3 ARC enemies with a single Wolfpack grenade.); Snitches get Stitches (Destroy a Snitch with a Stitcher.); Escape Artist (Safely return to Speranza 100 times.); Rite of Passage (Safely return to Speranza for the first time.); Into Thin Air (Safely return to Speranza through a Raider Hatch.); Behind Closed Doors (Visit a locked room on Dam Battlegrounds, Buried City or Spaceport.); The Long Haul (Reach a total lifetime loot value of 1 000 000.); Expert Weaponsmith (Upgrade a weapon to Tier IV.); Well-Armed (Have two weapons of Tier II or higher equipped in a round.); Back from the Brink (Revive a squadmate ten times.); Legend of Speranza (Reach level 75.); Dedicated to the Craft (Have five stations upgraded to level 3 or higher.); Self-Sufficient (Install a station in your Workshop.); In Your Element (Reach level 10.); Getting Serious (Upgrade a Workshop station to level 2.); Same Song, Same Verse (Set off two car alarms in a single round.)."
            ]
        },
        {
            "heading": "Miscellaneous Feats",
            "body": [
                "Extracting with under 5 seconds left, extracting while downed, 4 mods on one weapon, a 250m+ hit, a 80-meter slide, reviving an encountered Raider with a Defibrillator, and stacking gas/stun/burn status effects at once, plus the hidden No Going Back, Just Dropping In, and See You Never.",
                "The achievements here: In the Nick of Time (Safely return to Speranza with less than 5 seconds left in the round.); Not Over Till It's Over (Safely return to Speranza while downed.); Bells and Whistles (Have 4 weapon mods on a single weapon.); Long Shot (Hit a target over 250 meters away.); No Going Back (Be topside when the safe window closes (survive until the match timer hits 0:00).); Just Dropping In (Get hit by the parachute of a Supply Drop you called in.); Most Durable Pants in Speranza (Slide 80 meters without stopping.); See You Never (Return safely to Speranza while leaving a squadmate behind.); Today You, Tomorrow Me (Revive an encountered Raider with a Defibrillator.); Top of the World (Reach the top of the Launch Towers in Spaceport.); For Science! (Get gas, stun, and burn statuses at the same time.)."
            ]
        },
        {
            "heading": "PvE: Fighting the ARC",
            "body": [
                "Dealing 1,000 damage and destroying 50/100 ARC enemies, destroying the named bosses Rocketeer, Bastion, the Queen and a Sentinel with a Raider Tool, using 4 weapons in the Practice Range, luring a drone into attacking another, shooting a thruster off a Wasp, and the hidden Death From Above.",
                "The achievements here: Shots Fired (Deal 1000 damage to ARC enemies.); Racking Them Up (Destroy 50 ARC enemies.); Trail of Destruction (Destroy 100 ARC enemies.); Death From Above (Deal 50 damage to any enemy while standing on top of a downed Rocketeer.); Bringing Down the Big Guns (Destroy a Rocketeer.); Into the Breach (Destroy a Bastion.); A Tale for the Ages (Destroy the Queen.); Blindsided (Destroy a Sentinel with a Raider Tool.); Comparative Study (Use 4 different weapons to deal damage in the Practice Range.); Hook, Line, and Sinker (Use a Lure Grenade to make a drone attack another drone.); Mechanical Failure (Shoot a thruster off a Wasp.)."
            ]
        },
        {
            "heading": "PvP: Raiders vs Raiders",
            "body": [
                "Knocking out 10 Raiders, downing one with a grenade or a Raider Tool, extracting together with an encountered Raider, being thanked 10 times, visiting the Practice Range, and the hidden A Vendetta Is Born and Enemy of My Enemy.",
                "The achievements here: Unyielding (Knock out 10 Raiders.); A Vendetta Is Born (Get knocked out while already standing inside a return point.); Horseshoes and Hand Grenades (Down an encountered Raider with a grenade.); Crossed the Threshold (Knock out a Raider.); Up Close and Personal (Knock out a Raider with a Raider Tool.); The Friends We Made Along The Way (Return to Speranza together with an encountered Raider.); Enemy of My Enemy (Get an encountered Raider downed by ARC enemies you summoned with a Snitch Scanner.); Heart of Gold (Be thanked 10 times in direct response to something you did.); Practice Makes Perfect (Visit the Practice Range.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normal raids, banking the exploration, loot-value and level milestones as you go.",
                "2. Build out your Speranza workshop and weapon upgrades between raids for the progression achievements.",
                "3. Take on the named PvE bosses (Rocketeer, Bastion, the Queen) once you're geared for it.",
                "4. Deliberately chase the 7 hidden tricks in low-stakes raids - most need only a specific setup, not a hard fight.",
                "5. Mop up the PvP knockout and extract-together achievements over your normal runs.",
                "Tip: 'Just Dropping In' and 'Top of the World' are both easiest solo in a quiet round - call a Supply Drop and stand under its flare for the first, or head straight to Spaceport's Launch Towers and zipline up for the second."
            ]
        }
    ]
};
