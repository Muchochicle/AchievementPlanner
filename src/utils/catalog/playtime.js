// Task 8: filter the Games list by hours played.
//
// Operates on game.playtime - real Steam playtime in whole hours
// (backend/utils/gameMapper.js: Math.round(playtime_forever / 60)), the
// same player-specific value the sort uses. Absent for games the visitor
// doesn't own; such games are excluded whenever any bucket is active
// (never treated as 0 hours).
//
// Buckets are half-open [lo, hi) so there is no overlap at a boundary
// (25 hours is in "25-50", not "10-25"); the top bucket ("250") is
// "250 or more". Reads .playtime-filter input:checked off the DOM,
// matching the sibling filters.

function matchesBucket(bucketValue, hours) {

    if (bucketValue === "250") {

        return hours >= 250;

    }

    const [lo, hi] = bucketValue.split("-").map(Number);

    return hours >= lo && hours < hi;

}

export function filterPlaytime(games) {

    const selected = [
        ...document.querySelectorAll(".playtime-filter input:checked")
    ].map(input => input.value);

    if (!selected.length) {

        return games;

    }

    return games.filter(game => {

        const hours = game.playtime;

        if (typeof hours !== "number" || Number.isNaN(hours)) {

            return false;

        }

        return selected.some(bucket => matchesBucket(bucket, hours));

    });

}
