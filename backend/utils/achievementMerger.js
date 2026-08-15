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

function buildSteamIndexes(steam) {

    const byApiname = new Map();
    const byName = new Map();

    for (const achievement of steam) {

        if (!achievement?.apiname) {

            // Defensive: a schema entry with no apiname can't be matched
            // or safely keyed, so it's excluded from both indexes.
            continue;

        }

        if (byApiname.has(achievement.apiname)) {

            console.error(
                `[achievementMerger] Duplicate Steam apiname in schema: "${achievement.apiname}" - keeping first occurrence`
            );

        } else {

            byApiname.set(achievement.apiname, achievement);

        }

        const nameKey = normalizeName(achievement.displayName);

        if (byName.has(nameKey)) {

            console.error(
                `[achievementMerger] Duplicate Steam displayName after normalization: "${achievement.displayName}" (apiname=${achievement.apiname}) - keeping first occurrence`
            );

        } else {

            byName.set(nameKey, achievement);

        }

    }

    return { byApiname, byName };

}

function matchApAchievement(apAchievement, byApiname, byName, usedApinames, claimedApApinames) {

    if (apAchievement.apiname) {

        if (claimedApApinames.has(apAchievement.apiname)) {

            console.error(
                `[achievementMerger] Duplicate apiname across AP achievements: "${apAchievement.apiname}" (id=${apAchievement.id}) - treating as unmatched`
            );

            return {

                matched: false,

                matchMethod: "duplicate-apiname",

                apiname: apAchievement.apiname,

                steam: null,

                ap: { ...apAchievement }

            };

        }

        claimedApApinames.add(apAchievement.apiname);

        const steamMatch = byApiname.get(apAchievement.apiname);

        if (steamMatch) {

            usedApinames.add(steamMatch.apiname);

            return {

                matched: true,

                matchMethod: "apiname",

                apiname: steamMatch.apiname,

                steam: toSteamView(steamMatch),

                ap: { ...apAchievement }

            };

        }

        // A canonical apiname is recorded on the AP side, but the current
        // Steam schema doesn't contain it. Report this explicitly instead
        // of silently falling back to a fuzzier name match - a stale or
        // incorrect apiname is a real anomaly worth surfacing, not masking.
        return {

            matched: false,

            matchMethod: "apiname-not-found",

            apiname: apAchievement.apiname,

            steam: null,

            ap: { ...apAchievement }

        };

    }

    const nameKey = normalizeName(apAchievement.name);

    const steamMatch = byName.get(nameKey);

    if (steamMatch) {

        usedApinames.add(steamMatch.apiname);

        return {

            matched: true,

            matchMethod: "name",

            apiname: steamMatch.apiname,

            steam: toSteamView(steamMatch),

            ap: { ...apAchievement }

        };

    }

    return {

        matched: false,

        matchMethod: "none",

        apiname: null,

        steam: null,

        ap: { ...apAchievement }

    };

}

export function mergeAchievements(apAchievements, steamAchievements) {

    const ap = apAchievements ?? [];
    const steam = steamAchievements ?? [];

    const { byApiname, byName } = buildSteamIndexes(steam);

    const usedApinames = new Set();
    const claimedApApinames = new Set();

    const merged = [];

    let matchedCount = 0;

    for (const apAchievement of ap) {

        const entry = matchApAchievement(
            apAchievement,
            byApiname,
            byName,
            usedApinames,
            claimedApApinames
        );

        if (entry.matched) {

            matchedCount++;

        }

        merged.push(entry);

    }

    let steamOnlyCount = 0;

    for (const achievement of byApiname.values()) {

        if (usedApinames.has(achievement.apiname)) {

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
