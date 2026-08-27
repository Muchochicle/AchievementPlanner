// The Messenger's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-messenger.json), whose 48 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   764790 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 48 ship a real,
//   official Steam description, quoted directly below. None of The
//   Messenger's achievements are Steam-hidden.
// - The grouping below (story/boss progression through both the 8-bit
//   and 16-bit halves of the game, shop/upgrade milestones, exploration
//   and collectibles, one-off combat/movement tricks, and the game's
//   dedicated challenge achievements) is read directly from what each
//   achievement's own official description requires, not invented -
//   the game's signature 8-bit-to-16-bit time-travel twist is reflected
//   in achievements like Sweet 16! and Man's Best Fred.
export const GUIDE = {

    slug: "the-messenger-achievement-guide",
    category: "game",
    gameSlug: "the-messenger",
    icon: "🥷",
    title: "The Messenger Achievement Guide",
    summary: "A practical guide to all 48 Steam achievements in The Messenger - the story's bosses across its 8-bit and 16-bit halves, shop upgrades, exploration and collectibles, and its toughest movement and no-death challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "The Messenger has 48 Steam achievements, none of them Steam-hidden. The game opens as a tight 8-bit action-platformer, then reveals a metroidvania-style twist partway through once you can travel between its 8-bit past and 16-bit future - several achievements (Sweet 16!, Man's Best Fred) are tied directly to that structure.",
                "Nothing here is permanently missable on a given save - once you've unlocked time travel, you can freely revisit earlier areas in either era to pick up anything you missed the first time through."
            ]
        },

        {
            heading: "Story & Bosses",
            body: [
                "Nothing To Fear (rescue all Phobekins), Enter The Ninja (beat the intro without dying), and Dungeon Brawler (defeat the Necromancer) mark the opening stretch of the game, before the story properly begins.",
                "Deposit At The River Bank (jump down the big waterfall in Bamboo Creek), My Bad! (defeat the Emerald Golem), I Quill Survive (defeat the Queen of Quills), Leg Day (defeat Colos & Suses), Glacial Peaked (get to the top of the mountain), and Did The Thing (defeat the Arcane Golem) carry you through the 8-bit half's main story areas and bosses.",
                "Sweet 16! (time travel to the future) marks the game's signature twist into its 16-bit half. Was That A Dragon? (defeat the Sky Serpent), More Like 'Dumb In General' (defeat the Demon General), and Man's Best Fred (ride Manfred around the world back to where it all started) continue the story from there.",
                "Hear Today, Gone Tomorrow (make it out of the underwater labyrinth), Not With THAT Altitude (defeat the Demon King), More like EleMENTAL Skylands (complete the Elemental Skylands scenario), and Well, That Was Unsightly (survive the Corrupted Future chase) mark the game's late-game stretch, while Sun And Moon (receive the Key of Love), It Sounds Better On Vinyl (complete the Melody), I'm Your Biggest Phan (defeat Phantom), and The Fake Ending Was Better (beat the game) close out the main story.",
                "Rocked Opus (defeat Octo), Voodoo Told'em (defeat the Voodoo Totem), and Now THAT'S a finale! (defeat the Demon General... again) are further boss fights layered into the story beyond the ending itself."
            ]
        },

        {
            heading: "Shop & Upgrades",
            body: [
                "Losing Weight, Gaining Ground (buy five upgrades in the shop) and Started From The Bottom (buy all upgrades from the shop) track how much of your shop's upgrade tree you've bought, while Hope This Phelps (buy the Swim Dash upgrade from the shop) calls out one specific upgrade by name.",
                "Betcha can't buy just one (make your first purchase at the Craftman's Corner) and Sunk Cost (unclog the Money Sink) are both tied to the shop's other currency-spending features, separate from the main upgrade tree."
            ]
        },

        {
            heading: "Exploration & Collectibles",
            body: [
                "I've Been Around (enter all areas of the world) and Be Lootful And Multiply (destroy a Big Time Shard) both reward thorough exploration of the game's full map.",
                "Challenge Expected (destroy your first Power Seal) and Wheelin' And Sealin' (destroy all Power Seals) track the game's dedicated series of optional platforming challenge rooms, each guarded behind its own Power Seal.",
                "Eye Of The Shareholder (meet Quarble), Fine, I Won't Open It (be lectured on happiness), Bait Taken (be lectured on the power of stories), You Said This Was A Platformer (be lectured on the inner child), and Thanks I hate it (meet the voodoo mask) are all tied to the game's optional, dialogue-heavy side characters and their running jokes."
            ]
        },

        {
            heading: "Combat & Movement Tricks",
            body: [
                "How Ninja Is That? (attack your first enemy projectile), One Hit Wonder (kill a green demon in a single hit), and Welco Metot Henex Tlevel (keep a windmill shuriken going for 15 seconds) are all one-off combat-technique achievements tied to the game's deflection and projectile mechanics.",
                "Walking On Air (execute 15 Cloudsteps without landing or clinging to a wall) rewards a longer, more deliberate movement-tech chain rather than a single trick.",
                "Tumble Hijinx (bump on a few flowers in Rivière Turquoise) and The Lava Is Floor (run on lava) are both playful, easy-to-stumble-into interactions with specific level hazards.",
                "Star Messenger (win the race with a perfect score) is its own separate optional racing challenge, distinct from the platforming Power Seal rooms."
            ]
        },

        {
            heading: "Dedicated Challenges",
            body: [
                "I Swear It's My First Time (make it through Dark Cave without the 'Power of True Sight') and No Argument Here (make it from the beginning of the game to beating the Queen of Quills with zero deaths) are both restriction-based challenge achievements, each removing a tool you'd normally rely on for that stretch of the game.",
                "All in (accept 'THE DEAL') is a distinct, deliberate choice-based achievement rather than a skill challenge - it's there for the taking once you're offered it.",
                "Tip: attempt No Argument Here on a fresh save once you already know the opening stretch of the game well - a zero-death run to the Queen of Quills is far more manageable with route knowledge from an earlier playthrough."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up the boss, shop, and exploration achievements along the way without going far out of your way for any single one.",
                "Handle the combat and movement-trick achievements (How Ninja Is That?, One Hit Wonder, Welco Metot Henex Tlevel, Walking On Air, Tumble Hijinx, The Lava Is Floor) whenever they come up naturally rather than hunting for them in a dedicated session.",
                "Save the Power Seal challenge rooms (Challenge Expected, Wheelin' And Sealin'), Star Messenger, and the two restriction-based challenges (I Swear It's My First Time, No Argument Here) for once you already know the game's movement and combat well - all of them are considerably easier with that knowledge in hand."
            ]
        }

    ]

};
