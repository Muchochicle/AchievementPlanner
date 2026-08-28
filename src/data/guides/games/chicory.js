// Chicory: A Colorful Tale's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chicory.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1123450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 20 of 33 ship a real,
//   official Steam description, quoted directly below.
// - The 13 hidden achievements ship no Steam description. Seven are
//   automatic main-story progression markers (apiname story_2..story_8)
//   and are described here only as "reached at a point in the campaign",
//   with no plot detail, per this catalog's spoiler-conscious
//   convention. Four are the regional Wielder Trials (apiname
//   story_trial_*), and two (Lost and Found, Such Great Heights) are
//   completion versions of the visible Kitten Caboodle and Postal
//   Service - all cross-checked against PlayStationTrophies' and
//   TrueAchievements' trophy guides.
// - The grouping (story and trials, the percentage-collectible sets,
//   then the named sidequests and NPC favors) is read directly from
//   what each achievement's description or apiname requires.
export const GUIDE = {

    slug: "chicory-achievement-guide",
    category: "game",
    gameSlug: "chicory",
    icon: "🖌️",
    title: "Chicory: A Colorful Tale Achievement Guide",
    summary: "A practical guide to all 33 Steam achievements in Chicory: A Colorful Tale - the story and Wielder Trials, the clothing, litter, decor, style and map collectible sets, and the town's sidequests.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Chicory: A Colorful Tale has 33 Steam achievements. 13 are hidden: seven automatic main-story markers, the four regional Wielder Trials, and two collectible-completion achievements.",
                "Nothing is missable. The world stays open after the credits, so any collectible set or sidequest you leave unfinished can be gone back for at any time.",
                "Tip: the paintbrush abilities you gain through the story (swimming, climbing, and more) unlock large parts of the map. Don't grind collectibles as you go - do a clean-up sweep once the story is done and you can reach everything."
            ]
        },

        {
            heading: "Story & Wielder Trials",
            body: [
                "Helpful unlocks the moment you pick up Chicory's brush. Seven hidden achievements then unlock automatically as the story advances - Meet Your Hero, Phone Call, Muse, Ancient Beast of the Darkness, Apprenticeship, Something New, and End of an Era - each at a fixed point in the campaign, roughly early to late.",
                "The four regional Wielder Trials each have a hidden achievement: Standing on the Mountain Top (the Dessert Peak trial), Honored History (the Rainforest trial), More Than Myself (the Island trial), and Respect (the Canyon trial). These are set-piece story sequences you complete once as you reach each region."
            ]
        },

        {
            heading: "Collectible Sets",
            body: [
                "Clothing: Clothing Curious (25%), Clothing Collector (50%), and Clothing Hunter (all of it). Litter: Trash Mammal (25%), Good Samaritan (50%), and Ultimate Samaritan (all litter picked up). Decor: Casual Decorator (25%), Serious Decorator (50%), and Master Decorator (all decor).",
                "Brush Styles: Stylist (discover 50%) and Style Pro (discover all). Map: Explorer (reveal 50%) and Cartographer (reveal 100%). The map, litter, and decor sets in particular reward simply visiting every screen once you have full movement."
            ]
        },

        {
            heading: "Sidequests & Favors",
            body: [
                "Kitten Caboodle unlocks for returning Beans' kids to her, and the hidden Lost and Found for finding every lost kid hidden across the world (they meow softly and rustle the bush or tree they are in).",
                "Postal Service unlocks for delivering mail for Artichoke, and the hidden Such Great Heights for delivering every one of Artichoke's packages, including the hardest-to-reach ones.",
                "The remaining favors each have their own achievement: Graduate (complete all art classes), Picture Perfect (fill in Gelato's photo gallery), Turnabout Squeeze (solve the mystery of the stolen furniture), and Passion for Fashion (solve all of Oats' outfit riddles)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the story straight through. Helpful, the seven story markers (Meet Your Hero through End of an Era), and the four Wielder Trials (Standing on the Mountain Top, Honored History, More Than Myself, Respect) all unlock on their own along the way.",
                "After the credits, with full movement, sweep the map for Explorer and Cartographer and clear the litter and decor sets (Trash Mammal / Good Samaritan / Ultimate Samaritan, Casual / Serious / Master Decorator) while you are out there. Pick up clothing and Brush Styles toward Clothing Hunter and Style Pro.",
                "Finish the town's sidequests and favors: Kitten Caboodle then Lost and Found, Postal Service then Such Great Heights, plus Graduate, Picture Perfect, Turnabout Squeeze, and Passion for Fashion."
            ]
        }

    ]

};
