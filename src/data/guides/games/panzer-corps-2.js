// Panzer Corps 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/panzer-corps-2.json), whose 130 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1072040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "panzer-corps-2-achievement-guide",
    "category": "game",
    "gameSlug": "panzer-corps-2",
    "icon": "🚩",
    "title": "Panzer Corps 2 Achievement Guide",
    "summary": "A practical guide to all 130 Steam achievements in Panzer Corps 2 - none are hidden. Covers the puzzle and scenario wins, the Wehrmacht campaign and elite-unit achievements, and the difficulty clears of every base and DLC campaign. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Panzer Corps 2 has 130 Steam achievements and none are hidden. Twelve are puzzle solves and eight are one-off scenario wins. The rest are almost entirely campaign difficulty clears - each campaign (Wehrmacht, Spanish Civil War, Axis Operations 1939 through 1946, and every Frontlines / War Stories / DLC campaign) has five achievements for finishing it on Major, Colonel, General, Field Marshal and Generalissimus difficulty - plus nine 'five-star elite unit' achievements and a couple of unit-carry-over feats ('Ultimate Veteran').",
                "The catalog marks it missable and roughly three-plus playthroughs - the higher difficulty tiers stack downward (a Generalissimus clear grants all five), so one strong run per campaign covers its whole set, but 'Ultimate Veteran' (carry a unit from the Spanish Civil War into the 1946 American campaign) and the 'guide character X safely' Poland achievements need care within a run.",
                "Tip: play each campaign once on Generalissimus if you can hold it - that single clear unlocks the Major through Generalissimus achievements for that campaign all at once."
            ]
        },
        {
            "heading": "Puzzles & Scenarios",
            "body": [
                "Launching the game, the tutorial, the twelve puzzle solves (Mouse Hunt, Successful Suppress, Bring them Home, Impossible Siege, Cat Trap, River Panther, Fireworks, Enemy of my Enemy, Double Strike, Operation X), and the eight one-off scenario wins (Rzhev, Prague Offensive, Gothic Line, Lorraine, Crete, Fall Weiss, Defender of the Reich, Fjord War).",
                "The achievements here: You are the Best (Launch the game once); Prepped for Battle (Finish the Tutorial); Mouse Hunter (Solve \"Mouse Hunt\" puzzle); Successful Surrender (Solve \"Successful Suppress\" puzzle); The Great Escape (Solve \"Bring them Home\" puzzle); Impossible is Possible (Solve \"Impossible Siege\" puzzle); Cat Hunter (Solve \"Cat Trap\" puzzle); Panther Hunter (Solve \"River Panther\" puzzle); Victory Fireworks (Solve \"Fireworks\" puzzle); Helpful Enemy (Solve \"Enemy of my Enemy\" puzzle); Double Smart (Solve \"Double Strike\" puzzle); Xolved (Solve \"Operation X\" puzzle); Hero of Rzhev (Win \"Battle of Rzhev\" scenario); Hero of Prague Offensive (Win \"Prague Offensive\" scenario); Hero of Gothic Line (Win \"Gothic Line\" scenario); Hero of Lorraine (Win \"Lorraine\" scenario); Hero of Crete (Win \"Crete\" scenario); Hero of Fall Weiss (Win \"Fall Weiss\" scenario); Defender of the Reich (Win \"Defender of the Reich\" scenario); Conquered the Fjords (Win \"Fjord War\" scenario)."
            ]
        },
        {
            "heading": "Wehrmacht Campaign & Elite Units",
            "body": [
                "Finishing the Wehrmacht campaign on each difficulty (Major through Generalissimus), and gaining five stars on a unit of each type (tank, infantry, recon, artillery, anti-tank, anti-air, fighter, tactical bomber, strategic bomber).",
                "The achievements here: Wehrmacht Major (Finish Wehrmacht campaign on Major difficulty or higher); Wehrmacht Colonel (Finish Wehrmacht campaign on Colonel difficulty or higher); Wehrmacht General (Finish Wehrmacht campaign on General difficulty or higher); Wehrmacht Field Marshal (Finish Wehrmacht campaign on Field Marshal difficulty or higher); Wehrmacht Generalissimus (Finish Wehrmacht campaign on Generalissimus difficulty); Elite Tank (Gain five stars on a tank unit in a campaign); Elite Infantry (Gain five stars on an infantry unit in a campaign); Elite Recon (Gain five stars on a recon unit in a campaign); Elite Artillery (Gain five stars on an artillery unit in a campaign); Elite Anti-Tank (Gain five stars on an anti-tank unit in a campaign); Elite Anti-Air (Gain five stars on an anti-air unit in a campaign); Elite Fighter (Gain five stars on a fighter unit in a campaign); Elite Tactical Bomber (Gain five stars on a tactical bomber unit in a campaign); Elite Strategic Bomber (Gain five stars on a strategic bomber unit in a campaign)."
            ]
        },
        {
            "heading": "Spanish Civil War & Axis Operations 1939-1941",
            "body": [
                "The five difficulty clears each for the Spanish Civil War campaign and the Axis Operations 1939, 1940 and 1941 campaigns.",
                "The achievements here: Spanish Major (Finish Spanish Civil War campaign on Major difficulty or higher); Spanish Colonel (Finish Spanish Civil War campaign on Colonel difficulty or higher); Spanish General (Finish Spanish Civil War campaign on General difficulty or higher); Spanish Field Marshal (Finish Spanish Civil War campaign on Field Marshal difficulty or higher); Spanish Generalissimus (Finish Spanish Civil War campaign on Generalissimus difficulty); 1939 Major (Finish Axis Operations 1939 campaign on Major difficulty or higher); 1939 Colonel (Finish Axis Operations 1939 campaign on Colonel difficulty or higher); 1939 General (Finish Axis Operations 1939 campaign on General difficulty or higher); 1939 Field Marshal (Finish Axis Operations 1939 campaign on Field Marshal difficulty or higher); 1939 Generalissimus (Finish Axis Operations 1939 campaign on Generalissimus difficulty); 1940 Major (Finish Axis Operations 1940 campaign on Major difficulty or higher); 1940 Colonel (Finish Axis Operations 1940 campaign on Colonel difficulty or higher); 1940 General (Finish Axis Operations 1940 campaign on General difficulty or higher); 1940 Field Marshal (Finish Axis Operations 1940 campaign on Field Marshal difficulty or higher); 1940 Generalissimus (Finish Axis Operations 1940 campaign on Generalissimus difficulty); 1941 Major (Finish Axis Operations 1941 campaign on Major difficulty or higher); 1941 Colonel (Finish Axis Operations 1941 campaign on Colonel difficulty or higher); 1941 General (Finish Axis Operations 1941 campaign on General difficulty or higher); 1941 Field Marshal (Finish Axis Operations 1941 campaign on Field Marshal difficulty or higher); 1941 Generalissimus (Finish Axis Operations 1941 campaign on Generalissimus difficulty)."
            ]
        },
        {
            "heading": "Axis Operations 1942-1946",
            "body": [
                "The five difficulty clears each for the Axis Operations 1942, 1943, 1944, 1945 and 1946 campaigns, plus 'Ultimate Veteran' - carrying a unit that served in the Spanish Civil War into the 1946 American campaign.",
                "The achievements here: 1942 Major (Finish Axis Operations 1942 campaign on Major difficulty or higher); 1942 Colonel (Finish Axis Operations 1942 campaign on Colonel difficulty or higher); 1942 General (Finish Axis Operations 1942 campaign on General difficulty or higher); 1942 Field Marshal (Finish Axis Operations 1942 campaign on Field Marshal difficulty or higher); 1942 Generalissimus (Finish Axis Operations 1942 campaign on Generalissimus difficulty); 1943 Major (Finish Axis Operations 1943 campaign on Major difficulty or higher); 1943 Colonel (Finish Axis Operations 1943 campaign on Colonel difficulty or higher); 1943 General (Finish Axis Operations 1943 campaign on General difficulty or higher); 1943 Field Marshal (Finish Axis Operations 1943 campaign on Field Marshal difficulty or higher); 1943 Generalissimus (Finish Axis Operations 1943 campaign on Generalissimus difficulty); 1944 Major (Finish Axis Operations 1944 campaign on Major difficulty or higher); 1944 Colonel (Finish Axis Operations 1944 campaign on Colonel difficulty or higher); 1944 General (Finish Axis Operations 1944 campaign on General difficulty or higher); 1944 Field Marshal (Finish Axis Operations 1944 campaign on Field Marshal difficulty or higher); 1944 Generalissimus (Finish Axis Operations 1944 campaign on Generalissimus difficulty); 1945 Major (Finish Axis Operations 1945 campaign on Major difficulty or higher); 1945 Colonel (Finish Axis Operations 1945 campaign on Colonel difficulty or higher); 1945 General (Finish Axis Operations 1945 campaign on General difficulty or higher); 1945 Field Marshal (Finish Axis Operations 1945 campaign on Field Marshal difficulty or higher); 1945 Generalissimus (Finish Axis Operations 1945 campaign on Generalissimus difficulty); 1946 Major (Finish Axis Operations 1946 campaign on Major difficulty or higher); 1946 Colonel (Finish Axis Operations 1946 campaign on Colonel difficulty or higher); 1946 General (Finish Axis Operations 1946 campaign on General difficulty or higher); 1946 Field Marshal (Finish Axis Operations 1946 campaign on Field Marshal difficulty or higher); 1946 Generalissimus (Finish Axis Operations 1946 campaign on Generalissimus difficulty or higher); Ultimate Veteran (Bring a unit that served in the Spanish Civil War into the 1946 Amerika Campaign)."
            ]
        },
        {
            "heading": "Frontlines & War Stories DLC",
            "body": [
                "The difficulty clears for the Frontlines - Bulge campaign, the War Stories - Fall of Poland campaign (and guiding Captain Orkan, Lieutenant Urbanowicz, Nurse Lewinski, Civilian Paszkowski and Commander Balinski safely through it), and the Cyrenaica Italian and British campaigns.",
                "The achievements here: Bulge Major (Finish Frontlines - Bulge campaign on Major difficulty or higher); Bulge Colonel (Finish Frontlines - Bulge campaign on Colonel difficulty or higher); Bulge General (Finish Frontlines - Bulge campaign on General difficulty or higher); Bulge Field Marshal (Finish Frontlines - Bulge campaign on Field Marshal difficulty or higher); Bulge Generalissimus (Finish Frontlines - Bulge campaign on Generalissimus difficulty or higher); Poland Major (Finish War Stories - Fall of Poland campaign on Major difficulty or higher); Poland Colonel (Finish War Stories - Fall of Poland campaign on Colonel difficulty or higher); Poland General (Finish War Stories - Fall of Poland campaign on General difficulty or higher); Poland Field Marshal (Finish War Stories - Fall of Poland campaign on Field Marshal difficulty or higher); Poland Generalissimus (Finish War Stories - Fall of Poland campaign on Generalissimus difficulty or higher); The Captain (Guide Captain Orkan safely through the Fall of Poland DLC Campaign); The Lieutenant (Guide Lieutenant Urbanowicz safely through the Fall of Poland DLC Campaign); The Nurse (Guide Nurse Lewinski safely through the Fall of Poland DLC Campaign); The Civilian (Guide Civilian Paszkowski safely through the Fall of Poland DLC Campaign); The Tanker (Guide Commander Balinski safely through the Fall of Poland DLC Campaign); Cyrenaica Italian Major (Finish the Frontlines - Cyrenaica's Italian campaign on Major difficulty or higher); Cyrenaica Italian Colonel (Finish the Frontlines - Cyrenaica's Italian campaign on Colonel difficulty or higher); Cyrenaica Italian General (Finish the Frontlines - Cyrenaica's Italian campaign on General difficulty or higher); Cyrenaica Italian Field Marshal (Finish the Frontlines - Cyrenaica's Italian campaign on Field Marshal difficulty or higher); Cyrenaica Italian Generalissimus (Finish the Frontlines - Cyrenaica's Italian campaign on Generalissimus difficulty); Cyrenaica British Major (Finish the Frontlines - Cyrenaica's British campaign on Major difficulty or higher); Cyrenaica British Colonel (Finish the Frontlines - Cyrenaica's British campaign on Colonel difficulty or higher); Cyrenaica British General (Finish the Frontlines - Cyrenaica's British campaign on General difficulty or higher); Cyrenaica British Field Marshal (Finish the Frontlines - Cyrenaica's British campaign on Field Marshal difficulty or higher); Cyrenaica British Generalissimus  (Finish the Frontlines - Cyrenaica's British campaign on Generalissimus difficulty)."
            ]
        },
        {
            "heading": "Ghost Division, Westwall & Later DLC",
            "body": [
                "The difficulty clears for the Ghost Division, Frontlines - Westwall, First Guards, Italy Vol.1 and All American campaigns.",
                "The achievements here: Ghost Division Major (Finish the Ghost Division campaign on Major difficulty or higher); Ghost Division Colonel (Finish the Ghost Division campaign on Colonel difficulty or higher); Ghost Division General (Finish the Ghost Division campaign on General difficulty or higher); Ghost Division Field Marshal (Finish the Ghost Division campaign on Field Marshal difficulty or higher); Ghost Division Generalissimus (Finish the Ghost Division campaign on Generalissimus difficulty); Westwall Major (Finish Frontlines - Westwall campaign on Major difficulty or higher); Westwall Colonel (Finish Frontlines - Westwall campaign on Colonel difficulty or higher); Westwall General (Finish Frontlines - Westwall campaign on General difficulty or higher); Westwall Field Marshal (Finish Frontlines - Westwall campaign on Field Marshal difficulty or higher); Westwall Generalissimus (Finish Frontlines - Westwall campaign on Generalissimus difficulty); First Guards Major (Finish the First Guards campaign on Major difficulty or higher); First Guards Colonel (Finish the First Guards campaign on Colonel difficulty or higher); First Guards General (Finish the First Guards campaign on General difficulty or higher); First Guards Field Marshall (Finish the First Guards campaign on Field Marshall difficulty or higher); First Guards Generalissimus (Finish the First Guards campaign on Generalissimus difficulty or higher); Italy Vol.1 Major (Finish the Italy Vol.1 campaign on Major difficulty or higher); Italy Vol.1 Colonel (Finish the Italy Vol.1 campaign on Colonel difficulty or higher); Italy Vol.1 General (Finish the Italy Vol.1 campaign on  General difficulty or higher); Italy Vol.1 Field Marshall (Finish the Italy Vol.1 campaign on  Field Marshall difficulty or higher); Italy Vol.1 Generalissimus (Finish the Italy Vol.1 campaign on Generalissimus difficulty); All American Major (Finish the All American campaign on Major difficulty or higher); All American Colonel (Finish the All American campaign on Colonel difficulty or higher); All American General (Finish the All American campaign on General difficulty or higher); All American Field Marshal (Finish the All American campaign on Field Marshal difficulty or higher); All American Generalissimus (Finish the All American campaign on Generalissimus difficulty)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial and the twelve puzzle scenarios first - they are short and self-contained.",
                "2. Win the eight one-off historical scenarios.",
                "3. Play the Wehrmacht campaign, keeping core units alive to earn the nine five-star elite-unit achievements.",
                "4. Play each Axis Operations year campaign in sequence, carrying a Spanish Civil War veteran forward for 'Ultimate Veteran'.",
                "5. Work through the DLC campaigns, aiming for the highest difficulty you can hold in each.",
                "Tip: play at the highest difficulty you can actually finish - a Generalissimus clear grants Major, Colonel, General, Field Marshal and Generalissimus for that campaign in one go, so a lower clear just means replaying it."
            ]
        }
    ]
};
