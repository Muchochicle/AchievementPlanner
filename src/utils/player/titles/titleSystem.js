export function getTitle(level) {

    if (level >= 50) {

        return "Legendary Hunter";

    }

    if (level >= 30) {

        return "Master Hunter";

    }

    if (level >= 20) {

        return "Veteran Hunter";

    }

    if (level >= 10) {

        return "Achievement Seeker";

    }

    return "Rookie Hunter";

}