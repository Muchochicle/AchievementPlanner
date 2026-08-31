// Sins of a Solar Empire: Rebellion Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sins-of-a-solar-empire-rebellion.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   204880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sins-of-a-solar-empire-rebellion-achievement-guide",
    "category": "game",
    "gameSlug": "sins-of-a-solar-empire-rebellion",
    "icon": "🌌",
    "title": "Sins of a Solar Empire: Rebellion Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in Sins of a Solar Empire: Rebellion - none are hidden. Covers the per-race and challenge victory conditions, the research and fleet-diversification goals, the exploration, diplomacy and economy milestones, the combat and destruction counts, and the Black Market, custom-galaxy and Forbidden Worlds DLC achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sins of a Solar Empire: Rebellion has 68 Steam achievements and none of them are hidden. They cover winning as each race (TEC, Advent, Vasari, Random) and against one to four Hard AI alone, a set of self-imposed challenge wins (no Capital Ships, no strike craft, no frigates), the single-tree research achievements for each race, fleet diversification and max-fleet goals, exploration and diplomacy milestones, large single-game economy totals (taxes, trade, mining, resources given to allies), combat kill counts (frigates, capital ships, strike craft, pirates, trade and refinery ships), and the Black Market, custom-galaxy and Forbidden Worlds DLC planet-specialization achievements.",
                "Nothing is missable - every achievement is earned in a skirmish or multiplayer game against AI, and the single-game counters just need one long, dominant match set up with the right options.",
                "Tip: play a huge, slow game against weak AI with a high fleet-supply cap - one such match can knock out most of the economy totals, the combat kill counts, the colonization and population goals, and the fleet-diversification achievements at once."
            ]
        },
        {
            "heading": "Victory Conditions & Challenge Wins",
            "body": [
                "Winning as TEC, Advent, Vasari and Random, winning alone against one to four Hard AI, and the self-imposed challenge wins - no Capital Ships, no strike craft, no Tactical Structures and no Frigates/Cruisers/Corvettes.",
                "The achievements here: Ensign (Win the game as a TEC player.); Acolyte (Win the game as an Advent player.); Initiate (Win the game as a Vasari player.); Master of Any Domain (Win the game as a Random player.); Plug Puller (Win the game by yourself against at least one Hard AI player.); Toaster Roaster (Win the game by yourself against at least two Hard AI players.); Comp Stomper (Win the game by yourself against at least three Hard AI players.); Actually HAL, I can do that. (Win the game by yourself against at least four Hard AI players.); Fear of Icebergs (Win the game without building any Capital Ships.); No Exhaust Port Found (Win the game without building any strike craft.); Best Defense is a Good Offense (Win the game without building any Tactical Structures.); Go Big or Go Home (Win the game without building any Frigates, Cruisers or Corvettes. You will probably need Capital Ships for this! (Not achievable with Quick Start.))."
            ]
        },
        {
            "heading": "Research & Fleet Diversification",
            "body": [
                "The single-tree research achievements for each race (all combat / all non-combat while touching no other tree), owning every artifact, one of every Capital Ship per race, a max-level Capital Ship, 100 Squadrons, max Capital Ship and ship slots, and 30 missions in one game.",
                "The achievements here: TEC Military Researcher (Research every subject in the Military Tree while researching no subjects in the Civilian, Defense or Diplomacy Trees.); Advent Hostility Researcher (Research every subject in the Hostility Tree while researching no subjects in the Harmony, Security, or Understanding Trees.); Vasari Warfare Researcher (Research every subject in the Warfare Tree while researching no subjects in the Empire, Fortification or Manipulation Trees.); TEC Civilian Researcher (Research every subject in the Civilian Tree while researching no subjects in the Military, Defense or Diplomacy trees.); Advent Harmony Researcher (Research every subject in the Harmony Tree while researching no subjects in the Hostility, Security or Understanding Trees.); Vasari Empire Researcher (Research every subject in the Empire Tree while researching no subjects in the Warfare, Fortification or Manipulation Trees.); Archaeologist (Find and own every artifact at the same time.); TEC Fleet Diversification (Have at least one of every TEC Capital Ship built at the same time.); Advent Fleet Diversification (Have at least one of every Advent Capital Ship built at the same time.); Vasari Fleet Diversification (Have at least one of every Vasari Capital Ship built at the same time.); Capital Ship Captain (Get a Capital Ship to maximum experience level.); Squadron Leader (Own at least 100 Squadrons at once.); Capital Ship Armada (Own the maximum number of Capital Ships possible. Your fleet research must also be max level.); Ship Swarm (Own the maximum number of ships your fleet points can support. Your fleet research must also be at max level.); Outstanding Resume (Complete at least 30 missions in a single game.)."
            ]
        },
        {
            "heading": "Exploration, Diplomacy & Economy",
            "body": [
                "Star-lane and wormhole travel, giving credits, metal and crystal to allies, forming every alliance type, 6,000 population, and the large single-game income totals from taxes, trade, mining and refineries, plus 75% Culture and 15,750 planet-bombardment damage.",
                "The achievements here: Star Explorer (Travel to another star system.); Escape From Max (Travel through a wormhole to discover where it leads to.); Money Lender (Give 25,000 Credits to other players in a single game.); Metal Lender (Give 20,000 Metal to other players in a single game.); Crystal Lender (Give 20,000 Crystal to other players in a single game.); Road to Peace (Form a Cease Fire with another player.); Pacifist (Form a Peace Treaty with another player.); Mutual Trader (Form a Trade Alliance with another player.); Planet Visionary (Form a Planet Vision alliance with another player.); Ship Visionary (Form a Ship Vision alliance with another player.); Family Planning (Your empire must support at least 6,000 population at once.); Tax Collector (Collect 200,000 Credits from taxes in a single game.); Export Maven (Collect 20,000 Credits from trade ships in a single game.); Metal Miner (Collect 35,000 Metal from resource extractors in a single game.); Crystal Miner (Collect 35,000 Crystal from resource extractors in a single game.); Refining Magnate (Collect 20,000 Metal or Crystal from refinery ships in a single game.); Pop Idol (Spread your Culture to 75% of the galaxy.); Expert Bombardier (Do 15,750 damage to planets.)."
            ]
        },
        {
            "heading": "Combat & Destruction",
            "body": [
                "The single-game kill counts - 1,000 frigates, 30 capital ships, 200 planet structures, 2,500 strike craft, 1,000 pirates, 100 trade ships, 50 refinery ships, 50 construction ships - plus colonizing a pirate base, the Space Ponies easter egg and 30 colonized planets.",
                "The achievements here: Frigate Killer (Destroy 1,000 enemy frigates in a single game.); Capital Ship Assassin (Destroy 30 enemy capital ships in a single game.); Wrecking Crew (Destroy 200 enemy planet structures in a single game.); Pilot's Bane (Destroy 2,500 enemy strike craft in a single game.); Pirate Exterminator (Destroy 1,000 Pirate ships in a single game.); Anti-Globalization (Destroy 100 trade ships in a single game.); Dead Canaries (Destroy 50 refinery ships in a single game.); Union Buster (Destroy 50 construction ships in a single game.); Pirate Baron (Colonize a Pirate base.); Space Ponies! (Um...What?); Colonizer (Have 30 planets colonized at the same time.)."
            ]
        },
        {
            "heading": "Black Market, Custom Galaxies & DLC",
            "body": [
                "Buying and selling metal and crystal on the Black Market, resource sales to players, spending on bounties, previewing a custom galaxy, and the Forbidden Worlds DLC achievements - all 10 planet types at once, and fully specializing a Ferrous and an Oceanic planet - plus destroying 20 planets and controlling 20 planet bonuses.",
                "The achievements here: Metal Speculator (Buy 10,000 Metal from the Black Market.); Metal Merchant (Sell 10,000 Metal directly to the Black Market.); Crystal Speculator (Buy 10,000 Crystal from the Black Market.); Crystal Merchant (Sell 10,000 Crystal from the Black Market.); Resource Opportunist (Gain 15,000 Credits from other players buying up your resources.); He's no good to me dead! (Spend 66,000 Credits increasing the bounty on other players in a single game.); World Builder (Create your own custom galaxy and preview the results.); Equal Opportunity (Occupy the 10 planet types simultaneously (Forbidden Worlds DLC required).); Drill Baby Drill (Fully specialize a Ferrous planet in industry (Forbidden Worlds DLC required).); Vacation Getaway (Fully specialize a Oceanic planet in social upgrades (Forbidden Worlds DLC required).); Destroyer of Worlds (Destroy 20 planets in a single game.); Intrepid Explorer (Control 20 different planet bonuses in a single game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a quick game as each race (and Random) for the four victory achievements.",
                "2. Do a solo game against four Hard AI, and a few restricted-build challenge wins.",
                "3. Run a long, dominant game against weak AI with a high supply cap to sweep the economy totals, kill counts, colonization and fleet-diversification achievements.",
                "4. Do dedicated single-tree research games for each race's combat and non-combat achievements.",
                "5. Mop up the Black Market, custom-galaxy and Forbidden Worlds DLC planet-specialization goals.",
                "Tip: set the game to a large galaxy with pirates enabled and a long victory timer - the pirate, trade-ship and refinery-ship kill counts only accrue when those targets actually spawn in numbers."
            ]
        }
    ]
};
