function normalizePercent(value) {

    if (value === undefined || value === null) {

        return null;

    }

    const parsed = Number(value);

    return Number.isFinite(parsed) ? parsed : null;

}

export function mapSteamAchievements(schemaAchievements, globalPercentages) {

    if (!schemaAchievements || schemaAchievements.length === 0) {

        return {

            available: false,

            achievements: []

        };

    }

    const percentByName = new Map(

        (globalPercentages ?? []).map(
            entry => [entry.name, entry.percent]
        )

    );

    const achievements = schemaAchievements.map(achievement => ({

        apiname: achievement.name,

        displayName: achievement.displayName ?? achievement.name,

        description: achievement.description ?? null,

        hidden: !!achievement.hidden,

        icon: achievement.icon ?? null,

        icongray: achievement.icongray ?? null,

        globalPercent: normalizePercent(
            percentByName.get(achievement.name)
        )

    }));

    return {

        available: true,

        achievements

    };

}
