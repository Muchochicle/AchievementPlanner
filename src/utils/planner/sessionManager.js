import {
    loadSession,
    saveSession,
    clearSession
} from "./session/sessionStorage.js";

import {
    createSession,
    resetSession
} from "./sessionPlanner.js";

import {
    findMergedEntry,
    isEntryCompleted
} from "./achievement/completion.js";

export function getSession(
    game,
    slug,
    duration
) {

    const stored =
        loadSession(slug);

    // A stored [] must not be trusted as "already generated, nothing to
    // plan" - it's also exactly what gets persisted the first time this
    // runs for a game with no curated achievements yet (see
    // recommendation.js's identical game.achievements?.length guard). Once
    // that game later gains real curated data (e.g. src/data/games/*.json
    // going from an empty planner to a full one - see PHASE_41_AUDIT.md),
    // a returning visitor's browser still has that stale [] on disk and,
    // without this check, would keep reading it back forever instead of
    // regenerating from the now-real achievement list. Falling through to
    // createSession() below is always safe: if the game's achievements are
    // genuinely all done, it legitimately reproduces the same [].
    // loadSession() only guards against syntactically-invalid JSON (see
    // safeJson.js's safeParseJSON, which falls back to null on a parse
    // error) - it has no way to know the *shape* the caller expects, so a
    // syntactically-valid-but-wrong-shape stored value (e.g. localStorage
    // manually edited to a JSON string or object, or a future schema
    // change writing something other than an array under this key)
    // previously passed `stored.length > 0` whenever that value happened to
    // have a positive `.length` (any non-empty string, or a plain object
    // with a numeric `.length` property), then crashed on `stored.map(...)`
    // below - a TypeError a returning visitor with corrupted/stale
    // session data would hit on every visit to that game's page, with no
    // fallback (Phase 64, PHASE_64_AUDIT.md). Array.isArray() closes that
    // gap the same way this app already treats every other localStorage
    // read as untrusted.
    if (Array.isArray(stored) && stored.length > 0) {

        const merged = game.mergedAchievements;

        // Same re-filter as sessionPlanner.js's in-memory cache: a
        // previously-stored session must not keep showing an achievement
        // Steam has since confirmed complete. Pending entries pass
        // through untouched.
        const filtered = stored
            .map(id =>
                (game.achievements ?? []).find(
                    achievement =>
                        achievement.id === id
                )
            )
            .filter(Boolean)
            .filter(achievement => {

                const entry = findMergedEntry(game, achievement.id);

                return entry ? !isEntryCompleted(merged, entry) : true;

            });

        if (filtered.length > 0) {

            const filteredTotalTime = filtered.reduce(
                (sum, achievement) => sum + achievement.estimatedTime,
                0
            );

            // A stored session is only trustworthy for the duration it was
            // actually built for - `duration` was previously "write-only"
            // on a cache hit here, re-filtered for completion but never
            // re-validated against whatever duration was just requested
            // (Finding 2, PHASE_51-54_AUDIT.md). Same fallthrough-to-rebuild
            // treatment as the "everything's complete" case below.
            if (filteredTotalTime <= duration) {

                return filtered;

            }

        }

        // Either every achievement that was planned is now complete (the
        // intended, successful outcome of using this feature), or the
        // stored session no longer fits the currently-requested duration.
        // Falling through to createSession() below (same as the "nothing
        // stored yet" case) regenerates a fresh session from the game's
        // remaining, not-yet-planned achievements instead of permanently
        // returning this stale list - see PHASE_48_AUDIT.md Finding 7 for
        // the original completion-only version. If the game genuinely has
        // nothing left to plan either way, createSession() below correctly
        // reproduces the same [] (see the "genuinely empty" test case).

    }

    const session =
        createSession(
            game,
            duration
        );

    saveSession(

        slug,

        session.map(
            achievement =>
                achievement.id
        )

    );

    return session;

}

export function regenerateSession(
    game,
    slug,
    duration
) {

    resetSession();

    clearSession(slug);

    const session =
        createSession(
            game,
            duration
        );

    saveSession(

        slug,

        session.map(
            achievement =>
                achievement.id
        )

    );

    return session;

}