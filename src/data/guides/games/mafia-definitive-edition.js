// Mafia: Definitive Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mafia-definitive-edition.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1030840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 1 hidden achievement ships no Steam description; its condition here is curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "mafia-definitive-edition-achievement-guide",
    "category": "game",
    "gameSlug": "mafia-definitive-edition",
    "icon": "🎩",
    "title": "Mafia: Definitive Edition Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Mafia: Definitive Edition - story missions, difficulty & race, police & driving, garage & collectibles, hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mafia: Definitive Edition has 43 Steam achievements, 1 of them hidden. The list is one achievement per story mission (20 of them), the difficulty clears, a set of police and driving feats, and the collectible sweeps (magazines, cigarette cards, hidden cars, Mystery Foxes).",
                "One achievement is genuinely missable: Not Classy must be done at a specific point in Chapter 5, and there is no difficulty requirement for it. Made Man requires a full run on Classic difficulty, so plan whether to do that on your first or a second playthrough. Collectibles can be cleaned up in Free Ride mode.",
                "Tip: play the story once on any difficulty, taking the Blue Tropics detour in Chapter 5 for Not Classy and using a collectible guide; then do a Classic-difficulty run for Made Man, or a Free Ride cleanup if you got everything else."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "One achievement per mission, described by name only - A Chase through the Night, The Back Streets of Little Italy, The Way this City Works, Gangs of Lost Heaven, Neighborhood Hero, Good Night for a Walk Anyways, Storm Cloud over Chinatown, Murder in the House of God, Your Canuck Cousins, Rat in the House, Blood on Beech Hill, Best Laid Plans, The Day the War Began, Death on the Water, When God Stops Smiling, The Day the War Ended, A View from the Top, Into the Lion's Den, That Last Big Score and Friends and Family.",
                "The achievements here: A Chase through the Night (Completed \"An Offer You Can't Refuse\"); The Back Streets of Little Italy (Completed \"Running Man\"); The Way this City Works (Completed \"Molotov Party\"); Gangs of Lost Heaven (Completed \"Ordinary Routine\"); Neighborhood Hero (Completed \"Fair Play\"); Good Night for a Walk Anyways (Completed \"Sarah\"); Storm Cloud over Chinatown (Completed \"Better Get Used to It\"); Murder in the House of God (Completed \"The Saint and the Sinner\"); Your Canuck Cousins (Completed \"A Trip to the Country\"); Rat in the House (Completed \"Omerta\"); Blood on Beech Hill (Completed \"Visiting Rich People\"); Best Laid Plans (Completed \"Great Deal\"); The Day the War Began (Completed \"Bon Appétit\"); Death on the Water (Completed \"Happy Birthday\"); When God Stops Smiling (Completed \"You Lucky ...\"); The Day the War Ended (Completed \"Crème de la Crème\"); A View from the Top (Completed \"Election Campaign\"); Into the Lion's Den (Completed \"Just For Relaxation\"); That Last Big Score (Completed \"Moonlighting\"); Friends and Family (Completed \"The Death of Art\")."
            ]
        },
        {
            "heading": "Difficulty & Race",
            "body": [
                "Completing the game on Easy/Medium/Hard (A Life of Crime), winning the race in Chapter 5 (Supercharged), and completing the game on Classic difficulty (Made Man).",
                "The achievements here: A Life of Crime (Completed the game on Easy, Medium, or Hard difficulty); Supercharged (Won the race); Made Man (Completed the game on Classic difficulty)."
            ]
        },
        {
            "heading": "Police & Driving",
            "body": [
                "The Lost Heaven feats: paying a police fine, resisting arrest, losing the cops after a five-star chase, lockpicking 5 street cars, reaching 50 mph in the Bolt Ace, and a 3-second wheelie.",
                "The achievements here: Lined Pockets (Paid a fine to the Lost Heaven Police Department); Not Taken In (Resisted arrest by the Lost Heaven Police Department); Heat from the Cops (Lost the cops after accruing a five star police chase); Car Enthusiast (Lockpicked 5 cars on the streets of Lost Heaven and environs); That Motor can Move (Reached 50mph while driving the Bolt Ace); Stunt Rider (Performed a wheelie for 3 seconds)."
            ]
        },
        {
            "heading": "Garage & Collectibles",
            "body": [
                "Collecting 15 and 30 vehicles in the Garage, and the collectible sets: Pulp Magazines, Gangsters Monthly, 'Gangsters of the United States' cigarette cards, hidden cars and Mystery Foxes (one and all of each), plus The Whole Story for completing the Collection.",
                "The achievements here: Quite the Collection (Collected 15 vehicles in the Garage); Motor Museum (Collected 30 vehicles in the Garage); Pulp Fiction (Found a Pulp Magazine); Lending Library (Found all Pulp Magazines); Comic Violence (Found a copy of Gangsters Monthly); Picture Book Connoisseur (Found all copies of Gangsters Monthly); Family History (Found a 'Gangsters of the United States' cigarette card); Full Set (Found all 'Gangsters of the United States' cigarette cards); On the Trail (Found a hidden car); Car Thief Number One (Found all of the hidden cars); Mystery Fox Discovered (Found a Mystery Fox); Mystery Fox Domination (Found all Mystery Foxes); The Whole Story (Completed the Collection)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "One achievement is hidden - a missable Chapter 5 detour:",
                "The achievements here: Not Classy (In Chapter 5 \"Fair Play\", after winning the race, drive Paulie to the Blue Tropics gentlemen's club instead of taking him home (missable - taking him home ends the chapter).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story on a comfortable difficulty. In Chapter 5, after the race, take Paulie to the Blue Tropics for Not Classy rather than driving him home.",
                "2. Grab the police and driving feats during free-roam segments (fine, resist arrest, five-star escape, wheelie, Bolt Ace speed).",
                "3. Use Free Ride and a collectible guide to finish the magazines, cards, hidden cars and Mystery Foxes, then The Whole Story unlocks.",
                "4. Do a Classic-difficulty run for Made Man - combat is much deadlier and cars handle realistically, so take it slow.",
                "Tip: Not Classy is the only true miss - if you drive Paulie home in Chapter 5 you must replay the whole chapter, so make the Blue Tropics detour the moment the objective to find Paulie appears."
            ]
        }
    ]
};
