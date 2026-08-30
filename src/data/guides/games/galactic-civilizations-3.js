// Galactic Civilizations III Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/galactic-civilizations-3.json), whose 102 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   226860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "galactic-civilizations-3-achievement-guide",
    "category": "game",
    "gameSlug": "galactic-civilizations-3",
    "icon": "🪐",
    "title": "Galactic Civilizations III Achievement Guide",
    "summary": "A practical guide to all 102 Steam achievements in Galactic Civilizations III - none are hidden. Covers the playtime, campaign and faction/victory wins, the empire milestone and warfare feats, the DLC campaigns and Crusade expansion, and the Intrigue and Retribution expansion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Galactic Civilizations III has 102 Steam achievements and none of them are hidden. The base game covers cumulative playtime (up to 1,000 hours), the campaign, winning as each of the eight core races, achieving each victory type, and a long list of empire milestones (own 30 planets, recapture your homeworld, unlock each ideology, 12 trade routes) and warfare feats. The rest are spread across the DLC campaigns (Mercenaries, Snathi, Rise of the Terrans, Altarian Prophecy) and the Crusade, Intrigue and Retribution expansions, which each add faction wins, mechanic feats (citizens, governments, the resource marketplace, Crises, hyperlanes) and more.",
                "Nothing is missable - games restart freely and the cumulative counters (playtime especially) only go up. This is a very long completion: Honorary Stardockian alone is 1,000 hours played, and winning as every race across all the expansions is dozens of games.",
                "Tip: leave the game running in the background between sessions if you can - the playtime achievements are the longest pole - and win short games on small maps at low difficulty to grind the many per-race and per-victory-type wins."
            ]
        },
        {
            "heading": "Playtime, Campaign & Faction/Victory Wins",
            "body": [
                "5 / 100 / 1,000 hours played, starting and winning the campaign, winning as the Altarian, Iridium, Drengin, Iconian, Krynn, Terran, Thalan and Yor, winning by Conquest, Cultural Influence, Diplomacy, Ascension and Technology, a multiplayer win, an Insane-map win, a Custom Faction win, and a sub-200-turn win.",
                "The achievements here: New Recruit (Play for 5 hours across all games); Space Emperor (Play for 100 hours across all games); Honorary Stardockian (Play for 1000 Hours); For Arcea (Start the campaign); There is a crusade coming (Win the campaign); Enlightenment Attained (Win as the Altarian); Market Leader (Win as the Iridium); Drengin Supremacy (Win as the Drengin); From the Shadows (Win as the Iconian); There Is Only The Way (Win as the Krynn); From Earth to Distant Stars (Win as the Terran); Another Dimension Ruled (Win as the Thalan); World Without Flesh (Win as the Yor); Conquerer (Win by Conquest); They Want To Be Us (Win by Cultural Influence); A Universe Without Enemies (Win by Diplomacy); Beyond This Universe (Ascension victory); No More Secrets (Technology Victory); Crusher of Souls (Win in Multiplayer); Trying to Prove Something (Win on an Insane sized map); Built From Nothing (Win as a Custom Faction); Under Pressure (Win a game in under 200 turns)."
            ]
        },
        {
            "heading": "Empire Milestones & Warfare",
            "body": [
                "Your first planet, ship design, alien race met and major ally, owning 30 planets, recapturing your homeworld, unlocking the Benevolent, Pragmatic and Malevolent ideologies, using a Wormhole, surveying a nebula anomaly, 12 trade routes, 15 anomalies, controlling all Relics, destroying an enemy faction (and the Yor/Iconian grudge feats), a pre-Universal-Translator war, 10 Core Detonations, war with 5 factions, winning battles including a 15-ship rout, and destroying 7 Pirate bases.",
                "The achievements here: Our New Home (Colonize your first planet); Flying in Style (Create your first ship design); Aliens?!?! (Meet your first Race in Galactic Civilizations III); Friends, for now... (Ally with first other major faction); Worlds to Rule (Own 30 planets); Revenge (Recapture your homeworld); We Care For The Least of Us (Unlock all the Benevolent ideology traits); Results Outweigh Ideals (Unlock all the Pragmatic ideology traits); Means To An End (Unlock all the Malevolent ideology traits); Boldly Go (Use a Worm Hole); Danger Zone (Survey an anomaly in a dust cloud or nebula); Merchant Empire (Have 12 or more Trade Routes); Greedy (Collect 15 Anomalies in a game); Precursor Legacy (Control all Relics on the map); All Your Base (Destroy an Enemy Faction); Exterminate (Destroy the Iconian faction, as the Yor); Vengence (As the Iconians, take back Iconia (Yor's starting homeworld) from the Yor); I Assume You Were Talking Back (Declare war before you have Universal Translator); Eco-Unfriendly (Use Core Detonation invasion 10 times in one game); Troublemaker (Be at war with 5 different factions at the same time); Warrior (Win a Battle); Ships to Scrap (Destroy more than 15 enemy ships in a battle); Pirate Scum! (Destroy more than 7 Pirate bases)."
            ]
        },
        {
            "heading": "DLC Campaigns & Crusade Expansion",
            "body": [
                "Winning as the Arceans and Torians and completing the Mercenaries campaign, winning as and completing the Snathi campaign, completing the Rise of the Terrans and Altarian Prophecy campaigns, winning as the Terran Resistance, Onyx Hive and Slyne, and the Crusade tutorial, first Citizen, first promotion, placing a spy, invading a defended planet, and a custom Civilization.",
                "The achievements here: Vigilant Victory (Win as Arceans); Out of the Deep and to the Stars (Win as Torians); A Little Help From My Frenemies (Complete the Mercenaries campaign); Revenge is Ours (Win as Snathi); The Return of the True Face of Fear (Complete the Snathi Campaign); Whatever happened to those Xendar? (Complete the Rise of the Terrans campaign); Fulfilling the Prophecy (Complete the Altarian Prophecy Campaign); Join the Resistance (Win Game playing the Terran Resistance.); Rock Eater (Win Game playing the Onyx Hive.); Gloriously Gelatinous (Win Game playing the Slyne.); Backup Plan (Complete the Crusade Tutorial.); Recruiter (Train your first Citizen.); Human Resources (Promote your first Specialist.); Spy Master (Place a spy on a foreign colony.); Crush the Resistance (Conquer a planet defended by enemy Legions.); King Maker (Unleash a custom Civilization on the Galaxy.)."
            ]
        },
        {
            "heading": "Intrigue & Retribution Expansions",
            "body": [
                "Creating a commonwealth, forming and changing a government, the tax-slider feats, the resource-marketplace buy/sell tiers, completing a Crisis and assigning a manager, winning an Election and a landslide, completing each named Crisis (Apophis through Brain Trust), winning as the Mu'Kay, Mowlings, Free Trandals and Tywom, using Artifact Powers (one and 20), building a hypergate and hyperlanes (one and 20), the spore weapon, winning as the Drath, Korath, Xraki, Measured, Scryve and Phamysht, and completing the Retribution campaign.",
                "The achievements here: They Grow Up So Fast (Create a commonwealth); Together We Stand (Form a government); Regime Change (Change your government type); Micro-Manager (Change your tax slider for one turn); Trickle-Down Economics (Lower your taxes to 0% for one turn); Tax the wealthy (and everyone else) (Raise your taxes to 100% for one turn); Two-Bit Buyer (Buy at least one resource on the marketplace); Small-Time Seller (Sell at least one resource on the marketplace); Planetary Patron (Buy at least 10 resources at once); Stellar Seller (Sell at least 10 resources at once); Master Merchant (Buy at least 30 resources at once); Astral Agent (Sell at least 30 resources at once); Trial by Fire (Successfully complete a Crisis); Cool Head(s) (Assign a Crisis manager); They Really Love You (Win an Election); They Really REALLY Love You (Win an Election with a landslide majority); Crisis: Apophis (Complete \"Apophis\" Crisis); Crisis: Rogue General (Complete \"Rogue General\" Crisis); Crisis: Secession (Complete \"Secession\" Crisis); Crisis: Space Monster (Complete \"Space Monster\" Crisis); Crisis: The Revolution (Complete \"The Revolution\" Crisis); Crisis: The Simulation (Complete \"The Simulation\" Crisis); Crisis: Brain Parasites (Complete \"Brain Parasites\" Crisis); Crisis: Brain Trust (Complete \"Brain Trust\" Crisis); Squik! (Win as the Mu'Kay); Thanks be to Jeff (Win as Mowlings); Overminds meet your Overlords (Win as Free Trandals); So Sweaty to Beat You (Win as the Tywom); Feeling Powerful, eh? (Use an Artifact Power); Power Hungry (Use 20 Artifact Powers in a single game); Hyper Hyper Hyper (Build a hypergate); Hyperdiculous Speed (Build a hyperlane); No Limits (Build 20 hyperlanes in a single game); You're a Bad Person (Use the spore weapon); Space Dragons! (Win as Drath); Shadow Masters (Win as Korath); Sticks and Stones (Win the Retribution campaign); One more dimension conquered ... (Win as Xraki); Glorious Paperwork (Win as Measured); Imperial March (Win as Scryve); Served for dinner (Win as Phamysht)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign, then win a short game as each of the eight core races on small maps at low difficulty.",
                "2. Do the victory-type achievements and the empire milestones (30 planets, homeworld recapture, ideologies, trade routes, anomalies) during those games.",
                "3. Play the DLC campaigns (Mercenaries, Snathi, Rise of the Terrans, Altarian Prophecy) and the Crusade expansion content.",
                "4. Do the Intrigue mechanic feats (commonwealth, governments, taxes, marketplace) and grind the named Crises across a few long games.",
                "5. Do the Retribution feats (Artifact Powers, hypergates, hyperlanes, spore weapon) and win as the remaining expansion races, while the playtime counters tick toward 1,000 hours.",
                "Tip: many of the smallest achievements (change taxes, buy a resource, use a wormhole, design a ship) can all be done in the first few turns of one throwaway game - run through that checklist once and never think about them again."
            ]
        }
    ]
};
