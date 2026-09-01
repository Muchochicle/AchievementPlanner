// Frostpunk 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/frostpunk-2.json), whose 79 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1601580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 20 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "frostpunk-2-achievement-guide",
    "category": "game",
    "gameSlug": "frostpunk-2",
    "icon": "❄",
    "title": "Frostpunk 2 Achievement Guide",
    "summary": "A practical guide to all 79 Steam achievements in Frostpunk 2 (20 hidden). Covers the New London story on all three difficulties, city-building and governance milestones, the civil-war outcomes, the Tales, the ten faction Utopias in Utopia Builder, and the whole 'Breach of Trust' scenario in New Edinburgh. Twenty of the achievements are hidden - the story beats, the Whiteout and Winterhome-chapter challenges, and the Breach of Trust goals - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Frostpunk 2 has 79 Steam achievements and 20 are hidden. The visible ones are city-building and governance milestones (population, laws, research, relations, trust), the three New London story completions by difficulty, the ten faction Utopia challenges in Utopia Builder, and the base-game Tales. The hidden ones are the prologue outcomes for the Wanderers, the Whiteout survival challenges ('Don't starve', 'Bring it on!'), the Winterhome chapter's toxic-gas puzzles ('Coredigger', 'Plumber'), several governance easter eggs, and the eight goals of the paid 'Breach of Trust' scenario set in the volcanic city of New Edinburgh.",
                "The catalog marks it difficulty 6. Several achievements are genuinely demanding - completing the story on Captain difficulty, a playthrough with no avoidable deaths, and the Breach of Trust goals like evacuating everything before the final eruption sit well under 1% global completion. Plan on multiple runs: at least one per story difficulty, a Utopia Builder run, and a dedicated Breach of Trust run.",
                "Tip: do 'Checks and balances' (finish the story on Captain with no Rule laws) on the same run as 'The Demons of New London' (finish on Captain) - they stack, and a no-Rule-laws run is a coherent playstyle rather than an extra restriction to bolt on later."
            ]
        },
        {
            "heading": "City-Building & Governance",
            "body": [
                "District and hub milestones, keeping relations high with every community and faction, passing laws, unanimous votes, colonies, self-sufficiency, heat and research milestones, ideological consistency, maximum trust, and a fully thriving city.",
                "The achievements here: FrostCity (Have at least 5 different area effects applied to the district); Urban Planner (Have 10 districts affected by hubs); Sneak a Peek (See 10 different situations near a district hub (zoom into a district and let situations appear before resolving them).); Thank you for your feedback (Disregard a community's requested solution to a situation 5 times in one playthrough.); Revered Leader (Have \"Devoted\" relations with all communities and factions); Pork Barrel (Fulfil at least 1 promise to 5 different communities and factions in one playthrough); Likeable (Never have relations worse than Sceptical with any community or faction.); Lawmaker (Pass at least 20 new laws in a single playthrough); Checks and balances (Complete the Story without passing any Rule laws on at least Captain difficulty); No-brainer (Have 100% of delegates vote in favour of any law); Settler (Set up 3 colonies); Isolationist (Complete a playthrough without gathering any resources from the frostland or colonies); Power Overwhelming 2.0 (Have twice as much heat abundance as heat demand across the city.); Green Power (Fulfil at least 300 Heat demand using Steam and have absent Squalor); Consistency (Never research a building or pass a law of the opposite affinity to the one you already have); New Oxbridge (Double starting Research speed); Not on my watch (Complete a playthrough without any avoidable deaths); People person (Have maximum trust); Paradise City (Have all problems absent for 50 weeks in the City with at least 15k population)."
            ]
        },
        {
            "heading": "The New London Story",
            "body": [
                "The prologue outcomes for the Wanderers, completing the story on any / Steward / Captain difficulty, Utopia Builder intro goals, the Winterhome chapter's toxic-gas challenges, the Whiteout survival challenges, the civil-war outcomes (no war deaths, containing it, the Path of Reconciliation), heatstamp income, and the banished faction leaving on its own.",
                "The achievements here: The End is Just the Beginning (In the prologue, make sure the Wanderers survive the Whiteout.); No lesser evil (In the prologue, ensure the Wanderers survive by saving the seals and without driving away the elders (no Seal Colony food extraction, no expelling elders).); The Ambitions of New London (Complete the Story on any difficulty); The Temptations of New London (Complete the Story on at least Steward difficulty); The Demons of New London (Complete the Story on Captain difficulty); Another day in paradise (Complete a playthrough in Utopia Builder mode); Ambitious (Complete all Ambitions in Utopia Builder mode); Coredigger (In the New London story (Winterhome chapter), salvage all core deposits in Winterhome before toxic gases engulf the city.); Plumber (In the New London story (Winterhome chapter, Settle Winterhome path), clog all gas sources before the first rise of toxicity, on at least Steward difficulty.); Bring it on! (Complete the 'Defeat the Frost' or 'Embrace the Frost' research path before the Whiteout arrives.); Don't starve (Have no Hunger in New London for the entire duration of the Whiteout.); Firm, But Civil (No deaths caused by Civil War during the whole game); Chancellor of the Exchequer (Have at least 50 income of heatstamps); Moving out (Have a banished faction leave New London of their own accord (give them a colony with basic provisions rather than forcing them out).); Anger management (Complete a playthrough without letting any faction's Fervour reach its maximum level.); Bonfire (Don't let Civil War spread over 5 or more districts); Primus inter pares (Never be in danger of losing your position due to low Trust or high Tension); I love democracy (Have no votes against Captain's Authority policy); Megalopolis (Reach over 60,000 population in your main city); … and fill the earth (Reach over 50,000 population outside of your main city); Peacemaker (End the civil war through the Path of Reconciliation (negotiate peace with both sides).)."
            ]
        },
        {
            "heading": "Endgame Challenges & Utopia Builder",
            "body": [
                "Squalor, weather-adaptation, crime and tension challenges at scale, 60 researched ideas, huge stockpiles, a 90%-worker city, meeting every faction in Utopia Builder, a 300-week quiet colony, negative relations with everyone, simultaneous rallies and protests, and the law-cycling easter egg.",
                "The achievements here: Can't stop progress (Have Squalor Absent despite having at least 1000 Material Demand); Adapted to Weather (Have Disease Absent and Cold Absent for 20 weeks, when there is at least -100 Celsius degrees); Law and Order (Have Crime and Tension Absent in the City with at least 30k population); Visionary (Research 60 different ideas under 600 weeks); To each according to his needs (Have at least 20k heatstamps and over 200k Goods stockpile); Idle Hands are the Devil's Playthings (Have at least 90% of the population be active workers in your city); We Are Not The Same (Meet all factions in Utopia Builder mode); Quiet Backwater (Have no problem higher than Minor in a colony for 300 consecutive weeks.); Steward Little (Have negative relations with every community and faction at once.); Mixed Signals (Have rallies and protests in the City at the same time); There is No Final Design (Enact a law, replace it with another from the same category, then pass the original law again.)."
            ]
        },
        {
            "heading": "Tales & The Utopias",
            "body": [
                "The base Tales ('Beacon of Hope', 'Apocalyptic Whiteout', 'Depleted Cores', 'Plague', 'Doomsayers') and their no-death / speed / restriction variants, three Tales in one playthrough, unlocking a Utopia Tree node, and the ten faction Utopia challenges (Icebloods, Technocrats, Bohemians, Overseers, Venturers, Menders, Proteans, Legionnaires).",
                "The achievements here: Guiding Light (Complete the ‘Beacon of Hope’ Tale); Apocalypse Nah (Complete the ‘Apocalyptic Whiteout’ Tale); Raiders of the Lost Cores (Complete the ‘Depleted Cores’ Tale); Born Ready (Complete three Tales in a single playthrough on at least Steward difficulty); No One Left Behind (Complete the ‘Beacon of Hope’ Tale without any deaths on at least Steward difficulty); Seen Worse (Complete ‘Apocalyptic Whiteout’ without Hunger and Disease over Minor on at least Steward difficulty); Gotta Go Fast (Complete the ‘Depleted Cores’ Tale under 200 weeks on at least Steward difficulty); Healer (Complete the 'Plague' Tale); Optimist (Complete the 'Doomsayers' Tale); Prove Them Wrong (Complete the 'Doomsayers' Tale without ever triggering the Tension or Trust crises.); Miracle Worker (Complete the 'Plague' Tale without suffering any death from the plague); A Small Step... (Unlock a Utopia Tree Node); Apex Predator (Survive until week 500 without building a single Extraction District (Icebloods' Utopia)); π not? (Generate exactly 314 Compute (Technocrats' Utopia)); Art in Ruins (Survive 100 weeks with 50% Wear in at least 20 Districts (Bohemians' Utopia)); I Remember (Display 130 Mementos (Overseers' Utopia)); Trickle-Down Economics (Generate at least 1 Heatstamp Income per 100 Citizens (Venturers' Utopia)); Got Milk? (Survive until week 500 without building a single Food District (Menders' Utopia)); Protean Shake (Have a Workforce 2x your Population size without any Automaton Factory (Proteans' Utopia)); Fully Deployed (Reach week 500 without ever Frostbreaking or demolishing a Deployment Base (Legionnaires' Utopia))."
            ]
        },
        {
            "heading": "Breach of Trust",
            "body": [
                "The paid 'Breach of Trust' scenario in New Edinburgh: regaining access to Aurora, staying in power until the mountain awakes, finishing the scenario (and doing it with no deaths), a Reviled-to-elected comeback, evacuating everything before the final eruption, conquering Aurora without losing a battle, and no tremor deaths before the first eruption.",
                "The achievements here: We're So Back (In the 'Breach of Trust' scenario, regain access to Aurora.); Who Saw That Coming? (In the 'Breach of Trust' scenario, remain in power in New Edinburgh until the mountain awakes.); What Dreams May Come (Finish the 'Breach of Trust' scenario); Way Ahead of You (In the 'Breach of Trust' scenario, evacuate everybody and everything valuable before the final eruption.); Comeback Kid (Have 'Reviled' level of Trust and then win the next First Citizen Election); Flawless Victory (In the 'Breach of Trust' scenario, conquer Aurora without losing a single battle.); Prepper (In the 'Breach of Trust' scenario, ensure no one dies during the tremors in New Edinburgh up until the first eruption.); Pure Dead Brilliant (Finish the 'Breach of Trust' scenario without any deaths (on at least Steward difficulty))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the New London story on Steward for 'The Ambitions of New London' and 'The Temptations of New London', learning the prologue, Winterhome and Whiteout beats.",
                "2. Replay on Captain for 'The Demons of New London' and 'Checks and balances' (no Rule laws on that same run).",
                "3. Do a governance-milestone run for the population, law, research, relations and trust achievements, plus the civil-war outcome you want.",
                "4. Play Utopia Builder for its Ambitions, faction meetings and the ten faction Utopia challenges.",
                "5. Run the 'Breach of Trust' scenario in New Edinburgh for its eight goals - the evacuation and no-death ones want a full practice run first.",
                "Tip: 'Coredigger' and 'Plumber' are both in the Winterhome chapter and pull in opposite directions from a normal efficient run - salvage aggressively and cap the gas vents fast even at a short-term cost, or you will miss the window and have to replay the chapter."
            ]
        }
    ]
};
