// Tom Clancy's Splinter Cell Blacklist Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/splinter-cell-blacklist.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   235600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "splinter-cell-blacklist-achievement-guide",
    "category": "game",
    "gameSlug": "splinter-cell-blacklist",
    "icon": "🥽",
    "title": "Tom Clancy's Splinter Cell Blacklist Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Tom Clancy's Splinter Cell Blacklist - none are hidden. Covers the campaign-mission and difficulty achievements, and the playstyle, Strategic Mission Interface and skill-feat achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tom Clancy's Splinter Cell Blacklist has 28 Steam achievements and none of them are hidden. Thirteen are the ten campaign missions plus finishing the campaign, completing every mission on Realistic difficulty, and again on Perfectionist. The rest cover the Strategic Mission Interface side missions (the Kobin, Grímsdóttir and Cole sets), the three tactical playstyles (master Ghost, Panther and Assault on seven missions each), a no-kill campaign run as Sam Fisher, fully upgrading the Paladin HQ, and a handful of one-off skill feats (a 6-kill Mark & Execute in 14 seconds, hiding five bodies, a no-detection mission).",
                "Nothing is missable - missions can be replayed at any difficulty and the SMI side missions stay available. This is roughly a two-playthrough completion: a Ghost/no-kill run and a Perfectionist run, plus the co-op-friendly SMI missions.",
                "Tip: do your first campaign run as a no-kill Ghost run (covering No Kill Option Engaged and most Ghost masteries), then a Perfectionist difficulty run for the two hard difficulty achievements, and knock out the SMI missions and skill feats in between."
            ]
        },
        {
            "heading": "Campaign Missions & Difficulty",
            "body": [
                "Completing Safehouse, Insurgent Stronghold, American Consumption, Private Estate, Abandoned Mill, Special Missions HQ, Transit Yards, Detention Facility, LNG Terminal, surviving the attack on Paladin, completing the campaign, and completing every mission on Realistic and then Perfectionist difficulty.",
                "The achievements here: Asset Retrieval (Complete Safehouse on any difficulty); Ambush Escaped (Complete Insurgent Stronghold on any difficulty); American Consumption Prevented (Complete American Consumption on any difficulty); Terrorist Factor Turned (Complete Private Estate on any difficulty); Tracker Placed (Complete Abandoned Mill on any difficulty); Iranian Intel Retrieved (Complete Special Missions HQ on any difficulty); American Freedom Averted (Complete Transit Yards on any difficulty); Infiltration/Interrogation (Complete Detention Facility on any difficulty); Paladin Restored (Survive the attack on Paladin); American Fuel Engaged (Complete LNG Terminal on any difficulty); 4th Echelon Status Confirmed (Complete the single player campaign); 4th Echelon Commendation (Complete every single player mission on Realistic difficulty); 4th Echelon Officer (Complete every single player mission on Perfectionist difficulty)."
            ]
        },
        {
            "heading": "Playstyles, SMI & Skill Feats",
            "body": [
                "Fully upgrading the HQ, mastering Ghost, Panther and Assault on 7 missions each, hiding 5 bodies, a no-kill campaign as Sam, a call-and-takedown distraction, a Tri-Rotor device disable, a 6-kill Mark & Execute in under 14 seconds, taking a Shielded Infantryman's shield, saving the Transit Yards hostages, a no-detection mission, and completing all the Kobin, Grímsdóttir and Cole SMI missions.",
                "The achievements here: C&C Optimized (Fully upgrade your headquarters); Tactical Style: Ghost (Master Ghost playstyle on 7 missions); Tactical Style: Panther (Master Panther playstyle on 7 missions); Tactical Style: Assault (Master Assault playstyle on 7 missions); Evidence Concealed (Hide 5 bodies in containers); No Kill Option Engaged (Complete the single player campaign without killing anyone as Sam Fisher); Distraction Tactician (Call an enemy over, then take them down undetected when they investigate); Tri-Rotor Functionality (Disable a security device using the Tri-Rotor); Enhanced Lethality Demonstrated (Using Mark & Execute, take down 6 enemies in under 14 seconds); Hostile Shield Secured (Take down a Shielded Infantryman hand to hand and take his shield); Hostages Secured (Save the hostages in the Transit Yards); Mission Footprint Zero (Complete a single player mission without being detected during gameplay); Hunter Operator (Complete all 4th Echelon Missions from Andriy Kobin); Infiltration Operator (Complete all 4th Echelon Missions from Anna Grímsdóttir); Extraction Operator (Complete all 4th Echelon Missions from Charlie Cole)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign as a stealthy, non-lethal Ghost run - this covers No Kill Option Engaged, Mission Footprint Zero on at least one mission, and progress toward the Ghost masteries.",
                "2. Do the SMI side missions from Kobin, Grímsdóttir and Cole (these are co-op-friendly).",
                "3. Replay missions to master Panther and Assault on seven each, and do the one-off skill feats (the Mark & Execute time trial, hiding bodies, the shield takedown, the Tri-Rotor).",
                "4. Fully upgrade the Paladin between missions with the money you earn.",
                "5. Do a Perfectionist-difficulty run of every mission for 4th Echelon Officer (which also credits Realistic).",
                "Tip: Perfectionist disables the execute mark, sonar goggles' last-known-position marker and other aids - lean entirely on shadows, noise, and non-lethal takedowns from cover, and use the whole level's alternate routes rather than fighting through."
            ]
        }
    ]
};
