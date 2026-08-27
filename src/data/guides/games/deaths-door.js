// Death's Door's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/deaths-door.json), whose 24 achievements
//   were sourced directly from Steam's own achievement schema for
//   appid 894020 via ISteamUserStats/GetSchemaForGame (fetched through
//   this app's own backend/services/steamApi.js) - 21 of 24 ship a
//   real, official Steam description, quoted directly below.
// - A Stroll with Jefferson, In Caw-Hoots, and A True End are hidden
//   achievements Steam never describes publicly (confirmed via the
//   same API call) - their descriptions here are curatorial, based on
//   independent community documentation of their real unlock
//   conditions (bringing a specific found item to an NPC after turning
//   the world to night; finding three hidden owls across three named
//   areas after the same night-time switch; and the endgame tablet
//   collection required to reach the true ending).
// - The grouping below (main story, ability upgrades, collectibles,
//   and the post-game secrets) is read directly from what each
//   achievement's own description requires, not invented. Kept
//   spoiler-light around exactly what the true ending reveals.
export const GUIDE = {

    slug: "deaths-door-achievement-guide",
    category: "game",
    gameSlug: "deaths-door",
    icon: "🦅",
    title: "Death's Door Achievement Guide",
    summary: "A practical guide to all 24 Steam achievements in Death's Door - the main story, ability upgrades, collectibles, and the game's three hidden post-game secrets.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Death's Door has 24 Steam achievements. A normal playthrough naturally covers the main story and most of the ability-upgrade achievements; the collectible-hunting and post-game secret achievements reward the kind of thorough exploration a metroidvania rewards more generally.",
                "Nothing here is permanently missable - Death's Door lets you freely revisit every earlier area once you've unlocked the abilities needed to reach them, so a missed shiny, weapon, or shrine can always be gone back for later."
            ]
        },

        {
            heading: "Main Story",
            body: [
                "Crow Gamer (beat the game) is the base completion achievement, unlocked at the credits on a normal playthrough. Academy of Umbrellas is a much stricter variant of the same goal: beat the game using only an umbrella as your melee weapon for the entire run.",
                "Meal for a King (feed the Frog King an explosive treat), Hot Pot (set Grandma's pot on fire), Banging Tune (listen to Barb's magnum opus), and Clever Too Much (gain a devoted fan) are each tied to a specific story encounter along the way, rather than requiring any extra effort beyond playing through normally.",
                "Squid Soup? (accept Jefferson's Soup) and Baul Plart, Hall Cop (trigger the metal detector without detecting a threat) are two smaller, easy-to-miss story interactions worth watching for as you progress."
            ]
        },

        {
            heading: "Ability Upgrades",
            body: [
                "Cremation, Demo Crow, Crouching Tiger Hidden Crow, and Hawk Eye each unlock for upgrading one of your four core abilities - fire, bomb, hookshot, and arrow respectively - at the Witch's tree. These accumulate naturally as you collect souls and spend them, without requiring anything beyond normal progress."
            ]
        },

        {
            heading: "Collectibles",
            body: [
                "Ooh Shiny! (collect all shiny things) and Weapon Master (collect all weapons) are the game's two big collectible hunts, each requiring you to track down every instance scattered across the whole map - shinies in particular are often hidden well outside the direct path through a level.",
                "Zen (find all shrines), Reap what you sow (all seeds collected and planted), and Conga Line (have a gang of 10+ forest spirits follow you) are three smaller, more localized collectible/interaction goals, each centered on one specific system rather than the whole map.",
                "Plot Head (access Pothead's secret garden) is a single hidden-area discovery rather than an accumulating collectible - a specific secret spot to find once you have the right ability.",
                "Big Spender (purchase 12 stat upgrades) and Specialist (max out any of the 4 stats) both track your soul-spending choices rather than exploration - Specialist can be reached relatively early by focusing all your souls into one stat, while Big Spender is more of a natural byproduct of playing through fully."
            ]
        },

        {
            heading: "Post-Game Secrets",
            body: [
                "A Stroll with Jefferson, In Caw-Hoots, and A True End are the game's three hidden, post-completion achievements, all unlocked after ringing the cathedral bell in the Lost Cemetery to turn the world to night.",
                "A Stroll with Jefferson requires bringing a specific shiny - a Teddy Bear found near the Stranded Sailor - to Jefferson once night has fallen. In Caw-Hoots asks you to find and listen to three hidden owls, one each in the Estate of the Urn Witch, the Overgrown Ruins, and The Old Watchtowers, also only after the switch to night.",
                "A True End is the payoff for the other two: collecting all 7 Ancient Tablets of Knowledge (three of which come directly from A Stroll with Jefferson, In Caw-Hoots, and Plot Head, with the rest found through the game's other post-game puzzles) unlocks the game's true ending, distinct from the credits you see on a normal first completion.",
                "Lord of Chores (100% complete the game) is the natural final achievement once every other collectible, upgrade, and secret on this list is already done.",
                "Tip: ring the cathedral bell as soon as you've beaten the game once, before starting any collectible cleanup - turning the world to night is what makes A Stroll with Jefferson and In Caw-Hoots reachable at all, so doing it early avoids a second full lap of the map later."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up Crow Gamer, the four ability-upgrade achievements, and the easy story-interaction achievements (Meal for a King, Hot Pot, Banging Tune, Clever Too Much, Squid Soup?, Baul Plart, Hall Cop) along the way.",
                "Once you've beaten the game, ring the cathedral bell to turn the world to night, then track down A Stroll with Jefferson and In Caw-Hoots before working toward A True End's remaining tablets.",
                "Go back for Ooh Shiny!, Weapon Master, Zen, Reap what you sow, Conga Line, and Plot Head once you have every ability needed to reach the whole map.",
                "Save Academy of Umbrellas and Lord of Chores for last - an umbrella-only run is its own dedicated challenge, and full completion naturally comes together only once everything else here is already done."
            ]
        }

    ]

};
