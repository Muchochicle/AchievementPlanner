// Chants of Sennaar Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chants-of-sennaar.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1931770 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "chants-of-sennaar-achievement-guide",
    "category": "game",
    "gameSlug": "chants-of-sennaar",
    "icon": "📜",
    "title": "Chants of Sennaar Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Chants of Sennaar (13 hidden). The hidden achievements are the two endings, the six 'reconnect a pair of peoples' results, and five optional secrets. Everything else - reaching each area, validating glyphs, rebuilding links and activating Terminals - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Chants of Sennaar has 25 Steam achievements, 13 of them hidden. You climb a tower whose peoples - Devotees, Warriors, Bards, Alchemists and the Exiles below - can no longer understand one another, deducing each language glyph by glyph and writing your findings in a journal. The visible achievements cover filling the journal's first page, reaching each area (Abbey, Frontier, Garden, Galleries, Exile), validating half and then all glyphs, rebuilding the first, half and all 'links' between peoples, and activating every Terminal.",
                "The 13 hidden achievements are the two endings, the six 'reconnect a specific pair of peoples' results, and five optional secrets (the Preacher's corpse, ringing the Abbey bell three times, the wrong Armory disguise, winning both Garden games, and the Alchemists' cable car).",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is permanently missable - you can backtrack through the whole tower for the glyphs, links and secrets after the story."
            ]
        },
        {
            "heading": "The Ascent",
            "body": [
                "Filling the journal's first page, reaching the Abbey, Frontier, Garden, Galleries and Exile, and validating half then all of the game's glyphs.",
                "The achievements here: That's the spirit (Fill in the Journal's first page); Welcome to the Tower (Reach the Abbey); The great escape (Reach the Frontier); A new dawn (Reach the Garden); The darkness (Reach the Galleries); One last step (Reach Exile); Scholar (Validate half of the game's glyphs); Champollion (Validate all glyphs in the game)."
            ]
        },
        {
            "heading": "Reconnecting the Peoples",
            "body": [
                "The two endings, rebuilding the first / half / all links, activating all Terminals, and the six 'reconnect a specific pair of peoples' results.",
                "The achievements here: I did it (Reach the game's 'bad' ending.); In this together (Reach the game's 'good' ending, having reconnected all the peoples of the tower.); A good beginning (Rebuild a first link); Half the way (Rebuild half of the links); Peace walker (Rebuild all links in the game); Cable guy (Activate all Terminals); Feels like springtime (Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free.); Open door (Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free.); Free at last (Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free.); A great audience (Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free.); For its own good (Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free.); A Link to the Past (Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free.)."
            ]
        },
        {
            "heading": "Secrets",
            "body": [
                "The five optional secrets: the Preacher's corpse, ringing the Abbey bell three times, the wrong Armory disguise, winning both Garden games, and the Alchemists' cable car.",
                "The achievements here: The Preacher's fate (Discover the Preacher's corpse in the underground maze beneath the Abbey graveyard (Level 1).); Rascal (Ring the Abbey bell three times (Level 1).); Fashion victim (Leave the Level 2 Armory wearing the wrong disguise after the Call has been made.); True G3M4R (Win both of the mini-games in the Gardens (Level 3).); Alchemists Express (Ride the cable car in the Alchemists' section.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the tower, filling your journal and validating glyphs as you go; reaching each area unlocks automatically.",
                "2. Do the optional secrets in their areas while you are there - the Preacher's corpse and the bell in the Abbey, the wrong disguise in the Frontier armory, both games in the Gardens, the cable car in the Galleries.",
                "3. Rebuild every link between peoples and activate every Terminal - this drives the six pairing results and 'Peace walker'.",
                "4. Validate all remaining glyphs by backtracking with your near-complete journal.",
                "5. Trigger the bad ending, then reload and complete the requirements for the good ending.",
                "Tip: keep translating even after the credits are in reach - 'Champollion' (all glyphs) and the six pairing results need a near-complete understanding of every language, and it is much faster to finish them in one backtracking pass with a full journal than to chase individual glyphs blind."
            ]
        }
    ]
};
