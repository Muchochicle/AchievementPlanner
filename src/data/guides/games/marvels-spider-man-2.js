// Marvel's Spider-Man 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/marvels-spider-man-2.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2651280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "marvels-spider-man-2-achievement-guide",
    "category": "game",
    "gameSlug": "marvels-spider-man-2",
    "icon": "🕷️",
    "title": "Marvel's Spider-Man 2 Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Marvel's Spider-Man 2 (16 hidden). Covers the story and bosses, the side activities and districts, and the combat feats, traversal and completion. Sixteen of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Marvel's Spider-Man 2 has 43 Steam achievements and 16 are hidden. About twenty cover the story - the main-quest milestones and boss fights against Sandman, Kraven, the Lizard and Mister Negative, plus the collect-and-clear chains (Mysteriums, Unidentified Targets, Flame missions, Symbiote Nests, Marko's Memories, Hunter Blinds and Bases). The rest are side content and completion: the Emily-May Foundation experiments, 100% districts, all suits and gadgets, max level, the Spider-Bot mystery, traversal challenges, all Photo Ops, and a New Game+ story clear.",
                "The catalog marks it difficulty 3. Nothing here is a skill wall - the hidden trophies are almost all story-mission or 'complete every X' unlocks - so this is a thorough playthrough plus cleanup and one NG+ run.",
                "Tip: finish the story first (most hidden trophies pop automatically), then 100% every district and use a collectibles checklist for the chains, and save the NG+ run for last."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "Visiting Aunt May's grave, all Prowler Tech Stashes, the platinum, 100% completing all districts, finishing the main story, all gadget upgrades and all suits, max level, the boss fights against Sandman, Kraven, the Lizard and Mister Negative, defeating enemies as Venom, and clearing every Mysterium, Unidentified Target, Flame mission, Symbiote Nest, Marko's Memory, Hunter Blind and Hunter Base.",
                "The achievements here: You Know What to Do (As Peter, visit Aunt May's grave); Co-Signing (Complete all Tech Stashes); You're Gonna Need Help (Complete Main Quest 01 'Surface Tension' (the first story mission).); Dedicated (Collect all Achievements); Superior (100% complete all districts); Heal the World (Finish the main story); To the Max (Purchase all Gadget upgrades); Kitted Out (Purchase all available Suits); Behind the Masks (Finish 'Grand Finale', the final Mysterium that spawns after completing all other Mysteriums.); Amazing (Reach max level); Data Collector (Complete 'Target Identified', the final Unidentified Target that spawns after collecting all the others.); Crimson Hour (Finish 'It Was Meant for Me', the final Flame mission that spawns after completing all other Flame missions.); Exterminator (Complete all 10 Symbiote Nests.); Grains of Sand (Find all 14 Marko's Memory collectibles.); Leave Us Alone (Complete Main Quest 25 'Don't Be Scared'.); The Great Hunt (Complete Main Quest 24 'Anything Can Be Broken'.); Seek and Destroy (Finish all 11 Hunter Blinds and all 4 Hunter Bases.); Friendly Neighborhood Spider-Man (Complete all FNSM requests); Medicine (Complete Main Quest 20 'It Chose You'.); Surge (Use Symbiote Abilities 25 times during Symbiote Surge as Peter (unlocks after Main Quest 15).)."
            ]
        },
        {
            "heading": "Side Activities & Districts",
            "body": [
                "All Emily-May Foundation experiments, 100 Evolved Venom and 100 Spider-Arm ability kills, all Suit Tech upgrades, the 'A Gift' and 'Hard Bop' story missions, the final MJ mission, solving the Spider-Bots' origin, equipping a suit style, 25 Web Line stealth takedowns, and 30 air tricks in a row.",
                "The achievements here: Foundational (Complete all EMF Experiments); Evolved (Defeat 100 enemies with Evolved Venom abilities); Armed and Dangerous (Defeat 100 enemies with Spider Arm abilities); Another Way (Complete Main Quest 23 'No Escape'.); Fully Loaded (Purchase all of Spider-Man's Suit Tech upgrades); Brooklyn Pride (Complete \"A Gift\"); My Community (Complete \"Hard Bop\" ); I Quit (Complete Main Quest 28 'Set Things Right' (the final mission).); Funky Wireless Protocols (Solve the mystery of the Spider-Bots' origin); Stylish (Equip a suit style); Slack Line (Stealth takedown 25 enemies in stealth from the Web Line); Hang Ten (Perform 30 Air Tricks in a row without touching the ground)."
            ]
        },
        {
            "heading": "Combat Feats, Traversal & Completion",
            "body": [
                "The Reverse Flux multi-pull as Miles, rounding the bases at the Big Apple Ballers Stadium, finding Miles and Phin's science trophy, the Web Wings glide from the Financial District to Astoria, failing a trick on purpose, helping Howard, 10,000 Tech Parts, all Photo Ops, an Anti-Venom symbiote kill, and finishing the story in New Game+.",
                "The achievements here: Overdrive (Use Reverse Flux to pull 6 or more enemies together at once as Miles (unlocks in Main Quest 23).); Home Run! (Round the bases at the Big Apple Ballers Stadium); Just Let Go (As Miles, find the science trophy Miles and Phin won together); Soar (Using only your Web Wings, glide from the Financial District to Astoria (Wind Tunnels are okay!)); Splat (Attempt and fail a trick before \"landing\" on the ground); A New Adventure (Help Howard); Resourceful (Collect a total of 10,000 Tech Parts); New York, New York (Complete all Photo Ops); Antidote (Defeat a Symbiote that is under the Anti-Venom status effect during Main Quest 28.); A New Suit (Acquire the Black Suit, obtained automatically during Main Quest 15 'Good Men'.); Once More, With Feeling (Finish the main story in New Game+ mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story - most hidden trophies are story-mission unlocks.",
                "2. Do the boss and Venom-segment feats as they come up ('Surge' after MQ15, 'Overdrive' in MQ23, 'Antidote' in MQ28).",
                "3. 100% every district: FNSM requests, EMF experiments, Photo Ops, Prowler Stashes, Spider-Bots.",
                "4. Clear each activity chain to its finale for 'Behind the Masks', 'Data Collector', 'Crimson Hour', 'Exterminator', 'Grains of Sand' and 'Seek and Destroy'.",
                "5. Buy all suits, suit styles, gadgets and Suit Tech, hit max level, then run New Game+ for 'Once More, With Feeling'.",
                "Tip: the activity-chain finales ('Grand Finale', 'Target Identified', 'It Was Meant for Me') only appear once every other node of that type is done, so fully clear one activity type at a time."
            ]
        }
    ]
};
