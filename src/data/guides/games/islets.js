// Islets Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/islets.json), whose 44 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1669420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "islets-achievement-guide",
    "category": "game",
    "gameSlug": "islets",
    "icon": "🏝️",
    "title": "Islets Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Islets (0 hidden). Every achievement carries Steam's own text - the sixteen boss fights, the world-progression and shop steps, the upgrade collection, and the Boss Rush challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Islets has 44 Steam achievements, none hidden. Iko, a little mouse, magnetically pulls floating islands back together into one world, fighting a boss on each. The achievements cover all sixteen bosses, the progression beats (reverse the Stone Witch's curse, open the Final Gate, visit Snoot's shop and the Forgotten Grave's spirit), the shop purchases and Sword/Arrow/Health/Airship upgrades, collecting upgrades (1 / 10 / 30 / all 60), the Scavenger Hunt and hidden nooks, and the Boss Rush (normal, no-death, and Hard).",
                "There are no hidden achievements - the list above is the whole set.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable - the world stays open for cleanup, and Boss Rush is a menu option."
            ]
        },
        {
            "heading": "Bosses",
            "body": [
                "All sixteen boss fights, from Grave Crawler through GutGhoul.",
                "The achievements here: Root of Evil (Defeat Grave Crawler); Something's fishy... (Defeat the Sky Pirates); Tour Trouble (Defeat the Tomb of 1000 Spirits); 9 Lives and 8 Knives (Defeat the Buried Beast); Ticking Timebomb (Defeat the ClockMaker); Coming to Grips (Defeat GrappleBot); A Sky Tail (Defeat MechaRat); Grave Danger (Defeat the Forgotten Grave); Tulip Tussle (Defeat the Runaway Plant); A Swampy Situation (Defeat Swamp Frog); Stone Cold Witch (Defeat the Stone Witch); Exterminator (Defeat Defender Unit); Robot Rampage (Defeat Rogue Bot); Boney Battle (Defeat BoneGolem); Burning Bridges (Defeat FilthPest); Behind the Mask (Defeat GutGhoul)."
            ]
        },
        {
            "heading": "Progression & World",
            "body": [
                "Reversing the Stone Witch's curse, Snoot's shop, the Forgotten Grave's spirit, the Final Gate, post boxes, map markers and the Shrine Shifter, the five paid gates, the hidden nooks and Rainy Plains hiding spots, the Scavenger Hunt, and the deadly pit.",
                "The achievements here: Back to Life (Reverse the Stone Witch's Curse); Turning a New Leaf (Visit Snoots Shop); An Old Friend (Visit the Forgotten Grave's Spirit); The Mystery Beyond (Open the Final Gate); Keeping Up with Friends (Open a Post Box); Pins in the Map (Buy Map Markers); Shrine Bright (Buy the Shrine Shifter); All Mapped Out (Buy Upgrade Markers); Paying Your Dues (Open All 5 Paid Gates); Getting Thirsty (Find a hidden nook); Loving the Rain (Find both hiding spots in Rainy Plains); X Marks the Spot (Complete the Scavenger Hunt); The Pits (Fall into the Deadly Pit of Recently Escaped Spirits)."
            ]
        },
        {
            "heading": "Upgrades & Boss Rush",
            "body": [
                "Sword, Arrow, Health and Airship upgrades, collecting upgrades (1 / 10 / 30 / all 60), Sword and Arrow strength 10, beating a boss at full health, and the Boss Rush challenges.",
                "The achievements here: Strengthened Sword (Upgrade your Sword Strength); Sharper Arrows (Upgrade your Arrow Strength); Feeling Stronger (Upgrade your Health); Can't Touch This (Beat a Boss With Full Health); A Better Bucket (Upgrade your Airship); Top of the Line (Upgrade your Airship Again); A Little Stronger (Collect an Upgrade); Pretty Tough! (Collect 10 Upgrades); Halfway There (Collect 30 Upgrades); Fully Equipped (Collect all 60 Upgrades); All in a Row (Complete Boss Rush); Make it out Alive (Complete Boss Rush Without Dying); The Toughest Warrior (Beat Boss Rush on Hard Difficulty); Strongest Sword (Reach a Sword Strength of 10); Sharpest Arrows (Reach an Arrow Strength of 10)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story and beat all sixteen bosses, buying map markers and upgrade markers so you can see what each island still holds.",
                "2. Backtrack for the 60 upgrades, the Scavenger Hunt, the hidden nooks and the Rainy Plains hiding spots.",
                "3. Max your Sword and Arrow strength to 10, fully upgrade Health and the Airship, and beat a boss without taking a hit.",
                "4. Open the five paid gates and the Final Gate.",
                "5. Clear Boss Rush, then Boss Rush without dying, then Boss Rush on Hard.",
                "Tip: buy the upgrade markers as soon as they are available - they pin every uncollected upgrade on the map, turning 'Fully Equipped' from a blind sweep into a checklist and making the Scavenger Hunt trivial."
            ]
        }
    ]
};
