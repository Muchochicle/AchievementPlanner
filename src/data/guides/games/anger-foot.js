// Anger Foot Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/anger-foot.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1978590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "anger-foot-achievement-guide",
    "category": "game",
    "gameSlug": "anger-foot",
    "icon": "👢",
    "title": "Anger Foot Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Anger Foot (2 hidden). Covers defeating all 4 gangs, collecting every shoe and star, and a long list of level-specific joke and secret achievements. Two of the achievements are hidden and their unlock conditions are researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Anger Foot has 30 Steam achievements and 2 are hidden. They cover unlocking every shoe, defeating the Violence, Pollution, Business and Debauchery gangs, earning every star, finishing a game of Broforce, finding 60 different skeletons, and a long list of level-specific joke achievements - shooting toast out of the air, dipping below 20 FPS with vending machines, destroying your own TV, kicking a ball into a dumpster, setting off fire extinguishers, and many more oddball interactions scattered across the game's levels. The two hidden achievements are the game's two mutually exclusive endings.",
                "The catalog marks it difficulty 3. Anger Foot is a fast, comedic kick-'em-up FPS; nothing here is especially hard, but the level-specific joke achievements are easy to miss without knowing where to look.",
                "Tip: the two ending achievements are mutually exclusive on a given save, so you'll need to replay the final scene (or use a separate save) to get both Movie Night and A New World."
            ]
        },
        {
            "heading": "Gangs, Endings & Completion",
            "body": [
                "Unlocking every shoe, defeating the Violence, Pollution, Business and Debauchery gangs, the two hidden mutually-exclusive endings, and earning every star.",
                "The achievements here: Sneaker Head (Unlock every shoe.); Peace Prevails (Defeat the Violence Gang.); Captain Planet (Defeat the Pollution Gang.); Bankruptcy (Defeat the Business Gang.); Prudish (Defeat the Debauchery Gang.); Movie Night (At the final choice, maintain the status quo - one of the game's two mutually exclusive endings.); A New World (At the final choice, end crime forever by kicking the shoes into the fire - one of the game's two mutually exclusive endings.); Completionist (Earn every star.)."
            ]
        },
        {
            "heading": "Early Level Secrets",
            "body": [
                "Finishing a game of Broforce, finding 60 different skeletons, turning the music up, being under the influence of three substances at once, shooting toast before it lands, dropping below 20 FPS with vending machines, destroying your own TV, kicking the ball into the dumpster, setting off every fire extinguisher, jumping into the Stairwell pool, and eradicating the pigeons in Smog Street.",
                "The achievements here: Brogress Quest (Finish a game of Broforce.); Rattle Me Bones (Find 60 different skeletons.); Thunderdome (Turn the music up.); Intervention Required (Be under the influence of three different substances at once.); Quick Draw (Shoot a slice of toast before it hits the ground.); Stress Test (Dip below 20 FPS by using vending machines.); I Prefer Books (Destroy your own TV in Homecoming.); Eye For Goal (Kick the ball into the dumpster in The Back-Alleys.); Fire Prevention (Set off all the fire extinguishers in Slum Life); Ponte Plunge (Jump into the pool at the bottom of The Stairwell.); Pest Control (Eradicate all the pidgeons in Smog Street.)."
            ]
        },
        {
            "heading": "Later Level Secrets",
            "body": [
                "Recycling a lizard, blowing up the barrels in Trash Mountain, releasing the tortured specimen, draining the water in A Fresh Start, lodging a complaint, finding the hidden intern, taking the escalator, critiquing the art, solving the sauce mystery, following the stripper poles, and taking a cheese bath.",
                "The achievements here: Reptilian Recycling (Recycle a lizard in Dumpster Town.); Couldn't Resist (Blow up the barrels in Trash Mountain.); Make It Stop (Release the tortured specimen in Green River Laboratory.); Unplugged (Drain the water in A Fresh Start.); Feedback Appreciated (Lodge a complaint in Office Space.); Hide And Seek (Find the hidden intern in Employee Wellness.); Defiance (Take the escalator In Upper Management.); Not Impressed (Critique the art in The Secret Entrance.); Where Do They Come From? (Solve the sauce mystery in The Pizza District.); Where Do They Go? (Follow the poles in The Clubs.); Fried And Battered (Take a cheese bath in The Cult of The Pig.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, defeating the Violence, Pollution, Business and Debauchery gangs.",
                "2. Along the way, look out for each level's joke achievements - shooting toast, destroying your TV, setting off extinguishers, feeding the tomato grinder, and more.",
                "3. Unlock every shoe and find all 60 skeletons and every star as you replay levels.",
                "4. Play a game of Broforce for its own achievement.",
                "5. At the ending, pick one choice for Movie Night or A New World, then replay the final scene (or use a separate save) for the other.",
                "Tip: most of the level-specific joke achievements are easy to blow past without noticing - a collectibles/secrets guide pass after your first clear catches nearly all of them at once."
            ]
        }
    ]
};
