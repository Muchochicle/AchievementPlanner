// Task 8: filter the Games list by achievement completion percentage.
//
// Operates on game.playerPercent - the real, Steam-backed per-game
// completion percentage merged in by games.js from /api/profile/game-stats
// (integer 0-100, or absent when logged out / no player data for that
// game yet). It is NOT a display-only value.
//
// Buckets are half-open [lo, hi) so 100%-complete games can never leak
// into "90-99%": the "100" bucket is an exact match on 100, and every
// "lo-hi" bucket is `percent >= lo && percent < hi`. A game with no
// player completion data at all is excluded whenever any bucket is
// active (same stance as the difficulty/time filters toward missing
// data), never silently treated as 0%.
//
// Reads the checked controls straight off the DOM (.completion-filter
// input:checked), matching difficulty.js/time.js/extras.js.

function matchesBucket(bucketValue, percent) {

    if (bucketValue === "100") {

        return percent === 100;

    }

    const [lo, hi] = bucketValue.split("-").map(Number);

    return percent >= lo && percent < hi;

}

export function filterCompletionPercent(games) {

    const selected = [
        ...document.querySelectorAll(".completion-filter input:checked")
    ].map(input => input.value);

    if (!selected.length) {

        return games;

    }

    return games.filter(game => {

        const percent = game.playerPercent;

        if (typeof percent !== "number" || Number.isNaN(percent)) {

            return false;

        }

        return selected.some(bucket => matchesBucket(bucket, percent));

    });

}
