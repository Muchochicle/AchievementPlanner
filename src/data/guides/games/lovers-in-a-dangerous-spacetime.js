// Lovers in a Dangerous Spacetime Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/lovers-in-a-dangerous-spacetime.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   252110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "lovers-in-a-dangerous-spacetime-achievement-guide",
    "category": "game",
    "gameSlug": "lovers-in-a-dangerous-spacetime",
    "icon": "🚀",
    "title": "Lovers in a Dangerous Spacetime Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Lovers in a Dangerous Spacetime (0 hidden). Every achievement carries Steam's own text - the campaign and boss clears, the special no-damage boss takedowns, and the crew-coordination and skill feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Lovers in a Dangerous Spacetime has 28 Steam achievements, none hidden. One or two players (or a player and an AI space-pet) run around the inside of a neon battleship, jumping between gun turrets, shields, engines and the map station to survive. The achievements cover finishing levels in one- and two-player mode, defeating the four bosses (Ursa Major, Cetus, Orion, King Cepheus), the harder 'special' versions of each boss fight, rescuing every captured friend, and a spread of coordination and skill feats (no-damage level, no crossing paths, full gem slots, a campaign with no gems, one of each ship badge).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 3 (several feats are demanding, especially solo) and single-playthrough. Nothing is missable; you can replay any level and boss freely for the challenge achievements."
            ]
        },
        {
            "heading": "Campaign & Bosses",
            "body": [
                "The tutorial, one- and two-player level clears, the four boss defeats, and rescuing every captured friend.",
                "The achievements here: Romantic Getaway (Finish the tutorial.); First Date (Beat any level in two player mode.); Space-man's Best Friend (Beat any level with the help of your trusty space-pet.); Bear-Knuckle Boxing (Defeat Ursa Major.); Wave Goodbye (Defeat Cetus.); Belt It Out (Defeat Orion.); Love Has Prevailed (Defeat King Cepheus.); All Creatures Great and Small (Rescue every captured friend.)."
            ]
        },
        {
            "heading": "Boss Challenges",
            "body": [
                "The special versions of each boss fight - Ursa Major with no punch taken, Cetus with its head underwater, Orion finished with a solar flare, King Cepheus fully unshielded - and using three Yamato weapon types in one boss fight.",
                "The achievements here: Fight With Care, Bear (Defeat Ursa Major without taking a punch.); Underwater Expedition (Defeat Cetus while its head is underwater.); SPF 1000 (Deliver the final blow to Orion using a solar flare.); Exposed (Remove all of King Cepheus's shields.); The Spice of Life (Use three different types of Yamato weapons in a boss fight.)."
            ]
        },
        {
            "heading": "Skill Feats",
            "body": [
                "Fog-of-war clears, a no-damage level, no crossing paths, a fully gem-slotted ship, a no-gems campaign, one of each ship badge, and the many one-off feats (pirouettes, generosity, white-dwarf escape, security-gun kills, missile collisions).",
                "The achievements here: Clearing the Air (Finish a level after removing all fog of war.); Perfect Date (Finish a level without taking damage.); Cooties (Finish a level without crossing paths with your partner.); Dressed to the Nines (Fill up all gem slots in a fully upgraded ship.); Love Is All You Need (Play through a campaign without using any gems.); Token of Affection (Earn one of each type of ship badge.); Seat Warmer (Use every station in a single level.); Couples Dance Lessons (Pirouette 15 times in a single level.); Generosity (Throw a gem into a station that is being used by another player.); Gemologist (Have 10 unused gems in your ship at one time.); Rocket Science (Escape a white dwarf without shooting or ramming it.); Warm Embrace (Survive after being fully enveloped by a bomb trap.); Entrapment (Kill 20 enemies with security guns in a single level.); Overprotective (Have 20 cells at one time on the Metal-Beam shield.); Missile Kiss (Make two Power-Metal missiles collide.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign through in co-op (or with the space-pet) for the level and boss clears and 'All Creatures Great and Small'.",
                "2. On a second pass, target the boss challenge versions one by one - they each need a specific approach rather than raw damage.",
                "3. Farm the skill feats on individual replayed levels: no-damage, no crossing paths, fog-of-war clear, 15 pirouettes, 20 security-gun kills.",
                "4. Do a full no-gems campaign run for 'Love Is All You Need', and separately fill every gem slot on a maxed ship for 'Dressed to the Nines'.",
                "5. Collect one of each ship badge across your runs.",
                "Tip: the no-gems campaign is much easier than it sounds if both players commit to it from level one - you keep the ship stock, learn to rely on turret aim and shield timing instead of upgrades, and it doubles as practice for the no-damage and boss-challenge feats."
            ]
        }
    ]
};
