// Hellblade: Senua's Sacrifice Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hellblade-senuas-sacrifice.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   414340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 14 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hellblade-senuas-sacrifice-achievement-guide",
    "category": "game",
    "gameSlug": "hellblade-senuas-sacrifice",
    "icon": "🗡️",
    "title": "Hellblade: Senua's Sacrifice Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Hellblade: Senua's Sacrifice (14 hidden). Thirteen are spoiler-free story-progression markers that unlock automatically as you play; the fourteenth is finding every Lorestone. There is nothing missable and no combat or difficulty requirement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hellblade: Senua's Sacrifice has 14 Steam achievements, all of them hidden. Senua, a Pict warrior carrying grief and psychosis, journeys into the Norse underworld to save her lost love's soul. Thirteen of the achievements are story-progression markers - the gate, Surtr's and Valravn's trials, the darkness sequence, the Tower, the swamp, the labyrinth, Gram, the Sea of Corpses, Helheim, Fenrir, and the final battle - and unlock automatically as you reach each point.",
                "The fourteenth, 'Stories From the North', is the only one that needs any effort: find and listen to every Lorestone (rune stones dotted along the path that Druth narrates).",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable for the story markers; only the Lorestones need attention, and a collectible guide covers the ones easy to walk past."
            ]
        },
        {
            "heading": "The Journey",
            "body": [
                "The thirteen spoiler-free story-progression markers, from the gate to the final battle - all unlock automatically as you play.",
                "The achievements here: The Fight Begins (Story progress marker - begin Senua's journey at the gate to Helheim, described here spoiler-free.); Extinguished (Defeat Surtr's trial - a story boss sequence, described here spoiler-free.); Master of Illusion (Defeat Valravn's trial - a story boss sequence, described here spoiler-free.); Source of the Darkness (Story progress marker - reached at a specific point in the journey, described here spoiler-free.); Trust Your Senses (Story progress marker - complete the darkness sequence, described here spoiler-free.); Different Perspectives (Story progress marker - complete the Tower's perspective puzzles, described here spoiler-free.); Cure For The Plague (Story progress marker - complete the plague-swamp sequence, described here spoiler-free.); Escaped (Story progress marker - escape the labyrinth, described here spoiler-free.); Gram Released (Story progress marker - obtain the sword Gram, described here spoiler-free.); Warrior (Story progress marker - survive the Sea of Corpses, described here spoiler-free.); Into the Mountain (Story progress marker - reach Helheim, described here spoiler-free.); Tamed the Beast (Story progress marker - complete the Fenrir sequence, described here spoiler-free.); The Final Battle (Story progress marker - reach the final battle, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Collectible",
            "body": [
                "Finding and studying every Lorestone.",
                "The achievements here: Stories From the North (Find and study every Lorestone scattered through the journey.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the game start to finish; the thirteen story markers unlock on their own as you progress.",
                "2. Watch for Lorestones - upright carved stones, often slightly off the path - and interact with each to hear Druth's story; there are around 44.",
                "3. Use a Lorestone map for any you miss; the last few are the only thing standing between a normal playthrough and 100%.",
                "Tip: the story markers cannot be missed and the game auto-saves at each, so play for the experience and treat this purely as a Lorestone hunt - keep the sound up, since a nearby Lorestone is signposted by the voices growing louder."
            ]
        }
    ]
};
