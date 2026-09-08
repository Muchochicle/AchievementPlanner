export function getXPForNextLevel(level) {

    // Flatter progression curve (product decision, superseding the earlier
    // level*level*100 curve which made Level 10 cost ~570 achievements and
    // left titles almost never changing). Level 1 -> 2 keeps its original
    // 100 XP cost so no existing player's displayed level regresses; from
    // Level 2 onward each level N -> N+1 costs level * 150 XP. The small
    // step between the first (100) and second (300) level costs is
    // deliberate and accepted - it is preferable to de-levelling anyone.
    // Kept byte-compatible with backend/utils/progressionMetrics.js
    // (xpForNextLevel), enforced by progressionMetrics.test.js.
    return level === 1 ? 100 : level * 150;

}

export function calculateLevel(totalXP) {

    let level = 1;

    let remainingXP = totalXP;

    while (

        remainingXP >= getXPForNextLevel(level)

    ) {

        remainingXP -= getXPForNextLevel(level);

        level++;

    }

    return level;

}

export function calculateCurrentXP(totalXP) {

    let level = 1;

    let remainingXP = totalXP;

    while (

        remainingXP >= getXPForNextLevel(level)

    ) {

        remainingXP -= getXPForNextLevel(level);

        level++;

    }

    return remainingXP;

}