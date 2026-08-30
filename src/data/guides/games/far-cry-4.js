// Far Cry 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/far-cry-4.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   298110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "far-cry-4-achievement-guide",
    "category": "game",
    "gameSlug": "far-cry-4",
    "icon": "🐘",
    "title": "Far Cry 4 Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Far Cry 4 - none are hidden. Covers the story and Kyrat-liberation achievements, the side-activity and progression feats, the combat feats, and the Arena, multiplayer and Valley of the Yetis DLC achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Far Cry 4 has 57 Steam achievements and none of them are hidden. The campaign covers the story-decision points (deciding the fate of De Pleur, Noore, Yuma and Pagan Min), discovering Shangri-La, and liberating Kyrat - 12 and then all Outposts, a stealth Outpost, 8 Bell Towers, 2 Fortresses. Around that is a large pool of side activities (hunting, assassination, hostage-rescue, racing and bomb-defusal quests, outpost retaliation, cargo trucks, Pagan's Wrath convoys), collectibles (Masks of Yalung, Propaganda Posters, Lost Letters, Mani Wheels, notes), progression feats (learn all skills, craft upgrades and syringes, spend 500,000 rupees), and combat feats. The rest are the Arena, the Battles of Kyrat and Map Browser multiplayer modes, and the Valley of the Yetis DLC.",
                "Nothing is permanently missable - the open world stays available after the story, and even the story-decision achievements simply unlock for whichever choice you make. A couple of feats are flagged Campaign Co-op only (Brother In Arms, Changing Lanes) and need a partner.",
                "Tip: liberate the whole map early - clearing Bell Towers reveals nearby outposts, quests and collectibles, and a fully liberated Kyrat makes the side-activity and collectible achievements a simple map sweep with fast travel."
            ]
        },
        {
            "heading": "Story & Kyrat Liberation",
            "body": [
                "Joining the Golden Path, deciding the fate of De Pleur, Noore, Yuma and Pagan Min, discovering Shangri-La, liberating 12 and then all Outposts, an alarm-free Outpost, liberating 8 Bell Towers, and conquering 2 Fortresses.",
                "The achievements here: Welcome to Kyrat (Join the Golden Path (Campaign only).); One Down (Decide De Pleur's fate (Campaign only).); Overdose (Discover Shangri-La (Campaign only).); Two Down (Decide Noore's fate (Campaign only).); Hat-Trick (Decide Yuma's fate (Campaign only).); The King Is Dead (Decide Pagan Min's fate (Campaign only).); Deliver Us From Evil (Liberate 12 Outposts (Campaign only).); All Clear (Liberate all Outposts (Campaign only).); Tread Lightly (Liberate any Outpost without triggering an alarm in any mode (Campaign only).); End Transmission (Liberate 8 Bell Towers (Campaign only).); Display Of Fortitude (Conquer 2 Fortresses (Campaign only).); Well-Rounded (Complete any 6 Hunting quests (Supplies, Control, Survival) (Campaign only).); Trigger-Man (Complete 3 Assassination or Eye for an Eye quests (Campaign only).)."
            ]
        },
        {
            "heading": "Side Activities & Progression",
            "body": [
                "Six Hunting quests, three Assassination/Eye for an Eye quests, 15 hostages rescued, three Kyrati Films activities, three Outpost Retaliation parties repelled, three Royal Cargo Trucks hijacked, three Pagan's Wrath convoys eliminated, an Outpost liberated as Hurk in co-op, three Bomb Defusal quests, a passenger-seat Vehicle Takedown, three Ghale Homestead purchases, 15 Masks of Yalung, 30 Propaganda Posters, 10 Lost Letters, 10 Mani Wheels, three Kyrat Fashion Week quests, 10 notes, 10 and then all skills, 5 equipment upgrades, 15 syringes, and 500,000 rupees spent.",
                "The achievements here: No One Left Behind (Rescue 15 hostages in Hostage Rescue quests (Campaign only).); Gearhead (Complete 3 Kyrati Films: Racing or Kyrati Films: Survival activities (Campaign only).); Defender (Repel 3 Outpost Retaliation Parties (Campaign only).); Robin Hood (Hijack 3 Royal Cargo Trucks and return them to a liberated Outpost (Campaign only).); Hand Of Justice (Eliminate 3 Pagan's Wrath convoys (Campaign only).); Brother In Arms (Liberate 1 Outpost playing as Hurk (Campaign Co-op only).); Defuser (Complete 3 Bomb Defusal quests (Campaign only).); Changing Lanes (Perform a Vehicle Takedown from the passenger seat of a vehicle (Campaign Co-op only).); Fixer-Upper (Purchase 3 items for the Ghale Homestead (Campaign only).); Exorcist (Destroy 15 Masks of Yalung (Campaign only).); Rewriting History (Remove 30 Propaganda Posters (Campaign only).); Caretaker Of Memory (Find 10 Lost Letters (Campaign only).); Right Tributes (Spin 10 Mani Wheels (Campaign only).); The Rarest Game (Complete 3 Kyrat Fashion Week quests (Campaign only).); Well Read (Read 10 notes (Campaign only).); Quick Learner (Learn 10 skills (Campaign only).); Fully Loaded (Learn all skills (Campaign only).); Tricked Out (Craft 5 upgrades for your equipment (Campaign only).); Dr. Feelgood (Craft 15 syringes (Campaign only).); Make It Rain (Spend 500,000 rupees total at Trading Posts (Campaign only).); Custom-Fitted (Buy all attachments and paint schemes for a single weapon (Campaign only).); Tusker (Kill 30 enemies with an elephant (Campaign only).)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "Buying all attachments and paints for one weapon, 30 elephant kills, a 4-enemy explosion, 15 rock distractions, 25 camera tags, 30 mortar kills, a 60m+ arrow kill, a sniper two-for-one, a Buzzer takedown, 50 fire kills, and 25 kills while shooting and driving.",
                "The achievements here: Quad Kill (Kill 4 enemies simultaneously with a single explosion (Campaign only).); Misdirection (Distract 15 enemies with rocks (Campaign only).); Shutterbug (Tag 25 enemies using the camera (Campaign only).); Reign Of Death (Kill 30 enemies with Mortar rounds (Campaign only).); From A Distance (Kill a target from 60m or more with an arrow or bolt (Campaign only).); Two Birds (Using a sniper rifle, kill 2 targets with a single shot (Campaign only).); The Sky Is Falling (Perform a takedown from a Buzzer (Campaign only).); Flame On! (Kill 50 enemies with fire (Campaign only).); Drive-By (Kill 25 enemies while shooting and driving (Campaign only).); The Good Fight (Reach Karma Level 2, and purchase any Guns For Hire upgrade (Campaign only).); Like A Bird (Fly 5000m total in the Wingsuit (Campaign only).)."
            ]
        },
        {
            "heading": "Arena, Multiplayer & Valley of the Yetis DLC",
            "body": [
                "Reaching Karma Level 2 with a Guns For Hire upgrade, flying 5000m in the Wingsuit, running over 25 people, Arena Rank 5, a public match of each Battles of Kyrat type, playing a Top Rated Map Browser map, and the Valley of the Yetis DLC (occupy and defend the Relay Station, survive the first night, one and then all upgrade quests, complete the campaign, kill one and then five Yetis).",
                "The achievements here: Roadkill (Run over 25 people (Campaign only).); The People's Champ (Reach Arena Rank 5 (Campaign Arena only).); Renaissance Man (Finish a public match of each game type in the Battles of Kyrat game mode (Battles of Kyrat only).); Community Surprise (Play a Top Rated map in the Map Browser (Map Browser only).); Home Sweet Home (Occupy The Relay Station (Valley Of The Yetis).); Night Survivor (Defend The Relay Station And Survive The First Night (Valley Of The Yetis).); Builder (Complete One Relay Station Upgrade Quest (Valley Of The Yetis, Single Player Only).); Master Builder (Complete All Relay Station Upgrade Quests (Valley Of The Yetis, Single Player Only).); Awakened! (Complete The Valley Of The Yetis Campaign (Valley Of The Yetis).); Spiritual Hunter (Kill A Yeti (Valley Of The Yetis, Single Player Only).); Master of the Awakened (Kill 5 Yetis (Valley Of The Yetis, Single Player Only).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Progress the story far enough to unlock the southern half of the map, then liberate every Bell Tower to reveal the world.",
                "2. Sweep the map for Outposts, collectibles (Masks, Posters, Letters, Mani Wheels) and the side-quest types (hunting, assassination, hostage, racing, bomb defusal).",
                "3. Do the progression feats (all skills, crafting, 500,000 rupees spent, a fully kitted weapon) as your economy grows.",
                "4. Do the combat feats deliberately at a liberated outpost you re-trigger - elephant kills, fire kills, the 4-enemy explosion, rock distractions, camera tags.",
                "5. Do the Arena and Battles of Kyrat multiplayer modes and the Valley of the Yetis DLC campaign last.",
                "Tip: an elephant covers several combat achievements at once - ride one into an outpost for Tusker (30 kills), the quad kill and drive-by-style kills, and you can farm the count by re-triggering Outpost Retaliation at the same fort."
            ]
        }
    ]
};
