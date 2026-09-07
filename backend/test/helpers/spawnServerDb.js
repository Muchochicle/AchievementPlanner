import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import fs from "node:fs";

// Shared plumbing for the integration tests that spawn the real server.js
// as a child process (apiGamesRoute, apiMe, apiProfileRoute,
// apiPodiumsRoute, globalErrorHandler, serverSecurity, server).
//
// `node --test` runs test *files* in parallel, so several of those child
// servers boot at the same instant. If they all open the same default
// SQLite file (backend/data/achievementplanner.db) they race on
// `PRAGMA journal_mode = WAL` during schema init - which SQLite rejects
// immediately with SQLITE_BUSY ("database is locked"), crashing the child
// (server.js's uncaughtException handler -> process.exit(1)) and failing
// the test with "server exited early with code 1". That was an intermittent
// CI red (services/leaderboardDb.js now also retries that one pragma, but
// giving every spawned server its own throwaway database file removes the
// contention at the source and stops the tests mutating a real dev/CI
// data file as a side effect).

// A unique temp path, nested one level deep so the "parent directory does
// not exist yet" branch of createLeaderboardDb is exercised for real too.
export function isolatedDbPath(label) {

    return path.join(
        os.tmpdir(),
        `achievementplanner-${label}-${crypto.randomUUID()}`,
        "test.db"
    );

}

// Best-effort recursive removal of the temp directory isolatedDbPath()
// created. maxRetries/retryDelay absorbs the brief window on Windows where
// the SQLite file is still held open just after the child is signalled.
export function removeIsolatedDb(dbPath) {

    if (!dbPath) {

        return;

    }

    fs.rmSync(path.dirname(dbPath), {
        recursive: true,
        force: true,
        maxRetries: 5,
        retryDelay: 100
    });

}

// Resolves once the child process has actually exited. Callers wait on
// this (not just child.kill()) before removeIsolatedDb() so the DB file is
// no longer open when the directory is deleted.
export function waitForExit(child) {

    return new Promise(resolve => {

        if (child.exitCode !== null || child.signalCode !== null) {

            resolve();
            return;

        }

        child.once("exit", resolve);

    });

}
