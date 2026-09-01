// Assassin's Creed Mirage Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assassins-creed-mirage.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3035570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 12 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assassins-creed-mirage-achievement-guide",
    "category": "game",
    "gameSlug": "assassins-creed-mirage",
    "icon": "🗡️",
    "title": "Assassin's Creed Mirage Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in Assassin's Creed Mirage (12 hidden). Covers Basim's story and the five Order assassinations, the skill, gear and tool upgrades, the Baghdad and AlUla exploration, the collectibles, and the stealth and combat feats. Twelve of the achievements are hidden - the story beats and a few combat feats - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assassin's Creed Mirage has 61 Steam achievements and 12 are hidden. Eight are story markers: completing the prologue, becoming an Initiate of the Hidden Ones, eliminating each of the four Order members (Al-Ghul, Al-Rabisu, Al-Pairika, Al-Mardikhwar), eliminating the Head of the Order, and discovering Basim's past at the end. The other four are collectible and combat feats: pickpocketing all 18 artifacts for Dervis, defeating a Shakiriyya (a special guard that appears at maximum notoriety), destroying a Horn Bearer's horn with a throwing knife, and killing five guards with one use of Assassin's Focus.",
                "The catalog marks it difficulty 3 - it is a tighter, stealth-focused AC with a short campaign. Nothing is missable; Baghdad and AlUla stay fully open after the story, and every collectible, contract and viewpoint can be finished afterward. Most of the list is 'do X 10/50/100 times' activity tracking that fills in over a completion run.",
                "Tip: raise your notoriety to level 3 and stay there - it makes the Shakiriyya ('The Shadow and the Flame') spawn, and the Horn Bearers ('Silencer') are common in the patrols that hunt you, so both feats come together during one heated stretch."
            ]
        },
        {
            "heading": "Story: The Order of the Ancients",
            "body": [
                "Completing the prologue, becoming an Initiate of the Hidden Ones, eliminating Al-Ghul, Al-Rabisu, Al-Pairika and Al-Mardikhwar, eliminating the Head of the Order, discovering Basim's past, and the early progression achievements (Hidden One rank, 23 skills, a fully upgraded weapon and outfit, dye, the Baghdad disguises, a token chest, 10 elixirs, all Baghdad viewpoints, 100 Enkidu tags, all Baghdad territories, 10 faction contracts, a Tale from Baghdad, all lost books, an enigma treasure).",
                "The achievements here: The Master Thief of Anbar (Complete the prologue.); La shay'a waqi'un mutlaq (Become an Initiate of the Hidden Ones.); The Blood of a Ghoul (Eliminate Al-Ghul.); The Blood of a Demon (Eliminate Al-Rabisu.); The Blood of an Enchantress (Eliminate Al-Pairika.); The Blood of a Spymaster (Eliminate Al-Mardikhwar.); The Head of the Snake (Eliminate the Head of the Order.); Bal kullun mumkin (Discover Basim's past (finish the game).); Serving the Light (Reach the maximum Hidden One Rank); Self-Improvement (Unlock 23 Skills); Cutting Edge (Fully upgrade a weapon); Thick Skin (Fully upgrade an outfit); Fashion Statement (Apply dye to an outfit); Masquerader (Obtain the two disguises in Baghdad); Treasure Seeker (Open a token chest); Potion Collector (Purchase 10 elixirs); Fearless (Synchronize all Viewpoints in the Baghdad region); Bird of Prey (Tag 100 guards using Enkidu); Explorer (Explore all the Baghdad region territories); Defender of the People (Complete 10 faction contracts); Crossing Paths (Complete a Tale from Baghdad)."
            ]
        },
        {
            "heading": "Tools, Stealth & Combat Feats",
            "body": [
                "All tools upgraded, 75 throwing-knife kills, 20 throwing-knife headshots, 10 blowdart sleeps, 10 trap triggers, 20 smoke-bomb effects, 10 noisemaker lures, 50 pickpockets, a blowdart pickpocket, the curio collection for Dervis, 2007 dirhams saved, bench and patron feats, crowd and hiding-spot assassinations, the Shakiriyya, and destroying a Horn Bearer's horn.",
                "The achievements here: Sage (Collect all lost books); Riddle Me This (Obtain a treasure by solving an enigma); Tools of the Trade (Fully upgrade all tools); Eagle's Eye (Kill 75 guards with throwing knives); Headhunter (Headshot 20 guards with throwing knives); Sleep Tight (Put 10 guards to sleep with blowdarts); Ambush (Have 10 guards trigger traps); Up in Smoke (Affect 20 guards with smoke bombs); Attention Seeker (Attract 10 guards with noisemakers); The Hands of a Thief (Pickpocket 50 people); You Snooze, You Lose (Pickpocket a guard affected by a blowdart); Curio Collector (Pickpocket all 18 artifacts and bring them to Dervis.); Hoarder (Save up 2007 dirhams); Dawn and Dusk (Use benches to pass time 5 times); Patron of the Arts (Pay musicians 5 times); Patron of Sell-Swords (Pay mercenaries 5 times); Patron of Industry (Pay merchant groups 5 times); Blade in the Crowd (Assassinate 10 guards while blending with the crowd); Surprise! (Assassinate 10 guards from hiding spots); The Shadow and the Flame (Defeat a Shakiriyya in combat (they appear at maximum notoriety).); Silencer (Destroy a Horn Bearer's horn with a throwing knife.)."
            ]
        },
        {
            "heading": "Notoriety, Escape & AlUla",
            "body": [
                "Maximum notoriety for 10 minutes, lowering notoriety by posters only, three Munadi uses, five guards with one Assassin's Focus, 10 minutes in open conflict, 20 scaffolding collapses, a 10-kill stealth streak, hiding 5 bodies in hay, returning Hind's stolen goods, all folktales and Oud melodies, the Animus Sequence challenges and rewards, poisoning a poisoner, all AlUla territories, and the AlUla prison escape (and the undetected version).",
                "The achievements here: Notorious (Stay at maximum notoriety for 10 minutes); Poster Boy (Lower maximum notoriety by ripping wanted posters only); Spread the News (Use the services of a Munadi 3 times); Unstoppable (Kill 5 guards with one use of Assassin's Focus.); Eagle's Will (Survive 10 minutes in open conflict); Gifted Escapist (Collapse 20 scaffolding structures); A True Hidden One (Assassinate 10 guards in a row without triggering open conflict); Street Cleaner (Hide 5 bodies in bales of hay); Lost and Found (Return all stolen goods to Hind); Once Upon a Time (Listen to all folktales); Pro Musician (Collect all Oud melodies); If I Recall Correctly (Replay an Animus Sequence); Perfect Memory (Complete all challenges of an Animus Sequence); Playback (Unlock all Animus Sequence rewards); Taste Your Own Medicine (Poison a Poisoner); Like a Local (Complete all the AlUla territories); Make a Break (Escape the AlUla prison); Turn the Page (Say goodbye to Is'haq); Give it the Slip (Escape the AlUla prison undetected)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, eliminating each Order member and the Head of the Order as you reach them.",
                "2. Sweep Baghdad's territories for viewpoints, contracts, lost books, the artifacts for Dervis, and the enigma treasures.",
                "3. Do the tool, stealth and pickpocket feats naturally over the campaign, and the Animus Sequence challenges.",
                "4. Raise notoriety to level 3 and pick up 'The Shadow and the Flame' (Shakiriyya) and 'Silencer' (Horn Bearer horn) in the same fight.",
                "5. Finish the AlUla region and do the prison escape, then the undetected version.",
                "Tip: 'Unstoppable' (5 kills with one Assassin's Focus) needs the Focus skill upgraded to target more enemies - buy those skill points before attempting it against a tight group of guards."
            ]
        }
    ]
};
