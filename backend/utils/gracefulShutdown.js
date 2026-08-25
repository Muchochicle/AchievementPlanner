// Without this, the default behavior of both SIGTERM (sent by every
// process manager on a normal stop/restart - Docker's `docker stop`,
// Kubernetes pod termination, systemd, most PaaS platforms' rolling
// deploys) and SIGINT (Ctrl+C) is to terminate the process immediately,
// dropping any request currently in flight with a connection reset
// instead of letting it finish. This registers both signals to instead
// stop accepting new connections (httpServer.close()) while letting
// already-in-flight requests complete normally, then exit once the server
// has genuinely finished closing. server.js's own TRUST_PROXY/
// COOKIE_SECURE options already anticipate this app running behind a real
// deployment's process manager - this closes the one piece of that story
// that was still left at Node's raw, request-dropping default (Phase 70).
//
// httpServer/target/logger are injectable (matching
// processErrorHandlers.js's own established pattern) so tests can verify
// the exact registration + shutdown behavior against fakes instead of
// actually sending a real signal to the test runner's own process.
export function registerGracefulShutdown(httpServer, target = process, logger = console) {

    let shuttingDown = false;

    function shutdown(signal) {

        // A second signal while already draining (e.g. an impatient
        // double Ctrl+C, or a process manager sending both SIGTERM and
        // SIGINT) must not call httpServer.close() twice - Node's
        // net.Server rejects an already-closing server's second close()
        // with an ERR_SERVER_NOT_RUNNING-style callback error instead of
        // a clean no-op.
        if (shuttingDown) {

            return;

        }

        shuttingDown = true;

        logger.log(`[shutdown] Received ${signal}, closing server gracefully...`);

        httpServer.close(error => {

            if (error) {

                logger.error("[shutdown] Error while closing server:", error);

                target.exit(1);

                return;

            }

            logger.log("[shutdown] Server closed, exiting.");

            target.exit(0);

        });

    }

    target.on("SIGTERM", () => shutdown("SIGTERM"));
    target.on("SIGINT", () => shutdown("SIGINT"));

}
