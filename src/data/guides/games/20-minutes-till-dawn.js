// 20 Minutes Till Dawn Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/20-minutes-till-dawn.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1966900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "20-minutes-till-dawn-achievement-guide",
    "category": "game",
    "gameSlug": "20-minutes-till-dawn",
    "icon": "🌙",
    "title": "20 Minutes Till Dawn Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in 20 Minutes Till Dawn - none are hidden. survival & darkness tiers, weapon masteries, character masteries, challenge runs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "20 Minutes Till Dawn has 34 Steam achievements and none are hidden. Almost every one is a single run condition: survive the full night, survive at each Darkness (difficulty) tier, or survive Darkness 15 with a specific weapon or character. A handful are pure challenge runs.",
                "Nothing is missable and every run is independent. The list scales with your meta-progression (gem upgrades and unlocks), so early achievements fall quickly and the Darkness 15 masteries become routine once your build knowledge and upgrades are solid.",
                "Tip: unlock characters and weapons first, then farm Darkness 15 clears - once you have one reliable build, most weapon and character masteries are the same run with a different starting pick."
            ]
        },
        {
            "heading": "Survival & Darkness Tiers",
            "body": [
                "The core progression: surviving the full 20 minutes, then surviving the night at Darkness 1, 5, 10 and 15.",
                "The achievements here: Sunrise (Survive the full 20 minutes.); Dark Night (Survive the night on Darkness 1.); Darker Night (Survive the night on Darkness 5.); Darkest Night (Survive the night on Darkness 10.); Pitch Black (Survive the night on Darkness 15.)."
            ]
        },
        {
            "heading": "Weapon Masteries",
            "body": [
                "Surviving Darkness 15 with each weapon: the Revolver, Shotgun, Crossbow, Flame Cannon, Dual SMGs, Batgun, Grenade Launcher, Magic Bow, Cyclone Sword, Salvo Knives, Watering Gun and Katana.",
                "The achievements here: Revolver Mastery (Use the Revolver to survive Darkness 15.); Shotgun Mastery (Use the Shotgun to survive Darkness 15.); Crossbow Mastery (Use the Crossbow to survive Darkness 15.); Flame Cannon Mastery (Use the Flame Cannon to survive Darkness 15.); SMG Mastery (Use Dual SMGs to survive Darkness 15.); Batgun Mastery (Use the Batgun to survive  Darkness 15.); Grenade Launcher Mastery (Use the Grenade Launch to survive Darkness 15.); Magic Bow Mastery (Use the Magic Bow to survive Darkness 15.); Cyclone Sword Mastery (Use the Cyclone Sword to survive Darkness 15.); Salvo Knives Mastery (Use the Salvo Knives to survive Darkness 15.); Watering Gun Mastery (Use the Watering Gun to survive Darkness 15.); Master of the Blade (Use Katana to survive Darkness 15.)."
            ]
        },
        {
            "heading": "Character Masteries",
            "body": [
                "Surviving Darkness 15 with each character: Shana, Diamond, Scarlett, Hina, Spark, Lilith, Abby, Yuki, Luna, Hastur, Raven and Dasher.",
                "The achievements here: Fallen Angel (Survive Darkness 15 with Shana.); Strongwoman (Survive Darkness 15 with Diamond.); Pyromaniac (Survive Darkness 15 with Scarlett.); Master Ninja (Survive Darkness 15 with Hina.); Thunder God (Survive Darkness 15 with Spark.); Necromastery (Survive Darkness 15 with Lilith.); Bullet Mania (Survive Darkness 15 with Abby.); Yokai (Survive Darkness 15 with Yuki.); Celestial (Survive Darkness 15 with Luna.); Elder God (Survive Darkness 15 with Hastur); Witch (Survive Darkness 15 with Raven.); Reindeer (Survive Darkness 15 with Dasher.)."
            ]
        },
        {
            "heading": "Challenge Runs",
            "body": [
                "The special-condition runs: finishing with 1 Max HP, an Abby + Grenade Launcher run firing only via her ability, a no-hit night, a no-shooting night, and ending a night with 8 summons.",
                "The achievements here: On the Edge (Survive the night with 1 Max HP at the end.); Reckless (Survive the night with Abby and the Grenade Launcher, and only using Abby's special ability to fire.); Nimble (Survive the night without getting hit.); Pacifist (Survive the night without firing your gun.); Gotta Catch 'Em ALL (Survive the night with 8 summons as the end.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally to bank gems and unlock characters and weapons - Sunrise and the lower Darkness tiers come immediately.",
                "2. Build one strong, survivable setup and clear Darkness 15, then repeat it swapping the starting weapon for each Weapon Mastery.",
                "3. Do the same for each character for the Character Masteries.",
                "4. Save the challenge runs for last: Nimble (no hit) and Pacifist (no shooting) are best on a low Darkness with a defensive, summon-heavy build.",
                "Tip: Pacifist and Gotta Catch 'Em ALL both want summons doing the work - Lilith or a heavy summon build clears them together on a lower Darkness tier."
            ]
        }
    ]
};
