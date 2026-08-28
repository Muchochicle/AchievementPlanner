// Sable's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data (backend/catalog/games/sable.json),
//   whose 56 achievements were sourced directly from Steam's own
//   achievement schema for appid 757310 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 55 of
//   56 ship a real, official Steam description, quoted directly below.
// - Gastric Bypass is a hidden achievement Steam never describes publicly
//   (confirmed via the same API call) - its description here is
//   curatorial, cross-checked against TrueAchievements/TrueSteamAchievements
//   and a Steam Community 100% guide: climbing into the mouth of the Wyrm
//   (the giant sand worm found in The Wash) and finding the hidden interior
//   cavern inside it.
// - The grouping below (the three main story Trials, the game's 9
//   collectible masks, Chum delivery and the Wyrm, the region-spanning
//   locked doors and environmental puzzles, wildlife/collectibles, the
//   hoverbike, and general exploration milestones) is read directly from
//   what each achievement's own official description requires, not
//   invented.
export const GUIDE = {

    slug: "sable-achievement-guide",
    category: "game",
    gameSlug: "sable",
    icon: "🏍️",
    title: "Sable Achievement Guide",
    summary: "A practical guide to all 56 Steam achievements in Sable - the three main Trials, all 9 collectible masks, the region's locked doors and puzzles, and the game's many wildlife and exploration milestones.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Sable has 56 Steam achievements. Nothing here is permanently missable - it's an open, non-linear exploration game with no fail states, so every door, mask, or collectible you haven't found yet is always still out there waiting.",
                "Most of the list rewards natural exploration of the desert region on your hoverbike rather than any dedicated \"achievement hunting\" detour - masks, doors, and wildlife collectibles are all things you'll run into simply by riding around and investigating what you see."
            ]
        },

        {
            heading: "Story & The Three Trials",
            body: [
                "Just The Two of Us (leave the Ewer, your childhood home) and The Gliding (choose your mask at the end of your journey) bookend the whole game - the very first and very last story beats.",
                "Chum Expert, The Quick and the Curious, and Amateur Historian mark completing Sable's three main Trials - Building a Queendom, An Ancient Race, and Historical Reconnection respectively - each a distinct storyline you can pursue in any order once you're free to explore."
            ]
        },

        {
            heading: "Masks",
            body: [
                "Eight achievements each unlock for finding one specific mask tied to a trade or role in the world: The Machinist Mask, The Beetle Mask, The Climber Mask, The Entertainer Mask, The Guard Mask, The Scrapper Mask, The Merchant Mask, and The Cartographer Mask. The Angler Mask is a ninth, tied specifically to fishing.",
                "Many Different Faces asks for 5 of these masks total, a much lower bar than collecting every one - it'll come naturally partway through mask-hunting rather than requiring a dedicated final push.",
                "Tip: masks aren't just collectibles - each one grants a real gameplay ability (climbing, gliding, discounts, and more), so hunting them early makes the rest of the map meaningfully easier to explore."
            ]
        },

        {
            heading: "Chum & the Wyrm",
            body: [
                "Chum Novice and Honorary Chum track delivering Chum eggs to the Chum Cave - your first, then 60 total - a steady, ongoing task rather than something to farm in one sitting.",
                "Gastric Bypass is a separate, hidden achievement centered on the Wyrm, the giant sand worm found in The Wash: climb into its mouth and find your way through the hidden interior cavern inside it, rather than anything related to the Chum system."
            ]
        },

        {
            heading: "Doors & Puzzles",
            body: [
                "Six achievements each unlock for opening one specific locked door scattered across the region: The Dunboyne, Trellick's Pillar, Shadow Of Neave, Rowleys Way, Centre Of Brunswick, and Balfron Connection - each requiring you to find the matching key or mechanism nearby.",
                "Ceiling Of Stars (solve the puzzle in the Watch), Up On High (unblock the wind tower), Power to the People (return power to Eccria), Thread The Needle (reveal a Hicaric arch monument), Fragile Goods (destroy a Nimoor plant), and Take That! (point the finger at a suspect) are each their own one-off environmental puzzle or investigation, spread across different parts of the map."
            ]
        },

        {
            heading: "Wildlife & Collectibles",
            body: [
                "Glider on the Storm (harvest a lightning crystal), Smoked Out (collect a Hakoan glowworm), Nesting Giant (get into the Hercules Beetle Nest), Got Your Nose (collect an elephant beetle), Squeeze One Out (collect a slicer beetle poo), and A Hard Place (collect an orange ringed beetle) each reward finding one specific creature or material tied to the region's wildlife.",
                "Quite The Catch (catch your first fish) and Vivacious Vivarium (complete the collection in the Vivarium) round out the wildlife-focused achievements, the second being a much larger completionist goal built on top of the first."
            ]
        },

        {
            heading: "The Hoverbike",
            body: [
                "Simoon (build your hoverbike) and Under The Hood (customise it with a Machinist) mark your first real steps with Sable's core traversal tool.",
                "Bike Collector and Bike Aficionado track collected bike parts at 10 and 20, while Bikes Don't Fly (5 seconds of air time), Dune Rider (travel 50km), Bubble Up (hover 1500m using the Perpetual), and Not That Kind Of Gliding (fall from a great height) each reward a specific way of using the bike, accumulating naturally the more you ride."
            ]
        },

        {
            heading: "General Milestones",
            body: [
                "The Gift of Gab and Silver-Tongued Sable track NPC conversations at 15 and 30, while More Than A Box Of Sand and Treasure Tracker do the same for opened chests at 20 and 40.",
                "Badge Hobbyist and Badge Collector (5 and 10 badges), Wrapping Up and Playing Dress Up (6 and 12 clothing items), Big Spender (spend 1000 cuts), and Sticky Paws (climb 500m in total) are all steady, cumulative goals that come together naturally the more you explore and interact with the world."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the opening (Just The Two of Us) and build your hoverbike (Simoon) as soon as it's available, since it makes every other achievement here easier to reach.",
                "Explore broadly rather than beelining any one Trial - masks, doors, wildlife collectibles, and the general milestones (conversations, chests, badges) all accumulate naturally the more ground you cover.",
                "Pursue the three Trials (Building a Queendom, An Ancient Race, Historical Reconnection) once you're comfortable navigating the map, in whichever order interests you most.",
                "Save Gastric Bypass, Vivacious Vivarium, and The Gliding for last - the Wyrm's hidden cavern, full Vivarium completion, and the game's ending are each a natural capstone once everything else on this list is already in hand."
            ]
        }

    ]

};
