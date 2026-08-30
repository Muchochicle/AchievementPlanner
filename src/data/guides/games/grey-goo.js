// Grey Goo Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grey-goo.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   290790 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grey-goo-achievement-guide",
    "category": "game",
    "gameSlug": "grey-goo",
    "icon": "🦠",
    "title": "Grey Goo Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Grey Goo - none are hidden. Covers the skirmish, multiplayer and campaign achievements, and the advanced multiplayer feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Grey Goo has 35 Steam achievements and none of them are hidden. The core is completing the three faction campaigns (Beta, Human, Goo) on any difficulty and again with all bonus objectives, plus the whole campaign on Hard. Around that sit skirmish and multiplayer feats - win with each faction, win 100 skirmish and 100 multiplayer matches, build each faction's Epic unit, a Total Annihilation win - and a set of specific ranked-multiplayer feats (consume 100 units with formless Goo, 3 of every Sentinel type, use the Teleporter, 20 units on wall pillars).",
                "Nothing is missable - campaigns and modes are all replayable and there are no one-shot achievements outside individual missions. The completion's long poles are the 100-win skirmish and multiplayer counters and the ranked-multiplayer feats (which need real matches), and the campaign on Hard with all bonus objectives.",
                "Tip: play all three campaigns on Hard, doing every bonus objective on that run (it credits the any-difficulty versions too), then grind skirmish wins vs. AI and do the ranked-multiplayer feats in dedicated matches."
            ]
        },
        {
            "heading": "Skirmish, Multiplayer & Campaigns",
            "body": [
                "A skirmish win, a win with each faction, a 3-AI-on-Hard win, one-on-one and 2v2 and four-player FFA multiplayer wins, 100 skirmish and 100 multiplayer wins, completing the Beta / Human / Goo campaigns and all missions on any difficulty and on Hard, a win after killing an Epic, destroying each faction's Epic, building one and each faction's Epic, a Total Annihilation win, a max-units match, a no-resource-cap match, and all bonus objectives in each campaign and overall (any difficulty and Hard).",
                "The achievements here: Practice Makes Perfect (Win a skirmish match against an AI); Hat Trick (Win a skirmish match against the AI with each of the factions); Glutton for Punishment (Win a skirmsh match against 3 AI opponents on hard difficulty); Even Ground (Win a one-on-one multiplayer match); I Could Do This All Day (Win 100 skirmish matches); Tag Team (Win a 2v2 multiplayer match); One Player to Rule Them All (Win a four player free-for-all match); Full Time Job (Win 100 multiplayer matches of any size or mode); No More Running (Complete the Beta campaign on any difficulty); Point of First Contact (Complete the Human campaign on any difficulty); Call for Help (Complete the Goo campaign on any difficulty); End of the Beginning (Complete all missions of the campaign on any difficulty); GG (Complete all missions of the campaign on Hard difficulty); Game Ender (Win a multiplayer match after destroying an enemy Epic unit); Epic Loss (Destroy each faction's Epic unit during a multiplayer or skirmish match); Start of Something Epic (Build an Epic unit); Epic Escalation (Build the Epic unit for each faction); Weapon of Mass Destruction (Win a skirmish or multiplayer match in Total Annihilation mode); Maxed Out! (During a multiplayer match, build the maximum possible number of units); Macro Master (As Human or Beta, complete a multiplayer or skirmish match without ever hitting the resource cap); Barca's Finest (Win all missions and complete all bonus objectives in the Beta campaign on any difficulty); Galactic Explorer (Win all missions and complete all bonus objectives in the Human campaign on any difficulty); Evolutionary Pinnacle (Win all missions and complete all bonus objectives in the Goo campaign on any difficulty); Uncompromised Conquest (Win all missions and complete all bonus objectives in the campaign on any difficulty); Completionist (Win all missions and complete all bonus objectives in the campaign on hard difficulty)."
            ]
        },
        {
            "heading": "Advanced Multiplayer Feats",
            "body": [
                "3 of every Sentinel type in your base in ranked, feeding a Mother Goo to a Proto-Purger, rebuilding your HQ, a LAN win, consuming 100 enemy units with formless Goo, destroying 5 Extractors/Mother Goos with a Mother Goo, healing 1,000 damage with a Repair Pad, 20 units on wall pillars, using the Teleporter 3 times for 5 structures, and the no-civilian-loss Mago's Pass mission.",
                "The achievements here: Fort Awesome (Have at least 3 of every Sentinel type in your base at once during a single ranked multiplayer match); Self Sacrifice (Feed a Mother Goo to a Proto-Purger (in any aspect of the game)); Back from the Dead (Rebuild your HQ  (in any aspect of the game)); Kickin' It Old School (Win a LAN match (against an actual person or persons)); World War G (Consume 100 enemy units or structures with formless Goo in a ranked multiplayer match); Sharing is Caring (Destroy 5 Extractors or Mother Goos with a Mother Goo in a single ranked multiplayer match); Seasoned Engineer (Heal 1000 or more damage using the Repair Pad structure during a single ranked multiplayer match); Ain't Nobody Got Time for That (Have at least 20 units mounted on wall pillars at the same time during a single ranked multiplayer match); Master of Teleportation (Use the Teleporter structure at least 3 times and teleport at least 5 structures during a single ranked multiplayer match); Civil Servant (Complete the Mago's Pass mission without losing a single civilian)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Beta, Human and Goo campaigns on Hard, completing every bonus objective on that run.",
                "2. Do the Mago's Pass no-civilian-loss mission (Civil Servant) via mission replay.",
                "3. Do the skirmish feats: win with each faction, a 3-AI Hard win, a Total Annihilation win, build every faction's Epic.",
                "4. Grind skirmish wins vs. AI toward 100, and play multiplayer for the one-on-one / 2v2 / FFA / 100-win achievements.",
                "5. Do the specific ranked-multiplayer feats (formless Goo consumption, Sentinel types, Teleporter, wall pillars, Repair Pad) in dedicated ranked matches.",
                "Tip: the ranked-multiplayer feats are all doable against a cooperative opponent - arrange a match, then take turns setting up each other's achievements (letting one player farm Goo consumption, wall-pillar units, Teleporter uses) rather than hoping they happen in a real game."
            ]
        }
    ]
};
