// Serious Sam HD: TFE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/serious-sam-hd-tfe.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   41000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "serious-sam-hd-tfe-achievement-guide",
    "category": "game",
    "gameSlug": "serious-sam-hd-tfe",
    "icon": "🔫",
    "title": "Serious Sam HD: TFE Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Serious Sam HD: TFE - none are hidden. Covers the single-player campaign and challenge runs, the co-op and rocket-jump feats, the deathmatch wins and frag counts, and the knife and frag-combo feats. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Serious Sam HD: The First Encounter has 35 Steam achievements and none are hidden. Nine are single-player - completing the game, the Serious-difficulty and par-time runs, the cannon pierce, clearing Karnak completely, 50 secrets, the no-load Metropolis run, and the no-shot 'I am invincible' clear. The rest are multiplayer: co-op completions, 100 rocket jumps, deathmatch wins (up to 1000), a large set of cumulative frag counts (100 to 1337), and the knife, backstab and frag-combo feats.",
                "The catalog marks it difficulty 4 - 'I am invincible' (finish the game without firing a bullet or shell), 'Serious Sam' (Serious difficulty) and the deathmatch grind ('Deathmatch Champion' is 1000 wins, 'Serious Fragger' 1000 frags) are all long. Nothing is missable: levels and matches replay, and every counter is cumulative.",
                "Tip: the frag-count and deathmatch-win achievements stack - play bot matches with a high frag limit and they all tick up together, so set up one long session rather than chasing them individually."
            ]
        },
        {
            "heading": "Single-player & Challenges",
            "body": [
                "Completing any level, completing the game, the Serious-difficulty and beat-the-par-time runs, piercing 10 enemies with one cannonball, killing every enemy in Karnak, 50 secrets, the no-load Metropolis run, and finishing the game without firing a bullet or shell.",
                "The achievements here: Serious Beginner (Complete any level in single player.); Game Master (Complete the game.); Serious Sam (Complete the game in single player on serious difficulty.); Serious Run (Complete the game in single player by beating estimated time on each level.); Cannon Expert (Pierce at least 10 enemies with a single cannonball.); Perfect Kill (Kill all enemies in Karnak in single player.); Look, it's a secret (Find at least 50 secrets in single player.); Metropolis King (Complete Metropolis level in single player on serious difficulty without loading.); I am invincible (Complete the game in single player without firing a single bullet or shell.)."
            ]
        },
        {
            "heading": "Co-op & Rocket Jumps",
            "body": [
                "A co-op level, The Great Pyramid on the 'hippy' blood setting, a Serious co-op game at 400% enemy strength, and 100 rocket jumps.",
                "The achievements here: Co-op Beginner (Complete any level in co-op.); Co-op Hippy (Complete The Great Pyramid in co-op with blood option set to hippy.); Serious Co-op (Complete a co-op game on serious difficulty and extra enemy strength on 400%.); Rocket Jumper (Perform 100 rocket jumps.)."
            ]
        },
        {
            "heading": "Deathmatch Wins & Frag Counts",
            "body": [
                "Winning a deathmatch, 100 and 1000 deathmatch wins, 100 deathmatches completed, 25 1-on-1 wins, the no-death frag-limit win, and the cumulative frag milestones (100, 500, 1000, 1337).",
                "The achievements here: Look Ma, I won! (Win a deathmatch.); Deathmatch Master (Win 100 deathmatch games.); Deathmatch Champion (Win 1000 deathmatch games.); Deathmatch Veteran (Complete 100 deathmatches.); Deathmatch Duelist (Win 25 1-on-1 deathmatches.); Untouchable (Win an at least 4 player deathmatch by reaching frag limit of at least 25 without dying.); Fragger (Frag a total of 100 players.); Crazy Fragger (Frag a total of 500 players.); Serious Fragger (Frag a total of 1000 players.); 1337 Fragger (Frag a total of 1337 players.)."
            ]
        },
        {
            "heading": "Knife & Combo Frag Feats",
            "body": [
                "The low-health knife frags, 100 knife frags, 100 knife-to-knife frags, 100 backstab frags, 100 different players fragged, the deathmatch marathon and its win, the Grudge and Nemesis repeat-frag feats, the frag combo and royal frag combo, and drowning an enemy.",
                "The achievements here: Desperate Fragger (Frag 25 players with a knife while having no more than 10 health left.); Butcher (Frag 100 players with a knife.); Swordsman (Frag 100 players in a knife-to-knife fight.); Backstabber (Frag 100 players with a knife from behind.); Diverse Fragger (Frag 100 different players in deathmatch.); Deathmatch Marathon (Complete a deathmatch with frag limit set to at least 200. (Frag limit must be reached!)); Deathmatch Marathon Winner (Win a deathmatch marathon.); Grudge (Frag the same player 5 times in a row in at least 4 player deathmatch.); Nemesis (Frag the same player 10 times during a single round in at least 4 player deathmatch.); Frag Combo (Perform 4 frags with each being no more than 10 seconds apart from the previous frag in at least 4 player deathmatch.); Royal Frag Combo (Frag all players in a single frag combo.); Swimming Instructor (Drown an enemy.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign once on Normal, grabbing 50 secrets and clearing Karnak fully.",
                "2. Do the challenge runs - Serious difficulty, beat-the-par-time, the no-load Metropolis run, and the no-shot 'I am invincible' clear.",
                "3. Do the co-op achievements with a partner (or bots where allowed).",
                "4. Set up long bot deathmatches with a high frag limit to stack the win counts and cumulative frag milestones.",
                "5. Mop up the knife, backstab and frag-combo feats in those same matches.",
                "Tip: 'I am invincible' allows the knife and environmental kills - lure enemies into hazards and use the knife on the rest; the serious-damage areas make some fights slow but not impossible."
            ]
        }
    ]
};
