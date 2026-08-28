// Far Cry 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/far-cry-3.json), whose 44 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   220240 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group by what each achievement needs: main story,
//   collectibles and progression, outposts and side quests, and combat
//   and skill feats.
export const GUIDE = {
    "slug": "far-cry-3-achievement-guide",
    "category": "game",
    "gameSlug": "far-cry-3",
    "icon": "🔪",
    "title": "Far Cry 3 Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Far Cry 3 - none are hidden. The main-story markers, the collectible and skill/upgrade progression, the outpost and side-quest achievements, and the combat and skill feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Far Cry 3 has 44 Steam achievements and none are hidden. The story is linear-ish across two islands; the rest are open-world completion (outposts, radio towers, relics, letters, memory cards, Survival Guide) plus a set of skill and combat feats.",
                "Almost nothing is missable - the islands stay open after the story and every activity can be done post-credits - so this is a relaxed completion done in one playthrough.",
                "Tip: activate radio towers as you reach each area (they reveal the map and unlock free weapons), liberate outposts stealthily for Unheard, and use an interactive map to sweep relics and letters - the story and side content together cover almost the whole list."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The twelve story markers, described by their objective only - escaping the pirates, the doctor's mushrooms, the burning hotel, the Rakyat initiation, rescuing your friends, surviving Vaas's attack, reaching the South Island, the interrogation, the poker game and the final ceremony.",
                "The achievements here: First Blood (Escape the pirates and survive in the wilderness.); Magic Mushroom (Return to the doctor with the cave mushrooms.); Worst Date Ever (Escape the burning hotel.); One of Us (Complete the Rakyat initiation.); Hands Off My Stoner (Rescue your friend before he is sold as a slave.); Retake Wall Street (Rescue your friend from torture.); Have I Told You? (Discover the definition of insanity.); Taken for Granted (Survive Vaas’s attack in the compound.); Higher Than a Kite (Reach the South Island alive. ); Deep Cover (Don’t blow cover during the interrogation.); Poker Night (Win the poker game.); What a Trip (Attend the final ceremony.)."
            ]
        },
        {
            "heading": "Collectibles & Progression",
            "body": [
                "A 100m freefall, earning 5 and then all skill tattoos, spending $5,000 and buying all attachments for a weapon, activating 9 radio towers, 60 relics, all Letters of the Lost, all memory cards, 50 Survival Guide entries, and the crafting achievements (5 upgrades, 25 syringes, a Special syringe).",
                "The achievements here: Free Fall (Freefall more than 100m and live (Single Player only).); Inked Up (Earn 5 skill tattoos.); Fully Inked (Earn every tattoo by learning all the skills.); Money to Burn (Spend $5000 at the shop.); Aftermarket Junkie (Buy all attachments and paint jobs for one weapon.); Full Bars (Activate 9 radio towers.); Archeology 101 (Gather a total of 60 relics.); Dead Letters (Gather all \"Letters of the Lost\".); Memory to Spare (Gather all the memory cards.); Jungle Journal (Unlock 50 entries in the Survival Guide.); Artsy Craftsy (Craft 5 upgrades for your equipment.); Needle Exchange (Craft 25 syringes.); The Good Stuff (Craft a Special syringe.)."
            ]
        },
        {
            "heading": "Outposts & Side Quests",
            "body": [
                "Liberating 3 and then all outposts, an outpost with no alarm (Unheard), and completing one of each side-quest type (Path of the Hunter, Supply Drop, WANTED Dead, and any Trials of the Rakyat score).",
                "The achievements here: Rebel With a Cause (Liberate 3 outposts.); Island Liberator (Liberate all outposts.); Unheard (Liberate an outpost without triggering an alarm.); Bagged and Tagged (Complete a Path of the Hunter quest.); Road Trip (Complete a Supply Drop quest.); In Cold Blood (Complete a WANTED Dead quest.); Let the Trials Begin (Beat any Trials of the Rakyat score.)."
            ]
        },
        {
            "heading": "Combat & Skill Feats",
            "body": [
                "The one-off feats: two poker achievements, luring and killing a predator, skinning a rare animal, finding the lost Hollywood star, 50 flamethrower kills, a 4-enemy explosion, 25 rock distractions, an aerial takedown, a Repair Tool kill, a 70m bow kill, tagging 25 enemies with the camera, and a 60m dive.",
                "The achievements here: Poker Bully (Win $1500 playing poker.); Hunter Hunted (Lure and kill a predator.); Poacher (Hunt and skin a rare animal.); Say Hi to the Internet (Find the lost Hollywood star.); Heartless Pyro (Kill 50 enemies with the flamethrower (Single Player only).); Love the Boom (Kill 4 enemies simultaneously with one explosion (Single Player only).); Rock Always Wins (Fully distract 25 enemies with rocks (Single Player only).); Never Saw it Coming (Kill an enemy with a takedown from above from a glider, zipline or parachute (Single Player only).); Improper Use (Kill an enemy with the Repair Tool (Single Player only).); Toxophilite (Kill a target from 70m or more with the bow (Single Player only).); Island Paparazzi (Tag 25 enemies using the camera (Single Player only).); Fearless or Stupid (Dive more than 60m (Single Player only).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story across both islands, activating radio towers and liberating outposts (stealthily at least once for Unheard) as you go.",
                "2. Do one of each side-quest type early (Bagged and Tagged, Road Trip, In Cold Blood, Let the Trials Begin) and the poker achievements at a card table.",
                "3. Sweep the collectibles with an interactive map (Archeology 101, Dead Letters, Memory to Spare) and finish the Survival Guide and skill tree.",
                "4. Do the remaining combat feats deliberately: Heartless Pyro (50 flamethrower kills), Love the Boom, Rock Always Wins, Never Saw it Coming, Improper Use, Toxophilite, Island Paparazzi and Fearless or Stupid.",
                "Tip: Improper Use (a kill with the Repair Tool) is the fiddliest - it is a melee weapon found at vehicle-repair points; carry it into a light outpost and finish a distracted enemy with it."
            ]
        }
    ]
};
