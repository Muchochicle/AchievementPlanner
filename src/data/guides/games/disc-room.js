// Disc Room Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/disc-room.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1229580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "disc-room-achievement-guide",
    "category": "game",
    "gameSlug": "disc-room",
    "icon": "🥏",
    "title": "Disc Room Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Disc Room - none are hidden. Covers the gatekeepers and golden rooms, the hard mode, survival and exploration achievements, and the abilities, secrets and antics achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Disc Room has 35 Steam achievements and none are hidden. Ten cover the five gatekeeper bosses (from the Armored to the Ultimate Gatekeeper) and the four golden rooms plus 'the golden mystery'. Thirteen are hard mode, survival and exploration (start and complete Hard Mode, walk 10,000 steps, survive 60 seconds in a room, survive 20 seconds in every room, explore all rooms including the hard and '????' ones). The last twelve are unlocking all six abilities, the 'MULTITASKER' Ultimate kill using every ability, and a set of secret and antic achievements ('SPAWN KILL', 'RAGEQUIT', 'THE WALLS HAVE EYES').",
                "The catalog marks it difficulty 4. 'I AM THE ZONE' (20 seconds in every room), the Ultimate Gatekeeper, Hard Mode and 'MULTITASKER' are the skill walls; the rest come with exploring and dying a lot.",
                "Tip: explore every room and beat the gatekeepers in order, then chase the survive-in-every-room achievements and finish with Hard Mode and 'MULTITASKER'."
            ]
        },
        {
            "heading": "Gatekeepers & Golden Rooms",
            "body": [
                "Defeating the Armored, Overgrown, Carnivorous, Phantom and Ultimate Gatekeepers, discovering the four golden rooms, and uncovering the golden mystery.",
                "The achievements here: STRONG SCIENCE (DEFEAT THE ARMORED GATEKEEPER); VIOLENT NATURE (DEFEAT THE OVERGROWN GATEKEEPER); CELESTIAL BODY (DEFEAT THE CARNIVOROUS GATEKEEPER); PITCH BLACK (DEFEAT THE PHANTOM GATEKEEPER); BIG BANG (DEFEAT THE ULTIMATE GATEKEEPER); GOLD I (DISCOVER THE FIRST GOLDEN ROOM); GOLD II (DISCOVER THE SECOND GOLDEN ROOM); GOLD III (DISCOVER THE THIRD GOLDEN ROOM); GOLD IV (DISCOVER THE FOURTH GOLDEN ROOM); VOYAGER (UNCOVER THE GOLDEN MYSTERY)."
            ]
        },
        {
            "heading": "Hard Mode, Survival & Exploration",
            "body": [
                "Starting and completing Hard Mode, walking 10,000 steps, surviving 60 seconds in a room and 20 seconds in a hard room, dying from every disc in a zone and from every disc overall, exploring all rooms, all hard rooms and all '????' rooms, and surviving 20 seconds in every room in a zone and in every room, and 10 seconds in every hard room.",
                "The achievements here: AGAIN (START HARD MODE); I CAME I SAWED I CONQUERED (COMPLETE HARD MODE); WHO’S COUNTING?  (WALK 10K STEPS); MINIT (SURVIVE 60 SECONDS IN ANY ROOM); HIGH HELL (SURVIVE 20 SECONDS IN ANY HARD ROOM); LET IT RIP (DIE FROM ALL DISCS IN ONE ZONE); GOTTA CATCH 'EM ALL (DIE FROM ALL DISCS); EXPLORER I (EXPLORE ALL ROOMS); EXPLORER II (EXPLORE ALL HARD ROOMS); PIONEER (EXPLORE ALL ???? ROOMS); IN THE ZONE (SURVIVE 20 SECONDS IN EVERY ROOM IN ONE ZONE); I AM THE ZONE (SURVIVE 20 SECONDS IN EVERY ROOM); I AM THE DISC (SURVIVE 10 SECONDS IN EVERY HARD ROOM)."
            ]
        },
        {
            "heading": "Abilities, Secrets & Antics",
            "body": [
                "Following the path, the 'MULTITASKER' Ultimate Gatekeeper kill using every ability, dying from four discs in one life, unlocking all six abilities, holding fast-forward for 10 seconds, reviving an antibody, ending a run from the map, and the '????' secrets, 'THE WALLS HAVE EYES', 'SPAWN KILL' and 'RAGEQUIT'.",
                "The achievements here: ENIGMA (FOLLOW THE PATH); MULTITASKER (DEFEAT THE ULTIMATE GATEKEEPER USING EVERY ABILITY); MULTICASKET (DIE FROM 4 DIFFERENT DISCS IN ONE LIFE); POWER SURGE (UNLOCK ALL 6 ABILITIES); SPEED DEMON (HOLD DOWN FFW FOR 10 SECONDS STRAIGHT); SKELETON REVIVAL (DEFEAT AND REVIVE AN ANTIBODY); TELEPORTER ACCIDENT (END A RUN FROM THE MAP); THERE’S ENOUGH FOR EVERYBODY (FEED ???? 4 ????); FLOORED (???? THE ????); THE WALLS HAVE EYES (FACE THE GOLDEN CARCASS); SPAWN KILL (SURVIVE 0 SECONDS OR LESS); RAGEQUIT (QUIT TO MAIN MENU WITHIN 2 SECONDS AFTER DYING)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore every room, unlocking abilities and dying to as many discs as you can along the way.",
                "2. Defeat the five gatekeepers in order (Armored, Overgrown, Carnivorous, Phantom, Ultimate).",
                "3. Find the four golden rooms and uncover the golden mystery ('VOYAGER').",
                "4. Do the survival achievements: 60 seconds in a room, then 20 seconds in every room.",
                "5. Finish with Hard Mode (start and complete) and 'MULTITASKER' (Ultimate Gatekeeper using every ability).",
                "Tip: 'I AM THE ZONE' (20 seconds in every room) is the biggest grind - use the ability best suited to each room (Slow Motion for dense rooms, Dash for chase rooms) and tick them off one at a time from the map."
            ]
        }
    ]
};
