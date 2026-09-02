// Terra Nil Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/terra-nil.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1593030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "terra-nil-achievement-guide",
    "category": "game",
    "gameSlug": "terra-nil",
    "icon": "🌍",
    "title": "Terra Nil Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Terra Nil (13 hidden). The hidden achievements are the post-campaign 'B-side' maps, several named individual maps, the whole Arid (Vistas) region, a lava-to-stone trick, and an animal action photo. Everything else - the campaign regions, the full-restore, and the photo, animal and gadget feats - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Terra Nil has 37 Steam achievements, 13 of them hidden. It is a reverse city-builder: you place machines to green a wasteland, then recycle every machine and leave. The visible achievements cover restoring each campaign region (temperate, tropical, polar, continental) fully with gold photos, completely restoring the planet, and the feats (a full-map screenshot, appreciate nature for 60 seconds, burn 25 buildings with one fire, drive 500 tiles with ERW1N, a 5,000-point photo, a bird migration over 60 tiles, the bear and animal-happiness goals).",
                "The 13 hidden achievements are the four post-campaign 'B-side' maps (Abandoned Quarry, Archipelago, Polluted Fjord, Irradiated Sprawl), several individually named maps (the temperate Bay, Tropical Caldera, Subpolar River), the entire Arid region from the free Vistas update, the lava-to-stone 'Minecraft Rocks!' trick, and an animal action photo.",
                "The catalog marks it difficulty 3 (the gold-photo conditions and B-side maps are demanding) and single-playthrough. Nothing is missable; every map stays selectable."
            ]
        },
        {
            "heading": "Campaign Regions",
            "body": [
                "Restoring the River Valley, and fully restoring the tropical, polar, continental and temperate regions with 3 gold photos per mission, plus completely restoring the planet.",
                "The achievements here: Valley of the Wind (Restore the River Valley); Abundant Life (In the tropical region, fully restore all biomes and climate conditions and have 3 gold photos per mission); Beneath the Snow (In the polar region, fully restore all biomes and climate conditions and have 3 gold photos per mission); Oryx and Crake (In the continental region, fully restore all biomes and climate conditions and have 3 gold photos per mission); Global Rejuvenation (Completely restore the planet); Perfectly Pleasant (In the temperate region, fully restore all biomes and climate conditions and have 3 gold photos per mission)."
            ]
        },
        {
            "heading": "Additional Maps",
            "body": [
                "The four post-campaign B-side maps (Abandoned Quarry, Archipelago, Polluted Fjord, Irradiated Sprawl) and the named individual maps (Hill and Dale, Desolate Island, Flooded City, Continental Outskirts, temperate Bay, Tropical Caldera, Subpolar River, Volcanic Glacier).",
                "The achievements here: Open-cast Reclamation (Restore the Abandoned Quarry map (unlocked after the main campaign).); Flooded Isles (Restore the Archipelago map (unlocked after the main campaign).); Northern Glaciation (Restore the Polluted Fjord map (unlocked after the main campaign).); Urban Renewal (Restore the Irradiated Sprawl map (unlocked after the main campaign).); Riverside Restoration (Restore the temperate Bay map.); Greenleaf Vale (Restore the Hill and Dale); Coral Renewal (Restore the Desolate Island); Nature Finds a Way (Restore the Tropical Caldera map.); Feeling Frosty (Restore the Volcanic Glacier); Rock and Stone (Restore the Subpolar River map.); Final Countdown (Restore the Flooded City); Reduce Reuse Recycle (Restore the Continental Outskirts)."
            ]
        },
        {
            "heading": "Arid Region (Vistas Update)",
            "body": [
                "The free Vistas update's Arid maps - the Delta, Canyon and Swamp - and fully restoring all Arid biomes with gold photos.",
                "The achievements here: Okavango Delta (Vistas update: restore the Arid Delta map.); Grand Canyon (Vistas update: restore the Arid Canyon map.); Green Energy (Vistas update: restore the Arid Swamp map.); Everything the Light Touches (Vistas update: fully restore all Arid biomes and climate conditions with 3 gold photos per mission.)."
            ]
        },
        {
            "heading": "Feats & Photos",
            "body": [
                "The screenshot and 60-second nature feats, burning 25 buildings with one fire, the lava-to-stone trick, the marine and lava map variants, the bear and animal-happiness goals, the rock-hopper and 500-tile drive, the 5,000-point and action-shot photos, the ERW1N safari photo, and the 60-tile bird migration.",
                "The achievements here: Aerial View (Use screenshot mode to take a full map screenshot); Screensaver (Appreciate the beauty of nature for at least 60 seconds); Wildfire (Burn down 25 buildings with a single fire); Minecraft Rocks! (Push a lava flow into the sea, then lower the temperature until it snows so the lava cools into stone.); Marine Haven (Restore the tropical archipelago with at least 40% of the map being underwater); Antarctic Oasis (Restore the Volcanic Glacier while still having at least 15 lava tiles); Goldilocks (Have 3 different groups of bears that are fully satisfied in the River Valley); Perfect Location (Construct an Animal Observatory at the intersection of 4 different tier 2 biomes); Fauna Utopia (Complete a mission with all the animal groups ideally satisfied); Call of the Void (Use a rock hopper to fire a rock over the canyon); I Would Drive 500 Tiles (Drive 500 tiles with ERW1N); Better than 4k (Take a photo worth 5000 or more); Caught in the Act (Take a photo of an animal mid-animation (for example, a lion stretching).); Wildlife Safari (Take a photo of ERW1N and at least 3 different animal species); Great Migration (Create a bird migration between sanctuaries that is more than 60 tiles long)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, fully restoring each region (temperate, tropical, polar, continental) with 3 gold photos per mission - the gold-photo conditions are the real skill check.",
                "2. Completely restore the planet for 'Global Rejuvenation'.",
                "3. Play the four post-campaign B-side maps (Abandoned Quarry, Archipelago, Polluted Fjord, Irradiated Sprawl) and the named individual maps.",
                "4. Play the free Vistas update's Arid region - Delta, Canyon, Swamp - and its full-restore with gold photos.",
                "5. Mop up the feats: the lava-to-stone trick, the 25-building fire, the 500-tile drive, the 5,000-point and animal action photos, and the 60-tile bird migration.",
                "Tip: the gold-photo requirement is the whole difficulty - a gold photo needs a dense, varied scene, so hold your Animal Observatory placement until the biomes around it are mature and layered rather than snapping photos of a half-restored map."
            ]
        }
    ]
};
