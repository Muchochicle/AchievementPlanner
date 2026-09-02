// Duck Detective: The Ghost of Glamping Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/duck-detective-the-ghost-of-glamping.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2714620 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "duck-detective-the-ghost-of-glamping-achievement-guide",
    "category": "game",
    "gameSlug": "duck-detective-the-ghost-of-glamping",
    "icon": "🦆",
    "title": "Duck Detective: The Ghost of Glamping Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Duck Detective: The Ghost of Glamping (0 hidden). Every achievement carries Steam's own text - the deduction and inspection counters, filling out the suspects, solving the mystery, and a handful of comedic one-offs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Duck Detective: The Ghost of Glamping has 11 Steam achievements, none hidden. Eugene McQuacklin, a down-on-his-luck duck detective, investigates a haunting at a woodland glamping resort by filling deduction sentences with the right words. The achievements cover solving your first, 5th and 10th 'deducktion', completing 5 inspections, filling out every suspect's name, solving the whole mystery, and comedic one-offs (take a dip in the jacuzzi, unlock the camouflage bag, enter the sanatorium, kick the beachball into the VIP area, quack).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. The game is a short sitting; nothing is missable if you explore each area and try the obvious interactions."
            ]
        },
        {
            "heading": "The Case",
            "body": [
                "Solving your first, 5th and 10th deducktion, completing 5 inspections, filling out all suspects' names, and solving the mystery.",
                "The achievements here: Warming Up (Solve a deducktion); Judgemental (Complete 5 inspections); Elementary, my dear Frederson (Solve 5 deducktions); Kicking bins, and taking names (Fill out all suspects' names); Bird Brain Brilliance (Solve 10 deducktions); An Ugly Mistress (Solve the mystery)."
            ]
        },
        {
            "heading": "One-offs",
            "body": [
                "Take a dip in the jacuzzi, unlock the camouflage bag, enter the sanatorium, kick the beachball into the VIP area, and quack.",
                "The achievements here: Duck to Water (Take a dip in the jacuzzi); Feather Fingers (Unlock the camouflage bag); Scaredy Croc (Enter the sanatorium); A Profound Waste of Time (Kick the beachball into the VIP area); Scream Therapy (Quack)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the case, solving each deducktion as it comes up - this covers the 1 / 5 / 10 counters, the inspections and 'fill out all suspects' names'.",
                "2. As you move through the resort, do the one-offs: sit in the jacuzzi, unlock the camouflage bag, go into the sanatorium, and quack.",
                "3. Kick the beachball into the VIP area for 'A Profound Waste of Time'.",
                "4. Finish the mystery for 'An Ugly Mistress'.",
                "Tip: there is nothing missable and no time pressure - just try every interaction in each new area, and the one-off achievements fall out of ordinary curiosity."
            ]
        }
    ]
};
