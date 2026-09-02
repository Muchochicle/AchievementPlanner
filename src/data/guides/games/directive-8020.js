// Directive 8020 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/directive-8020.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2255370 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary. Every non-hidden description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "directive-8020-achievement-guide",
    "category": "game",
    "gameSlug": "directive-8020",
    "icon": "🛸",
    "title": "Directive 8020 Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Directive 8020 (16 hidden). 16 of the 30 are hidden, researched from TheGamer, AllThings.How, and Pro Game Guides - mostly branching-choice endings and collectible sets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Directive 8020 has 30 Steam achievements, 16 of them hidden. The visible track covers completing all 8 episodes, a Survivor-playstyle clear, finishing Episode 1, an early crew-wipe outcome, hacking Williams' computer, a standoff gone wrong, everyone passing the scanner safely, a warning or an SOS sent to the Andromeda, a no-losses run back to Bridge Ops, persuading Williams to reveal the truth, sending a second fuel-redirect team, and a clean course home.",
                "The 16 hidden achievements are almost all branching-choice outcomes and collectible sets: surviving the crash as Stafford, finding Carter's Utility Strap, approving the use of the gun, luring the Duplicate into the Waste Management incinerator, a specific coffee-room interaction, escaping Williams as Cernan uncaught, following the right evidence chain to clear a suspect, using a Turning Point to change your path, finding all 5 of the Curator's O Death collectibles (most only accessible via Turning Points after a first clear), finding all 10 of the Sleep Technician's video logs, finding every Secret, unlocking one and then every Character Destiny, messaging every crew member, and reaching the post-credits scene where Eisele exposes the cloning program with all six core characters alive.",
                "The catalog marks it difficulty 2, missable:true, and recommends 3 playthroughs - the branching structure means several achievements (the seatbelt survival, the suspect outcome, individual Character Destinies) are mutually exclusive with other paths in a single run, and some collectibles are only reachable via the Turning Point time-travel mechanic after finishing the story once."
            ]
        },
        {
            "heading": "Episodes & Early Choices",
            "body": [
                "Completing all 8 episodes, a Survivor-playstyle clear, finishing Episode 1, and an early outcome where the whole crew is killed.",
                "The achievements here: Cycle Complete (Completed all 8 episodes); Live with the Consequences (Completed the story on Survivor Playstyle); Wake-Up Crew (Completed Episode 1); Paint The Walls (Killed the whole crew)."
            ]
        },
        {
            "heading": "Secrets & Branching Choices",
            "body": [
                "14 hidden achievements: reaching the post-credits scene where Eisele exposes the cloning program with everyone alive, using a Turning Point to change your path, finding all 5 O Death collectibles and all 10 of the Sleep Technician's video logs, finding every Secret, unlocking one and then every Character Destiny, messaging every crew member, escaping Williams as Cernan uncaught, surviving the crash as Stafford, finding Carter's Utility Strap, approving the use of the gun, luring the Duplicate into the incinerator, and a specific coffee-room interaction.",
                "The achievements here: Humanitarian (Reach the end of Episode 8 with all six core characters alive and have Eisele stop the cycle.); Thumb on the Last Page (Use a Turning Point to change your path.); O Death (Find all 5 of the Curator's O Death collectibles (most only accessible via Turning Points after a first playthrough).); Dear Mum... (Find all 10 of the Sleep Technician's video logs to her mother.); No Stone Left Unturned (Find every Secret in the game.); Personality Manifest (Unlock a Character Destiny.); All Possible Futures (Unlock every Character Destiny.); Social Butterfly (Message every crew member using the communicator.); Not Today, Boss (Escape Williams as Cernan without being caught.); Always Wear a Seatbelt (Ensure Stafford survives the crash in Episode 3.); Lost and Found (Find Carter's Utility Strap.); Right to Bear Arms (Approve the use of the gun.); Organic Waste Disposal (Lure the Duplicate into the incinerator in Waste Management as Eisele.); Is This Decaf? (Trigger a specific coffee-related interaction in the crew areas.)."
            ]
        },
        {
            "heading": "Investigation & Consequences",
            "body": [
                "An unharmed experiment outcome, hacking Williams' computer, a standoff gone wrong, and the hidden Suspect Acquitted for following the right evidence chain to clear the accused crew member.",
                "The achievements here: This Steak's Raw (Mitchell and Anders survived the experiment unharmed); Password1 (Anders hacked into Williams' computer); Total Party Kill (The standoff at the scanner turned into a death spiral); Suspect Acquitted (Follow the correct evidence chain so suspicion shifts away from the accused crew member.)."
            ]
        },
        {
            "heading": "Endings & Aftermath",
            "body": [
                "Everyone passing the scanner safely, sending a warning or an SOS to the Andromeda, a no-losses run back to Bridge Ops, persuading Williams to reveal the truth, sending a second fuel-redirect team, a clean course home, and the hidden NDA Breaker for the same post-credits scene as the Humanitarian ending.",
                "The achievements here: Human After All (All crew members passed safely through the scanner); This is Not a Place of Honor (Young sent a warning to the Andromeda); Message in a Bottle (Young sent an SOS to the Andromeda); Stealth 100 (Returned to Bridge Ops without losing any characters); Cat's Out the Bag (Persuaded Williams to reveal the truth about the mission); We Have Reserves (Sent a second team down to redirect the fuel); Home Free (Charted a course for Earth without any intruders on board); NDA Breaker (Reach the post-credits scene where Eisele exposes the cloning program.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story once, banking the episode-completion and early-outcome achievements naturally.",
                "2. Use Turning Points on a second pass to catch collectibles and choices you missed the first time (O Death, the Sleep Technician's logs, every Secret).",
                "3. Deliberately aim for the Humanitarian/NDA Breaker ending on one run - keep all six core characters alive and let Eisele stop the cycle.",
                "4. Try the mutually-exclusive branch choices (the seatbelt survival, the suspect outcome, individual Character Destinies) across separate playthroughs.",
                "Tip: since several O Death collectibles only spawn after your first clear, don't worry about 100%-ing secrets on your first playthrough - focus on the story and major choices, then mop up collectibles with Turning Points afterward."
            ]
        }
    ]
};
