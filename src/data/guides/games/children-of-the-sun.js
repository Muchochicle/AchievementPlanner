// Children of the Sun Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/children-of-the-sun.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1309950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "children-of-the-sun-achievement-guide",
    "category": "game",
    "gameSlug": "children-of-the-sun",
    "icon": "🔭",
    "title": "Children of the Sun Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Children of the Sun - none are hidden. Covers finishing every level in the game with a single bullet across all 21 stages. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Children of the Sun has 21 Steam achievements and none are hidden. Every achievement is completing one of the game's 21 levels - a single sniper bullet chained through a cult's entire compound, from Broken Home through the final Church Attack.",
                "The catalog marks it difficulty 3. This is a short, puzzle-precision revenge story told entirely through one-shot sniper puzzles; nothing here is missable, but later levels demand real planning to chain the bullet through every target.",
                "Tip: watch each level's bullet-path options before committing - Children of the Sun rewards planning the whole shot in advance rather than reacting mid-flight."
            ]
        },
        {
            "heading": "Early & Mid Levels",
            "body": [
                "Broken Home, A Vulture, Being Stuck, Removing Evidence, Hiding Bodies, Old Home, Gallery of Heads, Occupied Village, Breaking Contact, Filled with Blood, and Manufacturing Lies.",
                "The achievements here: Broken Home (The Virus is in their heads); A Vulture (When it moves, it spreads); Being Stuck (Gas Tanks make the World burn brighter); Removing Evidence (Bullets that burn, are Bullets that hurt); Hiding Bodies (Appealing views from the top); Old Home (Open Gates through their Hearts); Gallery of Heads (Two in One); Occupied Village (You can see them all); Breaking Contact (The Sun shines through); Filled with Blood (Drifting into their conclusion); Manufacturing Lies (Some are on the run)."
            ]
        },
        {
            "heading": "Late Levels & Finale",
            "body": [
                "Losing Track, Gas Station, Main Street, Open Mic Night in Hell, This is no Paradise, Bury your Past, Surveil the Dead, Enter the Heart, Valley Path, and the final Idolatry.",
                "The achievements here: Losing Track (Just passing through); Gas Station (Most can burn, but inside they can't); Main Street (350 meters are a long way); Open Mic Night in Hell (He is blocking the entrance); This is no Paradise (Through their homes); Bury your Past (Avoid the Debris); Surveil the Dead (It's been a long time); Enter the Heart (Consecutive prayers kill); Valley Path (Direct hits hit the hardest); Idolatry (Precise deviation might gets things on fire)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the levels in order - each one is a single self-contained sniper puzzle worth its own achievement.",
                "2. Take your time planning the bullet's path through a level's enemies before firing.",
                "3. Use the game's course-correction to steer the bullet on the fly if a level doesn't go as planned.",
                "Tip: this is a short, story-driven puzzle game - a single deliberate playthrough is enough for all 21 achievements."
            ]
        }
    ]
};
