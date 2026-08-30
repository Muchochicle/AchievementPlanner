// Ashes of the Singularity: Escalation Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ashes-of-the-singularity-escalation.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   507490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ashes-of-the-singularity-escalation-achievement-guide",
    "category": "game",
    "gameSlug": "ashes-of-the-singularity-escalation",
    "icon": "💠",
    "title": "Ashes of the Singularity: Escalation Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Ashes of the Singularity: Escalation - none are hidden. Covers the multiplayer and skirmish feats, and the campaign and core-mechanic achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ashes of the Singularity: Escalation has 54 Steam achievements and none of them are hidden. About half are multiplayer and skirmish feats - win the Ascendancy Wars, win a skirmish as each faction, beat unfair teams, reach ranked ranks up to Legendary, and various in-match feats (waste no resources, field 1,000 Logistics of units, level a Dreadnought to 5). The rest are the campaign missions - the Imminent Crisis campaign, the Memories and Escalation DLC campaigns, the conquered-planet feats - plus a few core-mechanic achievements (complete the tutorial, upgrade a building, own 10,000 metal or radioactives).",
                "Nothing is missable - missions and skirmish modes are all replayable and there are no time-limited achievements. The completion's main gates are Legendary ranked status and the unfair-teams-against-Insane-AI feats.",
                "Tip: play the tutorial and all three campaigns first for roughly half the list, then do the skirmish faction wins and in-match feats against AI, and leave the ranked-multiplayer achievements (up to Legendary) as a separate long project."
            ]
        },
        {
            "heading": "Multiplayer & Skirmish Feats",
            "body": [
                "Winning the Ascendancy Wars (a six-player match and for the Post-Humans), match wins by annihilation and victory points, skirmish wins as the Post-Humans and the Substrate, beating unfair teams, a win after a teammate lost, the ranked-match and rank-5 and Legendary feats, the resource-waste feats, a free-for-all Substrate win, a win after critical Nexus damage, 1,000 Logistics of units, a level-5 Dreadnought, 30 bombers at once, orbital support, level 10 in a global upgrade, a handicap win, and the Insane-AI unfair-teams feats (with and without a human ally).",
                "The achievements here: Fight the Future (Won a six-player match in the Ascendancy Wars); For Humanity! (Won the Ascendancy Wars for the Post-Humans); Real Ultimate Power (Won a match by destroying all opposition); Total Conversion (Won a match on victory points); This World is Mine (Won a skirmish game as the Post-Humans); No Further, Expansionist Pig-Dogs (Won a skirmish game as the Substrate); Come Get Some (Won a skirmish against unfair teams); Alas, Poor (Space) Yorick (Win a match after a teammate has lost. Thanks a bunch, pal.); Band of Tactically Compatible Networked Intelligences (Stomped the comp with human teammates); My Kingdom For A Suitably Entangled Set of Subatomic Particles (Lost a skirmish game); Don't Hurt Me (Joined a ranked match); Good Sport (Stuck around to the bitter end in a multiplayer loss); Seeing Stars (Reached rank 5 in ranked multiplayer); The Final Countdown (Reached Legendary status in multiplayer. #respect); Mo' Metal, Mo' Problems (Didn't even sweat wasting 3,000 metal in a single match); Fitter. Happier. More Productive (Won a match without wasting a single resource); Paranoid Android (Won a 3+ player free-for-all game as Substrate); Infinitely Improbable (Won a game after your Nexus was dealt critical damage); A Quality All Its Own (Fielded 1,000 Logistics worth of units); There Are Many Like It, But This One Is Mine (Reached level 5 with a Dreadnought); Probably Send These At The Other Guy's Nexus (Fielded 30 units of bombers at once); A Little Help Down Here? (Called in orbital support); Total Recall (Reached level 10 in any global upgrade); Not Too Proud (Won a skirmish with a handicap); Basically Like Worf And Chewbacca Fighting Back To Back (Defeated an unfair-teams skirmish against Insane AIs with a fellow human fighting at your side); Master of the Singularity (Defeated an unfair-teams skirmish against Insane AIs with no human help)."
            ]
        },
        {
            "heading": "Campaigns & Core Feats",
            "body": [
                "The Imminent Crisis campaign missions (1st, 3rd, 4th, 5th, 8th, 9th and final) and conquering Artorius, the tutorial, an Observer game, conquering Roceda, Silgul and Falnass, the three Memories DLC missions, the nine Escalation DLC missions, upgrading a building, and owning 10,000 metal and 10,000 radioactives.",
                "The achievements here: Hell from Above (Completed the first Imminent Crisis mission); This Splinter is No Master (Complete the third Imminent Crisis mission); Brainwhale! (Completed the fourth Imminent Crisis mission); Artillery! Artillery! Uber Alles (Completed the fifth Imminent Crisis mission); My Constructs Blot Out the Sun (Completed the eighth Imminent Crisis mission); I Dread Very Little Indeed (Completed the ninth Imminent Crisis mission); She's Really Incurred My Wrath (Conquered Artorius); Wait, Don't They Eat People There? (Completed the final Imminent Crisis mission); Can I Play Now, Daddy? (Completed the Tutorial); Beat The Turinium Test (Conquered Roceda); All I Do is Win (Conquered Silgul); Strike Force Omega (Conquered Falnass); Big Brother (Watch a game as an Observer); Loot Crate (Completed the first Memories mission); Renegade Rumble (Completed the second Memories mission); Love and Hate (Completed the third Memories mission); Sword and shield (Completed the first Escalation mission); Betelgeuse, Betelgeuse, Betelgeuse! (Completed the second Escalation mission); Hitting it where it hurts (Completed the third Escalation mission); Harbinger of Doom (Completed the fourth Escalation mission); Six on one, sounds fair to me (Completed the fifth Escalation mission); Look at all of the wonderful toys (Completed the sixth Escalation mission); Divided and conquered (Completed the seventh Escalation mission); It's a mad, mad world (Completed the eigth Escalation mission); Biting the hand that fed you (Completed the ninth Escalation mission); It's new and improved! (Upgrade a building); Over ten thousand! (Own 10,000 metal); Glowing Green (Own 10,000 radioactives)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the tutorial, then play the Imminent Crisis campaign start to finish, conquering each named planet.",
                "2. Play the Memories and Escalation DLC campaigns.",
                "3. Do the skirmish faction wins and in-match feats (no wasted resources, 1,000 Logistics, a level-5 Dreadnought, 30 bombers, orbital support) against AI.",
                "4. Do the unfair-teams-vs-Insane-AI feats, first with a human ally and then solo.",
                "5. Grind ranked multiplayer up to rank 5 and then Legendary status.",
                "Tip: the resource feats (10,000 metal, 10,000 radioactives, field 1,000 Logistics, no wasted resources) can all be done in one long turtle game on a resource-rich map against a passive AI - build a wide economy, stop spending, and let the totals climb."
            ]
        }
    ]
};
