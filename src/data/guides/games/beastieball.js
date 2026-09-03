// Beastieball Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/beastieball.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1864950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "beastieball-achievement-guide",
    "category": "game",
    "gameSlug": "beastieball",
    "icon": "🏐",
    "title": "Beastieball Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Beastieball (2 hidden). The two hidden achievements are defeating the Magic Moons team and reaching an ending. Everything else - becoming a Ranked Coach, defeating each rival team, the sponsorships, the 100-Beastie research goal, the King's-story beats, and the Tower / Draft / Expedition modes - carries Steam's own text (including one honest 'Early Access placeholder' achievement).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Beastieball has 27 Steam achievements, 2 of them hidden. It is a monster-taming game where battles are volleyball matches - you build a team of Beasties and coach them through a sports league. The visible achievements cover becoming a Ranked Coach, defeating each rival team (Raging Blazes, Mythic Dreamers, Golden Gods, Party Pirates, Wild Flowers, Hello Freaks, Silent Warriors), the two Staying Power Fitness sponsorships and a Platinum Sponsor, registering for the Crown Series, fully researching 100 Beasties, the King's-story relationship beats, and the extra modes (Tower Tourney, Super Tower 30-win streak, Draft Challenge 15-win streak, the Mountain Expedition roguelike, the Pickup Court, Rank Defense). One achievement is an explicit Early Access placeholder.",
                "The 2 hidden achievements are defeating the Magic Moons team and reaching an ending.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; the game is in Early Access, so the set may grow."
            ]
        },
        {
            "heading": "The League",
            "body": [
                "Becoming a Ranked Coach, defeating each rival team (including the hidden Magic Moons), the sponsorships, registering for the Crown Series, and the Early Access placeholder.",
                "The achievements here: Go Pro (Become a Ranked Coach); Raging Blazes (Defeat the Raging Blazes); Mythic Dreamers (Defeat the Mythic Dreamers); Golden Gods (Defeat the Golden Gods); Party Pirates (Defeat the Party Pirates); Wild Flowers (Defeat the Wild Flowers); Magic Moons (Defeat the Magic Moons team.); Hello Freaks (Defeat the Hello Freaks); Silent Warriors (Defeat the Silent Warriors); Platinum Sponsor (Get a Platinum Sponsor); Big Leagues (Register for the Crown Series); Staying Power (Get sponsored by Staying Power Fitness); [Early Access] (We're still working on the game. This is a placeholder for future achievements to be added.); You got Staying Power! (Get a gold-level sponsorship from Staying Power Fitness)."
            ]
        },
        {
            "heading": "Story & Modes",
            "body": [
                "The 100-Beastie research goal, the King's-story beats (a team name, learning from a genius, being interesting, becoming high-Ranked, the Barnes McBride rival), the ending, and the extra modes (Tower Tourney, Super Tower streak, Draft Challenge streak, the Mountain Expedition, the Pickup Court, Rank Defense).",
                "The achievements here: ACHIEVEMENT OF SHAME (Reach an ending of the game (a tongue-in-cheek 'achievement of shame').); Nobody Cares But OK Good Job! (Fully research 100 Beasties); Tower Tourney (Complete the Tower Tourney); A Real Team (Pick out a team name); King's Pet (Learn a thing or two from a genius); Now THAT'S Beastieball! (Be interesting); Straight to the Top! (Become high-Ranked); It's Canon! (Have a rival named Barnes McBride); Super Tower Tourney (Get a 30-win streak in the Super Tower Tourney); Draft Challenge (Get a 15-win streak in the Draft Challenge); Expedition Summit (Summit the Mountain Expedition); Street Wise (Get a streak of 5 or more in the Pickup Court); Rank Defender (Invite Rank Defense challengers and defeat all 3)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the league: become a Ranked Coach, then defeat each rival team as you climb - including the hidden Magic Moons.",
                "2. Follow the King's story for its relationship beats (name your team, the genius lessons, the Barnes McBride rival) and reach an ending.",
                "3. Get the two Staying Power Fitness sponsorships and a Platinum Sponsor, and register for the Crown Series.",
                "4. Grind the 100-Beastie research goal by fielding and scanning a wide variety of Beasties.",
                "5. Do the extra modes: the Tower Tourney, a 30-win Super Tower streak, a 15-win Draft Challenge streak, the Mountain Expedition, the Pickup Court, and Rank Defense.",
                "Tip: research 100 Beasties passively by rotating your roster - bring a different Beastie into each league match rather than maining a set six, and the research counter climbs while you also see more team match-ups."
            ]
        }
    ]
};
