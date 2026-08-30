// Huntdown Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/huntdown.json), whose 19 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   598550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "huntdown-achievement-guide",
    "category": "game",
    "gameSlug": "huntdown",
    "icon": "🔫",
    "title": "Huntdown Achievement Guide",
    "summary": "A practical guide to all 19 Steam achievements in Huntdown - none are hidden. Covers the 100% completions on Normal, Hard and Badass difficulty and defeating the Shogun, and the run of one-off combat feats and boss and cutscene easter eggs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Huntdown has 19 Steam achievements and none of them are hidden. Four are the backbone: 100% completion on Normal, Hard and Badass difficulty, and defeating the final boss, the Shogun. The other fifteen are one-off feats and easter eggs - killing a dog by making it fetch a grenade, completing a level without picking up any weapons, a one-health-point bounty kill, making specific bosses kill themselves or hurt themselves, and a couple of pure jokes (get kicked out by Tony five times at one checkpoint, watch every Wolfmother briefing without skipping).",
                "Nothing is missable - every level and boss can be replayed for its feat, and the difficulty completions can be done in any order (100% on Badass also counts as having beaten every level). The real work is skill: 100% on Hard and especially Badass is a serious run-and-gun challenge across all four districts.",
                "Tip: do all the one-off feat and easter-egg achievements during your Normal-difficulty 100% run, when survival pressure is lowest - things like the no-weapons level, the one-HP bounty kill, and the boss self-kills are far easier to set up when you are not also fighting to stay alive on Badass."
            ]
        },
        {
            "heading": "Completion & The Shogun",
            "body": [
                "The four core achievements: 100% completion on Normal Mode, Hard Mode and Badass Mode, and defeating the Shogun.",
                "The achievements here: Mercenary (Get 100% completion in Normal Mode); Contract Killer (Get 100% completion in Hard Mode); Assassin (Get 100% completion in Badass Mode); Hunter (Defeat the Shogun)."
            ]
        },
        {
            "heading": "Feats & Easter Eggs",
            "body": [
                "The one-off feats and jokes: finding secret locations, the grenade-fetch dog kill, a no-weapons level, the Nadja Drago hockey-goal, the Overseer's Fume Pit car destruction, the shotgun and sawed-off and baseball-bat kill counts on one level, the Suki the Sniper self-kill, a one-HP bounty kill, and the Tony and Wolfmother running gags.",
                "The achievements here: Nose for Easter Eggs (Find at least 5 secret locations); Play Fetch (Kill a dog by making it fetch a grenade); I can do better (Press the retry button after completing a level); Yippee Ki Yay (Complete a level without picking up any weapons); Slap Shot (Get hit by Nadja Drago's hockey stick and land in the goal); Cannonball Run (Destroy 5 cars at the Overseer's Fume Pit without dying); Duck Hunt (Kick and shoot 10 enemies with a Shotgun before they hit the ground on one level); I'll be back (Restart more than 5 times during a fight with a bounty); Loyal Customer (Get kicked out by Tony 5 times at the same checkpoint); Looks that Kill (Trash a guitar on Sid Handsome); Ain't got time to bleed (Kill a bounty while having one health point left); This is my boom-stick! (Kill 10 enemies at close range with a Sawed-off on one level); Taste of her own medicine (Make Suki the Sniper kill herself with her own missile); Baseball Fury (Kill 10 enemies with a Baseball Bat on one level); Everlasting Patience (Watch all of Wolfmother's briefs without pressing skip)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full 100% run on Normal difficulty, and while you are in each level do that level's or that boss's feat: the fetch-the-grenade dog, the no-weapons level, the hockey goal on Nadja Drago, the guitar on Sid Handsome, the Suki self-kill, and the shotgun/sawed-off/baseball-bat kill counts.",
                "2. Pick up the pure-joke achievements on the same run - find five secret locations, get kicked out by Tony five times at one checkpoint, restart a bounty fight more than five times, and watch a Wolfmother briefing without skipping.",
                "3. Do a 100% run on Hard difficulty.",
                "4. Do a 100% run on Badass difficulty - this is the hardest achievement in the game.",
                "5. Defeating the Shogun happens naturally during any full playthrough, so Hunter unlocks along the way.",
                "Tip: Huntdown's cover system is the key to the harder difficulties - tap into cover to auto-dodge most incoming fire, pop out only to shoot, and save your throwables and special weapons for the bounty fights rather than the regular enemies."
            ]
        }
    ]
};
