// Overcooked! 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/overcooked-2.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   728880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 1 hidden achievement ships no Steam description; its condition here is curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "overcooked-2-achievement-guide",
    "category": "game",
    "gameSlug": "overcooked-2",
    "icon": "🍳",
    "title": "Overcooked! 2 Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Overcooked! 2 - main campaign, general & party modes, dlc packs, hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Overcooked! 2 has 54 Steam achievements, 1 of them hidden. The backbone is 3-starring every world of the main campaign and each of the DLC packs; the rest are cumulative action counters (chop, wash, throw, catch) and a few one-offs.",
                "Nothing is missable and every level is replayable, so this is a skill grind rather than a checklist puzzle. The 3-star achievements for the later worlds and the harder DLC (Night of the Hangry Horde in particular) are the real difficulty, and are far easier with a partner.",
                "Tip: play the campaign co-op, replaying any world's levels until every one is 3 stars before moving on - the world-completion achievements need all levels in that world starred, and the counters (Chop 800, Wash 300, etc.) will be well on their way by the end."
            ]
        },
        {
            "heading": "Main Campaign",
            "body": [
                "The story-mode goals: completing the campaign, 1000 meals delivered, 3 stars on every level in Worlds 1 through 6, delivering every recipe type, completing a level in recipe order, and unlocking every chef.",
                "The achievements here: The Unbread (Complete the main story campaign); A Grand Dining Experience (Deliver 1000 Meals); Sous Chef (Get 3 stars on every level in World 4); Head Chef (Get 3 stars on every level in World 5); Executive Chef (Get 3 stars on every level in World 6); The Spice of Life (Deliver every type of meal in the game); Clockwork Kitchen (Complete a level by doing all the recipes in order); Kitchen Porter (Get 3 stars on every level in World 1); Commis Chef (Get 3 stars on every level in World 2); Chef de Partie (Get 3 stars on every level in World 3); Too Many Cooks (Unlock all the chefs)."
            ]
        },
        {
            "heading": "General & Party Modes",
            "body": [
                "The action counters and mode goals: 100 ingredients thrown into pots, 10 versus wins, extinguishing a burning kitchen, the tutorial, 15 Arcade and 15 versus games, 500 items thrown and 250 caught, 99 items binned, 300 plates washed, every emote used, 75 portal trips, 800 items chopped, and hitting every world-map switch.",
                "The achievements here: Hot Pot Shot (Throw 100 ingredients into a cooking pot); Battered! (Win 10 games in versus mode); If You Can't Stand the Heat (Extinguish a burning kitchen); And Suet Begins (Complete the tutorial level); Dinner Party Posse (Finish 15 Arcade games); It's A Cook-Off! (Finish 15 versus games); Toss Lightly (Throw 500 items); I Ain't No Butterfingers (Catch 250 items); Bangers And Trash (Put 99 items in the bin); Dishwasher (Wash 300 plates); It's Bean Emotional (Use every emote); Jelly-Porter (Go through portals 75 times); Get To The Chopper (Chop 800 items); Switch It Up (Hit all the switches on the world map)."
            ]
        },
        {
            "heading": "DLC Packs",
            "body": [
                "The downloadable content: Surf 'n' Turf, Campfire Cook Off, Night of the Hangry Horde and Carnival of Chaos - each with a full-3-star achievement, a per-world 3-star achievement, a deliver-every-recipe achievement, and one or two mechanic counters (water gun, bellows, wood, coal, guillotine, cannon, condiments).",
                "The achievements here: Surf 'n' Turf (Get 3 stars on all Surf 'n' Turf levels); You Got Served (Deliver every type of meal in Surf 'n' Turf); Smoothie Criminal (Get 3 stars on every level in Surf 'n' Turf World 1); Skewer Rat (Get 3 stars on every level in Surf 'n' Turf World 2); Carte Blanched (Get 3 stars on every level in Surf 'n' Turf World 3); Soaker Cola (Wash 150 dirty plates or glasses with the water gun); Heat and Greet (Use the Bellows on BBQs 500 times); Cooked Off! (Get 3 stars on all Campfire Cook Off levels); Full Mashings (Deliver every type of meal in Campfire Cook Off); S'more Than a Feeling (Get 3 stars on every level in Campfire Cook Off World 1); The Greasy Spoon (Get 3 stars on every level in Campfire Cook Off World 2); Specials Board (Get 3 stars on every level in Campfire Cook Off World 3); Tree Hater (Burn 300 pieces of wood); Backpack Hijack (Take 500 items from a backpack); You Shallot Pass! (Survive all horde stages in Night of the Hangry Horde with full kitchen health); Star Braiser (Get 3 stars on all Night of the Hangry Horde levels with a star rating); Get Roasted (Get 3 stars on every level in Night of the Hangry Horde World 1); Pie Me a River (Get 3 stars on every level in Night of the Hangry Horde World 2); Wrap Artist (Get 3 stars on every level in Night of the Hangry Horde World 3); Coal of Duty (Burn 300 buckets of coal in the furnace); Heads Will Roll (Chop 500 ingredients using the guillotine); Carnival of Chaos (Get 3 stars on all Carnival of Chaos levels); Fast Foodie (Deliver every type of meal in Carnival of Chaos); Mealer Dealer (Get 3 stars on every level in Carnival of Chaos World 1); The Breaded Lady (Get 3 stars on every level in Carnival of Chaos World 2); Big Topping (Get 3 stars on every level in Carnival of Chaos World 3); Cannoned Goods (Fire a Chef from a Cannon 100 times); Condiment Connoisseur (Add mustard or ketchup to a recipe 100 times)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "One achievement is hidden - the hidden-level clear:",
                "The achievements here: The Secret Ingredient (Get 3 stars on every hidden (Kevin) level in the game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign co-op, 3-starring every world before advancing (Kitchen Porter through Executive Chef).",
                "2. Deliver every recipe type and do the one-offs (recipe order, unlock all chefs, hit the map switches).",
                "3. Work through each DLC pack the same way - 3-star every world, deliver every recipe, hit its counter.",
                "4. Finish the hidden Kevin levels for The Secret Ingredient, and top off any action counters you are short on.",
                "Tip: the action-counter achievements (Chop 800, Wash 300, Throw 500) are fastest farmed on an early, calm level - ignore the timer and just repeat the action until the counter ticks over."
            ]
        }
    ]
};
