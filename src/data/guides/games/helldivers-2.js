// Helldivers 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/helldivers-2.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   553850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 3 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the Helldivers wiki and community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "helldivers-2-achievement-guide",
    "category": "game",
    "gameSlug": "helldivers-2",
    "icon": "🪖",
    "title": "Helldivers 2 Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Helldivers 2 - combat & kills, missions & objectives, teamwork & ship progression, skill challenges, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Helldivers 2 has 38 Steam achievements, 3 of them hidden. None are missable and there is no story to complete - the list is all cumulative counters (kill totals, mission totals), one-off situational feats, ship-upgrade goals, and a few genuinely fiddly skill challenges.",
                "The grind achievements (Kill 5,000 enemies, complete 100 missions, max a ship module) come naturally with playtime. The time sink is the skill trio - a deathless Extreme-difficulty clear, a Hard clear with no primary or support weapon fired, and a sub-6-minute Extreme Blitz extract - which usually want a coordinated four-stack.",
                "Tip: knock out the cheap play-a-mission-type and teamwork achievements in your first few drops (Bot Scrapper, Bug Stomper, Basic Training, healing and assisted reload), then let the kill and mission counters accumulate while you set up the skill challenges with friends."
            ]
        },
        {
            "heading": "Combat & Kills",
            "body": [
                "The kill-count and kill-type achievements: the lifetime 5,000-enemy total, single-mission counts of 100 (fire damage) / 150 / 150-in-one-burst, big multi-kills with a single stratagem, the two elite-kill markers (Hulk, Bile Titan), and the specific close/long-range kills.",
                "The achievements here: Caught them by Supplies! (Kill a Charger with a resupply pod.); For the greater good! (Kill 5,000 enemies.); Kill it with fire! (Kill 100 enemies using fire damage during the same mission.); Get some! (Fire at least 150 rounds in one burst, killing at least 10 enemies.); The power of Democracy (Kill 25 enemies with one stratagem.); Nothing is bigger than Freedom (Defeat a Hulk.); The taller they are... (Defeat a Bile Titan.); Eat This! (Kill a bug warrior with a shotgun within 1 meter.); The long arm of Justice (Kill a target at a distance of over 100m.); Spread Managed Democracy (Kill 150 enemies during the same mission.)."
            ]
        },
        {
            "heading": "Missions & Objectives",
            "body": [
                "The mission-count and objective achievements: 50 and 100 missions played, Basic Training, one Bot mission and one Bug mission, a planet-defense mission, 10 tactical objectives, a night extraction, and extracting with a full 15 common or 15 rare samples as a team.",
                "The achievements here: Samples are a diver's best friend (Extract at least 15 rare samples from a mission as a team.); Doing your part (Complete at least 100 missions.); They don't call it Tacticool for nothin' (Complete 10 tactical objectives.); Bot Scrapper (Play 1 Bot Mission.); Bug Stomper (Play 1 Bug Mission.); Extractinating the Countryside (Play a planet defense mission.); Patriot (Play at least 50 missions.); The Real Deal (Complete Basic Training.); Science is done by quantity (Extract with at least 15 common samples.); They mostly come at night... (Extract from a mission during nighttime.)."
            ]
        },
        {
            "heading": "Teamwork & Ship Progression",
            "body": [
                "The Super Destroyer and squad achievements: maxing one ship module, giving every module at least one upgrade, healing a teammate with stims, providing an assisted reload, and customising your Helldiver's cape, armor and helmet.",
                "The achievements here: Fully operational (Reach max level on one ship module.); Ship it! (Upgrade all ship modules at least 1 level.); Democracy ain't done with you yet (Heal another player using stims.); Promote Synergy (Provide assisted reload for a teammate.); Strapping young lad (Customize your Helldiver with new cape, armor, and helmet.)."
            ]
        },
        {
            "heading": "Skill Challenges",
            "body": [
                "The one-off feats that take deliberate setup: the deathless Extreme clear, the no-primary/no-support Hard clear, the sub-6-minute Extreme Blitz extract, stacking six orbital barrages in one spot, being wounded in all limbs at once, disarming a Hulk then extracting while it lives, riding an explosion shockwave 25m, throwing back a live grenade, ragdolling yourself with a jump pack, and extracting after the timer hits zero.",
                "Tip: for Hell Dive and \"Hold my primary...\", drop on the lowest qualifying difficulty (Extreme / Hard respectively) with a coordinated team, take mines, sentries and orbitals, and play slow - the restrictions are on deaths and on firing your own primary/support weapon, not on stratagems.",
                "The achievements here: Hell Dive (Complete an Extreme difficulty mission or higher without anyone dying.); Hold my primary, I'm going in! (Complete a full Hard difficulty mission or higher without anyone firing their primary or support weapon.); Gone in 360 seconds! (Complete a full Extreme difficulty Blitz mission and extract in under 6 minutes.); It's the only way to be sure... (Have 6 orbital barrage stratagems in the same place at the same time.); That which does not kill you... (Be injured in all limbs at the same time.); Let's call it a draw (Shoot off both arms on a Hulk and then extract while it's alive.); Cool guys don't loo- AAAAH! (Fly at least 25 meters from the shockwave of an explosion.); Hot Potato! (Throw back a live grenade.); Hold My Liber-tea! (While using a jump pack, knock yourself into a ragdoll state.); In the nick of time (Extract after the timer reaches zero.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Three achievements are hidden. All are easy once you know them:",
                "The achievements here: Extractamundo! (Extract with a full team of four on a Hard difficulty mission or higher.); Stalking is illegal (Complete a Stalker Hive tactical objective - find the lair and close every hole (Stalker Lairs appear on Challenging difficulty and above).); Job's done! (Complete every primary objective of a mission but fail to extract - either die or miss the shuttle after the objectives are done.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Early drops: Basic Training, Bot Scrapper, Bug Stomper, Extractinating the Countryside, the teamwork pair (stim heal, assisted reload), Strapping young lad, and the hidden Extractamundo! and Job's done!.",
                "2. Let the counters run: For the greater good! (5,000 kills), Doing your part / Patriot (100 / 50 missions), Ship it! then Fully operational for the modules.",
                "3. Situational feats as they come up: the elite kills, single-mission kill counts, night extraction, sample extractions, Stalking is illegal on a Challenging+ Terminid mission.",
                "4. Save the skill trio for last with a full squad: Hell Dive, \"Hold my primary...\", Gone in 360 seconds!, plus Let's call it a draw and It's the only way to be sure...."
            ]
        }
    ]
};
