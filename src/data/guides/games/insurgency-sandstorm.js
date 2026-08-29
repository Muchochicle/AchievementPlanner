// Insurgency: Sandstorm Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/insurgency-sandstorm.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   581320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "insurgency-sandstorm-achievement-guide",
    "category": "game",
    "gameSlug": "insurgency-sandstorm",
    "icon": "🎖️",
    "title": "Insurgency: Sandstorm Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Insurgency: Sandstorm - none are hidden. kills & combat, objectives & vehicles, matches & progression.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Insurgency: Sandstorm has 35 Steam achievements and none are hidden. They are all in-match feats: specific kills (knife, wallbang, vaulting, blindfire), objective plays, vehicle kills, and a handful of match-win and progression markers.",
                "Nothing is missable and everything is repeatable across matches. Most are situational one-offs you get incidentally over time; a few (Play to Win at 100 objectives, There For You at 10 fire supports) are counters.",
                "Tip: play the co-op Checkpoint mode against bots for the fiddly kill feats - bots are plentiful and predictable, which makes setting up a wallbang, a vaulting kill, or a triple-grenade far easier than in PvP."
            ]
        },
        {
            "heading": "Kills & Combat",
            "body": [
                "The specific-kill feats: first blood, 3 headshots in a row, a kill with an enemy's live grenade, a triple explosive kill, a kill right after a speed reload, a knife kill, a no-sights kill, a door-bash kill, a wallbang, a kill on a reloading enemy, a last-bullet kill, a post-flashbang kill, a kill while blinded, a vaulting kill, and a burn kill.",
                "The achievements here: First Blood (Get the first kill in a round.); Flaccid Paralysis (Kill 3 enemies with a headshot in a row.); It's All in the Reflexes (Kill an enemy with an enemy's live grenade.); Efficient (Kill three or more enemies with a single grenade or explosive.); High Speed Low Drag (Kill an enemy right after performing a speed reload.); Personal (Kill an enemy with a knife.); Point Shooting (Kill an enemy without using weapon sights.); Knock Knock (Kill an enemy by bashing in a door.); Wallbanger (Kill an enemy by shooting through something.); Exploitative (Kill an enemy while they are reloading.); Lucky (Kill an enemy with the last bullet of your magazine.); Banged (Kill an enemy after blinding them with a flashbang); Blindfire (Kill an enemy while blinded by a flashbang); Cinematic (Kill an enemy while vaulting.); Ruthless (Kill an enemy by burning them.)."
            ]
        },
        {
            "heading": "Objectives & Vehicles",
            "body": [
                "The objective and vehicle achievements: capturing as the last player alive, blocking then clearing an objective, the two weapon-cache destructions, a Commander fire-support kill, destroying enemy air support, a mine vehicle kill, driving teammates 15 seconds, a vehicle kill, a mounted-weapon kill, killing a driver with their own mounted weapon, capturing 100 objectives, 10 fire supports as an Observer, and crossing chemical gas in a gas mask.",
                "The achievements here: Carrying (Capture an objective as the last member of the team alive.); Turf War (Block an objective from being captured and then clear it.); Special Delivery (Destroy an enemy weapon cache using a remote explosive charge.); Self-destructive (Successfully rig and destroy an enemy weapon cache.); Thanks Station! (As a Commander, kill an enemy using fire support.); Grounded (Destroy an enemy air support vehicle.); Road Hazard (Destroy an enemy vehicle with a mine.); Designated Driver (Drive a vehicle full of teammates for more than 15 seconds.); Hit and Run (Kill an enemy with a vehicle.); Mount & Gun (Kill an enemy using the mounted weapon on a vehicle.); J.R. .50 (Kill an enemy driver with the mounted weapon of their vehicle.); Play to Win (Capture 100 objectives.); There For You (Call in fire support ten times as an Observer.); Semper Paratus (Navigate through chemical gas while wearing a gas mask.)."
            ]
        },
        {
            "heading": "Matches & Progression",
            "body": [
                "Completing the tutorial, winning a match of Firefight, Push and Checkpoint, buying a first Appearance item, and being MVP of a round.",
                "The achievements here: Wet Feet (Complete the tutorial mission.); Firefight Victory (Win a match of Firefight.); Push Victory (Win a match of Push.); Checkpoint Victory (Win a match of Checkpoint.); Stylin' (Purchase your first item in the Appearance menu.); #1 (Be the Most Valuable Player of a round.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial, then play Checkpoint co-op vs bots for the kill-feat achievements (knife, wallbang, vaulting, blindfire, door bash, grenade throws).",
                "2. Pick up the objective and vehicle feats as situations arise, and grab a Firefight and Push win in PvP.",
                "3. Let the counters run - Play to Win (100 objectives), There For You (10 Observer fire supports).",
                "4. Buy an Appearance item and aim for a round MVP.",
                "Tip: Grounded (destroy enemy air support) and Thanks Station! (a Commander fire-support kill) both need you playing Commander/Observer - queue those roles deliberately and coordinate one strike per achievement."
            ]
        }
    ]
};
