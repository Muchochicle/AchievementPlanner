import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// backend/utils -> backend -> project root -> src/data/games
const GAMES_DIR = path.join(__dirname, "..", "..", "src", "data", "games");

let cache = null;

function loadCatalog() {

    if (cache) {
        return cache;
    }

    // Object.create(null) rather than {} - a plain object literal exposes
    // its prototype chain through bracket access, so catalog["__proto__"]
    // or catalog["constructor"] would resolve to a real, truthy built-in
    // instead of undefined, letting getPlannerData() below treat an
    // attacker-chosen slug like "__proto__" as a legitimate catalog hit.
    cache = Object.create(null);

    if (!fs.existsSync(GAMES_DIR)) {
        return cache;
    }

    const files = fs
        .readdirSync(GAMES_DIR)
        .filter(file => file.endsWith(".json"));

    for (const file of files) {

        const slug = file.replace(/\.json$/, "");
        const fullPath = path.join(GAMES_DIR, file);

        try {

            const raw = fs.readFileSync(fullPath, "utf-8");
            const data = JSON.parse(raw);

            // Internal/development fixtures (e.g. the sandbox test game)
            // must never reach a real user - exclude them here so every
            // consumer of this catalog (getPlannerData, getAllPlannerSlugs,
            // getPlannerDataByAppId) is unaware they exist.
            if (!data.internal) {
                cache[slug] = data;
            }

        } catch (error) {

            console.error(
                `[plannerCatalog] Error reading "${file}":`,
                error.message
            );

        }

    }

    return cache;

}

export function getPlannerData(slug) {

    const catalog = loadCatalog();

    return catalog[slug] || null;

}

export function getAllPlannerSlugs() {

    return Object.keys(loadCatalog());

}

export function getPlannerDataByAppId(appid) {

    if (!(appid > 0)) {

        return null;

    }

    const catalog = loadCatalog();

    for (const slug of Object.keys(catalog)) {

        const entry = catalog[slug];

        if (
            entry.steamAppId === appid ||
            entry.id === appid
        ) {

            return { slug, data: entry };

        }

    }

    return null;

}