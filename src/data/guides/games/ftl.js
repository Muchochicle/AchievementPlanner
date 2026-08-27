// FTL: Faster Than Light's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data (backend/catalog/games/ftl.json),
//   whose 51 achievements were sourced directly from Steam's own
//   achievement schema for appid 212680 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 48 of
//   51 ship a real, official Steam description, quoted directly below.
// - Sweet Revenge, No Escape, and Clash of the Titans are hidden
//   achievements Steam never describes publicly (confirmed via the same
//   API call) - all three belong to the Crystal Cruiser, added in the
//   free Advanced Edition update, and their descriptions here are
//   curatorial, cross-checked against independent Steam Community
//   documentation of their real unlock conditions.
// - The grouping below (progress/victory, long-term totals, restriction
//   runs, general combat feats, then one section per group of ship-
//   specific achievements) is read directly from each achievement's own
//   description - every ship name (Kestrel, Zoltan, Stealth, Engi, Rock,
//   Mantis, Slug, Federation, Crystal, Lanius) is quoted verbatim from
//   the achievements' own official text, not invented.
export const GUIDE = {

    slug: "ftl-achievement-guide",
    category: "game",
    gameSlug: "ftl",
    icon: "🚀",
    title: "FTL: Faster Than Light Achievement Guide",
    summary: "A practical guide to all 51 Steam achievements in FTL: Faster Than Light - campaign progress, punishing restriction runs, and ship-specific feats across all ten playable cruisers.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "FTL: Faster Than Light has 51 Steam achievements. It's a roguelike - every run starts fresh with a new randomized galaxy - so almost nothing here is permanently missable in the usual sense, but a single unlucky or careless run can absolutely end before you get the chance to attempt a given achievement, and you'll simply try again on the next run.",
                "Most of the ship-specific achievements are single-run feats tied to a particular cruiser's unique systems, so unlocking every playable ship (Your Own Fleet) early opens up the largest share of the list to work toward."
            ]
        },

        {
            heading: "Progress & Victory",
            body: [
                "Just Getting Started (reach sector 5) and Federation Base in Range (reach sector 8) are the game's basic progress milestones. Federation Victory (Easy) and Federation Victory (Normal) both require beating the final boss, just on different difficulties.",
                "Your Own Fleet (unlock the Type A layout for every playable ship) is a long-term meta-goal that naturally opens up as you win and lose runs - each ship's alternate layout has its own separate unlock condition met across many playthroughs."
            ]
        },

        {
            heading: "Long-Term Totals",
            body: [
                "Rule Ten: Greed is Eternal (10,000 scrap collected across all games) and Warlord (defeat 1,000 ships across all playthroughs) both accumulate across your entire play history rather than any single run - keep playing, and they'll come on their own.",
                "Tip: neither of these two needs a dedicated run - just keep an eye on your lifetime totals in the achievements menu rather than trying to force either one in a single sitting."
            ]
        },

        {
            heading: "Restriction Runs",
            body: [
                "I don't need no stinkin' upgrades!, Coming in for my Pacifism run!, and On a Wing and a Prayer are all sector-5 restriction runs: no system/reactor upgrades, no offensive drones/teleporting/firing a shot, and no store repairs respectively.",
                "Ballistophobia, Technophobia, Living off the Land, and No Redshirts Here push the same idea to sector 8 instead: no missiles or bombs, no drones, no buying at a store (repairs are fine), and no crew lost the whole way.",
                "Tip: attempt these restriction runs only once you're already comfortable reaching sector 8 on a normal run - each one removes a major tool you'd otherwise lean on, so trying them before you know the game well tends to end runs early."
            ]
        },

        {
            heading: "Combat Feats",
            body: [
                "Some people just like to watch ships burn (every square of an enemy ship on fire at once), Astronomically Low Odds (fail to evade 5 shots in a row with a fully upgraded engine), They never saw it coming (a one-volley kill with the Weapon Pre-Igniter), BOARDING OBJECTIVE SUCCESSFUL (a single boarding drone kills 4 crew), Trustworthy Auto-Pilot (defeat a ship with all your crew aboard it), Slice and Dice (hit every room with a beam in under 5 seconds), and Victory through Asphyxiation (empty a hostile ship's oxygen) are all ship-agnostic combat achievements, reachable with any cruiser given the right loadout and a bit of luck."
            ]
        },

        {
            heading: "Kestrel, Zoltan & Stealth Cruisers",
            body: [
                "The United Federation (6 unique aliens aboard the Kestrel Cruiser at once), Full Arsenal (11 systems installed on the Kestrel Cruiser), and Tough Little Ship (repair the Kestrel from 1 HP back to full) are the Kestrel's own achievements - your starting ship.",
                "Shields Holding (destroy a ship before it breaks the Zoltan Shield), Givin' her all she's got, Captain! (29 power in systems on the Zoltan Cruiser), and Manpower (reach sector 5 without upgrading the Zoltan Cruiser's reactor) belong to the Zoltan Cruiser.",
                "Bird of Prey (destroy a full-health ship during one cloak), Phase Shift (avoid 9 damage during one cloak), and Tactical Approach (reach sector 8 without jumping into an environmental danger) are all Stealth Cruiser achievements, built around its unique cloaking system."
            ]
        },

        {
            heading: "Engi, Rock & Mantis Cruisers",
            body: [
                "Robotic Warfare (3 drones functioning at once), I hardly lifted a finger (destroy a ship using only drones), and The guns... They've stopped (4 enemy systems ioned at once) belong to the Engi Cruiser's drone-and-ion-focused kit.",
                "Is it warm in here? (your crew kills a burning enemy), Defense Drones Don't Do D'anything! (missile-kill a ship with a defense drone up), and Ancestry (find the secret sector) are Rock Cruiser achievements.",
                "Take no prisoners! (kill the crew of 20 ships by sector 6), Avast, ye scurvy dogs! (kill 5 enemy crew in a fight without hull damage or crew loss), and Battle Royale (kill the last enemy with your last crewmember aboard) all belong to the boarding-focused Mantis Cruiser."
            ]
        },

        {
            heading: "Slug & Federation Cruisers",
            body: [
                "We're in Position! (see every room without sensors), Home Sweet Home (30 nebula jumps before sector 8), and Disintegration Ray (kill 3 crew with one Anti-Bio Beam shot) are Slug Cruiser achievements.",
                "Master of Patience (destroy a ship using only the Artillery Beam, taking no damage), Diplomatic Immunity (4 special blue event choices by sector 5), and Artillery Mastery (reach sector 5 without upgrading Weapons) belong to the Federation Cruiser."
            ]
        },

        {
            heading: "Crystal & Lanius Cruisers",
            body: [
                "Sweet Revenge, No Escape, and Clash of the Titans are the Crystal Cruiser's three achievements, added in the free Advanced Edition update - a Crystal Vengeance shard kill, trapping 4 crew in one room with Crystal Lockdown or a Lockdown Bomb, and destroying 10 Rock ships.",
                "Advanced Mastery (Hacking, Mind Control, and the Battery active at once), Scrap Hoarder (600+ scrap in storage), and Loss of Cabin Pressure (reach sector 8 keeping net oxygen at or below 20%) belong to the Lanius Cruiser, another Advanced Edition addition built around its crew-suffocating hull breaches."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Learn the game on the starting Kestrel Cruiser first, aiming for Just Getting Started, Federation Base in Range, and eventually a Federation Victory (Easy) before anything harder.",
                "Unlock new ships as you go and try each one's 2-3 achievements on a dedicated run soon after unlocking it, while its unique systems are still fresh in mind.",
                "Chase the general combat-feat achievements opportunistically across many runs rather than forcing them - most need a specific weapon or augment lined up, which won't appear on every playthrough.",
                "Save the eight restriction runs, Federation Victory (Normal), and the two lifetime-total achievements for last - they all assume a strong general understanding of the game built up from many earlier, more relaxed runs."
            ]
        }

    ]

};
