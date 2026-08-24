import {

    safeParseJSON

} from "../../storage/safeJson.js";
import {

    safeSetItem

} from "../../storage/safeSetItem.js";

export function loadSession(slug) {

    const key = `session-${slug}`;

    const data =
        localStorage.getItem(key);

    return safeParseJSON(data, null, key);

}

export function saveSession(

    slug,

    session

) {

    safeSetItem(

        `session-${slug}`,

        JSON.stringify(session),

        `session-${slug}`

    );

}

export function clearSession(slug) {

    localStorage.removeItem(

        `session-${slug}`

    );

}

const VALID_DURATIONS = [30, 45, 60, 90];

const DEFAULT_DURATION = 45;

// Uses ":" (not "-") between "session-duration" and the slug - a real slug
// (see gameMapper.js's derivedSlug / plannerCatalog.js's filename-derived
// catalog slugs) is always restricted to [a-z0-9-], so it can never
// contain a ":". With the old "session-duration-${slug}" format, a game
// whose own slug happened to start with "duration-" (e.g. slug
// "duration-foo") would read/write the exact same key
// ("session-duration-foo") as a DIFFERENT game's own duration setting
// (saveSessionDuration("foo", ...)) - a real, if narrow, key-namespace
// collision between loadSession/saveSession's "session-${slug}" and this
// pair (Phase 58, PHASE_58_AUDIT.md). The ":" delimiter makes that
// collision structurally impossible, since no valid slug can ever contain
// one. Still starts with "session-" so resetProgress.js's existing
// key.startsWith("session-") sweep still clears it correctly.
export function loadSessionDuration(slug) {

    const stored =
        localStorage.getItem(
            `session-duration:${slug}`
        );

    const duration =
        Number(stored);

    return VALID_DURATIONS.includes(duration)
        ? duration
        : DEFAULT_DURATION;

}

export function saveSessionDuration(slug, duration) {

    safeSetItem(

        `session-duration:${slug}`,

        String(duration),

        `session-duration:${slug}`

    );

}