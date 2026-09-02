// Indiana Jones and the Great Circle Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/indiana-jones-and-the-great-circle.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2677660 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 28 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "indiana-jones-and-the-great-circle-achievement-guide",
    "category": "game",
    "gameSlug": "indiana-jones-and-the-great-circle",
    "icon": "🤠",
    "title": "Indiana Jones and the Great Circle Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Indiana Jones and the Great Circle (28 hidden). The hidden set is the 8 main story-mission markers, the region-completion Mystery/collectible achievements, the 9 Fieldwork side missions, and 4 markers from The Order of Giants DLC. Sourced from PowerPyx and TrueAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Indiana Jones and the Great Circle has 55 Steam achievements, 28 of them hidden. The visible achievements are the region 'Mysteries' and puzzle solves, the Adventure Book ability unlocks, collectible milestones (Journal notes, photographs), the boxing champions, and a set of one-off melee gags (clobber an enemy with a guitar, hit one with a fly swatter or an apple, disarm-and-knock-out, counter-only knockouts).",
                "The 28 hidden achievements are the eight main story-mission markers, the region-completion Mystery/collectible achievements (all Vatican City and Gizeh and Sukhothai mysteries, all Stelae, all Ancient Relics, the Sukhothai Cogwheel puzzle), the nine Fieldwork side-mission completions, and four story markers from The Order of Giants DLC.",
                "The catalog marks it difficulty 3 and single-playthrough: the game returns you to an open world after the credits, so nothing is permanently missable - every Mystery, Fieldwork and collectible can be finished during free roam. The Order of Giants is paid DLC set in Rome."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "Eight Steam-hidden markers that unlock automatically as you finish the numbered story missions. Described spoiler-free.",
                "The achievements here: The Golden Idol (Complete the first story mission, 'The Golden Idol'); The Break-In (Complete the story mission 'The Break-In'); The Stolen Cat Mummy (Complete the story mission 'The Stolen Cat Mummy'); The Idol of Ra (Complete the story mission 'The Idol of Ra'); A Harsh Climb (Complete the story mission 'A Harsh Climb'); Into the Fire (Complete the story mission 'Into the Fire'); The Blessed Pearl (Complete the story mission 'The Blessed Pearl'); Atonements (Complete the story mission 'Atonements' (near the end of the campaign))."
            ]
        },
        {
            "heading": "Mysteries, Puzzles & Collectibles",
            "body": [
                "The region-completion achievements - solve every Mystery in a location, collect all Stelae or Ancient Relics, photograph every Inscription - plus the Journal-note milestones and the boxing champions. All can be finished during post-credits free roam.",
                "The achievements here: Tuned In (Bring all radio frequencies to Gina); Repatriation (Return all Lost Artifacts); Path of Junia (Photograph every Inscription in Vatican City and return to Antonio); When in Rome (Solve every Mystery in Vatican City); It Belongs in a Museum! (Collect all of the missing Stelae); Secrets in the Sand (Solve every Mystery in Gizeh); Gear Head (Solve the Cogwheel puzzle in Sukhothai); Beneath the Surface (Solve every Mystery in Sukhothai); Tour de Force (Defeat all boxing champions); Shadows out of Time (Collect all of the Ancient Relics); Field Survey (Collect 50 Journal notes); Archivist (Collect all Journal notes in the game)."
            ]
        },
        {
            "heading": "Adventure Books & Combat Tricks",
            "body": [
                "Learning abilities from Adventure Books, and the one-off melee gags - Indy's whip, a guitar, a fly swatter, an apple, a ledge push, counters and dodges.",
                "The achievements here: Ecco! (Photograph Ernesto); Bookworm (Learn 10 abilities from Adventure books); Literary Bug (Learn an ability from an Adventure book); Bookman (Learn all abilities from Adventure books); The Right Note (Clobber an enemy with a guitar); Pest Control (Hit an enemy with a fly swatter); Apple of Discord (Hit an enemy with an apple); A Little Tumble (Push an enemy off a ledge); Your Own Medicine (Disarm an enemy with your whip and then use his weapon to knock him out); Offensive Defense (Knock out an enemy using only counters); A Slippery Customer (Dodge a power punch)."
            ]
        },
        {
            "heading": "Fieldwork",
            "body": [
                "Nine Steam-hidden Fieldwork side-mission completions, spread across the game's regions. None are missable.",
                "The achievements here: The Mad Priest (Complete the Fieldwork 'The Mad Priest'); A Savage Discovery (Complete the Fieldwork 'A Savage Discovery'); A Nun in Trouble (Complete the Fieldwork 'A Nun in Trouble'); Secret of the Queen Mother (Complete the Fieldwork 'Secret of the Queen Mother'); Sanctuary of the Guardians (Complete the Fieldwork 'Sanctuary of the Guardians'); Savage Predicament (Complete the Fieldwork 'Savage Predicament'); The Kid Who Vanished (Complete the Fieldwork 'The Kid Who Vanished'); A Study in Fear (Complete the Fieldwork 'A Study in Fear'); Lost in the Past (Complete the Fieldwork 'Lost in the Past')."
            ]
        },
        {
            "heading": "Rome, Snacks & The Order of Giants DLC",
            "body": [
                "The last stretch mixes a few base-game gags (eat a Cornetto, an Aish Baladi bread, a star fruit; revisit a location; take 50 photos) with The Order of Giants paid DLC set in Rome - its story markers, its Mithraic Artifact and Journal-note collections, and petting the cat on Via Giulia.",
                "The achievements here: Little Horn (Eat a Cornetto); Bread is Life (Eat an Aish Baladi Bread); Celestial Delight (Eat a Star Fruit); Filling in the Blanks (Revisit a location); Shutterbug (Capture 50 Photographs for your Journal); Locked Doors Hide Secrets (Get inside Villa Pia (The Order of Giants DLC)); Out of the Vatican (Reach Rome (The Order of Giants DLC)); The Order of Giants (Complete The Order of Giants DLC story); Chronicler (Collect 25 Journal notes in Rome); Roman Scholar (Collect all Journal notes in Rome); Symbol of Initiation (Collect a Mithraic Artifact); The Seven Grades (Collect all Mithraic Artifacts); Books of Power (Learn all abilities from Adventure books in Rome); Depths of the City (Solve every Mystery in Rome (The Order of Giants DLC)); Pet the Cat (Pet the cat at Via Giulia in Rome)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign through, letting the eight story-mission markers unlock on their own.",
                "2. In each region, before you move on, clear its Mysteries, Fieldwork and collectibles - but don't stress about 100% on the first visit, since you can return freely after the credits.",
                "3. Pick up the melee gags whenever the opportunity appears (a guitar, a fly swatter, an apple lying around, a ledge behind an enemy) - they're trivial but easy to forget.",
                "4. After the story, mop up any remaining Mysteries, all Stelae, all Ancient Relics, every Fieldwork, and the Journal-note and photograph totals.",
                "5. Play The Order of Giants DLC in Rome for its four story markers and its own Mystery, Artifact and Journal-note completions.",
                "Tip: the game has no permanently missable achievements - it drops you back into a fully open world once the credits roll, so a guide-assisted collectible sweep at the end is all you need for 100%."
            ]
        }
    ]
};
