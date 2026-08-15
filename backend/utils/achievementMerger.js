function normalizeName(name) {

    return (name ?? "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");

}

function toSteamView(achievement) {

    return {

        displayName: achievement.displayName,

        description: achievement.description,

        hidden: achievement.hidden,

        icon: achievement.icon,

        icongray: achievement.icongray,

        globalPercent: achievement.globalPercent

    };

}

export function mergeAchievements(apAchievements, steamAchievements) {

    const ap = apAchievements ?? [];
    const steam = steamAchievements ?? [];

    const steamByName = new Map();

    for (const achievement of steam) {

        if (!achievement?.apiname) {

            // Defensive: a schema entry with no apiname can't be matched
            // or safely keyed, so it's excluded from the join entirely.
            continue;

        }

        const key = normalizeName(achievement.displayName);

        if (steamByName.has(key)) {

            console.error(
                `[achievementMerger] Duplicate Steam displayName after normalization: "${achievement.displayName}" (apiname=${achievement.apiname}) - keeping first occurrence`
            );

            continue;

        }

        steamByName.set(key, achievement);

    }

    const usedKeys = new Set();

    const merged = [];

    let matchedCount = 0;

    for (const apAchievement of ap) {

        const key = normalizeName(apAchievement.name);

        const steamMatch = steamByName.get(key);

        if (steamMatch) {

            usedKeys.add(key);

            matchedCount++;

            merged.push({

                matched: true,

                matchMethod: "name",

                apiname: steamMatch.apiname,

                steam: toSteamView(steamMatch),

                ap: { ...apAchievement }

            });

        } else {

            merged.push({

                matched: false,

                matchMethod: "none",

                apiname: null,

                steam: null,

                ap: { ...apAchievement }

            });

        }

    }

    let steamOnlyCount = 0;

    for (const [key, achievement] of steamByName) {

        if (usedKeys.has(key)) {

            continue;

        }

        steamOnlyCount++;

        merged.push({

            matched: false,

            matchMethod: "none",

            apiname: achievement.apiname,

            steam: toSteamView(achievement),

            ap: null

        });

    }

    return {

        steamDataAvailable: steam.length > 0,

        matchedCount,

        apOnlyCount: ap.length - matchedCount,

        steamOnlyCount,

        achievements: merged

    };

}
