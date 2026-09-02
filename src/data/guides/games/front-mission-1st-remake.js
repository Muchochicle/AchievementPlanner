// FRONT MISSION 1st: Remake Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/front-mission-1st-remake.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2399730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "front-mission-1st-remake-achievement-guide",
    "category": "game",
    "gameSlug": "front-mission-1st-remake",
    "icon": "🤖",
    "title": "FRONT MISSION 1st: Remake Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in FRONT MISSION 1st: Remake (1 hidden). The one hidden achievement is a one-on-one duel with Driscoll. Everything else - the two campaign completions and their recruit-all achievements, the per-mission objective achievements, and the Wanzer, Arena and pilot-stat feats - carries Steam's own text. Many are missable within a single mission.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FRONT MISSION 1st: Remake has 29 Steam achievements, 1 of them hidden. It is a remake of the 1995 tactical mecha RPG, playable from both the OCU (Huffman conflict) and the added UCS sides. The visible achievements cover completing both campaigns and recruiting every team member in each, painting a Wanzer, the pilot-stat feats (max one, then three stats), destroying 100 enemy Wanzers, winning 10 Arena fights, obtaining every mobile weapon, and a long list of per-mission objectives (no unit lost, complete a mission solo, defeat Hell's Walls in 10 turns, clear the Karen valley, thwart the dam plot, and more).",
                "The 1 hidden achievement is defeating Driscoll in a one-on-one duel in the 2090 mission, which requires leaving one other enemy alive.",
                "The catalog marks it difficulty 3 and two playthroughs (one per campaign). Many mission-objective achievements have a single window and are missable - use a checklist."
            ]
        },
        {
            "heading": "Campaigns",
            "body": [
                "Completing the OCU and UCS campaigns and recruiting every team member in each, and the 'watch a feature about the war' beat.",
                "The achievements here: RECRUITER (Recruit all team members in the OCU campaign); SHOULDER TO SHOULDER (Recruit all team members in the UCS campaign); TILL THE VERY END... (Complete the OCU campaign); FOR WHAT WE BELIEVE IN (Complete the UCS campaign); WHEN THE WAR BEGAN (Watch a feature about the outbreak of the war)."
            ]
        },
        {
            "heading": "Wanzers & Combat",
            "body": [
                "Painting a Wanzer, the pilot-stat feats, destroying 100 Wanzers, 10 Arena wins, a BA mine kill, obtaining every mobile weapon, and the completion achievement.",
                "The achievements here: I HAVE MY OWN SYSTEM (Change the paint of the Wanzer); ACE PILOT (Achieve the highest level in one piloting statistic); THE BEST MATERIAL (Achieve the highest level in three piloting statistics); VETERAN (Destroy 100 enemy Wanzers); KABUUM! (Damage an enemy unit with a BA mine); HOT-BLOODED (Win 10 fights in the Arena); SAKATA'S SHAREHOLDER (Obtain all the available mobile weapons in the game); THE COLLECTOR (Earn all the remaining achievements)."
            ]
        },
        {
            "heading": "Mission Objectives",
            "body": [
                "The per-mission objectives - no unit lost, a solo mission, the carriage-recovery run, Hell's Walls in 10 turns, Gina in the weapons depot, the dam plot, Fort Monus, the Karen valley, Cassowary, Grieg's team, Gentz's attack, the central building, the rebel camp, meeting Griff and the Hero League - and the hidden Driscoll duel.",
                "The achievements here: OUTSTANDING CAPTAIN (Complete the mission without losing a single unit); BUBBLEGUM CRISIS (Recover all items before explosives destroy the carriage); ONE AGAINST ALL (Complete the mission alone); HELL YEA (Defeat Hell's Walls within the first 10 turns); OUTDAMAGED (Eliminate Gina inside the weapons depot); BORDER DEFENDER (Thwart the enemy's plan to blow up the dam); MAD LECTER (Help Glen at Fort Monus); NEW SCARS (Clear the Karen valley of enemy units); CASStOWAYS (Destroy HAH04 Cassowary before it reaches the final waypoint); IMPOSSIBLE SPARRING (Win a skirmish with Grieg's team); WHATEVER THE COMMAND MAY BE (Do not lose a single supply unit in Gentz's attack); DEFENSIVE FORMATION (Prevent enemy units from reaching the central building); HEROES DON'T DIE (Locate the rebel camp); I'M STRONGER THAN YOU (Defeat Driscoll one-on-one in the 2090 mission - leave one other enemy alive so the duel can trigger.); HERO LEAGUE (Meet Morgan, Randy, Hector, Walter, Billy, Darril and Ernest); SAFE RETURN (Meet Griff)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the OCU campaign with a mission-objective checklist to hand - most of the per-mission achievements have one window and cannot be replayed without a full run.",
                "2. Recruit every OCU team member and complete the campaign, then do the same for the UCS campaign.",
                "3. On the 2090 mission, leave one non-Driscoll enemy alive and duel Driscoll one-on-one for 'I'm Stronger Than You'.",
                "4. Grind the Arena for 10 wins and max a pilot's stats (one, then three), and destroy 100 enemy Wanzers along the way.",
                "5. Obtain every mobile weapon in the game for 'Sakata's Shareholder', then the completion achievement.",
                "Tip: keep a save at the start of every mission that has an objective achievement - 'no unit lost', the turn limits and the 'destroy X before it reaches the waypoint' objectives are all easy to fail on a first attempt, and a per-mission save turns a two-run platinum into exactly two runs."
            ]
        }
    ]
};
