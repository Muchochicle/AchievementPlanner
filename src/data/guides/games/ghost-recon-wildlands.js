// Ghost Recon Wildlands Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ghost-recon-wildlands.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   460930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ghost-recon-wildlands-achievement-guide",
    "category": "game",
    "gameSlug": "ghost-recon-wildlands",
    "icon": "🪂",
    "title": "Ghost Recon Wildlands Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Ghost Recon Wildlands - none are hidden. Covers the story, boss and buchon-operation achievements, the combat feats, collectibles and upgrade purchases, and the Narco Road and Fallen Ghosts DLC achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ghost Recon Wildlands has 57 Steam achievements and none of them are hidden. The base game covers the story (the first mission, defeating a boss, finishing the campaign, all Story missions), completing all four cartel operations (Smuggling, Production, Security, Influence), a set of combat and traversal feats (10 skydives, a mortar chopper kill, 100 km driven, C4 and mine multi-kills, a 400m shot), the collectible sets (documents, legends, weapon models by class), and buying every skill and Rebel upgrade. The last fourteen belong to the two DLC operations, Narco Road and Fallen Ghosts.",
                "Nothing is permanently missable - the open world and all provinces stay available after the story, and there is no difficulty-locked achievement. A couple of feats are co-op only (Teamwork!, Finished the Job) and need a second player.",
                "Tip: this is a full-map completionist run - the documents, weapon-model pickups, skill points and Rebel-support upgrades are all tied to clearing provinces, so work province by province, doing every side mission type and collectible before advancing the cartel operations."
            ]
        },
        {
            "heading": "Story, Bosses & Buchon Operations",
            "body": [
                "10 skydives, a mortar chopper kill, 100 km driven, 20 interrogations, 50% and then all documents, your first boss, finishing the story, completing the Smuggling, Production, Security and Influence operations, all Story missions, a sniper-with-a-pistol takedown, three co-op missions, and the first mission \"Amaru's rescue\".",
                "The achievements here: Fearless (Skydived 10 times.); Pull! (Shot an enemy chopper out of the air with a mortar.); Road Warrior (Drove a vehicle for 100 km.); Deadly Curious (Interrogated 20 sources.); Serious Collector (Found 50% of the documents in the game.); The Whole Story (Found all documents.); Beat the Boss (Defeated your first boss.); The End (Finished the story.); Smuggler's Blues (Completed the Smuggling operation.); Shut Down (Completed the Production operation.); Broken Locks (Completed the Security operation.); Bad Reputation (Completed the Influence operation.); Mission Master (Completed all Story missions.); With a Pistol! (Took out a sniper with a pistol.); Teamwork! (Completed 3 missions with another player.); A Good Start (Completed the first mission \"Amaru's rescue\".)."
            ]
        },
        {
            "heading": "Combat Feats, Collectibles & Upgrades",
            "body": [
                "100 drone marks and 100 binocular marks, 7-enemy C4 and mine blasts, one and then all legends, every side-mission type, 10 tagged convoys, buying a full skill branch / all upgrades / all drone upgrades, all bonus medals, one / all / maxed Rebel skills, collecting every shotgun, handgun, submachine-gun, light machine-gun, sniper rifle and assault rifle model, maxing XP and levels, a 400m+ hit, a night close-combat kill, an assisted close-combat kill, a drone kill, and a C4 generator kill.",
                "The achievements here: Eye in the Sky (Marked 100 enemies with a drone.); Eagle-Eyed (Marked 100 enemies with the binoculars.); Cluster Bomber (Killed 7 enemies with a single C4 blast.); A Better Mousetrap (Killed 7 enemies with a single mine.); Legend Hunter (Discovered one legend.); Legendary Hunter (Discovered all  legends.); Spice of Life (Played each type of side mission.); Highway Bandit (Tagged 10 convoys.); Ultimate Skill (Bought all the upgrades of a Skill branch.); Only the Best (Bought all upgrades.); Top Drone (Bought all drone-related upgrades.); Heavy Medals (Collected all the bonus medals.); Rebel Sympathizer (Unlocked a Rebel skill.); Real Rebel (Unlocked all the Rebel skills.); No Better Rebel (Maxed out each Rebel skill.); Shotguns Fanatic (Collected all shotguns models.); Handgun Fanatic (Collected all handguns models.); The Champion (Maxed out your XP and levels.); Long Shot (Hit a target more than 400m away.); Death in the Dark (Made a close-combat kill at night.); Finished the Job (Killed an enemy in close combat who was hurt by another player.); Death from Above (Killed an enemy with a drone.); Black-out Boomer (Destroyed a generator with a C4 blast.); Submachine-Gun Fanatic (Collected all submachine-gun models.); Light Machine-Gun Fanatic (Collected all light machine-gun models.); Sniper Rifle Fanatic (Collected all sniper rifle models.); Assault Rifle Fanatic (Collected all assault rifle models.)."
            ]
        },
        {
            "heading": "Narco Road & Fallen Ghosts DLC",
            "body": [
                "Narco Road (kill a cartel boss and the final target, fill every region's Followers gauge, the villa-to-bar drive under 8 minutes, 50 kills with a gang vehicle, an Electro challenge while freefalling, a brakeless trial) and Fallen Ghosts (kill each Extranjeros archetype, complete the operation, all Rebel Ops and Missions, a Final Rebel Op, blind yourself with the Flash Drone, 10 knife kills on Covert Ops, an explosive-bolt helicopter kill).",
                "The achievements here: Gang Leader (Operation Narco Road: Kill One boss of the cartel); El Visible (Operation Narco Road: Kill the final target); More Followers than Escobar (Operation Narco Road: Fill the Followers Gauge of all regions to 100%); Scenic Route (Narco Road: Go from Eddie's party villa to Arturo's bar in 8 minutes or less in a ground vehicle); Cristina (Operation Narco Road: Kill 50 enemies with any gang's vehicle); Mal Rodilla-Ternera (Operation Narco Road: Complete an Electro™ challenge while freefalling); Brake a leg (Operation Narco Road: Complete a trial without using the brakes); Kill list (Fallen Ghosts: Kill one of each Extranjeros squad archetypes); A hero once, a hero twice (Fallen Ghosts: complete the operation); Thorough supporter (Fallen Ghosts: Complete every Rebel Op and Mission); Rebel leader (Fallen Ghosts: Complete a Final Rebel Op); Tactical genius (Fallen Ghosts: Blind yourself using the Flash Drone); Nondescript jungle hero (Fallen Ghosts: Kill 10 Covert Ops Extranjeros using your knife); Artisanal SAM (Fallen Ghosts: Destroy an enemy helicopter using an explosive bolt.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story province by province, and in each province clear every side mission type, interrogate sources, and pick up all documents and weapon-model crates before moving on.",
                "2. Spend skill points as you earn them and complete the Rebel-support upgrades so the buying achievements (Only the Best, No Better Rebel, Top Drone) tick off naturally.",
                "3. Do the combat feats deliberately at a re-triggerable base - the C4 and mine 7-kills, the 400m shot, the drone and generator kills, the night close-combat kill.",
                "4. Finish all four cartel operations and the final boss for the story achievements.",
                "5. Play the Narco Road and Fallen Ghosts DLC operations and clear their specific challenge feats.",
                "Tip: the two 100-mark achievements (drone and binoculars) and Eye in the Sky are pure passive progress - get in the habit of droning every camp before you assault it and you will have both long before the campaign ends."
            ]
        }
    ]
};
