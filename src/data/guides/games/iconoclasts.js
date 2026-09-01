// Iconoclasts Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/iconoclasts.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   393520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "iconoclasts-achievement-guide",
    "category": "game",
    "gameSlug": "iconoclasts",
    "icon": "🔩",
    "title": "Iconoclasts Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Iconoclasts (4 hidden). Covers using tweaks and the wrench parry, surviving an agent encounter, collecting every chest, and beating Challenge mode. Four of the achievements are hidden and their unlock conditions are researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Iconoclasts has 11 Steam achievements and 4 are hidden. They cover making a tweak, using the wrench to deflect danger, surviving an agent encounter, completing the game, making all main tweaks, collecting every chest in one playthrough, and beating Challenge mode. The four hidden achievements are reaching the city, protecting the rocket, and defeating the optional bosses Mother's Corners and Fitzroy.",
                "The catalog marks it difficulty 3. Iconoclasts is a story-heavy metroidvania; nothing is missable, but Mother's Corners and Fitzroy are optional bosses that take real detours (and, for Fitzroy, at least one Breathless tweak) to reach.",
                "Tip: to reach Fitzroy, first talk to the NPC Letícia across five locations (Blockrock, Share Wastelands, Ferrier Shockwood, Isilugar and Darland Ascent), then dive deep on the right side of the Glass Strait."
            ]
        },
        {
            "heading": "Tweaks & Early Story",
            "body": [
                "Making a tweak, using the wrench to deflect danger, surviving an agent encounter, the hidden 'reach the city' and 'protect the rocket' achievements, and completing the game.",
                "The achievements here: Feature Creep (Made a tweak.); Parrying Mechanic (Use the wrench to deflect danger.); Coloring Agent (Survive the encounter with an agent.); Pearly Gates (Reach the city.); Pitch Black (Protect the rocket.); Life Experience (Complete the game.)."
            ]
        },
        {
            "heading": "Optional Bosses & Completion",
            "body": [
                "The hidden Mother's Corners and Fitzroy boss kills, making all main tweaks, collecting every chest in one playthrough, and beating Challenge mode.",
                "The achievements here: Psychopomps (Defeat the optional boss Mother's Corners.); Melodrama (Defeat the optional boss Fitzroy - found by talking to the NPC Letícia across five locations (Blockrock, Share Wastelands, Ferrier Shockwood, Isilugar and Darland Ascent), then diving deep on the right side of the Glass Strait (at least one Breathless tweak recommended).); Multitool (Make all main tweaks.); Beaucoup Booty (Get all chests in one playthrough.); One-Hit Wonder (Beat Challenge mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, making tweaks and using the wrench to deflect danger and survive agent encounters.",
                "2. Reach the city and protect the rocket as those story beats come up.",
                "3. Make all main tweaks and collect every chest in a single playthrough.",
                "4. Seek out the optional bosses - defeat Mother's Corners, then talk to Letícia across her five locations and dive into the Glass Strait to find and defeat Fitzroy.",
                "5. Once you've finished the story, take on Challenge mode.",
                "Tip: Fitzroy is easy to miss since it's an optional deep-dive fight - make sure you've collected at least one Breathless tweak before attempting the Glass Strait descent."
            ]
        }
    ]
};
