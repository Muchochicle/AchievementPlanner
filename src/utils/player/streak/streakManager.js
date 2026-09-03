import { getPlayer, savePlayer } from "../player.js";
import { checkBadgeUnlocks } from "../playerProgress.js";

// player.lastPlayed/currentStreak/longestStreak have existed on the player
// object's shape since it was first introduced, but nothing ever actually
// wrote to them - there was no streak-tracking code at all, which is the
// real reason no streak-gated badge could ever unlock. This is that
// missing piece: a plain daily-activity streak, local to this
// device/browser like the rest of player.js.
//
// Local calendar date as "YYYY-MM-DD", matching the shape lastPlayed
// already had. Uses the viewer's own local date (not UTC) - a streak
// should track the player's own day boundary, not a fixed timezone that
// could flip the date on them mid-session.
function todayKey() {

    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;

}

// Both sides are parsed the same way (as UTC midnight for a date-only
// string), so the local-timezone offset cancels out of the difference -
// only the whole-calendar-day gap between them matters here.
function daysBetween(earlierKey, laterKey) {

    const msPerDay = 24 * 60 * 60 * 1000;

    return Math.round(
        (new Date(laterKey) - new Date(earlierKey)) / msPerDay
    );

}

// Call once per "session" of actually using the app (see src/js/profile.js)
// to record today's activity and grow/reset the streak accordingly.
// Idempotent within the same calendar day - a second call today is a
// no-op, so callers never need to guard against calling this more than
// once (matches this whole progression system's existing "safe to call
// repeatedly" convention - see checkPlayerUnlocks/checkBadgeUnlocks).
export function recordDailyActivity() {

    const player = getPlayer();
    const today = todayKey();

    if (player.lastPlayed === today) {

        return;

    }

    if (player.lastPlayed && daysBetween(player.lastPlayed, today) === 1) {

        // Played yesterday, playing again today - the streak continues.
        player.currentStreak += 1;

    } else {

        // First-ever activity, or a gap of more than a day since the last
        // one (including a clock-skew "lastPlayed is in the future" case,
        // which resolves to a negative gap here) - the streak restarts,
        // with today counting as day one.
        player.currentStreak = 1;

    }

    player.longestStreak = Math.max(player.longestStreak, player.currentStreak);
    player.lastPlayed = today;

    savePlayer(player);

    checkBadgeUnlocks();

}
