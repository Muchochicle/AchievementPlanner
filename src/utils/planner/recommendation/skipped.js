const skipped = [];

export function skipAchievement(id) {

    if (!skipped.includes(id)) {

        skipped.push(id);

    }

}

export function unskipAchievement(id) {

    const index =
        skipped.indexOf(id);

    if (index !== -1) {

        skipped.splice(index, 1);

    }

}

export function getSkippedAchievements() {

    return skipped;

}

export function clearSkippedAchievements() {

    skipped.length = 0;

}