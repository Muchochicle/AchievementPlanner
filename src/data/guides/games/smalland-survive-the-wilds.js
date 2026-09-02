// Smalland: Survive the Wilds Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/smalland-survive-the-wilds.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   768200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "smalland-survive-the-wilds-achievement-guide",
    "category": "game",
    "gameSlug": "smalland-survive-the-wilds",
    "icon": "🐜",
    "title": "Smalland: Survive the Wilds Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Smalland: Survive the Wilds (0 hidden). Every achievement carries Steam's own text - meeting each NPC, the material-collection milestones, taming, gliding, and the walnut-chest key.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Smalland: Survive the Wilds has 23 Steam achievements, none hidden. You are a tiny Vanguard surviving in an oversized natural world of towering grass and giant insects. The achievements cover meeting each NPC (the Elder, the Witch Tuhala, Nok, the Historian, the Merchant, Malik, Granger, Sarnak), the material-collection milestones (stone, metal, chitin, bones, silk, pyrite, feather, firesand, snake fang), claiming a tree, sleeping in a bed, taming a creature, gliding for the first time, collecting the Icarus Wings, and finding the walnut-chest key.",
                "There are no hidden achievements - the list above is the whole set, and it maps roughly to progression as you unlock better gear and reach new regions.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable - the world is persistent and every NPC and material stays available."
            ]
        },
        {
            "heading": "NPCs",
            "body": [
                "Meeting each character - the Elder, the Witch Tuhala, Nok, the Historian, the Merchant, Malik, Granger and Sarnak.",
                "The achievements here: One VERY small step (Meet the Elder); Something Wicked (Find the Witch, Tuhala); Mastermind (Meet with Nok); Moth Man (Meet the Historian); Trading Time (Meet the Merchant); Ornithomancer (Meet with Malik); Not Nok, who's there? (Meet with Granger); Scorpion's shadow (Meet with Sarnak)."
            ]
        },
        {
            "heading": "Survival & Materials",
            "body": [
                "Claiming a tree, sleeping in a bed, taming a creature, the first glide, the walnut-chest key, the Icarus Wings, and the material-collection milestones (stone, metal, chitin, bones, silk, pyrite, feather, firesand, snake fang).",
                "The achievements here: Safe! (Claim a tree); Getting some shuteye (Sleep in a bed); Stone Age (Collect stone); Forming bonds (Tame any creature); Metal Age (Collect a metal piece); Insect hunter (Collect chitin); Vertebrate hunter (Collect bones); Smooth as silk (Collect silk); Hang time (Glide for the first time); The Key (Find the key for the walnut chest); Fools gold (Collect Pyrite); Dragon Slayer (Collect a Feather); Take Flight (Collect Icarus Wings); Explosive development (Collect Firesand); Monster Extraction (Collect a Snake Fang)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Meet the Elder and get started - claim a tree, sleep in a bed, and craft stone then metal tools.",
                "2. Explore outward to meet each NPC (Tuhala, Nok, the Historian, the Merchant, Malik, Granger, Sarnak) as their regions open.",
                "3. Tame a creature, glide for the first time, and later collect the Icarus Wings for better flight.",
                "4. Collect each gated material as you progress - chitin, bones, silk, pyrite, feather, firesand, snake fang - and find the walnut-chest key.",
                "Tip: the harder-to-reach materials (feather, snake fang, firesand) come from late-region creatures and hazards, so treat the material list as a natural checklist of your progress rather than something to grind - if you can safely farm the creature, you are geared enough for that biome."
            ]
        }
    ]
};
