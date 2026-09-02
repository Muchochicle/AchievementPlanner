// Jusant Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/jusant.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1977170 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "jusant-achievement-guide",
    "category": "game",
    "gameSlug": "jusant",
    "icon": "🧗",
    "title": "Jusant Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Jusant (4 hidden). The four hidden achievements are two climbing feats (a wall-run apex piton, 200 jumps), a stamina-restore counter, and a Chapter 6 Ballast squeeze. Everything else - the 'do one' and 'do all' achievements for letters, shells, altars, frescos and cairns, plus the ballast hugs and finishing the game - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Jusant has 21 Steam achievements, 4 of them hidden. A silent traveller with a water-creature companion (the Ballast) climbs a vast, drought-dried tower, reading the letters left by everyone who lived there. The visible achievements cover doing one and then all of each collectible type (letters, shells, altars, frescos, cairns, Bianca's journal), hugging the Ballast (once and 20 times), using the echo on a frozen ballast in Chapter 6, scaring 10 chocos, stopping 25 pebbles with one echo, and completing the game.",
                "The 4 hidden achievements are placing a piton at the apex of a wall-run, the Chapter 6 Ballast squeeze, doing 200+ climbing jumps, and restoring stamina 50+ times mid-climb.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable via chapter select, but the two counter-based hidden achievements (jumps, stamina restores) are worth grinding deliberately near the end rather than hoping they accrue."
            ]
        },
        {
            "heading": "The Climb",
            "body": [
                "Finishing the game, the Ballast hugs, the Chapter 6 frozen-ballast echo, scaring chocos, the pebble-stop feat, and the two hidden climbing feats (wall-run apex piton, 200 jumps).",
                "The achievements here: Water piper (Complete the game.); Angel's carabiner (Place the second piton at the very top of a wall-run swing (the timing is finicky).); Adventure buddies (Hug the ballast.); Restored connection (Hug the ballast 20 times.); Awakened memory (Use the echo on a frozen ballast in Chapter 6.); Acrobat (Perform more than 200 climbing jumps or double jumps across your playthrough.); Bogeychoco (Scare more than 10 chocos back to their burrow.); Collective climb (Stop 25 pebbles with a single echo from the ballast.)."
            ]
        },
        {
            "heading": "Listening to the Tower",
            "body": [
                "Doing one and then all of each collectible: letters, shells, altars, frescos, cairns, and Bianca's journal entries.",
                "The achievements here: First contact (Read a letter.); Back in motion (Turn an altar.); An ear to the past (Listen to a shell.); First stone (Complete a cairn.); Echo from the past (Activate a fresco.); A faint glimmer (In Chapter 6, squeeze the cold Ballast tight with both climb inputs while in the crater to make it glimmer.); Avid reader (Read all letters.); Final ascent (Read all of Bianca's journal entries.); Sound archeologist (Listen to all shells.); Cycle celebration (Turn all altars.); Antique gallery manager (Activate all frescos.); Common ground (Complete all cairns.)."
            ]
        },
        {
            "heading": "Counters",
            "body": [
                "The two grind-y hidden counters: 200+ climbing jumps and 50+ mid-climb stamina restores.",
                "The achievements here: Fresh air (Restore your stamina mid-climb more than 50 times.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Climb the tower, reading every letter, listening to every shell, turning every altar, activating every fresco and completing every cairn as you pass them.",
                "2. Read all of Bianca's journal entries (they appear across the later chapters) and hug the Ballast whenever you rest - 20 times covers 'Restored connection'.",
                "3. In Chapter 6, use the echo on the frozen ballast and squeeze the cold Ballast in the crater for 'A faint glimmer'.",
                "4. Try for the wall-run apex piton on a long wall-run, and do the choco-scare and pebble-stop feats when the setups appear.",
                "5. Near the end, deliberately farm 200 climbing jumps and 50 stamina restores on any safe stretch of wall.",
                "Tip: use chapter select for anything missed - the collectible 'do all' achievements only need a full set across the whole game, and it is far quicker to replay one chapter for a known missing shell or fresco than to restart."
            ]
        }
    ]
};
