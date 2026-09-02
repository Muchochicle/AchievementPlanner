// ATOM RPG Trudograd Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/atom-rpg-trudograd.json), whose 32 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1139940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "atom-rpg-trudograd-achievement-guide",
    "category": "game",
    "gameSlug": "atom-rpg-trudograd",
    "icon": "☢️",
    "title": "ATOM RPG Trudograd Achievement Guide",
    "summary": "A practical guide to all 32 Steam achievements in ATOM RPG Trudograd (0 hidden). Every achievement carries Steam's own text - the arrival and story beats, the branching choice outcomes, the companion and quest results, and a set of secret-hunting and skill-check feats. Many are mutually exclusive per playthrough.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "ATOM RPG Trudograd has 32 Steam achievements, none hidden. This standalone sequel sends the ATOM agent into the surviving city of Trudograd as a nuclear threat looms. The achievements cover arriving in the city and reuniting with your old car, story and choice outcomes (some grim - a 'Baby Eater', a luck-based gamble, a goose sacrifice), companion and quest results, the drink-collecting and knife-riddle side content, and a set of skill-check and secret-hunting feats.",
                "There are no hidden achievements, but many are branching or one-window choices, so the descriptions here are the whole map of what to aim for.",
                "The catalog marks it difficulty 3 and two playthroughs - several outcome achievements are mutually exclusive, and the game rewards a strong-build second run."
            ]
        },
        {
            "heading": "Arrival & Story",
            "body": [
                "Reaching Trudograd, reuniting with your Central Wasteland car, and the main story and quest outcomes.",
                "The achievements here: Fresh Prince of Trudograd (The city welcomes you!); An Old Friend (Your car from the Central Wasteland stands in the outskirts of Trudograd.); Mysterious Knife (You solved the riddle of the stalker Igor knife.); Atomic Soda (You bought a glass of every Atom agent favorite drink!); Power of Simplicity (You had faith in your luck and stood by your words..!); Baby Eater (Yes, you really did eat a child. Or, at least, somebody thinks that you did…); Goose Sacrifice (You actively and successfully use your Luck. The goose death wasn’t in vain!); Holy Mountain (You died from a lethal dose of The Truth™.); Human Antidote (You survived the worst poisoning of your whole Atom career.); Viva La Revolution (You became a part-time revolutionary.); Freelance Police (You're temping as a freelance police officer.); Lot 49 (You opened a mysterious chest on Kolotushkin Street.); Memoirs of a Nibbler (You listened to all the haiku of a four-legged intellectual.); KGB Bunker (You’ve been contacted by the eponymous KGB bunker.); Shadow over Trudograd (You performed the ancient ritual and met guests from the depths…); Death of the Author (If the author is writing about you, then who is writing about the author?)."
            ]
        },
        {
            "heading": "Choices & Feats",
            "body": [
                "The branching choice outcomes, the companion and faction results, the drink and knife-riddle side content, and the skill-check and secret-hunting feats.",
                "The achievements here: Sick Freak (You performed such a heinous and convoluted act that… you deserve an achievement!); Escalation of Conflict (You turned a simple arrest into a real street battle.); Sixth Sense (You exorcised all the restless spectres that you met on your path.); Second Thought (You completed the cow mission, but then decided to bring her back.); Terrorist (You single-handedly signed Trudograd’s death warrant.); Walking Fortress (You maxed-out your special armor.); Fight Club (You became the ruling champion of the factory arena!); Incompetence (You showed a surprising lack of competence in completing a rather easy task in the city docks.); Rising Star (You won ten games of Bombagun, playing for money.); Albino Bloodsucker (You tracked and killed the albino bloodsucker.); Bronzovka (You learned something that you shouldn't have...); Admiral (Congratulations! You sank all the battleships!); Goodbye ATOM (After completing your mission you left the ATOM organization.); Household (You’ve built your own base.); Commando (You got Big Jug at your disposal.); The Great and Powerful (You’ve met Positronium in the flesh.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story into Trudograd, doing side content (find your old car, the knife riddle, buy every ATOM agent drink) as you settle in.",
                "2. Follow one consistent set of choices to an ending, noting which outcome achievements you locked in and which you skipped.",
                "3. Grab the skill-check feats your build allows (Luck gambles, dialogue outcomes) on this run.",
                "4. Do a second playthrough with a different build and the opposite choices for the mutually-exclusive outcome achievements.",
                "Tip: a Luck- and speech-heavy build unlocks the widest set of dialogue outcomes in one run - dump points into those on your first character and save the combat-focused feats for the stronger second run."
            ]
        }
    ]
};
