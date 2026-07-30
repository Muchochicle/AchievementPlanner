export function getXPForNextLevel(level) {

    return level * level * 100;

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