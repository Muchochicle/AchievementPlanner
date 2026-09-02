// Turnip Boy Commits Tax Evasion Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/turnip-boy-commits-tax-evasion.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1205450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 22 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "turnip-boy-commits-tax-evasion-achievement-guide",
    "category": "game",
    "gameSlug": "turnip-boy-commits-tax-evasion",
    "icon": "🥬",
    "title": "Turnip Boy Commits Tax Evasion Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Turnip Boy Commits Tax Evasion (22 hidden). The hidden achievements are the rest of the 'rip up a specific document' set plus the endings and secret content. Everything else - ripping up the first batch of documents, the Soil Sword, hats, heart fruits, and destroying every document - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Turnip Boy Commits Tax Evasion has 37 Steam achievements, 22 of them hidden. Turnip Boy, deep in tax debt, does errands for the Mayor's cronies while gleefully shredding every piece of paperwork he finds. The game's core running joke is that you can rip up almost any document, and roughly half the achievements are for tearing up a specific one - the visible ones cover the early finds (a bill, a love letter, a wanted poster, Jerry's rent, a receipt, a 1099, an autograph, a book, a seed receipt), and the hidden ones cover the rest (a draft notice, a telegram, a petition, a deed, your dad's papers, and more).",
                "The other hidden achievements are the Shovel, the endings (beat the game, the true 100% ending, the nuclear ending), the train, and a secret shadow encounter.",
                "The catalog marks it difficulty 2 and single-playthrough. The game is very short; a completionist run with a document checklist covers everything, and chapter/area backtracking is free."
            ]
        },
        {
            "heading": "Documents",
            "body": [
                "Ripping up each specific document - the visible early ones and the hidden rest (draft, telegram, petition, deed, dad's papers, and so on) - plus destroying every document for 'Anarchist'.",
                "The achievements here: Tax evader (You committed tax evasion!); Heartless (You tore up a love letter.); Most wanted (You ripped up a wanted poster.); Murderer (You brutally murdered Jerry and ripped up his rent.); Dumpster diver (You ripped up a receipt in the trash.); Contractor (You tore up someone's 1099.); Simp (You shredded slayQueen32's autograph.); Computer wiz (You broke some computer software.); Book worm (You ripped a lame book in half.); Savvy shopper (You destroyed a receipt for seeds.); Draft dodger (Rip up a draft notice.); The messenger (Rip up a telegram.); Waifu (Rip up an imageboard 'waifu' printout.); Petitioner (Rip up a petition.); Devil (Rip up a vandalised document.); Estate agent (Rip up an estate document.); Gravedigger (Rip up a document found in the graveyard.); Doomsdayers (Rip up nuclear-launch paperwork.); News boy (Rip up a newspaper.); Liz (Rip up a diary page.); Teacher (Rip up an English homework paper.); Tyrant (Rip up an official decree.); Turnipchino (Rip up a document belonging to your father.); Home owner (Rip up a property deed.); Anarchist (You destroyed every single tax document.)."
            ]
        },
        {
            "heading": "Items & Collectibles",
            "body": [
                "The Soil Sword and the Shovel, the first hat and all hats, and all heart fruits.",
                "The achievements here: Adventurer (You grew your own Soil Sword!); Criminal (Obtain the Shovel.); Hat wearer (You obtained your first hat.); Fashionista (You found all the hats.); Tank (You grew all the heart fruits!)."
            ]
        },
        {
            "heading": "Endings & Secrets",
            "body": [
                "Beating the game, the true 100% ending, the trophy key item, the nuclear ending, the train (and dying on it), and the secret shadow encounter.",
                "The achievements here: Turnip Boy (Beat the game.); Taxation with representation (Reach 100% completion / the true ending.); Winner (Obtain the trophy key item.); Destroyer of the world (Trigger the nuclear ending.); Conductor (Reach the train.); Passenger (Die on the train.); ??? (Defeat the game's secret shadow encounter.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, ripping up every single document you come across - keep a checklist, since the achievements are per-document and some are easy to miss.",
                "2. Grow the Soil Sword and pick up the Shovel, and collect all hats and all heart fruits as you explore.",
                "3. Backtrack with a document guide to shred any you missed for 'Anarchist' (every document).",
                "4. Beat the game normally, then go for the nuclear ending and the true 100% ending ('Taxation with representation').",
                "5. Do the train sequence (and let yourself die on it), and find the secret shadow encounter.",
                "Tip: the document list is the whole platinum - open a full document-location guide from the start and tick each off as you tear it, because backtracking a top-down game for one missed scrap of paper is far slower than never missing one."
            ]
        }
    ]
};
