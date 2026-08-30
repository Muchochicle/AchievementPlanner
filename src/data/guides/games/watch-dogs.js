// Watch Dogs Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/watch-dogs.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   243470 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "watch-dogs-achievement-guide",
    "category": "game",
    "gameSlug": "watch-dogs",
    "icon": "📱",
    "title": "Watch Dogs Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Watch Dogs - none are hidden. Covers the story acts and Chicago side activities, the combat, chase and skill feats, the investigation finales, collectibles and online modes, and the Bad Blood (T-Bone) DLC campaign.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Watch Dogs has 49 Steam achievements and none of them are hidden. The base game covers completing all five story acts, the Chicago side-activity sets (40 Fixer Contracts, every Gang Hideout, Investigation, Privacy Invasion and Criminal Convoy), a set of combat and police-chase feats, the four multi-part Investigation storylines, the collectibles (Burner Phones, Hotspots, SongSneak songs), the online modes (Hacking, Tailing, Races, ctOS Breach), and unlocking every skill and ctOS tower. The last ten belong to the Bad Blood DLC starring T-Bone.",
                "Nothing is permanently missable - side content and collectibles can all be finished after the story, and there is no difficulty-based achievement. The online achievements need other players (or an accomplice), so do them while the servers are active.",
                "Tip: run the story and the side activities in the same district-by-district sweep - clearing ctOS towers reveals the local activities and collectibles on the map, so liberate each tower first and then mop up everything in that area before moving on."
            ]
        },
        {
            "heading": "Story Acts & Chicago Activities",
            "body": [
                "Taking down Maurice, completing Acts 1 through 5, 40 Fixer Contracts, every Gang Hideout, every Investigation, every Privacy Invasion, every Criminal Convoy, and taking down 20 confirmed criminals with the Crime Detection System.",
                "The achievements here: Hello World (Take down Maurice); End of Line (Complete 40 Fixer Contracts); Basest Base (Complete every Gang Hideout); They Call Him The Vigilante (Complete every Investigation); Peephole (Complete every Privacy Invasion); Road Rage (Complete every Criminal Convoy); Enforcer (Use the Crime Detection System to take down 20 confirmed criminals); Family Man (Complete Act 1); Who Is Raymond Kenney? (Complete Act 2); One Down, One to Go (Complete Act 3); Vengeance (Complete Act 4); Log Off (Complete Act 5)."
            ]
        },
        {
            "heading": "Combat, Chase & Skill Feats",
            "body": [
                "10 vehicle takedowns, stopping 10 civilians from reporting you with non-lethal takedowns, tagging 100 enemies, five different City Games, four kills in a single Focus, escaping 15 police chases and a level 5 chase, escaping 15 police scans and a level 5 scan, shooting out tires on 15 vehicles, and 3 kills with a single IED.",
                "The achievements here: Hard Crash (Perform 10 vehicle take downs); Communication Fail (Using non-lethal takedown, stop 10 civilians from calling to report you); Bookmarked (Tag 100 enemies); Power Cycle (Participate in 5 different City Games); Magic Smoke (Kill 4 enemies within a single instance of Focus); Escape Loop (Escape 15 police chases); Free Radical (Escape a level 5 police chase); White Rabbit Object (Escape 15 police scans); Scanproof (Escape a level 5 police scan); Hardware Fail (Shoot out a tire on 15 different vehicles); Black Hat Trick (Kill 3 enemies with a single IED)."
            ]
        },
        {
            "heading": "Investigations, Collectibles & Online",
            "body": [
                "The four Investigation finales (Human Traffic, Weapons Trade, QR Code, Missing Persons), all 8 Burner Phones, checking in at every Hotspot, unlocking every SongSneak song, the Drinking Game feat, Online Hacking and Tailing invasions, 10 Public Online Races, every ctOS Breach, a clean Online Tailing, every Skill, getting tailed 5 times, and every ctOS Tower.",
                "The achievements here: Revoking Client Privileges (Complete the final mission in the Human Traffic Investigation); Saturday Night Special (Complete the final mission in the Weapons Trade Investigation); Sanity Check (Collect all 8 Burner Phones); Read-only (Complete the final mission in the QR Code Investigation); Darkness Looms (Complete the final mission of the Missing Persons Investigation); Geolocated (Check in at every Hotspot); Disk Space Full (Unlock every song with the SongSneak app); Social Lubricant (Complete level 10 against all 3 Drinking Game opponents); Hackification (Invade and successfully hack 10 enemy Fixers in Online Hacking); Piggyback (Invade and successfully observe 10 enemy Fixers in Online Tailing); Superhighway (Complete 10 Public Online Races); System Mangler (Complete every ctOS Breach); Stealth Cookie (Complete an Online Tailing without being detected); Freeware (Unlock every Skill in the Skills Tree); Traced (Get tailed 5 times); Clear Signals (Unlock every ctOS Tower)."
            ]
        },
        {
            "heading": "Bad Blood (T-Bone DLC)",
            "body": [
                "The T-Bone campaign: completing Acts 1 through 3, 20 Chicago South Club contracts, 20 Militia contracts, 20 Fixer contracts, 29 driving missions, 10 co-op missions, all side investigations, and killing 4 enemies at once with the RC Car.",
                "The achievements here: T-Bone: Friends in Need (Complete Act 1); T-Bone: No Easy Fix (Complete Act 2); T-Bone: Pest Control (Complete Act 3); T-Bone: Mob Ruled (Complete 20 Chicago South Club contracts); T-Bone: Second Amendment (Complete 20 Militia contracts); T-Bone: Unfixable (Complete 20 Fixer contracts); T-Bone: Full Circuit (Complete 29 driving missions); T-Bone: Tag Team (Complete 10 coop missions); T-Bone: Looking For Trouble (Complete all side investigations); T-Bone: Negative Eugenics (Kill 4 enemies at once by blowing up the RC Car)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story acts, but whenever you enter a new district, liberate its ctOS tower first to reveal the local map.",
                "2. Clear that district's Gang Hideouts, Privacy Invasions, Criminal Convoys, Hotspots and Burner Phones before moving on.",
                "3. Work the four Investigation storylines and the Fixer Contracts alongside the story, and do the combat/chase feats (Focus kills, IED kills, tire shots, chase and scan escapes) as they come up naturally.",
                "4. Do the online achievements (Hacking, Tailing, Races, ctOS Breach) in a dedicated session while lobbies are healthy.",
                "5. Play the Bad Blood DLC and clear its contracts, driving missions, co-op missions and the RC Car feat.",
                "Tip: the level 5 police chase and scan escapes are easiest set up deliberately - trigger heat in an area with a train line or a Fixer hideout nearby, then break line of sight and use a hack (blackout, steam pipe, road blocker) to lose the last pursuers."
            ]
        }
    ]
};
