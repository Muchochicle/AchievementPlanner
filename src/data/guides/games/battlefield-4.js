// Battlefield 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battlefield-4.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battlefield-4-achievement-guide",
    "category": "game",
    "gameSlug": "battlefield-4",
    "icon": "🎖️",
    "title": "Battlefield 4 Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Battlefield 4 (1 hidden). The one hidden achievement is 'Cold Blooded' - an icicle kill on the Final Stand map Operation Whiteout. Sourced from XboxAchievements and TrueAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battlefield 4 has 67 Steam achievements, 1 of them hidden. Battlefield 4 pairs a scripted single-player campaign with DICE's large-scale multiplayer. The visible achievements are the seven campaign missions (plus score targets and collectibles for each), the three endings and the campaign assignments, difficulty clears, a set of mission-specific weapon feats, the core multiplayer feats, and the five expansion packs (China Rising, Second Assault, Naval Strike, Dragon's Teeth, Final Stand).",
                "The single hidden achievement is 'Cold Blooded' - get a kill with an icicle on the Operation Whiteout map from the Final Stand expansion.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. The three endings need separate playthroughs or chapter select, and the DLC achievements require owning and playing each expansion (which now come with the base game)."
            ]
        },
        {
            "heading": "Campaign",
            "body": [
                "The seven campaign missions and their score targets, the difficulty clears (Easy, Normal, Hard), all collectibles (3 up to 28) and assignments, the three endings (save the Valkyrie by sacrificing Irish or Hannah, or let it be destroyed), and the mission-specific weapon feats (C4, RPG, headshots, Shank, adrenaline kills).",
                "The achievements here: Storm bringer (Obtain 20 000 points in the Singapore mission in the Campaign); A one-man riot (Obtain 11 000 points in the Shanghai mission in the Campaign); Terror of the deep (Obtain 11 000 points in the South China Sea mission in the Campaign); Gladiator (Obtain 12 000 points in the Kunlun Mountains mission in the Campaign); Above and beyond the call (Complete all Assignments in the Campaign); Demolition man (Obtain 15 000 points in the Tashgar mission in the Campaign); Guardian of the fleet (Obtain 6 000 points in the Suez mission in the Campaign); Full arsenal (Unlock all assignments and collectibles in the Campaign); Fish (Complete the Campaign on Easy); Dunn's pride (Obtain 7 000 points in the Baku mission in the Campaign); Braving the storm (Complete the Singapore mission in the Campaign); Wolves in sheep's clothing (Complete the Shanghai mission in the Campaign); The fall of a Titan (Complete the South China Sea mission in the Campaign); Dead by dawn (Complete the Kunlun Mountains mission in the Campaign); Guns at dawn (Complete the Suez mission in the Campaign); Fishing in Baku (Complete the Baku mission in the Campaign); Antediluvian (Complete the Tashgar mission in the Campaign); It was on the way... (Find 6 collectibles in the Campaign); Took a casual look around (Find 9 collectibles in the Campaign); Methodical search (Find 15 collectibles in the Campaign); Done some searching (Find 12 collectibles in the Campaign); No stone left unturned (Find 18 collectibles in the Campaign); Every nook and cranny (Find 21 collectibles in the Campaign); Stumbled over it (Find 3 collectibles in the Campaign); Wolf (Complete the Campaign on Normal); Tombstone (Complete the Campaign on Hard); Recon (Find 28 collectibles in the Campaign); Well placed (Get 10 kills with C4 in the Baku mission in the Campaign); Wrecker (Get 10 multi-kills in the Shanghai mission in the Campaign); Blood wake (Get 30 headshots in the South China Sea mission in the Campaign); War turtle (Get 15 kills with RPG in the Singapore mission in the Campaign); Infiltrator (Get 10 adrenaline kills in the Tashgar mission in the Campaign); Shawshank (Get 5 kills with Shank in the Kunlun Mountains mission in the Campaign); For tombstone (Let the Valkyrie be destroyed in the Campaign); For the people (Sacrifice Irish to save the Valkyrie in the Campaign); For the cause (Sacrifice Hannah to save the Valkyrie in the Campaign); Patience is a virtue (Experience all 3 endings in the Campaign)."
            ]
        },
        {
            "heading": "Multiplayer Core",
            "body": [
                "Dog-tag kills, a win of each game mode, 45 M1911 kills, Obliteration bomb deliveries, rank 25, Air Superiority, and vehicle kills (Dirtbike, SUAV, bomber, Titan engines).",
                "The achievements here: Turn around... (Perform 5 dog tag kills in Multiplayer); Won them all (Win a round of each game mode); .45 old school (Perform 45 kills with the M1911 Handgun in Multiplayer); Bomb squad (Deliver 5 bombs in Obliteration); Call me \"Sir\" (Reach rank 25); Fledgling (Play a round of Air Superiority); 2 Wheels (Get a kill with the Dirtbike); Mini Kamikaze (Kill an enemy with the SUAV); Death From Above (Get a kill with the bomber); Your Titan is Ready (Get a kill by activating the Titan Engines)."
            ]
        },
        {
            "heading": "Expansion Packs",
            "body": [
                "China Rising, Naval Strike, Dragon's Teeth and Final Stand - the assignment completions, map-specific kills and easter eggs (the hidden Caspian Border tunnel, the ceiling collapse, the AA Mine, the RAWR, the Ballistic Shield, the Levkov/Accipiter/RAWR triple), and playing every map of a pack.",
                "The achievements here: New Superpower (Complete all China Rising Assignments); Falling Down (Kill an enemy with a ceiling collapse in Operation Metro); Dirty Job (Find the hidden tunnel in Caspian Border); Torched (Ignite a brush fire using the repair tool in Operation Metro or Caspian Border); Risky Business (Kill an enemy flag carrier while carrying their flag in CTF); Blind Bomber (In a round get 5 kills with air vehicles in Gulf of Oman); The Big Leagues (Play a round of Carrier Assault); Killing Me Softly (Get a kill in the ACV); Spotted (Climb the highest point in Naval Strike); Fly Swatter (Kill an enemy with the AA Mine); No Parley (Get a kill with the old cannon); Link Repeater (Win 2 rounds of Chainlink); Bulletproof. Sort Of... (Spend 5 minutes using the Ballistic Shield); The Metropolitan (Play a round on all Dragon's Teeth maps); RC Assassin (Get 5 kills in a round with the RAWR); Street Fighter (Complete all Dragon's Teeth Assignments); Snowbound (Play all Final Stand maps); Cold Blooded (Get a kill with an icicle on the Operation Whiteout map (Final Stand expansion)); Has science gone too far? (Get a kill using the HT-95 Levkov, XD-1 Accipiter, Rorsch Mk-1, and Schipunov 42); King in the North (Complete all Final Stand Assignments)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Easy, using a guide for all 28 collectibles and going for the per-mission score targets and weapon feats.",
                "2. Use chapter select to get the three endings (Irish, Hannah, or let the Valkyrie go) and complete the campaign assignments.",
                "3. Replay the campaign on Hard for Tombstone (it grants Wolf and Fish).",
                "4. Do the core multiplayer feats - a win of each mode, dog-tag kills, the M1911 and Obliteration achievements, and rank 25.",
                "5. Work through each expansion's assignments and map easter eggs, including the Final Stand icicle kill on Operation Whiteout.",
                "Tip: the per-mission weapon feats (10 C4 kills in Baku, 15 RPG kills in Singapore) are far easier on Easy with unlimited retries from the last checkpoint - do them on the collectible run."
            ]
        }
    ]
};
