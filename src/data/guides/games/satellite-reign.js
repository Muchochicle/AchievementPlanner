// Satellite Reign Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/satellite-reign.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   268870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "satellite-reign-achievement-guide",
    "category": "game",
    "gameSlug": "satellite-reign",
    "icon": "🌈",
    "title": "Satellite Reign Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Satellite Reign - none are hidden. Covers the combat and stealth feats, the district access and boss achievements, and the ATM-syphon and data-terminal sweeps. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Satellite Reign has 40 Steam achievements and none are hidden. They cover combat feats (100 civilian kills, 100 kills each on Uzy Korps and Eternals, 100 hijacked-body kills, a 10-kill explosion), stealth feats (5, 10 and 15 stealth-kill streaks, cloaked kills, the per-district 'Pacifist' runs), the 'No Big Brother' camera-destruction sweeps for every district, killing or cloning the five Lives developers, entering each district, killing the CEO, and syphoning every ATM and accessing every data terminal in the city.",
                "The catalog marks it a single playthrough - the city is persistent, so the camera, ATM and terminal sweeps can all be done in one run with enough backtracking. The per-district 'Pacifist' achievements ('reach the next district with no blood on your hands') are the trickiest and are effectively cumulative from the start.",
                "Tip: play the whole game stealthily aiming for the 'Pacifist' chain - never killing anyone also keeps your stealth-kill... no; instead avoid all kills, use non-lethal takedowns and cloaking, and only start fighting after the CBD Pacifist unlocks."
            ]
        },
        {
            "heading": "Combat & Stealth Feats",
            "body": [
                "The first Corp Soldier kill, 100 civilian kills, the 'No Big Brother' camera sweeps for the Tutorial and every district, acquiring ten scientists, killing and cloning all five Lives devs, the 5/10/15 stealth-kill streaks, the per-district 'Pacifist' runs, 100 hijacked-body kills, 100 Uzy Korps and 100 Eternal kills, a 10-kill explosion, 20 cloaked kills, and 50 melee kills.",
                "The achievements here: First Blood (Killed a Corp Soldier); Fish in a Barrel (Kill 100 Civilians); No Big Brother: Tutorial (Destroy all cameras in the Tutorial); No Big Brother: Downtown (Destroy all CCTV cameras in Downtown); No Big Brother: Industrial (Destroy all CCTV cameras in the Industrial District); No Big Brother: Grid (Destroy all CCTV cameras in the Grid District); No Big Brother: CBD (Destroy all CCTV cameras in the CBD); No Big Brother: Dracogenics (Destroy all CCTV cameras in the final boss area); Science, bitch! (Acquire ten scientists); No More Lives (Found and killed all 5 Lives devs); Infinite Lives (Find and capture all 5 Lives devs for cloning); 5 Stealth Kills in a row (Kills in a row without being seen being suspicious); 10 Stealth Kills in a row (Kills in a row without being seen being suspicious); 15 Stealth Kills in a row (Kills in a row without being seen being suspicious); Industrial Pacifist (Make it to the Industrial District without getting blood on your hands); Downtown Pacifist (Make it to Downtown without getting blood on your hands); CBD Pacifist (Make it to the CBD without getting blood on your hands); Grid Pacifist (Make it to The Grid without getting blood on your hands); Dracogenics Pacifist (Make it to the Dracogenics district without getting blood on your hands); 100 Kills By Hijacked (Use Hijacked to kill 100 Enemies); Cold War (Kill 100 Uzy Korps); Holy War (Kill 100 Eternals); 10 Kills One Explosion (Get 10 kills with a single explosion); Invisible Death (Kill 20 enemies while cloaked); I know Kung Fu (50 Melee Kills)."
            ]
        },
        {
            "heading": "Progression & Bosses",
            "body": [
                "Killing Dengler the CEO, and entering The Grid, the Industrial area, Dracogenics and the CBD.",
                "The achievements here: Fire the CEO (With extreme prejudice.); Enter The Grid (Enter The Grid); Enter the Industrial area (Enter the Industrial area); Enter Dracogenics (Enter Dracogenics); Enter the CBD (Enter the CBD)."
            ]
        },
        {
            "heading": "ATM Syphons & Data Terminals",
            "body": [
                "Placing a syphon on every ATM in the city and in each of the Downtown, Grid, Industrial and CBD districts, and accessing every data terminal in the city and in each of those districts.",
                "The achievements here: Master of Coin (Place a syphon on every ATM in the city); Easy Money: Downtown (Place a syphon on every ATM in the Downtown District); Easy Money: Grid (Place a syphon on every ATM in the Grid District); Easy Money: Industrial (Place a syphon on every ATM in the Industrial District); Easy Money: CBD (Place a syphon on every ATM in the CBD); Key Logger (Access all data terminals in the city); Script Kiddie: Downtown (Access all data terminals in the Downtown District); Script Kiddie: Grid (Access all data terminals in the Grid District); Script Kiddie: Industrial (Access all data terminals in the Industrial District); Script Kiddie: CBD (Access all data terminals in the CBD)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the game stealthily from the start, using non-lethal takedowns and cloaking to keep the 'Pacifist' chain alive.",
                "2. As you clear each district, destroy every CCTV camera, syphon every ATM and access every data terminal.",
                "3. Acquire ten scientists and decide whether to kill or clone the five Lives devs (you can do both across the sweep).",
                "4. After the CBD Pacifist unlocks, switch to combat and grind the kill-count and explosion feats.",
                "5. Do the stealth-kill streaks and finish by killing Dengler.",
                "Tip: the district camera/ATM/terminal 'in the whole city' achievements just need every district's version done - keep a checklist per district so you don't leave one camera behind and have to return."
            ]
        }
    ]
};
