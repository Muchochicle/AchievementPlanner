// Dungeon of the ENDLESS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dungeon-of-the-endless.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   249050 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dungeon-of-the-endless-achievement-guide",
    "category": "game",
    "gameSlug": "dungeon-of-the-endless",
    "icon": "🔮",
    "title": "Dungeon of the ENDLESS Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in Dungeon of the ENDLESS - none are hidden. Covers the Pod-win and multiplayer achievements, the hero, building and combat-grind achievements, and the collection and special-win achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dungeon of the ENDLESS has 33 Steam achievements and none of them are hidden. About a third are winning a run with each escape Pod (Escape, Infirmary, Armory, Library, Sanitary, Refreezerator, Organic) plus reaching the 24th floor with the Drill Pod and winning a multiplayer game. The rest are hero feats (unlock, level to 15, own four, win with each hero), building and combat grinds (50 modules on one floor, kill each mob type 50 times, research every module), restriction wins (no hero deaths, no pause, no Dust lost), completing the Album, and specific special wins (defend the elevator for a minute, escape with a Guard/Prisoner/Native team, the Endless Day event).",
                "Nothing is missable - runs are endless and the counters accumulate, but this is a hard roguelike and winning at all takes practice. The long poles are the no-death / no-pause / no-Dust winning runs, taming every monster, and completing the Album.",
                "Tip: get comfortable winning on Easy with the Escape Pod first, then chase the Pod-specific wins one at a time, and save the restriction runs (no pause, no death, no Dust) for when you can win reliably."
            ]
        },
        {
            "heading": "Pod Wins & Multiplayer",
            "body": [
                "Winning a run with the Escape, Infirmary, Armory, Library and Sanitary Pods, reaching the 24th floor with the Drill Pod, winning with the Refreezerator Pod, winning a multiplayer game, and completing the first floor in multiplayer.",
                "The achievements here: Basic Training (Win a game with the Escape Pod.); Graduated Med School (Win a game with the Infirmary Pod.); Guns 'n Glory (Win a game with the Armory Pod.); Endless Mining (Reach the 24th floor with the Drill Pod.); Bookworm (Win a game with the Library Pod.); Mr Cleaner (Win a game with the Sanitary Pod.); Out of the Cold (Win a game with the Refreezerator Pod.); The Other Great Escape (Win a multiplayer game.); Onward and Upward (Complete the first floor for the first time in a multiplayer game.)."
            ]
        },
        {
            "heading": "Heroes, Building & Combat Grinds",
            "body": [
                "Unlocking a hero, leveling one to 15, owning 4 heroes, winning with each hero, spending 1,000 Food healing in one game, 50 modules on one floor, killing each mob type 50 times, stocking 300 cumulated FIS, opening every door in a winning game and 10,000 doors overall, researching all level-1 modules in a winning game and all level-4 modules, and winning runs with no hero deaths, no pause and no Dust lost.",
                "The achievements here: Team Builder (Unlock a hero for the first time.); Maxed Out (Level up a hero to level 15 for the first time.); HR Boss (Own 4 heroes in the team for the first time.); Champions' League (Win a game with each hero.); Medpack Addict (Spend 1 000 Food by healing heroes in a single game.); Too Much Is Not Enough (Build 50 modules in a single floor.); Dexterous (Kill each type of mob 50 times.); Waste Not Want Not (Stock 300 cumulated FIS.); What's Behind Every Door? (Open each door in each floor in a winning game.); I Could Quit If I Wanted To (Open 10 000 doors.); Science Fair Winner (Research all the modules (lvl 1) in a winning game.); Rocket Scientist (Research all the modules (lvl 4).); Everybody Goes Home (Never have a hero killed in a winning game.); Real Heroes Don't Pause (Never use pause in a winning game.); Dust Hoarder (Never lose Dust in a winning game.)."
            ]
        },
        {
            "heading": "Collection & Special Wins",
            "body": [
                "Completing the Album, winning with the Escape Pod without recruiting extra heroes, escaping with a Guard, a Prisoner and a Native, defending the elevator room for a minute after bringing the crystal, the Endless Day event, winning with the Organic Pod, killing each Hurnas mob type 50 times, taming every monster, and winning with the full Rescue Team.",
                "The achievements here: Yearbook Editor (Complete the Album.); Members Only (Win a game with the Escape Pod without recruiting additional heroes.); The Good, the Bad and the Ugly (Escape the dungeon with a Guard, a Prisoner and a Native as your team.); Elevator Song (After bringing the crystal to the exit, defend the elevator room for a full minute.); Endless Day (On this day, Endless technology lights up and strange things appear...); Soiled with glue (Win a game with the Organic Pod.); Hurnacide (Kill each type of Hurnas mobs 50 times.); Grab 'Em All (Tamed all of the monsters, across any number of playthroughs.); So much for the mission (Win a game with all of the members of the Rescue Team.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn to win on Easy with the Escape Pod, then repeat the win with each other Pod one at a time.",
                "2. Reach the 24th floor with the Drill Pod (survival, not escape) and win a multiplayer game.",
                "3. During those runs, do the hero feats (unlock, level 15, own 4, win with each) and the building/combat grinds (50 modules, mob kills, 300 FIS, research everything).",
                "4. Do the special wins: no-recruit Escape Pod, the three-faction team, the elevator defence, the Rescue Team, and catch the Endless Day event.",
                "5. Do the restriction runs (no hero death, no pause, no Dust lost) and finish the Album and the tame-every-monster grind.",
                "Tip: the no-pause winning run (Real Heroes Don't Pause) is the nastiest - practise a Pod and team you can play at real speed, hover your operators near the elevator, and open one door at a time so you are never overwhelmed enough to want to pause."
            ]
        }
    ]
};
