// Without this, Node's own default behavior is to crash the entire process
// (silently on uncaughtException; on unhandledRejection too, as of Node
// 15+ - the exact runtime this app already requires, see
// package.json's engines.node) the moment an error occurs OUTSIDE any
// request's own promise chain - a bug in a fire-and-forget async call, a
// timer callback, or any other detached code path. Every within-request
// error path in this codebase is already safely caught (route handlers'
// own try/catch -> sendServerError, the global Express error-handling
// middleware for routing-layer errors) - this is the last-resort net for
// everything else, taking down every connected user's session at once
// (not just the one request that triggered the bug) if it isn't handled,
// exactly the same "opaque crash with no clue why" problem server.js's own
// existing httpServer.on("error", ...) handler already solves for a failed
// port bind, just at the process level instead of the HTTP-server level
// (Phase 62, PHASE_62_AUDIT.md).
//
// Logs a clear, attributed message before exiting - continuing to serve
// requests after a genuinely uncaught error is unsafe, since the process's
// in-memory state (the session store, the cache, any in-flight request)
// may now be inconsistent; exiting lets a process manager (nodemon in
// development, whatever manages this in a real deployment) restart it
// cleanly instead.
//
// target/logger are injectable (default to the real process/console) so
// tests can verify the exact registration + handler behavior against a
// fake EventEmitter-like target instead of the real global process, which
// would otherwise mean literally exiting the test runner to prove this
// works.
export function registerProcessErrorHandlers(target = process, logger = console) {

    target.on("uncaughtException", error => {

        logger.error("[uncaughtException] Unhandled synchronous error - shutting down:", error);

        target.exit(1);

    });

    target.on("unhandledRejection", reason => {

        logger.error("[unhandledRejection] Unhandled promise rejection - shutting down:", reason);

        target.exit(1);

    });

}
