// Resident Evil Village Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/resident-evil-village.json), whose 56
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1196590 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). 41 of
//   56 ship a real, official Steam description, quoted verbatim below.
// - The 15 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against PowerPyx, a
//   Steam Community 100% guide and the Resident Evil Wiki, and kept
//   spoiler-light (boss/act names, mode names and restriction rules
//   only).
export const GUIDE = {
    "slug": "resident-evil-village-achievement-guide",
    "category": "game",
    "gameSlug": "resident-evil-village",
    "icon": "🐺",
    "title": "Resident Evil Village Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in Resident Evil Village - the story and boss markers, the village and combat feats, the collectible full-clears, the difficulty and restrictive challenge runs, and The Mercenaries plus the Winters' Expansion (Shadows of Rose, Additional Orders). 15 achievements are hidden and covered with spoiler-light conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Resident Evil Village has 56 Steam achievements, 15 of them hidden. A full completion needs the story on every difficulty up to Village of Shadows, a sub-3-hour run, a low-spending run, a knife-only run, all collectibles, S ranks on every Mercenaries stage, and the Winters' Expansion content (Shadows of Rose on Hardcore, the Additional Orders extra stages).",
                "Nothing is permanently missable across a save - the story and modes replay, and New Game+ carries weapons and Lei - but several achievements are per-run, and Village of Shadows only unlocks after a first clear.",
                "Tip: play a blind Standard run first, then buy every weapon and upgrade and do a New Game+ run that is simultaneously sub-3-hours, under 10,000 Lei spent and knife-only for the mandatory-fight exceptions - and start Village of Shadows only once you are comfortable, since it is a large difficulty jump."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "The unmissable markers and boss kills - the opening Lycan attack, the ceremony of the four Lords, Lady Dimitrescu, House Beneviento, Moreau, Uriaș, the Giant's Chalice, Heisenberg and the finale.",
                "The achievements here: Not Lycan This... (Story: survive the opening Lycan attack in the village.); Four Lords (Story: reach the ceremony where Mother Miranda and the four Lords appear.); That Sucked! (Boss: defeat Lady Dimitrescu (Castle Dimitrescu).); Got No Strings (Boss: escape House Beneviento by overcoming Donna Beneviento and the doll Angie.); Fish Out of Water (Boss: defeat Salvatore Moreau (the Reservoir).); Up Urs! (Mini-boss: defeat the giant Lycan Uriaș at the Stronghold.); Temporary Measures (Story: place the Giant's Chalice at the ceremony site (Stronghold).); Iron Giant Down (Boss: defeat Karl Heisenberg (the Factory).); The Root of the Matter (Story: reach the game's final confrontation.)."
            ]
        },
        {
            "heading": "Village & Combat Feats",
            "body": [
                "The one-time feats: crafting, buying from the Duke, lockpicking, repairing a treasure, hunting, solving a Labyrinth, the prologue ball, shooting crows, the guard-push, a sniper long shot, a three-enemy hit, burning a Moroaică, knocking a flaming arrow from the air, the Vârcolac Alfa, the New Game+ Uriaș kill, Photo Mode and the Lucky Number 7 cash amount.",
                "The achievements here: Crafter (Craft an item in the Crafting menu.); Patron (Purchase something from the Duke in the story.); Petty Thief (Unlock a simple lock with a lockpick.); Repairer (Combine a treasure into its complete form.); Hunter (Hunt an animal during the story.); Get the Ball Rolling (Solve a Labyrinth.); Goooaaal! (In the prologue, move the ball from the Winters' bedroom into the study.); Squawk Shot (Shoot down five flying crows in the story.); Push Comes to Shove (Push away an enemy after guarding in the story.); Trick Shot (Defeat an enemy from long range with the sniper rifle in the story.); Strategist (Defeat at least three enemies with one attack in the story.); Medium Rare (Set fire to a Moroaică in the story.); Fast Reflexes (Knock a flaming arrow out of the sky with a close combat weapon in the story.); Leader of the Pack (Take down the Vârcolac Alfa in the story.); Timber (Defeat Uriaș during the very first Lycan ambush on entering the village (realistically needs a strong New Game+ weapon).); Photographer (Use Photo Mode.); Lucky Number 7 (Have 777, 7,777, or 77,777 Lei in your possession in the story.)."
            ]
        },
        {
            "heading": "Collectibles & Full Clears",
            "body": [
                "The 100% clears: every outhouse door, every window in Castle Dimitrescu, the hanging Soldat, the completed village map, the Goats of Warding (one and all), every gun's customizable parts, every crafted item type, every recipe, and every file, plus the model and concept-art galleries.",
                "The achievements here: When You Gotta Go... (Open the door to every outhouse in the village in a single playthrough.); Hooligan (Break every breakable window in Castle Dimitrescu in a single playthrough.); Quit Hanging Around (Shoot down a Soldat hanging from the production line in the Factory.); Mapmatician (Complete the village map.); Cynic (Destroy a Goat of Warding.); Heretic (Destroy all the Goats of Warding.); Gunsmith (Equip a gun with a customizable part.); Veteran Gunsmith (Equip every gun with their customizable parts in the story.); Tinkerer (Create every type of item available in the Crafting menu.); Artisan (Collect every crafting recipe.); Bookworm (Read every single file in the story.); Doll Collector (View all character and weapon models.); Art Collector (View all concept art.)."
            ]
        },
        {
            "heading": "Difficulty & Challenge Runs",
            "body": [
                "The difficulty ladder (Casual, Standard, Hardcore, Village of Shadows) and the restrictive runs: Dashing Dad (under 3 hours), Frugal Father (under 10,000 Lei spent), Don't Trust That Snake Oil (four or fewer recovery items) and Knives Out (knife only).",
                "The achievements here: Great Dad (Finish the story on at least Casual difficulty.); Best Dad Ever (Finish the story on at least Standard difficulty.); World's Best Dad (Finish the story on at least Hardcore difficulty.); Universe's Best Dad (Finish the story on the Village of Shadows difficulty.); Don't Trust That Snake Oil (Finish the story using four or fewer recovery items.); Dashing Dad (Finish the story within 3 hours.); Frugal Father (Finish the story without spending more than 10,000 Lei.); Knives Out (Finish the story using only the knife (excluding mandatory boss sections).)."
            ]
        },
        {
            "heading": "The Mercenaries, DLC & Additional Orders",
            "body": [
                "The Mercenaries mode (a 30+ combo, S rank on every stage), the Winters' Expansion story mode Shadows of Rose (Casual, Standard, Hardcore, its crafting, and It's Starting to Grow on Me), and the Additional Orders extra stages (Bloody Village, Bloody River).",
                "The achievements here: Combo King (Get a combo of at least 30 during The Mercenaries.); Legendary Cowboy (Achieve at least an S Rank on all stages in The Mercenaries.); Green Teen (Finish Shadows of Rose on at least Casual difficulty.); Serene Teen (Finish Shadows of Rose on at least Standard difficulty.); Supreme Teen (Finish Shadows of Rose on Hardcore difficulty.); It's Starting to Grow on Me (Shadows of Rose (DLC): use Rose's mutamycete power at least 20 times.); Craftsmaster (Craft every type of item in Shadows of Rose.); Village of Blood (Complete the Bloody Village in Additional Orders.); River of Blood (Complete the Bloody River in Additional Orders.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Blind Standard run for the story, bosses, most village feats and the collectibles you can grab in one pass.",
                "2. Buy every weapon and its parts, then a New Game+ run that is Dashing Dad + Frugal Father + Don't Trust That Snake Oil + Knives Out at once (use New Game+ power to survive the mandatory fights), also finishing Mapmatician, Heretic, the galleries and Lucky Number 7.",
                "3. Start Village of Shadows once comfortable for Universe's Best Dad - New Game+ gear makes it far more manageable.",
                "4. Grind The Mercenaries for Combo King and Legendary Cowboy.",
                "5. Do the Winters' Expansion: Shadows of Rose up to Hardcore with It's Starting to Grow on Me and Craftsmaster, then Additional Orders for Village of Blood and River of Blood.",
                "Tip: Timber (killing Uriaș during the first ambush) is by far the easiest on New Game+ with a fully upgraded Magnum - do it on the same run you are doing the other challenge conditions."
            ]
        }
    ]
};
