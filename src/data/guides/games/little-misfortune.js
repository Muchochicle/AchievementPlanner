// Little Misfortune Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/little-misfortune.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   714120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "little-misfortune-achievement-guide",
    "category": "game",
    "gameSlug": "little-misfortune",
    "icon": "🎪",
    "title": "Little Misfortune Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Little Misfortune - none are hidden. Covers minigames, collectibles, story choices and secrets found while exploring the game's world with Little Misfortune. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Little Misfortune has 35 Steam achievements and none are hidden. They cover minigames and skill feats (whacking the fox, riding the Twister until you puke, kicking the can 3 times, scoring high in the Club, sneaking past the Janitor, hitting the alarm as a Sniper), collectibles (buying everything, finding all 9 Hay Dolls, uncovering all Sparkles and Runestones, winning all reward tickets), story choices (fixing or not fixing the vase, burying Rodrigo, giving Mommy the Eternal Happiness), and small world interactions (learning the Puppy's name, feeding the birds, painting all the pages, reading your fortune cookie).",
                "The catalog marks it difficulty 2. Little Misfortune is a dark, whimsical point-and-click adventure; a few achievements (like the vase choice) are mutually exclusive per playthrough, so getting every achievement needs more than one run.",
                "Tip: 'The Cause' and 'The Effect' are opposite choices about the vase - you'll need a second playthrough (or a well-placed save) to get both."
            ]
        },
        {
            "heading": "Minigames & Skill Feats",
            "body": [
                "Buying everything, meeting the Kraken, whacking the fox, riding all the rides, digging all graves, sneaking past the Janitor, scoring high in the Club, riding the Twister until you puke, kicking the can 3 times, and uncovering all Sparkles.",
                "The achievements here: Rich Lady (Buy everything ); The Kraken (Met the Kraken ); Fox Whacker (Whack the fox); The Returner (Ride all rides); Tomb Lady (Dig all graves); Ninja Lady (Sneak past The Janitor); Dance Master (Score high in the Club); Too Much Rolling (Ride the Twister until you puke); Can Kicker (Kick the can 3 times); Sparkling Lady (Uncover all Sparkles)."
            ]
        },
        {
            "heading": "Collectibles",
            "body": [
                "Learning the Puppy's name, winning all reward tickets, burying Rodrigo, getting all your fortunes told, sparkling 50 times, seeing all Runestones, winning the game, and finding all 9 Hay Dolls.",
                "The achievements here: Lil' Cutie (Learn the name of the Puppy); Gamer (Win all reward tickets); Rotten Fish (Bury Rodrigo ); Fortune Teller (Get all your fortunes told); Manual Sparkle (Sparkle 50 times); Runestones (See all Runestones); Somewhere Else (Win the game); Hay Doll #1 (Find the doll #1 ); Hay Doll #2 (Find the doll #2); Hay Doll #3 (Find the doll #3); Hay Doll #4 (Find the doll #4); Hay Doll #5 (Find the doll #5); Hay Doll #6 (Find the doll #6); Hay Doll #7 (Find the doll #7); Hay Doll #8 (Find the doll #8); Hay Doll #9 (Find the doll #9)."
            ]
        },
        {
            "heading": "Story Choices & World Details",
            "body": [
                "Feeding the birds, dancing the entire song, fixing the vase, not fixing the vase, reading your fortune cookie, giving Lil' Cutie a treat, hitting the alarm as a Sniper, painting all the pages, and giving Mommy the Eternal Happiness.",
                "The achievements here: Feeder (Feed the birds); Music 4 Ever (Dance the entire song); The Cause (Fix the vase); The Effect (Don't fix the vase); The Fortune (Read your fortune cookie); Doggy Treat (Give Lil' Cutie a treat!); Sniper (Hit the alarm!); Painter (Paint all the pages); Eternal Happiness (Give Mommy the Eternal Happiness)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, exploring thoroughly and trying every minigame you find - Fox Whacker, the Twister, the Club dance, and more.",
                "2. Collect everything as you go - all 9 Hay Dolls, all Sparkles and Runestones, and every reward ticket.",
                "3. Make story choices deliberately - fix or don't fix the vase, bury Rodrigo, and give Mommy the Eternal Happiness.",
                "4. Interact with the small world details - feed the birds, learn the Puppy's name, paint every page, and read your fortune cookie.",
                "5. Replay the vase choice on a second run (or from a save) to pick up whichever of The Cause / The Effect you missed.",
                "Tip: the vase choice is the only real mutually-exclusive pair here - everything else can realistically be picked up in one thorough playthrough."
            ]
        }
    ]
};
