// Half-Life 2: Episode One Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/half-life-2-episode-one.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "half-life-2-episode-one-achievement-guide",
    "category": "game",
    "gameSlug": "half-life-2-episode-one",
    "icon": "🔫",
    "title": "Half-Life 2: Episode One Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Half-Life 2: Episode One - none are hidden. Covers the story-progress and escort achievements and the handful of optional combat challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Half-Life 2: Episode One has 13 Steam achievements and none of them are hidden. Nine are story progress and escort feats - reaching the bottom of the Citadel elevator, containing the Citadel core (and a Pacifist variant that requires doing it without killing any stalkers), the parking-garage elevator standoff, keeping every citizen alive on the way to the escape train, and escaping City 17. The other four are optional combat challenges: finish the whole game firing exactly one bullet, kill five enemies with a single energy ball, kill an Elite Soldier with his own energy ball, and light 15 zombies on fire with flares.",
                "Nothing is permanently missable thanks to chapter select, but The One Free Bullet (one bullet for the entire game) is realistically its own careful playthrough leaning on the Gravity Gun, crowbar and grenades. The escort and no-death feats can be retried per chapter.",
                "Tip: do a normal first run for the story and the easy combat feats, then a dedicated One Free Bullet run - the energy-ball and car-crusher feats can be knocked off during that run since they do not use bullets, so plan your route to cover them too."
            ]
        },
        {
            "heading": "Story Progress & Escort Feats",
            "body": [
                "Reaching the bottom of the Citadel's main elevator shaft, containing the Citadel core and the Pacifist (no stalker kills) variant, squashing 15 antlions with cars, surviving to the parking-garage elevator, helping Alyx snipe 30 enemies, destroying the hospital-attic gunship, escorting citizens to the escape train with no deaths, and escaping City 17 with Alyx.",
                "The achievements here: Watch Your Head! (Make it to the bottom of the Citadel's main elevator shaft in one piece.); Containment (Contain the Citadel core.); Pacifist (Contain the Citadel core without killing any stalkers.); Car Crusher (Use the cars to squash 15 antlions in Episode One.); Elevator Action (Survive long enough to get on the parking garage elevator.); Live Bait (Help Alyx snipe 30 enemies in Episode One.); Attica! (Destroy the gunship in the hospital attic.); Citizen Escort (Don't let any citizens die when escorting them to the escape train.); Escape From City 17 (Escape City 17 with Alyx.)."
            ]
        },
        {
            "heading": "Combat Challenges",
            "body": [
                "Finishing the game having fired exactly one bullet (grenade, crowbar, rocket and Gravity Gun kills allowed), killing five enemies with the same energy ball, killing an Elite Soldier with his own energy ball, and using flares to set 15 zombies on fire.",
                "The achievements here: The One Free Bullet (Finish the game firing exactly one bullet. Grenade, crowbar, rocket, and Gravity Gun kills are okay!); Conservationist (Kill five enemies with the same energy ball.); Think Fast! (Kill an Elite Soldier with his own energy ball.); Zombie-que (Use flares to light 15 zombies on fire.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a normal run for the story achievements (the elevator, Containment, Elevator Action, Citizen Escort, Escape From City 17) and Live Bait and Attica!.",
                "2. Do Car Crusher and Zombie-que during that run - they are just environmental kills in specific areas.",
                "3. Retry the Pacifist core containment and the no-death citizen escort via chapter select if you missed them.",
                "4. Do a dedicated One Free Bullet run, using the Gravity Gun, crowbar and grenades for everything and saving your single bullet for a spot where nothing else works.",
                "5. Pick up Conservationist and Think Fast! (the energy-ball feats) during the One Free Bullet run since they cost no bullets.",
                "Tip: for The One Free Bullet, the Gravity Gun handles almost every fight in Episode One - punt sawblades, radiators and explosive barrels, and you can often skip a bullet entirely by luring enemies into hazards or letting Alyx do the shooting."
            ]
        }
    ]
};
