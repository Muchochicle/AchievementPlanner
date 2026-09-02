// Tom Clancy's Ghost Recon Breakpoint Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tom-clancys-ghost-recon-breakpoint.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2231380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tom-clancys-ghost-recon-breakpoint-achievement-guide",
    "category": "game",
    "gameSlug": "tom-clancys-ghost-recon-breakpoint",
    "icon": "🪖",
    "title": "Tom Clancy's Ghost Recon Breakpoint Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Tom Clancy's Ghost Recon Breakpoint - none are hidden. None of the 50 achievements are hidden - every description is Steam's own text. Covers the four-act Auroa campaign, class and gear progression, provinces and collectibles, the combat-challenge set, the raid, and the faction and Ghost War PvP modes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tom Clancy's Ghost Recon Breakpoint has 50 Steam achievements and none of them are hidden. Breakpoint strands the Ghosts on the tech island of Auroa against the Wolves. None of its 50 achievements are hidden. The list covers the four-act campaign and its key story missions, the class and gear systems, exploration and collectibles across Auroa's provinces, a broad set of combat challenges, the raid, and the faction/PvP modes.",
                "The combat challenges are the bulk of the list - kills with every firearm type, CQC and stealth takedowns, headshot chains, vehicle kills, drone destruction, and specific set-ups (two enemies with one rocket, a helicopter pilot, an enemy 5 seconds after a base jump).",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable; the world stays open after the campaign, and the raid and Ghost War PvP achievements can be done at any point."
            ]
        },
        {
            "heading": "Auroa Campaign",
            "body": [
                "The four-act story, its key missions (A Great Escape, the three 'Evil' missions, Friendly Fire, Point of No Return), killing Walker, and the optional Erewhon backstory dialogue.",
                "The achievements here: A safe haven (Reach the end of Act 1); End of Act 2 (Reach the end of Act 2); End of Act 3 (Reach the end of Act 3); Breakpoint (Reach the end of Act 4); Totsiens! (Finish A GREAT ESCAPE); Cry Wolves (Finish SPEAK NO EVIL, HEAR NO EVIL, SEE NO EVIL); You can't stop us, Nomad! (Finish FRIENDLY FIRE); Change hurts (Finish POINT OF NO RETURN); Here's your World 2.0 (Kill Walker); Tell your story (Complete the optional dialog in Erewhon about your past)."
            ]
        },
        {
            "heading": "Classes, Gear & Progression",
            "body": [
                "Unlocking and ranking up classes, high-end and legendary gear, weapon upgrades and intermarks, perks, level 30, and spending Skell Credits.",
                "The achievements here: Absolute Mastery (Reach Rank 10 with any class); Born in the purple (Wear all High-end equipment); Lord of War (Equip a legendary weapon); Two-faced (Unlock 2 Classes); Four Honor (Unlock 4 Classes); This one is mine (Upgrade a weapon to Mark 3); Prolific gunsmith (Upgrade 20 weapon intermarks in total); A hero of our time (Reach Level 30); Wildland Millionaire (Spend 100.000 Skell Credits); Executive perks (Unlock 10 Perks in the Skills menu)."
            ]
        },
        {
            "heading": "Exploration & Collectibles",
            "body": [
                "Bivouacs, natural resources, provinces, world clues, the mysterious carillons, and blueprints for Weapons on Demand.",
                "The achievements here: Attachments Master (Find 30 Attachments and then equip one in the gunsmith); It's free real estate (Discover 50 different Bivouacs); Expert Herbalist (Pick up 20 different natural resources); A Man of the World (Discover 20 different Provinces); The woe of wit (Find 20 clues in the world); Heart of Darkness (Find all 8 mysterious carillons); Master Craftsman (Find 40 Blueprints and then buy 5 Weapons on Demand at Maria's)."
            ]
        },
        {
            "heading": "Combat Challenges",
            "body": [
                "The large body of combat feats - every firearm type, drones, Behemoths, Wolves, run-overs, undetected kills, CQC set-ups, rocket doubles, pilots, long-range headshot chains, and post-base-jump kills.",
                "The achievements here: Jack of all Guns (Kill an enemy with every firearm type); Drone farmer (Destroy 50 enemy drones); David's Challenge (Kill a Behemoth); Hunter becomes the Hunted (Kill 50 Wolves); What a maniac (Kill 20 enemies by running them over); The night is dark (Kill 12 enemies without getting detected); Snapping turtle (Kill an enemy with CQC from prone camo); Simple Geometry (Kill 2 enemies with a single rocket); You Monster (Destroy a Farmer drone); Sting like a bee (Kill a Breacher, a Rocket Gunner and a Sniper with CQC while in stealth); A brutal stop (Kill a convoy's driver with a sync shot drone); Bang bang (Get 3 headshots with a handgun in 5 seconds); Bird watching (Kill an helicopter's pilot with any weapon); Expert Marksman (Kill 2 enemies more than 200m away with headshots in 3 seconds); Death from above (Kill an enemy 5 seconds after landing from a base jump); Get it off me! (Shoot a wasp while it is still on it's carrier's back)."
            ]
        },
        {
            "heading": "Raid, Faction Missions & PvP",
            "body": [
                "Entering and completing the raid, the daily faction and Elite faction missions, Ghost War PvP, and co-op play.",
                "The achievements here: In the belly of the beast (Enter the Raid); Swiss Army Killer (Kill an enemy in Ghost War as the Panther, Assault, Field Medic and Sharpshooter); War never ends (Finish 8 Faction Missions in a single day); Elite Guerrilla (Finish 5 Elite Faction Missions); Entry-level combat (Win 1 match in Ghost War (Standard)); Squad Goals (Finish 3 missions in Coop); Synchronized and deadly (Kill an enemy shortly after another player in Coop has killed one)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the four-act campaign, letting the act and story-mission achievements unlock and doing the Erewhon backstory conversation for Tell Your Story.",
                "2. Unlock all four classes and rank one to 10, and keep your gear at high-end/legendary while upgrading a weapon to Mark 3.",
                "3. Explore Auroa fully - 50 bivouacs, 20 provinces, 20 clues, the 8 carillons, natural resources and blueprints.",
                "4. Work through the combat challenges during normal play; a few (rocket doubles, the wasp shot, post-base-jump kills) are worth setting up deliberately.",
                "5. Do the faction missions, a few Ghost War PvP matches, some co-op, and the raid with a group.",
                "Tip: turn on the exploration/immersive difficulty settings that remove objective markers only after you've done the collectible achievements - hunting 50 bivouacs and 8 carillons is far faster with map assistance on."
            ]
        }
    ]
};
