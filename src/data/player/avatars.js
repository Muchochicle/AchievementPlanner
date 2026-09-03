// requiredAchievements is the single source of truth for when each avatar
// unlocks (see playerProgress.js's checkPlayerUnlocks) - avatars represent
// dedication to earning achievements, and nothing else. avatar-picker.js
// reads this same field to display each locked tile's requirement, instead
// of keeping its own separately-maintained copy of these numbers (that
// used to drift from the level/completedGames-based checks this file's
// unlocks were actually gated on).
export const AVATARS = {

    default: {

        id: "default",

        name: "Anonymous",

        image: "src/assets/player/avatars/default.webp",

        unlocked: true

    },

    rookie: {

        id: "rookie",

        name: "Recruit",

        image: "src/assets/player/avatars/rookie.webp",

        unlocked: false,

        requiredAchievements: 100

    },

    explorer: {

        id: "explorer",

        name: "Pathfinder",

        image: "src/assets/player/avatars/explorer.webp",

        unlocked: false,

        requiredAchievements: 250

    },

    veteran: {

        id: "veteran",

        name: "Veteran",

        image: "src/assets/player/avatars/veteran.webp",

        unlocked: false,

        requiredAchievements: 500

    },

    master: {

        id: "master",

        name: "Elite",

        image: "src/assets/player/avatars/master.webp",

        unlocked: false,

        requiredAchievements: 1000

    },

    legend: {

        id: "legend",

        name: "Legend",

        image: "src/assets/player/avatars/legend.webp",

        unlocked: false,

        requiredAchievements: 2000

    }

};
