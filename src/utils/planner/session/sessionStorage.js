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

export function loadSessionDuration(slug) {

    const stored =
        localStorage.getItem(
            `session-duration-${slug}`
        );

    const duration =
        Number(stored);

    return VALID_DURATIONS.includes(duration)
        ? duration
        : DEFAULT_DURATION;

}

export function saveSessionDuration(slug, duration) {

    safeSetItem(

        `session-duration-${slug}`,

        String(duration),

        `session-duration-${slug}`

    );

}