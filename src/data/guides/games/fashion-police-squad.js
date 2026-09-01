// Fashion Police Squad Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fashion-police-squad.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1319460 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fashion-police-squad-achievement-guide",
    "category": "game",
    "gameSlug": "fashion-police-squad",
    "icon": "👗",
    "title": "Fashion Police Squad Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Fashion Police Squad (2 hidden). Covers the story and its bosses, full mission and challenge completion, the secret posters and swag, and a set of one-off gags. Two of the achievements are hidden - defeating the bosses Hackerman and Turn Coat - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fashion Police Squad has 25 Steam achievements and 2 are hidden. The hidden two are '4d3d3d3 Engaged' (defeat the boss Hackerman) and 'Everything Turned out Well in the End' (defeat the boss Turn Coat). Everything visible is defeating Hugo Bauss, finding the sniper secret, completing all story missions and then all missions and challenges to 100%, meeting the mysterious stranger, finding all secret posters, collecting every piece of swag in a mission, and a run of jokes - the game's one puzzle (the toilets), a hole in one, topping the driving-range scoreboard, visiting the art exhibit, reading the credits, 100 and 250 Belt of Justice stuns, and 25 and 50 Fab Slaps.",
                "The catalog marks it difficulty 3. It is a short, funny boomer-shooter; 'Tens Tens Tens Across The Board' (full completion of every mission and challenge) is the main target, and the two hidden boss fights are part of normal progression. The gags are quick to pick up with a guide.",
                "Tip: go for each mission's full completion and all its swag on your first clear of it - the challenges and swag are per-mission, and cleaning them up after finishing the story means replaying levels you have already beaten."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "Defeating Hugo Bauss, finding the sniper secret, completing all story missions, meeting the mysterious stranger, fully completing all missions and challenges, completing all challenges, finding all secret posters, and opening the game for the first time.",
                "The achievements here: A Huge Boss (Defeat Hugo Bauss.); BULL’S EYE! (Find the sniper secret.); You’re a Winner Baby! (Complete all of the story missions.); Where The Fog Rises (Meet with the mysterious stranger for the first time.); Tens Tens Tens Across The Board (Fully complete all missions and challenges.); Challenge Accepted. (Complete all challenges.); Gotta Catch ‘Em All! (Find all the secret posters.); Congratulations on Your Promotion! (Open the game for the first time.)."
            ]
        },
        {
            "heading": "Collectibles, Weapons & Gags",
            "body": [
                "Collecting every piece of swag in a mission, drinking a ground mocktail, transforming a Karen both ways, declining a deal with the Belt of Justice, the toilet puzzle, a hole in one, the driving-range scoreboard, stunning a Sagging Pants enemy with a weapon, the art exhibit, reading the credits, 100 and 250 Belt stuns, 25 and 50 Fab Slaps, maxing the Live rating in both sniper encounters, and defeating the hidden bosses Hackerman and Turn Coat.",
                "The achievements here: D.R.I.P. Mode Activated (Collect every piece of swag during a mission.); Drink and Thrive (Find a mocktail on the ground and drink it.); Potayto, Potahto (Transform a Karen into a fashionista with the Tailormade, and another with the Belt of Justice.); Funk NFTs (Decline a business deal with the Belt of Justice.); Toilet Is You (Solve the only puzzle in the game.); Hole in One (Put the ball in the hole.); Drive to Succeed (Get first place on the driving range scoreboard.); Butting heads (Stun a Sagging Pants Enemy with a weapon.); L’Art (Visit the Cheesus is Bling merch exhibit.); A Game by Mopeful Games (Read the credits.); Justice Has Been Served (Stun enemies 100 times with the Belt of Justice.); Dominating! (Stun enemies 250 times with the Belt of Justice.); Slap Some Fashion Sense Into Them (Fab Slap 25 enemies.); Seasoned Slapper (Fab Slap 50 enemies.); Top Rated (Finish both sniper encounters while maximum Live rating.); 4d3d3d3 Engaged (Defeat the boss Hackerman.); Everything Turned out Well in the End (Defeat the boss Turn Coat.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, defeating Hugo Bauss, Hackerman and Turn Coat.",
                "2. On each mission, collect all swag and complete all its challenges before moving on.",
                "3. Pick up the one-off gags (toilets, hole in one, driving range, art exhibit, credits).",
                "4. Grind the Belt stun (250) and Fab Slap (50) counters.",
                "5. Reach 'Tens Tens Tens Across The Board' with full mission and challenge completion.",
                "Tip: 'Toilet Is You' - 'Solve the only puzzle in the game' - is a real environmental puzzle that is easy to walk past; look it up in a guide so you do not have to hunt for it on a replay."
            ]
        }
    ]
};
