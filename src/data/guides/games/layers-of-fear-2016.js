// Layers of Fear (2016) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/layers-of-fear-2016.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   391720 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 11 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "layers-of-fear-2016-achievement-guide",
    "category": "game",
    "gameSlug": "layers-of-fear-2016",
    "icon": "🖼️",
    "title": "Layers of Fear (2016) Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Layers of Fear (2016) (11 hidden). Covers the painter's descent and its three endings, the rat, story and family collectible sets, a few secrets, and the free Inheritance DLC's endings. Eleven of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Layers of Fear (2016) has 27 Steam achievements and 11 are hidden. The visible list is collectibles (rat sketches, story echoes, family mementos), the neutral and conclusive endings, and time-and-count achievements (die once, search 100 drawers, gaze at paintings for an hour, walk a thousand steps). The hidden ones are: opening the developers' sketchbook after the 'wife' ending, seeing all three endings ('Omniscient'), dialing 911 in Chapter 5, not turning around when your wife's shadow appears in Chapter 5, staring at a certain portrait, and six from the free Inheritance DLC (the Father, Mother and true endings, the fable story, the sword-and-serpent secret, and sticking to one parent in the quarrel vision).",
                "The catalog marks it difficulty 2 - it is a short, non-violent first-person horror game with no fail state. Nothing is missable in the strict sense (chapters and the DLC can be replayed), but the three endings depend on specific interactions across a run, and 'Omniscient' needs all three, so plan on three playthroughs of the base game plus a few DLC runs.",
                "Tip: do the two Chapter 5 secrets on the same run - dial 911 on the rotary phone ('It was worth a try'), then, at the section where your wife's shadow is projected on the wall ahead, keep walking forward without turning around ('Instinct of self-preservation')."
            ]
        },
        {
            "heading": "The Painting & Its Endings",
            "body": [
                "Getting to work on your Magnum Opus, the developers' sketchbook, collecting one and all rat sketches, story echoes and family mementos, completing a painting, reaching a conclusive ending, and seeing all three endings.",
                "The achievements here: It's covered up for a reason (Get working on your Magnum Opus); Sketchbook of the damned (After reaching the 'wife' ending, open the book on the table in front of the broken couch (it reveals the developers' faces).); The artist's impression (Collect a rat sketch); You might have a problem (Gather all drawings of rodents); It rings a bell (Discover an echo from the past); Whispers long forgotten (Recall every word you said); Scraps of love (Find a memento of your family); Immortalized in my heart (Gather all family mementos); Finishing touch (Complete a painting); I know what I want (Reach a conclusive ending); Omniscient (See all three endings (the portrait of your wife, of yourself, and of your wife and baby).)."
            ]
        },
        {
            "heading": "Secrets & Time Feats",
            "body": [
                "Dialing 911 on the rotary phone, not turning around when your wife's shadow appears, dying once, searching 100 drawers and cabinets, staring at a certain portrait, an hour of gazing at paintings, and a thousand steps.",
                "The achievements here: It was worth a try (Dial 911 on the rotary phone in Chapter 5.); Instinct of self-preservation (In Chapter 5, when your wife's shadow is projected on the wall ahead, do not turn around - just keep walking forward.); Artist's struggle (Embrace death for the first time); Inspired OCD (Search 100 drawers and cabinets); Those eyes can pierce a man's soul (Gaze at a certain unsettling portrait long enough that its eyes seem to pierce you.); Art Connoisseur (Gaze at paintings for a total of an hour); Wanderer (Take a thousand steps)."
            ]
        },
        {
            "heading": "Inheritance DLC",
            "body": [
                "The Father, Mother and true endings, assembling all the puzzle pieces, recalling every childhood memory, watching the fable story, the sword-and-serpent secret, sticking to one parent in the quarrel vision, and reading every note in the DLC.",
                "The achievements here: Let Bygones Be Bygones ((Inheritance DLC) Reach the Father ending.); Too Little, Too Late ((Inheritance DLC) Reach the Mother ending.); The Tree and the Apple ((Inheritance DLC) Reach the true ending - side with the Father, collect all notes and drawings in one run, and arrange the drawings on the wall.); The Big Picture (Assemble all the puzzle pieces.); I Remember It Like It Was Yesterday (Recalled all your childhood memories.); Once Upon A Time ((Inheritance DLC) Watch the full fable storybook.); Sword Of The Serpent ((Inheritance DLC) Pull the sword from the stone behind the canvas and walk into the serpent to slay it.); Preferred Parent ((Inheritance DLC) Stick to one parent's side through the entire quarrel vision.); This could be important (Read every note in the game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base game once, doing the Chapter 5 secrets (dial 911, and keep walking when the shadow appears).",
                "2. Replay for the other two endings - 'Omniscient' needs all three (wife, self, wife-and-baby).",
                "3. Collect all rat sketches, story echoes and family mementos, and open the developers' sketchbook after the wife ending.",
                "4. Play the Inheritance DLC for the Father, Mother and true endings, and the puzzle-piece and memory collections.",
                "5. Do the DLC secrets - the sword and serpent, sticking to one parent in the quarrel, and watching the fable story.",
                "Tip: 'The Tree and the Apple' (the DLC true ending) requires siding with the Father and collecting every note and drawing on the same run - follow a checklist for that specific playthrough rather than piecing it together across runs."
            ]
        }
    ]
};
