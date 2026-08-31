// Gang Beasts Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/gang-beasts.json), whose 19 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   285900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "gang-beasts-achievement-guide",
    "category": "game",
    "gameSlug": "gang-beasts",
    "icon": "💢",
    "title": "Gang Beasts Achievement Guide",
    "summary": "A practical guide to all 19 Steam achievements in Gang Beasts - none are hidden. Covers the hazard escapes and stage feats, and the stage tricks and trucks-stage achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Gang Beasts has 19 Steam achievements and none are hidden. They are almost all 'do a specific thing on a specific stage' - escape the grinder, incinerator and water hazards, break the cables on the containers, elevators and gondola stages without falling, climb the buoy, pass the orange chute on the girders stage, and get inside or onto a truck on the trucks stage - plus a soccer shutout, a Waves-mode wave, diving kick and headbutt concussions, and customising a character.",
                "The catalog marks it difficulty 2 and a quick list. Nothing is hard; you just need to visit every stage and do its one thing, most easily in a private match with bots or a friend.",
                "Tip: run through every stage in a local match against dummies and tick off each stage's achievement one at a time."
            ]
        },
        {
            "heading": "Hazard Escapes & Stage Feats",
            "body": [
                "Escaping the grinder, defeating a Waves-mode wave, a diving-kick concussion, a soccer shutout, climbing to the top of the buoy, escaping the water on the buoy stage, breaking a container cable without falling, getting inside a shipping container, and breaking an elevator and a gondola cable without falling.",
                "The achievements here: Safety Warning (Escape from a grinder hazard on the grind stage); Short Wave (Defeat an enemy wave in the waves game mode); Drop Kick (Concuss an enemy with a diving kick); Shutout (Win a game of soccer without the opposition scoring in the soccer game mode); Buoy ‘o buoy (Climb to the highest section of the buoy on the buoy stage); Sea Legs (Escape from the water on the buoy stage); Special Delivery (Break the cables supporting a container without falling on the containers stage); Self Storage (Get inside a shipping container on the containers stage); Ground Floor (Break the cables supporting an elevator without falling on the elevators stage); Hang Tough (Break the cables supporting a gondola without falling on the gondola stage)."
            ]
        },
        {
            "heading": "Stage Tricks & Trucks",
            "body": [
                "A diving-headbutt concussion, passing the orange chute on the girders stage, escaping the incinerator, customising a character, colliding with the ring-stage seating and railings, passing three road signs on the trucks stage, breaking the stairs on the towers stage, and climbing onto and getting inside a truck.",
                "The achievements here: Big Head (Concuss an enemy with a diving headbutt); Bucket List (Pass through the orange chute on the girders stage); Roast Beef (Escape from the incinerator hazard on the incinerator stage); Welcome to Beef City (Customize a character on the character customization screen); Sit Down (Collide with the seating and the railings on the ring stage); Long Haul (Pass through three road signs on the trucks stage); Step Down (Break the stairs on the towers stage); Keep on Trucking (Climb onto the roof of a truck on the trucks stage); In Transit (Get inside a truck on the trucks stage)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a local match with bots or a friend so you can pick each stage in turn.",
                "2. On each stage, do its achievement: escape the hazard (grinder, incinerator, water), or break the cables without falling (containers, elevators, gondola).",
                "3. Do the trucks stage's three achievements (three road signs, onto a truck, inside a truck).",
                "4. Do the soccer shutout and a Waves-mode wave.",
                "5. Customise a character for 'Welcome to Beef City'.",
                "Tip: the 'break the cables without falling' achievements are easiest if you punch the cable from solid ground rather than while hanging from the object."
            ]
        }
    ]
};
