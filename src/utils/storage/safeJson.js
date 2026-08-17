// Shared guard for every localStorage JSON.parse call in the app. A single
// corrupted key must degrade to the caller's fallback, not throw and take
// down whatever synchronous render triggered the read (the navbar and the
// profile page both call getPlayer() in their initial render path, so an
// unguarded parse there previously meant one bad value broke every page).
export function safeParseJSON(raw, fallback, context = "storage") {

    if (raw == null) {

        return fallback;

    }

    try {

        return JSON.parse(raw);

    } catch (error) {

        console.warn(

            `[safeParseJSON] Malformed JSON in "${context}" - using fallback.`,

            error

        );

        return fallback;

    }

}
