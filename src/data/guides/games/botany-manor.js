// Botany Manor Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/botany-manor.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1425350 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 22 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "botany-manor-achievement-guide",
    "category": "game",
    "gameSlug": "botany-manor",
    "icon": "🌷",
    "title": "Botany Manor Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Botany Manor (22 hidden). Twelve visible achievements are for growing each of the twelve plants; the two other visible ones are the ending and completing the Herbarium. The 22 hidden achievements are small manor secrets and one-off actions - described here by requirement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Botany Manor has 36 Steam achievements, 22 of them hidden. As retired botanist Arabella Greene in 1890s England, you work out the growing conditions for twelve forgotten plants from books, letters and objects around your house and grounds. The visible achievements are one per plant grown (Windmill Wort, Fulguria, Phoenix Of The Forest, Pixie Tears, Wolfglove, Sapphire Gloom, Nightfall, Brook Chalice, Cradle Fern, Springdance Shrub, Oscilette, Fool's Emerald), plus reaching the end of the game and completing every Herbarium page.",
                "The 22 hidden achievements are small manor secrets and one-off actions: flush the toilet, connect the pipes, find the priest hole and Grandmother's vault, pick a lock, fix the Orangery stairs, reach the top of the tower, cross the lilypads, play the harpsichord, tap SOS on the telegraph, find every rubber duck, and more.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable - the manor stays open after the ending for the ducks, the Herbarium and the secrets."
            ]
        },
        {
            "heading": "Growing the Plants",
            "body": [
                "One achievement for growing each of the twelve plants.",
                "The achievements here: Windmill Wort (Grow the Windmill Wort); Fulguria (Grow the Fulguria); Phoenix Of The Forest (Grow the Phoenix Of The Forest); Pixie Tears (Grow the Pixie Tears); Wolfglove (Grow the Wolfglove); Sapphire Gloom (Grow the Sapphire Gloom); Nightfall (Grow the Nightfall); Brook Chalice (Grow Brook Chalice); Cradle Fern (Grow the Cradle Fern); Springdance Shrub (Grow the Springdance Shrub); Oscilette (Grow the Oscilette); Fool's Emerald (Grow the Fool's Emerald)."
            ]
        },
        {
            "heading": "Completion",
            "body": [
                "Reaching the end of the game and completing every page of the Herbarium.",
                "The achievements here: The End (Reach the end of the game); Botanical Researcher (Complete every page in the Herbarium)."
            ]
        },
        {
            "heading": "Manor Secrets",
            "body": [
                "The 22 hidden one-off actions and secrets - the toilet, the pipes, the priest hole, the vault, the lock, the Orangery stairs, the tower, the lilypads, the harpsichord, the telegraph SOS, every rubber duck, and the rest.",
                "The achievements here: Clean and Tidy (Flush the toilet.); Who Needs A Plumber? (Solve the plumbing puzzle by connecting the pipes.); Boom (Trigger the bright flash while experimenting with the Fulguria.); History Sleuth (Find the hidden priest hole.); Grandmother's Vault (Open Grandmother's vault.); Lockpicker (Pick a lock.); Fixer Upper (Repair the broken stairs in the Orangery.); In The Bin (Tip a grown flower out into the bin.); Mountaineer (Reach the top of the tower.); Frogger (Cross the pond using the lilypads.); Crack (Crack open the Phoenix Of The Forest seed.); Quack Quack (Find a rubber duck.); Take A Break (Sit down on a chair.); Piano Woman (Play the harpsichord.); Let Me In! (Try (and fail) to open a locked door.); Quack Quack Quack Quack! (Find every rubber duck hidden around the manor.); Help? (Tap out 'SOS' on the telegraph.); Flower Arranging (Discover the flower-arranging room.); Taking A Nap (Sit on a bench for a long time.); Photographer (Take a picture of a plant.); Green Thumbs (Have several plants growing at the same time.); Art Lover (Take a close look at the artwork around the manor.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the puzzles, growing each of the twelve plants - the deductions are the core of the game and each grown plant is one achievement.",
                "2. As you explore each room, do the small secrets in it: flush the toilet, play the harpsichord, sit down, take pictures of plants, look closely at the art.",
                "3. Solve the environmental puzzles that gate areas (the pipes, the Orangery stairs, the lilypads, the tower) - these are hidden achievements as well as progress.",
                "4. Find every rubber duck (there are several hidden around the manor and grounds) for 'Quack Quack Quack Quack!'.",
                "5. After the ending, fill in every Herbarium page and tap SOS on the telegraph.",
                "Tip: the ducks and the Herbarium are the only real cleanup - keep a running note of which rooms you have swept for ducks, and check each plant's Herbarium page as you grow it so 'Botanical Researcher' does not need a second lap of the house."
            ]
        }
    ]
};
