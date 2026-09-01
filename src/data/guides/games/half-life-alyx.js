// Half-Life: Alyx Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/half-life-alyx.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   546560 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 25 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "half-life-alyx-achievement-guide",
    "category": "game",
    "gameSlug": "half-life-alyx",
    "icon": "🥽",
    "title": "Half-Life: Alyx Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Half-Life: Alyx (25 hidden). Covers the whole campaign chapter by chapter, the Jeff distillery's two outcomes, the ending choice, the training and gravity-glove feats, and a set of hidden secrets. Twenty-five of the achievements are hidden - the chapter markers and secrets - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Half-Life: Alyx has 42 Steam achievements and 25 are hidden. Most are chapter progress markers - breaking out of the transport, entering the Quarantine Zone, stopping the prisoner train, reaching the Northern Star, the hotel power puzzle, the underground pit, the substation, the barrel room, the aquatic exhibits, the tanker yard, the water tower, waking the Strider, reaching the superweapon, and the final choice. Two are the Jeff distillery's outcomes (escape without killing him, or kill him). The rest are secrets: Russell's map props, the Geiger counter, catching a magazine or a falling bottle, the annoying headcrab, staying near Jeff, bringing Russell vodka, and taking a gnome to the Vault.",
                "The catalog marks it difficulty 3 - it is a story-driven VR game with no missable content in the strict sense (chapters can be replayed), but several achievements are one-shot per playthrough: 'Sound Strategy' vs 'Flat Note' (the two Jeff outcomes), 'Consequences' (the ending choice), and 'Gnome Vault of My Own' (carrying a gnome through the entire final stretch).",
                "Tip: decide the gnome run before you start Chapter 11 - 'Gnome Vault of My Own' needs you to physically carry a garden gnome all the way to the Vault, through combat and puzzles, so pick it up early and never put it down."
            ]
        },
        {
            "heading": "Campaign & the Jeff Distillery",
            "body": [
                "Breaking out of the transport, entering the Quarantine Zone, the snark and playground side bits, the hideout treat, the headcrab-heart squeeze, the tunnel shotgun, stopping the train, reaching the Northern Star, the hotel power puzzle, the underground pit, the rooftop SMG, the substation, the barrel room, and escaping the distillery without killing Jeff or by killing him.",
                "The achievements here: Hit and Run (Break out of the Combine prisoner transport vehicle.); Quaranta Giorni (Enter the Quarantine Zone.); Mazel Tov (Pick up and smash 50 glass bottles.); Good Grub (Feed the snark.); On a Roll (Interact with the playground somehow.); Little Slugger (Represent yourself with a specific prop on Russell's map.); Eye of the Geiger (Measure Russell with the Geiger counter.); Mag-Snagger (Catch Russell's ammo magazine before it hits the ground.); Sustenance (Receive a tasty treat.); Freshly Squeezed (Test your grip on a headcrab heart.); Zombie with a Shotgun (Collect the shotgun.); Xen Garden (Enter the explosive Xen infestation.); Off the Rails (Stop the prisoner transport train.); Checking In (Reach the Northern Star.); Heart-Breaker Hotel (Get creative turning the hotel power back on.); Surface Tension (Escape the underground pit.); Unbonded (Collect the SMG.); Cord-Cutter (Shut down the substation.); Blast From the Past (Defuse a roomful of explosive barrels.); Sound Strategy (Escape the distillery without killing Jeff.); Flat Note (Kill Jeff.)."
            ]
        },
        {
            "heading": "Late Campaign & Training Feats",
            "body": [
                "The annoying headcrab, catching a falling bottle, the aquatic exhibits, the tanker-yard puzzle, the water tower, waking the Strider, reaching the superweapon, the ending choice, looting corpses and living Combine, breaking crates, the first pistol upgrade, gas-tank and shield kills, the Xen grenade, hacking a tripmine, intercepting a grenade mid-flight, staying near Jeff, bringing Russell vodka, and the two gnome achievements.",
                "The achievements here: Crustacean Frustration (Kill the annoying headcrab before it breaks everything.); Hold Your Liquor (Catch a bottle falling out of a cupboard before it breaks and alerts Jeff.); Sea Level (Reach the aquatic exhibits.); Triple Bypass (Solve the tanker yard's electrical puzzle and escape.); High Water March (Start climbing the water tower.); Textbook Jinxing (Wake the Strider.); Point Extraction (Get to the superweapon.); Consequences (Make your choice (the ending).); Dead Giveaway (Loot a corpse.); Smash and Grab (Break open a supply crate with your hands.); Up in Arms (Install your first pistol upgrade.); Pro-Pain (Kill a grunt by shooting their gas tank.); Indirect Approach (Kill a Combine Heavy while their shield is up.); Combine Harvester (Use the gravity gloves to loot an item off a living Combine soldier.); Xen Lootism (Snatch a Xen grenade from its resting place.); Safe Trip (Use the multitool to hack a tripmine.); Deadliest Catch (Use the gravity gloves to intercept an incoming enemy grenade in mid-flight.); Near-Jeff Experience (Stay close to Jeff for 10 seconds - but not too close.); Team Spirit (Bring Russell a bottle of vodka.); Gnome Vault of My Own (Bring a garden gnome with you all the way to the Vault.); Gnome Alone (If you are reading this achievement, Gabe Newell has successfully launched Gnome Chompski into space. If you did not also receive the achievement 'Manufacturing Ascent', Newell has abandoned his plans to shoot Noam Chomsky into space.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, letting the chapter markers unlock as you progress.",
                "2. Do the early secrets on Russell's map (the prop, the Geiger counter, catching the magazine) and pick up a gnome for the gnome run.",
                "3. At the distillery, do one Jeff outcome (escape without killing him, or kill him) - the other needs a replay of that section.",
                "4. Grab the gravity-glove and training feats (looting living Combine, intercepting a grenade, hacking a tripmine) as they come up.",
                "5. Make the ending choice for 'Consequences', and bring the gnome all the way to the Vault.",
                "Tip: 'Team Spirit' (bring Russell vodka) needs a specific vodka bottle carried from the distillery area back to a resin station / Russell - grab it when you see it and don't leave it behind."
            ]
        }
    ]
};
