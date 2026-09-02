// STAR WARS: Squadrons Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/star-wars-squadrons.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1222730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "star-wars-squadrons-achievement-guide",
    "category": "game",
    "gameSlug": "star-wars-squadrons",
    "icon": "🚀",
    "title": "STAR WARS: Squadrons Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in STAR WARS: Squadrons (9 hidden). The 9 hidden achievements are spoiler-free campaign mission-completion markers. The rest - difficulty clears, Fleet Battles, Dogfight totals, flying feats and progression - carry Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "STAR WARS: Squadrons has 47 Steam achievements, 9 of them hidden. Squadrons is a first-person starfighter game with a dual-perspective campaign (New Republic Vanguard Squadron and Imperial Titan Squadron) and 5v5 multiplayer. The visible achievements are the four campaign difficulty clears, the Story Medal collections, the Ranked and Co-op Fleet Battles wins, the Dogfight kill totals, a long list of flying and combat feats, and pilot progression and starfighter customization.",
                "The 9 hidden achievements are the campaign mission-completion markers, from 'Fracture at Fostar Haven' through 'Punch It'. They unlock automatically as the story alternates between the two squadrons and are described here spoiler-free.",
                "The catalog marks it difficulty 3 and recommends 2 playthroughs - The Galaxy's Finest (Ace) is a hard campaign clear, and earning all Story Medals is best done on Story difficulty first."
            ]
        },
        {
            "heading": "Campaign",
            "body": [
                "The four difficulty clears (Story, Pilot, Veteran, Ace), earning all Medals in a mission and all Story Medals on any difficulty, and the nine Steam-hidden mission-completion markers.",
                "The achievements here: The Galaxy's Finest (Story Mode) (Completed the campaign on Story Mode difficulty); The Galaxy's Finest (Pilot) (Completed the campaign on Pilot difficulty); The Galaxy's Finest (Veteran) (Completed the campaign on Veteran difficulty); The Galaxy's Finest (Ace) (Completed the campaign on Ace difficulty); Mission Accomplished (Earned all Medals in a Story mission); Fully Decorated (Earned all Story Medals on any difficulty); Fracture at Fostar Haven (Complete the campaign mission 'Fracture at Fostar Haven'); Together, Vanguard (Complete the campaign mission 'Together, Vanguard'); Asset Secured (Complete the campaign mission 'Asset Secured'); Temporary Guardian (Complete the campaign mission 'Temporary Guardian'); Safety in the Storm (Complete the campaign mission 'Safety in the Storm'); Flames Over Mon Cala (Complete the campaign mission 'Flames Over Mon Cala'); Baited (Complete the campaign mission 'Baited'); Against the Current (Complete the campaign mission 'Against the Current'); Punch It (Complete the campaign mission 'Punch It' - finish the story)."
            ]
        },
        {
            "heading": "Fleet Battles & Multiplayer",
            "body": [
                "Winning 10 Ranked Fleet Battles for each faction, Co-op Fleet Battles vs. AI, a win on every Fleet Battles map, a party win, a bombs-away win, and dealing the final blow to a flagship.",
                "The achievements here: Victory for the New Republic (Won 10 Ranked Fleet Battles as the New Republic); Victory for the Empire (Won 10 Ranked Fleet Battles as the Galactic Empire); Found Your Place (Completed your Ranked placement matches); Stay on Target (Won 15 Co-op Fleet Battles vs. AI); Stronger Together (Won any match while playing in a party); Across the Stars (Won a Ranked Fleet Battles match on every map); Stomped (Won a Fleet Battles vs. AI match with both Capital Ships and your Flagship intact); Great Shot, Kid (Dealt the final blow to the enemy's flagship in a Fleet Battle)."
            ]
        },
        {
            "heading": "Dogfights & Combat Feats",
            "body": [
                "The Dogfight kill totals (15 / 50 / 250 / 1000), drift kills, subsystem and disabled-fighter destruction, low-hull kills, lock-on evasion, Seeker Mine and Tactical Shield tricks, and the laser-damage and missile-defence feats.",
                "The achievements here: Heavy Hitter (Dropped 50 bombs to damage Capital Ship hulls across multiple Ranked Fleet Battles); I Have You Now (Won 15 Dogfight matches); Stun 'Em (Disabled the same player five times in one match); Sound Strategy (Destroyed your first subsystem); Fearless (Destroyed an enemy while your hull integrity was 5% or lower); Back From the Brink (Returned to the Hangar with less than 5% hull integrity); I Know a Few Maneuvers (Destroyed 10 starfighters while drifting in Dogfight); Trigger Happy (Dealt more than 50,000 laser damage in a single match); Squadron Hunter (Destroyed four of each starfighter class in Dogfight matches); Unkillable (Evaded or countered 5 lock-ons in a row during a single match); The Trap is Set (Damaged 5 enemies with Seeker Mines in a single match); Shallow Grave (Used Tactical Shields or Supply Droids to rescue near-death allies 10 times in Ranked Fleet Battles); Got 'Em (Destroyed a disabled starfighter 10 times across multiple Dogfight matches); Denied (Shot down 30 missiles, bombs, or mines in Ranked Fleet Battles); Combat Pilot (Destroyed 50 starfighters in Dogfight matches); Unstoppable Ace (Destroyed 250 starfighters in Dogfight matches); Ultimate Weapon (Destroyed 1000 starfighters in Dogfight matches)."
            ]
        },
        {
            "heading": "Progression & Customization",
            "body": [
                "Equipping your first Legendary cosmetic, acquiring starfighter components (first and 50), your first Award, completing Ranked placement, modifying a preset loadout, and reaching Pilot Level 10 and 40.",
                "The achievements here: Dressed for the Job You Want (Equipped your pilot with their first Legendary cosmetic); A Starfighter of Your Own (Acquired your first starfighter component); Special Modifications (Acquired 50 components for your starfighters); Begin the Ceremony (Earned your first Award); A Better Idea (Modified a starfighter's preset loadout in multiplayer); A Promising Career (Reached Pilot Level 10); Seasoned Star Pilot (Reached Pilot Level 40)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Story difficulty first, earning all Medals in each mission for Fully Decorated and banking the nine hidden markers.",
                "2. Replay the campaign on Ace for The Galaxy's Finest (Ace) - it grants the lower difficulty clears too.",
                "3. Play Ranked Fleet Battles for both factions to 10 wins each, and a win on every map.",
                "4. Grind Dogfight matches for the 1,000-kill total, working the combat feats (drift kills, subsystem destruction, lock-on evasion) along the way.",
                "5. Reach Pilot Level 40 and finish the customization achievements with the credits and components you earn.",
                "Tip: Fleet Battles vs. AI counts for several achievements (Stay on Target, Denied, Stomped) and is far less stressful than Ranked - do those there before touching competitive play."
            ]
        }
    ]
};
