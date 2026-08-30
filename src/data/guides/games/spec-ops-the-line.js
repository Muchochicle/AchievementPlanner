// Spec Ops: The Line Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/spec-ops-the-line.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   50300 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "spec-ops-the-line-achievement-guide",
    "category": "game",
    "gameSlug": "spec-ops-the-line",
    "icon": "🪖",
    "title": "Spec Ops: The Line Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Spec Ops: The Line - none are hidden. Covers the chapter-progress, moral-choice and difficulty achievements, the combat and Intel feats, and the branching-ending achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Spec Ops: The Line has 50 Steam achievements and none of them are hidden. About half are unmissable story progress - completing each chapter, and both sides of the game's several moral-choice moments (mercy vs. execution, orders vs. conscience, vengeance vs. restraint), which means at least two passes through those scenes. The rest are combat feats (kill counts per weapon class, 250 headshots, various single-encounter challenges) done in the campaign, the three Intel-collectible tiers, and the four difficulty completions up to FUBAR.",
                "The moral-choice achievements are the reason this is a two-playthrough completion: each choice unlocks one achievement per outcome, and chapter select lets you replay the relevant scene for the other side. The weapon kill-count achievements accumulate across the whole campaign, so pick different weapons on your second run.",
                "Tip: do your first run on Suicide Mission difficulty (which also credits the two lower ones) taking one side of every choice and collecting all Intel, then a fast FUBAR run taking the opposite choices - FUBAR is much easier the second time when you know every encounter."
            ]
        },
        {
            "heading": "Chapter Progress, Choices & Difficulty",
            "body": [
                "The chapter-completion achievements (They Live through A Bridge Too Far), both sides of the early choices (A Man of Action / A Man of Patience, Damned if You Do / Damned if You Don't, Friendly Fire / Unfriendly Fire, A Line, Crossed / A Line, Held), and completing the game on Walk on the Beach, Combat Op and Suicide Mission difficulty.",
                "The achievements here: They Live (What's lost is found.); Treacherous Ground (Look out below.); The Lost Battalion (We have contact.); Desert Storm (Engineer an exit strategy.); The Horror (Face the horrors of war.); Three Kings (Stand united.); The Great Escape (Get out of here!); A Bridge Too Far (The end of the line.); A Man of Action (Play it loose.); A Man of Patience (Play it smart.); Damned if You Do (Follow your orders.); Damned if You Don't (Buck the chain of command.); Friendly Fire (Show mercy.); Unfriendly Fire (Save a bullet.); A Line, Crossed (Choose vengeance.); A Line, Held (Choose restraint.); Boot (Complete game on \"Walk on the Beach\" difficulty.); We Were Soldiers (Complete game on \"Combat Op\" difficulty.); The Devil's Disciple (Complete game on \"Suicide Mission\" difficulty.)."
            ]
        },
        {
            "heading": "Combat Feats & Intel",
            "body": [
                "The Marksman kill-count feats for rifles, small arms, shotguns, snipers, grenades and heavy weapons, 250 headshots, blind-fire and sprint-to-cover feats, the single-grenade and shotgun multi-kills, a 60%+ accuracy no-death chapter, three clean chapters in a row, 50 Attack Command kills, the one / 12 / all Intel tiers, the sticky-grenade kill, FUBAR difficulty, the edged-weapon and grenade-throw counter-kills, killing an oryx, zip-line kills, 10 melee hits, the sandbomb stun, a vault kick, and Adapt and Overcome.",
                "The achievements here: Marksman - Rifle (Kill 350 enemies with any rifle. (campaign only)); Marksman - Small Arms (Kill 100 enemies with any pistol or SMG. (campaign only)); Marksman - Shotgun  (Kill 75 enemies with any shotgun. (campaign only)); Marksman - Sniper (Kill 50 enemies with any sniper rifle. (campaign only)); Marksman - Grenade (Kill 50 enemies with grenades. (campaign only)); Aim High (Kill 250 enemies with headshots. (campaign only)); Blind Luck (Kill 5 enemies using blind fire. (campaign only)); Good Training (Sprint into cover 10 times while under fire. (campaign only)); Army of One (Kill 3 enemies with a single grenade. (campaign only)); All You Can Be (Complete any chapter with 60%+ accuracy without dying or reloading a checkpoint.); Sierra Hotel (Complete three chapters in a row without being killed or reloading a checkpoint.); Close Combat Carnage (Kill 4 enemies with a shotgun in 10 seconds or less. (campaign only)); Battle Management (Kill 50 enemies using only the Attack Command. (campaign only)); Spotter (Recover one Intel Item.); Recon (Recover 12 Intel Items.); Intel Operative (Recover all Intel Items.); The Human Factor (Kill an enemy by tagging him with a sticky grenade. (campaign only)); MFWIC (Complete game on \"FUBAR\" difficulty.); Marksman - Heavy Arms (Kill 150 enemies with any heavy weapon. (campaign only)); Damn Close (Kill an Edged Weapon Expert while he is up to 5 meters away. (campaign only)); Preventive Diplomacy (Kill an enemy just as they are throwing a grenade. (campaign only)); Deer Hunter (Kill an oryx. (campaign only)); Airspace Control (Kill 10 enemies while they use zip lines or are rappelling. (campaign only)); Applied Force (Hit 10 enemies with your melee attack. (campaign only)); Situational Awareness (Stun an enemy by dumping sand on their head. (campaign only)); In Your Face (Kick an enemy by vaulting over a cover. (campaign only))."
            ]
        },
        {
            "heading": "Endings & Final Feats",
            "body": [
                "The branching-ending achievements (A Farewell To Arms, Too Late The Hero, The Road Back, The Road To Glory) and blowing up 10 explosive objects with a kill each time.",
                "The achievements here: A Farewell To Arms (You are relieved.); Too Late The Hero (Carry on, soldier.); The Road Back (Live and let live.); The Road To Glory (Live and let die.); Adapt and Overcome (Blow up 10 explosive objects, killing at least one enemy each time. (campaign only))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run on Suicide Mission difficulty, taking one consistent side of every moral choice and recovering all Intel items.",
                "2. On that run, focus your kills through two or three weapon classes to bank those Marksman achievements, and do the single-encounter feats (blind fire, sprint to cover, the oryx, zip-line kills) as they come up.",
                "3. Use chapter select to replay each moral-choice scene for the opposite outcome and any missed chapter feats.",
                "4. Do the accuracy and no-death chapter challenges (All You Can Be, Sierra Hotel) with checkpoints memorised.",
                "5. Do a fast FUBAR run for MFWIC, using different weapon classes to finish off any remaining Marksman counts.",
                "Tip: the Marksman kill counts carry across every campaign playthrough, so plan which weapons you will use on each run - rifles and headshots on the first, small arms / shotgun / sniper / heavy on the second - and you will finish all of them without a dedicated grind."
            ]
        }
    ]
};
