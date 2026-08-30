// Red Faction Guerrilla Re-Mars-tered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/red-faction-guerrilla-remastered.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   667720 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "red-faction-guerrilla-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "red-faction-guerrilla-remastered",
    "icon": "🔨",
    "title": "Red Faction Guerrilla Re-Mars-tered Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Red Faction Guerrilla Re-Mars-tered - none are hidden. Covers the campaign's sector-by-sector liberation of Mars, the Guerrilla Action and destruction feats, the multiplayer and Wrecking Crew achievements, and the Demons of the Badlands DLC campaign.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Red Faction Guerrilla Re-Mars-tered has 57 Steam achievements and none of them are hidden. The campaign set covers liberating each of Mars's six sectors, completing all the Guerrilla Actions (the optional side missions), and a run of destruction feats - billions of credits of EDF property destroyed, supply crates, buildings, flyers, killing sprees, and the sledgehammer kill count. A large block is multiplayer (matchmaking matches, XP, the hidden challenges, every mode and map) and the Wrecking Crew local score-attack mode, and the last ten belong to the Demons of the Badlands DLC campaign.",
                "The campaign and DLC achievements are not missable - the open world stays available and side content can be finished after the story. The multiplayer achievements are the risk: they require online matchmaking (including 250 matches for Topher Would Be Proud), and the player population is small, so these are best done with a group of friends or a boosting session.",
                "Tip: turn on the map's Guerrilla Action, collectible and target markers and clear each sector completely before moving on - the destruction-total achievements (1 billion credits, 250 crates, 100 hydrogen tanks) all tick up naturally while you demolish EDF buildings for Guerrilla Actions, so a thorough sector-by-sector campaign covers almost the entire single-player list."
            ]
        },
        {
            "heading": "Campaign & Guerrilla Actions",
            "body": [
                "The tutorial and liberating each sector of Mars (Parker, Dust, Badlands, Oasis, Eos) through to Red Dawn, completing the Guerrilla Actions (5 / 25 / 50 / all), beating the Transporter and Demolitions Master Pro times, the collectibles (radio tags, ore, propaganda), and the campaign destruction feats (1 billion credits of damage, supply crates, buildings, flyers, hydrogen tanks, sledgehammer kills, killing sprees).",
                "The achievements here: Welcoming Committee (Complete the Tutorial mission.); Martian Tea Party (Complete 2 missions for the Red Faction.); Spread the Word (Liberate Parker Sector.); Death From Above (Liberate Dust Sector.); Friendly Skies (Liberate Badlands Sector.); Don't Tread On Me (Liberate Oasis Sector.); Coup D'etat (Liberate Eos Sector.); Red Dawn (Liberate Mars.); Insurgent (Complete 5 Guerrilla Actions.); Guerrilla (Complete 25 Guerrilla Actions.); Freedom Fighter (Complete 50 Guerrilla Actions.); Revolutionary (Complete all Guerrilla Actions.); Clean and Righteous! (Destroy 5 High Importance targets.); Warp Speed (Beat all Transporter Pro times.); Got Any Fingers Left? (Beat all Pro times in Demolitions Master.); Lost Memories (Locate all missing radio tags.); Working the Land (Mine all ore locations.); Free Your Mind (Destroy all instances of propaganda.); One Man Army (Complete 25 killing sprees during the Campaign.); Disaster Area (Destroy 1 billion credits worth of EDF property.); Broken Supply Line (Destroy 250 EDF supply crates.); Power to the People (Raise the Morale of 3 sectors to 100%.); Tank Buster (Blow up 100 small hydrogen tanks.); Best Friends Forever (Kill 100 EDF with the sledgehammer during the Campaign.); Coming Down! (Destroy 50 EDF owned buildings.); Freed Space (Destroy 50 EDF flyers.)."
            ]
        },
        {
            "heading": "Multiplayer & Wrecking Crew",
            "body": [
                "The online multiplayer achievements - winning and playing matchmaking matches (up to 250), earning XP, Siege and Damage Control objectives, finishing a match in every mode and on every map, a kill with every weapon, the hidden challenges (4 / 8 / 16), backpack kills, and the remote-charge air kill - plus the local Wrecking Crew score-attack mode (all modes, every mode on all maps, 25 million points).",
                "The achievements here: Just the Beginning (Win a Matchmaking match.); Start of Something Special (Play 5 Matchmaking matches.); Doing Your Part (Kill 10 enemies in a Matchmaking Match.); Juggernaut (Destroy a Siege target.); Doozer (Reconstruct a Damage Control target.); Grab Some Popcorn (Enter Spectator mode and enjoy the show!); Try Anything Once (Finish a match in every mode.); Check Your Map (Finish a match on every map in Multiplayer.); Tools of the Trade (Score a kill with every weapon in Multiplayer.); Field Tested (Earn 1,000 XP in Multiplayer.); Battle Scarred (Earn 10,000 XP in Multiplayer.); Topher Would Be Proud (Play 250 matchmaking games.); Experimenter (Complete 4 hidden challenges in Multiplayer.); Detective (Complete 8 hidden challenges in Multiplayer.); Mad Genius (Complete 16 hidden challenges in Multiplayer.); Jack of all Trades (Score 10 kills while wearing each backpack.); The High and Mighty (Kill a flying opponent using a remote charge stuck to them.); Party Time (Play all Wrecking Crew modes once.); Can't Get Enough (Play every mode on all maps in Wrecking Crew.); Wrecking Ball (Score 25 million points worth of destruction in Wrecking Crew.)."
            ]
        },
        {
            "heading": "Demons of the Badlands DLC & Completion",
            "body": [
                "The Demons of the Badlands prequel DLC - the Rescue, Retribution and Redemption missions, Marauder Actions, the Mariner Valley Pro times and target destruction, breaking EDF control of the valley, the War Totems and Power Cells - plus the meta achievement for unlocking every other achievement in the game.",
                "The achievements here: Red Faction Guerrilla Re-Mars-tered (Unlock all Achievements in Red Faction Guerrilla Re-Mars-tered); Bound By Blood (Complete Rescue.); Family Vengeance (Complete Retribution.); A Greater Purpose (Complete Redemption.); Deliverance Defender (Complete Marauder Actions.); Tumbling Down (Beat all Pro times in Mariner Valley Demo Masters and Transporters.); Mobile Bombs (Destroy 100 EDF vehicles.); Structural Integrity (Destroy all Medium and High Priority Targets in Mariner Valley.); Purge the Valley (Break the EDF Control of the Mariner Valley.); Ares' Bloodlust (Destroy the 4 Marauder War Totems.); The Power of One (Collect 75 Marauder Power Cells.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign sector by sector, fully clearing each one's Guerrilla Actions, collectibles (radio tags, ore, propaganda) and High Importance targets before liberating it and moving on.",
                "2. The campaign destruction totals (1 billion credits, 250 supply crates, 50 buildings, 100 hydrogen tanks, sledgehammer kills, killing sprees) will mostly complete during that thorough playthrough - grind any stragglers in free-roam afterward.",
                "3. Beat all the Transporter and Demolitions Master Pro times for Warp Speed and Got Any Fingers Left?.",
                "4. Play the Demons of the Badlands DLC campaign, completing its three missions, Marauder Actions, Pro times and collectibles.",
                "5. Do the multiplayer and Wrecking Crew achievements last - ideally in a boosting group given the small player base - covering every mode and map, the hidden challenges, the XP totals, and the 250-match grind.",
                "Tip: the multiplayer hidden challenges (Experimenter / Detective / Mad Genius) are in-match objectives like \"get X kills with weapon Y\" - look up the list and knock them out in private or co-op matches with friends rather than hoping to trigger them in random public games."
            ]
        }
    ]
};
