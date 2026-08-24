// Shared guard for every localStorage.setItem call in the app. A real
// setItem call throws synchronously on quota exhaustion (storage already
// full) or in a private/incognito-mode context that restricts persistent
// storage - previously unguarded (Finding 2, PHASE_51-55_AUDIT.md), this
// could crash whatever render/click-handler triggered the write, or abort
// a synchronous function partway through its own side effects. Mirrors
// safeParseJSON's sibling "degrade instead of crash" convention for reads
// (see safeJson.js) - the write is simply dropped for this one call, and
// the app continues in-memory instead of the whole page breaking.
export function safeSetItem(key, value, context = "storage") {

    try {

        localStorage.setItem(key, value);

        return true;

    } catch (error) {

        console.warn(

            `[safeSetItem] Unable to write "${context}" to localStorage - continuing without persisting this change.`,

            error

        );

        return false;

    }

}
