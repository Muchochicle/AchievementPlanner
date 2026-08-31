// Serious Sam HD: TSE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/serious-sam-hd-tse.json), whose 70 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   41010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "serious-sam-hd-tse-achievement-guide",
    "category": "game",
    "gameSlug": "serious-sam-hd-tse",
    "icon": "💀",
    "title": "Serious Sam HD: TSE Achievement Guide",
    "summary": "A practical guide to all 70 Steam achievements in Serious Sam HD: TSE - none are hidden. Covers the single-player campaign, episode and weapon feats, the deathmatch and frag feats, the Beast Hunt / CTF / mode achievements, and the Survival and secret achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Serious Sam HD: The Second Encounter has 70 Steam achievements and none are hidden. A core set is single-player - completing the game, the Serious-difficulty and par-time runs, the Matador knife feat, 80 secrets, the no-death Grand Cathedral run, and 100,001 combined kills. The bulk is multiplayer: the three episode masters, weapon-specific kill counts (Harpies, Laser gun, Cannon), the deathmatch and frag feats, and every competitive mode (Beast Hunt, Team Beast Hunt, Capture The Flag, Instant Kill, Last Man Standing, Last Team Standing, My Burden, Team Deathmatch) plus the Survival medals.",
                "The catalog marks it difficulty 4 - 'Sam I am' (100,001 kills), 'Cathedral King' (the final level on Serious with no death or load) and the huge spread of 'win 100 matches of mode X' achievements are all long grinds. Nothing is missable: levels and matches replay and every counter is cumulative.",
                "Tip: 'Sam I am' and the weapon kill counts tick up in co-op Survival - a few long Survival sessions with a partner clear the big cumulative kill achievements while also chasing the Survival medals."
            ]
        },
        {
            "heading": "Single-player, Episodes & Weapons",
            "body": [
                "Completing any level and the game, the Serious and par-time runs, the Matador knife feat, 80 secrets, the no-death Grand Cathedral run, 100,001 combined kills, a co-op level, Coin-op co-op, a deathmatch frag, 100 deathmatch wins, 100 rocket jumps, burning 500 enemies, the three episode masters (South America, Persia, Medieval), all secrets, the Harpy / Laser / Cannon weapon kill counts, all Rocket Launchers in Palenque, all Cannons in Teotihuacan, and the knife finish on Mordekai.",
                "The achievements here: Serious Beginner (Complete any level in single player.); Game Master (Complete the game.); Serious Sam (Complete the game in single player on serious difficulty.); Serious Run (Complete the game in single player by beating estimated time on each level.); Matador (Kill 50 Syrian Werebulls with a knife.); Look, it's a secret (Find at least 80 secrets in single player.); Cathedral King (Complete The Grand Cathedral level on serious difficulty without dying or loading.); Sam I am (Accumulate a total of 100,001 enemy kills and frags combined.); Co-op Beginner (Complete any level in at least 3 player cooperative game.); Coin-op Co-op (Complete a Coin-op cooperative game on normal or higher difficulty.); Deathmatch Beginner (Complete a deathmatch game with at least 1 frag.); Deathmatch Master (Win 100 deathmatch games.); Rocket Jumper (Perform 100 rocket jumps.); Burn Baby, Burn (Burn 500 enemies to death.); South America Master (Complete the South America episode in single player or cooperative.); Persia Master (Complete the Persia episode in single player or cooperative.); Medieval Master (Complete the Medieval episode in single player or cooperative.); Top Secret (Find all secrets in single player.); Bird Hunter (Kill 100 Harpies with the Sniper rifle.); Space Marine (Kill 1000 enemies with the Laser gun.); Bone Crusher (Kill 300 Kleers with the Cannon.); Rocket Man (Get all 3 Rocket launchers in Palenque - Sierra de Chiapas.); Balls of Steel (Find all 3 Cannons in Teotihuacan - The City of the Gods.); Braveheart (Deliver the final blow to Mordekai with the Knife.)."
            ]
        },
        {
            "heading": "Deathmatch & Frag Feats",
            "body": [
                "Winning a deathmatch, 1000 wins, 100 completed, 25 1-on-1 wins, the no-death frag-limit win, the cumulative frag milestones (100 to 1337), the low-health knife frags, 100 knife / knife-to-knife / backstab frags, 100 different players, the deathmatch marathon and its win, the Grudge and Nemesis feats, and the frag combo and royal frag combo.",
                "The achievements here: Look Ma, I won! (Win a Deathmatch.); Deathmatch Champion (Win 1000 Deathmatch games.); Deathmatch Veteran (Complete 100 Deathmatches.); Deathmatch Duelist (Win 25 1-on-1 Deathmatches.); Untouchable (Win an at least 4 player Deathmatch by reaching frag limit of at least 25 without dying.); Fragger (Frag a total of 100 players.); Crazy Fragger (Frag a total of 500 players.); Serious Fragger (Frag a total of 1000 players.); 1337 Fragger (Frag a total of 1337 players.); Desperate Fragger (Frag 25 players with a knife while having no more than 10 health left.); Butcher (Frag 100 players with a knife.); Swordsman (Frag 100 players in a knife-to-knife fight.); Backstabber (Frag 100 players with a knife from behind.); Diverse Fragger (Frag 100 different players.); Deathmatch Marathon (Complete a Deathmatch with frag limit set to at least 200. (Frag limit must be reached!)); Deathmatch Marathon Winner (Win a Deathmatch Marathon.); Grudge (Frag the same player 5 times in a row in at least 4 player match.); Nemesis (Frag the same player 10 times during a single round in at least 4 player match.); Frag Combo (Perform 4 frags with each being no more than 10 seconds apart from the previous frag in at least 4 player Deathmatch.); Royal Frag Combo (Frag all players in a single frag combo.)."
            ]
        },
        {
            "heading": "Beast Hunt, CTF & Modes",
            "body": [
                "The Coin-op life-saver and gold-rush feats, Beast Hunt and Team Beast Hunt (a level and all levels), Capture The Flag (a win, 25 wins, 100 points), Instant Kill (3 kills, 100 wins, a no-death streak), Last Man Standing and Last Team Standing, My Burden (a win, 100 wins, a 10-minute hold), and Team Deathmatch (a win and 100 wins).",
                "The achievements here: Coin-op Life Saver (Pick up at least 10 extra life items in Cooperative Coin-op game.); Coin-op Gold Rush (Pick up 100 gold coins in Coin-op Cooperative game.); Beast Hunt Beginner (Win a Beast Hunt match on any level.); Beast Hunt Master (Win a Beast Hunt match on all game levels.); Team Beast Hunt Beginner (Win a Team Beast Hunt match on any level with least 2 players on each team.); Team Beast Hunt Master (Win a Team Beast Hunt match on all game levels with least 2 players on each team.); Capture The Flag Beginner (Win a CTF match with at least 2 players on each team.); Capture The Flag Master (Win 25 CTF matches with at least 2 players on each team.); Flag Thief (Score a total of 100 points in CTF matches.); Instant Kill Beginner (Make at least 3 kills in one Instant Kill match.); Instant Kill Master (Win 100 Instant Kill matches.); Instant Kill Pro (Frag 10 players without being killed in at least 4 player Instant Kill match.); Last Man Standing Beginner (Win one round in Last Man Standing game with at least 4 players.); Last Man Standing Master (Win 100 Last Man Standing matches with at least 4 players.); Last Team Standing Beginner (Earn a round for your team in Last Team Standing game with at least 2 players on each team.); My Burden Beginner (Win one My Burden match with at least 3 players.); My Burden Master (Win 100 My Burden matches with at least 3 players.); Heavy Weight Champion (Hold the Burden for at least 10 minutes in My Burden match with at least 3 players.); Team Deathmatch Beginner (Win one Team Deathmatch with at least 2 players on each team.); Team Deathmatch Master (Win 100 Team Deathmatches with at least 2 players on each team.)."
            ]
        },
        {
            "heading": "Survival & Secrets",
            "body": [
                "A bronze and all-gold Survival medals in single-player and in co-op, the last Last Team Standing master, and finding a secret under water.",
                "The achievements here: Survival Beginner (Earn at least a bronze medal on any level in single player Survival.); Survival Master (Earn gold medals on all Survival levels in single player Survival.); Cooperative Survival Beginner (Earn at least a bronze medal on any level in cooperative Survival.); Cooperative Survival Master (Earn gold medals on all Survival levels in cooperative Survival.); Last Team Standing Master (Win 100 Last Team Standing matches with at least 2 players on each team.); Treasure Diving (Find a secret under water.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign once on Normal, collecting all 80 secrets and the Palenque / Teotihuacan weapon caches.",
                "2. Do the challenge runs - Serious difficulty, par-time, and the no-death Grand Cathedral run.",
                "3. Grind 'Sam I am' and the weapon kill counts in long co-op Survival sessions, chasing the Survival medals at the same time.",
                "4. Set up long bot deathmatches to stack the frag counts, win counts and combo feats.",
                "5. Work through the competitive-mode achievements (Beast Hunt, CTF, Instant Kill, Last Man Standing, My Burden, Team Deathmatch) with bots or a group.",
                "Tip: the 'win 100 matches' mode achievements accept short bot matches - set a low score or time limit and a small level, and each win still counts."
            ]
        }
    ]
};
