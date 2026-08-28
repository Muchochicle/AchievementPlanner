// Pizza Tower's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/pizza-tower.json), whose 74 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2231450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 62 of 74 ship a real,
//   official Steam description, quoted directly below.
// - The 12 hidden achievements (the five ACH_BOSS_* no-hit boss clears,
//   the five ACH_PRANK_* per-World P Rank sets, and the two
//   ACH_HALLOWEEN_* pumpkin achievements) ship no Steam description.
//   Their unlock conditions here are curatorial, cross-checked against
//   Steam Community 100% achievement guides and the Pizza Tower Wiki:
//   the boss achievements are no-damage clears of the five bosses in
//   tower order (Pepperman, the Vigilante, the Noise, Fake Peppino,
//   Pizzaface); the P Rank achievements mirror the visible S Rank ones
//   one difficulty tier up; the Halloween pair is from the free
//   Halloween Update's hidden-pumpkin hunt and its Tricky Treat level.
// - The grouping (one section per tower floor, then the boss fights,
//   the S/P Rank grinds, and the Halloween content) follows the
//   achievements' own apiname prefixes and level names.
export const GUIDE = {

    slug: "pizza-tower-achievement-guide",
    category: "game",
    gameSlug: "pizza-tower",
    icon: "🍕",
    title: "Pizza Tower Achievement Guide",
    summary: "A practical guide to all 74 Steam achievements in Pizza Tower - the three level challenges on every floor, the five no-hit boss fights, and the S Rank and P Rank grinds.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Pizza Tower has 74 Steam achievements. 12 are hidden: the five no-hit boss clears, the five per-World P Rank sets, and the two Halloween-pumpkin achievements. Nothing is missable - every level and boss is replayable from the map the moment you first reach it.",
                "Most of the list is three specific challenges per level (a route, a combat trick, or a no-damage condition), plus rank grinds: an S Rank on every level in a World, and the much harder P Rank on every level in a World.",
                "Tip: play each level once blind for fun, then come back for its three challenge achievements once you know the layout. Almost none of them can be done reliably on a first run, and trying to force them early just slows you down."
            ]
        },

        {
            heading: "Floor 1",
            body: [
                "John Gutter: John Gutted (destroy all the dead john blocks), Let's Make This Quick (finish in under two minutes), and Primate Rage (get a combo of 99 or more).",
                "Pizzascape: Shining Armor (reach all the priests without bumping a wall once), Spoonknight (parry ten Forknights), and Spherical (kill an enemy while in ball form).",
                "Ancient Cheese: Thrill Seeker (finish without getting hurt by an explosion), Volleybomb (kill a rat with an enemy's dropped bomb), and Delicacy (crumble more than forty-one sets of cheese platforms).",
                "Bloodsauce Dungeon: Very Very Hot Sauce (finish without touching lava), Eruption Man (ride the superjump upward for more than two seconds during the escape), and Unsliced Pizzaman (finish without getting hurt by a pizza cutter).",
                "Oregano Desert: Peppino's Rain Dance (reactivate a totem with the mach dash), Unnecessary Violence (kill all the clerk sausages in the pizzamarts), and Alien Cow (don't get hit by a single cow)."
            ]
        },

        {
            heading: "Floor 2",
            body: [
                "Wasteyard: Ghosted (avoid being touched by the John Ghost), Pretend Ghost (kill 20 or more enemies as a ghost), and Alive and Well (surf every corpse).",
                "Fun Farm: No One Is Safe (kill three unreachable enemies at once with the supertaunt), Cube Menace (find and destroy the Mort Cube), and Good Egg (finish without getting hurt while carrying Mort).",
                "Fastfood Saloon: Non-Alcoholic (destroy nearly every beer bottle), Already Pressed (activate each button only once), and Royal Flush (touch every single card).",
                "Crust Cove: Blowback (kill a cannon goblin with his own bomb), X (uncover all the treasure guys), and Demolition Expert (finish without getting hit by an explosion).",
                "Gnome Forest: Bee Nice (stand next to a bee and taunt), Lumberjack (destroy every wood block), and Bullseye (kill a noise goblin with his own arrow)."
            ]
        },

        {
            heading: "Floor 3",
            body: [
                "Deep Dish Nine: Turbo Tunnel (avoid hitting the ceiling in the room after the John Pillar), Blast'Em Asteroids (destroy all asteroids), and Man Meteor (kill 5 UFOlives in a single bodyslam).",
                "Golf: Primo Golfer (get the highest rank on the courses), Nice Shot (kill three or more enemies in a single stroke), and Helpful Burger (get a burger enemy to knock the ball into the goal).",
                "Pig City: Pan Fried (find the bacon room), Strike! (kill three or more enemies with a single Brick ball), and Say Oink! (take a photo with every Pig City citizen).",
                "Oh Shit!: Can't Fool Me (avoid killing any pizzaboy cardboard), Food Clan (kill ten ninjas by parrying them), and Penny Pincher (avoid getting grabbed by Mr Pinch during the escape).",
                "Peppibot Factory: Unflattening (remove the boxxed form from each priest at least once), Whoop This! (survive the first secret without getting hurt), and There Can Be Only One (destroy every Peppino robot)."
            ]
        },

        {
            heading: "Floor 4",
            body: [
                "Refrigerator-Refrigerador-Freezerator: Frozen Nuggets (free all the frozen birds), Season's Greetings (kill 5 fake santas), and Ice Climber (finish without falling in a pit).",
                "Pizzascare: Cross To Bare (kill thirty ghosts), Haunted Playground (avoid getting hurt by the King Ghost's traps), and Skullsplitter (destroy every single skull block).",
                "Don't Make A Sound: And This... Is My Gun On A Stick! (kill every chasing monster in the escape section), Let Them Sleep (trigger the alarms fewer than six times before the escape), and Jumpspared (avoid getting jumpscared).",
                "WAR: Decorated Veteran (don't get hurt more than three times), Sharpshooter (don't miss more than three shots), and Trip to the Warzone (finish with more than a minute left)."
            ]
        },

        {
            heading: "Boss Fights",
            body: [
                "The five bosses each have a hidden achievement for beating them without getting hurt: The Critic (Pepperman), The Ugly (the Vigilante), Denoise (the Noise), Faker (Fake Peppino), and Face Off (Pizzaface).",
                "Tip: bosses are replayable from the map, and their patterns are fixed. Fight each one a few times just to learn the phases, then go for the no-hit clear once you can predict every attack - Face Off on Pizzaface is the hardest and worth saving for last."
            ]
        },

        {
            heading: "S Rank & P Rank",
            body: [
                "S Ranked #1, S Ranked #2, S Ranked #3, S Ranked #4, and S Ranked #5 unlock for getting an S Rank on every level in Worlds 1 through 5 - an S Rank just needs a high enough score, which mostly means a big combo and a fast exit.",
                "P Ranked #1, P Ranked #2, P Ranked #3, P Ranked #4, and P Ranked #5 are the hidden, much harder version: a P Rank on every level in Worlds 1 through 5. A P Rank needs an unbroken combo held for the entire level (started before you leave the first room), an S-rank score, and all three of the level's secrets collected in the same run.",
                "Tip: chase P Ranks last. Every P Rank run is automatically an S Rank run too, so if you go straight for P Ranks once your movement is solid, the S Rank achievements fall out along the way."
            ]
        },

        {
            heading: "Halloween Content",
            body: [
                "Two hidden achievements come from the free Halloween Update. Pumpkin Munchkin unlocks for finding all 30 hidden pumpkins - one is tucked away in nearly every level (a tune plays and grows louder as you approach), and ten of them are inside the Tricky Treat level.",
                "Tricksy unlocks for collecting all 10 pumpkins in Tricky Treat in a single run - a dedicated chase level that opens once you've found 20 of the pumpkins elsewhere, played with the Ghost Pumpkin pursuing you the whole time."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Clear all five floors once to reach the ending, then go back level by level for the three challenge achievements on each - John Gutter through WAR - now that you know the layouts.",
                "Learn the bosses on replay, then take the no-hit clears (The Critic, The Ugly, Denoise, Faker, Face Off), leaving Face Off for last.",
                "Grind ranks by going straight for P Ranks: World by World, aim for a full-level combo plus all three secrets, which banks S Ranked #1-5 and P Ranked #1-5 together.",
                "If you own the Halloween content, sweep every level for its hidden pumpkin (Pumpkin Munchkin) and finish with a clean Tricky Treat run for Tricksy."
            ]
        }

    ]

};
