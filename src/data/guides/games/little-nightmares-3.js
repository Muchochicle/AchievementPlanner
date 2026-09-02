// Little Nightmares III Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/little-nightmares-3.json), whose 44 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1392860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary, except for a small number of
//   unreleased DLC placeholder slots explicitly flagged as such. Every
//   non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "little-nightmares-3-achievement-guide",
    "category": "game",
    "gameSlug": "little-nightmares-3",
    "icon": "🕶️",
    "title": "Little Nightmares III Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Little Nightmares III (13 hidden). 13 of the 44 are hidden - 7 are the chapter/character completion and co-op markers, researched from TheGamer's achievement guide; the last 6 (named literally 'DLC0201' through 'DLC0206' in Steam's own schema) are reserved for unreleased DLC content with no real name or unlock text published yet.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Little Nightmares III has 44 Steam achievements, 13 of them hidden. The visible track covers doll collectibles per chapter (5/5/10/5, plus all 25), interaction milestones (50 calls to your companion, 5 minutes of hand-holding, 50 wrench swings, 50 bow shots), and a long list of chapter-specific feats - surviving Monster Baby encounters and a last-second umbrella save in Chapter 1, shooting 11 of 14 crows, executing dolls and hugging every Nome in Chapter 3, running the piano-key hallway, a basketball delivery and candy-tossing in Chapter 2, destroying Geisha statues, a Chapter 4 sausage delivery, a carnival aiming game, and finding every ghost in Chapter 4.",
                "7 of the hidden achievements are the game's chapter and character completion markers: finishing Chapters 1 through 4 (Necoropolis, Candy Factory, Carnevale, Institute) one achievement per chapter, completing every chapter as Low or as Alone via chapter select, and Special Connection - the one achievement that requires online co-op, for finishing Chapter 4 with another player.",
                "The last 6 hidden achievements are literally named 'DLC0201' through 'DLC0206' in Steam's own schema - genuine placeholder slots for unreleased downloadable content with no real name or description published yet, the same pattern seen in some other live-supported games' pre-registered DLC achievements. The catalog marks it difficulty 2, missable:true, and recommends 2 playthroughs, since completing every chapter specifically as Low and specifically as Alone realistically needs a second pass via chapter select."
            ]
        },
        {
            "heading": "Completion & Chapters",
            "body": [
                "The full-completion achievement, and the hidden chapter/character markers - finishing Chapters 1 through 4 (Necoropolis, Candy Factory, Carnevale, Institute), completing every chapter as Low or as Alone via chapter select, and Special Connection for finishing Chapter 4 in online co-op.",
                "The achievements here: Mastery of The Spiral (Keep on turning); Child's Play (Complete Chapter 1: Necoropolis.); Unsupervised (Complete Chapter 2: Candy Factory.); Showstoppers (Complete Chapter 3: Carnevale.); Spiral Out (Complete Chapter 4: Institute.); Low-Spirited (Complete every chapter while playing as Low (chapter select allowed).); From Nowhere, With Love (Complete every chapter while playing as Alone (chapter select allowed).); Special Connection (Finish Chapter 4 with another player in online co-op.)."
            ]
        },
        {
            "heading": "Collectibles & Interactions",
            "body": [
                "Doll collectibles per chapter (5/5/10/5, and all 25 combined), 50 calls to your companion, 5 minutes of hand-holding, 50 wrench swings and bow shots, surviving Monster Baby encounters and a last-second umbrella save, shooting 11 of 14 crows, doll executions and hugging every Nome, the piano-key hallway, a basketball delivery, candy-tossing at Candy Weevils, destroying Geisha statues, a sausage delivery, a carnival aiming game, an automatic story-doll pickup, finding every ghost, surviving Chapter 4's boss interactions, and further chapter-specific feats.",
                "The achievements here: Toybox (Playtime's over now); Candy Shop (Sweets for my sweet); Token Gestures (You hit the jackpot); Filed Away (Nothing left in the medicine cabinet); Loose Threads (Little shapes of big things to come); Hello? (You can always call on me); Guiding Hands (We're connected, you and I); Spanner in the Works (I can be quite handy when I want to be); Bullseye (You gotta aim high); Peekaboo (There's a twinkle in that eye); The Windy City (Just don't open it indoors); Birdbrained (Always ruffling feathers); Capital Punishment (You're heading for a shock); Home Sweet Nome (Ready or not, here I come); Stay Tuned (Are you taking notes?); Light or Flight (Look on the bright side); Another One in the Bag (Nothing but net (profits)); Unsavory Delicacies (Rotting from the inside, delicious on the outside); Omnipresence (Far or near, she can make us fear); Delivery Feed (From store to (cage) door); Aim Low (and Alone) (Win a prize every time); Illuminating Experiences (The gift of second sight); Institutionalized (The Kids Aren't Alright); Hand-Eye Coordination (You've stayed at arm's length); Exit Stage Fright (Survive until the curtain call); Picture Perfect (A revealing experience); Just the Ticket (Keep your eye on the prize); Puppet Master (You didn't break a leg); Clean Up Your Act (You may need a raincoat); Shadow Puppets (Flash the mob)."
            ]
        },
        {
            "heading": "Upcoming DLC",
            "body": [
                "6 hidden achievement slots Steam lists with placeholder names ('DLC0201' through 'DLC0206') and no description - reserved for unreleased downloadable content with no public unlock criteria yet.",
                "The achievements here: DLC0201 (Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet.); DLC0202 (Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet.); DLC0203 (Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet.); DLC0204 (Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet.); DLC0205 (Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet.); DLC0206 (Reserved for unreleased DLC content; Steam has not published this achievement's real name or unlock criteria yet.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story once, collecting dolls and completing the chapter-specific feats (Monster Baby survival, crows, Nomes, Geisha statues, ghosts) as you go.",
                "2. Use chapter select afterward to clear every chapter specifically as Low, then again specifically as Alone.",
                "3. Find an online co-op partner for Special Connection, the one achievement that can't be earned solo.",
                "4. Mop up the interaction tallies (calls, hand-holding, wrench swings, bow shots) across your playthroughs rather than as a dedicated grind.",
                "5. The 6 'Upcoming DLC' achievements are not currently earnable - nothing to do until Bandai Namco ships that content and publishes real unlock text.",
                "Tip: 'Peekaboo' and 'Hand-Eye Coordination' both require a death-free run through their respective boss interactions in one attempt - if you die once, restart the encounter rather than continuing, since a single death disqualifies that attempt."
            ]
        }
    ]
};
