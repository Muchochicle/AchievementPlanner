// Costume Quest Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/costume-quest.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   115100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "costume-quest-achievement-guide",
    "category": "game",
    "gameSlug": "costume-quest",
    "icon": "🎃",
    "title": "Costume Quest Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Costume Quest - none are hidden. Covers the story, bosses and costume feats, and the completion and collectible achievements (including the Grubbins on Ice add-on). None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Costume Quest has 21 Steam achievements and none are hidden. Eleven are story and combat - 4,000 candies, the Autumn Haven Mall contest, acquiring costumes and using every costume ability, the ramp / pail-bash / zipline feats, and defeating BoJonn, Metxel and the final boss. The rest are completion and collectibles: all quests, all Creepy Treat Cards, all Battle Stamps, the Bobbing for Apples prizes, and the Grubbins on Ice add-on content (all Repugia quests, defeating Araxia, the hidden visitor).",
                "This is a short, easy RPG - a single playthrough with the add-on covers everything. Two achievements need extras: the Grubbins on Ice content for the Repugia / Araxia / hidden-visitor ones, and 'Tisn't the Season' for playing on Christmas Day (set the system clock if needed).",
                "Tip: collect Creepy Treat Cards and Battle Stamps as you explore each zone - both are scattered in the open world and behind quest rewards, and backtracking for missed ones after the story is tedious."
            ]
        },
        {
            "heading": "Story, Costumes & Bosses",
            "body": [
                "Collecting 4,000 candies, a co-op combat kill, 15 robot ramp boosts, 10 pail-bash ambushes, winning the Mall Costume Contest, acquiring 5 costumes and the Pumpkin costume, using every costume ability, and defeating BoJonn, Metxel and the final boss.",
                "The achievements here: Leave some for the rest of us!  (Collect a total of over 4,000 candies.); Battle Buds (Defeat a monster in combat with a friend by your side.); Binary Bouncer (Use the Robot Costume to Boost off of 15 different ramps.); Do the Monster Bash (Get the jump on 10 different monsters by pail bashing them to initiate combat.); Make it Work (Win the Autumn Haven Mall Costume Contest.); Dressed to Quest (Acquire 5 Costumes.); The Last Gourdian (Acquire the Pumpkin Costume.); Master of Disguise (Use every Costume Ability in battle. ); Downsized! (Defeat BoJonn in battle. ); Dozer Dodger (Defeat Metxel in battle.); Sweet Justice (Beat the game.)."
            ]
        },
        {
            "heading": "Completion & Collectibles",
            "body": [
                "Completing all quests, collecting all Creepy Treat Cards and all Battle Stamps, winning all Bobbing for Apples prizes, acquiring the Eyeball costume, 5 unique zipline hooks, and the Grubbins on Ice add-on (all Repugia quests, defeating Araxia, finding the hidden visitor) - plus playing on Christmas Day.",
                "The achievements here: Mask-O'-Raider (Complete all Quests in the game. ); All Decked Out (Collect all Creepy Treat Cards.); They'll be worth a lot someday (Collect all Battle Stamps. ); Chompin' Champ (Win all prizes in Bobbing for Apples.); Jeepers Peepers (Acquire the Eyeball costume.); Playin' Hooky (Use the Pirate hook on 5 unique ziplines.); Revolutionary Hero (Complete all quests in Repugia.); Birdbrain Beatdown (Defeat Araxia in battle.); Short Stack (Find the mysterious visitor in the cliffs of Repugia.); Tisn't the Season (Play Costume Quest on Christmas.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story, collecting candies, Creepy Treat Cards and Battle Stamps in each zone.",
                "2. Do the costume feats - acquire every costume, use every costume ability in battle, and the ramp / pail-bash / zipline counts.",
                "3. Win the Autumn Haven Mall Costume Contest and all Bobbing for Apples prizes.",
                "4. Play the Grubbins on Ice add-on for the Repugia quests, Araxia and the hidden visitor.",
                "5. Launch the game on Christmas Day (or set the system clock) for 'Tisn't the Season'.",
                "Tip: 'Master of Disguise' (use every costume ability in battle) is easy to miss - once you have all costumes, run one padding fight and cycle through each costume's battle ability before finishing it."
            ]
        }
    ]
};
