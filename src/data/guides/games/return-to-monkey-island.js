// Return to Monkey Island Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/return-to-monkey-island.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2060130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "return-to-monkey-island-achievement-guide",
    "category": "game",
    "gameSlug": "return-to-monkey-island",
    "icon": "🐒",
    "title": "Return to Monkey Island Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in Return to Monkey Island (10 hidden). Covers all 5 story Parts, trivia card milestones, and a long list of story-beat and joke achievements. Ten of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Return to Monkey Island has 39 Steam achievements and 10 are hidden. Five are for starting each of the game's 5 Parts, and five more are trivia-card milestones from 10 up to 100 questions answered correctly (plus collecting 20+ trivia cards). The rest are story beats and joke achievements - freeing Otis, telling everyone about the secret, swabbing the hold 20 times, decking out the Sea Monkey II, doing Gullet a favor, giving Stan his toothbrush, the flag switcheroo, becoming a prize chum, rescuing Wally, and finding all copies of 'At The End Of The Plank', plus a sub-2-hour speedrun. The ten hidden achievements are mostly optional gags - attempting to steal the cook's mop, collecting all four mop heads, spilling fat for the earthquake relief donation, dying for real, braving the Scorched Alaska, saying 'Ahoy!' 20 times to paranoid pirates, letting the Lumpsucker escape, diving the entire ocean floor, backtracking through the ending instead of talking to Elaine, and finding Cogg Island.",
                "The catalog marks it difficulty 2. This is Ron Gilbert's story-driven return to the series; nothing is truly missable within a playthrough since most content can be revisited, but a few hidden achievements (the ending backtrack, the speedrun) need deliberate planning.",
                "Tip: 'I Don't Believe' wants you to NOT talk to Elaine at the ending - instead use Stan's keys on the church alley door and backtrack through the area, which runs counter to the story's obvious next step."
            ]
        },
        {
            "heading": "Story Parts & Trivia",
            "body": [
                "Fulfilling your restroom obligations, sharing your luck, starting Part One, convincing Cobb to tell you about LOOM, examining all of Wally's stock, the hidden Mop Heist, freeing Otis, telling everyone on Mêlée Island about the secret, the hidden Mop Top, and starting Part Two.",
                "The achievements here: Pegleg (Fulfilled Your Restroom Obligations); Lucky Duck (Shared Your Luck); Part One (Started Part One); Fan Service (Convinced Cobb To Tell You About LOOM); Cartography Nerd (Thoroughly Examined All Of Wally’s Stock); Mop Heist (Attempt to steal the cook's mop while he's busy preparing a meal, then try to leave the bar.); Hey Wait! (Freed Otis); Bragging (Told Everyone On Mêlée Island That You Are Looking For The Secret); Mop Top (Get hired by Iron Rose at the end of Part 2 with all four possible mop heads (the Voodoo Head, the Sponge, the Pile of Rope, and the Stuffed Dog).); Part Two (Started Part Two)."
            ]
        },
        {
            "heading": "Middle Story Beats",
            "body": [
                "Swabbing the hold twenty times, listing every mess on the first swab's report, the hidden Hot Headed, starting Part Three, getting to the heart of the problem, the hidden Dead Dead Dead, decking out the Sea Monkey II with skulls, starting Part Four, waiting patiently to see Carla, and the hidden Relief Pitcher.",
                "The achievements here: Super Swabbie (Swabbed The Hold Twenty Times); Neat Freak (Listed Every Mess On The First Swab’s Report); Hot Headed (Brave the Scorched Alaska.); Part Three (Started Part Three); Not Bitter (Got To The Heart Of The Problem); Dead Dead Dead (Die for real.); Tight Ship (Decked Out The Sea Monkey II With Spooky Skulls); Part Four (Started Part Four); Patient Citizen (Waited Patiently To See Carla); Relief Pitcher (On the ship in the very first room, mop up the fat - your 'boss' will spill it, offering a chance to donate to the earthquake relief.)."
            ]
        },
        {
            "heading": "Late Story, Secrets & Trivia Mastery",
            "body": [
                "The hidden Ahoy There, doing Gullet a favor, giving Stan his toothbrush, the hidden On The Lam, the flag switcheroo, becoming a prize chum, the hidden Deep Sea Diver, finding all copies of 'At The End Of The Plank', starting Part Five, rescuing Wally, the hidden 'I Don't Believe', collecting 20+ trivia cards, answering 10, 25, 50, 75 and 100 trivia questions correctly, the hidden Cogg Island discovery, and a sub-2-hour speedrun.",
                "The achievements here: Ahoy There (Sail to the adrift ship and select the 'Ahoy!' dialogue option with the paranoid pirates 20 times.); Promise Keeper (Did Gullet A Favor); Dental Samaritan (Gave Stan His Toothbrush); On The Lam (Repeatedly re-enter the fish shop and let the Lumpsucker slowly crawl to the door and escape.); Flag Facsimile (Performed The Ole Switcheroo With The Replica Flag); Trophy Fisher (Became A Prize Chum); Deep Sea Diver (Dive from your ship using the anchor and a pufferfish repeatedly during Part 4 until you've explored every variant of the ocean floor.); Bookworm (Found All The Copies of ‘At The End Of The Plank’); Part Five (Started Part Five); Free Wally (Rescued Wally From Monkey Island); I Don’t Believe (At the ending, instead of talking to Elaine, use Stan's keys on the church alley door and backtrack through the area.); Card Collector (Collected More Than Twenty Trivia Cards); Trivia Go Getter (Answered Ten Trivia Questions Correctly); Trivia Master (Answered Twenty-Five Trivia Questions Correctly); Trivia Grand Master (Answered Fifty Trivia Questions Correctly); Trivia Lord (Answered Seventy-Five Trivia Questions Correctly); Trivia Overlord (Answered One Hundred Trivia Questions Correctly); Cogg Island (Find Cogg Island.); Speed Runner (Reached The End In 2 Hours Or Less)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story's 5 Parts, picking up the trivia-card milestones and story-beat achievements along the way.",
                "2. Try the optional gags as they come up - swab the hold 20 times, deck out the Sea Monkey II, and hunt down all copies of 'At The End Of The Plank'.",
                "3. Attempt to steal the cook's mop, collect all four mop heads before getting hired by Iron Rose, and say 'Ahoy!' 20 times to the paranoid pirates.",
                "4. During Part 4, dive the ocean floor repeatedly for Deep Sea Diver, and let the Lumpsucker escape the fish shop for On The Lam.",
                "5. At the ending, backtrack through the church alley with Stan's keys instead of talking to Elaine for the hidden 'I Don't Believe'.",
                "Tip: many hidden achievements are one-off gags easy to miss on a normal playthrough - a checklist run focused on them after finishing the story once is the most reliable way to mop them all up."
            ]
        }
    ]
};
