// Griftlands' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/griftlands.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   601840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 13 ship a real,
//   official Steam description, quoted directly below. Griftlands has
//   no Steam-hidden achievements at all.
// - The grouping below (deck-building restriction challenges, combat
//   feats, and social/relationship achievements) is read directly from
//   what each achievement's own official description requires, not
//   invented.
export const GUIDE = {

    slug: "griftlands-achievement-guide",
    category: "game",
    gameSlug: "griftlands",
    icon: "🃏",
    title: "Griftlands Achievement Guide",
    summary: "A practical guide to all 13 Steam achievements in Griftlands - deck-building restriction runs, big single-hit combat feats, and the game's love/hate relationship system.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Griftlands has 13 Steam achievements, all with real, public Steam descriptions - nothing here is Steam-hidden. Most reward a specific run condition or combat feat you can chase deliberately on any campaign or brawl, rather than something that only shows up once in a linear story.",
                "Nothing here is permanently missable - Griftlands' campaign can be restarted freely, and the game's separate Brawl mode (a standalone, story-free combat challenge) counts toward several achievements just as well as a full campaign run does."
            ]
        },

        {
            heading: "Deck-Building Restriction Runs",
            body: [
                "No Upgrades (complete the campaign or brawl without upgrading any cards), Just Cards (beat the campaign without installing any grafts or assigning any perks), and Efficiency (win any campaign or brawl with 7 or less cards in your battle deck) all reward deliberately restricting your own build rather than taking every upgrade available - each is its own dedicated, self-imposed challenge run.",
                "Total Upgrades is the inverse of No Upgrades: complete the campaign or brawl with every card and graft fully upgraded instead, which naturally takes a long, thorough playthrough rather than a fast one.",
                "To The Oshnudrome! rewards the opposite instinct again: win any campaign in under 30 minutes, which favors a lean, fast build over a maximally-upgraded one."
            ]
        },

        {
            heading: "Combat Feats",
            body: [
                "Fist 'o Bricks (apply 100 or more damage with a single hit) and Soluble Fish (incept 99 Doubt upon a single opponent) are both big single-hit numbers achieved on Griftlands' two damage tracks - direct Health damage and the negotiation-focused Doubt/Resolve system respectively.",
                "Impervious (gain 99 Defense in battle) rewards stacking defensive buffs instead, while Machinist (win a combat by playing only item cards) and Counterplay (defeat a boss without playing any attack cards) both reward specific, restricted playstyles within a single fight rather than a big number.",
                "Brawler (beat any brawl on maximum prestige) is the standalone Brawl mode's own difficulty-ladder achievement, separate from anything in the main campaign.",
                "Tip: Soluble Fish and Fist 'o Bricks are both easiest to chase once you've built a deck specifically around one damage type - a hybrid build that splits its power between Health damage and Doubt makes either number much harder to reach in a single hit."
            ]
        },

        {
            heading: "Relationships",
            body: [
                "Beloved (get 20 people to love you) and Archenemy (get 20 people to hate you) are the game's two big relationship-tracking achievements, each counting across either campaign or brawl runs - the negotiation and dialogue choices that drive Griftlands' story naturally build toward one or the other depending on how you play."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play a few normal campaigns first to learn the game's decks and negotiation system - Beloved, Archenemy, Fist 'o Bricks, and Soluble Fish tend to come together naturally along the way.",
                "Once you're comfortable, dedicate separate runs to the restriction challenges (No Upgrades, Just Cards, Efficiency, To The Oshnudrome!) and the single-fight technique achievements (Machinist, Counterplay, Impervious) - trying to force too many of these into one run at once usually works against each other.",
                "Save Total Upgrades and Brawler for later runs once you understand the game's full card and graft pool well enough to build toward a specific difficulty or completion goal."
            ]
        }

    ]

};
