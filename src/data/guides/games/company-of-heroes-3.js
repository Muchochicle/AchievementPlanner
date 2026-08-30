// Company of Heroes 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/company-of-heroes-3.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1677280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "company-of-heroes-3-achievement-guide",
    "category": "game",
    "gameSlug": "company-of-heroes-3",
    "icon": "🎖️",
    "title": "Company of Heroes 3 Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Company of Heroes 3 - none are hidden. Covers the dynamic Italian Campaign and the North Africa Operation, the skirmish and multiplayer achievements, and the Hold Fast (Final Stand) co-op survival mode's medals, faction mastery and combat feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Company of Heroes 3 has 36 Steam achievements and none of them are hidden. Sixteen come from the single-player campaigns - completing missions of the dynamic Italian Campaign, reaching 100% loyalty with each of the three companions, collecting all Soldier Stories, breaking the Volturno and Gustav Lines, and finishing both the Italy Campaign and the North Africa Operation. Eight are skirmish and multiplayer (a no-squad-loss and a no-reinforce mission, tactical-pause orders, multiplayer wins, Battlegroup ability use). The last twelve belong to the Hold Fast / Final Stand co-op survival mode: earning medals, reaching 3000 Perk Points with each of the four factions, and combat feats like a 1000-kill total and a boss-squad decapitation.",
                "Nothing is missable - campaign missions can be replayed for the collectible and line-breaking achievements, and the multiplayer and Final Stand feats accumulate across matches. The longest grind is the four faction-mastery achievements (3000 Perk Points each) in Final Stand.",
                "Tip: play the Italian Campaign with the companion-mission side objectives in mind - the 100% loyalty achievements (Terra Nostra, Gung Ho, Slow And Steady) depend on choices and completed side content across the campaign, and it is much easier to keep all three companions happy on one careful playthrough than to try to raise a neglected one at the end."
            ]
        },
        {
            "heading": "Italian Campaign & North Africa",
            "body": [
                "The single-player campaigns: Mission Zero and Calabria, purchasing a Detachment, 100% loyalty with Valenti, Buckram and Norton, all Soldier Stories, the Salerno route choice, breaking the Volturno and Gustav Lines, silencing Anzio Annie, saving Monte Cassino, the ice-cream heal, and completing both the Italy Campaign and the North Africa Operation.",
                "The achievements here: The First Step (Complete Mission Zero); The Second Step (Complete Calabria); Fan Of Support (Purchase a Detachment); Terra Nostra (Gain 100% loyalty with Valenti); Gung Ho (Gain 100% loyalty with Buckram); Slow And Steady (Gain 100% loyalty with Norton); Lest We Forget (Collect all Soldier Stories); The Way Forward (Decide where to go after Salerno); Volturno Breaker (Break the Volturno Line); Gustav Breaker (Break the Gustav Line); The Cover-up (Uncover a conspiracy); Anniehilator (Silence Anzio Annie); Historical Reparation (Save Monte Cassino); Sweet Victory (Heal a unit with ice cream); Hot Dog! (Complete the Italy Campaign); El Alamost (Complete the North Africa Operation)."
            ]
        },
        {
            "heading": "Skirmish & Multiplayer",
            "body": [
                "Completing a mission or skirmish without losing a squad and without reinforcing a squad, issuing orders in Tactical Pause (one, then 500), winning a Multiplayer or Skirmish match (one, then 25), using Battlegroup Abilities 100 times, and a flawless win with no Victory Point ticket lost.",
                "The achievements here: 0K (Complete a Mission or Skirmish without losing a Squad); You're Missing The Point (Complete a Mission or Skirmish without reinforcing a Squad); Full Stop (Issue an order in Tactical Pause); Master Of Full Stops (Issue 500 orders in Tactical Pause); It Always Leads Me Here (Win a Multiplayer or Skirmish match); But Still They Lead Me Back (Win 25 Multiplayer or Skirmish matches); Company Commander V3 (Use Battlegroup Abilities 100 times); No Quarter (Win a Multiplayer or Skirmish match without losing a Victory Point ticket)."
            ]
        },
        {
            "heading": "Hold Fast (Final Stand) Mode",
            "body": [
                "The co-op survival mode: earning a gold medal, a medal on 5 different maps and in co-op, a gold medal with no Outposts lost, 3000 Perk Points with each of the four factions (Afrikakorps, Wehrmacht, US Forces, British Forces), 1000 enemy kills, a boss-squad decapitation, 20 player-ability activations in a match, and reaching 150 population.",
                "The achievements here: Heroic Stand (Earn a gold medal.); Defensive Line (Earn a medal on 5 different maps.); United Front (Earn a medal in co-op mode.); Impenetrable (Earn a gold medal without losing any Outposts.); Afrikakorps Mastery (Earn 3000 Perk Points as Afrikakorps.); Wehrmacht Mastery (Earn 3000 Perk Points as Germans.); US Forces Mastery (Earn 3000 Perk Points as Americans.); British Forces Mastery (Earn 3000 Perk Points as British.); Carnage (Kill 1,000 enemy units.); Decapitation (Kill a boss squad before killing any other squad in the wave.); Tactical Supremacy (Activate 20 player abilities in a Final Stand match.); Overwhelming Numbers (Reach 150 population.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Italian Campaign carefully on your preferred difficulty, doing companion side content to keep Valenti, Buckram and Norton all at 100% loyalty, collecting Soldier Stories, and taking the actions for Volturno Breaker, Gustav Breaker, Anniehilator and Historical Reparation.",
                "2. Finish the Italy Campaign (Hot Dog!) and play the shorter North Africa Operation to completion.",
                "3. Do the skirmish feats against the AI - a no-squad-loss mission and a no-reinforce mission are easiest on an easy skirmish, and issue plenty of Tactical Pause orders toward the 500 total.",
                "4. Play multiplayer or skirmish matches for the 25 wins, 100 Battlegroup ability uses, and a no-VP-lost flawless win.",
                "5. Grind the Hold Fast / Final Stand mode: earn the medals (gold, five maps, co-op, no Outposts lost), do the combat feats, and reach 3000 Perk Points with each of the four factions.",
                "Tip: the Final Stand faction-mastery grind (3000 Perk Points x4) is the game's longest achievement - play each faction until its mastery is done before switching, since Perk Points are per-faction and you make no progress on the others while playing one."
            ]
        }
    ]
};
