// Nour: Play with Your Food Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nour-play-with-your-food.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1141050 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nour-play-with-your-food-achievement-guide",
    "category": "game",
    "gameSlug": "nour-play-with-your-food",
    "icon": "🍜",
    "title": "Nour: Play with Your Food Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in Nour: Play with Your Food (0 hidden). Every achievement carries Steam's own text - the time-combo activations, the food-physics feats (ignite 100 objects, a million-dollar bill, get to space), and the small toy-box discoveries (pineapple on pizza, feed the Jellyfish every food, the boba straws).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nour: Play with Your Food has 29 Steam achievements, none hidden. It is a foodie physics toybox with no goals: you manipulate meals with combos, scale, wind, fire and time. The achievements cover the combo activations (slow time, speed time, silencing, diurnal, warp), the big feats (ignite 100 objects, a $1,000,000 dinner bill, get to space, microwave for 5 minutes, smallify/biggify 50 objects), and a long list of toy-box discoveries (salt popped popcorn, syrup on a buttered pancake, 15 straws in the boba cup, pineapple on pizza, feed the Jellyfish every food, dye a food every dropper colour).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; every scene is freely revisitable and there is no fail state."
            ]
        },
        {
            "heading": "Combos & Time",
            "body": [
                "The time and effect combos (slow time, speed time, silencing, diurnal, warp), the rhythm combo, and the wind gust.",
                "The achievements here: Take it Escargot (Activate the slow time combo 5 consecutive times); Fastest Food (Activate the speed time combo 5 consecutive times); Shhhhh (Activate the silencing combo); Combo! (Hit a rhythm combo); Starry Dominion (Activate the diurnal combo); Chef du Vent (Blow a gust of wind); WARP (Activate warp mode)."
            ]
        },
        {
            "heading": "Big Feats",
            "body": [
                "Ignite 100 objects, a $1,000,000 bill, get to space, microwave for 5 minutes, smallify and biggify 50 objects, smash 30 plates, explode all toasters, grind 10 objects in 30 seconds.",
                "The achievements here: Chef du Flambe (Ignite more than 100 objects); Sous Vide Vuitton (Rack up a dinner bill of $1,000,000); Catharsis (Smash 30 plates); Hamborger (Get to space); Just Zap It (Microwave foods for 5 minutes); Food for Gerbils (Smallify 50 food objects); Food for Giants (Biggify 50 food objects); Speed Grinder (Grind 10 objects within 30 seconds); Toast Hazard (Explode all Toasters)."
            ]
        },
        {
            "heading": "Toy-Box Discoveries",
            "body": [
                "The scene-specific one-offs: salt popped popcorn, syrup on a buttered pancake, 15 boba straws, chopsticks in the bowl, a food in every dropper colour, the tutorial, the egg maze, pineapple on pizza, feed the Jellyfish every food, enchant a single food, levitate a creation, the Jelly Thief, and discovering the hungry colours.",
                "The achievements here: Extra Salt (Salt popped popcorn); Ideal Breakfast (Pour syrup over a pancake with butter on it); Love to Share (Fit 15 straws in the boba cup); Thanks for the meal (Get both chopsticks in bowl); Taste the Rainbow (Have a food dyed for each available color in the dropper); Food is Over (Complete the tutorial); Egg Finesse (Complete the egg maze without breaking your first egg); Pineapple on pizza (Add a very controversial topping to your pizza); Cornucopia (Feed the Jellyfish every food); Precision Magician (Enchant a single food); Perfect Pitch (Levitate your creation); Jelly Thief (Witness The Jellyfish successfully steal a piece of your meal); Food is Back (Discover the colors that make you hungry)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial and play with each scene; the combo activations (slow/speed/silence/diurnal/warp) come quickly.",
                "2. Farm the big counters in any scene: ignite 100 objects, smash 30 plates, smallify/biggify 50, grind 10 in 30 seconds, microwave 5 minutes.",
                "3. Rack up a $1,000,000 bill and get to space (stack or launch food upward).",
                "4. Work the scene-specific discoveries with a checklist - the boba straws, the buttered-pancake syrup, pineapple on pizza, feeding the Jellyfish every food, the egg maze.",
                "Tip: 'Feed the Jellyfish every food' and 'a food in every dropper colour' are the two that need deliberate tracking - do them methodically in one sitting, ticking off each food/colour, rather than hoping to stumble through the whole list."
            ]
        }
    ]
};
