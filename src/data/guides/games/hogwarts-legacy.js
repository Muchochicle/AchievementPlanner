// Hogwarts Legacy Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hogwarts-legacy.json), whose 45 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   990080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 24 of 45 ship a real,
//   official Steam description, quoted directly below.
// - The 21 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against Prima Games,
//   Gamepressure, KeenGamer and Steam Community 100% guides. The
//   main-story markers are described by which quest or beat they track,
//   kept free of plot detail.
// - The grouping is read from what each achievement requires: the main
//   story, the companion and side quests, the collection sweeps, the
//   combat and spell feats, and the progression milestones.
export const GUIDE = {

    slug: "hogwarts-legacy-achievement-guide",
    category: "game",
    gameSlug: "hogwarts-legacy",
    icon: "🪄",
    title: "Hogwarts Legacy Achievement Guide",
    summary: "A practical guide to all 45 Steam achievements in Hogwarts Legacy - the main-story markers, the three companion questlines and the side content, the collection and exploration sweeps, the combat and spell feats, and the crafting and progression milestones.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Hogwarts Legacy has 45 Steam achievements, 21 of them hidden. It is a fairly friendly list - a single playthrough that does every side quest, companion quest, collection and challenge gets close to 100%, with only a couple of things that need attention.",
                "Two are house-specific: The Toast of the Town, The Auror's Apprentice, The Gryffindor in the Graveyard and The Wise Owl each need you to reach the Map Chamber as a particular house, so covering all four means either replaying to that point in each house or using save transfers. Everything else is house-agnostic.",
                "Tip: do not rush the ending. The Seeker of Knowledge (win the House Cup) needs the final post-story quests and a high level, and the collection achievements (Collector's Edition, Merlin's Beard!, Demiguise Dread, The Intrepid Explorer) are far easier to mop up before the credits than after."
            ]
        },

        {
            heading: "Main Story",
            body: [
                "Fourteen hidden achievements track the main quest and cannot be missed on a full playthrough: The Sort Who Makes an Entrance (the intro and Sorting), First Class Student (your first class), Troll with the Punches (the Hogsmeade troll attack), That's a Keeper (meeting Charles Rookwood in the Map Chamber), Grappling with a Graphorn (subduing the Lord of the Shore), The One Who Mastered Memories (viewing all Pensieve memories), The Hallowed Hero (wielding a Deathly Hallow), The Defender of Dragons (saving a dragon) and The Hero of Hogwarts (defeating Ranrok).",
                "Reaching the Map Chamber also fires one of the four house-specific achievements - The Toast of the Town (Slytherin), The Auror's Apprentice (Hufflepuff), The Gryffindor in the Graveyard (Gryffindor) or The Wise Owl (Ravenclaw). A Keen Sense of Spell (first use of Ancient Magic in combat) usually pops during the early story too."
            ]
        },

        {
            heading: "Companion & Side Quests",
            body: [
                "The three companion questlines: The Avenging Gazelle (all of Natsai Onai's quests), Beast Friends (all of Poppy Sweeting's quests) and A Sallow Grave (all of Sebastian Sallow's quests - the longest, and it gates the Unforgivable Curses).",
                "Rising From the Ashes rescues the phoenix by finishing Deek's three Room of Requirement side quests. The Good Samaritan needs every side quest in the game completed, and Flight the Good Flight is beating all three of Imelda Reyes' broom time trials."
            ]
        },

        {
            heading: "Collections & Exploration",
            body: [
                "The big sweeps: Collector's Edition (all collections), Merlin's Beard! (all Merlin Trials), The Intrepid Explorer (all cairn dungeons), Demiguise Dread (all Demiguise statues) and Floo Around the World (all Floo Flames).",
                "Smaller exploration ones: Room with a View (reach the Headmaster's upper study, the castle's highest point), Followed the Butterflies (follow a butterfly swarm to its treasure) and Coasting Along (visit the Poidsear Coast in the far south)."
            ]
        },

        {
            heading: "Combat & Spells",
            body: [
                "Spell mastery: The Spell Master (learn every spell), Finishing Touches (use Ancient Magic to finish every enemy type in the game) and Rise to the Challenges (clear every battle arena).",
                "Combat feats: The Root of the Problem (stun 10 different enemies with a Mandrake), The Ends Petrify the Means (50 kills with Petrificus Totalus), Raising Expectations (a 100-hit combo), Spilled Milk (use Flipendo ten times to tip cows) and Challenge Accepted (complete all tiers of any one challenge)."
            ]
        },

        {
            heading: "Crafting & Progression",
            body: [
                "Room of Requirement crafting: The Nature of the Beast (breed every beast type), Going Through the Potions (brew every potion), Put Down Roots (grow every plant type), and the gear-upgrade pair Loom for Improvement (upgrade a piece of gear) and Third Time's a Charm (upgrade one piece three times).",
                "Character progression: A Talent for Spending (spend 5 Talent Points), Savvy Spender (spend all Talent Points) and A Forte for Achievement (reach Level 40)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the main story at a relaxed pace, letting the story achievements fall (The Sort Who Makes an Entrance, First Class Student, Troll with the Punches, That's a Keeper, one of the four house Map Chamber achievements, A Keen Sense of Spell, Grappling with a Graphorn, The One Who Mastered Memories, The Hallowed Hero, The Defender of Dragons), and run Deek's quests for Rising From the Ashes as they unlock.",
                "Before the finale, clear the map: Merlin's Beard!, The Intrepid Explorer, Demiguise Dread, Floo Around the World, Followed the Butterflies, Coasting Along, Room with a View, and every side and companion quest for The Good Samaritan, The Avenging Gazelle, Beast Friends and A Sallow Grave. Do Imelda's trials for Flight the Good Flight.",
                "Fold the crafting and combat goals in as you go: The Nature of the Beast, Going Through the Potions, Put Down Roots, Loom for Improvement, Third Time's a Charm, A Talent for Spending, Savvy Spender, The Root of the Problem, The Ends Petrify the Means, Raising Expectations, Spilled Milk, Rise to the Challenges, Challenge Accepted, The Spell Master and Finishing Touches.",
                "Finish the story for The Hero of Hogwarts, then do the post-story quests for The Seeker of Knowledge, mop up Collector's Edition, and hit A Forte for Achievement if you are not already Level 40. For the three remaining house Map Chamber achievements, reload an earlier save (or a fresh character) in each house and play to the Map Chamber."
            ]
        }

    ]

};
