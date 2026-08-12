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

    cache = {};

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
            cache[slug] = JSON.parse(raw);

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
