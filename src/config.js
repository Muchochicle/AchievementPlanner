export const CONFIG = {

    // ==========================
    // DEVELOPMENT
    // ==========================

    // Ship false by default - a real visitor must never get dev-only
    // behavior just because a flag was left on (see the same reasoning
    // already applied to ENABLE_RESET_BUTTON/DEBUG_UNLOCK_ALL_AVATARS
    // below). Currently unused by any code path (verified: no `CONFIG.`
    // reference to these three anywhere in src/), but a flag named
    // DEV_MODE/ENABLE_SANDBOX/ENABLE_FAKE_STEAM defaulting to true is
    // exactly the kind of thing a future feature could start reading
    // without anyone noticing it was already "on" for every visitor.
    DEV_MODE: false,

    ENABLE_SANDBOX: false,

    ENABLE_RESET_BUTTON: false,

    ENABLE_FAKE_STEAM: false,

    // ==========================
    // DEBUG
    // ==========================

    DEBUG_UNLOCK_ALL_AVATARS: false,

    DEBUG_UNLOCK_ALL_FRAMES: false,

    DEBUG_UNLOCK_ALL_BADGES: false,

    DEBUG_FAST_LEVEL: false,

    DEBUG_INFINITE_XP: false,

};