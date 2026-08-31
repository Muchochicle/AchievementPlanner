// Silksong Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hollow-knight-silksong.json), whose 52 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1030300 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hollow-knight-silksong-achievement-guide",
    "category": "game",
    "gameSlug": "hollow-knight-silksong",
    "icon": "🪡",
    "title": "Silksong Achievement Guide",
    "summary": "A practical guide to all 52 Steam achievements in Silksong (16 hidden). Covers the upgrade and collectible milestones, every boss, and the wishes, quests and multiple endings. Sixteen of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hollow Knight: Silksong has 52 Steam achievements and 16 are hidden. Nineteen are upgrades and collectibles - your first and all Tools, Silk Skills, Crests, Mask Shards, Spool Fragments and Silk Hearts, a map of every area, all Bellways and Ventrica stations, filling the hunter's journal, and rescuing Pharloom's lost fleas. Fourteen are bosses, from the Bell Beast and Lace through the hidden Act 3 superbosses (Phantom, First Sinner, Crust King Khann, Nyleth, Skarrsinger Karmelita, the Clover Dancers). The last nineteen are wishes, NPC questlines, the Citadel song, 100% completion, the two speed achievements, Steel Soul mode, and the game's four hidden endings.",
                "The catalog marks it difficulty 5. 'Twisted Child' and the ending achievements are missable / save-locked, Steel Soul is a no-death run, and 100% completion in Steel Soul ('Steel Heart') plus the sub-5-hour speedrun are the hardest asks.",
                "Tip: take your time on a first save and talk to every NPC, but keep a separate save before the point of no return so you can get each ending, and do 'Twisted Child' (defeat the final boss while cursed by the Rite of Rebirth wish) before you lock yourself out."
            ]
        },
        {
            "heading": "Upgrades & Collectibles",
            "body": [
                "Acquiring your first and then all Tools, Silk Skills and Crests, four then all Mask Shards, two then all Spool Fragments, all Silk Hearts, a map of every area, all of Pharloom's Bellways, the Beastling Call, all Ventrica stations, half then all of the hunter's journal, and rescuing half then all of Pharloom's lost fleas.",
                "The achievements here: Equipped (Acquire your first Tool); Arsenal (Acquire all Tools); Bound (Bind your first Silk Skill); Woven (Bind all Silk Skills); Claimed (Claim your first Crest); Consumed (Claim all Crests); Protected (Acquire 4 Mask Shards); Masked (Acquire all Mask Shards); Restored (Acquire 2 Spool Fragments); Extended (Acquire all Spool Fragments); Regenerated (Acquire all Silk Hearts); Cartographer (Acquire a map of each area); Connected (Open all of Pharloom's Bellways); Bonded (Learn the Beastling Call by defeating the Bell Eater in Act 3, letting the Bell Beast carry you between Bellways.); Transported (Open all of the Citadel's Ventrica Stations); Keen Hunter (Grant Nuu's wish); True Hunter (Receive the Hunter's Memento); Flea Finder (Rescue half of Pharloom's lost fleas); Fleafriend (Rescue all of Pharloom's lost fleas and receive their final gift)."
            ]
        },
        {
            "heading": "Bosses",
            "body": [
                "Defeating the Bell Beast, Lace in Deep Docks, Fourth Chorus, Widow, the Last Judge, the Cogwork Dancers, Trobbio, Lace in the Cradle, and the hidden Act 3 bosses: Phantom, the First Sinner, Crust King Khann, Nyleth, Skarrsinger Karmelita and the Clover Dancers.",
                "The achievements here: Liberated (Defeat the Bell Beast); Pharloom's Welcome (Defeat Lace in Deep Docks); Servant (Defeat Fourth Chorus); Fanatic (Defeat Widow); Judge (Defeat the Last Judge); Last Dance (Defeat the Cogwork Dancers); Tragedian (Defeat Trobbio); White Knight (Defeat Lace in the Cradle); Grey Ghost (Defeat Phantom in the Exhaust Organ, reached through The Mist in Sinner's Road.); Heretic (Defeat the First Sinner in The Slab, after acquiring the Key of the Apostate.); Tyrant (Defeat Crust King Khann inside the Coral Tower during Act 3.); Seed (Defeat Nyleth in a hidden section of the Grand Gate during Act 3.); Diva (Defeat Skarrsinger Karmelita in the new Far Fields area during Act 3.); Lamenter (Save the Green Prince, then defeat the Clover Dancers in Verdania during Act 3.)."
            ]
        },
        {
            "heading": "Wishes, Quests & Endings",
            "body": [
                "Granting your first wish, satiating the Grand Gourmand, completing Shakra's, Garmond's, the Pinstress's and Eva's questlines, buying a Bellhome, learning the Citadel's Threefold song, claiming the Everbloom, the four hidden endings and the Herald's secret ending, 100% completion, the sub-5-hour and sub-30-hour speed achievements, and the two Steel Soul achievements.",
                "The achievements here: Granted (Grant your first wish); Glutton (Satiate the Grand Gourmand); Trail's End (Grant Shakra's wish); Hero's Call (Complete the Hero's Call wish: find Garmond and Zaza in Far Fields three times, then defeat Lost Garmond in the Blasted Steps.); Fatal Resolve (Complete the Fatal Resolve wish: obtain Needle Strike from Pinstress's house, then defeat Pinstress at Mount Fay.); Entwined (Bind Eva in Weavenest Atla, completing her questline.); Resident (Acquire your own Bellhome); Harmonious (Learn the Citadel's Threefold song); Remembrance (Claim the Everbloom from within a distant memory: collect all three Old Hearts and clear the Red Memory.); Weaver Queen (Defeat Grand Mother Silk and bind her power - the standard ending.); Snared Silk (Complete the Silk and Soul wish, then defeat Grand Mother Silk and entrap her with the Soul Snare - the bad ending.); Twisted Child (Complete the Rite of Rebirth wish to curse Hornet, then defeat Grand Mother Silk while cursed.); Sister of the Void (After obtaining all Old Hearts, defeat Lost Lace in The Abyss to free Pharloom - the true ending.); Passing of the Age (Grant the Herald's wish and defeat the final boss at Act 3's conclusion - the secret ending.); Completion (Achieve 100% game completion and finish the game); Speedrunner (Complete the game in under 5 hours); Speed Completion (Achieve 100% game completion and finish the game in under 30 hours); Steel Soul (Finish the game in Steel Soul mode); Steel Heart (Achieve 100% game completion and finish the game in Steel Soul mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore at your own pace on a first save, talking to every NPC and granting wishes as they open up.",
                "2. Collect as you go: all Tools, Silk Skills, Crests, Mask Shards, Spool Fragments, Silk Hearts and area maps, and rescue every flea.",
                "3. Complete the NPC questlines (Shakra, Garmond & Zaza, the Pinstress, Eva) and the hidden Act 3 bosses.",
                "4. Make a backup save before the point of no return, then take each ending in turn - Weaver Queen, Snared Silk, Twisted Child, Sister of the Void and the Herald's secret ending.",
                "5. Do a Steel Soul run for 'Steel Soul' and 'Steel Heart' (100% in Steel Soul), and a sub-5-hour run for 'Speedrunner'.",
                "Tip: 'Twisted Child' and 'Snared Silk' each need a specific wish completed first (Rite of Rebirth, Silk and Soul) - accept and finish those wishes before your final-boss attempt for that ending, or you will have to replay to it."
            ]
        }
    ]
};
